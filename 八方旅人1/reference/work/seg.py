"""分割奥斯泰拉世界原图：海洋 / 可游玩陆地 / 未知之地（米色羊皮纸），并提取轮廓多边形。

用法：
  python seg.py probe            输出通道可视化 probe_*.png
  python seg.py mask             输出分割结果 seg_mask.png（蓝=海，绿=陆地，黄=未知之地）
  python seg.py poly [eps]       提取多边形写入 seg_polys.json（世界坐标 1600x800）
"""
import json
import os
import sys

import cv2
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "maps", "world_orsterra.png")
W, H = 1600, 800

img = cv2.imdecode(np.fromfile(SRC, dtype=np.uint8), cv2.IMREAD_COLOR)


def imwrite(path, arr):
    cv2.imencode(".png", arr)[1].tofile(path)


small = cv2.resize(img, (W, H), interpolation=cv2.INTER_AREA)
lab = cv2.cvtColor(small, cv2.COLOR_BGR2LAB).astype(np.float32)
L, A, B = lab[..., 0], lab[..., 1] - 128, lab[..., 2] - 128
gray = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY).astype(np.float32)
mean = cv2.blur(gray, (9, 9))
texture = np.sqrt(np.maximum(cv2.blur(gray * gray, (9, 9)) - mean * mean, 0))
blue = cv2.blur(B, (15, 15))
tex = cv2.blur(texture, (15, 15))
light = cv2.blur(L, (15, 15))


def norm(x):
    x = (x - x.min()) / (x.max() - x.min() + 1e-6)
    return (x * 255).astype(np.uint8)


EXCLUDE_NE = [[560, 0], [641, 15], [752, 57], [842, 88], [943, 128], [1000, 163], [1044, 163], [1073, 180],
              [1103, 202], [1132, 217], [1161, 231], [1183, 246], [1205, 268], [1215, 290], [1600, 290], [1600, 0]]
FORCE_LAND = [[775, 80], [905, 128], [905, 168], [775, 168]]
EXCLUDE_SW = [[0, 420], [120, 470], [180, 560], [230, 640], [330, 700], [420, 760], [450, 800], [0, 800]]


def fill_holes(m, max_area):
    inv = (~m).astype(np.uint8)
    n, lbl, stats, _ = cv2.connectedComponentsWithStats(inv, connectivity=4)
    out = m.copy()
    for i in range(1, n):
        if stats[i, cv2.CC_STAT_AREA] < max_area:
            out[lbl == i] = True
    return out


def classify():
    tex_t = float(os.environ.get("TEX", "17"))
    beige_b = float(os.environ.get("BEIGE_B", "13"))
    k = np.ones((9, 9), np.uint8)
    sea_like = (blue < float(os.environ.get("SEA_B", "7"))) & (tex < float(os.environ.get("SEA_T", "30")))
    land = ((tex > tex_t) & ~sea_like).astype(np.uint8) * 255
    land = cv2.morphologyEx(land, cv2.MORPH_CLOSE, k)
    land = cv2.morphologyEx(land, cv2.MORPH_OPEN, k) > 0
    force = np.zeros_like(land, np.uint8)
    cv2.fillPoly(force, [np.array(FORCE_LAND, np.int32)], 1)
    land |= force > 0
    land = fill_holes(land, 2500)
    # 东北方未知之地与大陆之间是一条斜向边界线，边界外侧一律不算陆地
    excl = np.zeros_like(land, np.uint8)
    cv2.fillPoly(excl, [np.array(EXCLUDE_NE, np.int32)], 1)
    cv2.fillPoly(excl, [np.array(EXCLUDE_SW, np.int32)], 1)
    land &= excl == 0
    rest = ~land
    beige = (rest & (blue > beige_b)).astype(np.uint8) * 255
    beige = cv2.morphologyEx(beige, cv2.MORPH_OPEN, np.ones((15, 15), np.uint8))
    beige = cv2.morphologyEx(beige, cv2.MORPH_CLOSE, np.ones((15, 15), np.uint8)) > 0
    beige &= rest
    sea = rest & ~beige
    return sea, beige, land


mode = sys.argv[1] if len(sys.argv) > 1 else "probe"
if mode == "probe":
    imwrite(os.path.join(HERE, "probe_blue.png"), norm(blue))
    imwrite(os.path.join(HERE, "probe_tex.png"), norm(tex))
    imwrite(os.path.join(HERE, "probe_light.png"), norm(light))
    for name, arr in (("blue", blue), ("tex", tex), ("light", light)):
        print(name, "min %.1f max %.1f p10 %.1f p50 %.1f p90 %.1f" % (arr.min(), arr.max(), *np.percentile(arr, [10, 50, 90])))
elif mode == "mask":
    sea, beige, land = classify()
    out = np.zeros((H, W, 3), np.uint8)
    out[sea] = (200, 120, 40)
    out[land] = (60, 170, 60)
    out[beige] = (90, 210, 230)
    vis = cv2.addWeighted(small, 0.45, out, 0.55, 0)
    imwrite(os.path.join(HERE, "seg_mask.png"), vis)
    print("sea %.2f land %.2f beige %.2f" % (sea.mean(), land.mean(), beige.mean()))
elif mode == "poly":
    eps = float(sys.argv[2]) if len(sys.argv) > 2 else 1.6
    sea, beige, land = classify()
    res = {}
    for name, m in (("land", land), ("beige", beige)):
        cnts, _ = cv2.findContours(m.astype(np.uint8) * 255, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        polys = []
        for c in cnts:
            area = cv2.contourArea(c)
            if area < 150:
                continue
            ap = cv2.approxPolyDP(c, eps, True)
            polys.append({"area": round(area), "pts": [[int(p[0][0]), int(p[0][1])] for p in ap]})
        polys.sort(key=lambda p: -p["area"])
        res[name] = polys
        print(name, len(polys), [p["area"] for p in polys[:12]], "points:", [len(p["pts"]) for p in polys[:12]])
    cnts, hier = cv2.findContours(land.astype(np.uint8) * 255, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE)
    holes = []
    for i, c in enumerate(cnts):
        if hier[0][i][3] < 0:
            continue
        area = cv2.contourArea(c)
        if area < 1500:
            continue
        ap = cv2.approxPolyDP(c, eps, True)
        holes.append({"area": round(area), "pts": [[int(p[0][0]), int(p[0][1])] for p in ap]})
    holes.sort(key=lambda p: -p["area"])
    res["holes"] = holes
    print("holes", [(h["area"], len(h["pts"])) for h in holes])
    imwrite(os.path.join(HERE, "seg_land.png"), land.astype(np.uint8) * 255)
    with open(os.path.join(HERE, "seg_polys.json"), "w", encoding="utf-8") as f:
        json.dump(res, f)

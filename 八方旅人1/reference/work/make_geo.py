"""生成 assets/geo.js。

海岸线 / 岛屿 / 内海来自 seg.py 的 seg_polys.json；
地区分界：在陆地掩膜上以各地区地点（data/*.js 的 wpos）为种子做最近邻划分，平滑后提取轮廓。
用法：python make_geo.py [preview]   preview 时额外输出 ov_regions.png
"""
import json
import os
import subprocess
import sys

import cv2
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..", "..")
W, H = 1600, 800

REGIONS = {
    "woodlands": {"name": "森林地区", "en": "Woodlands", "color": "#8fbf76", "terrain": {"glyph": "tree", "fill": "#5f9a52", "stroke": "#3c6a33"}, "fallback": [435, 170]},
    "frostlands": {"name": "雪原地区", "en": "Frostlands", "color": "#c9dbe6", "terrain": {"glyph": "snowpeak", "fill": "#a9c4d6", "stroke": "#6d8ca3"}, "fallback": [735, 165]},
    "flatlands": {"name": "平原地区", "en": "Flatlands", "color": "#cbd98d", "terrain": {"glyph": "grass", "fill": "#b6a95c", "stroke": "#8a7e3a"}, "fallback": [1025, 280]},
    "coastlands": {"name": "海岸地区", "en": "Coastlands", "color": "#9fd0b4", "terrain": {"glyph": "palm", "fill": "#4f9e69", "stroke": "#2f6e45"}, "fallback": [1200, 445]},
    "highlands": {"name": "高原地区", "en": "Highlands", "color": "#c3ab86", "terrain": {"glyph": "mountain", "fill": "#9a8463", "stroke": "#6b5638"}, "fallback": [1250, 640]},
    "sunlands": {"name": "沙漠地区", "en": "Sunlands", "color": "#e6cd8a", "terrain": {"glyph": "dune", "fill": "#c99f55", "stroke": "#a37a35"}, "fallback": [685, 640]},
    "riverlands": {"name": "河川地区", "en": "Riverlands", "color": "#a9d39a", "terrain": {"glyph": "tree", "fill": "#6fae62", "stroke": "#457a3b"}, "fallback": [345, 630]},
    "cliftlands": {"name": "断崖地区", "en": "Cliftlands", "color": "#cfa77e", "terrain": {"glyph": "hill", "fill": "#b48a5e", "stroke": "#7d5b38"}, "fallback": [375, 425]},
}
ORDER = list(REGIONS)

# 额外的分界种子：地点稀疏处用来把分界线拉到原图虚线附近 {region: [[x, y], ...]}
HINTS = {
    # 东南山地没有地点，按地形归高原，避免被半岛上的海岸地区种子吞掉
    "highlands": [[1300, 600], [1380, 640], [1460, 680], [1540, 720], [1360, 760], [1480, 780], [1560, 620]],
}

UNKNOWN = [
    [[560, 0], [1600, 0], [1600, 94], [1571, 95], [1549, 139], [1535, 180], [1513, 168], [1498, 132], [1491, 103], [1454, 88], [1410, 92],
     [1388, 110], [1366, 139], [1381, 168], [1403, 198], [1425, 212], [1432, 234], [1410, 242], [1381, 227], [1352, 220], [1330, 242],
     [1308, 260], [1275, 272], [1242, 278], [1212, 275], [1201, 271], [1000, 200], [700, 60]],
    [[0, 345], [60, 350], [110, 362], [142, 378], [170, 420], [215, 508], [240, 600], [300, 650], [400, 690], [470, 750], [500, 800], [0, 800]],
]


def poly_mask(polys):
    m = np.zeros((H, W), np.uint8)
    for p in polys:
        cv2.fillPoly(m, [np.array(p, np.int32)], 1)
    return m


def main():
    seg = json.load(open(os.path.join(HERE, "seg_polys.json"), encoding="utf-8"))
    land_polys = [p["pts"] for p in seg["land"]]
    holes = [p["pts"] for p in seg.get("holes", [])]
    land = poly_mask(land_polys) & (1 - poly_mask(holes))

    locs = json.loads(subprocess.run(["node", os.path.join(HERE, "dump_locs.js")], capture_output=True, text=True, encoding="utf-8", check=True).stdout)
    seeds = {}
    for rid in ORDER:
        pts = [l["w"] for l in locs.get(rid, [])] + HINTS.get(rid, [])
        seeds[rid] = pts or [REGIONS[rid]["fallback"]]
        print(rid, "seeds", len(seeds[rid]), "(fallback)" if not locs.get(rid) else "")

    dist = np.zeros((len(ORDER), H, W), np.float32)
    for i, rid in enumerate(ORDER):
        s = np.ones((H, W), np.uint8)
        for x, y in seeds[rid]:
            cv2.circle(s, (int(round(x)), int(round(y))), 2, 0, -1)
        dist[i] = cv2.distanceTransform(s, cv2.DIST_L2, 5)
    label = dist.argmin(0)

    # 平滑：对 one-hot 做高斯模糊后取最大，去掉锯齿和孤立碎块
    onehot = np.stack([(label == i).astype(np.float32) for i in range(len(ORDER))])
    for i in range(len(ORDER)):
        onehot[i] = cv2.GaussianBlur(onehot[i], (0, 0), 7)
    label = onehot.argmax(0)

    geo_regions = {}
    for i, rid in enumerate(ORDER):
        comp = ((label == i) & (land > 0)).astype(np.uint8)
        # 外扩 2px 让相邻地区重叠，避免平滑后出现缝隙；海岸由 clip-path 裁齐
        grown = cv2.dilate(((label == i)).astype(np.uint8), np.ones((5, 5), np.uint8)) & cv2.dilate(land.astype(np.uint8), np.ones((9, 9), np.uint8))
        cnts, _ = cv2.findContours(grown * 255, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        fills = []
        for c in sorted(cnts, key=cv2.contourArea, reverse=True):
            if cv2.contourArea(c) < 40:
                continue
            # 离岸小岛上没有任何地点时不归入地区，否则会把地区视野撑得过大
            m = cv2.moments(c)
            cx, cy = m["m10"] / m["m00"], m["m01"] / m["m00"]
            on_isle = any(cv2.pointPolygonTest(np.array(p, np.int32), (cx, cy), False) >= 0 for p in land_polys[1:])
            has_seed = any(cv2.pointPolygonTest(c, (float(x), float(y)), False) >= 0 for x, y in seeds[rid])
            if on_isle and not has_seed:
                continue
            ap = cv2.approxPolyDP(c, 1.5, True)
            fills.append([[int(p[0][0]), int(p[0][1])] for p in ap])
        dt = cv2.distanceTransform(np.pad(comp, 1), cv2.DIST_L2, 5)[1:-1, 1:-1]
        y, x = np.unravel_index(dt.argmax(), dt.shape)
        meta = REGIONS[rid]
        geo_regions[rid] = {
            "name": meta["name"], "en": meta["en"], "color": meta["color"], "terrain": meta["terrain"],
            "label": [int(x), int(y)], "fills": fills,
        }
        print(rid, "fills", len(fills), "points", sum(len(f) for f in fills), "label", (int(x), int(y)), "area", int(comp.sum()))

    geo = {
        "viewBox": [0, 0, W, H],
        "worldFit": {"x": 0, "y": 0, "w": W, "h": H},
        "coastRough": 0.8,
        "world": {
            "name": "奥鲁斯特拉", "en": "Orsterra",
            "intro": "奥鲁斯特拉大陆被划分为 8 个地区，8 位旅人分别从各自的故乡踏上旅途。点击地区查看城镇、迷宫、支线与宝箱。",
        },
        "land": {("main" if k == 0 else "isle%d" % k): p for k, p in enumerate(land_polys)},
        "landHoles": {"main": holes},
        "unknown": UNKNOWN,
        "continents": [{"name": "未 知 之 地", "x": 1230, "y": 110}, {"name": "未 知 之 地", "x": 110, "y": 560}],
        "regions": geo_regions,
        "rivers": [],
        "lakes": [],
    }
    body = json.dumps(geo, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(ROOT, "assets", "geo.js"), "w", encoding="utf-8", newline="\n") as f:
        f.write("// 由 reference/work/make_geo.py 生成，勿手改\nwindow.OT2_GEO = " + body + ";\n")
    print("geo.js bytes", len(body))

    if len(sys.argv) > 1 and sys.argv[1] == "preview":
        img = cv2.imdecode(np.fromfile(os.path.join(HERE, "..", "maps", "world_orsterra.png"), np.uint8), cv2.IMREAD_COLOR)
        img = cv2.resize(img, (W, H), interpolation=cv2.INTER_AREA)
        for i, rid in enumerate(ORDER):
            col = tuple(int(REGIONS[rid]["color"][k:k + 2], 16) for k in (5, 3, 1))
            for f in geo_regions[rid]["fills"]:
                cv2.polylines(img, [np.array(f, np.int32)], True, (0, 0, 0), 3)
                cv2.polylines(img, [np.array(f, np.int32)], True, col, 1)
            for x, y in seeds[rid]:
                cv2.circle(img, (int(x), int(y)), 3, col, -1)
                cv2.circle(img, (int(x), int(y)), 3, (0, 0, 0), 1)
        cv2.imencode(".png", img)[1].tofile(os.path.join(HERE, "ov_regions.png"))


main()

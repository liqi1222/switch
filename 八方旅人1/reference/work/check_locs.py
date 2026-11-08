"""检查 data/*.js 地点 wpos：是否落在陆地上、是否落在本地区划分内（基于 assets/geo.js）。"""
import json
import os
import subprocess

import cv2
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..", "..")
out = os.path.join(HERE, "locs.json")
subprocess.run(["node", os.path.join(HERE, "dump_locs.js"), out], check=True)
locs = json.load(open(out, encoding="utf-8"))
seg = json.load(open(os.path.join(HERE, "seg_polys.json"), encoding="utf-8"))

land = np.zeros((800, 1600), np.uint8)
for p in seg["land"]:
    cv2.fillPoly(land, [np.array(p["pts"], np.int32)], 1)
for p in seg["holes"]:
    cv2.fillPoly(land, [np.array(p["pts"], np.int32)], 0)
sea_dist = cv2.distanceTransform((1 - land).astype(np.uint8), cv2.DIST_L2, 5)

geo_src = open(os.path.join(ROOT, "assets", "geo.js"), encoding="utf-8").read()
geo = json.loads(geo_src[geo_src.index("{"):geo_src.rindex("}") + 1])
owner = {}
for rid, g in geo["regions"].items():
    m = np.zeros((800, 1600), np.uint8)
    for f in g["fills"]:
        cv2.fillPoly(m, [np.array(f, np.int32)], 1)
    owner[rid] = m

bad = 0
for rid, ls in locs.items():
    for l in ls:
        x, y = l["w"]
        xi, yi = int(min(max(x, 0), 1599)), int(min(max(y, 0), 799))
        msgs = []
        if not land[yi, xi]:
            msgs.append("在海上(离岸 %.0f)" % sea_dist[yi, xi])
        if rid in owner and not owner[rid][yi, xi]:
            others = [r for r, m in owner.items() if m[yi, xi]]
            msgs.append("不在本地区分区内 -> %s" % (",".join(others) or "无"))
        if msgs:
            bad += 1
            print(rid, l["id"], l["type"], l["w"], "；".join(msgs))
print("total", sum(len(v) for v in locs.values()), "flagged", bad)

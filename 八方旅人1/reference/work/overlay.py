"""把 seg_polys.json 中的陆地轮廓叠加到原图上，输出 overlay_*.png 供人工检查。
用法：python overlay.py 名称 x0 y0 x1 y1   （世界坐标裁剪范围）
"""
import json
import os
import sys

import cv2
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
img = cv2.imdecode(np.fromfile(os.path.join(HERE, "..", "maps", "world_orsterra.png"), np.uint8), cv2.IMREAD_COLOR)
img = cv2.resize(img, (3200, 1600), interpolation=cv2.INTER_AREA)
polys = json.load(open(os.path.join(HERE, "seg_polys.json"), encoding="utf-8"))
for i, p in enumerate(polys["land"]):
    pts = (np.array(p["pts"]) * 2).astype(np.int32)
    cv2.polylines(img, [pts], True, (0, 0, 255) if i == 0 else (255, 0, 255), 2)
extra = os.path.join(HERE, "..", "..", "assets", "geo_preview.json")
if os.path.exists(extra):
    for name, pts in json.load(open(extra, encoding="utf-8")).items():
        cv2.polylines(img, [(np.array(pts) * 2).astype(np.int32)], True, (0, 200, 255), 2)
name, x0, y0, x1, y1 = sys.argv[1], *map(int, sys.argv[2:6])
crop = img[y0 * 2:y1 * 2, x0 * 2:x1 * 2]
for gx in range((x0 // 50 + 1) * 50, x1, 50):
    cv2.line(crop, ((gx - x0) * 2, 0), ((gx - x0) * 2, crop.shape[0]), (255, 255, 255), 1)
    cv2.putText(crop, str(gx), ((gx - x0) * 2 + 3, 16), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)
for gy in range((y0 // 50 + 1) * 50, y1, 50):
    cv2.line(crop, (0, (gy - y0) * 2), (crop.shape[1], (gy - y0) * 2), (255, 255, 255), 1)
    cv2.putText(crop, str(gy), (3, (gy - y0) * 2 - 3), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)
cv2.imencode(".png", crop)[1].tofile(os.path.join(HERE, f"ov_{name}.png"))
print(crop.shape)

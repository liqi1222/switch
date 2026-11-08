"""在奥斯泰拉世界原图上叠加世界坐标网格并裁剪。

世界坐标 (wx, wy) = 原图像素 (px, py) * 1600 / 4096，即 viewBox 0 0 1600 800。
用法：python grid.py 名称 x0 y0 x1 y1 [网格步长]
输出：同目录下 g_名称.png
"""
from PIL import Image, ImageDraw, ImageFont
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
K = 4096 / 1600
src = Image.open(os.path.join(HERE, "..", "maps", "world_orsterra.png")).convert("RGB")
name, x0, y0, x1, y1 = sys.argv[1], *map(int, sys.argv[2:6])
step = int(sys.argv[6]) if len(sys.argv) > 6 else 25
img = src.crop((int(x0 * K), int(y0 * K), int(x1 * K), int(y1 * K)))
scale = 1100 / img.width
img = img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)
d = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("arial.ttf", 14)
except Exception:
    font = ImageFont.load_default()
s = K * scale
for gx in range(((x0 + step - 1) // step) * step, x1 + 1, step):
    px = (gx - x0) * s
    major = gx % (step * 2) == 0
    d.line([(px, 0), (px, img.height)], fill=(255, 0, 0) if major else (255, 150, 150), width=1)
    if major:
        d.text((px + 2, 2), str(gx), fill=(200, 0, 0), font=font)
for gy in range(((y0 + step - 1) // step) * step, y1 + 1, step):
    py = (gy - y0) * s
    major = gy % (step * 2) == 0
    d.line([(0, py), (img.width, py)], fill=(0, 0, 255) if major else (150, 150, 255), width=1)
    if major:
        d.text((2, py + 2), str(gy), fill=(0, 0, 200), font=font)
img.save(os.path.join(HERE, f"g_{name}.png"))
print(img.size)

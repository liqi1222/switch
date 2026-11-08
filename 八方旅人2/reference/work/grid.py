from PIL import Image, ImageDraw, ImageFont
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
src = Image.open(os.path.join(HERE, "..", "maps", "world_solistia_4096.png")).convert("RGB")
# 世界坐标 (wx, wy) 对应原图 (wx*2+320, wy*2+180)
name, x0, y0, x1, y1 = sys.argv[1], *map(int, sys.argv[2:6])
step = int(sys.argv[6]) if len(sys.argv) > 6 else 25
img = src.crop((x0 * 2 + 320, y0 * 2 + 180, x1 * 2 + 320, y1 * 2 + 180))
scale = 1100 / img.width
img = img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)
d = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("arial.ttf", 13)
except Exception:
    font = ImageFont.load_default()
for gx in range((x0 // step) * step, x1 + 1, step):
    if gx < x0: continue
    px = (gx - x0) * 2 * scale
    major = gx % (step * 2) == 0
    d.line([(px, 0), (px, img.height)], fill=(255, 0, 0) if major else (255, 140, 140), width=1)
    if major: d.text((px + 2, 2), str(gx), fill=(200, 0, 0), font=font)
for gy in range((y0 // step) * step, y1 + 1, step):
    if gy < y0: continue
    py = (gy - y0) * 2 * scale
    major = gy % (step * 2) == 0
    d.line([(0, py), (img.width, py)], fill=(0, 0, 255) if major else (140, 140, 255), width=1)
    if major: d.text((2, py + 2), str(gy), fill=(0, 0, 200), font=font)
img.save(os.path.join(HERE, f"g_{name}.png"))
print(img.size)

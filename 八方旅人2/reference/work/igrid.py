from PIL import Image, ImageDraw, ImageFont
import sys

# usage: igrid.py src out x0 y0 x1 y1 step [outwidth]
src, out = sys.argv[1], sys.argv[2]
x0, y0, x1, y1, step = map(int, sys.argv[3:8])
ow = int(sys.argv[8]) if len(sys.argv) > 8 else 1100
img = Image.open(rf"C:\Users\36301\AppData\Local\Temp\ot2ref\{src}").convert("RGB").crop((x0, y0, x1, y1))
scale = ow / img.width
img = img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)
d = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("arialbd.ttf", 22)
except Exception:
    font = ImageFont.load_default()
for gx in range((x0 // step) * step, x1 + 1, step):
    if gx < x0: continue
    px = (gx - x0) * scale
    major = gx % (step * 2) == 0
    d.line([(px, 0), (px, img.height)], fill=(255, 0, 0) if major else (255, 150, 150), width=1)
    if major: d.text((px + 2, 2), str(gx), fill=(255, 0, 0), font=font)
for gy in range((y0 // step) * step, y1 + 1, step):
    if gy < y0: continue
    py = (gy - y0) * scale
    major = gy % (step * 2) == 0
    d.line([(0, py), (img.width, py)], fill=(0, 0, 255) if major else (150, 150, 255), width=1)
    if major: d.text((2, py + 2), str(gy), fill=(0, 0, 255), font=font)
img.save(rf"C:\Users\36301\AppData\Local\Temp\ot2ref\{out}")
print(img.size)

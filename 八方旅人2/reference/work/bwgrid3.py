from PIL import Image, ImageDraw, ImageFont
import sys

src = Image.open(sys.argv[1]).convert("RGB")
x0, y0, x1, y1 = map(int, sys.argv[2:6])
step = int(sys.argv[6]) if len(sys.argv) > 6 else 50
out = sys.argv[7]
img = src.crop((x0, y0, x1, y1))
scale = float(sys.argv[8])
img = img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)
d = ImageDraw.Draw(img)
try:
    font = ImageFont.truetype("arial.ttf", 14)
except Exception:
    font = ImageFont.load_default()
for gx in range((x0 // step) * step, x1 + 1, step):
    if gx < x0: continue
    px = (gx - x0) * scale
    d.line([(px, 0), (px, img.height)], fill=(255, 0, 0), width=1)
    d.text((px + 2, 2), str(gx), fill=(255, 0, 0), font=font)
for gy in range((y0 // step) * step, y1 + 1, step):
    if gy < y0: continue
    py = (gy - y0) * scale
    d.line([(0, py), (img.width, py)], fill=(0, 160, 255), width=1)
    d.text((2, py + 2), str(gy), fill=(0, 160, 255), font=font)
img.save(out)
print(img.size)

from PIL import Image, ImageDraw, ImageFont
import sys

src_name, out, x0, y0, x1, y1 = sys.argv[1], sys.argv[2], *map(int, sys.argv[3:7])
step = int(sys.argv[7]) if len(sys.argv) > 7 else 20
src = Image.open(rf"C:\Users\36301\AppData\Local\Temp\ot2ref\{src_name}").convert("RGB")
img = src.crop((x0, y0, x1, y1))
scale = 1200 / img.width
img = img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)
d = ImageDraw.Draw(img)
font = ImageFont.truetype("arial.ttf", 14)
for gx in range((x0 // step) * step, x1 + 1, step):
    if gx < x0: continue
    px = (gx - x0) * scale
    major = gx % (step * 5) == 0
    d.line([(px, 0), (px, img.height)], fill=(255, 0, 0) if major else (255, 170, 170), width=1)
    if major: d.text((px + 2, 2), str(gx), fill=(255, 0, 0), font=font)
for gy in range((y0 // step) * step, y1 + 1, step):
    if gy < y0: continue
    py = (gy - y0) * scale
    major = gy % (step * 5) == 0
    d.line([(0, py), (img.width, py)], fill=(0, 0, 255) if major else (170, 170, 255), width=1)
    if major: d.text((2, py + 2), str(gy), fill=(0, 0, 255), font=font)
img.save(rf"C:\Users\36301\AppData\Local\Temp\ot2ref\{out}")
print(img.size)

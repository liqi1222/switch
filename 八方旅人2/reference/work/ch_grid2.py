from PIL import Image, ImageDraw, ImageFont
import sys

src_name, out, x0, y0, x1, y1 = sys.argv[1], sys.argv[2], *map(int, sys.argv[3:7])
scale = float(sys.argv[7]) if len(sys.argv) > 7 else 1.0
src = Image.open(rf"C:\Users\36301\AppData\Local\Temp\ot2ref\{src_name}").convert("RGB")
img = src.crop((x0, y0, x1, y1))
img = img.resize((int(img.width * scale), int(img.height * scale)), Image.LANCZOS)
d = ImageDraw.Draw(img)
font = ImageFont.truetype("arial.ttf", 12)
step = 10
for gx in range(((x0 + step - 1) // step) * step, x1 + 1, step):
    px = (gx - x0) * scale
    if gx % 50 == 0:
        d.line([(px, 0), (px, img.height)], fill=(255, 0, 0), width=1)
        for ty in range(0, img.height, 120):
            d.text((px + 2, ty + 2), str(gx), fill=(255, 255, 0), font=font)
for gy in range(((y0 + step - 1) // step) * step, y1 + 1, step):
    py = (gy - y0) * scale
    if gy % 50 == 0:
        d.line([(0, py), (img.width, py)], fill=(0, 200, 255), width=1)
        for tx in range(0, img.width, 150):
            d.text((tx + 2, py + 2), str(gy), fill=(0, 255, 255), font=font)
img.save(rf"C:\Users\36301\AppData\Local\Temp\ot2ref\{out}")
print(img.size)

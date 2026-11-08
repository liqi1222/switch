import sys
import numpy as np
from PIL import Image

D = "C:\\Users\\36301\\AppData\\Local\\Temp\\ot2ref\\"
# usage: isl.py ref|world x0 y0 x1 y1 satthr   (world coords in world units)
kind = sys.argv[1]
x0, y0, x1, y1 = map(int, sys.argv[2:6])
thr = float(sys.argv[6])
if kind == "world":
    im = Image.open(D + "world.png").convert("RGB").crop((x0 * 2 + 320, y0 * 2 + 180, x1 * 2 + 320, y1 * 2 + 180))
    f = 0.5
else:
    im = Image.open(D + kind).convert("RGB").crop((x0, y0, x1, y1))
    f = 1.0
hsv = np.asarray(im.convert("HSV"), dtype=np.float32)
h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]
# land: orange/tan hue (approx 10..40 of 255) with saturation above thr
mask = (s > thr) & (h > 5) & (h < 45) & (v > 60)
ys, xs = np.nonzero(mask)
print("count", mask.sum())
if len(xs):
    q = lambda a, p: np.percentile(a, p)
    print("bbox(1-99pct)", x0 + q(xs, 1) * f, y0 + q(ys, 1) * f, x0 + q(xs, 99) * f, y0 + q(ys, 99) * f)
    print("centroid", x0 + xs.mean() * f, y0 + ys.mean() * f)
Image.fromarray((mask * 255).astype(np.uint8)).save(D + "isl_mask.png")

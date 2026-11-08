import numpy as np
from PIL import Image
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
src = Image.open(os.path.join(HERE, "..", "maps", "world_solistia_4096.png")).convert("RGB")
# 世界坐标 = (原图坐标 - (320,180)) * 0.5，网格分辨率 = 世界坐标 * 0.5
crop = src.crop((320, 180, 3520, 2048))
W, H = 800, 467
small = crop.resize((W, H), Image.LANCZOS)
small.save(os.path.join(HERE, "small.png"))
hsv = np.asarray(small.convert("HSV")).astype(float)
rgb = np.asarray(small).astype(float)
s = hsv[..., 1]
v = hsv[..., 2]
h = hsv[..., 0]
# 海洋：偏蓝或低饱和的灰白；陆地：暖色高饱和
blue = (rgb[..., 2] > rgb[..., 0] + 4)
mask = (s > float(sys.argv[1]) ) & ~blue
Image.fromarray((s).clip(0, 255).astype(np.uint8)).save(os.path.join(HERE, "sat.png"))
Image.fromarray((mask * 255).astype(np.uint8)).save(os.path.join(HERE, "mask.png"))
print(mask.mean())

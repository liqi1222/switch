import sys
from PIL import Image

# usage: overlay.py ref.webp out.png s ox oy rx0 ry0   (ref_x = rx0 + (wx-ox)*s)
D = "C:\\Users\\36301\\AppData\\Local\\Temp\\ot2ref\\"
ref, out = sys.argv[1], sys.argv[2]
s, ox, oy, rx0, ry0 = map(float, sys.argv[3:8])
R = Image.open(D + ref).convert("RGB")
world = Image.open(D + "world.png").convert("RGB")
# world unit covering ref (0,0)-(W,H)
wx_a = ox + (0 - rx0) / s; wy_a = oy + (0 - ry0) / s
wx_b = ox + (R.width - rx0) / s; wy_b = oy + (R.height - ry0) / s
crop = world.crop((int(wx_a * 2 + 320), int(wy_a * 2 + 180), int(wx_b * 2 + 320), int(wy_b * 2 + 180))).resize(R.size, Image.LANCZOS)
# checkerboard blend
out_im = R.copy()
tile = 120
for ty in range(0, R.height, tile):
    for tx in range(0, R.width, tile):
        if ((tx // tile) + (ty // tile)) % 2 == 0:
            box = (tx, ty, min(tx + tile, R.width), min(ty + tile, R.height))
            out_im.paste(crop.crop(box), box)
out_im = out_im.resize((1100, int(R.height * 1100 / R.width)))
out_im.save(D + out)

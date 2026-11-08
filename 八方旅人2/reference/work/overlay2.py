import sys
from PIL import Image

# usage: overlay2.py ref out s ox oy rx0 ry0 cx0 cy0 cx1 cy1 tile  (ref_x = rx0 + (wx-ox)*s); crop region in ref px
D = "C:\\Users\\36301\\AppData\\Local\\Temp\\ot2ref\\"
ref, out = sys.argv[1], sys.argv[2]
s, ox, oy, rx0, ry0 = map(float, sys.argv[3:8])
cx0, cy0, cx1, cy1, tile = map(int, sys.argv[8:13])
R = Image.open(D + ref).convert("RGB")
world = Image.open(D + "world.png").convert("RGB")
def w2p(rx, ry):
    wx = ox + (rx - rx0) / s; wy = oy + (ry - ry0) / s
    return wx * 2 + 320, wy * 2 + 180
a = w2p(cx0, cy0); b = w2p(cx1, cy1)
W = cx1 - cx0; H = cy1 - cy0
crop = world.crop((int(a[0]), int(a[1]), int(b[0]), int(b[1]))).resize((W, H), Image.LANCZOS)
Rc = R.crop((cx0, cy0, cx1, cy1))
out_im = Rc.copy()
for ty in range(0, H, tile):
    for tx in range(0, W, tile):
        if ((tx // tile) + (ty // tile)) % 2 == 0:
            box = (tx, ty, min(tx + tile, W), min(ty + tile, H))
            out_im.paste(crop.crop(box), box)
sc = 1000 / W
out_im = out_im.resize((1000, int(H * sc)))
out_im.save(D + out)

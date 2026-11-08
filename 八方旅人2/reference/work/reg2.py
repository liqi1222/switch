import sys
import numpy as np
from PIL import Image, ImageFilter

# usage: reg2.py ref rx0 ry0 rx1 ry1 wx0 wy0 wx1 wy1 sxmin sxmax symin symax step mode
D = "C:\\Users\\36301\\AppData\\Local\\Temp\\ot2ref\\"
ref = sys.argv[1]
rx0, ry0, rx1, ry1 = map(int, sys.argv[2:6])
wx0, wy0, wx1, wy1 = map(int, sys.argv[6:10])
sxa, sxb, sya, syb, st = map(float, sys.argv[10:15])
MODE = sys.argv[15] if len(sys.argv) > 15 else "i"

def feat(im):
    if MODE == "s":
        hsv = np.asarray(im.convert("HSV"), dtype=np.float32)
        return hsv[..., 1]
    g = np.asarray(im.convert("L"), dtype=np.float32)
    if MODE == "g":
        gx = np.zeros_like(g); gy = np.zeros_like(g)
        gx[:, 1:-1] = g[:, 2:] - g[:, :-2]
        gy[1:-1, :] = g[2:, :] - g[:-2, :]
        return np.hypot(gx, gy)
    return g

world = Image.open(D + "world.png").convert("RGB")
W = world.crop((wx0 * 2 + 320, wy0 * 2 + 180, wx1 * 2 + 320, wy1 * 2 + 180))
W = W.resize((W.width // 2, W.height // 2), Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.0))
Wm = feat(W)
Hh, Ww = Wm.shape
c1 = np.cumsum(np.cumsum(np.pad(Wm, ((1, 0), (1, 0))), 0), 1)
c2 = np.cumsum(np.cumsum(np.pad(Wm ** 2, ((1, 0), (1, 0))), 0), 1)
F = np.fft.rfft2(Wm, s=(Hh, Ww))
refim = Image.open(D + ref).convert("RGB").crop((rx0, ry0, rx1, ry1))
res = []
for sx in np.arange(sxa, sxb + 1e-9, st):
    for sy in np.arange(sya, syb + 1e-9, st):
        P = refim.resize((int(refim.width / sx), int(refim.height / sy)), Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.0))
        Pm = feat(P)
        ph, pw = Pm.shape
        if ph >= Hh or pw >= Ww: continue
        Pz = (Pm - Pm.mean()) / (Pm.std() + 1e-6)
        K = np.fft.rfft2(Pz[::-1, ::-1], s=(Hh, Ww))
        corr = np.fft.irfft2(F * K, s=(Hh, Ww))
        box = lambda c: c[ph:, pw:] - c[:-ph, pw:] - c[ph:, :-pw] + c[:-ph, :-pw]
        s1 = box(c1); s2 = box(c2); n = ph * pw
        var = np.maximum(s2 - s1 ** 2 / n, 1e-6)
        valid = corr[ph - 1:, pw - 1:][: s1.shape[0], : s1.shape[1]]
        ncc = valid / np.sqrt(var) / np.sqrt(n)
        iy, ix = np.unravel_index(np.argmax(ncc), ncc.shape)
        res.append((float(ncc[iy, ix]), round(sx, 3), round(sy, 3), wx0 + ix, wy0 + iy))
res.sort(reverse=True)
for r in res[:12]:
    print(r)
v, sx, sy, ox, oy = res[0]
print(f"ref_x = {rx0} + (wx - {ox}) * {sx}; ref_y = {ry0} + (wy - {oy}) * {sy}")

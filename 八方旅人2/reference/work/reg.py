import sys
import numpy as np
from PIL import Image, ImageFilter

# usage: reg.py ref.webp rx0 ry0 rx1 ry1 wx0 wy0 wx1 wy1 smin smax
# ref patch (ref pixels) matched inside world window (world units); world.png px = wu*2+320 / wu*2+180
D = r"C:\Users\36301\AppData\Local\Temp\ot2ref\\"
ref = sys.argv[1]
rx0, ry0, rx1, ry1 = map(int, sys.argv[2:6])
wx0, wy0, wx1, wy1 = map(int, sys.argv[6:10])
smin, smax = float(sys.argv[10]), float(sys.argv[11]); MODE = sys.argv[12] if len(sys.argv) > 12 else "g"

def prep(im):
    g = np.asarray(im.convert("L"), dtype=np.float32)
    # gradient magnitude (robust to tint)
    gx = np.zeros_like(g); gy = np.zeros_like(g)
    gx[:, 1:-1] = g[:, 2:] - g[:, :-2]
    gy[1:-1, :] = g[2:, :] - g[:-2, :]
    m = g if MODE == "i" else np.hypot(gx, gy)
    return m

world = Image.open(D + "world.png").convert("RGB")
W = world.crop((wx0 * 2 + 320, wy0 * 2 + 180, wx1 * 2 + 320, wy1 * 2 + 180))
# work at half resolution of world.png => 1 px = 1 world unit
W = W.resize((W.width // 2, W.height // 2), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.8))
Wm = prep(W)
refim = Image.open(D + ref).convert("RGB").crop((rx0, ry0, rx1, ry1))
best = None
for s in np.arange(smin, smax + 1e-9, 0.05):
    # s = ref px per world unit
    P = refim.resize((max(8, int(refim.width / s)), max(8, int(refim.height / s))), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.8))
    Pm = prep(P)
    ph, pw = Pm.shape
    Hh, Ww = Wm.shape
    if ph >= Hh or pw >= Ww: continue
    # normalized cross correlation via FFT
    Pz = (Pm - Pm.mean()) / (Pm.std() + 1e-6)
    F = np.fft.rfft2(Wm, s=(Hh, Ww))
    K = np.fft.rfft2(Pz[::-1, ::-1], s=(Hh, Ww))
    corr = np.fft.irfft2(F * K, s=(Hh, Ww))
    # local sums for normalization
    c1 = np.cumsum(np.cumsum(np.pad(Wm, ((1, 0), (1, 0))), 0), 1)
    c2 = np.cumsum(np.cumsum(np.pad(Wm ** 2, ((1, 0), (1, 0))), 0), 1)
    def box(c):
        return c[ph:, pw:] - c[:-ph, pw:] - c[ph:, :-pw] + c[:-ph, :-pw]
    s1 = box(c1); s2 = box(c2)
    n = ph * pw
    var = np.maximum(s2 - s1 ** 2 / n, 1e-6)
    valid = corr[ph - 1:, pw - 1:][: s1.shape[0], : s1.shape[1]]
    ncc = valid / np.sqrt(var)
    iy, ix = np.unravel_index(np.argmax(ncc), ncc.shape)
    v = ncc[iy, ix] / n
    print(f"s={s:.2f} ncc={v:.4f} at world ({wx0 + ix},{wy0 + iy})")
    if best is None or v > best[0]: best = (v, s, wx0 + ix, wy0 + iy)
v, s, ox, oy = best
print("BEST", best)
# mapping: ref px = rx0 + (wu - ox) * s
print(f"ref_x = {rx0} + (wx - {ox}) * {s:.2f}; ref_y = {ry0} + (wy - {oy}) * {s:.2f}")

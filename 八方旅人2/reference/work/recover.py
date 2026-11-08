import re, difflib

root = r"f:\switch\八方旅人2"
broken = open(root + r"\assets\app.js", encoding="utf-8-sig").read()
raw = broken.encode("gbk", errors="replace")
text = raw.decode("utf-8", errors="replace")

html = open(root + r"\歧路旅人2-地图攻略.html", encoding="utf-8").read()
m = re.search(r"<script>/\* assets/app\.js \*/\n(.*?)\n</script>", html, re.S)
old_lines = m.group(1).split("\n")

def ascii_key(s):
    return re.sub(r"[^\x21-\x7e]", "", s)

old_by_key = {}
for ln in old_lines:
    old_by_key.setdefault(ascii_key(ln), []).append(ln)

out, unresolved = [], []
for i, ln in enumerate(text.split("\n")):
    if "\ufffd" not in ln and "?" not in ln or not re.search(r"[\u4e00-\u9fff\ufffd]", ln):
        out.append(ln)
        continue
    if "\ufffd" not in ln:
        out.append(ln)
        continue
    k = ascii_key(ln.replace("\ufffd", ""))
    cands = old_by_key.get(k)
    if cands:
        out.append(cands[0])
        continue
    best = difflib.get_close_matches(ln, old_lines, n=1, cutoff=0.85)
    if best:
        out.append(best[0])
    else:
        out.append(ln)
        unresolved.append((i + 1, ln))

open(root + r"\assets\app.js", "w", encoding="utf-8", newline="").write("\n".join(out))
print("unresolved:", len(unresolved))
for n, l in unresolved:
    print(n, l.strip()[:160])

"""为单文件生成适当尺寸的拾取截图副本；总览地图与原始资料保持完整。"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import hashlib,json,io,uuid
from PIL import Image
ROOT=Path(__file__).resolve().parents[2]
for g in [1,2]:
 root=ROOT/f'勇者斗恶龙{g}'
 d=json.loads((root/'data/guide.js').read_text('utf-8').removeprefix('window.DQ_GUIDE=').removesuffix(';\n'))
 maps={m['image'] for l in d['locations'] for m in l['maps']}
 images=set()
 def walk(x):
  if isinstance(x,list):
   for v in x:walk(v)
  elif isinstance(x,dict):
   for k,v in x.items():
    if k=='detailImage' and v and v not in maps:images.add(v)
    else:walk(v)
 walk(d)
 outdir=root/'reference/portable';outdir.mkdir(exist_ok=True)
 def convert(rel):
  p=root/rel;body=p.read_bytes();sha=hashlib.sha256(body).hexdigest();out=outdir/(sha[:24]+'-768q60.webp')
  valid=False
  if out.exists():
   try:
    with Image.open(out) as cached:cached.load();valid=True
   except Exception:pass
  if not valid:
   with Image.open(p) as im:
    im.thumbnail((768,576),Image.Resampling.LANCZOS)
    buffer=io.BytesIO();im.save(buffer,'WEBP',quality=60,method=4)
   temporary=out.with_name(out.name+'.'+uuid.uuid4().hex+'.tmp')
   temporary.write_bytes(buffer.getvalue());temporary.replace(out)
  if out.stat().st_size>=len(body):return None
  return rel,{'file':out.relative_to(root).as_posix(),'sourceSha256':sha,'copySha256':hashlib.sha256(out.read_bytes()).hexdigest()}
 with ThreadPoolExecutor(max_workers=6) as pool:result=dict(x for x in pool.map(convert,sorted(images)) if x)
 (root/'reference/portable-assets.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),'utf-8')
 used={v['file'] for v in result.values()}
 for old in outdir.glob('*.webp'):
  if old.resolve().is_relative_to(outdir.resolve()) and old.relative_to(root).as_posix() not in used:old.unlink()
 before=sum((root/x).stat().st_size for x in result);after=sum((root/x['file']).stat().st_size for x in result.values())
 print(f'DQ{g}: {len(result)} pickup screenshots, {before/2**20:.1f} -> {after/2**20:.1f} MiB; overview maps retain full resolution.',flush=True)

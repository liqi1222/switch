"""核对最终数据引用的离线图片并生成逐地点覆盖表；不替代游戏实机核验。"""
from pathlib import Path
import json
from PIL import Image

ROOT=Path(__file__).resolve().parents[2]
for g in [1,2]:
 root=ROOT/f'勇者斗恶龙{g}'
 data=json.loads((root/'data/guide.js').read_text('utf-8').removeprefix('window.DQ_GUIDE=').removesuffix(';\n'))
 assets=set()
 def walk(x):
  if isinstance(x,list):
   for v in x:walk(v)
  elif isinstance(x,dict):
   for k,v in x.items():
    if k in ['image','detailImage'] and v:assets.add(v)
    else:walk(v)
 walk(data)
 size=0
 for rel in sorted(assets):
  path=root/rel
  assert path.resolve().is_relative_to(root.resolve()),rel
  with Image.open(path) as im:
   im.load()
   assert im.width>0 and im.height>0,rel
  size+=path.stat().st_size
 rows=['# 最终攻略逐地点覆盖表','','核对日期：2026-11-08。此表由 `reference/audit.py` 从最终数据生成。数量表示已整理的资料条目，不证明游戏内全部内容已实机复核。','','世界参照图用于地理定位，不是该区域的精确遇敌边界。NPC 数为关键事件记录，普通村民未逐一穷尽。','','| 地点（原文） | 地图 | 收集 | NPC | 商店表 | 遇敌 | Boss | 入口条件 |','| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |']
 for l in data['locations']:
  maps=l['maps'];kind='世界参照' if maps and all(m['image']==data['world']['image'] for m in maps) else f'{len(maps)} 图'
  access='已列' if l.get('access') else '相关流程/来源'
  rows.append(f"| {l['name']}（{l['original']}） | {kind} | {len(l['treasures'])} | {len(l['npcs'])} | {len(l['shops'])} | {len(l['enemies'])} | {len(l['bosses'])} | {access} |")
 (root/'reference/coverage.md').write_text('\n'.join(rows)+'\n','utf-8')
 result={'game':data['meta']['id'],'date':'2026-11-08','decodedAssets':len(assets),'assetBytes':size,'locations':len(data['locations']),'uniqueMapImages':len({m['image'] for l in data['locations'] for m in l['maps']}),'treasures':sum(len(l['treasures']) for l in data['locations']),'steps':sum(len(c['steps']) for c in data['chapters']),'worldPoints':len(data['world']['points']),'errors':[]}
 (root/'reference/verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n','utf-8')
 print(json.dumps(result,ensure_ascii=False),flush=True)

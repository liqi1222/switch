"""Research-only scraper; no game/runtime code. Source facts preserve exact JP nouns."""
import requests, bs4, json, concurrent.futures, pickle, tempfile, pathlib, re
base = 'https://game8.jp'
out = pathlib.Path(__file__).parent
s = bs4.BeautifulSoup(requests.get(base+'/dq2/140906').text, 'html.parser').select_one('.archive-style-wrapper')
locs=[]; cats={'ダンジョン':'dungeon','町・村':'town','その他':'other'};cat=None;chapter=None;chaptermap={}
for el in s.find_all(['h2','h3','a']):
 if el.name=='h2' and 'チャート別' in el.get_text(): cat='chapters'
 elif el.name=='h3':
  t=el.get_text(' ',strip=True)
  if t in cats: cat=cats[t]
  elif t.startswith('チャート'): chapter=int(re.search(r'\d+',t).group())
  elif t=='クリア後': chapter=14
 elif el.name=='a' and '/dq2/' in el.get('href',''):
  name=el.get_text(' ',strip=True);u=el['href'];u=u if u.startswith('http') else base+u
  if cat in cats.values() and name and re.search(r'/dq2/\d+$',u): locs.append({'nameJa':name,'category':cat,'articleId':u.split('/')[-1],'sourceUrl':u})
  elif cat=='chapters' and chapter and name and '▶' not in name: chaptermap.setdefault(u,[]).append(chapter)
seen=set();locs=[x for x in locs if not(x['nameJa'] in seen or seen.add(x['nameJa']))]
ids=['150575','150693','151065','734100','734104','734105','734107','734108','735246','735685','735754','735758','736142','688081','140904','140906','737072','736485','736283','736404','140905']
urls=list(dict.fromkeys([x['sourceUrl'] for x in locs]+[base+'/dq2/'+x for x in ids]+['https://gamewith.jp/dq1-2/481200']))
def fetch(u):
 try:
  r=requests.get(u,timeout=35);r.raise_for_status();return u,r.text
 except Exception as e:return u,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool: pages=dict(pool.map(fetch,urls))
pickle.dump(pages,open(pathlib.Path(tempfile.gettempdir())/'dq2_research_pages.pkl','wb'))
def txt(x):return x.get_text(' ',strip=True)
def img(x):return x.get('data-src') or x.get('src')
counts={}
for loc in locs:
 u=loc['sourceUrl'];s=bs4.BeautifulSoup(pages[u],'html.parser');a=s.select_one('.archive-style-wrapper')
 counts[loc['articleId']]=counts.get(loc['articleId'],0)+1
 loc.update(chapterIds=sorted(set(chaptermap.get(u,[]))),id='dq2-'+loc['articleId']+'-'+str(counts[loc['articleId']]),verifiedDate='2026-11-08',version='2025 HD-2D ドラゴンクエストI＆II / DQII',mapImages=[],treasures=[],shops=[],enemies=[])
 if not a:loc['coverage']={'source':'unavailable'};continue
 # Never mix legacy SFC/2019 values into HD-2D facts.
 for h in list(a.find_all('h2')):
  if re.search('過去作|関連記事',txt(h)):
   for e in list(h.next_siblings):e.extract()
   h.extract();break
 h2='';h3=''
 for el in a.find_all(['h2','h3','h4','img','table']):
  if el.name=='h2':h2=txt(el);h3=''
  elif el.name in ['h3','h4']:h3=txt(el)
  elif el.name=='img':
   if el.find_parent('template'):continue
   alt=el.get('alt','');src=img(el)
   if 'マップ' in h2 and re.search(r'https://.*game8.jp',src or '') and alt and not re.search('アイコン|メダル|チェック|^右|^左',alt) and int(el.get('width','0') or 0)>200:
    loc['mapImages'].append({'floorLabel':alt,'imageLabel':alt,'url':src,'sourceUrl':u})
  elif el.name=='table' and not el.find_parent('table') and not el.find_parent('template'):
   if ('宝箱' in h2 or 'マップ' in h2) and 'アイコンの説明' not in txt(el):
    floor=None
    for cell in el.find_all(['th','td']):
     if cell.find_parent('table')!=el:continue
     if cell.name=='th':floor=txt(cell);continue
     tpl=cell.find('template');pop=cell.select_one('.js-detail-tooltip')
     if pop:
      name=''.join(str(t) for t in pop.find_all(string=True,recursive=False)).strip() or txt(pop).split('マップ画像')[0].strip()
      imgs=[img(im) for im in tpl.select('img') if 'overlay-' not in im.get('alt','')] if tpl else []
      loc['treasures'].append({'id':loc['id']+'-treasure-'+str(len(loc['treasures'])+1),'itemJa':name,'floor':floor,'mapNumber':None,'mapNumberStatus':'source-not-numbered','mapImageUrl':imgs[0] if imgs else None,'sceneImageUrl':imgs[1] if len(imgs)>1 else None,'sourceUrl':u,'howZh':'按来源楼层地图与物品局部截图定位；容器及开锁条件见中文补充。'})
     else:
      tx=txt(cell);imgs=[img(im) for im in cell.select('img') if img(im)]
      clean=tx.replace('拡大','').strip()
      if clean and imgs and floor and ('階' in floor or loc['nameJa'] in floor) and 'アイテムなし' not in tx and len(tx)<80:
       loc['treasures'].append({'id':loc['id']+'-treasure-'+str(len(loc['treasures'])+1),'itemJa':tx.replace('拡大','').strip(),'floor':floor,'mapNumber':None,'mapNumberStatus':'source-not-numbered','mapImageUrl':imgs[0],'sceneImageUrl':imgs[1] if len(imgs)>1 else None,'sourceUrl':u,'howZh':'按来源楼层与局部截图检查拾取点。'})
   if re.search('ショップ|販売アイテム',h2):
    rows=[]
    for row in el.find_all('tr',recursive=False):
     cs=row.find_all(['th','td'],recursive=False)
     if len(cs)>=2:rows.append([txt(c) for c in cs])
    if rows:loc['shops'].append({'nameJa':h3 or h2,'rows':rows,'sourceUrl':u})
   if 'モンスター' in h2:
    for row in el.find_all('tr',recursive=False):
     cs=row.find_all('td',recursive=False)
     if len(cs)>=3 and not re.search('モンスター|アイテム',txt(cs[0])):loc['enemies'].append({'nameJa':txt(cs[0]),'gold':txt(cs[1]),'exp':txt(cs[2]),'dropsJa':[txt(c) for c in cs[3:]],'sourceUrl':u})
 # Shared articles contain several distinct locations: retain only their own floor.
 if loc['articleId'] in ['273267','736294','736405']:
  loc['treasures']=[t for t in loc['treasures'] if loc['nameJa'] in (t['floor'] or '')]
  loc['mapImages']=[m for m in loc['mapImages'] if loc['nameJa'] in m['floorLabel'] or (loc['articleId']=='273267' and '南' not in m['floorLabel'] and '北' not in m['floorLabel'])]
 loc['mapImages']=list({m['url']:m for m in loc['mapImages']}.values())
 loc['factHeadingsJa']=[txt(h) for h in a.find_all(['h2','h3','h4'])]
 loc['coverage']={'locations':'verified-index','maps':'verified' if loc['mapImages'] else 'source-not-explicit','treasures':'verified-items-and-floor' if loc['treasures'] else 'source-not-explicit','shops':'verified' if loc['shops'] else 'source-not-explicit','enemies':'verified' if loc['enemies'] else 'source-not-explicit','npcs':'pending-chapter-synthesis','mapNumbers':'not-inferred'}
facts={'meta':{'game':'Dragon Quest II HD-2D Remake','releaseYear':2025,'verifiedDate':'2026-11-08','locale':'zh-CN','translationPolicy':'JP names retained; Chinese place names are working translations unless official localization verified.','oldVersionPolicy':'Stop before each 過去作 section; legacy-version values excluded.','coordinatesPolicy':'No invented coordinates; source screenshots only.'},'locations':locs,'sourceUrls':urls}
(out/'dq2_source_facts.json').write_text(json.dumps(facts,ensure_ascii=False,indent=2),encoding='utf-8')
print('PAGES',len(pages),'LOCATIONS',len(locs),'MAPS',sum(len(x['mapImages']) for x in locs),'TREASURES',sum(len(x['treasures']) for x in locs),'ENEMIES',sum(len(x['enemies']) for x in locs),'SHOPS',sum(len(x['shops']) for x in locs))

import requests,bs4,json,pathlib,pickle,tempfile,concurrent.futures,re
out=pathlib.Path(__file__).parent;cachepath=pathlib.Path(tempfile.gettempdir())/'dq2_research_pages.pkl';pages=pickle.load(open(cachepath,'rb'))
old=json.loads((out/'gamewith_crosscheck.json').read_text(encoding='utf-8'))
links={r['sourceUrl']:r['labelJa'] for r in old['records']}
for id in ['481245','481246']:
 u='https://gamewith.jp/dq1-2/'+id;s=bs4.BeautifulSoup(pages[u],'html.parser').select_one('#article-body')
 for h in list(s.find_all('h2')):
  if '関連記事' in h.get_text():
   for e in list(h.next_siblings):e.extract()
   h.extract();break
 for a in s.select('a[href]'):
  if re.search(r'https://gamewith.jp/dq1-2/\d+$',a['href']) and a.get_text(strip=True) and a['href'] not in links:links[a['href']]=a.get_text(' ',strip=True)
def fetch(u):
 try:
  r=requests.get(u,timeout=35);r.raise_for_status();return u,r.text
 except Exception as e:return u,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:pages.update(dict(pool.map(fetch,[u for u in links if u not in pages])))
pickle.dump(pages,open(cachepath,'wb'))
records=[];regions=[]
for u,label in links.items():
 s=bs4.BeautifulSoup(pages[u],'html.parser');a=s.select_one('#article-body')
 if not a:continue
 for h in list(a.find_all('h2')):
  if '関連記事' in h.get_text():
   for e in list(h.next_siblings):e.extract()
   h.extract();break
 rec={'sourceUrl':u,'labelJa':label,'titleJa':s.title.get_text(),'version':'2025 HD-2D DQII','verifiedDate':'2026-11-08','mapImages':[],'facilityImages':[],'tables':[],'treasureConstraints':[],'shops':[],'encounterGroups':[]}
 h2='';h3=''
 for el in a.find_all(['h2','h3','h4','img','table','ol']):
  if el.name=='h2':h2=el.get_text(' ',strip=True);h3=''
  elif el.name in ['h3','h4']:h3=el.get_text(' ',strip=True)
  elif el.name=='img':
   if el.find_parent('noscript'):continue
   src=el.get('preview') or el.get('data-original') or el.get('data-src')
   if not src or not src.startswith('http'):continue
   im={'floorLabel':h3 or h2,'imageLabel':el.get('alt',''),'url':src,'sourceUrl':u}
   if '店一覧' in h2:rec['facilityImages'].append(im)
   elif 'マップ' in h2 and not el.find_parent('table') and not el.find_parent('ol'):rec['mapImages'].append(im)
  elif el.name=='table' and not el.find_parent('table'):
   rows=[[c.get_text(' ',strip=True) for c in row.find_all(['th','td'],recursive=False)] for row in el.find_all('tr',recursive=False)];rows=[r for r in rows if r]
   if rows:rec['tables'].append({'sectionJa':h2,'subsectionJa':h3,'rows':rows})
   if 'マップ' in h2 and ('宝箱' in h2 or 'アイテム' in h2):
    floor=h3
    for cell in el.find_all(['th','td']):
     if cell.find_parent('table')!=el:continue
     if cell.name=='th':floor=cell.get_text(' ',strip=True);continue
     tx=cell.get_text(' ',strip=True)
     if not tx or len(tx)>120:continue
     key=re.search('(?:※|要)(.*?鍵)',tx)
     rec['treasureConstraints'].append({'itemJa':re.split('[※要]',tx)[0].strip(),'floorJa':floor,'requiredKeyJa':key.group(1).strip() if key else None,'sourceUrl':u})
  elif el.name=='ol' and 'shop_v2' in el.get('class',[]):
   inventory=[]
   for sel in el.select('._selection'):
    cs=sel.find_all('span',recursive=False)
    for i in range(3,len(cs),3):
     if i+2>=len(cs):break
     anchor=cs[i].find('a');name=anchor.get_text(' ',strip=True) if anchor else cs[i].get_text(' ',strip=True)
     inventory.append({'itemJa':name,'performanceJa':cs[i+1].get_text(' ',strip=True),'priceJa':cs[i+2].get_text(' ',strip=True),'storyAdded':'※' in cs[i].get_text()})
   if inventory:rec['shops'].append({'nameJa':h3 or h2,'inventory':inventory,'sourceUrl':u})
  elif el.name=='ol' and 'monster' in el.get('class',[]):
   enemies=[]
   for li in el.find_all('li',recursive=False):
    head=li.select_one('._head a')
    if not head:continue
    values={d.get('sub'):d.get_text(' ',strip=True) for d in li.select('[sub]')}
    drops=[]
    for d in li.select('._content > div'):
     if d.get('class'):continue
     drops.extend(x.get_text(' ',strip=True) for x in d.select('a'))
    enemies.append({'nameJa':head.get_text(' ',strip=True),'hpEstimateJa':values.get('HP'),'exp':values.get('経験値'),'goldJa':values.get('ゴールド'),'dropsAndStealJa':drops,'sourceUrl':u,'monsterSourceUrl':head['href']})
   scope='surrounding-field' if '周辺' in h2 else 'dungeon-or-source-section'
   group={'sectionJa':h2,'subsectionJa':h3,'scope':scope,'enemies':enemies,'sourceUrl':u,'phaseZh':'来源未把全部条目标注为同一剧情阶段；不可全部视为初访时出现。'}
   rec['encounterGroups'].append(group)
   if scope=='surrounding-field':regions.append(group|{'id':'dq2-field-'+u.split('/')[-1],'mapContextZh':'周边野外范围按来源章节命名；不编造区域边界或怪物坐标。'})
 rec['mapImages']=list({m['url']:m for m in rec['mapImages']}.values());rec['facilityImages']=list({m['url']:m for m in rec['facilityImages']}.values())
 records.append(rec)
(out/'gamewith_crosscheck.json').write_text(json.dumps({'meta':old['meta'],'records':records},ensure_ascii=False,indent=2),encoding='utf-8')
(out/'dq2_field_regions.json').write_text(json.dumps({'meta':{'version':'2025 HD-2D DQII','verifiedDate':'2026-11-08','coverageZh':'仅有专门周辺モンスター标题的来源记录可列为野外怪物；无坐标及边界推测。'},'regions':regions},ensure_ascii=False,indent=2),encoding='utf-8')
print('DETAILED SOURCES',len(records),'FIELDS',len(regions),'FIELD ENEMIES',sum(len(g['enemies']) for g in regions),'SHOP ITEMS',sum(len(sh['inventory']) for r in records for sh in r['shops']),'FACILITY IMAGES',sum(len(r['facilityImages']) for r in records),'LOCKS',sum(sum(bool(t['requiredKeyJa']) for t in r['treasureConstraints']) for r in records))

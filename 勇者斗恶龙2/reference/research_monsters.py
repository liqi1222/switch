import requests,bs4,pickle,tempfile,pathlib,concurrent.futures,json,re
out=pathlib.Path(__file__).parent;cp=pathlib.Path(tempfile.gettempdir())/'dq2_research_pages.pkl';p=pickle.load(open(cp,'rb'))
u='https://gamewith.jp/dq1-2/481203';s=bs4.BeautifulSoup(p[u],'html.parser').select_one('#article-body')
links={a['href']:a.get_text(' ',strip=True) for a in s.select('ol.monster ._head a')}
def fetch(u):
 try:
  r=requests.get(u,timeout=30);r.raise_for_status();return u,r.text
 except Exception as e:return u,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
 for n,(u,h) in enumerate(pool.map(fetch,[u for u in links if u not in p]),1):
  p[u]=h
  if n%50==0:print('FETCHED',n,flush=True)
pickle.dump(p,open(cp,'wb'))
records=[];groups={};failures=[]
for u,name in links.items():
 s=bs4.BeautifulSoup(p[u],'html.parser');a=s.select_one('#article-body')
 if not a:failures.append(u);continue
 rec={'nameJa':name,'sourceUrl':u,'version':'2025 HD-2D DQII','verifiedDate':'2026-11-08','appearances':[],'stats':{},'dropsAndStealJa':[]}
 # First current monster card belongs to the article subject.
 li=a.select_one('ol.monster li')
 if li:
  rec['stats']={d.get('sub'):d.get_text(' ',strip=True) for d in li.select('[sub]')}
  rec['dropsAndStealJa']=[x.get_text(' ',strip=True) for x in li.select('._content a')]
  for label in li.select('._content > div'):
   if 'ドロップ' in label.get_text(' ',strip=True) and label.get('class'):
    nxt=label.find_next_sibling('div');rec['dropJa']=nxt.get_text(' ',strip=True) if nxt else None
   if '盗人刈り' in label.get_text(' ',strip=True) and label.get('class'):
    nxt=label.find_next_sibling('div');rec['stealJa']=nxt.get_text(' ',strip=True) if nxt else None
 for h in a.select('h2'):
  if '出現場所' not in h.get_text():continue
  for el in h.next_siblings:
   if getattr(el,'name',None)=='h2':break
   if getattr(el,'name',None):
    for table in ([el] if el.name=='table' else el.find_all('table')):
     for cell in table.find_all('td'):
      text=cell.get_text('',strip=True)
      if text and len(text)<100:
       entry={'labelJa':text,'sourceUrl':u,'mapSourceUrls':[x['href'] for x in cell.select('a[href]')]}
       if text not in [x['labelJa'] for x in rec['appearances']]:rec['appearances'].append(entry)
 if not rec['appearances']:rec['coverage']='source-no-explicit-appearance-table'
 else:rec['coverage']='verified-individual-appearance-labels'
 for app in rec['appearances']:
  label=app['labelJa']
  # Only exact named field/sea labels, no broad town-article aggregations.
  if not re.search('周辺|地方|海上|海底|深海|北部|南部|東部|西部|南の島|スライム島',label):continue
  # Shrine/dungeon itself is not a field without an explicit surrounding qualifier.
  if re.search('洞窟|宝物庫|神殿|聖域|海底基地|回廊|沈没船|幽霊船|すみか',label) and not re.search('周辺|海上',label):continue
  group=groups.setdefault(label,{'id':'dq2-field-detail-'+str(len(groups)+1).zfill(2),'sectionJa':label,'subsectionJa':'','scope':'individual-monster-exact-field-label','enemies':[],'sourceUrls':[],'verifiedDate':'2026-11-08','phaseZh':'区域按怪物详细页的明确出现场所，不把城镇页宽泛周边表当作道路。'})
  if u not in group['sourceUrls']:group['sourceUrls'].append(u)
  group['enemies'].append({'nameJa':name,'hpEstimateJa':rec['stats'].get('HP'),'exp':rec['stats'].get('経験値'),'goldJa':rec['stats'].get('ゴールド'),'dropsAndStealJa':rec['dropsAndStealJa'],'sourceUrl':u,'appearanceLabelJa':label,'mapSourceUrls':app['mapSourceUrls']})
 records.append(rec)
old=json.loads((out/'dq2_field_regions.json').read_text(encoding='utf-8'))
# Source sea table groups are explicit regional sections and remain useful alongside individual labels.
undersea=[x for x in old['regions'] if x['scope']=='undersea-field']
field={'meta':{'version':'2025 HD-2D DQII','verifiedDate':'2026-11-08','coverageZh':'野外分组改由279个怪物详细页的明确出现场所构建；城镇周边聚合表已降级为未采用候选。'},'regions':list(groups.values())+undersea,'regionMaps':old.get('regionMaps',[]),'rejectedBroadTownAggregates':[{'sectionJa':r['sectionJa'],'sourceUrl':r['sourceUrl'],'reasonZh':'城镇页聚合范围混入南岛、地下首领等，不用作精确野外关系。'} for r in old['regions'] if r['scope']=='surrounding-field']}
field['meta']['coverageSummary']={'groups':len(field['regions']),'enemyAppearanceFacts':sum(len(x['enemies']) for x in field['regions']),'individualMonsterRecords':len(records),'fetchFailures':len(failures),'regionalMapImages':len(field['regionMaps'])}
(out/'dq2_monster_appearances.json').write_text(json.dumps({'meta':field['meta'],'monsters':records,'fetchFailures':failures},ensure_ascii=False,indent=2),encoding='utf-8')
(out/'dq2_field_regions.json').write_text(json.dumps(field,ensure_ascii=False,indent=2),encoding='utf-8')
for fn in ['dq2_guide.json','dq2_enrichment.json']:
 g=json.loads((out/fn).read_text(encoding='utf-8'));g['fieldRegions']=field['regions'];g['regionMaps']=field['regionMaps'];g['meta']['coverageSummary']['fieldGroups']=len(field['regions']);g['meta']['coverageSummary']['fieldEnemyFacts']=sum(len(x['enemies']) for x in field['regions'])
 for c in g['chapters']:
  for b in c['bosses']:
   if b['nameJa'].startswith('ダークアーゴン'):b['recommendedLevel']='22';b['hpEstimate']='920 / 700';b['tacticZh']='先杀会全体火咒的ガーゴフライ；ダークアーゴン会痛恨，保持高HP。'
 if 'guideTopics' in g:
  topic=next(x for x in g['guideTopics'] if x['id']=='dq2-fields')
  topic['stepsZh'][2]='野外怪物按每个怪物详细页的明确出现场所分组；宽泛城镇周边聚合表含岛屿或地下首领，已经排除。'
  topic['stepsZh'][3]='罗雷西亚城周边与罗雷西亚南岛分别列区；キラーマシン2属于南岛等地点，不会显示成新手城外道路怪物。'
 (out/fn).write_text(json.dumps(g,ensure_ascii=False,indent=2),encoding='utf-8')
print('FINAL',field['meta']['coverageSummary']);print('FAILURE COUNT',len(failures))

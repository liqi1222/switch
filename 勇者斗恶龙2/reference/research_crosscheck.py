import requests,bs4,json,pickle,tempfile,pathlib,concurrent.futures,re
out=pathlib.Path(__file__).parent
cachepath=pathlib.Path(tempfile.gettempdir())/'dq2_research_pages.pkl'
pages=pickle.load(open(cachepath,'rb'))
u='https://gamewith.jp/dq1-2/481200';a=bs4.BeautifulSoup(pages[u],'html.parser').select_one('#article-body')
links={}
for x in a.select('a[href]'):
 label=x.get_text(' ',strip=True);url=x['href']
 if 'gamewith.jp/dq1-2/' in url and re.search('マップ|場所と行き方|行き方と場所|洞窟の行き方|ほこらの場所|7つの思い出|真エンディング|クリア後|全ダンジョン|町と城|幽霊船|ヌシのすみか',label):links[url]=label
links['https://gamewith.jp/dq1-2/481245']='町と城一覧';links['https://gamewith.jp/dq1-2/481246']='ダンジョン一覧'
def fetch(url):
 try:
  r=requests.get(url,timeout=35);r.raise_for_status();return url,r.text
 except Exception as e:return url,str(e)
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:pages.update(dict(pool.map(fetch,links)))
pickle.dump(pages,open(cachepath,'wb'))
records=[]
for url,label in links.items():
 s=bs4.BeautifulSoup(pages[url],'html.parser');a=s.select_one('#article-body')
 if not a:continue
 for h in list(a.find_all('h2')):
  if '関連記事' in h.get_text():
   for e in list(h.next_siblings):e.extract()
   h.extract();break
 rec={'sourceUrl':url,'labelJa':label,'titleJa':s.title.get_text(),'version':'2025 HD-2D DQII','verifiedDate':'2026-11-08','mapImages':[],'tables':[],'treasures':[]}
 h2='';h3=''
 for el in a.find_all(['h2','h3','h4','img','table']):
  if el.name=='h2':h2=el.get_text(' ',strip=True);h3=''
  elif el.name in ['h3','h4']:h3=el.get_text(' ',strip=True)
  elif el.name=='img':
   src=el.get('data-original') or el.get('data-src') or el.get('src')
   if 'マップ' in h2 and src and src.startswith('http') and not el.find_parent('table'):
    rec['mapImages'].append({'floorLabel':h3 or h2,'imageLabel':el.get('alt',''),'url':src,'sourceUrl':url})
  elif el.name=='table' and not el.find_parent('table'):
   rows=[[c.get_text(' ',strip=True) for c in row.find_all(['th','td'],recursive=False)] for row in el.find_all('tr',recursive=False)]
   rows=[r for r in rows if r]
   if rows:rec['tables'].append({'sectionJa':h2,'subsectionJa':h3,'rows':rows})
 records.append(rec)
(out/'gamewith_crosscheck.json').write_text(json.dumps({'meta':{'purposeZh':'第二来源：用于核对地图、钥匙限制及流程差异；不同来源的楼层/推荐等级不自动合并。','verifiedDate':'2026-11-08'},'records':records},ensure_ascii=False,indent=2),encoding='utf-8')
print('GAMEWITH',len(records),'TOTAL CACHE',len(pages))

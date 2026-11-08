"""将两作独立研究资料整理为离线攻略数据。用法：python assemble.py --game 1|2|all。"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
import argparse, hashlib, json, re, time, urllib.request
from urllib.parse import urlparse

ROOT=Path(__file__).resolve().parents[2]
WORDS={
 'ラダトーム':'拉达托姆','ロトの洞窟':'洛特洞窟','雨のほこら':'雨之祠','岩山の洞窟':'岩山洞窟','沼地の洞窟':'沼泽洞窟','ドワーフの洞窟':'矮人洞窟','迷いの森':'迷途森林','岩泣き島':'岩泣岛','ドムドーラ':'多姆多拉','ガライの墓':'加莱之墓','竜王の城':'龙王城','マイラ':'迈拉','ガライ':'加莱','妖精の隠れ里':'妖精隐居村','リムルダール':'利姆达尔','メダル王の城':'徽章王城','メルキド':'梅尔基德','旅人の教会':'旅人教会','忘れられた廃墟':'被遗忘的废墟','街道の宿屋':'街道旅店','名もなき廃墟':'无名废墟','ひみつの花畑':'秘密花田','旅人の宿屋':'旅人旅店','精霊のほこら':'精灵之祠','聖なるほこら':'神圣祠堂','ラダトーム西の島':'拉达托姆西岛',
 '勇者の泉の洞窟':'勇者之泉洞窟','妖精の城':'妖精城','湖の洞窟':'湖之洞窟','ムーンブルク城':'穆恩布鲁克城','風の塔':'风之塔','ドラゴンの角':'龙之角','大灯台':'大灯塔','世界樹の森':'世界树之森','満月の塔':'满月之塔','人魚の聖域':'人鱼圣域','なぞの海底基地':'神秘海底基地','海底火山の洞窟':'海底火山洞窟','沈没船':'沉船','幽霊船':'幽灵船','ヌシのすみか':'海主巢穴','ロンダルキアへの洞窟':'通往隆达尔基亚的洞窟','ハーゴンの神殿':'哈贡神殿','無限の回廊':'无限回廊','謎の塔':'谜之塔','ローレシア':'罗雷西亚','リリザ':'利利扎','サマルトリア':'萨玛托利亚','夢見の湖':'梦见之湖','ムーンペタ':'穆恩佩塔','森の廃村':'森林废村','盗賊のアジト':'盗贼据点','メダル王の島':'徽章王岛','ルプガナ':'鲁普加纳','ベラヌール':'贝拉努尔','ペルポイ':'佩尔波伊','ザハン':'扎罕','デルコンダル':'德尔孔达尔','テパ':'特帕','アルメハ':'阿尔梅哈','アリアハン':'阿里阿罕','ローラの門':'萝拉之门','ムーンブルク':'穆恩布鲁克','ラーのほこら':'拉之祠','オアシス':'绿洲','人魚の岩場':'人鱼岩礁','炎のほこら':'炎之祠','舟守のほこら':'摆渡人祠堂','北のお告げ所':'北方神谕所','海底宝物庫':'海底宝库','ルビスのほこら':'鲁比斯之祠','ロンダルキア':'隆达尔基亚','雪原のほこら':'雪原祠堂','ゼニスの城':'泽尼斯城',
 '小さなメダル':'小徽章','ちいさなメダル':'小徽章','やくそう':'药草','上やくそう':'上等药草','特やくそう':'特等药草','どくけしそう':'解毒草','まんげつそう':'满月草','マヌーハそう':'醒目草','まほうのせいすい':'魔法圣水','けんじゃのせいすい':'贤者圣水','せいすい':'圣水','キメラのつばさ':'奇美拉之翼','せかいじゅの葉':'世界树之叶','せかいじゅのしずく':'世界树之露','まほうの小ビン':'魔法小瓶','においぶくろ':'气味袋','ちからのたね':'力量种子','すばやさのたね':'速度种子','まもりのたね':'守护种子','かしこさのたね':'智慧种子','スタミナのたね':'体力种子','ラックのたね':'幸运种子','いのちのきのみ':'生命树果','ふしぎなきのみ':'神奇树果','やまびこのふえ':'回音之笛','かぜのマント':'风之斗篷','ラーのかがみ':'拉之镜','ぎんのカギ':'银钥匙','きんのカギ':'金钥匙','ろうやのカギ':'牢狱钥匙','とうぞくのかぎ':'盗贼钥匙','まほうのかぎ':'魔法钥匙','さいごのかぎ':'最后钥匙','たいようのいし':'太阳石','太陽の石':'太阳石','あまぐものつえ':'雨云之杖','にじのしずく':'彩虹水滴','ロトのしるし':'洛特印记','ひかりのたま':'光之玉','ひかりのかぶと':'光之头盔','ロトのつるぎ':'洛特之剑','ロトのよろい':'洛特铠甲','ロトのたて':'洛特之盾','ロトのかぶと':'洛特头盔',
 '皮の盾':'皮盾','皮のぼうし':'皮帽','皮のよろい':'皮甲','たびびとの服':'旅人服','せいなるナイフ':'神圣小刀','竜のうろこ':'龙鳞','とげのムチ':'荆棘鞭','どうのつるぎ':'铜剑','てつのやり':'铁枪','はがねのつるぎ':'钢剑','くさりかたびら':'锁子甲','うろこのよろい':'鳞甲','てつのよろい':'铁甲','はがねのよろい':'钢甲','てつのたて':'铁盾','はがねのたて':'钢盾','まほうの盾':'魔法盾','こうらのよろい':'龟壳铠甲','まよけのすず':'驱魔铃','まよけの聖印':'驱魔圣印','賢者の杖':'贤者之杖','せいれいの盾':'精灵之盾','天使のローブ':'天使长袍','ようせいのうでわ':'妖精手镯','しあわせのくつ':'幸福之鞋','ふくびきけん':'抽奖券','いのりのゆびわ':'祈祷戒指','ふしぎなぼうし':'神奇帽','命の石':'生命石','まほうのよろい':'魔法铠甲','みかわしの服':'闪避服','水のはごろも':'水之羽衣','バイキルト':'倍攻','スクルト':'全体加防','ルカナン':'全体降防','ラリホー':'催眠','マホトーン':'封咒','ベホマ':'完全回复','ベホイミ':'中级回复','ザオリク':'完全复活','ルーラ':'鲁拉传送','リレミト':'脱离迷宫',
 'スライムベス':'史莱姆贝斯','バブルスライム':'泡沫史莱姆','ホイミスライム':'荷伊米史莱姆','メタルスライム':'金属史莱姆','はぐれメタル':'离散金属史莱姆','スライム':'史莱姆','ドラキー':'多拉奇','ゴースト':'幽灵','おおさそり':'大蝎子','まじゅつし':'魔术师','ドラゴン':'龙','カンダタ':'坎达塔','ようじゅつし':'妖术师','りゅうおう':'龙王','ハーゴン':'哈贡','シドー':'席多','アトラス':'阿特拉斯','バズズ':'巴兹兹','ベリアル':'贝利亚尔',
 '周辺':'周边','地下通路':'地下通道','地下':'地下','最上階':'顶层','地下1階':'地下1层','地下2階':'地下2层','地下3階':'地下3层','地下4階':'地下4层','地下5階':'地下5层','地下6階':'地下6层','1階':'1层','2階':'2层','3階':'3层','4階':'4层','5階':'5层','6階':'6层','7階':'7层','8階':'8层','南海':'南海','東海':'东海','北海':'北海','西海':'西海','南':'南','北':'北','東':'东','西':'西','装備屋':'装备店','道具屋':'道具店','武器屋':'武器店','防具屋':'防具店','宿屋':'旅店','教会':'教会','ゴールド':'金币','キラキラ':'闪光点','ひみつの場所':'秘密地点','秘密の場所':'秘密地点','ツボ':'罐子','タル':'木桶','宝箱':'宝箱','巻物':'卷轴','のほこら':'祠堂','の島':'岛','山中':'山中','のショップと販売アイテム':'商店与商品','の端':'边缘','毒沼':'毒沼',
}
WORDS.update({'盗賊の鍵':'盗贼钥匙','魔法の鍵':'魔法钥匙','最後の鍵':'最后钥匙','盗賊のかぎ':'盗贼钥匙','魔法のかぎ':'魔法钥匙','最後のかぎ':'最后钥匙','すなけむり':'沙尘','ルカニ':'降防','スカラ':'加防','ホイミ':'初级回复','リホイミ':'持续回复','バシルーラ':'バシルーラ','マガシドー':'玛加席多','メタルウィング':'金属之翼','メタルハンター':'金属猎手','メタルハンド':'金属之手','メタル斬り':'金属斩','ゴールドマン':'黄金人','ベホマラー':'全体中级回复','メガンテ':'自爆','ザラキ':'群体即死','マジックバリア':'魔法屏障','フバーハ':'吐息屏障','ザオラル':'复活','メラミ':'中级火焰','ヒャダルコ':'中级冰冻','裏庭':'后院','裏門':'后门','外観':'外部','隠し部屋':'隐藏房间','マップ目':'区','アレフガルド':'阿雷夫加尔德','ローレシア城':'罗雷西亚城','ルプガナ&アレフガルド':'鲁普加纳与阿雷夫加尔德'})
TERMS=Path(__file__).parent/'chinese-map-terms.json'
if TERMS.exists():WORDS.update(json.loads(TERMS.read_text('utf-8'))['terms'])
ORDER=sorted(WORDS,key=len,reverse=True)
PAT=re.compile('|'.join(map(re.escape,ORDER)))
def zh(text):
 text=str(text or '')
 def replace(m):
  # 不把专名的一部分误译成容器、咒文或货币，例如メタル中的タル。
  if re.fullmatch(r'[ァ-ヶー]+',m.group()):
   if (m.start() and re.match(r'[ァ-ヶー]',text[m.start()-1])) or (m.end()<len(text) and re.match(r'[ァ-ヶー]',text[m.end()])):return m.group()
  return WORDS[m.group()]
 result=PAT.sub(replace,text)
 for word in ['魔法屏障','吐息屏障','全体加防','全体降防','降防','完全回复','中级回复']:result=result.replace(word+word,word)
 return result
def read(p):return json.loads(p.read_text('utf-8'))
def source_urls(*values):
 result=[]
 for v in values:
  for u in v if isinstance(v,list) else [v]:
   if isinstance(u,str) and u.startswith('https://') and u not in result:result.append(u)
 return result
def name_key(x):return re.sub(r'[\s・/／_ー城]','',str(x)).replace('ローラの門地下通路','ローラの門')
def assemble(g):
 root=ROOT/f'勇者斗恶龙{g}';ref=root/'reference';w=read(ref/'world/gamewith-markers.json')
 raw=read(ref/('dq1-hd2d-research.json' if g==1 else 'dq2_guide.json'))
 if g==2:
  enrichment=read(ref/'dq2_enrichment.json')
  enriched={l['id']:l for l in enrichment['locations']}
  raw['locations']=[{**l,**enriched.get(l['id'],{})} for l in raw['locations']]
  for k in ['guideTopics','fieldRegions','regionMaps','memories','infiniteCorridorAreas','optionalBosses']:
   raw[k]=enrichment.get(k,raw.get(k,[]))
 jobs={};asset_meta={}
 def asset(url,existing=None):
  if existing:
   p=Path(existing)
   if not p.is_absolute():p=root/p
   if p.exists():return p.relative_to(root).as_posix()
  if not url:return None
  ext=re.search(r'\.(webp|png|jpe?g)(?:/|$|\?)',url)
  ext='.'+(ext.group(1) if ext else 'jpg');rel='reference/assets/'+hashlib.sha256(url.encode()).hexdigest()[:20]+ext
  jobs[url]=rel;return rel
 def world_asset(local):return 'reference/world/'+local if local else None
 regions=[];region_by_name={}
 if g==1:
  for region in raw.get('regions',[]):
   regions.append({'id':region['id'],'name':zh(region['nameJa'])})
   for l in region['locations']:region_by_name.setdefault(l['nameJa'],region['id'])
 else:
  regions=[{'id':'start','name':'罗雷西亚与穆恩布鲁克'},{'id':'ale','name':'阿雷夫加尔德'},{'id':'sailing','name':'航海、海底与群岛'},{'id':'rendarak','name':'隆达尔基亚'},{'id':'postgame','name':'通关后与真结局'}]
 def get_region(l):
  n=l['nameJa']
  if g==1:return region_by_name.get(n,regions[0]['id'])
  if n in ['ドワーフの洞窟','無限の回廊','謎の塔','アリアハン','ゼニスの城']:return 'postgame'
  if any(x in n for x in ['ロンダルキア','ハーゴン','雪原']):return 'rendarak'
  if n in ['ラダトーム','ロトの洞窟','雨のほこら','ガライ','マイラ','岩山の洞窟','沼地の洞窟','ドムドーラ','メルキド','精霊のほこら','リムルダール','聖なるほこら','竜王の城','ガライの墓']:return 'ale'
  if n in ['ローレシア','リリザ','サマルトリア','勇者の泉の洞窟','ローラの門','夢見の湖','妖精の城','湖の洞窟','ムーンペタ','森の廃村','ムーンブルク城','風の塔','ラーのほこら','ムーンブルク西のほこら','オアシス','ドラゴンの角・北','ドラゴンの角・南','ルプガナ']:return 'start'
  return 'sailing'
 byja={l['nameJa']:l['id'] for l in raw['locations']}
 def find_location(n):
  if n in byja:return byja[n]
  aliases={'ムーンブルク':'ムーンブルク城','ローラの門・地下通路':'ローラの門','盗賊のアジト':'森の廃村'}
  return byja.get(aliases.get(n,n))
 locs=[]
 def enemy(en,url=None):
  original=en.get('nameJa',en.get('name',''))
  condition='；'.join(str(x) for x in [en.get('floor'),en.get('conditionJa'),en.get('conditionStatus'),en.get('appearanceConditionJa')] if x)
  drop=en.get('dropJa') or '、'.join(en.get('dropsJa',en.get('dropItemsJa',en.get('dropsAndStealJa',[]))))
  return {'name':zh(original),'original':original,'condition':zh(condition) or '来源按此区域列示；未逐项注明昼夜与剧情阶段，不能视为初访即可出现。','drop':zh(drop),'sources':source_urls(en.get('sourceUrl'),en.get('detailUrl'),en.get('monsterSourceUrl'),en.get('indexSourceUrl'),url)}
 for l in raw['locations']:
  ident=l['id'];n=l['nameJa'];url=l.get('sourceUrl') or l.get('sourceUrls',[None])[0]
  maps=[]
  for idx,m in enumerate(l.get('floors',l.get('mapImages',[]))):
   label=m.get('labelJa',m.get('floorLabel',m.get('label',m.get('imageLabel',n))))
   local=asset(m.get('mapImageUrl',m.get('url')),m.get('localPath'))
   if local:maps.append({'id':m.get('id',f'{ident}-map-{idx+1}'),'name':zh(label),'original':label,'floorNames':[zh(f) for f in m.get('floorNamesJa',[])],'image':local,'sources':source_urls(m.get('sourceUrl'),url)})
  treasures=[];seen=set()
  for t in l.get('treasures',[]):
   original=t.get('itemJa',t.get('nameJa',''));floor=t.get('floor',n)
   detail=t.get('detailImageUrl',t.get('sceneImageUrl')) or t.get('mapImageUrl')
   sig='|'.join([ident,str(floor),original,str(detail)])
   if sig in seen:continue
   seen.add(sig)
   treasures.append({'id':ident+'-t-'+hashlib.sha1(sig.encode()).hexdigest()[:12],'name':zh(original),'original':original,'floor':zh(floor),'mapId':t.get('mapId') or (maps[0]['id'] if len(maps)==1 else None),'mapLabel':t.get('mapLabel') or original,'how':zh(t.get('howZh','按原图的同名标签寻找；位置截图显示实际拾取点。')),'condition':zh(t.get('conditionJa',t.get('conditionZh',''))),'detailImage':asset(detail),'sources':source_urls(t.get('sourceUrl'),url)})
  shops=[]
  for idx,sh in enumerate(l.get('shops',[])):
   items=sh.get('items')
   if items is None:items=[{'nameJa':r[0],'price':r[1] if len(r)>1 else None} for r in sh.get('rows',[])[1:] if r and r[0] not in ['アイテム','商品','価格']]
   shops.append({'id':ident+'-shop-'+str(idx+1),'name':zh(sh.get('typeJa',sh.get('nameJa','商店'))),'how':zh(sh.get('howZh','')),'items':[{'name':zh(i['nameJa']),'original':i['nameJa'],'price':str(i.get('price','')).removesuffix('G')} for i in items if i.get('nameJa')],'detailImage':asset(sh.get('mapImageUrl',sh.get('locationImageUrl'))),'sources':source_urls(sh.get('sourceUrl'),url)})
  # 次来源库存保留为独立表，不能把剧情解锁后的商品伪装为初访库存。
  for idx,sh in enumerate(l.get('secondaryShops',[])):
   shops.append({'id':ident+'-secondary-shop-'+str(idx+1),'name':zh(sh.get('nameJa','商店'))+'（GameWith 对照）','how':'来源库存对照；标记为后续追加的商品需推进剧情。','items':[{'name':zh(i['itemJa']),'original':i['itemJa'],'price':str(i.get('priceJa','')).removesuffix('G'),'note':'剧情推进后追加' if i.get('storyAdded') else ''} for i in sh.get('inventory',[])],'sources':source_urls(sh.get('sourceUrl'))})
  enemies=[enemy(en,url) for en in l.get('enemies',[])]
  npcs=[]
  for idx,npc in enumerate(l.get('npcs',[])):
   ja=npc.get('nameJa',npc.get('nameZh',npc.get('name','关键 NPC')))
   npcs.append({'id':ident+'-npc-'+str(idx+1),'name':npc.get('nameZh') or zh(ja),'original':ja,'role':zh(npc.get('roleZh',npc.get('detailZh',npc.get('actionZh',npc.get('role',''))))),'how':zh(npc.get('howZh',npc.get('whereZh',npc.get('locationZh',npc.get('positionZh',''))))),'condition':zh(npc.get('conditionZh',npc.get('condition',''))),'detailImage':asset(npc.get('mapImageUrl',npc.get('imageUrl'))),'sources':source_urls(npc.get('sourceUrl'),url)})
  tips=l.get('guidanceZh',l.get('guidance',l.get('tipsZh',[])))
  tips=[zh(x) for x in tips] if isinstance(tips,list) else [zh(tips)]
  tips += [zh(t['textZh']) for t in l.get('guides',[]) if t.get('textZh')]
  loc={'id':ident,'name':l.get('nameZh') or zh(n),'original':n,'translationStatus':'中文名称为工作暂译；原文用于对应地图','type':l.get('kind',l.get('category','dungeon')),'region':get_region(l),'description':zh(l.get('descriptionZh','')),'access':zh(l.get('accessZh','')),'maps':maps,'treasures':treasures,'shops':shops,'enemies':enemies,'npcs':npcs,'bosses':[],'tips':tips,'sources':source_urls(l.get('sourceUrls'),url),'exits':[]}
  if loc['type']=='other':loc['type']='shrine'
  if l.get('access',{}).get('textZh'):loc['access']=zh(l['access']['textZh'])
  loc['sources']=source_urls(loc['sources'],l.get('secondarySourceUrls'),[x.get('sourceUrl') for x in l.get('guides',[])],l.get('access',{}).get('sourceUrl'))
  loc['facilityImages']=[{'id':ident+'-facility-'+str(idx),'name':zh(x.get('floorLabel',x.get('imageLabel','设施位置图'))),'image':asset(x['url']),'sources':source_urls(x.get('sourceUrl'))} for idx,x in enumerate(l.get('facilityImages',[]))]
  loc['tips'] += ['设施：'+zh(x.get('nameJa','')) for x in l.get('facilities',[]) if isinstance(x,dict) and x.get('nameJa')]
  if loc['type'] not in ['town','dungeon','field','shrine','secret','sea','castle','port']:loc['type']='shrine'
  locs.append(loc)
 byid={l['id']:l for l in locs}
 for l in raw['locations']:
  for exit in l.get('exits',[]):
   target=find_location(exit.get('toJa',''))
   if target:byid[l['id']]['exits'].append({'to':target,'how':zh('；'.join(filter(None,[exit.get('viaZh'),exit.get('conditionZh')]))),'sources':source_urls(exit.get('sourceUrl'))})
 for conflict in raw.get('sourceDiscrepancies',[]):
  if conflict.get('kind')=='treasureKeyCondition' and conflict.get('locationId') in byid:
   for t in byid[conflict['locationId']]['treasures']:
    if t['original']==conflict['itemJa']:
     t['how']=t['how'].replace(zh(conflict['game8LocationTableJa']),zh(conflict['resolvedKeyJa']))
     t['condition']=zh(conflict['resolvedKeyJa'])+'。来源核对：地点表写'+zh(conflict['game8LocationTableJa'])+'，钥匙专题与 GameWith 一致，采用前述条件。'
     t['sources']=source_urls(t['sources'],conflict['sources'])
  if conflict.get('kind')=='shopPriceMissingValue' and conflict.get('locationId') in byid:
   for sh in byid[conflict['locationId']]['shops']:
    for item in sh['items']:
     if item['original']==conflict['itemJa']:item['note']='Game8 单源价格；GameWith 未列有效数值。'
  if conflict.get('kind')=='shopPrice' and conflict.get('locationId') in byid:
   loc=byid[conflict['locationId']]
   for sh in loc['shops']:
    for item in sh['items']:
     if item['original']==conflict['itemJa']:
      item['price']='来源有分歧'
      item['note']=f"Game8：{conflict['game8Price']}；GameWith：{conflict['gamewithPrice'] if re.search(r'\d',conflict['gamewithPrice']) else '未列价格'}。请以游戏内为准。"
      sh['sources']=source_urls(sh['sources'],conflict['sources'])
 for marker in w['markers']:
  if marker['type']!='rura':continue
  ident=find_location(marker['name'])
  if not ident and marker['name']=='夢見の湖/妖精の城':ident=find_location('夢見の湖')
  if not ident:continue
  l=byid[ident];p=marker['percentCoordinate'];l['position']=[p['x'],p['y']]
  l['sources']=source_urls(l['sources'],marker.get('verifiedArticleUrl'),marker.get('sourcePage'))
  if marker.get('descriptionText') and not l['access']:l['access']=zh(marker['descriptionText'])
  if not l['maps'] and marker.get('pinImageLocal'):l['maps']=[{'id':ident+'-source-map','name':'入口与位置截图','original':marker['name'],'image':world_asset(marker['pinImageLocal']),'sources':source_urls(marker.get('sourcePage'))}]
 for region in raw.get('regions',[]) if g==1 else []:
  maps=[{'id':region['id']+'-map','name':zh(region['nameJa']),'original':region['nameJa'],'image':asset(m['mapImageUrl'],m.get('localPath')),'sources':[region['sourceUrl']]} for m in region.get('maps',[])]
  locs.append({'id':region['id'],'name':zh(region['nameJa']),'original':region['nameJa'],'type':'field','region':region['id'],'description':'周边野外实际地图，按原图查看道路、城镇和迷宫入口。遇敌按来源区域名列示，地图不表示精确的刷新边界。','maps':maps,'treasures':[],'enemies':[enemy(en,region['sourceUrl']) for en in region.get('enemies',[])],'npcs':[],'shops':[],'bosses':[],'tips':[],'sources':[region['sourceUrl']],'exits':[]})
 # 来源列出的额外野外、海面和海底遇敌区域。只对已确认的地名使用世界图参照。
 field_regions=raw.get('fieldAreas',[]) if g==1 else raw.get('fieldRegions',[])
 existing_names={l['original'] for l in locs if l['type']=='field'}
 for idx,fr in enumerate(field_regions):
  n=fr.get('nameJa',fr.get('sectionJa','')).replace('の周辺モンスター','周辺')
  if n in existing_names:continue
  ident=fr.get('id',f'dq{g}-field-{idx+1}');urls=source_urls(fr.get('sourceUrl'),fr.get('sourceUrls'));url=urls[0] if urls else None
  anchor=find_location(n.replace('周辺',''))
  if not anchor:
   named=sorted((ja for ja in byja if ja in n),key=len,reverse=True)
   if named:anchor=byja[named[0]]
  anchor_loc=byid.get(anchor,{})
  sea=fr.get('scope') in ['sea','deepsea','undersea'] or any(x in n for x in ['海底','海上','深海'])
  region=anchor_loc.get('region',regions[0]['id'] if g==1 else 'sailing')
  if g==2:
   if sea or '島' in n:region='sailing'
   elif 'アレフガルド' in n:region='ale'
   elif 'ロンダルキア' in n:region='rendarak'
  locs.append({'id':ident,'name':zh(n),'original':n,'type':'sea' if sea else 'field','region':region,'description':'来源明确列出的遇敌区域。底图仅供地理参照，不代表精确遇敌边界。','maps':[{'id':ident+'-reference','name':'世界地理参照（遇敌区域边界未标定）','original':n,'image':'reference/world/gamewith-world-map.jpg','width':1600,'height':1600,'sources':[w['metadata']['sourcePage']]}],'treasures':[],'enemies':[enemy(en,url) for en in fr.get('enemies',[])],'npcs':[],'shops':[],'bosses':[],'tips':[fr.get('phaseZh','来源未逐项标注剧情阶段，不保证初访时能够遭遇全部怪物。')],'sources':source_urls(url),'exits':[{'to':anchor,'how':'返回参照地点'}] if anchor else []})
 for idx,rm in enumerate(raw.get('regionMaps',[])):
  ident=f'dq{g}-undersea-map-{idx+1}';url=rm['sourceUrl']
  locs.append({'id':ident,'name':zh(rm['labelJa']),'original':rm['labelJa'],'type':'sea','region':'sailing','description':'海底区域实际地图；探索需按剧情取得潜水能力。','access':'取得人鱼提供的潜水能力后，在对应海域下潜。','maps':[{'id':ident+'-map','name':zh(rm['labelJa']),'original':rm['labelJa'],'image':asset(rm['url']),'sources':[url]}],'treasures':[],'enemies':[],'npcs':[],'shops':[],'bosses':[],'tips':[],'sources':[url],'exits':[]})
 # 章节仅链接到已经核实存在的地点，不能从名称模糊匹配制造引用。
 chapters=[]
 for idx,c in enumerate(raw.get('chapters',[])):
  steps=[]
  for st in c.get('steps',[]):
   ident=st.get('locationId') or find_location(st.get('locationJa',''))
   steps.append({'text':zh(st.get('instructionZh',st.get('detailZh',st.get('text','')))),**({'location':ident} if ident in byid else {})})
  chapters.append({'id':c['id'],'order':idx+1,'title':zh(c.get('titleZh',c.get('title',''))),'level':str(c.get('recommendedLevel',c.get('level',''))),'summary':zh(c.get('summaryZh',c.get('summary',''))),'prerequisites':zh(c.get('prerequisitesZh','')),'steps':steps,'bosses':[],'unlocks':[zh(x) for x in c.get('keyItemsAndUnlocksJa',c.get('unlocksZh',[]))],'sources':source_urls(c.get('sourceUrls'),c.get('sourceUrl'),c.get('overviewSourceUrl'))})
  for b in c.get('bosses',[]):
   if isinstance(b,str):chapters[-1]['bosses'].append({'name':zh(b),'tip':''});continue
   ja=b.get('nameJa',b.get('name',''));tip=b.get('tipsZh',b.get('tacticZh',b.get('tacticsZh',b.get('strategyZh',[]))))
   if isinstance(tip,list):tip='；'.join(tip)
   boss={'name':b.get('nameZh') or zh(ja),'original':ja,'tip':zh(tip),'sources':source_urls(b.get('sourceUrl'),c.get('sourceUrls'),c.get('sourceUrl'))}
   chapters[-1]['bosses'].append(boss)
   loc_id=b.get('locationId') or find_location(b.get('locationJa',''))
   if loc_id in byid:byid[loc_id]['bosses'].append(boss)
 if g==1:
  for b in raw.get('bosses',[]):
   ident=b.get('locationId');boss={'name':b.get('nameZh') or zh(b['nameJa']),'original':b['nameJa'],'tip':zh('；'.join(b.get('tipsZh',[]))),'sources':source_urls(b.get('sourceUrl'),b.get('overviewSourceUrl'))}
   if ident in byid:byid[ident]['bosses'].append(boss)
   for c in chapters:
    if any(st.get('location')==ident for st in c['steps']):c['bosses'].append(boss)
  for route in raw.get('routeConnections',[]):
   if route.get('fromId') in byid and route.get('toId') in byid:byid[route['fromId']]['exits'].append({'to':route['toId'],'how':zh(route.get('guidanceZh',''))})
 points=[]
 for p in w['markers']:
  if p['type']=='rura':continue
  cate='secret' if p['type'].startswith('secret') else 'sparkle';num=sum(1 for x in points if x['category']==cate)+1;coord=p['percentCoordinate']
  original=p.get('name',p.get('label',''));name=zh(original)
  points.append({'id':f'dq{g}-world-'+p['id'],'name':('秘密地点' if cate=='secret' else '闪光点')+f' {num:02d} · '+name,'original':original,'category':cate,'description':zh(p.get('descriptionText','')),'position':[coord['x'],coord['y']],'detailImage':world_asset(p.get('pinImageLocal')),'sources':source_urls(p.get('sourcePage'))})
 guides=[]
 def guide(ident,title,paragraphs,urls,category='实用技巧'):
  guides.append({'id':f'dq{g}-guide-'+ident,'title':title,'paragraphs':[zh(p) for p in paragraphs if p],'sources':source_urls(urls),'category':category})
 for item in raw.get('guides',[])+raw.get('guideTopics',[]):guide(item.get('id',str(len(guides))),item.get('titleZh',item.get('title','攻略技巧')),item.get('paragraphsZh',item.get('paragraphs',item.get('stepsZh',item.get('guidanceZh',[])))),item.get('sourceUrls',item.get('sourceUrl')),item.get('category','实用技巧'))
 if g==1:
  guide('keys','三种钥匙与回收顺序',[f"{k['nameZh']}（{k['nameJa']}）：{k['howZh']}" for k in raw.get('keys',[])],[k['sourceUrl'] for k in raw.get('keys',[])],'关键道具')
  guide('emblems','五种纹章与妖精交换',[f"{e['nameZh']}：收集 {e['materialJa']} 后回妖精隐居村交换。{e['effectZh']}" for e in raw.get('emblems',[])],[e['sourceUrl'] for e in raw.get('emblems',[])],'成长')
  for pg in raw.get('postgame',[]):guide(pg['id'],pg['titleZh'],pg['guidanceZh'],pg['sourceUrl'],'结局与通关后')
  for keyname in dict.fromkeys(x['keyJa'] for x in raw.get('keyUses',[])):
   uses=[x for x in raw['keyUses'] if x['keyJa']==keyname]
   guide('key-use-'+hashlib.sha1(keyname.encode()).hexdigest()[:8],zh(keyname)+'：开门回收清单',[f"{x['placeJa']}：{x['detailsJa']}" for x in uses],[x['sourceUrl'] for x in uses],'关键道具')
 if g==2:
  guide('memories','七处世界回忆与真结局准备',[f"{m['sourceNumber']}. {zh(m['nameJa'])}：{m['requirementZh']}；{m['howZh']}"+(f" 首领：{zh(m['bossJa'])}。" if m.get('bossJa') else '') for m in raw.get('memories',[])],source_urls([m['sourceUrl'] for m in raw.get('memories',[])],[m.get('crosscheckUrl') for m in raw.get('memories',[])]),'通关后')
  corridor=byid.get(find_location('無限の回廊'))
  if corridor:
   for area in raw.get('infiniteCorridorAreas',[]):
    # 每个区均有来源地图；以图片URL去重，避免只保留首个表格中的地图。
    img=asset(area.get('sourceMapImageUrl'))
    if img and not any(m['image']==img for m in corridor['maps']):corridor['maps'].append({'id':area['id']+'-map','name':zh(area['floorLabel']),'original':area['floorLabel'],'image':img,'sources':source_urls(area['sourceUrl'],area.get('crosscheckUrl'))})
   for t in corridor['treasures']:
    number=re.search(r'(\d+)(?:マップ目|区)',t['floor'])
    if number:
     area=next((a for a in raw.get('infiniteCorridorAreas',[]) if a.get('sourceAreaNumber')==int(number.group(1))),None)
     if area:t['mapId']=area['id']+'-map'
   corridor['tips'] += [f"{zh(a['floorLabel'])}：{a['routeZh']} 收集重点：{a['lootHighlightsZh']}" for a in raw.get('infiniteCorridorAreas',[])]
  guide('infinite-route','无限回廊：逐区路线与收集',[f"{zh(a['floorLabel'])}：{a['routeZh']} 收集重点：{a['lootHighlightsZh']}" for a in raw.get('infiniteCorridorAreas',[])],source_urls([a['sourceUrl'] for a in raw.get('infiniteCorridorAreas',[])],[a.get('crosscheckUrl') for a in raw.get('infiniteCorridorAreas',[])]),'通关后')
  for b in raw.get('optionalBosses',[]):
   loc=byid.get(find_location(b.get('locationJa','')))
   if loc and not any(x['original']==b['nameJa'] for x in loc['bosses']):loc['bosses'].append({'name':zh(b['nameJa']),'original':b['nameJa'],'tip':zh(b['tacticZh']),'sources':source_urls(b['sourceUrl'])})
 for extra in raw.get('specialGuides',[]):guide(extra.get('id',str(len(guides))),extra.get('titleZh','专题攻略'),extra.get('paragraphsZh',extra.get('stepsZh',[])),extra.get('sourceUrls',extra.get('sourceUrl')))
 notes=['简体中文为工作暂译或常见译名；原图和原文名保留，便于对照。','地点与收集物按对应 HD-2D 来源页整理。脚本结构校验不等于每项内容均经游戏实机复核。','世界标记使用 GameWith 坐标及同一来源底图；地点道路来自实际攻略地图。未核实的 NPC、设施及随机遇敌不生成固定坐标。','地点清单与世界探索点分别记录，世界点勾选表示已探访，不能作为全物品收齐证明。']
 notes += [str(n) for n in raw.get('coverageNotes',[]) if isinstance(n,str)]
 for c in raw.get('sourceDiscrepancies',[]):
  text=c.get('resolutionZh') or '：'.join(filter(None,[c.get('issueZh'),c.get('detailZh')]))
  if text and text not in notes:notes.append(text)
  # 关键路线冲突同时显示在对应地点，方便游玩时就地复核。
  for l in locs:
   if g==2 and any(u in l['sources'] for u in source_urls(c.get('sourceUrl'))):l['tips'].append('来源核对：'+text)
 data={'meta':{'id':f'dq{g}-hd2d-2025','title':f'勇者斗恶龙 {"I" if g==1 else "II"} HD-2D 重制版','version':'HD-2D 2025','platform':'Nintendo Switch','verifiedDate':'2026-11-08','intro':'根据中文卡带对应的 HD-2D 版本整理，提供实际地图、完整冒险流程、地点收集与战斗资料。','worldName':'阿雷夫加尔德' if g==1 else '洛特后裔的世界','otherTitle':'前往勇者斗恶龙 II' if g==1 else '前往勇者斗恶龙 I','otherHref':f'../勇者斗恶龙{2 if g==1 else 1}/index.html','outputName':f'勇者斗恶龙{g}-HD2D-地图攻略.html','mapNote':'地图保留来源中的实际道路、楼梯、设施与原文标签；收集清单配套位置截图。未核实坐标的条目不自动标点。','sources':['https://www.dragonquest.jp/roto-trilogy/dq1and2/',w['metadata']['sourcePage']]},'regions':regions,'locations':locs,'chapters':chapters,'guides':guides,'world':{'image':'reference/world/gamewith-world-map.jpg','width':1600,'height':1600,'sources':[w['metadata']['sourcePage']],'points':points},'sources':[{'title':'HD-2D 版本官方说明','url':'https://www.dragonquest.jp/roto-trilogy/dq1and2/'},{'title':'GameWith 世界地图及定位依据','url':w['metadata']['sourcePage']},{'title':'Game8 地点与楼层地图索引','url':'https://game8.jp/dq1remake/732632' if g==1 else 'https://game8.jp/dq2/140906'},{'title':'Game8 主线流程索引','url':'https://game8.jp/dq1remake/732630' if g==1 else 'https://game8.jp/dq2/140904'}],'coverage':{'baseline':[l['id'] for l in locs],'notes':notes}}
 # 下载所有被攻略引用的位置图，保留 URL 与本地资产的可追溯清单。
 def download(pair):
  url,rel=pair;p=root/rel;p.parent.mkdir(parents=True,exist_ok=True)
  if p.exists() and p.stat().st_size>100:return url,rel
  for attempt in range(3):
   try:
    req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'})
    with urllib.request.urlopen(req,timeout=35) as response:body=response.read()
    if len(body)<100:raise ValueError('图片过小')
    p.write_bytes(body);return url,rel
   except Exception:
    if attempt==2:raise
    time.sleep(attempt+1)
 errors=[]
 with ThreadPoolExecutor(max_workers=10) as pool:
  futures={pool.submit(download,pair):pair[0] for pair in jobs.items()}
  for i,f in enumerate(as_completed(futures)):
   try:url,rel=f.result();asset_meta[url]=rel
   except Exception as ex:errors.append({'url':futures[f],'error':str(ex)})
   if i%100==0:print(f'DQ{g}: assets {i+1}/{len(futures)}',flush=True)
 if errors:
  (ref/'asset-errors.json').write_text(json.dumps(errors,ensure_ascii=False,indent=2),'utf-8');raise RuntimeError(f'DQ{g} {len(errors)} asset failures')
 # 图片尺寸直接从下载文件读取，避免拼接地图被拉伸。
 from PIL import Image
 for l in data['locations']:
  for m in l['maps']:
   with Image.open(root/m['image']) as im:m['width'],m['height']=im.size
 (ref/'asset-manifest.json').write_text(json.dumps(asset_meta,ensure_ascii=False,indent=2),'utf-8')
 (root/'data').mkdir(exist_ok=True)
 output=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')
 (root/'data/guide.js').write_text('window.DQ_GUIDE='+output+';\n','utf-8')
 print(f'DQ{g}: {len(locs)} locations, {sum(len(l["treasures"]) for l in locs)} treasures, {len(chapters)} chapters, {len(points)} world points',flush=True)

if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--game',choices=['1','2','all'],default='all');args=parser.parse_args()
 for number in ([1,2] if args.game=='all' else [int(args.game)]):assemble(number)

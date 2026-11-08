import json,pathlib,pickle,tempfile,bs4,re
out=pathlib.Path(__file__).parent
pages=pickle.load(open(pathlib.Path(tempfile.gettempdir())/'dq2_research_pages.pkl','rb'))
g=json.loads((out/'dq2_guide.json').read_text(encoding='utf-8'))
f=json.loads((out/'dq2_source_facts.json').read_text(encoding='utf-8'))
overlay=json.loads((out/'dq2_enrichment.json').read_text(encoding='utf-8'))
# Rebuild overview-only map images: never present a treasure tooltip/local screenshot as a floor map.
for loc in g['locations']:
 a=bs4.BeautifulSoup(pages[loc['sourceUrl']],'html.parser').select_one('.archive-style-wrapper')
 images=[];h2='';h3='';base=loc['nameJa'].split('・')[0]
 for el in a.find_all(['h2','h3','img']):
  if el.name=='h2':
   h2=el.get_text(' ',strip=True);h3=''
   if re.search('過去作|関連記事',h2):break
  elif el.name=='h3':h3=el.get_text(' ',strip=True)
  elif el.name=='img' and 'マップ' in h2:
   if el.find_parent('template'):continue
   alt=el.get('alt','');src=el.get('data-src') or el.get('src')
   if base not in alt or not src or not src.startswith('http'):continue
   if int(el.get('width','0') or 0)<200:continue
   if loc['articleId'] in ['273267','736294','736405'] and loc['nameJa'] not in alt:continue
   table=el.find_parent('table');fl=alt
   if table:
    th=el.find_previous('th')
    if th and th.find_parent('table')==table:fl=th.get_text(' ',strip=True)
   elif alt==loc['nameJa']:fl=alt+'（楼层总览）'
   images.append({'floorLabel':fl,'imageLabel':alt,'url':src,'sourceUrl':loc['sourceUrl'],'mapKind':'overview-or-source-floor-composite'})
 loc['mapImages']=list({x['url']:x for x in images}.values())
 if loc['nameJa']=='聖なるほこら':loc['guides'].append({'textZh':'持罗雷西亚城宝物库取得的ロトのしるし，找祠内神父交谈，再调查中央洛特头盔；先拿最终钥匙才能打开印记宝箱。','sourceUrl':'https://game8.jp/dq2/736142'})
 if loc['nameJa']=='メダル王の島':
  loc['access']['textZh']='取得船后，从绿洲乘船向西。'
  loc['guides'].append({'textZh':'徽章王可兑换奖励，岛上与馆内合计可收5枚小徽章；命名神官可改名，进馆后检查锁箱并在拿钥匙后回访。','sourceUrl':loc['sourceUrl']})
  loc['npcs'].extend([{'nameJa':'メダル王','whereZh':'徽章王之馆','actionZh':'交付小徽章并领取累计奖励。','sourceUrl':loc['sourceUrl']},{'nameJa':'命名神官','whereZh':'岛上馆内相关NPC，具体位置见来源地图','actionZh':'办理角色改名。','sourceUrl':loc['sourceUrl']}])
 # Split Dragon Horn enemy sets by the explicit current-version subsection.
 if loc['articleId']=='273267':
  enemies=[];h2='';h3=''
  for el in a.find_all(['h2','h3','table']):
   if el.name=='h2':
    h2=el.get_text(' ',strip=True)
    if '過去作' in h2:break
   elif el.name=='h3':h3=el.get_text(' ',strip=True)
   elif el.name=='table' and 'モンスター' in h2 and loc['nameJa']==h3:
    for row in el.find_all('tr',recursive=False):
     cs=row.find_all('td',recursive=False)
     if len(cs)>2:enemies.append({'nameJa':cs[0].get_text(' ',strip=True),'gold':cs[1].get_text(' ',strip=True),'exp':cs[2].get_text(' ',strip=True),'dropsJa':[c.get_text(' ',strip=True) for c in cs[3:]],'sourceSectionJa':h3,'sourceUrl':loc['sourceUrl']})
  loc['enemies']=enemies
 for baseline in f['locations']:
  if baseline['id']==loc['id']:baseline['mapImages']=loc['mapImages'];baseline['enemies']=loc['enemies']

bossplaces={
'アブーラ':'湖の洞窟','まどう老師':'風の塔','ルナティックマージ':'ルプガナ北の山中','ダークアーゴン':'竜王の城',
'ヘルサイス':'雨のほこら','パープルライノ':'雨のほこら','アルコンバルサ':'雨のほこら','ファットバット':'ベラヌール','ヘルコンドル':'デルコンダル','コング':'デルコンダル','キラータイガー':'デルコンダル',
'ノスフェイラ':'ペルポイ','レッドマーマン':'人魚の岩場','デビルマンボ':'舟守のほこら','ネコノマンサー':'大灯台','ベリアル（1回目）':'妖精の城',
'オクタヌス':'人魚の聖域','イエローフィン':'人魚の聖域','トドサマガエラ':'人魚の聖域','アクロナイト':'なぞの海底基地','ビーストボーンズ':'なぞの海底基地','ミリエラ（1回目）':'なぞの海底基地','ワイルドホッグ':'森の廃村','はかいの神父':'ムーンペタ',
'ホーンウィザード':'満月の塔','クレセンス':'満月の塔','バズズ（1回目）':'海底火山の洞窟','デルコンダル王':'デルコンダル','アトラス（1回目）':'ルビスのほこら','カースビエル':'ロンダルキアへの洞窟','ベリアル（2回目）':'ロンダルキアへの洞窟',
'ミリエラ（2回目）':'ハーゴンの神殿','アトラス（2回目）':'ハーゴンの神殿','バズズ（2回目）':'ハーゴンの神殿','ベリアル（3回目）':'ハーゴンの神殿','ハーゴン':'ハーゴンの神殿','シドー':'ハーゴンの神殿','しんりゅう':'謎の塔','りゅうおうのひ孫':'竜王の城','マガシドー':'ハーゴンの神殿'}
for c in g['chapters']:
 for b in c['bosses']:
  matches=[(key,place) for key,place in bossplaces.items() if b['nameJa'].startswith(key)]
  if matches:b['locationJa']=max(matches,key=lambda a:len(a[0]))[1]

topics=[
('dq2-party','四人队伍与战斗分工','https://game8.jp/dq2/140904',[
'初期主人公独行，4级学石つぶて改善群战；萨玛托利亚王女最初只是自动行动的支援角色。',
'王子在利利萨旅店加入；穆恩布鲁克公主解咒后加入并提供ルーラ，地图回访更方便。',
'世界树救援事件结束后萨玛托利亚王女正式可操作；王子重新加入时装备被卸下，必须手动重穿。',
'中后期主人公负责恶魔/不死/龙类特攻及保护，王子主治疗或雷系输出，两位王女群咒与辅助；首领不同可调整分工。',
'物理防御スクルト、魔法屏障マジックバリア、吐息屏障フバーハ分别针对不同伤害；面对混合型首领持续补三种保护。',
'恢复道具分散给不同角色，辅助角色更新增益时其他人接手治疗；不要把所有药只放一个人身上。']),
('dq2-keys','钥匙取得与回访优先顺序','https://game8.jp/dq2/707769',[
'盗贼钥匙：穆恩布鲁克公主加入并完成三国王座事件后取得；先回罗雷西亚地下牢拿ヒャダルコの巻物。',
'魔法钥匙：人鱼圣域最深处首领后到アルメハ女王广场领取；先收萨玛托利亚洛特盾、绿洲星降手环、扎罕神圣织机。',
'どこかのかぎ：森林废村盗贼黑市打ワイルドホッグ组合后拿，只用于穆恩佩塔地下据点门，不能替代通用钥匙。',
'水门钥匙：先走梅尔基德、拉达托姆、迈拉守护者线，再找贝尔波伊牢房后拉格斯，随后去テパ开水门。',
'最终钥匙：隆达尔基亚洞窟出口雪原上到东北祠堂找神父；可开启全部锁，建议先收洛特印记、双咒帽和贤者石。',
'地图颜色用来区分普通箱、盗贼钥匙箱、魔法钥匙箱、最终钥匙箱与罐桶拾取点；并非每个图标都有数字。']),
('dq2-ship','船、潜航与深海逐步开放','https://game8.jp/dq2/737144',[
'先完成卢普加纳北山救人，回町长报告、住旅店，再去港口取船；取得船后多个纹章目标可自由先后。',
'第一次贝利亚战后取得マーメイドハープ，再到人鱼岩场推进剧情，进入アルメハ并开放海底中层航行。',
'Switch按ZL调整上下水层，利用上下移动越过海底岩障；海面、海底中层、深海是不同移动层。',
'满月塔取得月碎片，在火山入口首次破礁并看教学后，野外岩礁可以自由破除，西海宝库与史莱姆岛路线开放。',
'沉船船首取得第二枚人鱼耳饰与瓶中信，交给アルメハ女王强化竖琴，才可继续潜至深海。',
'深海开放后再做北/南海主巢穴、北海宝库、深海两段回忆，追幽灵船也更容易；沉船和幽灵船是两个地点。']),
('dq2-emblems','五枚纹章的取得与新效果','https://game8.jp/dq2/152258',[
'月：德尔孔达尔三轮试炼后；持有后咒文有机会暴走，提高伤害或恢复量。',
'太阳：带贝尔波伊来信进入炎之祠北祭坛；持有后部分特技也能暴击。',
'星：大灯台猫法师战后；持有后防御可回复MP，长迷宫战很实用。',
'命：神秘海底基地米莉艾拉战后；提高最大HP并开放满足条件后的超绝技。',
'水：穆恩佩塔盗贼据点破坏神父战后；增强部分道具的使用效果和作用范围。',
'妖精城邀请需要月、太阳、星三纹章与人鱼剧情；拿不到邀请时先核对缺少哪段前置。']),
('dq2-equipment','关键装备、卷轴与免费战斗道具','https://game8.jp/dq2/707787',[
'复活杖在世界树森林入口南支路，可作道具施放复活，适合本身不学复活咒的主人公。',
'アストロン卷轴在洛特洞窟地下2层，能安全拖过兽化四行动与国王强化阶段；不要等卡首领时才回去拿。',
'魔法钥匙阶段优先洛特盾、星降手环和金属史莱姆防具；妖精城的魔法铠、吐息屏障卷轴应在第一次贝利亚前回收。',
'最终钥匙后龙王城地下6层贤者石提供战中群疗，卢普加纳港的やまびこのぼうし让咒文连续发两次。',
'洛特铠甲在隆达尔基亚洞窟中收，洛特盔需罗雷西亚印记；洛特剑需生锈剑、奥利哈尔刚和迈拉锻冶师。',
'最终钥匙后修剑线依次找迈拉锻冶师、梅尔基德学者、拉达托姆囚犯，再去岩山洞窟取矿；最后回锻冶师交材料。']),
('dq2-collect','小徽章、秘密地点与宝箱定位','https://game8.jp/dq2/140906',[
'先用原作地图确认所在楼层，再展开单件宝物局部地图与现场图；来源没有数字编号时保留空编号，不把清单次序当图上编号。',
'红、蓝、绿钥匙锁箱可先记录未开，拿新钥匙后集中回访。部分商品也随剧情增加，初访价格表不等于全程完整库存。',
'徽章王岛位于绿洲西侧海域，除兑换奖励外岛和馆内还可收5枚小徽章；命名神官可改名。',
'掉落、罐桶、书架、地面发光点都可能是宝物；例如特帕中央民家书架的おうえんの巻物不在普通宝箱里。',
'妖精城与人鱼圣域首领后普通遇敌会消失，想补怪物记录可在攻略前核对敌人清单。',
'满月塔、火山、隆达尔基亚洞窟和无限回廊都有宝箱怪；清单显示ミミック、ひとくいばこ、パンドラボックス时先准备。']),
('dq2-memories','七段世界回忆与移动幽灵船','https://game8.jp/dq2/736283',[
'两段中层回忆：大灯台东侧、徽章王岛南侧海底；两段深海回忆：鲁比斯祠西北、人鱼圣域东南。',
'北海海主巢穴打アルゴノート，南海海主巢穴打アビスファング；东海巢穴没有回忆与首领，别去错。',
'第七段在移动幽灵船船首，需先击败オクトネイビー；神秘海底基地外等待它经过是可用找法。',
'幽灵船第一次登船就登记传送，即使暂时不打首领也先登记；它会在中层和深海移动，先强化竖琴追踪更稳。',
'集齐后到妖精城2层找历史妖精，拿ベホマラーの巻物；普通通关后再解锁利姆尔达尔南的矮人洞窟。']),
('dq2-postgame','神龙与无限回廊准备','https://game8.jp/dq2/688081',[
'读通关存档后继续，妖精城1层北后方光柱到泽尼斯城，北面进谜之塔；不用重走整轮主线。',
'泽尼斯有教会和商人但没有旅店，先到其他城恢复。谜之塔1～5层收宝、6层神龙；打神龙前保留MP。',
'神龙许愿时限首战35回合、第二次25、以后15；可许洛特相关强装以外的鲁比斯剑、卷轴或新抽奖店。',
'七回忆齐备后进矮人洞窟，最短推进可直行到来源标记D阶梯，再直行I梯；想全收则逐支路往返。',
'无限回廊中不能传送脱离，仅6、13、20区有地面出口；出去会重置。带足道具，照来源25区加终点图逐区走。',
'第16区箭头地板要先照图对齐起点再持续按上，不能从任意站位照按；另收猫装支路须看局部操作图。']),
('dq2-ending','真正结局的完整条件','https://game8.jp/dq2/736485',[
'先完成普通结局并保存通关记录，再完成七回忆、历史妖精、矮人洞窟与无限回廊，最深处拿ひかりのたま。',
'集齐洛特剑、盾、盔、铠，在龙王城挑战龙王曾孙两形态；Game8明确只需持有，装备栏可自由配装。',
'胜后洛特剑和盾强化为ロトの竜剣、ロトのせいなる盾；再次去哈贡神殿打哈贡、西多，后接マガシドー。',
'マガシドー战剧情会恢复全员HP/MP并用洛特龙剑破暗衣；龙剑作道具降低防御与咒文耐性。',
'胜后找罗雷西亚王报告，第二次职员表后可探索阿里亚罕。先购物搜物再找城2层国王。',
'最后进入城镇西南传说勇者之家就结束真结局；尚未探索完先不要进屋。重新读取并再打最终三连战可重看。']),
('dq2-fields','道路、野外区域与怪物记录','https://gamewith.jp/dq1-2/481200',[
'按每章交通说明区分步行、船、潜航与旅之门：有海峡、河口或山脉时，世界地图上的直线距离不能替代通行路线。',
'典型绕路：穆恩佩塔去风塔先过东北桥再沿海向南；前往特帕先开船进西河道、毒沼登陆再走陆路。',
'野外怪物只采用来源明确标为周辺モンスター的清单，存于独立fieldRegions数据；迷宫怪不会被自动复制到邻近道路。',
'部分周边清单包含剧情后期变化怪物，来源没有逐项标阶段时保留阶段未知；初期罗雷西亚路线不可将全清单都当初访敌人。',
'海底和深海按卢普加纳/阿雷夫加尔德、特帕东、罗雷西亚西南及其他海域分别记录；地图道路纹理使用真实世界图，不生成假道路。'])
]
g['guideTopics']=[{'id':id,'titleZh':title,'sourceUrls':[url,'https://game8.jp/dq2/140904'],'stepsZh':steps,'coverage':'source-derived-Chinese-synthesis','verifiedDate':'2026-11-08'} for id,title,url,steps in topics]

# Add explicitly named undersea field enemy groups and corresponding regional maps.
field=json.loads((out/'dq2_field_regions.json').read_text(encoding='utf-8'))
u='https://game8.jp/dq2/737072';a=bs4.BeautifulSoup(pages[u],'html.parser').select_one('.archive-style-wrapper');h2='';h3='';regionalmaps=[]
for el in a.find_all(['h2','h3','h4','table','img']):
 if el.name=='h2':h2=el.get_text(' ',strip=True)
 elif el.name=='h3':h3=el.get_text(' ',strip=True)
 elif el.name=='table' and 'モンスター' in h2:
  enemies=[]
  for row in el.find_all('tr',recursive=False):
   cs=row.find_all('td',recursive=False)
   if len(cs)>=3:enemies.append({'nameJa':cs[0].get_text(' ',strip=True),'goldJa':cs[1].get_text(' ',strip=True),'exp':cs[2].get_text(' ',strip=True),'dropsAndStealJa':[c.get_text(' ',strip=True) for c in cs[3:]],'sourceUrl':u})
  if enemies:field['regions'].append({'id':'dq2-undersea-'+str(len(field['regions'])+1),'sectionJa':h2,'subsectionJa':h3,'scope':'undersea-field','enemies':enemies,'sourceUrl':u,'phaseZh':'需对应中层或深海航行权限。'})
 elif el.name=='img' and 'ダンジョン一覧' in h2 and not el.find_parent('table'):
  src=el.get('data-src') or el.get('src');alt=el.get('alt','')
  if src and src.startswith('http') and int(el.get('width','0') or 0)>200:regionalmaps.append({'regionJa':h3,'labelJa':alt,'url':src,'sourceUrl':u})
field['regionMaps']=regionalmaps
field['meta']['coverageSummary']={'fieldGroups':len(field['regions']),'enemyFacts':sum(len(x['enemies']) for x in field['regions']),'regionalMapImages':len(regionalmaps),'scopeZh':'含城镇周边野外与明确海底/深海分区；没有真实边界或逐段道路遇敌概率时不造数据。'}
(out/'dq2_field_regions.json').write_text(json.dumps(field,ensure_ascii=False,indent=2),encoding='utf-8')
g['fieldRegions']=field['regions'];g['regionMaps']=regionalmaps
g['meta']['coverageSummary'].update(mapImages=sum(len(x['mapImages']) for x in g['locations']),NPCFacts=sum(len(x['npcs']) for x in g['locations']),guideTopics=len(g['guideTopics']),fieldGroups=len(field['regions']),fieldEnemyFacts=sum(len(x['enemies']) for x in field['regions']))
overlay['meta']=g['meta'];overlay['chapters']=g['chapters'];overlay['guideTopics']=g['guideTopics'];overlay['fieldRegions']=field['regions'];overlay['regionMaps']=regionalmaps
for l in overlay['locations']:
 full=next(x for x in g['locations'] if x['id']==l['id'])
 for key in ['mapImages','npcs','access','guides','coverage']:l[key]=full[key]
for fn,obj in [('dq2_guide.json',g),('dq2_source_facts.json',f),('dq2_enrichment.json',overlay)]:
 (out/fn).write_text(json.dumps(obj,ensure_ascii=False,indent=2),encoding='utf-8')
print(g['meta']['coverageSummary']);print('field',field['meta']['coverageSummary'])

import json,pathlib,re,bs4,pickle,tempfile
out=pathlib.Path(__file__).parent
g=json.loads((out/'dq2_guide.json').read_text(encoding='utf-8'))
gw=json.loads((out/'gamewith_crosscheck.json').read_text(encoding='utf-8'))['records']
pages=pickle.load(open(pathlib.Path(tempfile.gettempdir())/'dq2_research_pages.pkl','rb'))
zh='''勇者の泉の洞窟|勇者之泉洞窟
妖精の城|妖精城
湖の洞窟|湖之洞窟
ムーンブルク城|穆恩布鲁克城
風の塔|风之塔
ドラゴンの角・南|龙之角·南塔
ドラゴンの角・北|龙之角·北塔
ロトの洞窟|洛特洞窟
雨のほこら|雨之祠
ガライの墓|加莱之墓
岩山の洞窟|岩山洞窟
沼地の洞窟|沼泽洞窟
ドムドーラ|多姆多拉遗迹
竜王の城|龙王城
大灯台|大灯台
世界樹の森|世界树森林
満月の塔|满月之塔
人魚の聖域|人鱼圣域
なぞの海底基地|神秘海底基地
海底火山の洞窟|海底火山洞窟
沈没船|沉船
幽霊船|幽灵船
ヌシのすみか・北海|海主巢穴·北海
ヌシのすみか・東海|海主巢穴·东海
ヌシのすみか・南海|海主巢穴·南海
ロンダルキアへの洞窟|通往隆达尔基亚的洞窟
ハーゴンの神殿|哈贡神殿
ドワーフの洞窟|矮人洞窟
無限の回廊|无限回廊
謎の塔|谜之塔
ローレシア|罗雷西亚
リリザ|利利萨
サマルトリア|萨玛托利亚
夢見の湖|梦见之湖
ムーンペタ|穆恩佩塔
森の廃村|森林废村
メダル王の島|徽章王之岛
ルプガナ|卢普加纳
ラダトーム|拉达托姆
ガライ|加莱
マイラ|迈拉
メルキド|梅尔基德
リムルダール|利姆尔达尔
ベラヌール|贝拉努尔
ペルポイ|贝尔波伊
ザハン|扎罕
デルコンダル|德尔孔达尔
テパ|特帕
アルメハ|阿尔梅哈
アリアハン|阿里亚罕
ローラの門|萝拉之门
ムーンブルク西のほこら|穆恩布鲁克西祠
ラーのほこら|拉之祠
オアシス|绿洲
ルプガナ北の山中|卢普加纳北山
ルプガナ北のほこら|卢普加纳北祠
精霊のほこら|精灵祠
聖なるほこら|圣祠
ベラヌール北のほこら|贝拉努尔北祠
人魚の岩場|人鱼岩场
炎のほこら|炎之祠
舟守のほこら|舟守祠
北のお告げ所|北方神谕所
ローレシア南のほこら|罗雷西亚南祠
テパ東のほこら|特帕东祠
海底宝物庫・北海|海底宝库·北海
海底宝物庫・西海|海底宝库·西海
海底宝物庫・南海|海底宝库·南海
ルビスのほこら|鲁比斯祠
ロンダルキア南のほこら|隆达尔基亚南祠
ロンダルキアのほこら|隆达尔基亚祠
雪原のほこら|雪原祠
ゼニスの城|泽尼斯城'''
zh=dict(x.split('|',1) for x in zh.splitlines())
optional={
'ガライの墓':('取得最终钥匙后，从ガライ北侧建筑的专用通道进入；不能直接以ルーラ飞到墓地。','先登记加莱，再走北建筑通路。迷宫地图按地下1～4层核查，别套用旧版楼梯或宝箱编号。'),
'沼地の洞窟':('由マイラ向西，绕山脉转南进入；取得船后可到这一带。','地下2层魔法钥匙箱有メタスラヘルム，是中期可回收的强力防具。'),
'ドムドーラ':('取得船后，从卢普加纳往东南的沙漠附近前往。','可打メタルスライム练级并拿あくま斬りの巻物；此处是遗迹迷宫，不能当成有完整商店的普通城镇。'),
'幽霊船':('海中中层与深海不断移动；推荐竖琴强化后再追，留意小地图图标。首次登船即登记ルーラ，即使暂时打不过也先进入。','在神秘海底基地外等待经过是第二来源推荐找法。船内先往南绕，逆时针到船首打オクトネイビー；前段箱是パンドラボックス。胜后拿回忆，骸骨消失才能开女帝のムチ与大海賊のコート两箱。'),
'ヌシのすみか・北海':('需要强化人鱼竖琴；从妖精城乘船向南到东南，连续潜至深海，在高台岩壁找横洞。','入洞分岔向左到深处打アルゴノート。防混乱，物防很高可主打强咒；胜后拿世界回忆，另收女神の盾、小徽章。'),
'ヌシのすみか・東海':('需要深海；位于罗雷西亚南祠以西一带深海岩壁横洞，照原图定位。','该处无首领及世界回忆；收やみのころも、命の石、3768G与小徽章。Game8个别南/东说明段写反，以顶部表和GameWith交叉确认。'),
'ヌシのすみか・南海':('需要深海；从炎之祠乘船往西南，在尽头岩壁找横洞。','向北打アビスファング，防睡眠、即死与睡眠追击，黑雾期间靠道具和特技。胜后拿回忆，另收しあわせのくつ、8772G、小徽章。'),
'ガライ':('取得船后，从卢普加纳乘船向北。','北港可拿小徽章；最终钥匙后由北建筑进入加莱墓。'),
'リムルダール':('从ドムドーラ传送点乘船往东，或从龙王城一带乘船靠近。','教会有小徽章，可购物与抽奖。通关后集七回忆并找历史妖精，南边出现矮人洞窟。'),
'ルプガナ北のほこら':('地点文章的现行文字没有明确独立陆路说明；罗雷西亚南祠的旅之门可到此地下1层，出房间需要魔法钥匙。','分地下1层与外观两部分搜集；没有小徽章，别采用下方旧版的传送体系。'),
'精霊のほこら':('所读现行版文章只给地图与物品表，未明确文字进入路线；使用世界地图真实标点定位。','1层明确无物品，2层有まんげつのリング与まほうのせいすい；现行来源说明无小徽章。'),
'ベラヌール北のほこら':('从贝拉努尔向东过桥再往北，步行距离较长，先住店补给。现行版没有旧版三旅之门。','魔法钥匙后收しあわせのぼうし，步行回MP；最终钥匙后中央箱有小徽章。文章下方旧传送说明与现行版本冲突，已不采用。'),
'北のお告げ所':('传送勇者之泉洞窟，改乘船后稍向南。','北边罐子有すばやさのたね和スタミナのたね；主线无需访问，现行文章明确无小徽章。'),
'ローレシア南のほこら':('取得船后渡海到罗雷西亚南方祠堂；真实位置以原世界地图为准。','旅之门可到卢普加纳北祠地下1层，离开目的地房间需要魔法钥匙。'),
'テパ東のほこら':('从满月之塔传送点上船后向东。','左房最右箱有小徽章；最终钥匙后再开はやぶさの剣、ほのおのよろい两箱，其余表内宝物可先收。'),
'海底宝物庫・南海':('人鱼竖琴与魔法钥匙必需。从世界树森林乘船向西北、偏隆达尔基亚岩山一侧，潜至中层高台找神殿。','守卫キラーマシン，建议40～42级，雷系输出与防御提升；胜后用魔法钥匙开门，拿メタスラの盾和ゾンビキラー。'),
'海底宝物庫・西海':('先在火山入口触发月碎片教学，再从穆恩布鲁克西祠出海，破岩礁穿过水道，到史莱姆岛正上方下潜；需要魔法钥匙。','守卫キラーマシン2及部分キラーマシン，建议45～48级。速度高，先提速给辅助角色再强化王子雷系速攻；收小徽章、りりょくの杖、海賊王の首かざり、つるぎのまいの巻物。'),
'海底宝物庫・北海':('强化竖琴与最终钥匙必需。从リリザ乘船向南南东，连续下潜至深海，贴壁找宝库。','建议48～50级；东侧2只キラーマジンガ，中央1只加キラーマシン2×2，西侧キラーマシン2×3。反咒盾期间主打物理，防高速连击；收ビーストの巻物、イオナズンの巻物、小徽章等。'),
'夢見の湖':('取得ようせいのラッパ后，从湖之洞窟传送点向东南。','走到湖深处触发妖精城出现，后续可直接传送妖精城；此地点宝物条目来源未明确，不以空数组代表已经证实没有宝物。'),
'ゼニスの城':('普通通关后，由妖精城1层北后方光柱传送；入口妖精会提示，但不强制先交谈。','有教会、道具商人与许愿后才开放的抽奖店，没有旅店；神龙战前要回其他城恢复。徽章在深处衣柜，途中门需要魔法钥匙。'),
}
access={
'勇者の泉の洞窟':'萨玛托利亚东北；与国王交谈后王女暂时支援同行。',
'妖精の城':'月、太阳、星纹章与人鱼事件齐备后，在雨之祠及岩场取得妖精喇叭；从梦见之湖深处进入。',
'湖の洞窟':'萝拉之门西北；最深处首领后拿渴水壶，用于排掉萝拉之门积水。',
'ムーンブルク城':'穆恩佩塔西南，须先从萝拉之门地下通道过海峡。',
'風の塔':'穆恩佩塔东北桥渡过后沿海岸向南绕行，不能由城镇直线向东硬走。',
'ドラゴンの角・南':'过穆恩布鲁克西祠向西到绿洲，再往北；需先到风塔拿斗篷。',
'ドラゴンの角・北':'从南塔6层北侧触发风斗篷渡海事件后抵达。',
'ロトの洞窟':'拉达托姆向北；船开放后可探索。',
'雨のほこら':'拉达托姆东北；先完成龙王城的线索事件。',
'岩山の洞窟':'拉达托姆西南，绕山脉西侧抵达；矿石线索需先找迈拉锻冶师、梅尔基德学者和囚犯。',
'竜王の城':'从拉达托姆王座厅及2层阳台事件取得虹水滴，再于东侧陆地尽头架桥。',
'大灯台':'从卢普加纳乘船往东南；船开放后可到。',
'世界樹の森':'贝拉努尔西面的岛；老神父给予神圣路标后进入救王子线。',
'満月の塔':'テパ南面的水道，先拿水门钥匙并开テパ西北水门。',
'人魚の聖域':'人鱼竖琴开放海底后，从アルメハ乘船向东；北入口更接近主线梯。',
'なぞの海底基地':'大灯台西北的海底；先在アルメハ女王家更新目的地，门需要魔法钥匙。',
'海底火山の洞窟':'炎之祠西北的海域，入口用月碎片破岩礁。',
'沈没船':'ガライ或卢普加纳北方海底，贴前方崖壁寻找；先推进女王耳饰线索。',
'ロンダルキアへの洞窟':'从贝拉努尔教会旅之门到南祠，再向西到洞口；邪神像开门。',
'ハーゴンの神殿':'隆达尔基亚祠先绕雪原祠登记，然后往西；殿内要用鲁比斯守护破幻。',
'ドワーフの洞窟':'普通通关后集齐七段回忆，找妖精城2层历史妖精；入口在リムルダール南。',
'無限の回廊':'矮人洞窟地下3层找矮人同意，北西井下地下4层进入。',
'謎の塔':'普通通关后，经妖精城到泽尼斯城，北出口进入。',
'ローレシア':'新游戏起点；后续可用ルーラ返回。',
'リリザ':'从罗雷西亚向西北前往萨玛托利亚时经过，位于城南方路线上。',
'サマルトリア':'罗雷西亚西北，利利萨往北。',
'ムーンペタ':'从萝拉之门地下通道东出口出来后向南。',
'森の廃村':'穆恩佩塔东南；海底基地命纹章后找德尔孔达尔国王取得后续。',
'メダル王の島':'船入手后可前往的徽章兑换据点，位置见真实世界图。',
'ルプガナ':'从北龙角向东北；港口取得本作船只。',
'ラダトーム':'卢普加纳乘船往东到阿雷夫加尔德大陆，再向东进入。',
'マイラ':'雨之祠东面；后期锻冶师在武器防具店2层。',
'メルキド':'传送神秘海底基地，浮上海面后往北。',
'ベラヌール':'绿洲乘船往南，到世界地图西南大陆。',
'ペルポイ':'世界树森林乘船向西。',
'ザハン':'世界树森林乘船向东，东南部小岛上的渔村。',
'デルコンダル':'罗雷西亚乘船往南，岛西狭水道穿进内陆；带老神父推荐信走城门事件。',
'テパ':'人鱼圣域浮上海面往西北，进西侧河道到毒沼边登陆，再沿陆路到村。',
'アルメハ':'取得竖琴后在人鱼岩场南侧触发事件到达海底王国。',
'アリアハン':'マガシドー击破并向国王报告后，第二次职员表结束进入真正结局。',
'ローラの門':'萨玛托利亚西面，先持通行证；湖洞首领给的渴水壶才能开地下通道。',
'ムーンブルク西のほこら':'穆恩布鲁克西南；取得风斗篷后继续穿过西出口。',
'ラーのほこら':'穆恩布鲁克城东面，中央取得拉之镜。',
'オアシス':'过穆恩布鲁克西祠向西；再往北就是南龙角。',
'ルプガナ北の山中':'卢普加纳中央事件后到镇北山中，救人首领战后返回町长。',
'聖なるほこら':'大灯台北侧海域，先从罗雷西亚城宝库拿洛特印记，再找神父拿洛特盔。',
'人魚の岩場':'先在ザハン找东边渔夫标记海域，再乘船向东。',
'炎のほこら':'世界树森林乘船向东，持贝尔波伊来信可通过自警团。',
'舟守のほこら':'ザハン向西的岛祠；先推进渔夫与人鱼岩场事件。',
'ルビスのほこら':'德尔孔达尔西北深海，需先用沉船耳饰让女王强化竖琴。',
'ロンダルキア南のほこら':'贝拉努尔教会深处旅之门连到这里。',
'ロンダルキアのほこら':'离开隆达尔基亚洞窟后往东北，雪原普通怪很强。',
'雪原のほこら':'在隆达尔基亚祠至哈贡神殿的雪原路线上绕访，先登记再向西进神殿。',
}
npctext='''ローレシア|道具屋の女主人|城下町道具店门口|先与她交谈，再回城找兵士长。|1
ローレシア|兵士長|城堡西南|完成店主对话后找他，触发送行流程。|1
ローレシア|ローレシア王|初期城门外右侧、平时王座厅|初期给予公主之爱；通关及真结局后回来报告。|1
サマルトリア|サマルトリア王|王座厅|询问王子行踪；带王子回来拿萝拉之门通行证。|1
リリザ|サマルトリア王子|旅店右下|王家往返事件后与他对话加入队伍。|1
勇者の泉の洞窟|老人|洞窟西北最深处|交谈后返回罗雷西亚王座厅更新线索。|1
ムーンペタ|兵士|城镇西北|听取穆恩布鲁克废城线索。|2
ムーンペタ|犬（ムーンブルク王女）|城镇北部|带ラーの鏡对话，选择使用镜子解咒。|2
ルプガナ|町長|镇中央|北山救人战后向他报告，再住旅店去港口拿船。|3
ラダトーム|ラダトーム王|城堡王座厅|谈完再上2层阳台，推进虹水滴事件。|4
竜王の城|りゅうおうのひ孫|地下6层最深处|首次给生锈剑与纹章线索；通关后持洛特装备及光球路线进度再挑战。|4
ベラヌール|老神父|救王子段旅店；后续教会地下床边|给神圣路标和推荐信；后期从国王战归来探望。|5
デルコンダル|デルコンダル王|城堡王座|持推荐信开启三轮试炼；后期可再与本人战斗。|5
ザハン|漁師|村东|标记人鱼海域。|6
ザハン|犬|东北家外更东北|人鱼事件后调查狗面前地面得金托盘。|6
炎のほこら|自警団|通往北祭坛的途中|持贝尔波伊来信即可继续。|6
人魚の岩場|人魚|岩场南部|按耳饰、妖精喇叭、人鱼竖琴剧情阶段分别交谈推进。|7
妖精の城|夢の妖精|王座厅|五纹章齐后报告，给妖精手镯；火山/国王段之后继续报告。|9
妖精の城|歴史の妖精|2层|集七回忆领取群疗卷轴；普通通关后告知矮人洞窟。|14
アルメハ|人魚の女王|女王广场与女王家|圣域战后给魔法钥匙；带沉船耳饰和瓶中信强化竖琴开放深海。|8
メルキド|学者|西侧守护者之家2层|最终钥匙后进入房间，听奥利哈尔刚线索。|13
マイラ|メルキドの守護者|北温泉及事件后出口附近|事件后调查原位发光点拿妖精笛，再对话。|10
マイラ|伝説の鍛冶師の子孫|武器防具店2层|交生锈剑与奥利哈尔刚修复洛特剑。|13
ラダトーム|囚人|教会2层|按锻冶师、学者、囚犯顺序听矿石线索。|13
ペルポイ|黒いモーモン|东建筑右牢房|看事件后走入后方找拉格斯，满月塔归来再见。|10
ペルポイ|ラゴス|黑色モーモン牢房后面|取得水门钥匙，之后步行离村看完两次事件。|10
テパ|ドン・モハメ|村内制作水之羽衣事件相关|需あまつゆのいと与せいなる織り機；制作细节以地点来源为准。|10
ドワーフの洞窟|ドワーフ|地下3层中央|对话选是，北西井通地下4层无限回廊。|14
ゼニスの城|商人|入口左侧|售精灵饮药与装备；此城没有旅店。|14
謎の塔|しんりゅう|6层最深处|限时击败后许愿。|14
アリアハン|アリアハン王|城堡2层|交谈后再去西南勇者之家结束真结局。|14'''
npcs={}
for line in npctext.splitlines():
 place,name,where,action,ch=line.split('|');npcs.setdefault(place,[]).append({'nameJa':name,'whereZh':where,'actionZh':action,'sourceUrl':'https://game8.jp/dq2/'+g['chapters'][int(ch)-1]['sourceUrls'][0].split('/')[-1],'verifiedDate':'2026-11-08'})
# Named craftsman is checked directly against current Teppa page, rather than inferred.
tepatext=bs4.BeautifulSoup(pages['https://game8.jp/dq2/273341'],'html.parser').select_one('.archive-style-wrapper').get_text(' ',strip=True)
if 'ドン・モハメ' not in tepatext:npcs['テパ']=[]
exits={
'ローレシア':[('舟守のほこら','城堡西南旅之门','步行进入传送房，目的地箱需盗贼钥匙')],
'舟守のほこら':[('ローレシア','室内旅之门','返回罗雷西亚城')],
'ローレシア南のほこら':[('ルプガナ北のほこら','旅之门','目的地地下1层出房间需魔法钥匙')],
'ルプガナ北のほこら':[('ローレシア南のほこら','地下1层旅之门','房间与外部通路需要魔法钥匙')],
'ベラヌール':[('ロンダルキア南のほこら','教会深处旅之门','主线后期从这里进入隆达尔基亚区域')],
'妖精の城':[('ゼニスの城','1层北后方光柱','普通通关后出现')],
'ゼニスの城':[('謎の塔','城北出口','普通通关后路线')],
'ドワーフの洞窟':[('無限の回廊','地下3层西北井→地下4层入口','先与矮人交谈同意')],
'ハーゴンの神殿':[('ハーゴンの神殿','最终门右侧旅之门','开启1层与7层往返，便于回城整备')],
'ムーンブルク西のほこら':[('オアシス','祠堂西出口','向西到绿洲，再往北到南龙角')],
'ローラの門':[('ムーンペタ','地下通道东出口','先用渴水壶去水；出通道向南')],
}

for loc in g['locations']:
 name=loc['nameJa'];loc['nameZh']=zh.get(name,name);loc['translationStatus']='working-Chinese-translation-JP-retained'
 matched=[step for chapter in g['chapters'] for step in chapter['steps'] if step['locationJa']==name]
 loc['guides']=[{'textZh':s['detailZh'],'sourceUrl':s['sourceUrl'],'stepId':s['id']} for s in matched]
 loc['npcs']=npcs.get(name,[])
 loc['facilities']=[{'nameJa':sh['nameJa'],'kind':'shop','sourceUrl':loc['sourceUrl']} for sh in loc['shops']]
 loc['access']={'textZh':access.get(name,optional.get(name,('现行来源尚无明确文字路线，按来源真实地图定位。',''))[0]),'sourceUrl':loc['sourceUrl'],'status':'source-derived' if name in access or name in optional else 'source-gap'}
 if name in optional:loc['guides'].append({'textZh':optional[name][1],'sourceUrl':loc['sourceUrl']})
 loc['exits']=[{'toJa':dest,'viaZh':via,'conditionZh':req,'sourceUrl':loc['sourceUrl']} for dest,via,req in exits.get(name,[])]
 loc['coverage']['npcs']='verified-key-event-NPCs' if loc['npcs'] else 'no-explicit-NPC-fact-collected'
 loc['coverage']['access']=loc['access']['status'];loc['coverage']['guides']='Chinese-source-synthesis' if loc['guides'] else 'source-map-and-table-only'
 loc['coverage']['exits']='verified-known-connection' if loc['exits'] else 'not-exhaustively-described'
 # Pair only clearly named articles; surrounding field groups remain separate.
 recs=[r for r in gw if name in r['titleJa'] or (name.startswith('ドラゴンの角') and 'ドラゴンの角' in r['titleJa']) or (name.startswith('ヌシのすみか') and 'ヌシのすみか' in r['titleJa']) or (name.startswith('海底宝物庫') and '海底宝物庫' in r['titleJa'])]
 recs=[r for r in recs if r['sourceUrl'].split('/')[-1] not in ['481200','481245','481246','527913','527777']]
 loc['secondarySourceUrls']=[r['sourceUrl'] for r in recs]
 loc['facilityImages']=[m for r in recs for m in r.get('facilityImages',[])]
 loc['secondaryShops']=[sh for r in recs for sh in r.get('shops',[])]
 loc['fieldEncounterRefs']=[group['sourceUrl'] for r in recs for group in r.get('encounterGroups',[]) if group['scope']=='surrounding-field']
 for t in loc['treasures']:
  # Currency spellings vary; do not overwrite exact Japanese item name.
  candidates=[c for r in recs for c in r.get('treasureConstraints',[]) if c['itemJa'].replace('】','')==t['itemJa'] and c['requiredKeyJa']]
  if len(candidates)==1:
   c=candidates[0];key=c['requiredKeyJa'];keyzh={'盗賊の鍵':'盗贼钥匙','魔法の鍵':'魔法钥匙','最後の鍵':'最终钥匙'}.get(key,key)
   t['accessRequirements']=[{'keyJa':key,'keyZh':keyzh,'sourceFloorJa':c['floorJa'],'sourceUrl':c['sourceUrl'],'matchingPolicy':'unique-item-within-matched-location-article'}]
   t['howZh']='需要'+keyzh+'；按'+(t['floor'] or '来源楼层')+'的物品局部地图及现场截图定位。'
 if name=='ゼニスの城':
  loc['facilities'].extend([{'nameJa':'教会','kind':'church','sourceUrl':loc['sourceUrl']},{'nameJa':'ふくびき屋','kind':'lottery','conditionZh':'神龙许愿开放，每次3张券','sourceUrl':loc['sourceUrl']}]);loc['facilityNotesZh']='没有旅店；战前恢复请回其他城。'
 if name=='アルメハ':loc['facilities'].append({'nameJa':'宿屋','kind':'inn','whereZh':'城镇西北','sourceUrl':loc['sourceUrl']})
 if name=='リリザ':loc['facilities'].extend([{'nameJa':'宿屋','kind':'inn','sourceUrl':loc['sourceUrl']},{'nameJa':'教会','kind':'church','whereZh':'城镇东北','sourceUrl':'https://gamewith.jp/dq1-2/481200'}])
 if name=='オアシス':loc['facilities'].append({'nameJa':'ふくびき所','kind':'lottery','sourceUrl':loc['sourceUrl']})
 if name=='メダル王の島':loc['facilities'].append({'nameJa':'メダル王','kind':'medal-exchange','sourceUrl':loc['sourceUrl']})
 if name=='リムルダール':loc['facilities'].append({'nameJa':'ふくびき所','kind':'lottery','sourceUrl':loc['sourceUrl']})
 if name in ['ドワーフの洞窟','ゼニスの城']:loc['coverage']['enemies']='source-explicit-no-random-encounters'
 if name=='妖精の城':loc['encounterCaveatZh']='击败第一次贝利亚后普通遇敌消失，图鉴相关敌人宜在此前确认。'
 if name=='人魚の聖域':loc['encounterCaveatZh']='圣域首领击破后不再出现普通敌人，收集图鉴时留意。'

memorydata='''大灯台東の海底|大灯台|1次潜水|传送大灯台，上船往东后下潜，调查世界回忆。|
メダル王の島南の海底|メダル王の島|1次潜水|离开徽章王岛，在海底往南行，调查世界回忆。|
幽霊船の船首|幽霊船|推荐深海开放|找到移动幽灵船并登记，从南绕到船首打オクトネイビー，胜后拾取回忆。|オクトネイビー
ルビスのほこら北西の深海|ルビスのほこら|2次潜水|离开鲁比斯祠，往西北并潜至深海拾取回忆。|
人魚の聖域南東の深海|人魚の聖域|2次潜水|圣域外向东南海域下潜到深海，调查回忆；以来源局部地图校准。|
ヌシのすみか・北海|妖精の城|2次潜水|妖精城乘船向南到东南、潜到深海横洞，左岔路进深处，首领后拾回忆。|アルゴノート
ヌシのすみか・南海|炎のほこら|2次潜水|炎之祠西南深海横洞，往北打首领，再拾回忆。|アビスファング'''
g['memories']=[]
for i,line in enumerate(memorydata.splitlines(),1):
 name,anchor,req,how,boss=line.split('|')
 g['memories'].append({'id':f'dq2-memory-{i:02}','sourceNumber':i,'nameJa':name,'nearestAnchorJa':anchor,'requirementZh':req,'howZh':how,'bossJa':boss or None,'sourceUrl':'https://game8.jp/dq2/736283','crosscheckUrl':'https://gamewith.jp/dq1-2/527913'})

infinite='''东侧25G木桶旁裂地落下，到第2区。|敏捷种子、力量种子、25G
中央偏西的梯子下到第3区。|24G
东北楼梯下到第4区。|23G
西南出口到第5区。|22G、幸运种子
向西南出口前进；北箱收ぱふぱふの巻物，出口旁箱为パンドラボックス。|ぱふぱふの巻物
东出口继续；西侧可出地面，出去会重置全程。|女神の盾、20G、守护种子
东南楼梯到第8区；西箱收バシルーラの巻物，出口附近箱是潘多拉。|バシルーラの巻物
南边木桶拿徽章，再走西南楼梯。|小徽章、福引券、智力种子、神奇果实、18G
南出口继续，出口附近脚边调查いぬぐるみ。|いぬぐるみ
中央箱拿ぶきみな巻物，走西北出口。|ぶきみな巻物、体力种子、16G
两个箱都是潘多拉，走中央西侧楼梯到第12区。|15G（盗贼钥匙）
南房中央地面有徽章，其他房中央地面有敏捷种子和福引券；走东南梯。|小徽章、敏捷种子、福引券、14G
西南是可出地面的重置出口，继续主路向东南；附近箱为潘多拉。|特药草、守护种子
东边伤害地板脚下拿星降手环；调查龙王王座移开，显出向下阶梯。|ほしふるうでわ、力量种子、12G
单纯楼梯区，无物品，顺路到第16区。|
旋转箭头地板区，按来源图标定初始站位后持续按上可到出口；想拿西北ねこぐるみ则按局部操作图走支路。|ねこぐるみ
取西北楼梯到第18区。|9G
此区无物品，顺楼梯下到第19区。|
此区无物品，直行到第20区。|
西南罐拿徽章，东南楼梯继续；此区可离开地面但会重置。|小徽章、幸运种子、体力种子、6G
东北楼梯到第22区。|5G、福引券、智力种子
先北路拿はてんの月輪，再走南路；南箱为潘多拉，调查附近红眼石像出下一层楼梯。|はてんの月輪
入口向左过两间房，桶中拿徽章；西北箱ふしぎなぼうし，走东南梯。|小徽章、ふしぎなぼうし、3G
南小房桶拿そうてんのトーガ，西南旅之门到第25区。|そうてんのトーガ、2G、命のきのみ
北边锁门后用レミラーマ找かいしんの巻物；东南倒罐拿やまびこのぼうし，再走西南梯到终点。|かいしんの巻物、神奇果实、精灵饮药、やまびこのぼうし'''
post=bs4.BeautifulSoup(pages['https://game8.jp/dq2/688081'],'html.parser').select_one('.archive-style-wrapper')
infiniteImages={}
for flow in post.select('.a-flowChart__container'):
 title=flow.select_one('.a-flowChart__title').get_text(' ',strip=True)
 m=re.search(r'無限の回廊\s*(\d+)マップ目',title)
 if m:
  image=flow.select_one('.a-flowChart__content-wrapper img')
  if image:infiniteImages[int(m.group(1))]=image.get('data-src') or image.get('src')
g['infiniteCorridorAreas']=[]
for i,line in enumerate(infinite.splitlines(),1):
 how,items=line.split('|');g['infiniteCorridorAreas'].append({'id':f'dq2-infinite-area-{i:02}','sourceAreaNumber':i,'floorLabel':f'無限の回廊_{i}マップ目','routeZh':how,'lootHighlightsZh':items,'sourceMapImageUrl':infiniteImages.get(i),'canExitToWorld':i in [6,13,20],'sourceUrl':'https://game8.jp/dq2/688081','crosscheckUrl':'https://gamewith.jp/dq1-2/527800'})
g['infiniteCorridorAreas'].append({'id':'dq2-infinite-goal','floorLabel':'ひかりのたまの最奥 / GameWithエリア26','routeZh':'最深处拿ひかりのたま；此终点可用ルーラ离开。','lootHighlightsZh':'光之球','sourceAreaNumber':None,'sourceUrl':'https://game8.jp/dq2/688081','crosscheckUrl':'https://gamewith.jp/dq1-2/527800'})
inf=next(x for x in g['locations'] if x['nameJa']=='無限の回廊');inf['roomRoutes']=g['infiniteCorridorAreas']
g['optionalBosses']=[
{'nameJa':'オクトネイビー','locationJa':'幽霊船','tacticZh':'2～3次行动，防降防与蓄力物理；大防御时调整行动，マホカンタ时避免咒文反弹。胜后拿回忆及此前骸骨堵住的两箱。','sourceUrl':'https://game8.jp/dq2/736399'},
{'nameJa':'アルゴノート','locationJa':'ヌシのすみか・北海','tacticZh':'物防很高且减防耐性高，强咒更稳定；三类减伤与混乱抗性，半血后频繁消增益需速战。','sourceUrl':'https://game8.jp/dq2/736294'},
{'nameJa':'アビスファング','locationJa':'ヌシのすみか・南海','tacticZh':'睡眠后追击与即死威胁大，立刻唤醒并带复活杖；黑雾期间用道具和特技。','sourceUrl':'https://game8.jp/dq2/736294'},
{'nameJa':'キラーマシン','locationJa':'海底宝物庫・南海','recommendedLevel':'40～42','tacticZh':'雷系与防御提升；胜后仍需魔法钥匙开门。','sourceUrl':'https://game8.jp/dq2/736405'},
{'nameJa':'キラーマシン2','locationJa':'海底宝物庫・西海','recommendedLevel':'45～48','tacticZh':'高速高物攻；星降手环让辅助先动，强化王子雷系输出。','sourceUrl':'https://game8.jp/dq2/736405'},
{'nameJa':'キラーマジンガ','locationJa':'海底宝物庫・北海','recommendedLevel':'48～50','tacticZh':'反咒时物理为主，准备高速四连击与复活，东/中/西守卫组合不同。','sourceUrl':'https://game8.jp/dq2/736405'}]
g['fieldRegionsFile']='dq2_field_regions.json';g['secondaryFactsFile']='gamewith_crosscheck.json'
g['meta']['coverageSummary']={'locations':len(g['locations']),'chapters':14,'ChineseMainSteps':sum(len(c['steps']) for c in g['chapters']),'treasures':sum(len(l['treasures']) for l in g['locations']),'NPCFacts':sum(len(l['npcs']) for l in g['locations']),'mapImages':sum(len(l['mapImages']) for l in g['locations']),'infiniteCorridorAreas':26,'memories':7}
(out/'dq2_guide.json').write_text(json.dumps(g,ensure_ascii=False,indent=2),encoding='utf-8')
# Compact, easy-to-consume overlay; baseline IDs remain unchanged.
overlay={'meta':g['meta'],'chapters':g['chapters'],'locations':[{k:v for k,v in l.items() if k in ['id','articleId','sourceUrl','nameJa','nameZh','translationStatus','chapterIds','access','guides','npcs','facilities','secondaryShops','facilityImages','fieldEncounterRefs','exits','coverage','encounterCaveatZh','facilityNotesZh','roomRoutes']} for l in g['locations']],'memories':g['memories'],'infiniteCorridorAreas':g['infiniteCorridorAreas'],'optionalBosses':g['optionalBosses'],'sourceDiscrepancies':g['sourceDiscrepancies']}
(out/'dq2_enrichment.json').write_text(json.dumps(overlay,ensure_ascii=False,indent=2),encoding='utf-8')
print('ENRICHED',g['meta']['coverageSummary'],'LOCK FACTS',sum(sum(bool(t.get('accessRequirements')) for t in l['treasures']) for l in g['locations']))

OT2.addAccess("winterlands", {
  "infernal_castle": { "via": "crowd", "from": ["beneath_the_wall"], "unlock": "4 人队伍中至少 3 人各带 1 名同行 NPC，合计达到 7 人", "how": "在巨壁地下洞，用帕尔提提欧「雇佣」、泰米诺斯「引导」、阿格妮娅「诱惑」或奥修特「收服」让队伍中至少3人各带1名NPC，再让7人一起走上吊桥；桥会断裂，把全队摔进奈落之城。触发后可沿断桥残骸往返。" },
  "beneath_the_wall": { "via": "hidden", "from": ["southern_stormhail_snows"], "how": "南斯托姆黑尔雪道城墙下的小洞窟，内有存档点、吊桥和一个宝箱；是奈落之城的唯一入口。" },
  "frigit_isle": { "via": "sea", "from": ["sundering_sea/on_the_water"], "unlock": "奥斯瓦尔德全部章节通关，并拥有自有船只", "how": "第1章越狱后无法返回；之后乘自己的船经分隔之海重返（海上北部的弗利吉特岛），首次登岛后恢复快速旅行，届时正门开放。" },
  "frigit_isle_anchorage": { "via": "sea", "from": ["sundering_sea/on_the_water"], "unlock": "奥斯瓦尔德全部章节通关，并拥有自有船只", "how": "越狱剧情中乘冰舟离开后无法返回；通关后乘自有船只从分隔之海登岛。" },
  "ruffians_hideout": { "via": "gate", "from": ["eastern_cape_cold_snows"], "unlock": "陆路需用比试、唆使、偷袭或让人睡着等地图指令击倒门口无赖；也可无条件走水路", "how": "从东科尔德凯普雪道存档点向东是被无赖堵住的陆路入口；不想打他时，从存档点向北过桥，在道路转弯前的码头乘独木舟一直向东，可从水路直接进入据点。" },
  "altar_of_the_scholarking": { "via": "hidden", "from": ["western_winterbloom_snows"], "unlock": "奥斯瓦尔德在队时调查神像可得 EX 技能", "how": "从温特布鲁姆西口进入西温特布鲁姆雪道，向西走到桥边，从斜坡下到结冰湖面；不要上岸，沿冰面钻到桥下，贴着桥北侧墙壁向北走进视觉死角即可发现入口。" },
  "sacred_peak_altahe": { "via": "gate", "from": ["stormhail"], "unlock": "奥修特第2章古拉奇斯篇；白天用奥修特「唆使」击败看守的圣堂骑士", "how": "入口在斯托姆黑尔大桥北侧楼梯上；章节开始后先到大桥，再上北侧楼梯处理守卫。" }
});

OT2.addAccess("wildlands", {
  "altar_of_trader": { "via": "hidden", "from": ["south_crackridge_wilds"], "how": "南克拉克里奇荒道通往西克拉克里奇荒道的入口以南有一条矿道，矿道里的隐藏通道（内有宝箱）通往祭坛。" }
});

OT2.addAccess("leaflands", {
  "starfall_spring": { "via": "boat", "from": ["east_cropdale_trail", "south_cropdale_trail"], "how": "只能走水路：在东库罗普提尔森道下河乘独木舟，经南库罗普提尔森道一路向南即到洞窟。" },
  "animal_trail": { "via": "boat", "from": ["forest_path"], "unlock": "卡丝蒂与奥修特交汇篇上篇开放后可进入", "how": "从库罗普提尔北口进入森林小道，沿北侧道路向东走到码头，乘独木舟渡过河流，继续向东即可进入兽径。" },
  "altar_lady_of_grace": { "via": "hidden", "from": ["north_wellgrove_trail"], "unlock": "阿格妮娅在队时调查神像可得 EX 技能", "how": "北韦尔格罗夫森道北侧，通往南库罗普提尔森道的道路附近，入口在悬崖下被原木半遮挡。" },
  "mothers_garden_orphanage": { "via": "story", "from": ["mothers_garden"], "unlock": "需先偷到修女服伪装", "how": "穿上修女服伪装后才能进入孤儿院。" }
});

OT2.addAccess("harborlands", {
  "lair_of_the_usurper": { "via": "boat", "from": ["canalbrine_bridge"], "how": "入口在大桥北侧小岛的半截塔内：从桥西端下桥，乘独木舟穿过桥墩缺口驶向小岛。" },
  "cavern_of_the_moon_and_sun": { "via": "hidden", "from": ["western_conning_creek_coast"], "unlock": "泰米诺斯与索洛奈交汇篇第2部；Lv45", "how": "西康宁湾海道北部出口南侧海滩，左边有隐藏通路通往洞窟。" },
  "cavern_of_the_sea_god": { "via": "boat", "from": ["conning_creek"], "unlock": "奥修特章节", "how": "位于康宁湾港口外的小岛，需从港口码头划船前往。" },
  "altar_of_the_charitable": { "via": "hidden", "from": ["northern_conning_creek_coast"], "unlock": "卡丝蒂在队时调查神像可得 EX 技能", "how": "从康宁湾向西进入北康宁湾海道，沿路向北到岔路后转向东侧海滩，走上伸入海中的长沙洲；祭坛入口就在沙洲最东端的石造建筑内，不需要乘船。" },
  "roque_island_anchorage": { "via": "sea", "from": ["sundering_sea/anchorage_canalbrine"], "unlock": "拥有自有船只（完成帕尔提提欧「商机的气息：特洛甫霍普篇」）", "how": "卡纳尔布莱恩以南海上的洛克岛，只能乘自有船只抵达。" },
  "roque_island": { "via": "story", "from": ["roque_island_anchorage"], "unlock": "帕尔提提欧最终章", "how": "从洛克岛停泊所登岛；第4章开始后需从酒馆（西南）的暗门绕到总部侧街。" }
});

OT2.addAccess("hinoeuma", {
  "sandflow_pass": { "via": "story", "from": ["sai"], "unlock": "卡丝蒂第2章开始后开放", "how": "入口在赛之街城西侧（西北医疗帐篷以南）。" },
  "decaying_temple": { "via": "solo", "from": ["eastern_sai_sands"], "unlock": "只允许 1 名旅人进入（雇佣/诱惑的 NPC 也不行）；初始角色未通关时只能派初始角色", "how": "先在酒馆把队伍减到 1 人，从东赛砂道中央大岩石区往右的楼梯进入。" },
  "altar_thunderblade": { "via": "hidden", "from": ["eastern_sai_sands"], "how": "东赛砂道存档点往南，穿过瓦砾、走下台阶即是祭坛。" },
  "southern_ku_sands": { "via": "story", "from": ["ku_castle_town"], "unlock": "光的故事通关前大部分区域被封锁", "how": "光第1章中可从库国城下町西南码头乘独木舟往东直接抵达。" },
  "ku_castle_town": { "via": "story", "from": ["eastern_ku_sands"], "unlock": "光的第1章结束后无法进入，直到光的故事通关", "how": "光通关后重新开放，并可进入五重塔。" },
  "five_tiered_tower": { "via": "story", "from": ["ku_castle_town"], "unlock": "通关光的个人剧情", "how": "光通关后返回库国城下町，从库城入口东侧进入五重塔；与一层的老剑士戈更交谈即可开始五层连续挑战。" }
});

OT2.addAccess("brightlands", {
  "altar_thief": { "via": "boat", "from": ["southern_cb_highroad"], "how": "南轮敦街道存档点右侧码头下水，穿过存档点所在的桥下继续向东南，看到瀑布前一圈粉色莲花处向南（画面下方）即进入。" },
  "old_clocktower": { "via": "boat", "from": ["clockbank"], "unlock": "高等级短迷宫", "how": "轮敦酒馆前路灯旁的隐藏楼梯下到码头，乘船向南、向东穿过大桥下，再向北穿过小桥即到。" },
  "ships_maw": { "via": "boat", "from": ["western_cb_highroad"], "how": "在西轮敦街道中央石桥附近的码头乘独木舟，沿河一直向南穿过大桥；南端没有明显洞门，继续驶出地图边缘即可进入噬船之口。" },
  "abandoned_waterway": { "via": "hidden", "from": ["nd_flats"], "how": "从新德尔斯塔平原南侧存档点向北，经过夜间黑市所在空地，在岔路向西钻进山崖阴影中的狭窄入口。" },
  "deserted_highroad": { "via": "story", "from": ["underground_waterway"], "unlock": "索洛奈第4章（用从父母处得到的钥匙开门）", "how": "新德尔斯塔下水道深处上锁的门后。" },
  "lostseed": { "via": "story", "from": ["deserted_highroad"], "unlock": "索洛奈第4章", "how": "只能乘缆车抵达：废弃街道尽头是前往洛斯特席德的缆车站。" }
});

OT2.addAccess("crestlands", {
  "altar_of_the_flamebringer": { "via": "hidden", "from": ["borderfall"], "how": "全游戏唯一位于建筑内的祭坛：国境大瀑布神官公会教会内，书架左侧的门。" },
  "seat_of_the_water_sprite": { "via": "boat", "from": ["borderfall"], "how": "从国境大瀑布过吊桥后下梯子，乘小舟驶向瀑布后的洞窟进入（瀑布下方水潭北侧）。" },
  "northern_montwise_pass": { "via": "gate", "from": ["western_montwise_pass"], "unlock": "需用比试、唆使、偷袭或让人睡着等地图指令击倒守门士兵", "how": "从西蒙特维斯山道存档点向北走到尽头，击倒挡在入口的士兵后进入北蒙特维斯山道；沿山道北行可到南斯托姆黑尔雪道。" },
  "forsaken_graveyard": { "via": "hidden", "from": ["montwise"], "how": "入口在蒙特维斯道具店南侧、楼梯下水井旁的梯子。" },
  "underground_laboratory": { "via": "story", "from": ["montwise_library"], "unlock": "奥斯瓦尔德第4章", "how": "哈维教授藏在蒙特维斯图书馆地底的秘密实验室，通关前无法进入。" }
});

OT2.addAccess("totohaha", {
  "cavern_of_waves": { "via": "boat", "from": ["beasting_bay_anchorage"], "unlock": "敌人等级48，初期别来", "how": "停泊所北方海上的小岛，从停泊所海滩码头划独木舟前往。" },
  "altar_of_the_huntress": { "via": "hidden", "from": ["western_tropuhopu_traverse"], "unlock": "奥修特在队时调查神像可得 EX 技能", "how": "从特洛甫霍普西口进入西特洛甫霍普古道，向西南走到前景高台上的宝箱处；贴着宝箱北侧岩壁调查被植被遮住的缝隙，即可进入祭坛。" },
  "southern_nameless_traverse": { "via": "boat", "from": ["western_tropuhopu_traverse"], "how": "从特洛甫霍普向西进入西特洛甫霍普古道，到存档点后的四岔路先向西再转北；在道路尽头乘独木舟，沿水道一直向北进入南无名古道。继续经中央与北端码头可到无名村，西侧码头上岸则通往沉没遗迹。" },
  "summit_of_strife": { "via": "story", "from": ["path_to_the_tombs"], "unlock": "奥修特最终章", "how": "入口在通往主兽墓所之路西侧。" },
  "verdant_wood": { "via": "story", "from": ["summit_of_strife"], "unlock": "奥修特最终章", "how": "决战之丘三场强制战后向西进入。" },
  "moonview_cliff": { "via": "story", "from": ["stormy_cape"], "unlock": "奥修特最终章", "how": "怒涛之岬西南阶梯之上。" },
  "wandering_wood": { "via": "story", "from": ["nameless_village"], "unlock": "泰米诺斯第4章需先在无名村东侧梯子下找到希尔卢托并引导他同行", "how": "无名村北方的循环迷宫，没有希尔卢托同行无法走出。" }
});

OT2.addAccess("sundering_sea", {
  "on_the_water": { "via": "sea", "from": ["anchorage_crackridge", "anchorage_new_delsta", "anchorage_canalbrine", "anchorage_beasting_bay"], "unlock": "拥有自有船只（帕尔提提欧在队，白天在特洛甫霍普造船厂向泰莉购买「未完成的船」，完成「商机的气息：特洛甫霍普篇」）", "how": "从四个出航点任意一处出海。海上无法存档、出航后无法换队，出航前先整好队。" },
  "lighthouse_island": { "via": "sea", "from": ["anchorage_new_delsta"], "unlock": "拥有自有船只", "how": "从新德尔斯塔港-停泊处出航一路向北即达（海图北端、弗利吉特岛西侧）。" },
  "shipwreck_empress": { "via": "sea", "from": ["anchorage_crackridge", "anchorage_canalbrine"], "unlock": "拥有自有船只", "how": "从克拉克雷吉港-停泊处向东、或从卡纳尔布来因向北航行即达。" },
  "vidania": { "via": "final", "from": ["anchorage_canalbrine"], "unlock": "最终章重新点燃四处圣火后才会浮现；击败维德后消失", "how": "在海域正中央浮现，从卡纳尔布来因出航最近。" },
  "nameless_isle": { "via": "sea", "from": ["anchorage_beasting_bay"], "unlock": "拥有自有船只", "how": "从兽人之滨-停泊处出航正北即达。" },
  "shark_bay": { "via": "sea", "from": ["anchorage_canalbrine"], "unlock": "拥有自有船只", "how": "卡纳尔布来因正南、通往海湾的入口处有巡游的鲨鱼鳍，撞上即与历战狂鲨开战，击败后海湾开放。" },
  "curious_nest": { "via": "sea", "from": ["shark_bay"], "unlock": "拥有自有船只（完成帕尔提提欧「商机的气息：特洛甫霍普篇」）并击败海湾入口的历战狂鲨", "how": "驶入卡纳尔布来因与康宁湾之间的海湾，北侧小岛即是入口。" },
  "whirlpool": { "via": "sea", "from": ["anchorage_beasting_bay", "anchorage_new_delsta"], "unlock": "拥有自有船只", "how": "托托哈哈岛与明之地之间海峡中的巨大漩涡，撞上即与海坊主开战；击败后才能通往东南海域。" },
  "lost_isle": { "via": "sea", "from": ["whirlpool"], "unlock": "拥有自有船只并击败大漩涡的海坊主", "how": "击败海坊主后，从漩涡向东航行即达（克劳克班克东南方海域）。" },
  "gate_of_finis": { "via": "sea", "from": ["whirlpool"], "unlock": "击败海坊主才能驶入；巨门需完成「边狱之书」才开启（门外宝箱可先拿）", "how": "从兽人之滨-停泊处出航，经大漩涡南下最近（特洛甫霍普以东的岛屿）。" }
});

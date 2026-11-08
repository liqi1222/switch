OT2.addAccess("woodlands", {
  "forest_of_no_return": { "via": "hidden", "from": ["victors_hollow_arena"], "unlock": "无前置条件，但深处是隐藏Boss食人花，建议高等级再来", "how": "在维克塔霍洛斗技场门前广场向西，走进阴森的林间小路即进入不归之森。" },
  "path_of_beasts": { "via": "hidden", "from": ["west_swarkii_trail"], "how": "从西希·沃尔基森道东端进入后沿主路前进，在东南侧不起眼的右岔路下坡，沿林间小径走到尽头即是兽道入口。" },
  "shrine_huntress": { "via": "hidden", "from": ["east_victors_hollow_trail"], "how": "进入东维克塔霍洛森道后沿北侧支路一直前进，在道路尽头穿过岩石与草木遮挡处找到祠堂入口。" },
  "moldering_ruins": { "via": "hidden", "from": ["east_duskbarrow_trail"], "unlock": "可选迷宫，危险度45", "how": "从达斯克瓦罗进入东达斯克瓦罗森道，走到存档点后转向东侧尽头，沿红光笼罩的地下入口进入失落的遗迹。" },
  "shrine_archmagus": { "via": "hidden", "from": ["east_duskbarrow_trail"], "unlock": "隐藏职业祠堂，需击败试炼Boss", "how": "东达斯克瓦罗森道北侧有一条迷雾小路，穿过迷雾绕到山背面即是魔大公的祠堂。" }
});

OT2.addAccess("frostlands", {
  "hoarfrost_grotto": { "via": "hidden", "from": ["w_flamesgrace_wilds"], "unlock": "洞窟可随时进入；支线Boss冰之巨人约顿需先在弗雷姆葛雷斯完成相关打听或探查", "how": "在西弗雷姆葛雷斯雪道沿路向南，到南部存档点后看向右侧，洞口就在岩壁与积雪后方。" },
  "shrine_of_the_flamebearer": { "via": "hidden", "from": ["w_stillsnow_wilds"], "how": "从史迪尔斯诺西口进入西史迪尔斯诺雪道，出城后立即沿南侧支路下坡，在丘陵下方找到圣火神的祠堂。" },
  "tomb_of_the_imperator": { "via": "hidden", "from": ["w_stillsnow_wilds"], "unlock": "可选迷宫，危险度35", "how": "从东维克塔霍洛森道一侧进入西史迪尔斯诺雪道，向右并往南走到树旁存档点，再向东沿支路进入巨王灵庙。" },
  "secret_path": { "via": "story", "from": ["road_to_obsidian_parlor"], "unlock": "普里姆萝洁第2章", "how": "黑曜馆正门上锁，需经冰封的密道潜入，密道尽头直通馆主房间。" },
  "obsidian_parlor": { "via": "hidden", "from": ["secret_path"], "unlock": "普里姆萝洁第2章", "how": "正门上锁无法进入，只能从「通往黑曜馆的密道」尽头的暗门进入馆主房间。" },
  "maw_of_the_ice_dragon": { "via": "hidden", "from": ["s_northreach_wilds"], "unlock": "可选迷宫，危险度45", "how": "在南诺斯利奇雪道找到指向诺斯利奇的路标，从路标处向西沿冰壁走到尽头即是冰龙口入口。" }
});

OT2.addAccess("flatlands", {
  "subterranean_study": { "via": "story", "from": ["atlasdam"], "unlock": "塞拉斯第1章开始后才拆除封板", "how": "入口在阿特拉斯达姆王城前区域、王立学院脚下；章节开始前用木板封住。" },
  "whistlewood": { "via": "hidden", "from": ["north_atlasdam_flats"], "unlock": "可选迷宫，危险度15", "how": "从东阿特拉斯达姆平原进入北阿特拉斯达姆平原后向北走；道路再次分岔时取继续向北的支路，即到夜啼之森入口。" },
  "shrine_of_the_sage": { "via": "hidden", "from": ["western_noblecourt_flats"], "how": "从诺布尔寇德进入西诺布尔寇德平原，沿道路向东侧遗迹方向走，在岩壁后的支路找到硕学王的祠堂。" },
  "hollow_throne": { "via": "hidden", "from": ["western_noblecourt_flats"], "unlock": "可选迷宫，危险度25", "how": "在西诺布尔寇德平原走到遗迹旁的存档点，从存档点向西北沿山中支路前进，尽头即虚无王座入口。" },
  "forest_of_purgation": { "via": "hidden", "from": ["western_wispermill_flats"], "unlock": "迷宫可随时进入，危险度58；隐藏Boss玛纳加尔姆需接「害怕的羊」并向发抖的行商人打听或探查", "how": "从西侧进入西维斯帕米尔平原，沿主路向北到路标处；路标没有标出西路，但向左穿过画面边缘即可发现通往净化之森的隐藏支路。" },
  "shrine_of_the_starseer": { "via": "hidden", "from": ["western_wispermill_flats"], "unlock": "隐藏职业祠堂，需击败试炼Boss", "how": "西维斯帕米尔平原存档点北侧，入口被草木半遮挡，以两朵花和一面红旗为标记。" },
  "ebony_grotto": { "via": "story", "from": ["wispermill"], "unlock": "奥菲莉亚第4章（被关进牢房的剧情之后）", "how": "入口在维斯帕米尔村子东南角、牢房南侧的森林中；该段剧情锁定队伍、无法快速旅行。" }
});

OT2.addAccess("coastlands", {
  "path_to_caves_of_maiya": { "via": "story", "from": ["rippletide"], "unlock": "特蕾莎第1章开始后告示牌撤走", "how": "利布尔泰德西侧的海滨小路；章节开始前路中段有告示牌拦路，只能拿到前面的宝箱。" },
  "undertow_cove": { "via": "hidden", "from": ["north_rippletide_coast"], "unlock": "危险度45的可选迷宫", "how": "北利布尔泰德海道看到插旗的斜坡后向右走，绕到小山丘背后（北侧）向下走进岩壁即是入口，非常隐蔽。" },
  "shrine_of_the_trader": { "via": "hidden", "from": ["moonstruck_coast"], "how": "月隐海道西端海岸乱石间，经一道石拱门进入。" },
  "captains_bane": { "via": "hidden", "from": ["west_goldshore_coast"], "unlock": "洞窟可随时进入；海兽Boss需先在葛鲁德修亚贵族街购买或偷取「海兽之蛋」", "how": "从葛鲁德修亚西口进入西葛鲁德修亚海道，沿北路过第一座吊桥后向南，下坡过第二座吊桥，再向北经过海兽猎人进入噬船海穴。" },
  "loch_of_the_lost_king": { "via": "hidden", "from": ["west_grandport_coast"], "unlock": "可选迷宫，危险度50", "how": "到西格兰波特海道的存档点，从存档点向北过木桥，过桥后立即向西沿雾中支路进入腐王入江口。" }
});

OT2.addAccess("highlands", {
  "untouched_sanctum": { "via": "hidden", "from": ["north_cobbleston_gap"], "unlock": "可选迷宫，危险度15", "how": "从北鹅卵石村山道沿主路向东，在东北侧岩壁找到不起眼的洞口，即为无垢巢窟。" },
  "shrine_thunderblade": { "via": "hidden", "from": ["north_stonegard_pass"], "how": "从北鹅卵石村山道进入北斯托冈德山道，在第一个十字路口向西走到尽头即雷剑将的祠堂。" },
  "tomb_of_kings": { "via": "hidden", "from": ["west_stonegard_pass"], "unlock": "可选迷宫，危险度25", "how": "从北斯托冈德山道进入西斯托冈德山道后向南走，在道路南侧的巨大石门处进入王家之墓。" },
  "everhold_tunnels": { "via": "hidden", "from": ["west_everhold_pass"], "unlock": "可选迷宫，危险度55", "how": "先在西艾巴霍多山道找到魔剑士的祠堂入口；从祠堂附近向南偏西走，在宝箱下方穿过岩壁后的隐藏通道，即到艾巴霍多地下坑道遗迹。" },
  "shrine_runeblade": { "via": "hidden", "from": ["west_everhold_pass"], "unlock": "隐藏职业祠堂，需击败魔剑士巴罗格", "how": "从艾巴霍多西口进入西艾巴霍多山道，走到存档点后沿南侧道路前进，从岩石背后的隐蔽下坡穿过去，在东侧找到魔剑士的祠堂。" },
  "ruins_of_hornburg": { "via": "fast", "from": ["everhold"], "unlock": "完成森林地区支线「团长与阿尔法丝，在那之后」并接下「旅途的最后」（团长此前出现在西希·沃尔基森道）", "how": "无法步行抵达。满足条件后，大地图上艾巴霍多东南方会出现号角堡合战场遗迹的快速旅行点，从世界地图直接传送过去。" },
  "gate_of_finis": { "via": "final", "from": ["ruins_of_hornburg"], "unlock": "完成「团长与阿尔法丝，在那之后」并接下「旅途的最后」", "how": "先从世界地图快速旅行到号角堡合战场遗迹，再沿遗迹一本道走到最深处进入菲尼斯之门；进入后无法离开或存档，需连续打完8个幽魂与最终两阶段战。" }
});

OT2.addAccess("sunlands", {
  "whistling_cavern": { "via": "hidden", "from": ["eastern_sunshade_sands"], "unlock": "可选迷宫，危险度20", "how": "从东桑谢德沙道沿主路向北，在北侧岩壁寻找被沙瀑半遮住的洞口，进入即为砂笛洞窟。" },
  "shrine_lady_of_grace": { "via": "hidden", "from": ["northern_wellspring_sands"], "how": "北威尔斯宾克沙道西侧岩石的夹缝，从沙道往左钻进去即可。" },
  "quicksand_caves": { "via": "hidden", "from": ["northern_wellspring_sands"], "unlock": "洞窟可随时进入；支线Boss巨大蛇需先向北威尔斯宾克沙道的负伤侦察兵打听或探查", "how": "从威尔斯宾克北口进入北威尔斯宾克沙道，沿东侧岩壁支路前进，在流沙旁找到流沙洞窟入口。" },
  "marsalim_catacombs": { "via": "hidden", "from": ["eastern_marsalim_sands"], "unlock": "可选迷宫，危险度50", "how": "从马尔沙利姆进入东马尔沙利姆沙道后向南，到路标处转向西侧支路，沿路走到东南方红光笼罩的地下入口。" },
  "grimsand_road": { "via": "story", "from": ["marsalim"], "unlock": "汉伊特第4章中由圣火骑士与卫兵开路后", "how": "马尔沙利姆西门外的沙道；剧情会把队伍直接送进灰色沙丘遗迹，需从遗迹出来才能探索这条路。" }
});

OT2.addAccess("riverlands", {
  "riverford": { "via": "road", "from": ["north_riverford_traverse"], "how": "利维福德与圣特布里吉之间没有直接道路，只能从断崖地区欧亚威尔方向的南欧亚威尔崖道南下，经北利维福德川道进城。" },
  "twin_falls": { "via": "hidden", "from": ["south_clearbrook_traverse"], "unlock": "可选迷宫，危险度20", "how": "在南库利亚布鲁克川道找到指向桑兰多的路标，从路标处向北沿瀑布旁支路前进，尽头即双子瀑布入口。" },
  "shrine_healer": { "via": "hidden", "from": ["east_saintsbridge_traverse"], "how": "从圣特布里吉东口进入东圣特布里吉川道，沿路向东到存档点后继续走，在森林与岩石之间的支路进入灵药公的祠堂。" },
  "farshore": { "via": "hidden", "from": ["east_saintsbridge_traverse"], "unlock": "可选迷宫，危险度30", "how": "从圣特布里吉东口进入东圣特布里吉川道，沿主路向东到存档点，再从存档点一路向南走到浅水洞口即边境河岸。" },
  "hidden_path": { "via": "story", "from": ["riverford"], "unlock": "欧贝利克第4章", "how": "入口在利维福德下层；吃剧情后会自动转入领主的宅邸，本章内无法返回密道。" },
  "refuge_ruins": { "via": "hidden", "from": ["north_riverford_traverse"], "unlock": "可选迷宫，危险度50", "how": "从北利维福德川道的存档点向东走，在第一个岔路再次转向东侧支路，沿瀑布旁小路进入贵族的藏身处遗迹。" },
  "shrine_warbringer": { "via": "hidden", "from": ["north_riverford_traverse"], "unlock": "隐藏职业祠堂，需击败豪武匠温希德", "how": "北利维福德川道西南：过西侧木桥后向南，从小丘间不起眼的窄缝进入。" }
});

OT2.addAccess("cliftlands", {
  "ravus_manor": { "via": "hidden", "from": ["bolderfall"], "unlock": "提里昂第1章", "how": "宅邸位于柏达弗尔上层；正门不开，只能从宅邸东侧窗户潜入（日后再访也走东侧窗户）。" },
  "carrion_caves": { "via": "hidden", "from": ["south_bolderfall_pass"], "unlock": "可选迷宫，危险度20", "how": "从北柏达弗尔崖道进入南柏达弗尔崖道，过桥后连续沿坡道下到谷底，在河边进入鸟葬洞窟。" },
  "quarrycrest_sewers": { "via": "hidden", "from": ["quarrycrest"], "unlock": "塞拉斯第2章", "how": "入口在库欧利克雷斯特的旅店后方。" },
  "shrine_prince_of_thieves": { "via": "hidden", "from": ["south_quarrycrest_pass"], "how": "从库欧利克雷斯特南下进入南库欧利克雷斯特崖道，沿西侧支路走到桥下岩壁后的入口，即盗公子的祠堂。" },
  "derelict_mine": { "via": "hidden", "from": ["south_quarrycrest_pass"], "unlock": "可选迷宫，危险度30", "how": "从南柏达弗尔崖道进入南库欧利克雷斯特崖道，过桥向北到路标处，再转向东侧道路直走进入腐朽的开采所。" },
  "dragonsong_fane": { "via": "hidden", "from": ["south_orewell_pass"], "unlock": "可选迷宫，危险度50；支线「龙的巢穴」最终阶段会引导到此", "how": "从南欧亚威尔崖道的存档点向北，再沿道路转向东；到岔路后取北侧支路，一直走到尽头进入龙咏神殿。" }
});

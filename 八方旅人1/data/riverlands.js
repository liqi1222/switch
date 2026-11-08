OT2.addRegion({
  "id": "riverlands",
  "name": "河川地区",
  "en": "Riverlands",
  "official": "利维兰多地区",
  "continent": "west",
  "levelRange": "1-50",
  "starter": "阿芬（药师）",
  "intro": "奥鲁斯特拉西南部河流纵横、森林与草地相间的温润地区，北邻断崖地区、东邻沙漠地区。东北部的小村库利亚布鲁克是药师阿芬的故乡；中部的圣特布里吉以横跨大河的石桥和圣火教大圣堂闻名；最西端的利维福德被佣兵出身的领主维尔纳以恐怖统治。十年前本地曾爆发大瘟疫，信仰圣火教的风气仅次于雪原地区。",
  "highlights": [
    "东圣特布里吉川道的灵药公祠堂：调查神像即可获得副职业「药师」",
    "北利维福德川道西南的豪武匠祠堂：击败豪武匠温希德获得隐藏职业「武艺家」",
    "圣特布里吉大圣堂：可买/偷禁忌之杖（慈祥的神官）、神圣长弓，奥菲莉亚第4章后巴尔特罗主教出售历战之杖",
    "利维福德的守卫、塞万提斯、下层老婆婆等人身上有隐形军刀、符文斧、巨人之棍等终盘装备",
    "支线「再会，哈拉尔德」奖励顶级法剑「哈拉尔德之剑」；寻亲三部曲最终奖励名门之铠",
    "贵族的藏身处遗迹（危险度50）有巨人Boss与禁忌之刃、力场之盾等宝箱"
  ],

  "locations": [
    {
      "id": "clearbrook",
      "name": "库利亚布鲁克",
      "en": "Clearbrook",
      "type": "town",
      "wpos": [597, 492],
      "level": "1",
      "desc": "河川地区东北部被小河一分为二的宁静农村，阿芬与好友泽夫的故乡，阿芬第1章起点。",
      "story": ["阿芬 第1章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "普通宝箱：码头旁树后，不太显眼" },
        { "item": "铁斧（Iron Axe）", "how": "红箱：泽夫家中（门口可能由泽夫看守，强度4）" },
        { "item": "貌似金矿石（Dubious Gold Ore）", "how": "紫色宝箱，需盗贼：村子东侧靠近出口的台阶旁" },
        { "item": "橄榄花（Olive Bloom）", "how": "隐藏道具：对梅莉尔打听/探查；必须在支线「寻亲的梅莉尔（一）」完成前获取，否则永久错过" },
        { "item": "银斧（Silver Axe）", "how": "隐藏道具：对孙女打听/探查（情报Lv10）" },
        { "item": "增强元素防御的坚果（Resistant Nut）", "how": "隐藏道具：对盖尔塔斯打听/探查" }
      ],
      "npcs": [
        { "name": "老婆婆（Elderly Woman）", "item": "历战之杖（Battle-tested Staff）", "method": "挑战", "note": "全村最强的隐藏强者：强度10、HP约3.8万，挑战需Lv60（基础成功率5%）。唆使/挑战胜利约2%掉落历战之杖，掉率极低" },
        { "name": "常客（Regular Patron）", "item": "元素轻铠（Elemental Light Armor）", "method": "探听", "note": "打听/探查得情报「更多商品上架」后，杂货店追加元素轻铠（16,800叶，速度+72）" },
        { "name": "厨师玛格", "item": "酱汁大虾（Saucy Prawns）", "method": "偷窃/购买", "note": "约95叶，支线「渔获不再」所需；阿芬第1章通关后出现" },
        { "name": "梅莉尔之母", "item": "守护耳环（Protective Earring）", "method": "偷窃/购买", "note": "约342叶，序盘饰品" },
        { "name": "泽夫", "item": "泽夫的信（Letter from Zeph）", "method": "偷窃/购买", "note": "阿芬第4章通关后才持有，支线「泽夫与梅赛德斯（一）」所需" },
        { "name": "盖尔塔斯（Gertas）", "item": "战斧（Battle Axe）", "method": "偷窃/购买", "note": "约1,900叶，序盘斧" },
        { "name": "孙女（Granddaughter）", "item": "银发饰（Silver Hairpiece）", "method": "偷窃/购买", "note": "约855叶" }
      ],
      "shops": ["杂货店：奥术短剑、奥术斧、劈刀（8,000叶）、风筝盾、头巾、青铜背心；打听常客后追加元素轻铠（16,800叶）", "旅店/酒馆；恢复名声需2,000叶"],
      "tips": "阿芬第1章通关后村中才出现梅莉尔、厨师玛格、钓鱼人等支线委托人。村东墓地旁是梅莉尔支线起点。"
    },
    {
      "id": "west_clearbrook_traverse",
      "name": "西库利亚布鲁克川道",
      "en": "West Clearbrook Traverse",
      "type": "field",
      "wpos": [568, 503],
      "level": "1-11",
      "desc": "库利亚布鲁克西南的河边道路，北上经南柏达弗尔小径通往断崖地区，东接南库利亚布鲁克川道。",
      "story": ["阿芬 第1章"],
      "boss": [],
      "treasures": [
        { "item": "杂物（Odds and Ends）", "how": "宝箱" },
        { "item": "还魂橄榄", "how": "宝箱" },
        { "item": "治愈葡萄", "how": "宝箱" },
        { "item": "巨蛋（Giant Egg）", "how": "隐藏道具：对亲切的农妇打听/探查" }
      ],
      "npcs": [
        { "name": "鱼贩（Fishmonger）", "item": "坚固之盾（Sturdy Shield）", "method": "偷窃/购买", "note": "约855叶；也是支线「渔获不再」的挑战目标（存档点南侧河边）" },
        { "name": "亲切的农妇", "item": "启迪耳环（Enlightening Earring）", "method": "偷窃/购买", "note": "约266叶" }
      ],
      "shops": [],
      "tips": "危险度随已加入的同伴数在1/4/7/11间变化。"
    },
    {
      "id": "south_clearbrook_traverse",
      "name": "南库利亚布鲁克川道",
      "en": "South Clearbrook Traverse",
      "type": "field",
      "wpos": [622, 548],
      "level": "1-11",
      "desc": "连接西库利亚布鲁克川道、东圣特布里吉川道与沙漠地区南桑谢德沙地的交通枢纽。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "宝箱" },
        { "item": "舒缓种子（Soothing Seed）", "how": "宝箱" },
        { "item": "500叶", "how": "红箱：过桥后、存档点左侧" },
        { "item": "还魂橄榄", "how": "宝箱" }
      ],
      "npcs": [
        { "name": "迷路的爷爷", "item": "支线「甜蜜的重逢」委托人", "method": "引导", "note": "阿芬第1章后出现在南侧道路桥东；引导/诱惑需Lv15（基础35%）" }
      ],
      "shops": [],
      "tips": "东北角岔路通往可选迷宫「双子瀑布」（危险度20），前期勿贸然深入。"
    },
    {
      "id": "path_of_rhiyo",
      "name": "里欧洞窟之路",
      "en": "Path of Rhiyo",
      "type": "field",
      "wpos": [622, 497],
      "level": "1-11",
      "desc": "从库利亚布鲁克东侧通往里欧洞窟的小路。",
      "story": ["阿芬 第1章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "宝箱" },
        { "item": "舒缓粉（Soothing Dust）", "how": "宝箱" },
        { "item": "李子精华（Essence of Plum）", "how": "宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": ""
    },
    {
      "id": "cave_of_rhiyo",
      "name": "里欧洞窟",
      "en": "Cave of Rhiyo",
      "type": "dungeon",
      "wpos": [640, 486],
      "level": "1-11",
      "desc": "盛开水晶花（Waterbloom）、毒蛇横行的浅水洞窟，阿芬第1章迷宫。",
      "story": ["阿芬 第1章"],
      "boss": [
        { "name": "巨蛇", "en": "Blotted Viper", "level": "1-11（随同伴数变化）", "weakness": ["短剑", "斧", "杖", "冰", "暗"], "tips": "阿芬单人时独自出现（HP约2000）；护盾随人数为4/6/7/8。2人以上会带2条斑纹蛇（弱点剑/短剑/弓/杖/冰）。会用毒息全体中毒，蓄力后连放缠绕（昏厥）、横扫、大咬。阿芬用斧+冰柱破防，备好解毒药草，破防时集中BP输出。必掉毒粉瓶。" }
      ],
      "treasures": [
        { "item": "毁灭种子（Ruinous Seed）", "how": "宝箱" },
        { "item": "500叶", "how": "红箱：第一段台阶南侧下坡" },
        { "item": "伤害粉（Injurious Dust）", "how": "普通宝箱：上两段台阶后，火把旁的隐藏缝隙绕过岩石" },
        { "item": "舒缓粉", "how": "普通宝箱：第一座桥北侧台阶上的小平台" },
        { "item": "醒神李子", "how": "普通宝箱：过桥后第一段台阶下方、靠近水边" },
        { "item": "活力坚果（Invigorating Nut）", "how": "红箱：最后分岔附近、瀑布旁下坡" },
        { "item": "青铜背心", "how": "红箱：商人右侧，最终空地前拱门内的隐藏通路" },
        { "item": "净化粉（Purifying Dust）", "how": "普通宝箱：存档点正左侧" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "随机遇敌JP在第一环迷宫中最高，适合前期刷JP。"
    },
    {
      "id": "twin_falls",
      "name": "双子瀑布",
      "en": "Twin Falls",
      "type": "dungeon",
      "wpos": [682, 515],
      "level": "20",
      "desc": "南库利亚布鲁克川道东北角的隐秘瀑布洞窟，可选迷宫。",
      "story": [],
      "boss": [
        { "name": "帝王蛙", "en": "Monarch", "level": "约20", "weakness": ["枪", "弓", "暗"], "tips": "迷宫深处的强敌，HP约9000、护盾10。护盾多，用汉伊特骤雨箭/枪类多段技削盾，暗属性（舞娘）辅助；击败后才能拿到最深处2个宝箱。" }
      ],
      "treasures": [
        { "item": "治愈葡萄（大）", "how": "宝箱" },
        { "item": "醒神李子（大）", "how": "宝箱" },
        { "item": "念力法杖（Psychic Staff）", "how": "紫色宝箱，需盗贼：第一存档点向右再取右岔，下路尽头" },
        { "item": "醒神李子", "how": "宝箱" },
        { "item": "还魂橄榄（大）", "how": "宝箱" },
        { "item": "活力石榴（大）", "how": "宝箱" },
        { "item": "回春果酱", "how": "红箱：Boss空地内，需击败帝王蛙后才能从容开启" },
        { "item": "5000叶", "how": "红箱：Boss空地再往前，右侧墙内隐藏通路，需先击败帝王蛙" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "危险度20，建议第2章阶段再来。击败Boss后帝王蛙仍会以3%概率作为随机敌人出现，叶子奖励丰厚。"
    },
    {
      "id": "saintsbridge",
      "name": "圣特布里吉",
      "en": "Saintsbridge",
      "type": "town",
      "wpos": [500, 558],
      "level": "21-32",
      "desc": "大河穿城而过的富庶大城，分为平民居住的下游区、富人居住的上游区和圣火教大圣堂；奥菲莉亚第2章、阿芬第3章舞台。",
      "story": ["奥菲莉亚 第2章", "阿芬 第3章"],
      "boss": [],
      "treasures": [
        { "item": "醒神李子（大）", "how": "宝箱（下游区）" },
        { "item": "活力石榴（大）", "how": "宝箱（下游区）" },
        { "item": "睡眠粉瓶（Bottle of Sleeping Dust）", "how": "宝箱：上游区广场灌木南侧，较隐蔽" },
        { "item": "沉甸甸的钱袋（Heavy Coin Pouch）", "how": "红箱：上游区最北侧房屋内，大圣堂旁" },
        { "item": "还魂橄榄", "how": "宝箱（大圣堂）" },
        { "item": "恐惧治疗药草（Herb of Valor）", "how": "宝箱（大圣堂）" },
        { "item": "回春果酱", "how": "隐藏道具：对昔日佣兵打听/探查（梅莉尔支线（一）完成后出现）" },
        { "item": "3000叶", "how": "隐藏道具：对上游区大圣堂前的骑士阿尔丹特打听/探查（情报Lv20）" }
      ],
      "npcs": [
        { "name": "慈祥的神官（大圣堂）", "item": "禁忌之杖（Forbidden Staff）", "method": "偷窃/购买", "note": "约74,250叶，属攻极高的终盘法杖，第2章就能看到，是本区最值得的目标之一" },
        { "name": "巴尔特罗主教（大圣堂）", "item": "奇迹之杖（Staff of Wonders）／历战之杖（Battle-tested Staff）", "method": "偷窃/购买", "note": "奇迹之杖约12,800叶，奥菲莉亚第2章通关后主教会离开直到第4章通关，宜先拿；历战之杖约90,000叶，需奥菲莉亚第4章通关" },
        { "name": "町人（大圣堂西北）", "item": "神圣长弓（Holy Longbow）、必中项链（Unerring Necklace）", "method": "偷窃/购买", "note": "神圣长弓约52,250叶、必中项链约15,200叶" },
        { "name": "神官（大圣堂入口）", "item": "醒神李子篮", "method": "购买", "note": "每个约2,052叶，不可偷；打听可得「引导轻松」情报" },
        { "name": "老人（下游区西侧）", "item": "桥之枪（Bridge Lance）、塔盾（Tower Shield）", "method": "偷窃/购买", "note": "约22,800／13,680叶；打听得「挑战轻松」情报" },
        { "name": "昔日佣兵", "item": "狙击军刀（Snipe Saber）", "method": "偷窃/购买", "note": "约22,800叶；也是梅莉尔支线（二）的挑战对象" },
        { "name": "温顺的老奶奶（上游区）", "item": "彩虹长袍（Rainbow Robe）、元素帽", "method": "偷窃/购买", "note": "彩虹长袍约17,100叶" },
        { "name": "町人（上游区）", "item": "武具店追加商品", "method": "探听", "note": "打听/探查（Lv35，30%）得「新武器上架」，武具店追加元素斧（38,000叶）、HP/SP强化手镯" },
        { "name": "德里尔（上游区）", "item": "冰之护符（Ice Amulet）", "method": "偷窃/购买", "note": "约6,080叶" }
      ],
      "shops": ["武具店：熊之劈刀、战锤、奇迹之杖、元素盾、寂静头巾（回避+111）、魅力长袍；打听后追加元素斧、强健手镯（HP+500）、刺激手镯（SP+50）", "道具店：还魂橄榄（大）、净化粉、伤害粉", "恢复名声需8,000叶"],
      "tips": "城镇分为下游区、上游区与大圣堂三部分。西南出口通利维耶拉之森，上游区西侧出口通黑暗之森之路，东侧接东圣特布里吉川道。"
    },
    {
      "id": "east_saintsbridge_traverse",
      "name": "东圣特布里吉川道",
      "en": "East Saintsbridge Traverse",
      "type": "field",
      "wpos": [548, 580],
      "level": "20-29",
      "desc": "圣特布里吉东侧的河边大道，东北通南库利亚布鲁克川道，岔路通往灵药公祠堂与边境河岸。",
      "story": ["奥菲莉亚 第2章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄（大）", "how": "宝箱" },
        { "item": "毒治疗药草（Herb of Healing）", "how": "宝箱" },
        { "item": "稀有石（Rare Stone）", "how": "红箱：河边居民身旁沿河岸（支线「无名的遗体」后旁边会出现雨果之墓），不需要盗贼" },
        { "item": "冰之精灵石（大）", "how": "隐藏道具：对河边居民打听/探查" }
      ],
      "npcs": [
        { "name": "河边居民", "item": "敏捷手镯（Sprightly Bracelet）", "method": "偷窃/购买", "note": "约5,510叶；也是支线「无名的遗体」委托人" },
        { "name": "勤奋的学者", "item": "情报「冰雪提早融化」", "method": "探听", "note": "Lv20、60%，支线「杞人忧天的男人」所需，站在南侧边境河岸入口附近河边" },
        { "name": "无赖（Ruffian）", "item": "古钱币（Old Coin）", "method": "偷窃/购买", "note": "约4,500叶，可卖钱；也是支线「巡礼者的困境」挑战对象" }
      ],
      "shops": [],
      "tips": "灵药公祠堂：从路标存档点一直向东，绕过岩石即见洞口。危险度随同伴数20/23/26/29变化。"
    },
    {
      "id": "shrine_healer",
      "name": "灵药公的祠堂",
      "en": "Shrine of the Healer",
      "type": "shrine",
      "wpos": [588, 594],
      "level": "20-29",
      "desc": "供奉灵药公德塔的洞窟祠堂，调查神像即可获得药师副职业。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "祠堂内无战斗，调查神像即可领取。周边危险度与东圣特布里吉川道相同，随同伴数约20/23/26/29。"
    },
    {
      "id": "farshore",
      "name": "边境河岸",
      "en": "Farshore",
      "type": "dungeon",
      "wpos": [566, 622],
      "level": "30",
      "desc": "东圣特布里吉川道东南尽头的浅水洞窟，遍布骷髅系敌人，可选迷宫。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "30000叶", "how": "紫色宝箱，需盗贼：可疑的男人东侧下桥后，窄路尽头右侧墙内隐藏通路" },
        { "item": "清醒之石（Clarity Stone）", "how": "紫色宝箱，需盗贼：最深处空地再往南过桥，右侧小坡靠近水边" },
        { "item": "活力石榴（大）", "how": "普通宝箱：第一存档点北桥过后，火把处的左侧岔路" },
        { "item": "治愈葡萄串", "how": "红箱：第一存档点走上北桥，过火把后折返" },
        { "item": "冰之精灵石（特大）", "how": "普通宝箱：可疑的男人左侧短死路" },
        { "item": "醒神李子篮", "how": "红箱：入口过下方的桥后不走上北桥，向东走到底" },
        { "item": "还魂橄榄（大）", "how": "普通宝箱：北桥过火把后向南，直到水边" }
      ],
      "npcs": [
        { "name": "可疑的男人（Unsavory Man）", "item": "雨果的日记（Hugo's Journal）", "method": "偷窃/购买", "note": "约4,200叶，支线「无名的遗体」所需" }
      ],
      "shops": [],
      "tips": "本迷宫不属于任何城镇区域，在此偷窃/挑战失败不会降低名声。敌人多为骷髅，光/火属性有效。"
    },
    {
      "id": "murkwood_trail",
      "name": "黑暗之森之路",
      "en": "Murkwood Trail",
      "type": "field",
      "wpos": [470, 543],
      "level": "20",
      "desc": "从圣特布里吉上游区西侧通往黑暗之森的小路。",
      "story": ["奥菲莉亚 第2章"],
      "boss": [],
      "treasures": [
        { "item": "睡眠治疗药草（Herb of Awakening）", "how": "普通宝箱：下坡后主路旁" },
        { "item": "醒神李子篮", "how": "红箱：主路降到最低处后，岩石旁的草地小路" },
        { "item": "3500叶", "how": "红箱：进入黑暗之森前、存档点正左侧的隐藏通路" }
      ],
      "npcs": [],
      "shops": [],
      "tips": ""
    },
    {
      "id": "murkwood",
      "name": "黑暗之森",
      "en": "The Murkwood",
      "type": "dungeon",
      "wpos": [446, 530],
      "level": "23",
      "desc": "迷雾笼罩、岔路众多的幽暗森林，凶狼赫罗德维特尼尔的巢穴，奥菲莉亚第2章迷宫。",
      "story": ["奥菲莉亚 第2章"],
      "boss": [
        { "name": "赫罗德维特尼尔", "en": "Hróðvitnir", "level": "约23", "weakness": ["剑", "枪", "冰", "雷", "光"], "tips": "开场固定2动，每次破防恢复后护盾+2（最高11），HP半血后3动。磨爪提升物攻，可用盗贼「枷锁」抵消；夜嚎会全体恐惧+物防下降。欧贝利克剑/枪+雷剑将奥义、学者冰雷魔法输出，奥菲莉亚专职回复。" }
      ],
      "treasures": [
        { "item": "5000叶", "how": "宝箱：最西端，过溪上木桥" },
        { "item": "清醒之石（Clarity Stone）", "how": "紫色宝箱，需盗贼：葡萄串北侧，过短桥后向北" },
        { "item": "活力石榴（大）", "how": "普通宝箱：入口向左沿溪流一路向北" },
        { "item": "治愈葡萄（大）", "how": "普通宝箱：东侧河边向北的岸边" },
        { "item": "治愈葡萄串", "how": "红箱：迷宫右下角，过溪上草地桥、岩棚下" },
        { "item": "醒神李子", "how": "普通宝箱：入口第一支火把处，沿河的短草地小路" },
        { "item": "风筝盾（Kite Shield）", "how": "红箱：北侧存档点上方，火把向左的雾中长路" },
        { "item": "念力法杖（Psychic Staff）", "how": "红箱：Boss房前，岩石拱门右侧的隐藏通路" },
        { "item": "还魂橄榄（大）", "how": "宝箱：入口右侧尽头" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "植物系敌人弱斧/火，飞行系弱枪/弓/雷，带塞拉斯火魔法很轻松。"
    },
    {
      "id": "rivira_woods",
      "name": "利维耶拉之森",
      "en": "Rivira Woods",
      "type": "dungeon",
      "wpos": [440, 585],
      "level": "32",
      "desc": "沐浴在晚霞般粉色光芒中的迷宫森林，又名「迷途之森」，阿芬第3章迷宫。",
      "story": ["阿芬 第3章"],
      "boss": [
        { "name": "米格尔", "en": "Miguel", "level": "约32", "weakness": ["剑", "弓", "风", "光"], "tips": "每次破防恢复后弱点按顺序轮换：①剑/弓/风/光 → ②枪/短剑/火/光 → ③斧/杖/冰/雷 → ④剑/斧/火/雷。开场2动，「抱歉小子」后最多5动，务必在此前破防；濒死会喝药回复约5000HP。投枪后下回合落下5支枪，十字枪全体2连击，需全体回复。盗贼「枷锁」「腐蚀铠甲」非常有效。必掉米格尔之枪（不可偷）。" }
      ],
      "treasures": [
        { "item": "活力石榴（特大）", "how": "宝箱，最终存档点南下左侧" },
        { "item": "破狱短剑（Gaolbreaker）", "how": "紫色宝箱，入口北上尽头，需盗贼" },
        { "item": "冰之护符（Ice Amulet）", "how": "紫色宝箱，西南路线贴南墙，需盗贼" },
        { "item": "伤害粉", "how": "宝箱，四岔路左侧" },
        { "item": "净化粉", "how": "宝箱，入口北上右侧树后" },
        { "item": "净化种子（Purifying Seed）", "how": "宝箱，北行贴左墙小凹处" },
        { "item": "回春果酱", "how": "红箱：第二个四岔路西北角" },
        { "item": "装满银币的钱袋（Silver-filled Pouch）", "how": "红箱：四岔路右侧死路" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人多弱弓与暗，汉伊特很好用；变色龙（Reptalion）只弱斧。"
    },
    {
      "id": "riverford",
      "name": "利维福德",
      "en": "Riverford",
      "type": "town",
      "wpos": [335, 595],
      "level": "45",
      "desc": "河川地区最西端、以吊桥和城墙围起的城镇，被佣兵出身的领主维尔纳以火刑恐怖统治；欧贝利克第4章舞台。分为上层广场与下层（Lower Riverford）。",
      "story": ["欧贝利克 第4章"],
      "boss": [
        { "name": "戴红帽子的男人", "en": "The Man with the Red Hat", "level": "挑战（强度7）", "weakness": ["剑", "斧"], "tips": "欧贝利克第4章的剧情挑战，为取得反抗军信任。实力略弱于一般强度7的NPC，装好物防即可。" }
      ],
      "treasures": [
        { "item": "复苏果酱（Revitalizing Jam）", "how": "红箱：旅店东侧被守卫挡住的房屋内，需先挑战守卫（约Lv55，先在下层打听「挑战轻松」可降低要求）" },
        { "item": "恐惧治疗药草", "how": "宝箱，下层入口东南下方平台" },
        { "item": "精金之盾（Adamantine Shield）", "how": "红箱：存档点旁被町人看守的房屋内（下层）" },
        { "item": "火之精灵石（特大）", "how": "隐藏道具：对入口左侧守卫打听/探查，位于广场火刑台上" },
        { "item": "装满银币的钱袋", "how": "隐藏道具：对酒馆守卫打听/探查，物品在下层被守卫挡住的房屋内" },
        { "item": "银怀表（Silver Clock）", "how": "隐藏道具：对下层躲在房屋后的商人打听/探查" },
        { "item": "活力石榴（大）", "how": "隐藏道具：对下层守门町人打听/探查" }
      ],
      "npcs": [
        { "name": "守卫（Guard）", "item": "隐形军刀（Unseen Saber）", "method": "偷窃/购买", "note": "约47,500叶，终盘强力剑；另一名守卫有巨大之盾（约22,800叶）" },
        { "name": "塞万提斯（Cervantes）", "item": "符文斧（Rune Hatchet）", "method": "偷窃/购买", "note": "约67,200叶；需以挑战路线完成支线「冒险人生」后才会来到利维福德" },
        { "name": "老婆婆（下层）", "item": "巨人之棍（Giant's Club）", "method": "偷窃/购买", "note": "约47,500叶；打听/探查得「挑战轻松」情报" },
        { "name": "商人（下层，躲在房屋之间）", "item": "杀戮之剑、灾厄之枪、战锤", "method": "偷窃/购买", "note": "杀戮之剑约26,600叶、战锤约28,500叶" },
        { "name": "哈拉尔德（下层）", "item": "帝国长枪（Imperial Lance）", "method": "偷窃/购买", "note": "约32,300叶，欧贝利克第4章与支线「再会，哈拉尔德」后" },
        { "name": "雷吉（Reggie）", "item": "守护项链（Protective Necklace）", "method": "偷窃/购买", "note": "约19,000叶，欧贝利克第4章通关后" },
        { "name": "少女（下层）", "item": "龙之军刀（Dragon Saber）", "method": "探听", "note": "打听/探查（Lv50）得情报后，杂货店追加龙之军刀（58,000叶，物攻+273）" },
        { "name": "町人", "item": "世界树之杖（Yggdrasil Staff）", "method": "挑战", "note": "强度8、HP约2.6万，约5%掉落" },
        { "name": "守卫（另一名）", "item": "符文弓（Rune Bow）", "method": "挑战", "note": "约8%掉落" }
      ],
      "shops": ["杂货店：白金剑、勇气之刃、翡翠长枪（46,000叶）、骑士之盾、白金头盔/铠甲；打听后追加龙之军刀（58,000叶）、敏捷手镯；毁灭种子、毁灭粉", "恢复名声需30,000叶（全游戏第二贵），偷窃/挑战前务必存档"],
      "tips": "维尔纳统治期间入城要被守卫勒索通行费，第4章通关后取消并换上明亮的BGM。下层是梅莉尔支线（三）的舞台，密道入口在下层。"
    },
    {
      "id": "hidden_path",
      "name": "领主宅邸的密道",
      "en": "Hidden Path",
      "type": "dungeon",
      "wpos": [352, 602],
      "level": "45",
      "desc": "前领主为防备围城修建的地下水道，哈拉尔德带领反抗军经此潜入领主宅邸。",
      "story": ["欧贝利克 第4章"],
      "boss": [],
      "treasures": [
        { "item": "恐惧治疗药草", "how": "宝箱，入口西行下楼梯" },
        { "item": "帝国头盔（Imperial Helm）", "how": "紫色宝箱，入口北侧铁栏后，从北上路两支火把之间的墙内暗道进入，需盗贼" },
        { "item": "还魂橄榄（大）", "how": "宝箱，北侧死路" },
        { "item": "冰之精灵石（特大）", "how": "宝箱，最西侧下楼梯绕过小桥" },
        { "item": "装满银币的钱袋", "how": "红箱：第二存档点东侧墙内暗道尽头" },
        { "item": "醒神李子篮", "how": "红箱：第二存档点南侧下短台阶" },
        { "item": "治愈葡萄（大）", "how": "宝箱，维尔纳伏击的高台南侧，剧情中无法拿取，需第4章通关后再来" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "吃剧情后会自动转入领主的宅邸，之后本章内无法返回密道。"
    },
    {
      "id": "lords_manse",
      "name": "领主的宅邸",
      "en": "Lord's Manse",
      "type": "dungeon",
      "wpos": [367, 584],
      "level": "46",
      "desc": "被维尔纳占据的豪华红色宅邸，欧贝利克第4章最终决战地。",
      "story": ["欧贝利克 第4章"],
      "boss": [
        { "name": "维尔纳", "en": "Werner", "level": "约45-46", "weakness": ["短剑", "斧", "雷", "风", "光"], "tips": "开场「恐惧笼罩战场」使物理攻击附带恐惧，后期「恐惧支配」会让所有恐惧中的队员直接昏厥（全员恐惧=全灭），务必带恐惧治疗药草/药师「康复」。频繁使用「压迫」降全体物攻物防，盗贼枷锁、商人雇佣佣兵可抵消。破防恢复后护盾5→7→9并封印部分弱点；半血后3动并使用「踢头」（昏厥）。必掉维尔纳之剑（攻击必定暴击，命中大降）。" }
      ],
      "treasures": [
        { "item": "醒神李子（大）", "how": "宝箱（前段）" },
        { "item": "符文斧（Rune Hatchet）", "how": "紫色宝箱，前段东侧楼梯左侧房间，需盗贼" },
        { "item": "清醒之石", "how": "红箱：前段左侧会客区" },
        { "item": "治愈葡萄串", "how": "红箱：前段，存档点左侧楼梯上去的小阳台" },
        { "item": "回春果酱", "how": "红箱：前段最左侧墙边、上楼梯之前" },
        { "item": "治愈葡萄（大）", "how": "宝箱（后段，进入后右侧楼梯旁）" },
        { "item": "活力石榴（特大）", "how": "宝箱（后段最东侧死路）" },
        { "item": "装满银币的钱袋", "how": "红箱：后段二楼右侧房间西北角" },
        { "item": "暴雪护符（Blizzard Amulet）", "how": "红箱：后段二楼房间" },
        { "item": "醒神李子篮", "how": "红箱：维尔纳房间前存档点左上角" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "宅邸分为连接密道的后段（维尔纳所在）与连接庭院的前段，宝箱分布两侧，前段需从后段南出口绕过去。"
    },
    {
      "id": "north_riverford_traverse",
      "name": "北利维福德川道",
      "en": "North Riverford Traverse",
      "type": "field",
      "wpos": [312, 540],
      "level": "45",
      "desc": "利维福德北侧的川道，西北经南欧亚威尔小径通往断崖地区，岔路通往豪武匠祠堂与贵族的藏身处遗迹；本区唯一通往利维福德的道路。",
      "story": ["欧贝利克 第4章"],
      "boss": [],
      "treasures": [
        { "item": "苏醒药草（Herb of Revival）", "how": "宝箱" },
        { "item": "装满银币的钱袋", "how": "红箱：利维福德附近存档点南侧隐藏通路，一直向左" },
        { "item": "风之精灵石（特大）", "how": "宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "利维福德与圣特布里吉之间没有直接道路，只能从断崖地区欧亚威尔方向的南欧亚威尔小径南下进入。"
    },
    {
      "id": "refuge_ruins",
      "name": "贵族的藏身处遗迹",
      "en": "Refuge Ruins",
      "type": "dungeon",
      "wpos": [284, 535],
      "level": "50",
      "desc": "没落贵族兰达尔家藏匿财宝的地下瀑布遗迹，可选迷宫。",
      "story": [],
      "boss": [
        { "name": "巨人", "en": "Gigantes", "level": "约50", "weakness": ["短剑", "弓", "冰", "风"], "tips": "HP约2.2万、护盾10，站在瀑布桥上，挡住后半段。弓系多段技和冰、风魔法削盾；普通攻击容易打空，尽量用技能。禁忌之刃在桥前瀑布下，不必先打。击败后仍会以约3%概率作为随机敌人出现。" }
      ],
      "treasures": [
        { "item": "禁忌之刃（Forbidden Blade）", "how": "紫色宝箱，需盗贼：存档点上方瀑布下，击败巨人之前就能拿" },
        { "item": "力场之盾（Force Shield）", "how": "红箱：最深处平台右后角" },
        { "item": "附魔法杖（Enchanted Rod）", "how": "红箱：击败巨人后，瀑布旁的桥上" },
        { "item": "清醒之石", "how": "红箱：橄榄宝箱旁，左侧墙内隐藏通路" },
        { "item": "活力石榴（大）", "how": "普通宝箱：过桥后左岔，下到平台" },
        { "item": "还魂橄榄（大）", "how": "普通宝箱：过桥后第二个火把右侧下坡" },
        { "item": "回春果酱", "how": "红箱：存档点向左沿路走到尽头（巨人桥之前）" },
        { "item": "治愈葡萄（大）", "how": "普通宝箱：入口附近、第一支火把前的上坡" },
        { "item": "光亮的金币、绳头、生锈的杯子、破旧的靴子、布地图", "how": "红箱：最深处平台上一组宝箱，多为可卖钱的杂物" },
        { "item": "活力石榴（特大）", "how": "普通宝箱：过桥后左岔继续向北，再往西靠近瀑布" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "危险度50，与四大隐藏祠堂同级，建议Lv55+。支线「隐藏的财宝」以购买/偷窃路线完成后，委托人会以「热情的探险家」身份来到这里。"
    },
    {
      "id": "shrine_warbringer",
      "name": "豪武匠的祠堂",
      "en": "Shrine of the Warbringer",
      "type": "shrine",
      "wpos": [264, 542],
      "level": "50",
      "desc": "无数瀑布环绕的洞窟祠堂，击败豪武匠温希德获得隐藏职业「武艺家」。",
      "story": [],
      "boss": [
        { "name": "豪武匠温希德", "en": "Winnehild, Warbringer", "level": "建议55-60+", "weakness": ["杖", "冰", "风", "暗"], "tips": "全物理攻击Boss，HP约20万。护盾5→8→12；半血后3动并解锁守护狮犬、麒麟角（降物防属防）、狐灵（昏厥）；「获得所有武器」后下回合6动。约半血后弱点改为剑/火/雷/光。残血「获得所有武器」后的6连「战吼」必须在放出来之前破防。「反击架势」期间物理攻击会遭致命反击，只用魔法。推荐学者/魔术师多段魔法削盾，盗贼枷锁+商人雇佣佣兵，符文大师「回避」可完全无效其攻击。" }
      ],
      "treasures": [
        { "item": "醒神李子篮", "how": "宝箱" },
        { "item": "苏醒药草", "how": "宝箱" },
        { "item": "回春果酱", "how": "宝箱" },
        { "item": "30000叶", "how": "宝箱" },
        { "item": "复苏果酱", "how": "宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "入口在北利维福德川道西南：过西侧木桥后向南，从小丘间不起眼的窄缝进入。"
    }
  ],

  "story": [
    {
      "title": "阿芬 第1章：启程 ─为了治疗─",
      "character": "阿芬",
      "location": "clearbrook",
      "level": "1~12",
      "summary": "泽夫的妹妹妮娜与好友莉莉去里欧洞窟采水晶花时被大毒蛇咬伤，危在旦夕。阿芬从莉莉口中确认是巨蛇，前往里欧洞窟取毒液制作血清救回妮娜，并决定像当年救过自己的旅行药师一样踏上旅途。",
      "steps": ["在库利亚布鲁克看完开场，前往泽夫家查看妮娜", "向莉莉询问咬伤妮娜的蛇的特征", "出村东侧，经里欧洞窟之路进入里欧洞窟", "在洞窟深处击败巨蛇取得毒液", "回村制作血清救治妮娜，与泽夫道别出发"],
      "boss": "巨蛇（弱点：短剑、斧、杖、冰、暗）",
      "tips": "危险度随已加入同伴数在1/4/7/11间变化。阿芬独自挑战时Boss无随从；单人可多用斧+冰柱，带足解毒药草。"
    },
    {
      "title": "奥菲莉亚 第2章：引导孩子们",
      "character": "奥菲莉亚",
      "location": "saintsbridge",
      "level": "23",
      "summary": "奥菲莉亚为「圣火交接仪式」来到圣特布里吉，在巴尔特罗主教见证下完成第一处点火。之后她调解孩子们的争吵：德里尔弄丢了母亲的胸针，被野狗叼进森林，埃米尔为找回胸针独自闯入黑暗之森，奥菲莉亚追入森林击败巨狼赫罗德维特尼尔救回孩子。",
      "steps": ["与巴尔特罗主教会面，观看仪式", "到下游广场调解孩子们的争吵，去北侧房屋与德里尔谈话", "对德里尔使用「引导」带他去找埃米尔，得知埃米尔追狗进入森林", "从上游区西侧出口经黑暗之森之路进入黑暗之森", "击败赫罗德维特尼尔，返回大圣堂与主教交谈"],
      "boss": "赫罗德维特尼尔（弱点：剑、枪、冰、雷、光）",
      "tips": "进入森林前可先向巴尔特罗主教买/偷奇迹之杖（通关后主教会暂时消失）。建议引导会致盲弓技的町人同行。黑暗之森有一个紫色宝箱需提里昂。"
    },
    {
      "title": "阿芬 第3章：生命的价值",
      "character": "阿芬",
      "location": "saintsbridge",
      "level": "32",
      "summary": "阿芬在圣特布里吉救治了身负重伤、被其他药师拒绝的男人米格尔，却发现他是绑架勒索的恶棍。米格尔伤愈后绑走少年蒂莫西逃入利维耶拉之森，阿芬追入森林与其对决，并在神秘药师欧根的质问下重新思考「救人」的意义。",
      "steps": ["开场后前往上游区酒馆", "对上游区南侧町人打听「老友的消息」", "到下游区旅店对面的房屋，对温顺的老奶奶打听「东南的老婆婆」", "跟到另一户，对固执的老奶奶打听「西北的老婆婆」，之后与欧根交谈", "回到下游区木屋查看米格尔，次日寻找米格尔", "从西南出口进入利维耶拉之森，击败米格尔"],
      "boss": "米格尔（弱点轮换：剑/弓/风/光 → 枪/短剑/火/光 → 斧/杖/冰/雷 → 剑/斧/火/雷）",
      "tips": "推荐等级虽是第3章最低，但Boss被普遍认为是第3章最难。务必在他使用「抱歉小子」进入5动前破防，带全体回复与盗贼的枷锁/腐蚀铠甲。"
    },
    {
      "title": "欧贝利克 第4章：应守护之物",
      "character": "欧贝利克",
      "location": "riverford",
      "level": "45",
      "summary": "欧贝利克追查霍尔恩堡陷落的幕后黑手——佣兵出身、如今以火刑恐怖统治利维福德的领主维尔纳。他通过挑战戴红帽子的男人取得反抗军信任，与前领主之子哈拉尔德会合，经密道潜入领主宅邸，在艾尔哈特的帮助下击败维尔纳。",
      "steps": ["入城时贿赂守卫进入，到广场火刑台了解情况", "前往下层，在存档点北侧目击反抗军成员被追捕", "挑战下层西北的戴红帽子的男人（强度7，弱剑/斧）", "与雷吉会合、拜见哈拉尔德，准备完毕后与哈拉尔德对话", "穿过领主宅邸的密道，遭遇伏击后艾尔哈特断后", "在领主的宅邸深处击败维尔纳，之后返回鹅卵石村完成结局"],
      "boss": "维尔纳（弱点：短剑、斧、雷、风、光）",
      "tips": "带恐惧治疗药草/药师「康复」与镇静之石应对恐惧和「恐惧支配」。通关后可接支线「再会，哈拉尔德」，并可回密道拿剧情中拿不到的宝箱。"
    }
  ],

  "sidequests": [
    {
      "name": "旅行青年",
      "en": "Kit, the Traveler",
      "location": "west_clearbrook_traverse",
      "trigger": "仅以阿芬为初始主角时，第1章通关后在西库利亚布鲁克川道出村口附近与受伤的旅行青年克里斯（Kit）对话",
      "steps": ["交给他1个治愈葡萄"],
      "reward": "1500叶；后续支线「寻找父亲的旅行者克里斯」在诺布尔寇德展开（真结局前置之一）",
      "difficulty": "易"
    },
    {
      "name": "寻亲的梅莉尔（一）",
      "en": "Meryl, Lost then Found (I)",
      "location": "clearbrook",
      "trigger": "阿芬第1章通关后，与库利亚布鲁克墓地的梅莉尔对话（她捡到写着「远方母亲」的漂流瓶信）",
      "steps": ["先对梅莉尔打听/探查拿隐藏道具橄榄花（完成后永久错过）", "对酒馆旁的梅莉尔之父打听/探查（Lv1，60%）得情报「梅莉尔的过去」", "回报梅莉尔"],
      "reward": "1500叶、增强元素防御的坚果",
      "difficulty": "易"
    },
    {
      "name": "寻亲的梅莉尔（二）",
      "en": "Meryl, Lost then Found (II)",
      "location": "saintsbridge",
      "trigger": "完成（一）后，在圣特布里吉入口附近与被纠缠的梅莉尔对话",
      "steps": ["挑战/唆使昔日佣兵（Lv10，强度5，HP约7800）并击败"],
      "reward": "6600叶、增强元素防御的坚果（大）",
      "difficulty": "易"
    },
    {
      "name": "寻亲的梅莉尔（三）",
      "en": "Meryl, Lost then Found (III)",
      "location": "riverford",
      "trigger": "完成（二）后，在利维福德下层河边与梅莉尔对话",
      "steps": ["对梅莉尔使用引导/诱惑（Lv1，100%）", "带她进入下层中央、通往河边台阶上方的房屋，见卧病的女人"],
      "reward": "11000叶、名门之铠（High House's Armor）、增强元素防御的坚果（特大）",
      "difficulty": "易"
    },
    {
      "name": "渔获不再",
      "en": "For Want of Fish",
      "location": "clearbrook",
      "trigger": "阿芬第1章通关后，与库利亚布鲁克码头的钓鱼人对话",
      "steps": ["方法一：向酒馆的厨师玛格购买/偷窃「酱汁大虾」交给钓鱼人", "方法二：到西库利亚布鲁克川道存档点南侧河边，挑战/唆使鱼贩（Lv5，强度3）并击败"],
      "reward": "1500叶、力量腰带（Mighty Belt）",
      "difficulty": "易"
    },
    {
      "name": "甜蜜的重逢",
      "en": "A Sweet Reunion",
      "location": "south_clearbrook_traverse",
      "trigger": "阿芬第1章通关后，与南库利亚布鲁克川道南侧道路桥东的迷路的爷爷对话",
      "steps": ["对爷爷使用引导/诱惑（Lv15，35%）", "带他到库利亚布鲁克见寂寞的孙子"],
      "reward": "2000叶",
      "difficulty": "易"
    },
    {
      "name": "泽夫与梅赛德斯（一）",
      "en": "Zeph and Mercedes (I)",
      "location": "clearbrook",
      "trigger": "阿芬与塞拉斯第4章均通关后，进入库利亚布鲁克泽夫家与妮娜对话",
      "steps": ["向泽夫购买/偷窃「泽夫的信」", "前往平原地区阿特拉斯达姆王宫门前，把信交给梅赛德斯"],
      "reward": "无（直接接续「泽夫与梅赛德斯（二）」，最终奖励纪念之斧）",
      "difficulty": "易"
    },
    {
      "name": "暗黑之神的女儿（二）",
      "en": "Daughter of the Dark God (II)",
      "location": "saintsbridge",
      "trigger": "完成断崖地区柏达弗尔的（一）后，与圣特布里吉长木桥上的莉布拉克对话",
      "steps": ["对阿尔法斯打听/探查得「阿尔法斯的诗」", "到上游区大圣堂前，把诗告诉弗洛拉"],
      "reward": "10000叶；真结局支线链的一环（后续「团长与阿尔法丝，在那之后」）",
      "difficulty": "易"
    },
    {
      "name": "杞人忧天的男人",
      "en": "The Worrywart",
      "location": "saintsbridge",
      "trigger": "与圣特布里吉木桥上担心河水上涨的男人对话",
      "steps": ["到东圣特布里吉川道南侧边境河岸入口附近河边，对勤奋的学者打听/探查（Lv20，60%）得「冰雪提早融化」", "回报杞人忧天的男人"],
      "reward": "6600叶、活力坚果、增强元素防御的坚果",
      "difficulty": "易"
    },
    {
      "name": "巡礼者的困境",
      "en": "The Pilgrims' Plight",
      "location": "saintsbridge",
      "trigger": "与圣特布里吉大圣堂内的慈祥的神官对话",
      "steps": ["到东圣特布里吉川道靠近城镇入口处，挑战/唆使无赖（Lv7，强度4）并击败"],
      "reward": "6600叶、回春果酱",
      "difficulty": "易"
    },
    {
      "name": "无名的遗体",
      "en": "A Corpse with No Name",
      "location": "east_saintsbridge_traverse",
      "trigger": "与东圣特布里吉川道南侧河边的河边居民对话（河中漂来一具无名遗体）",
      "steps": ["方法一：到森林地区维克塔霍洛道具店附近，对不安的女人使用引导/诱惑（Lv5，80%）带回", "方法二：在边境河岸向可疑的男人购买/偷窃「雨果的日记」交给居民"],
      "reward": "5000叶、绅士护符（Gentleman's Charm）",
      "difficulty": "易"
    },
    {
      "name": "冒险人生",
      "en": "The Adventuring Life",
      "location": "riverford",
      "trigger": "与利维福德酒馆前的仆人对话（主人离家去冒险）",
      "steps": ["方法一：到阿特拉斯达姆王宫门前，引导/诱惑热情的青年（Lv10，60%），带到断崖地区南欧亚威尔小径北侧龙之祭坛入口附近的神秘骑士处", "方法二：到南欧亚威尔小径挑战/唆使神秘骑士（Lv5，强度3）并击败"],
      "reward": "11000叶、会心坚果（特大）",
      "difficulty": "易"
    },
    {
      "name": "隐藏的财宝",
      "en": "The Hidden Hoard",
      "location": "riverford",
      "trigger": "奥菲莉亚第4章通关后，与利维福德广场东侧的热情的青年对话",
      "steps": ["方法一：在阿特拉斯达姆向兰达尔家旧家臣购买/偷窃「兰达尔家的记录」交给青年", "方法二：在斯托冈德高地区喷泉东侧，对兰达尔家旧护卫打听/探查（Lv25，40%）得「兰达尔家的没落」"],
      "reward": "15000叶、复苏果酱",
      "difficulty": "中"
    },
    {
      "name": "重归于好",
      "en": "Friends Again",
      "location": "saintsbridge",
      "trigger": "奥菲莉亚第4章通关后，在圣特布里吉上游区与埃米尔对话（内特想向梅兰妮示好）",
      "steps": ["向下游区北侧的坏孩子购买/偷窃「河之花（River Blossom）」", "交给内特"],
      "reward": "友情徽章（Badge of Friendship，无叶子奖励）",
      "difficulty": "易"
    },
    {
      "name": "再会，哈拉尔德",
      "en": "Hello Again, Harald",
      "location": "riverford",
      "trigger": "欧贝利克第4章通关后，与利维福德的雷吉对话（想赎回哈拉尔德卖掉的亡母项链）",
      "steps": ["前往沙漠地区威尔斯宾克，挑战/唆使酒馆西侧建筑门口的守卫（Lv30，强度9）", "进入建筑，向最北侧商人购买/偷窃「纪念项链」（约27,550叶）", "交给雷吉"],
      "reward": "8000叶、哈拉尔德之剑（Harald's Sword）",
      "difficulty": "中"
    }
  ],

  "items": [
    { "name": "历战之杖", "en": "Battle-tested Staff", "type": "武器", "location": "saintsbridge", "how": "奥菲莉亚第4章通关后向大圣堂的巴尔特罗主教购买/偷窃（约90,000叶）；另：库利亚布鲁克老婆婆挑战约2%掉落", "effect": "历战系列终盘法杖" },
    { "name": "禁忌之杖", "en": "Forbidden Staff", "type": "武器", "location": "saintsbridge", "how": "向大圣堂的慈祥的神官偷窃/购买（约74,250叶）", "effect": "属攻极高，魔法职业终盘候选" },
    { "name": "奇迹之杖", "en": "Staff of Wonders", "type": "武器", "location": "saintsbridge", "how": "向巴尔特罗主教偷窃/购买（约12,800叶），或武具店16,000叶购买", "effect": "攻击时有概率降低目标属攻" },
    { "name": "神圣长弓", "en": "Holy Longbow", "type": "武器", "location": "saintsbridge", "how": "向大圣堂西北的町人偷窃/购买（约52,250叶）" },
    { "name": "必中项链", "en": "Unerring Necklace", "type": "饰品", "location": "saintsbridge", "how": "向大圣堂西北的町人偷窃/购买（约15,200叶）" },
    { "name": "元素斧", "en": "Elemental Hatchet", "type": "武器", "location": "saintsbridge", "how": "对上游区町人打听「新武器上架」后，武具店38,000叶购买", "effect": "物攻+98、属攻+206" },
    { "name": "米格尔之枪", "en": "Miguel's Spear", "type": "武器", "location": "rivira_woods", "how": "阿芬第3章击败米格尔必定掉落（不可偷）" },
    { "name": "破狱短剑", "en": "Gaolbreaker", "type": "武器", "location": "rivira_woods", "how": "利维耶拉之森紫色宝箱，需盗贼" },
    { "name": "冰之护符", "en": "Ice Amulet", "type": "饰品", "location": "rivira_woods", "how": "利维耶拉之森紫色宝箱；或向圣特布里吉上游区的德里尔偷窃/购买（约6,080叶）" },
    { "name": "念力法杖", "en": "Psychic Staff", "type": "武器", "location": "murkwood", "how": "黑暗之森宝箱（双子瀑布也有一根）" },
    { "name": "清醒之石", "en": "Clarity Stone", "type": "饰品", "location": "murkwood", "how": "黑暗之森紫色宝箱；边境河岸、领主的宅邸、贵族的藏身处遗迹宝箱也各有一个" },
    { "name": "维尔纳之剑", "en": "Werner's Sword", "type": "武器", "location": "lords_manse", "how": "欧贝利克第4章击败维尔纳必定掉落（不可偷）", "effect": "攻击必定暴击，但命中大幅下降" },
    { "name": "符文斧", "en": "Rune Hatchet", "type": "武器", "location": "lords_manse", "how": "领主的宅邸前段紫色宝箱；或支线「冒险人生」挑战路线后向利维福德的塞万提斯偷窃/购买（约67,200叶）", "effect": "属攻高，适合药师/武艺家施法" },
    { "name": "暴雪护符", "en": "Blizzard Amulet", "type": "饰品", "location": "lords_manse", "how": "领主的宅邸后段二楼房间宝箱", "effect": "提升冰属性伤害" },
    { "name": "帝国头盔", "en": "Imperial Helm", "type": "防具", "location": "hidden_path", "how": "领主宅邸的密道紫色宝箱（墙内暗道），需盗贼" },
    { "name": "隐形军刀", "en": "Unseen Saber", "type": "武器", "location": "riverford", "how": "向利维福德守卫偷窃/购买（约47,500叶）" },
    { "name": "龙之军刀", "en": "Dragon Saber", "type": "武器", "location": "riverford", "how": "对下层少女打听/探查（Lv50）后，杂货店58,000叶购买", "effect": "物攻+273、会心+120" },
    { "name": "巨人之棍", "en": "Giant's Club", "type": "武器", "location": "riverford", "how": "向下层老婆婆偷窃/购买（约47,500叶）" },
    { "name": "帝国长枪", "en": "Imperial Lance", "type": "武器", "location": "riverford", "how": "支线「再会，哈拉尔德」后向哈拉尔德偷窃/购买（约32,300叶）" },
    { "name": "哈拉尔德之剑", "en": "Harald's Sword", "type": "武器", "location": "riverford", "how": "支线「再会，哈拉尔德」奖励", "effect": "物攻+380、属攻+120，提升火属性伤害，盗贼/符文大师好用" },
    { "name": "名门之铠", "en": "High House's Armor", "type": "防具", "location": "riverford", "how": "支线「寻亲的梅莉尔（三）」奖励" },
    { "name": "精金之盾", "en": "Adamantine Shield", "type": "防具", "location": "riverford", "how": "利维福德下层宝箱" },
    { "name": "守护项链", "en": "Protective Necklace", "type": "饰品", "location": "riverford", "how": "欧贝利克第4章后向雷吉偷窃/购买（约19,000叶）" },
    { "name": "禁忌之刃", "en": "Forbidden Blade", "type": "武器", "location": "refuge_ruins", "how": "贵族的藏身处遗迹紫色宝箱：存档点上方瀑布下，击败巨人之前即可开启" },
    { "name": "力场之盾", "en": "Force Shield", "type": "防具", "location": "refuge_ruins", "how": "贵族的藏身处遗迹宝箱" },
    { "name": "附魔法杖", "en": "Enchanted Rod", "type": "武器", "location": "refuge_ruins", "how": "贵族的藏身处遗迹宝箱" },
    { "name": "元素轻铠", "en": "Elemental Light Armor", "type": "防具", "location": "clearbrook", "how": "对酒馆常客打听/探查后，杂货店16,800叶购买", "effect": "物防+88、属防+108、速度+72，前期极强" },
    { "name": "力量腰带", "en": "Mighty Belt", "type": "饰品", "location": "clearbrook", "how": "支线「渔获不再」奖励" },
    { "name": "绅士护符", "en": "Gentleman's Charm", "type": "饰品", "location": "east_saintsbridge_traverse", "how": "支线「无名的遗体」奖励" },
    { "name": "敏捷手镯", "en": "Sprightly Bracelet", "type": "饰品", "location": "east_saintsbridge_traverse", "how": "向河边居民偷窃/购买（约5,510叶）；利维福德杂货店情报追加5,800叶", "effect": "速度+50" },
    { "name": "友情徽章", "en": "Badge of Friendship", "type": "饰品", "location": "saintsbridge", "how": "支线「重归于好」奖励" },
    { "name": "药师（副职业）", "en": "Apothecary License", "type": "职业证", "location": "shrine_healer", "how": "调查灵药公祠堂的神像" },
    { "name": "武艺家（隐藏职业）", "en": "Warmaster License", "type": "职业证", "location": "shrine_warbringer", "how": "在豪武匠的祠堂击败豪武匠温希德" }
  ],

  "jobs": [
    { "name": "药师", "en": "Apothecary", "location": "shrine_healer", "how": "从东圣特布里吉川道路标处一直向东，绕过岩石进入灵药公的祠堂，调查神像即可获得（无战斗）" },
    { "name": "武艺家", "en": "Warmaster", "location": "shrine_warbringer", "how": "经断崖地区南欧亚威尔小径到北利维福德川道，从西南隐蔽窄路进入豪武匠的祠堂（危险度50），击败豪武匠温希德（HP约20万，建议Lv60+并先取得魔术师或符文大师）" }
  ],

  "tips": [
    "本区三个城镇分属三个「环」：库利亚布鲁克（第1章级）→ 圣特布里吉（第2~3章级）→ 利维福德（第4章级），越往西南越危险。",
    "利维福德无法从圣特布里吉直接抵达，必须绕道断崖地区欧亚威尔南侧的南欧亚威尔小径进入北利维福德川道。",
    "圣特布里吉大圣堂的慈祥的神官身上有禁忌之杖，有提里昂时可在中期高等级偷取省下7万多叶；偷窃失败会扣名声，恢复需8,000叶。",
    "利维福德恢复名声需30,000叶，偷窃/挑战前一定先存档。下层老婆婆和圣特布里吉西侧老人都可打听到「挑战轻松」，降低挑战所需等级。",
    "库利亚布鲁克的老婆婆是超强NPC（强度10），想刷历战之杖需要极高等级与耐心。",
    "梅莉尔支线（一）完成前务必对梅莉尔打听拿隐藏的橄榄花，之后永久错过。",
    "奥菲莉亚第2章开始前后记得向巴尔特罗主教买/偷奇迹之杖，通关后主教会消失到奥菲莉亚第4章结束。",
    "豪武匠祠堂与贵族的藏身处遗迹都在北利维福德川道，建议拿到其他隐藏职业后一并攻略。"
  ],

  "roads": [
    ["clearbrook", "west_clearbrook_traverse"],
    ["clearbrook", "path_of_rhiyo"],
    ["path_of_rhiyo", "cave_of_rhiyo"],
    ["west_clearbrook_traverse", "south_clearbrook_traverse"],
    ["south_clearbrook_traverse", "twin_falls"],
    ["south_clearbrook_traverse", "east_saintsbridge_traverse"],
    ["east_saintsbridge_traverse", "saintsbridge"],
    ["east_saintsbridge_traverse", "shrine_healer"],
    ["east_saintsbridge_traverse", "farshore"],
    ["saintsbridge", "murkwood_trail"],
    ["murkwood_trail", "murkwood"],
    ["saintsbridge", "rivira_woods"],
    ["riverford", "north_riverford_traverse"],
    ["riverford", "hidden_path"],
    ["hidden_path", "lords_manse"],
    ["riverford", "lords_manse"],
    ["north_riverford_traverse", "refuge_ruins"],
    ["north_riverford_traverse", "shrine_warbringer"]
  ],

  "links": [
    { "from": "west_clearbrook_traverse", "region": "cliftlands", "to": "south_bolderfall_pass" },
    { "from": "south_clearbrook_traverse", "region": "sunlands", "to": "southern_sunshade_sands" },
    { "from": "north_riverford_traverse", "region": "cliftlands", "to": "south_orewell_pass" }
  ]
});

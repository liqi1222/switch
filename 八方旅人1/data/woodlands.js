OT2.addRegion({
  "id": "woodlands",
  "name": "森林地区",
  "en": "Woodlands",
  "official": "伍多兰多地区",
  "continent": "west",
  "levelRange": "1-50",
  "starter": "汉伊特（猎人）",
  "intro": "位于奥鲁斯特拉大陆西北部的大片森林，没有统一国家，各城镇自治。南部「黑森林」中的希·沃尔基是猎人汉伊特的故乡；西海岸的维克塔霍洛以斗技场闻名；西北深处的达斯克瓦罗建在千年古代遗迹之上。东接雪原地区，南接断崖地区。",
  "highlights": [
    "东维克塔霍洛森道的狩猎女王祠堂：解锁副职业「猎人」",
    "东达斯克瓦罗森道迷雾小路深处的魔大公祠堂：击败魔大公德雷桑格获得隐藏职业「魔术师」",
    "兽道紫色宝箱的「战枪」是序盘极强的枪，有盗贼即可提前拿",
    "不归之森隐藏Boss「食人花」（HP约22万），支线「绑架」奖励招致死亡之剑",
    "维克塔霍洛斗技场前可偷/买维克塔之枪、古斯塔夫之盾、神圣之刃、帝国长枪、历战之斧等强力装备",
    "西希·沃尔基森道的江湖艺人团长：真结局支线「团长与阿尔法丝，在那之后」「旅途的最后」起点"
  ],

  "locations": [
    {
      "id": "swarkii",
      "name": "希·沃尔基",
      "en": "S'warkii",
      "type": "town",
      "wpos": [655, 326],
      "level": "1",
      "desc": "黑森林深处的猎人之村，汉伊特与师父赞塔的故乡，汉伊特第1章起点。",
      "story": ["汉伊特 第1章", "汉伊特 第4章（赞塔归来后可交互）"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "普通宝箱" },
        { "item": "醒神李子", "how": "普通宝箱" },
        { "item": "石弓（Stone Bow）", "how": "紫色宝箱，需盗贼提里昂开锁" },
        { "item": "还魂橄榄", "how": "隐藏道具：对村长打听/探查（情报Lv8）后在小地图「！」处调查" },
        { "item": "1000叶", "how": "隐藏道具：对狩猎者打听/探查（情报Lv10）" },
        { "item": "醒神李子（大）", "how": "隐藏道具：对贵族基兰的使者打听/探查；击败吉萨尔玛后使者消失，需在第1章中获取" },
        { "item": "冰之精灵石", "how": "隐藏道具：对见习猎人打听/探查（情报Lv1）" }
      ],
      "npcs": [
        { "name": "赞塔", "item": "历战之弓（Battle-tested Bow）", "method": "购买", "note": "汉伊特第4章通关后出现在村中；约84,000叶购买，不可偷窃。挑战掉落复苏果酱" },
        { "name": "讲述传说的老人", "item": "历战之弓", "method": "挑战", "note": "汉伊特第1章后出现在酒馆，强度10（HP约3.6万），汉伊特唆使获胜后有极低概率掉落历战之弓；也可打听「魔物操控人的传说」（阿什兰支线用）" },
        { "name": "猛兽猎人伯纳德", "item": "告解铠甲（Confessional Armor）", "method": "偷窃/购买", "note": "欧贝利克第4章通关后出现；购买约38,400叶，偷窃需高等级（约Lv60可稳偷）" },
        { "name": "村长", "item": "奥术弓（Arcane Bow）", "method": "偷窃/购买", "note": "约2,520叶，序盘好用的弓" },
        { "name": "狩猎者", "item": "隼之装束（Falcon Garb）", "method": "探听", "note": "对其打听/探查后，杂货店追加商品隼之装束（8,160叶，回避高）" },
        { "name": "见习猎人", "item": "支线「成人的仪式」委托人", "method": "引导", "note": "汉伊特第1章通关后出现" },
        { "name": "贵族史研究家", "item": "还魂橄榄（特大）", "method": "偷窃/购买", "note": "约19,000叶" }
      ],
      "shops": ["杂货店：复合弓、狼之弓、士兵长弓（12,000叶，物攻+98）、圆盾、青铜头盔/铠甲；打听狩猎者后追加隼之装束"],
      "tips": "第1章开头的贵族基兰的使者身上有隐藏道具情报，打倒吉萨尔玛前务必先打听。"
    },
    {
      "id": "path_to_whisperwood",
      "name": "通往耳语之森的路",
      "en": "Path to the Whisperwood",
      "type": "field",
      "wpos": [633, 335],
      "level": "1",
      "desc": "希·沃尔基西侧通往耳语之森的林间小路，汉伊特第1章必经。",
      "story": ["汉伊特 第1章"],
      "boss": [],
      "treasures": [
        { "item": "暗之精灵石", "how": "普通宝箱" },
        { "item": "治愈葡萄", "how": "普通宝箱" },
        { "item": "醒神李子", "how": "普通宝箱，入口西侧尽头" },
        { "item": "500叶", "how": "红色宝箱，路径第一次转为向正西处的死路" }
      ],
      "npcs": [],
      "shops": [],
      "tips": ""
    },
    {
      "id": "whisperwood",
      "name": "耳语之森",
      "en": "The Whisperwood",
      "type": "dungeon",
      "wpos": [612, 344],
      "level": "1-11（随队伍人数浮动）",
      "desc": "希·沃尔基猎人们磨练技艺的森林，汉伊特第1章迷宫，深处有魔物吉萨尔玛。",
      "story": ["汉伊特 第1章"],
      "boss": [
        { "name": "吉萨尔玛", "en": "Ghisarma", "level": "约5-8", "weakness": ["剑", "弓", "冰", "雷", "光"], "tips": "开局就有的「骤雨箭（Rain of Arrows）」多段命中，最适合削盾。出现「伺机反击」时普通物理攻击会被反击，用破防解除；提示「摆出跳跃姿势」时下一回合强力全体攻击，来不及破防就防御。可被毒/致盲。掉落治愈葡萄串。" }
      ],
      "treasures": [
        { "item": "治愈葡萄", "how": "普通宝箱，进入后北侧" },
        { "item": "暗之精灵石", "how": "普通宝箱，西南角" },
        { "item": "醒神李子", "how": "普通宝箱，西北支路" },
        { "item": "600叶", "how": "红色宝箱，存档点南侧、火把前的死路尽头" },
        { "item": "青铜背心（Bronze Vest）", "how": "红色宝箱，存档点正东的山丘顶，两块岩石之间的小路" },
        { "item": "活力石榴", "how": "普通宝箱，存档点东侧的小空地" }
      ],
      "npcs": [],
      "shops": ["Boss前有旅行商人：治愈葡萄50、醒神李子240、还魂橄榄500"],
      "tips": "Boss前有存档点与旅行商人。"
    },
    {
      "id": "north_swarkii_trail",
      "name": "北希·沃尔基森道",
      "en": "North S'warkii Trail",
      "type": "field",
      "wpos": [662, 298],
      "level": "1",
      "desc": "希·沃尔基北侧的森道，东通雪原地区（西弗雷姆葛雷斯雪道），西接西希·沃尔基森道。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "普通宝箱" },
        { "item": "还魂橄榄", "how": "普通宝箱" },
        { "item": "睡眠治疗药草", "how": "普通宝箱" },
        { "item": "轻身坚果", "how": "红色宝箱，西侧入口（往西希·沃尔基森道）附近的小凹地" }
      ],
      "npcs": [
        { "name": "流浪的学者", "item": "情报「大牙野猪的生态」", "method": "探听", "note": "支线「成人的仪式」解法①，汉伊特第1章后出现在森道左侧" },
        { "name": "行商的猎人", "item": "大牙野猪的獠牙", "method": "偷窃/购买", "note": "支线「成人的仪式」解法②，约860叶；另持疾风之服" },
        { "name": "克里斯（旅行青年）", "item": "支线「旅行青年」", "method": "引导", "note": "仅以汉伊特为初始主角时出现，给他治愈葡萄即可" }
      ],
      "shops": [],
      "tips": ""
    },
    {
      "id": "west_swarkii_trail",
      "name": "西希·沃尔基森道",
      "en": "West S'warkii Trail",
      "type": "field",
      "wpos": [592, 308],
      "level": "1",
      "desc": "连接北希·沃尔基森道、兽道、东维克塔霍洛森道，南下可通断崖地区（南柏达弗尔崖道）的交通枢纽。",
      "story": [],
      "boss": [
        { "name": "碧眼之虎", "en": "Azure-eyed Tiger", "level": "终盘（HP约3.4万）", "weakness": ["剑", "短剑", "杖", "冰", "风"], "tips": "支线「团长与阿尔法丝，在那之后」的Boss，闪避高但HP低，用魔法破防后集中输出即可秒杀。" }
      ],
      "treasures": [
        { "item": "醒神李子", "how": "普通宝箱" },
        { "item": "还魂橄榄", "how": "普通宝箱" },
        { "item": "黑暗治疗药草", "how": "普通宝箱" }
      ],
      "npcs": [
        { "name": "江湖艺人团长", "item": "真结局支线「团长与阿尔法丝，在那之后」「旅途的最后」", "method": "引导", "note": "完成全员第4章、「命中注定之人（2）」「寻找父亲的旅行者克里斯（2）」后出现；可买蜃气楼之帽等非卖品（价格为1）" }
      ],
      "shops": [],
      "tips": "江湖艺人团长是进入终盘隐藏迷宫「终结之门」的关键NPC。"
    },
    {
      "id": "path_of_beasts",
      "name": "兽道",
      "en": "Path of Beasts",
      "type": "dungeon",
      "wpos": [575, 330],
      "level": "15",
      "desc": "西希·沃尔基森道旁的线性小森林，无Boss，尽头是瀑布美景。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "醒神李子（大）", "how": "普通宝箱" },
        { "item": "4000叶", "how": "红色宝箱" },
        { "item": "铁壁坚果", "how": "红色宝箱" },
        { "item": "战枪（War Lance）", "how": "紫色宝箱，需盗贼；序盘最强档长枪（物攻+71、会心+41）" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "有欧贝利克和提里昂时，第1章阶段就值得来拿战枪。"
    },
    {
      "id": "east_victors_hollow_trail",
      "name": "东维克塔霍洛森道",
      "en": "East Victors Hollow Trail",
      "type": "field",
      "wpos": [640, 272],
      "level": "20",
      "desc": "南接西希·沃尔基森道，往南门进入维克塔霍洛，东通雪原地区（西史迪尔斯诺雪道），北上为东达斯克瓦罗森道。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "醒神李子", "how": "普通宝箱，第一个路标正东、靠近西希·沃尔基森道入口的树旁" },
        { "item": "治愈葡萄（大）", "how": "普通宝箱，第二个路标（祠堂附近）左侧上坡后下行的短路尽头" },
        { "item": "5000叶", "how": "红色宝箱，沿上一个箱子的坡向上后继续往左，穿过岩石后的隐藏小路再沿曲折小路前进" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "路标往北走到尽头，往右穿过岩石后的草地即达狩猎女王祠堂。"
    },
    {
      "id": "shrine_huntress",
      "name": "狩猎女王的祠堂",
      "en": "Shrine of the Huntress",
      "type": "shrine",
      "wpos": [662, 240],
      "level": "20",
      "desc": "祭祀狩猎女王德雷芳朵的祠堂，调查石碑即可解锁副职业「猎人」。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "还魂橄榄（特大）", "how": "红色宝箱，祠堂步道右侧、靠石栏处" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "从东维克塔霍洛森道路标北行至尽头，向东穿过岩石遮挡的草地，在悬崖北侧找到入口。"
    },
    {
      "id": "victors_hollow",
      "name": "维克塔霍洛",
      "en": "Victors Hollow",
      "type": "town",
      "wpos": [603, 256],
      "level": "",
      "desc": "号称「森林明珠」的斗技场城镇，欧贝利克第2章、特蕾莎第3章舞台。",
      "story": ["欧贝利克 第2章", "特蕾莎 第3章"],
      "boss": [
        { "name": "傲慢的强者", "en": "Prideful Warrior", "level": "约20", "weakness": ["剑", "短剑", "火", "雷"], "tips": "欧贝利克第2章一对一挑战，位于城镇入口，盾4。8%掉落限定防具异国装束，打倒后消失，想要可读档重刷。" },
        { "name": "不逊的强者", "en": "Contemptuous Warrior", "level": "约20", "weakness": ["枪", "弓", "风", "暗"], "tips": "欧贝利克第2章一对一挑战，位于旅馆外，盾4。持枪破防后蓄力攻击即可，8%掉落宏伟铠甲。" }
      ],
      "treasures": [
        { "item": "隐藏道具：醒神李子（大）", "how": "对商人打听/探查（情报Lv24）" },
        { "item": "隐藏道具：回春果酱", "how": "对町人打听/探查（情报Lv18）" },
        { "item": "鼓鼓的钱包（Heavy Coin Pouch）", "how": "红色宝箱，孤儿院内；需先挑战/唆使击败孤儿院门口的女性（强度6，盾4，弱剑/短剑/暗）" }
      ],
      "npcs": [
        { "name": "商人", "item": "大圣火之袍（Robe of the Flame）、火焰护符", "method": "偷窃/购买", "note": "大圣火之袍约47,880叶（盗窃约Lv69稳偷），火焰护符约12,825叶" },
        { "name": "町人（城镇入口）", "item": "情报：武器店追加维克塔之枪（42,000叶）、巨人之盾（24,000叶）", "method": "探听", "note": "此人引导助战可放「全体防御降低」，打斗技场很有用" },
        { "name": "保镖亚雷克", "item": "百万短剑（Legion Dagger）", "method": "偷窃/购买", "note": "汉伊特第4章通关后出现，约44,000叶；同时是支线「亚雷克，在那之后」委托人" },
        { "name": "疲惫的剑斗士", "item": "骑士之剑（Knight's Sword）", "method": "偷窃/购买", "note": "约24,700叶；支线「成为剑斗士的憧憬」委托人" },
        { "name": "卖花少女", "item": "思念草（Mind-me-always）", "method": "偷窃/购买", "note": "支线「药师欧根，在那之后」所需道具，约27,550叶" },
        { "name": "憔悴的商人", "item": "雷之精灵石（特大）", "method": "偷窃/购买", "note": "汉伊特第4章后出现" }
      ],
      "shops": ["道具店：治愈葡萄50、治愈葡萄（大）260、醒神李子240、还魂橄榄（大）3,000，以及黑暗/睡眠/解毒草", "武具店位于斗技场前；打听入口町人后追加维克塔之枪（42,000叶）、巨人之盾（24,000叶）"],
      "tips": "城中稳重的父亲（支线「绑架」）、疲惫的剑斗士（支线「成为剑斗士的憧憬」）。"
    },
    {
      "id": "victors_hollow_arena",
      "name": "维克塔霍洛斗技场",
      "en": "Victors Hollow: The Arena",
      "type": "dungeon",
      "wpos": [621, 226],
      "level": "约20",
      "desc": "维克塔霍洛北侧的斗技场与斗技场前广场，欧贝利克第2章锦标赛在此进行，每场之间可存档。",
      "story": ["欧贝利克 第2章"],
      "boss": [
        { "name": "海盗杀手维克托里诺", "en": "Victorino", "level": "约20", "weakness": ["剑", "短剑", "风", "暗"], "tips": "带2名手下（剑/短剑/雷/暗弱点），全员弱剑和暗，用横扫类全体技与「暗夜之诗」一并处理。" },
        { "name": "冰冻之剑约书亚", "en": "Joshua Frostblade", "level": "约20", "weakness": ["斧", "杖", "火", "光"], "tips": "先清2名美形剑斗士（短剑/弓/火/风），约书亚会混乱攻击，可用挑衅+健全化应对。" },
        { "name": "粉碎者阿奇博尔德", "en": "Archibold the Crusher", "level": "约22", "weakness": ["短剑", "弓", "冰", "暗"], "tips": "开场蓄力放「王者之锤」全体物理+物防下降，可用商人雇佣佣兵抵消；先解决2名假面剑斗士（斧/杖/火/光）。" },
        { "name": "黑骑士古斯塔夫", "en": "Gustav", "level": "约24", "weakness": ["枪", "斧", "弓", "火", "暗"], "tips": "两名盾斗士（剑/杖/冰/风）在场时古斯塔夫弱点全被掩护，先用冰魔法/冰精灵石打倒盾斗士。HP半血后每回合3动，用千本枪或骤雨箭速破。掉落古斯塔夫之盾。" }
      ],
      "treasures": [
        { "item": "装银币的皮袋（Silver-filled Pouch）", "how": "红色宝箱，斗技场前广场的民居内；需先挑战/唆使击败门口的拉客的人（强度6，盾4，弱火/风/暗）" },
        { "item": "醒神李子", "how": "普通宝箱，斗技场内大门左侧的等候室" },
        { "item": "暗之护符", "how": "紫色宝箱，需盗贼；斗技场内大门右侧的等候室" },
        { "item": "冰之精灵石（特大）", "how": "隐藏道具：对斗技场工作人员打听/探查" },
        { "item": "活力石榴（大）", "how": "隐藏道具：对观众打听/探查" },
        { "item": "雷之护符", "how": "隐藏道具：对老人打听/探查" }
      ],
      "npcs": [
        { "name": "黑骑士古斯塔夫", "item": "古斯塔夫之盾", "method": "偷窃/购买", "note": "仅决赛开打前可交互，约19,200叶；另有俊敏手镯等。约书亚、阿奇博尔德赛前也可打听弱点情报" },
        { "name": "观众（持维克塔之枪）", "item": "维克塔之枪（Victor's Spear）、毛皮帽子", "method": "偷窃/购买", "note": "维克塔之枪约39,900叶，第2章阶段极强的枪" },
        { "name": "观众（持弓）", "item": "暗影弓（Shadow Bow）", "method": "偷窃/购买", "note": "约20,425叶" },
        { "name": "观众（持斧）", "item": "灰熊斩（Grizzly Slasher）", "method": "偷窃/购买", "note": "约29,450叶" },
        { "name": "观众（持短剑）", "item": "魔法短刀（Magic Knife）、黄金发饰", "method": "偷窃/购买", "note": "魔法短刀约25,650叶" },
        { "name": "艾斯塔达斯", "item": "神圣之刃（Divine Blade）", "method": "偷窃/购买", "note": "约28,500叶；也是支线「下注的事前准备」情报来源" },
        { "name": "蒙德尔", "item": "帝国长枪（Imperial Lance）", "method": "偷窃/购买", "note": "约32,300叶；支线「下注的事前准备」情报来源" },
        { "name": "拉客的人", "item": "战斧弓（Tomahawk Bow）", "method": "偷窃/购买", "note": "约19,000叶" },
        { "name": "专打魔物的剑斗士", "item": "魔剑「大蛇杀手」", "method": "偷窃/购买", "note": "阿什兰（1）完成后出现，阿什兰（2）所需，约15,200叶" },
        { "name": "剑斗士内德", "item": "历战之斧（Battle-tested Axe）、水晶背心", "method": "偷窃/购买", "note": "欧贝利克第4章通关后出现；历战之斧约87,600叶（偷窃约Lv78），水晶背心约52,440叶" },
        { "name": "兴行主赛西莉", "item": "守备的纹章", "method": "偷窃/购买", "note": "欧贝利克第4章通关后" }
      ],
      "shops": ["斗技场前武具店（打听城镇入口町人后追加维克塔之枪、巨人之盾）"],
      "tips": "第2章锦标赛是团队战而非单挑，每场之间可存档整备。"
    },
    {
      "id": "path_to_forgotten_grotto",
      "name": "通往被遗忘的洞窟的路",
      "en": "Path to the Forgotten Grotto",
      "type": "field",
      "wpos": [560, 244],
      "level": "约30",
      "desc": "维克塔霍洛西侧通往海边洞窟的林道，特蕾莎第3章必经。",
      "story": ["特蕾莎 第3章"],
      "boss": [],
      "treasures": [
        { "item": "还魂橄榄", "how": "普通宝箱，入口对面、从主路沿草地小路下行" },
        { "item": "暗之精灵石（大）", "how": "普通宝箱，第一座桥前向北的草地小路" },
        { "item": "治愈葡萄（大）", "how": "普通宝箱，过第二座桥后右转穿过草丛" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "洞窟入口在存档点东侧。"
    },
    {
      "id": "forgotten_grotto",
      "name": "被遗忘的洞窟",
      "en": "The Forgotten Grotto",
      "type": "dungeon",
      "wpos": [526, 232],
      "level": "34",
      "desc": "海盗巴尔塔扎尔的船沉没之处，埋藏着传说宝石「艾尔德莱特」，特蕾莎第3章迷宫。",
      "story": ["特蕾莎 第3章"],
      "boss": [
        { "name": "猛毒虎", "en": "Venomtooth Tiger", "level": "约34", "weakness": ["枪", "弓", "火", "光"], "tips": "开场赋予自己毒爪并每回合2动，全体攻击可让全队中毒；每次从破防恢复盾值+2（最多10）。半血后施放「至高之毒」，中毒者还会损失SP与BP——让阿芬调合解毒雾气或预先健全化。千本枪/骤雨箭/调合可省BP破盾。掉落还魂橄榄（大）。" }
      ],
      "treasures": [
        { "item": "黑暗治疗药草", "how": "普通宝箱，入口北侧" },
        { "item": "治愈葡萄串", "how": "红色宝箱，第二个火把处上坡后向左" },
        { "item": "醒神李子篮", "how": "红色宝箱，第二、三个火把之间坡道中段左壁的隐藏小路" },
        { "item": "活力石榴（特大）", "how": "普通宝箱，第六个火把左侧沿坡道下行" },
        { "item": "大锤（Sledgehammer）", "how": "紫色宝箱，需盗贼；第六个火把下方右侧坡道" },
        { "item": "15000叶", "how": "红色宝箱，第十个火把右侧穿过岩石（水面上方的桥对面）" },
        { "item": "还魂橄榄（大）", "how": "普通宝箱，第十个火把左侧向下" },
        { "item": "即死耐性石（Vivifying Stone）", "how": "红色宝箱，第十二、十三个火把之间向上到最里，再往右" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "带阿芬或解毒手段，Boss后半毒伤非常危险。"
    },
    {
      "id": "forest_of_no_return",
      "name": "不归之森",
      "en": "Forest of No Return",
      "type": "secret",
      "wpos": [582, 220],
      "level": "48（Boss远高于此）",
      "desc": "斗技场前往西进入的阴森森林，传闻进去的人都回不来，深处栖息着隐藏Boss食人花。",
      "story": [],
      "boss": [
        { "name": "食人花", "en": "Devourer of Men", "level": "建议Lv60+/取得符文大师后", "weakness": ["阶段1：枪/短剑/杖/火", "阶段2：斧/弓/风", "阶段3：剑/光（之后循环）"], "tips": "HP约22.5万，伴随2只食人猛菌（剑/枪/斧/风），猛菌全灭会立即重生，留一只专打本体。会致盲、混乱、把角色移出战斗，蓄力技吸收目标全部HP。神官/药师受「舞踏姬」强化后全体化健全化+反射之帷可抵挡暗属性魔法；剑之武艺：高丽犬便于破防。击败后支线「绑架」可带回爱莉。" },
        { "name": "盗贼团头目", "en": "Bandit Leader", "level": "第4章后", "weakness": ["短剑", "斧", "雷", "光"], "tips": "仅在引导/诱惑保镖亚雷克进行支线「亚雷克，在那之后」时于森林西北出现，HP约1.4万，会即死攻击，让亚雷克助战速破。" }
      ],
      "treasures": [
        { "item": "治愈葡萄串", "how": "红色宝箱，入口正对面" },
        { "item": "醒神李子篮", "how": "红色宝箱，从第一个存档点向上后立刻右侧" },
        { "item": "元素长柄（Elemental Glaive）", "how": "紫色宝箱，需盗贼；第一个存档点旁坡道向上后往左" },
        { "item": "静寂头巾（Silent Bandana）", "how": "红色宝箱，第一个分岔往右（上）一直走进营地区域" },
        { "item": "暗之精灵石（特大）", "how": "普通宝箱，第六个火把下坡处，被灌木半遮" },
        { "item": "即死耐性石", "how": "红色宝箱，上一个箱子往左、第七个火把上方的隐藏坡道" }
      ],
      "npcs": [
        { "name": "盗贼团头目", "item": "大蛇短剑（Viper Dagger）、会心手镯", "method": "偷窃/购买", "note": "支线「亚雷克，在那之后」期间出现，务必在战斗前买/偷大蛇短剑（约61,750叶）" }
      ],
      "shops": [],
      "tips": "击败食人花后此地会随机遇到「蠕动大花」，可让汉伊特捕获（强度10）。"
    },
    {
      "id": "east_duskbarrow_trail",
      "name": "东达斯克瓦罗森道",
      "en": "East Duskbarrow Trail",
      "type": "field",
      "wpos": [560, 198],
      "level": "约40",
      "desc": "从东维克塔霍洛森道北上，西通达斯克瓦罗，旁有失落的遗迹与魔大公祠堂的迷雾小路。",
      "story": ["塞拉斯 第4章（前往途中）"],
      "boss": [],
      "treasures": [
        { "item": "苏醒药草", "how": "普通宝箱，从东维克塔霍洛森道进入后第一个分岔之前下行" },
        { "item": "沉默治疗药草", "how": "普通宝箱，第一个分岔往左沿窄路" },
        { "item": "装铜币的麻袋", "how": "红色宝箱，从达斯克瓦罗方向在第一个存档点前下行" },
        { "item": "还魂橄榄（大）", "how": "普通宝箱，通往魔大公祠堂的路上" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "存档点向东走到底为失落的遗迹；北侧迷雾小路绕到山背后为魔大公的祠堂。"
    },
    {
      "id": "duskbarrow",
      "name": "达斯克瓦罗",
      "en": "Duskbarrow",
      "type": "town",
      "wpos": [509, 190],
      "level": "",
      "desc": "建在千年古代都市遗址上的森林小村，塞拉斯第4章舞台，村北石门后是古代遗迹。",
      "story": ["塞拉斯 第4章"],
      "boss": [],
      "treasures": [
        { "item": "30000叶", "how": "紫色宝箱，需盗贼；村中央大石像右侧" },
        { "item": "毒之瓶", "how": "普通宝箱，村中央石像南侧偏左，灌木与残柱之间" },
        { "item": "奇特的古董", "how": "红色宝箱，村子左上角，沿小路经过有人看守的民居后下行" },
        { "item": "进化弓·鹰（Improved Bow of the Eagle）", "how": "隐藏道具：对村人打听/探查（情报Lv45）" },
        { "item": "杂物小袋", "how": "隐藏道具：对老实的旅行商人打听/探查" },
        { "item": "冰之精灵石（大）", "how": "隐藏道具：对窃笑的居民打听/探查（特蕾莎第4章后）" },
        { "item": "古老的硬币", "how": "隐藏道具：对拿着徽章的可疑商人打听/探查" }
      ],
      "npcs": [
        { "name": "村人", "item": "大蛇短剑（Viper Dagger）", "method": "偷窃/购买", "note": "约61,750叶（偷窃约Lv72），终盘强力短剑；挑战强度9" },
        { "name": "老婆婆", "item": "大蓝宝石杖、回春果酱", "method": "偷窃/购买", "note": "大蓝宝石杖约38,000叶；打听后杂货店追加力场之盾（28,800叶）" },
        { "name": "拿着徽章的可疑商人", "item": "会心耳环、铁剑", "method": "偷窃/购买", "note": "其他地区支线「复仇代行」进行中出现；会心耳环约25,480叶" },
        { "name": "窃笑的居民", "item": "让人想写进日记的名品", "method": "偷窃/购买", "note": "特蕾莎第4章后出现，支线「日记伯伯寻找的东西」所需，约24,700叶" },
        { "name": "伍多兰多的知识人", "item": "情报「伍多兰多的历史」、迅捷坚果（特大）", "method": "探听", "note": "支线「学者拉塞尔，在那之后」进行中出现" },
        { "name": "村长", "item": "还魂橄榄（特大）", "method": "偷窃/购买", "note": "约19,000叶；打听可得旅馆折扣" }
      ],
      "shops": ["杂货店：蓝宝石杖32,000、睿智法杖40,000、陨石杖45,000、精金之盾14,400、力场之盾28,800（需先打听老婆婆）、古代头冠14,400、古代长袍19,200，以及治愈葡萄（大）、治愈葡萄串、醒神李子（大）、还魂橄榄（大）3,000等"],
      "tips": "进村前沿森道往右下回头走，可在迷雾中找到失落的遗迹。"
    },
    {
      "id": "ruins_of_eld",
      "name": "古代遗迹",
      "en": "Ruins of Eld",
      "type": "dungeon",
      "wpos": [524, 166],
      "level": "45-46",
      "desc": "达斯克瓦罗北侧石门后的古代遗迹，藏有禁书馆与不祥壁画，塞拉斯第4章迷宫。",
      "story": ["塞拉斯 第4章"],
      "boss": [
        { "name": "露西亚", "en": "Lucia", "level": "约46", "weakness": ["阶段1：剑/枪/短剑/斧/弓（盾30）", "阶段2：火/冰/雷/风/光（盾15）", "阶段3：剑/斧/雷/光（盾8）"], "tips": "HP约8.4万，每回合2动，第3阶段3动且每回合回血。阶段1只吃物理，用千本枪、骤雨箭削盾，塞拉斯先当辅助；阶段2由学者/魔术师魔法主攻；阶段3她蓄力后会放「全能诅咒」把全队HP降到1，务必破防打断。攻击附带昏厥，给治疗角色装昏厥耐性石。" }
      ],
      "treasures": [
        { "item": "符文弓（Rune Bow）", "how": "紫色宝箱，第二个房间后上楼贴西墙北行的隐藏通路，需盗贼" },
        { "item": "回春果酱", "how": "红色宝箱，沿主路第一个火把左侧的房间" },
        { "item": "20000叶", "how": "红色宝箱，第二个火把北侧被强光遮住的残破壁龛" },
        { "item": "50000叶", "how": "紫色宝箱，需盗贼；下半区左侧入口，贴里墙的巨大石柱旁" },
        { "item": "暗之精灵石（特大）", "how": "普通宝箱，第二个火把右侧，无视台阶继续向右的隐藏坡道" },
        { "item": "即死耐性石", "how": "红色宝箱，蜥蜴壁画的明亮大厅内，倒塌石柱后贴墙" },
        { "item": "宵暗之护符", "how": "红色宝箱，下半区右侧入口，上楼后最里面的房间" },
        { "item": "治愈葡萄串", "how": "红色宝箱，后半段入口下楼正对面的坍塌房间" },
        { "item": "活力石榴（特大）", "how": "普通宝箱，后半段第三个火把正上方、靠书架的墙边" },
        { "item": "冰之精灵石（特大）", "how": "普通宝箱，后半段第四个火把旁的门（图书室）下楼后往右" },
        { "item": "骑士之盾（Knight's Shield）", "how": "红色宝箱，后半段第五个火把右侧（石地变森林的断柱旁），Boss前最后一个" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "石门机关：选「不按」→「不拉」→「转动」开门。"
    },
    {
      "id": "moldering_ruins",
      "name": "失落的遗迹",
      "en": "Moldering Ruins",
      "type": "dungeon",
      "wpos": [604, 188],
      "level": "45",
      "desc": "东达斯克瓦罗森道存档点东侧尽头的地下遗迹，红光笼罩，盗掘者出没。",
      "story": [],
      "boss": [
        { "name": "盗掘者", "en": "Grave Robber", "level": "挑战需Lv20左右（强度7）", "weakness": ["枪", "斧", "杖", "火", "雷"], "tips": "支线「破坏遗迹的盗掘者」中以挑战/唆使击败，HP约2.4万。欧贝利克可千本枪破防后雷剑将奥义收尾；汉伊特用魔物破防后精灵石（特大）输出。" }
      ],
      "treasures": [
        { "item": "醒神李子（大）", "how": "普通宝箱" },
        { "item": "暗之精灵石（特大）", "how": "普通宝箱" },
        { "item": "治愈葡萄串", "how": "红色宝箱，第三个火把下方的坡道" },
        { "item": "闪电之护符（Thunderstorm Amulet）", "how": "红色宝箱，第七个火把处上楼后一路向右" },
        { "item": "睡神之冠（Hypnos Crown）", "how": "紫色宝箱，需盗贼；第七个火把处上楼后一路向左" },
        { "item": "即死耐性石", "how": "红色宝箱，第七个火把处上楼后，沿右侧下方小路" },
        { "item": "活力石榴（特大）", "how": "普通宝箱" }
      ],
      "npcs": [
        { "name": "盗掘者", "item": "会心坚果（大）、敏捷项链", "method": "偷窃/购买", "note": "支线完成前在场，打倒后消失，先偷/买" },
        { "name": "被操控的父亲", "item": "支线「魔物操控人的末裔阿什兰（3）」终点", "method": "引导", "note": "带着阿什兰来对话即可" }
      ],
      "shops": [],
      "tips": ""
    },
    {
      "id": "shrine_archmagus",
      "name": "魔大公的祠堂",
      "en": "Shrine of the Archmagus",
      "type": "shrine",
      "wpos": [585, 150],
      "level": "50",
      "desc": "祭祀魔大公德雷桑格的洞窟祠堂，击败试炼Boss可获得隐藏职业「魔术师」。",
      "story": [],
      "boss": [
        { "name": "魔大公德雷桑格", "en": "Dreisang, the Archmagus", "level": "建议60+", "weakness": ["盾4：剑/枪/斧/雷/光", "盾7：剑/雷/风", "盾10：弓/光/暗 或 短剑/火/冰"], "tips": "HP约17万，每次破防恢复后弱点与盾值切换。「威吓」会让我方无法被强化，用占星师「抵消之巡」解除（建议先拿占星师）；属攻上升状态的超大属性魔法可造成全灭，神官全体化「反射之帷」反弹。攻击役推荐剑士/盗贼、盗贼/猎人组合。" }
      ],
      "treasures": [
        { "item": "活力石榴（特大）", "how": "普通宝箱，第一个存档点向左" },
        { "item": "暗之精灵石（大）", "how": "普通宝箱，第五个火把南侧小路再向左" },
        { "item": "20000叶", "how": "红色宝箱，第七个火把右侧的阳光下" },
        { "item": "复苏果酱", "how": "红色宝箱，第九个火把上方穿过拱门后右转的草地" },
        { "item": "醒神李子（大）", "how": "普通宝箱" },
        { "item": "巫师法杖（Wizard's Staff）", "how": "紫色宝箱，需盗贼" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "入口在东达斯克瓦罗森道北面迷雾小路，穿过迷雾绕到山背面。"
    }
  ],

  "story": [
    {
      "title": "汉伊特 第1章：黑森林的女猎人",
      "character": "汉伊特",
      "location": "whisperwood",
      "level": "1",
      "summary": "希·沃尔基的猎人汉伊特受贵族基兰的使者委托，前往村西的耳语之森狩猎袭击商队的魔物吉萨尔玛。凯旋后师父赞塔的雪豹哈根独自归来，汉伊特为寻找下落不明的赞塔踏上旅途（下一站高原地区斯托冈德）。",
      "steps": [
        "在希·沃尔基与两名年轻猎人练习，学习「捕获」与「唆使」",
        "到村长家听取贵族基兰使者的委托（先对使者打听隐藏道具）",
        "从村西经通往耳语之森的路进入耳语之森，Boss前有存档点与旅行商人",
        "击败吉萨尔玛后返回村庄，触发哈根归来剧情，第1章结束"
      ],
      "boss": "吉萨尔玛（弱点：剑/弓/冰/雷/光）",
      "tips": "骤雨箭是破防主力；伺机反击状态下别用普通物理攻击，摆出跳跃姿势时破防或防御。"
    },
    {
      "title": "欧贝利克 第2章：斗技场的黑骑士",
      "character": "欧贝利克",
      "location": "victors_hollow_arena",
      "level": "约20",
      "summary": "欧贝利克为打听叛徒艾尔哈特的下落来到维克塔霍洛，得知知情者黑骑士古斯塔夫将参加锦标赛。在兴行主赛西莉的建议下，他通过街头决斗取得参赛资格，一路击败约书亚、阿奇博尔德并在决赛战胜古斯塔夫，得知艾尔哈特在沙漠地区威尔斯宾克。",
      "steps": [
        "在城镇入口挑战傲慢的强者、在旅馆外挑战不逊的强者（一对一）",
        "到斗技场前广场迎战海盗杀手维克托里诺（全队战）",
        "进入锦标赛，在斗技场左侧房间与赛西莉对话开始每场比赛：约书亚 → 阿奇博尔德 → 古斯塔夫",
        "胜利后到旅馆门口与古斯塔夫交谈，得知艾尔哈特在威尔斯宾克，从东侧离城结束"
      ],
      "boss": "黑骑士古斯塔夫（弱点：枪/斧/弓/火/暗，盾斗士在场时全被掩护）",
      "tips": "城镇入口町人引导助战可放全体防御降低；斗技场前观众身上的维克塔之枪对本章帮助很大。傲慢/不逊的强者各有8%掉落限定防具。"
    },
    {
      "title": "特蕾莎 第3章：沉睡的宝石",
      "character": "特蕾莎",
      "location": "forgotten_grotto",
      "level": "约34",
      "summary": "为准备格兰波特商人大会的展品，特蕾莎在维克塔霍洛发现海盗巴尔塔扎尔的藏宝图，并与旧识里昂重逢。她以物易物换得藏宝图，前往城西的被遗忘的洞窟，击败猛毒虎后找到传说宝石「艾尔德莱特」与巴尔塔扎尔写给里昂的信。",
      "steps": [
        "在酒馆触发剧情后，到城北武具店前的商人处用「购买」买下埃德巴特之盾",
        "把盾交给持有藏宝图的商人换取地图，回酒馆看剧情",
        "从酒馆西侧出城，经通往被遗忘的洞窟的路进入洞窟",
        "击败猛毒虎取得艾尔德莱特，回酒馆把信交给里昂，第3章结束"
      ],
      "boss": "猛毒虎（弱点：枪/弓/火/光）",
      "tips": "后半「至高之毒」会让中毒者损失SP/BP，阿芬的解毒调合或健全化是关键；洞窟紫箱有大锤，带上提里昂。"
    },
    {
      "title": "塞拉斯 第4章：禁忌之书",
      "character": "塞拉斯",
      "location": "ruins_of_eld",
      "level": "约45",
      "summary": "追查失窃禁书《边狱之书》的线索，塞拉斯来到达斯克瓦罗，跟踪学院长助手露西亚进入村北古代遗迹。露西亚以血之结晶化身怪物与之交战，战后塞拉斯在遗迹书库与壁画中解读出世界尽头被封印之力的真相。",
      "steps": [
        "在达斯克瓦罗酒馆开始章节，追踪露西亚到村北石门",
        "石门按钮选择：「不按」→「不拉」→「转动」打开古代遗迹",
        "沿途拾取符文弓、50000叶等紫箱，Boss前有存档点",
        "击败露西亚后调查书架与壁画收集情报，整理推理：「在世界尽头封印了力量」「生与死」「不要使用这股力量的警告」"
      ],
      "boss": "露西亚（三阶段弱点：物理五种 → 元素五种 → 剑/斧/雷/光）",
      "tips": "第3阶段的全能诅咒会把全队HP降到1，务必提前留BP破防；攻击附带昏厥，治疗位装昏厥耐性石。"
    }
  ],

  "sidequests": [
    {
      "name": "旅行青年",
      "en": "Kit, the Traveler",
      "location": "north_swarkii_trail",
      "trigger": "仅以汉伊特为初始主角时，在北希·沃尔基森道遇到克里斯",
      "steps": ["交给克里斯一个治愈葡萄"],
      "reward": "1500叶（后续连接克里斯系列与真结局线）",
      "difficulty": "易"
    },
    {
      "name": "魔物操控人的末裔阿什兰（1）",
      "en": "Ashlan the Beastmaster (I)",
      "location": "swarkii",
      "trigger": "汉伊特第1章通关后，与希·沃尔基武器店旁的阿什兰对话",
      "steps": ["到酒馆对讲述传说的老人打听/探查，获得情报「魔物操控人的传说」", "回去告诉阿什兰"],
      "reward": "1500叶、轻身坚果",
      "difficulty": "易"
    },
    {
      "name": "成人的仪式",
      "en": "Rite of Passage",
      "location": "swarkii",
      "trigger": "汉伊特第1章通关后，与希·沃尔基的见习猎人对话",
      "steps": [
        "解法①：到北希·沃尔基森道左侧对流浪的学者打听/探查「大牙野猪的生态」，回来告诉见习猎人",
        "解法②：到北希·沃尔基森道右侧对行商的猎人购买/偷取「大牙野猪的獠牙」，交给见习猎人"
      ],
      "reward": "1500叶、回春果酱（解法不同，见习猎人之后的身份也不同）",
      "difficulty": "易"
    },
    {
      "name": "森林的指路牌",
      "en": "Way Through the Woods",
      "location": "swarkii",
      "trigger": "汉伊特第1章通关后，与希·沃尔基的好脾气的妻子对话",
      "steps": ["对她引导/诱惑使其同行", "前往断崖地区柏达弗尔与努力的丈夫对话"],
      "reward": "1500叶、魔导坚果、会心坚果",
      "difficulty": "易"
    },
    {
      "name": "魔物操控人的末裔阿什兰（2）",
      "en": "Ashlan the Beastmaster (II)",
      "location": "victors_hollow_arena",
      "trigger": "完成（1）后，在维克塔霍洛斗技场前与阿什兰对话",
      "steps": ["对斗技场入口附近的专打魔物的剑斗士偷取/购买魔剑「大蛇杀手」", "交给阿什兰"],
      "reward": "6600叶、轻身坚果（大）",
      "difficulty": "易"
    },
    {
      "name": "下注的事前准备",
      "en": "A Promising Venture",
      "location": "victors_hollow_arena",
      "trigger": "与维克塔霍洛斗技场前的赌徒对话",
      "steps": ["对武器店附近的艾斯塔达斯打听/探查「艾斯塔达斯的状况」", "对台阶附近的蒙德尔打听/探查「蒙德尔的状况」", "回报赌徒"],
      "reward": "4800叶、治愈葡萄串×3",
      "difficulty": "易"
    },
    {
      "name": "成为剑斗士的憧憬",
      "en": "Arena Aspirations",
      "location": "victors_hollow",
      "trigger": "与维克塔霍洛的疲惫的剑斗士对话",
      "steps": [
        "解法①：对酒馆附近少年的姨母打听/探查「剑斗士的父亲」，告诉剑斗士",
        "解法②：对疲惫的剑斗士挑战/唆使并击败他（强度9，挑战约需Lv30）"
      ],
      "reward": "4800叶、回春果酱",
      "difficulty": "中"
    },
    {
      "name": "绑架",
      "en": "Into Thin Air",
      "location": "victors_hollow",
      "trigger": "与维克塔霍洛的稳重的父亲对话（女儿爱莉失踪）",
      "steps": ["进入不归之森，在最深处（西侧）接近爱莉触发Boss战", "击败食人花（及食人猛菌）", "对爱莉引导/诱惑，带回维克塔霍洛交给父亲"],
      "reward": "9000叶、招致死亡之剑（Deathly Blade，攻击时低概率即死）",
      "difficulty": "难"
    },
    {
      "name": "亚雷克，在那之后",
      "en": "Again with Alaic",
      "location": "victors_hollow",
      "trigger": "汉伊特第4章（及普里姆萝洁第4章）通关后，与维克塔霍洛的保镖亚雷克对话",
      "steps": ["对亚雷克引导/诱惑使其同行", "进入不归之森一直往西北走，与盗贼团头目对话并击败他"],
      "reward": "9000叶、古来弓·岚（Primeval Bow of Storms）",
      "difficulty": "中"
    },
    {
      "name": "破坏遗迹的盗掘者",
      "en": "Looting Grave Robber",
      "location": "duskbarrow",
      "trigger": "与达斯克瓦罗的老实的旅行商人对话",
      "steps": ["前往失落的遗迹找到盗掘者", "对其挑战/唆使并击败（强度7，弱点枪/斧/杖/火/雷）"],
      "reward": "4000叶、活力石榴（特大）",
      "difficulty": "中"
    },
    {
      "name": "无名野兽",
      "en": "A Cub with No Name",
      "location": "duskbarrow",
      "trigger": "与达斯克瓦罗的讨厌野兽的母亲对话",
      "steps": [
        "解法①：到希·沃尔基酒馆附近对野兽调查员打听/探查「养虎的方法」，回来告诉母亲",
        "解法②：到断崖地区柏达弗尔旅馆前引导/诱惑驱使野兽的商人，带回来对话"
      ],
      "reward": "7000叶、野兽围巾",
      "difficulty": "易"
    },
    {
      "name": "魔物操控人的末裔阿什兰（3）",
      "en": "Ashlan the Beastmaster (III)",
      "location": "duskbarrow",
      "trigger": "完成（2）后，在达斯克瓦罗与阿什兰对话",
      "steps": ["对阿什兰引导/诱惑使其同行", "前往失落的遗迹深处与被操控的父亲对话"],
      "reward": "11000叶、魔物操控人的帽子、轻身坚果（特大）",
      "difficulty": "易"
    },
    {
      "name": "团长与阿尔法丝，在那之后",
      "en": "Alphas and the Impresario",
      "location": "west_swarkii_trail",
      "trigger": "全员第4章通关、完成「命中注定之人（2）」「寻找父亲的旅行者克里斯（2）」后，与西希·沃尔基森道的江湖艺人团长对话",
      "steps": ["击败团长附近的碧眼之虎（弱点剑/短剑/杖/冰/风）"],
      "reward": "10000叶；完成后可接「旅途的最后」",
      "difficulty": "易"
    },
    {
      "name": "旅途的最后",
      "en": "At Journey's End",
      "location": "west_swarkii_trail",
      "trigger": "完成「团长与阿尔法丝，在那之后」后再次与江湖艺人团长对话",
      "steps": ["前往高原地区荷鲁布尔古战场遗迹（仅能快速旅行）", "进入「终结之门」，连战各章Boss强化版与最终隐藏Boss", "进入后无法返回，务必练满8人（建议Lv60+）"],
      "reward": "100000叶、隔离缎带",
      "difficulty": "难"
    }
  ],

  "items": [
    { "name": "石弓", "en": "Stone Bow", "type": "武器", "location": "swarkii", "how": "希·沃尔基紫色宝箱，需盗贼开锁", "effect": "序盘弓" },
    { "name": "青铜背心", "en": "Bronze Vest", "type": "防具", "location": "whisperwood", "how": "耳语之森存档点正东山丘顶的红色宝箱" },
    { "name": "战枪", "en": "War Lance", "type": "武器", "location": "path_of_beasts", "how": "兽道紫色宝箱，需盗贼", "effect": "物攻+71、会心+41，序盘最强枪之一" },
    { "name": "奥术弓", "en": "Arcane Bow", "type": "武器", "location": "swarkii", "how": "对希·沃尔基村长偷窃/购买（约2,520叶）" },
    { "name": "隼之装束", "en": "Falcon Garb", "type": "防具", "location": "swarkii", "how": "对狩猎者打听/探查后杂货店追加，8,160叶", "effect": "回避+82" },
    { "name": "维克塔之枪", "en": "Victor's Spear", "type": "武器", "location": "victors_hollow_arena", "how": "斗技场前观众偷窃/购买（约39,900叶）；或打听城镇入口町人后武具店以42,000叶购买", "effect": "第2章阶段强力长枪" },
    { "name": "古斯塔夫之盾", "en": "Gustav's Shield", "type": "防具", "location": "victors_hollow_arena", "how": "决赛前对古斯塔夫偷窃/购买（约19,200叶），或击败古斯塔夫掉落" },
    { "name": "异国装束", "en": "Exotic Garb", "type": "防具", "location": "victors_hollow", "how": "欧贝利克第2章挑战傲慢的强者8%掉落，打倒后消失，限定一次", "effect": "物防+102、属防+121，每回合恢复SP" },
    { "name": "宏伟铠甲", "en": "Grand Armor", "type": "防具", "location": "victors_hollow", "how": "欧贝利克第2章挑战不逊的强者8%掉落" },
    { "name": "大圣火之袍", "en": "Robe of the Flame", "type": "防具", "location": "victors_hollow", "how": "对维克塔霍洛的商人偷窃/购买（约47,880叶）" },
    { "name": "神圣之刃", "en": "Divine Blade", "type": "武器", "location": "victors_hollow_arena", "how": "对艾斯塔达斯偷窃/购买（约28,500叶）" },
    { "name": "帝国长枪", "en": "Imperial Lance", "type": "武器", "location": "victors_hollow_arena", "how": "对蒙德尔偷窃/购买（约32,300叶）" },
    { "name": "历战之斧", "en": "Battle-tested Axe", "type": "武器", "location": "victors_hollow_arena", "how": "欧贝利克第4章后对剑斗士内德偷窃/购买（约87,600叶）", "effect": "历战系列终盘斧" },
    { "name": "暗之护符", "en": "Shadow Amulet", "type": "饰品", "location": "victors_hollow_arena", "how": "斗技场内大门右侧等候室的紫色宝箱，需盗贼" },
    { "name": "雷之护符", "en": "Thunder Amulet", "type": "饰品", "location": "victors_hollow_arena", "how": "斗技场前隐藏道具（打听老人）" },
    { "name": "大锤", "en": "Sledgehammer", "type": "武器", "location": "forgotten_grotto", "how": "被遗忘的洞窟紫色宝箱" },
    { "name": "即死耐性石", "en": "Vivifying Stone", "type": "饰品", "location": "forgotten_grotto", "how": "被遗忘的洞窟宝箱；不归之森、古代遗迹、失落的遗迹亦各有一个", "effect": "防止即死" },
    { "name": "元素长柄", "en": "Elemental Glaive", "type": "武器", "location": "forest_of_no_return", "how": "不归之森紫色宝箱" },
    { "name": "招致死亡之剑", "en": "Deathly Blade", "type": "武器", "location": "victors_hollow", "how": "支线「绑架」奖励（需击败食人花）", "effect": "物攻+219、命中+98，攻击低概率即死" },
    { "name": "古来弓·岚", "en": "Primeval Bow of Storms", "type": "武器", "location": "victors_hollow", "how": "支线「亚雷克，在那之后」奖励", "effect": "物攻+241、属攻+342，风属性伤害提升" },
    { "name": "百万短剑", "en": "Legion Dagger", "type": "武器", "location": "victors_hollow", "how": "汉伊特第4章后对保镖亚雷克偷窃/购买（约44,000叶）" },
    { "name": "大蛇短剑", "en": "Viper Dagger", "type": "武器", "location": "duskbarrow", "how": "对达斯克瓦罗村人偷窃/购买（约61,750叶）；支线期间不归之森的盗贼团头目也持有" },
    { "name": "进化弓·鹰", "en": "Improved Bow of the Eagle", "type": "武器", "location": "duskbarrow", "how": "达斯克瓦罗隐藏道具，对村人打听/探查（情报Lv45）" },
    { "name": "符文弓", "en": "Rune Bow", "type": "武器", "location": "ruins_of_eld", "how": "古代遗迹隐藏通路紫色宝箱" },
    { "name": "骑士之盾", "en": "Knight's Shield", "type": "防具", "location": "ruins_of_eld", "how": "古代遗迹后半段的红色宝箱，Boss前最后一个" },
    { "name": "睡神之冠", "en": "Hypnos Crown", "type": "防具", "location": "moldering_ruins", "how": "失落的遗迹紫色宝箱" },
    { "name": "闪电之护符", "en": "Thunderstorm Amulet", "type": "饰品", "location": "moldering_ruins", "how": "失落的遗迹红色宝箱（第七个火把上楼后向右）" },
    { "name": "巫师法杖", "en": "Wizard's Staff", "type": "武器", "location": "shrine_archmagus", "how": "魔大公的祠堂紫色宝箱" },
    { "name": "历战之弓", "en": "Battle-tested Bow", "type": "武器", "location": "swarkii", "how": "汉伊特第4章后向赞塔购买（约84,000叶，不可偷）；或唆使击败讲述传说的老人极低概率掉落", "effect": "历战系列终盘弓" },
    { "name": "告解铠甲", "en": "Confessional Armor", "type": "防具", "location": "swarkii", "how": "欧贝利克第4章后对猛兽猎人伯纳德偷窃/购买（约38,400叶）" },
    { "name": "魔物操控人的帽子", "en": "Monster Trainer's Hat", "type": "防具", "location": "duskbarrow", "how": "支线「魔物操控人的末裔阿什兰（3）」奖励" },
    { "name": "野兽围巾", "en": "Beastly Scarf", "type": "饰品", "location": "duskbarrow", "how": "支线「无名野兽」奖励" },
    { "name": "猎人（副职业）", "en": "Hunter License", "type": "职业证", "location": "shrine_huntress", "how": "调查狩猎女王祠堂的石碑" },
    { "name": "魔术师（隐藏职业）", "en": "Sorcerer License", "type": "职业证", "location": "shrine_archmagus", "how": "在魔大公祠堂击败魔大公德雷桑格" }
  ],

  "jobs": [
    { "name": "猎人", "en": "Hunter", "location": "shrine_huntress", "how": "前往东维克塔霍洛森道的狩猎女王祠堂，调查石碑即可获得（无战斗）" },
    { "name": "魔术师", "en": "Sorcerer", "location": "shrine_archmagus", "how": "在魔大公祠堂调查祭坛接受试炼，击败魔大公德雷桑格（HP约17万，建议Lv60+并先取得占星师）" }
  ],

  "tips": [
    "汉伊特的「捕获」可在本区收服森林狐（致盲）、大牙野猪等魔物用于唆使。",
    "斗技场前是全游戏最集中的强力装备偷窃/购买点：第2章就能拿维克塔之枪，后期有神圣之刃、帝国长枪、历战之斧。",
    "不归之森的食人花与魔大公德雷桑格都是终盘难度，建议取得符文大师、占星师后再挑战。",
    "达斯克瓦罗的村人身上的大蛇短剑、维克塔霍洛商人的大圣火之袍都是后期高价值目标，有提里昂可在高等级时偷窃省钱。",
    "以汉伊特为初始主角时，北希·沃尔基森道会出现克里斯（真结局线前置之一）。",
    "支线「学者拉塞尔，在那之后」（高原地区委托）需来达斯克瓦罗对伍多兰多的知识人打听「伍多兰多的历史」。"
  ],

  "roads": [
    ["swarkii", "path_to_whisperwood"],
    ["path_to_whisperwood", "whisperwood"],
    ["swarkii", "north_swarkii_trail"],
    ["north_swarkii_trail", "west_swarkii_trail"],
    ["west_swarkii_trail", "path_of_beasts"],
    ["west_swarkii_trail", "east_victors_hollow_trail"],
    ["east_victors_hollow_trail", "shrine_huntress"],
    ["east_victors_hollow_trail", "victors_hollow"],
    ["victors_hollow", "victors_hollow_arena"],
    ["victors_hollow_arena", "forest_of_no_return"],
    ["victors_hollow", "path_to_forgotten_grotto"],
    ["path_to_forgotten_grotto", "forgotten_grotto"],
    ["east_victors_hollow_trail", "east_duskbarrow_trail"],
    ["east_duskbarrow_trail", "duskbarrow"],
    ["duskbarrow", "ruins_of_eld"],
    ["east_duskbarrow_trail", "moldering_ruins"],
    ["east_duskbarrow_trail", "shrine_archmagus"]
  ],

  "links": [
    { "from": "north_swarkii_trail", "region": "frostlands", "to": "w_flamesgrace_wilds" },
    { "from": "east_victors_hollow_trail", "region": "frostlands", "to": "w_stillsnow_wilds" },
    { "from": "west_swarkii_trail", "region": "cliftlands", "to": "north_bolderfall_pass" }
  ]
});

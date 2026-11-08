OT2.addRegion({
  "id": "harborlands",
  "name": "港湾之地",
  "en": "Harborlands",
  "continent": "west",
  "levelRange": "1-52",
  "starter": "卡丝蒂（药师）",
  "intro": "港湾之地位于西大陆东侧海岸，东临分隔之海，北接荒野之地、西接叶之地、南接日之野，是药师卡丝蒂的出身地。北部港町卡纳尔布莱恩是西大陆的海上门户，可乘渡船往返托托哈哈岛；南部的康宁湾是奥斯瓦尔德的故乡，也设有药师公会。近海的洛克岛需自有船只才能抵达，是帕尔提提欧最终章的舞台。",
  "highlights": [
    "康宁湾药师公会：获得药师职业证（第2、3张需上交稀有素材）",
    "北康宁湾海道尽头的灵药公祭坛：卡丝蒂习得EX技能「Drastic Measures」",
    "卡纳尔布莱恩大桥北侧废灯塔顶的宝箱可拿到前期强力武器银剑（物攻+59、速度+13）",
    "康宁湾港口海滩宝箱「彩虹玻璃瓶」与洛克岛工人身上的「远古齿轮」是发明家道具素材",
    "拥有船只后击败海湾入口的身经百战之鲨，进入Lv52的恶食之巢挑战Tyrannodrake，获取古族之弓等终盘装备",
    "篡夺者潜窟（Lv15左右）可在前期拿到生命圣杯、风化的宝盾、雷之锤等，适合新手提早挖宝"
  ],
  "locations": [
    {
      "id": "canalbrine",
      "name": "卡纳尔布莱恩",
      "en": "Canalbrine",
      "type": "town",
      "pos": [62, 22],
      "level": "",
      "desc": "西大陆东岸的水路港町，卡丝蒂旅程起点，有渡船往返托托哈哈岛，买船后可从此出海。",
      "story": ["卡丝蒂 第1章", "泰米诺斯 第2章"],
      "boss": [],
      "treasures": [
        { "item": "抗性坚果（Resistant Nut）", "how": "从道具店旁码头划独木舟南下，西侧独立小屋旁的宝箱" },
        { "item": "沉睡草（Slumber Sage）", "how": "东北教堂右侧小办公室内（需开始泰米诺斯第2章或之后才能进入教堂）" },
        { "item": "伐木大斧（Woodcutter's Great Axe）", "how": "划船至北侧灯塔，让门口的灯塔守（Town Lighthouse Keeper）昏睡/击倒（卡丝蒂夜晚用沉睡草安抚即可），登顶开箱" }
      ],
      "npcs": [
        { "name": "旅店老板娘（Innkeeper）", "item": "生命橄榄(M)、光之百合；情报：旅店折扣", "method": "偷窃/探查", "note": "白天，旅店门外" },
        { "name": "道具店女性（Woman）", "item": "羽毛帽、冰之护符；情报：店外可划船拿到的隐藏沉睡草", "method": "偷窃/探听", "note": "白天，道具店内" },
        { "name": "年轻旅人（Young Traveler）", "item": "勿忘草、风之精灵石(M)、旅人之弓", "method": "偷窃/购买", "note": "白天，旅店南侧；支线「旅人的失物」委托人" },
        { "name": "塞斯克（Sesque）", "item": "手斧、治愈葡萄串", "method": "偷窃", "note": "卡丝蒂剧情NPC，存档点对面" },
        { "name": "担忧的老人 / 商人（东桥头）", "item": "纪念鱼叉（Memorial Harpoon，附带降速效果的枪）、清醒草、喧哗草等", "method": "偷窃/购买", "note": "白天，城镇中央桥东侧" },
        { "name": "贸易商与商人（船旁）", "item": "火/雷之精灵石、冰之精灵石(L)、银框单片眼镜、沉甸甸的钱袋；探查贸易商可让武器店「新装备上架」", "method": "偷窃/探查", "note": "白天，西南船只附近" },
        { "name": "可疑的小贩（Suspicious Peddler）", "item": "龙之壶（Dragon Vase，日之野支线「库之宝物」所需）、稀有石、鲜艳宝石", "method": "偷窃/购买", "note": "船旁，全天" },
        { "name": "前U国木匠（Former U Carpenter）", "item": "奥罗奇要塞设计图（Fort Orochi Plans，赛伊支线「亡国的设计图」所需）", "method": "偷窃/购买", "note": "酒馆一楼，强度约6" },
        { "name": "小提琴手（Violinist）", "item": "可被带去冬之地凛芬镇", "method": "引导/雇佣", "note": "白天酒馆；帕尔提提欧「商机：凛芬镇篇」所需乐手之一" },
        { "name": "富家少年的父亲", "item": "雷之精灵石(M)、手帕、银框单片眼镜", "method": "偷窃/引导", "note": "教堂内左侧；明之地支线「富家少年」需把他带回新德尔斯塔" },
        { "name": "教堂主祭神官（Cleric）", "item": "青金石杖（Lapis Rod）；情报：引导更容易（Guide with Ease）", "method": "偷窃/探查/挑战", "note": "白天教堂讲台，强度10；光挑战胜利可习得「神圣守护（Divine Protection）」" },
        { "name": "城镇灯塔守", "item": "治愈葡萄(M)、振奋梅子(M)", "method": "偷窃", "note": "北侧灯塔前；支线「灯塔修复」委托人" },
        { "name": "作家（Author）", "item": "觉醒草、睡眠粉末瓶；情报：探听更容易", "method": "偷窃/探查", "note": "夜晚，旅店南侧" },
        { "name": "醉酒渔夫（Fisherman）", "item": "长枪、活力石榴(M)；情报：酒馆北侧马车上的隐藏暗之蒲公英", "method": "偷窃/探听", "note": "夜晚，酒馆楼梯下" },
        { "name": "酒馆二楼镇民", "item": "小圆盾、清净叶；情报：旅店东侧木桶上的隐藏铁斧", "method": "偷窃/收买", "note": "夜晚，酒馆二楼" },
        { "name": "赫尔墨斯（Hermes）", "item": "魅惑香水、人鱼头冠（Mermaid Circlet）", "method": "偷窃/诱惑", "note": "完成明之地支线「莱拉的下一章」（需通关阿格妮娅剧情）后出现在酒馆" }
      ],
      "shops": [
        "武器防具店（北侧，门口在水边需划船）：阔剑7000、旅人之弓7000、光之魔杖8000、钉头锤8000、水手背心3900、旅人披风3100等",
        "武器店「新装备上架」后可买大师鱼叉（Master Harpoon，物攻+103/命中+31）20000叶",
        "暴击耳环（Critical Earring）280叶：发明家「暴击瞄准镜」素材之一",
        "道具店（西北）：卡丝蒂调合用的各种叶类素材"
      ],
      "tips": "城镇被水道切分，很多宝箱和NPC需要从码头乘独木舟抵达。东侧码头有前往托托哈哈岛兽人海滩停泊所的渡船；购买船只后船会停在这里。完成「等待日与夜」后酒馆前会出现一对双胞胎。"
    },
    {
      "id": "sacred_guard_ship",
      "name": "圣堂机关之船",
      "en": "Sacred Guard Ship",
      "type": "dungeon",
      "pos": [76, 12],
      "level": "14",
      "desc": "泰米诺斯第2章中追捕凶手时登上的圣堂机关船只，仅在剧情中可进入。",
      "story": ["泰米诺斯 第2章"],
      "boss": [
        { "name": "建筑师瓦多斯", "en": "Vados the Architect", "level": "14", "weakness": ["枪", "短剑", "冰", "光"], "tips": "6盾。会召唤黑/红小精灵（黑：斧杖雷光；红：剑弓冰雷），并牺牲精灵对单体造成高伤害。多次破防后封住枪与光弱点，只能用短剑/冰破盾，并蓄力「For my Lord」召唤大型元素——务必在蓄力回合破防。泰米诺斯主奶，配学者元素连击与短剑/枪角色。" }
      ],
      "treasures": [
        { "item": "5600叶", "how": "攀上主桅顶部" },
        { "item": "振奋梅子(M)", "how": "沿船侧梯子下去" },
        { "item": "钉头锤（Mace）", "how": "最靠近入口梯子的下层门内" },
        { "item": "暗之护符（Dark Amulet）", "how": "左侧门进入餐厅兼船舱，西北角双层床之间" },
        { "item": "底力荔枝(M)", "how": "船尾最后方" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人多为火/风系哨兵与精灵，带冰、雷属性攻击效率高。Boss前有存档点。"
    },
    {
      "id": "path_to_water_source",
      "name": "通往卡纳尔布莱恩水源之路",
      "en": "Canalbrine: Path to the Water Source",
      "type": "field",
      "pos": [60, 36],
      "level": "1-5",
      "desc": "卡纳尔布莱恩南出口的短野外，卡丝蒂第1章通往水源的道路。",
      "story": ["卡丝蒂 第1章"],
      "boss": [],
      "treasures": [
        { "item": "暗之蒲公英", "how": "入口岔路右转" },
        { "item": "强力戒指（Empowering Ring）", "how": "主路向西再向南上坡时贴着右侧走，隐藏小路" },
        { "item": "梅子叶", "how": "南侧岔路右转" },
        { "item": "葡萄叶", "how": "西侧梯子南边的小路" },
        { "item": "卫兵头盔（Guard's Helm）", "how": "登上城墙后往北" },
        { "item": "治愈草", "how": "城墙南边存档点处乘船向西" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人以海蜥蜴人、飞鱼为主，弱斧/冰。卡丝蒂单人时用斧和调合即可。"
    },
    {
      "id": "water_source",
      "name": "卡纳尔布莱恩水源",
      "en": "Canalbrine: Water Source",
      "type": "dungeon",
      "pos": [68, 44],
      "level": "5",
      "desc": "水源被不明之物打开的洞窟，卡丝蒂第1章的最终迷宫。",
      "story": ["卡丝蒂 第1章"],
      "boss": [
        { "name": "维隆与多隆", "en": "Veron and Doron", "level": "5", "weakness": ["斧", "风", "暗", "冰"], "tips": "维隆4盾（弱斧/风/暗），多隆2盾（弱冰/暗）。先集中打盾少的多隆；剩一只时它会「吞食」同伴回血并大幅强化8回合，并蓄力「腐烂之臂」——此时卡丝蒂的潜力「每一滴都算数」可无消耗调合，用斧破防阻止蓄力，用调合解毒回血。" }
      ],
      "treasures": [
        { "item": "扩散血清（Diffusing Serum）", "how": "主路向北转弯处继续向东的隐藏通道" },
        { "item": "清净叶", "how": "火把小桥西端旁的小路" },
        { "item": "旧铠甲（Old Armor）", "how": "小贩与存档点旁码头乘船向西北" },
        { "item": "治愈草", "how": "存档点东侧" }
      ],
      "npcs": [
        { "name": "行商（Peddler）", "item": "回复道具", "method": "购买", "note": "Boss前存档点旁" }
      ],
      "shops": ["Boss前小贩可补给"],
      "tips": "敌人为藤壶系，弱斧/光/暗。"
    },
    {
      "id": "western_canalbrine_coast",
      "name": "西卡纳尔布莱恩海道",
      "en": "Western Canalbrine Coast",
      "type": "field",
      "pos": [44, 20],
      "level": "5/8/11",
      "desc": "卡纳尔布莱恩以西的初期道路，向西通往卡纳尔布莱恩大桥。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄(M)", "how": "出城后不远的路左侧" },
        { "item": "安宁草（Herb of Serenity）", "how": "第一个岔路北行，穿过小洞窟到码头，向北划到小岛" },
        { "item": "旅人之弓（Traveler's Bow）", "how": "上一小岛再往东、往南的第二座小岛" },
        { "item": "振奋梅子(M)", "how": "岔路楼梯上方再左侧下台阶" },
        { "item": "1500叶", "how": "西端岔路向南" },
        { "item": "黏着花（Sticky Flower）", "how": "西端岔路向北，往大桥方向右侧" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "以卡丝蒂开局时，完成第1章后夜晚会在此遇到支线「旅人的行囊」。敌人弱冰/雷居多，适合前期练级。"
    },
    {
      "id": "canalbrine_bridge",
      "name": "卡纳尔布莱恩大桥",
      "en": "Canalbrine Bridge",
      "type": "field",
      "pos": [24, 26],
      "level": "5/8/11",
      "desc": "跨海大桥，西接日之野北龙沙道，南接北康宁湾海道，北侧海上有篡夺者潜窟。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "银剑（Silver Sword，物攻+59/速度+13）", "how": "大桥北侧小岛上的废灯塔顶部（从桥西下到桥底码头划船过去）" },
        { "item": "焕活果酱（Refreshing Jam）", "how": "大桥南侧小岛" },
        { "item": "长枪（Lance）", "how": "从北龙沙道一侧下水向右划到平台" },
        { "item": "清净叶", "how": "大桥右端" },
        { "item": "冰之精灵石", "how": "桥左侧梯子下去" },
        { "item": "治愈葡萄串", "how": "桥下水域（具体位置以实机为准）" }
      ],
      "npcs": [
        { "name": "新手造桥工（Novice Bridge Builder）", "item": "战斧（War Axe）", "method": "偷窃/购买", "note": "全天，桥上面向塔的位置，强度2" },
        { "name": "造桥工（西侧）", "item": "必中戒指（Unerring Ring）、卫兵军刀", "method": "偷窃/购买", "note": "白天，强度7" },
        { "name": "工头（Chief）", "item": "可教光学技能「Lightning Falls」", "method": "挑战", "note": "白天桥上/夜晚水边，强度5" }
      ],
      "shops": [],
      "tips": "银剑是前期最强剑之一，第一次路过时务必绕去拿。篡夺者潜窟入口在桥北侧小岛的半截塔内，需从桥西端下桥乘独木舟穿过桥墩缺口。"
    },
    {
      "id": "lair_of_the_usurper",
      "name": "篡夺者潜窟",
      "en": "Lair of the Usurper",
      "type": "dungeon",
      "pos": [24, 12],
      "level": "15-16",
      "desc": "大桥北侧孤岛半截塔下的可选小迷宫，宝物丰富，适合前期挑战。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "睡眠粉末瓶", "how": "存档点上方平台，从存档点东侧右边小路绕上" },
        { "item": "雷之锤（Thunder Mace）", "how": "存档点后第二段楼梯下，火把左侧隐藏西向通道尽头" },
        { "item": "生命橄榄(M)", "how": "下一个火把处容易忽略的西侧楼梯下" },
        { "item": "生命圣杯（Grail of Life）", "how": "东侧空地往东南，三连宝箱之一" },
        { "item": "6500叶", "how": "同上三连宝箱" },
        { "item": "风化的宝盾（Weathered Treasure Shield）", "how": "同上三连宝箱" },
        { "item": "底力荔枝(L)", "how": "空地东北码头向西北划过第二个码头" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "无Boss。敌人弱冰/火/斧居多，偶尔出现海洋章鱼旅人（经验多）。"
    },
    {
      "id": "northern_conning_creek_coast",
      "name": "北康宁湾海道",
      "en": "Northern Conning Creek Coast",
      "type": "field",
      "pos": [26, 48],
      "level": "14（随进度22/28/34）",
      "desc": "连接大桥与西康宁湾海道的海岸道路，东南沙洲尽头是灵药公祭坛。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "活力石榴", "how": "西北角水池中的宝箱" },
        { "item": "风之精灵石(M)", "how": "通往祭坛的沙洲路上分出的东侧小岛" },
        { "item": "断盔斧（Helmcleaver）", "how": "上述小岛南面另一条连接祭坛路的小支路" },
        { "item": "成对三叉戟（Matching Trident）", "how": "西侧沙洲上挡路的等待中的女人（Waiting Woman）后方，需击倒她" }
      ],
      "npcs": [
        { "name": "等待中的女人（Waiting Woman）", "item": "成对三叉戟、稀有石、鲜艳宝石", "method": "偷窃/突袭", "note": "挡住西侧小路，击倒后可开宝箱" }
      ],
      "shops": [],
      "tips": "夜晚会出现大型陆行鸟等较强敌人。"
    },
    {
      "id": "altar_of_the_charitable",
      "name": "灵药公祭坛",
      "en": "Altar of the Charitable",
      "type": "shrine",
      "pos": [44, 56],
      "level": "",
      "desc": "药师守护神的祭坛，位于北康宁湾海道东侧伸向海中的长沙洲尽头。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "带卡丝蒂前来即可习得EX技能「Drastic Measures」：单体斧攻击，对带有减益/异常状态的敌人伤害大增（会解除这些状态），与「有害调合」配合极佳。"
    },
    {
      "id": "western_conning_creek_coast",
      "name": "西康宁湾海道",
      "en": "Western Conning Creek Coast",
      "type": "field",
      "pos": [22, 72],
      "level": "14（随进度22/28/34）",
      "desc": "康宁湾西侧的丘陵海道，西南出口通往日之野东赛伊沙路，有葡萄园。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "沉睡叶（Slumber Leaf）", "how": "康宁湾入口西侧葡萄园最下一排的右端" },
        { "item": "活力石榴", "how": "东赛伊沙路出口附近" },
        { "item": "底力荔枝", "how": "东北上方海滩" },
        { "item": "必中手镯（Unerring Bracelet）", "how": "东北下方海滩码头向东划到小岛" }
      ],
      "npcs": [
        { "name": "葡萄农（Grape Farmer）", "item": "葡萄叶、轻钱袋；光可学「Slash」", "method": "偷窃/挑战", "note": "葡萄园阶梯下；支线「葡萄培育法」委托人" },
        { "name": "商人（Merchant）", "item": "葡萄叶、石榴叶、奇想叶；光可学「Split Open」", "method": "偷窃/挑战", "note": "康宁湾入口西侧房屋旁" }
      ],
      "shops": [],
      "tips": "北部出口南侧海滩左边有隐藏通路，可通往Lv45的月与太阳洞窟。敌人多为水系，雷属性好用。"
    },
    {
      "id": "cavern_of_the_moon_and_sun",
      "name": "月与太阳洞窟",
      "en": "Cavern of the Moon and Sun",
      "type": "dungeon",
      "pos": [34, 64],
      "level": "45",
      "desc": "西康宁湾海道北端海滩隐藏入口的洞窟，泰米诺斯与索洛奈交汇篇第2部的舞台。",
      "story": ["交汇篇：神官与盗贼 第2部"],
      "boss": [],
      "treasures": [
        { "item": "2400叶", "how": "入口北上，沿蜡烛路右转" },
        { "item": "强力腰带（Mighty Belt）", "how": "回到路口向北进入黑暗区，左侧两段楼梯中较隐蔽的南向楼梯下" },
        { "item": "光之精灵石(L)", "how": "西向楼梯向北途中左侧小支路" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "等级45，出现冰之残影、胖凯特（Chubby Cait，经验极多）等。剧情中需在最深处用昼夜切换让蓝色光点出现。"
    },
    {
      "id": "conning_creek",
      "name": "康宁湾",
      "en": "Conning Creek",
      "type": "town",
      "pos": [46, 78],
      "level": "",
      "desc": "热爱章鱼的海边小镇，奥斯瓦尔德故乡，设有药师公会；地图分为城镇、港口（Harbor）与郊外（Outskirts）三部分。",
      "story": ["奥修特 第2章（卡塔拉克塔路线）", "奥斯瓦尔德 第3章", "交汇篇：神官与盗贼 第2部"],
      "boss": [
        { "name": "阿尔皮翁", "en": "Alpione", "level": "15", "weakness": [], "tips": "奥修特第2章中白天在港口海滩挑衅她进行1对1战斗，用奥修特的伙伴打弱点即可，胜利得活力坚果(M)。" },
        { "name": "克拉丽莎夫人", "en": "Lady Clarissa", "level": "18", "weakness": ["枪", "短剑", "雷"], "tips": "奥斯瓦尔德第3章，在郊外烧毁的旧居后方洞窟（书房）中触发。5盾，使用光魔法，部分会附加混乱。单人时用雷击或元素连击+潜力破防，满员则很轻松。掉落抗性坚果(M)，不可偷。" }
      ],
      "treasures": [
        { "item": "混乱粉末瓶", "how": "通往卫兵队基地楼梯右侧民居内" },
        { "item": "守护纹章（Blazon of Protection）", "how": "击倒杂货店旁的卫兵，绕到杂货店后方左侧小平台" },
        { "item": "振奋梅子(M)", "how": "郊外墓地右侧" },
        { "item": "火之精灵石(M)", "how": "郊外东端奥斯瓦尔德烧毁旧居的后方" },
        { "item": "彩虹玻璃瓶（Rainbow Glass Bottle）", "how": "港口北侧海滩向西北走到尽头（发明家「属性炸弹瓶」素材）" }
      ],
      "npcs": [
        { "name": "渔夫（Fisherman）", "item": "章鱼罐（Octopuff Pot，提高章鱼旅人遭遇率）、水手背心；情报：杂货店前的隐藏战斗长柄", "method": "偷窃/探听", "note": "白天在通往港口的路旁" },
        { "name": "杂货店内卫兵", "item": "长剑、猎鹰短刀、士兵之弓；探查后杂货店「补货丰富」大幅扩充武器防具", "method": "偷窃/探查", "note": "白天" },
        { "name": "通往郊外路上的卫兵", "item": "钢铁长枪、卫兵铠甲、卫兵之盾；情报：旅店旁木桶间的隐藏暴击戒指", "method": "偷窃/探听", "note": "白天" },
        { "name": "镇民（女，夜晚）", "item": "发梳、鲜艳宝石；可教光学技能「Level Sweep」", "method": "挑战/偷窃", "note": "夜晚存档点东侧摊位，强度9，非常强" },
        { "name": "军官（Officer）", "item": "冠军服（Champion's Garb）、防护手镯；情报：引导更容易", "method": "偷窃/探查", "note": "夜晚酒馆左上桌" },
        { "name": "酒馆白天客人", "item": "暴击坚果(L)、章鱼碗、古钱币×2、金戒指", "method": "偷窃", "note": "白天酒馆" },
        { "name": "章鱼爱好者（Octopus Enthusiast）", "item": "可带往纹之地蒙特维斯完成支线「为钱做研究」", "method": "引导/雇佣", "note": "酒馆内" },
        { "name": "药师公会夜间药师×2", "item": "草药灵药×2、扩散血清、暗之蒲公英、恩典草芽（Herb-of-Grace Bud）、安宁草", "method": "偷窃", "note": "夜晚药师公会内" },
        { "name": "伴侣（Partner）", "item": "治愈葡萄、振奋梅子、活力石榴；情报：挑衅高手", "method": "偷窃/探查", "note": "旅店内" },
        { "name": "港口镇民", "item": "锐利坚果、光之坚果；情报：回城路上的隐藏坚韧坚果(M)", "method": "偷窃/探听", "note": "白天港口楼梯东侧摊位" },
        { "name": "克拉丽莎夫人 / 艾莲娜（Elena）", "item": "艾莲娜持有石英杖（Quartz Rod）", "method": "偷窃", "note": "通关奥斯瓦尔德剧情后住在酒馆左侧民居" },
        { "name": "波姆（Pom）", "item": "上等肉干、极上肉干、完美肉干", "method": "偷窃/购买", "note": "通关奥修特剧情后，夜晚酒馆" }
      ],
      "shops": [
        "无独立武器店；杂货店兼卖装备：卫兵军刀、卫兵大斧、卫兵巨弓、水手之弓、卫兵之盾、卫兵铠甲、暴击戒指等（部分需探查店内卫兵后上架）",
        "药师公会（旅店南侧民居）"
      ],
      "tips": "康宁湾不是停泊所，从托托哈哈岛来需先到卡纳尔布莱恩再经大桥南下。卫兵队基地入口在城镇中央，海神洞窟在港口外的小岛（需从港口码头划船）。"
    },
    {
      "id": "guard_outpost",
      "name": "卫兵队基地",
      "en": "Guard Outpost",
      "type": "dungeon",
      "pos": [56, 90],
      "level": "18",
      "desc": "康宁湾中央的卫兵队驻地，奥斯瓦尔德第3章追查哈维的迷宫。",
      "story": ["奥斯瓦尔德 第3章"],
      "boss": [
        { "name": "斯坦瓦队长", "en": "Captain Stenvar", "level": "18", "weakness": ["剑", "枪", "弓", "雷", "暗"], "tips": "本体5盾，弱点被两名部下（3盾，弱斧/弓/火/风）遮挡，击倒部下才会逐步暴露本体弱点。先清部下，一人专职治疗，可用雇佣「佣兵」加防。残血后召唤失败并「求饶」，之后会蓄力「定罪斩击」，留BP破防即可。掉落贪婪之斧（Axe of Avarice），可偷满银钱袋。" }
      ],
      "treasures": [
        { "item": "火之精灵石", "how": "进门壁炉右侧" },
        { "item": "卫兵铠甲（Guard's Armor）", "how": "二楼第二个房间，桌子与武器架旁" },
        { "item": "底力荔枝(M)", "how": "二楼一路往东到底的房间" },
        { "item": "卫兵帽（Guard's Hat）", "how": "北向走廊楼梯下方往北的小客厅壁炉前" },
        { "item": "7200叶", "how": "顶层存档点右侧墙壁隐藏通路，向南绕出" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "守护者系敌人会掉落/被偷「远古哨兵核心」，学者公会第2张职业证需要5个。"
    },
    {
      "id": "cavern_of_the_sea_god",
      "name": "海神洞窟",
      "en": "Cavern of the Sea God",
      "type": "dungeon",
      "pos": [60, 68],
      "level": "15",
      "desc": "康宁湾港口外小岛上的海蚀洞，奥修特在此寻找传说之兽卡塔拉克塔。",
      "story": ["奥修特 第2章（卡塔拉克塔路线）"],
      "boss": [],
      "treasures": [
        { "item": "底力荔枝(M)", "how": "存档点前右转的旁路" },
        { "item": "兔子盾（Rabbit Shield）", "how": "通往吊桥斜坡右侧北向隐藏通道尽头" },
        { "item": "治愈葡萄串", "how": "过桥后从火把路西侧绕石柱上到高台" },
        { "item": "6000叶", "how": "南下楼梯底部左侧" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "本章没有Boss战，最深处取得卵后奥修特获得新伙伴阿克塔（Acta），作为常驻挑衅指令。附近小岛有隐藏雷之精灵石（康宁湾夜晚民居女性的情报）。"
    },
    {
      "id": "curious_nest",
      "name": "恶食之巢",
      "en": "Curious Nest",
      "type": "secret",
      "pos": [56, 52],
      "level": "52",
      "desc": "卡纳尔布莱恩与康宁湾之间海湾北部的小岛迷宫，需自有船只并击败守湾鲨鱼才能进入。",
      "story": [],
      "boss": [
        { "name": "身经百战之鲨", "en": "Battle-Worn Shark", "level": "约34（分隔之海）", "weakness": ["枪", "短剑", "杖", "火"], "tips": "在海上封锁海湾入口。9盾，第二阶段弱点变为剑/短剑/斧/雷，会用恐惧、减速，并蓄力「Feast」全体重击回血。卡丝蒂调合可解恐惧，BP留到第二阶段。掉落古族之剑（Lost Tribe's Blade）。" },
        { "name": "暴君龙", "en": "Tyrannodrake", "level": "52", "weakness": ["剑", "枪", "短剑", "斧", "弓", "杖"], "tips": "10盾。被某种武器弱点击中后就会删掉该弱点，直到只剩一个——先用不打算主攻的武器把其他弱点「用掉」，留下己方最强的（如剑的攻击性斩击或弓的精准射击）再连打。半血后「突变」恢复6个弱点（含3个隐藏属性：风/光/暗，另有枪/短剑/斧）。蓄力「腐烂吐息」会降最大HP。也可用泰米诺斯潜力、舞娘「Ruinous Kick」、奥斯瓦尔德EX「One True Magic」无视弱点削盾。" }
      ],
      "treasures": [
        { "item": "安宁草", "how": "北向主路唯一的支路" },
        { "item": "腐朽龙之精华（Decaying Dragon's Essence）×2", "how": "顶层Boss房间，击败Tyrannodrake后开启" },
        { "item": "龙卷长柄（Tornado Glaive）", "how": "顶层Boss房间" },
        { "item": "古族之弓（Lost Tribe's Bow）", "how": "顶层Boss房间" },
        { "item": "凶猛之牙（Fang of Ferocity）", "how": "顶层Boss房间" },
        { "item": "机关护目镜（Gimmick Goggles）", "how": "击败鲨鱼后，海湾西侧海面宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "迷宫极短：一条北向路+一条支路，第二层有存档点。建议Lv55以上，带能打多种弱点的队伍。"
    },
    {
      "id": "roque_island_anchorage",
      "name": "洛克岛停泊所",
      "en": "Roque Island: Anchorage",
      "type": "port",
      "pos": [88, 72],
      "level": "45",
      "desc": "位于卡纳尔布莱恩以南海上的洛克岛登陆点，只能乘自有船只抵达。",
      "story": ["帕尔提提欧 第4章"],
      "boss": [],
      "treasures": [
        { "item": "22000叶", "how": "港口北侧岔路往东下到码头，向北划船" },
        { "item": "启迪项链（Enlightening Necklace）", "how": "继续向北再向西，第三个码头上岸" },
        { "item": "治愈葡萄串", "how": "停泊所区域内（具体位置以实机为准）" }
      ],
      "npcs": [
        { "name": "卫兵（Guard）", "item": "小麦面包、复苏果酱、生命橄榄", "method": "偷窃", "note": "白天存档点旁，夜晚进入办公室" },
        { "name": "职员（Employee）", "item": "旧布、扩散血清；情报：办公室后崖边的隐藏衰弱花", "method": "偷窃/探听", "note": "白天砖石路上" },
        { "name": "商人与老人", "item": "鲜艳宝石、活力坚果(M)、厚重之书、生命橄榄(M)", "method": "偷窃", "note": "白天进城前岔路" },
        { "name": "工厂女工（夜晚）", "item": "发梳、糖果；情报：抢夺高手（Masterful Muggings）", "method": "探查", "note": "夜晚同一岔路" }
      ],
      "shops": [],
      "tips": "敌人等级45，鲸鱼（Cetus Maximus）、蜥蜴王、死神蟹等，水面有噬船鲨。"
    },
    {
      "id": "roque_island",
      "name": "洛克岛",
      "en": "Roque Island",
      "type": "town",
      "pos": [90, 56],
      "level": "",
      "desc": "洛克公司所有的工业之岛，北端为公司总部（Headquarters），帕尔提提欧最终章舞台。",
      "story": ["帕尔提提欧 第4章"],
      "boss": [],
      "treasures": [
        { "item": "治愈草", "how": "西侧可俯瞰酒馆的阳台" },
        { "item": "活力石榴(L)", "how": "武器店与楼梯之间" },
        { "item": "魔力坚果(L)、复苏果酱×3、39800叶、底力荔枝(L)", "how": "西北被卫兵挡住的仓库内6个宝箱（需击倒卫兵，卫兵很强，建议突袭）" },
        { "item": "暴击手镯（Critical Bracelet）", "how": "总部大门外东侧" }
      ],
      "npcs": [
        { "name": "仓库卫兵（Guard）", "item": "重骨长枪（Heavy Bone Spear）、振奋梅子(M)", "method": "偷窃/突袭", "note": "白天存档点西侧，强敌" },
        { "name": "武器店商人", "item": "神盾之剑（Aegis Sword）、白金手斧、骑士头盔；情报：存档点南侧雕像上的隐藏强力项链", "method": "偷窃/购买/探查", "note": "白天武器店内" },
        { "name": "总部门卫（Guard）", "item": "末日破坏者（Doombreaker）、工人头盔", "method": "偷窃/购买", "note": "总部门前，全天" },
        { "name": "工厂女工（夜晚，酒馆旁民居内）", "item": "远古齿轮（Ancient Cog，发明家「Arkar's Coil」素材）、厚重之书、手作花束", "method": "偷窃/抢夺", "note": "夜晚，较强，抢夺需准备" },
        { "name": "酒馆夜间工人", "item": "稀有石、滋养坚果(M)、白金盾、废铁、齿轮、雷之精灵石(L)；探查工人可「新装备上架」", "method": "偷窃/探查", "note": "夜晚酒馆" },
        { "name": "夜间工人（道具店外）", "item": "混乱粉末瓶、冰之精灵石(M)、糖果；情报：廉价雇佣", "method": "偷窃/探查", "note": "夜晚" },
        { "name": "弗洛伊德（Floyd）", "item": "觉醒草、火之精灵石(L)、扩散血清", "method": "偷窃", "note": "通关帕尔提提欧剧情后白天在道具店" },
        { "name": "瑟斯顿（Thurston）", "item": "金怀表、失手粉末", "method": "偷窃", "note": "通关帕尔提提欧剧情后在城镇南部，支线委托人" },
        { "name": "音乐商人", "item": "乐曲「通常战斗I~III」「海上之战」", "method": "购买", "note": "解锁酒馆留声机后出现" }
      ],
      "shops": [
        "武器防具店：稀有金属长柄54000、重力长枪60000、大师巨弓55000、迅捷之盾18000、巨人之盾20500、机关护目镜13000、迅捷斗篷24000、暴击手镯6500（部分需新装备上架）",
        "旅店、酒馆、道具店齐全"
      ],
      "tips": "第4章开始后需从酒馆（西南）的暗门绕到总部侧街。洛克公司西栋/东栋迷宫可在通关后再次进入搜刮。"
    },
    {
      "id": "roque_company",
      "name": "洛克公司 西栋/东栋",
      "en": "The Roque Company: West Tower / East Tower",
      "type": "dungeon",
      "pos": [90, 40],
      "level": "45",
      "desc": "洛克公司总部的工厂与办公楼，帕尔提提欧第4章最终迷宫。",
      "story": ["帕尔提提欧 第4章"],
      "boss": [
        { "name": "蒸汽战车 黑曜号", "en": "Steam Tank Obsidian", "level": "45", "weakness": ["枪", "弓", "暗"], "tips": "本体40/30盾且弱点初始被掩盖，另有三个部件：炮台（4盾，弱剑/短剑/弓/冰/雷）、烟囱（5盾，弱枪/短剑/斧/火/雷）、前装甲板（6盾，弱剑/斧/杖/火/冰）。每破坏一个部件本体减10盾并暴露一个弱点。优先拆炮台（数回合蓄力后可秒杀单人），再拆烟囱（负责增益），最后装甲板。中盘会修复部件、遮蔽行动顺序、把角色撞出战斗；半血后只用「全速前进」一回合两次全体物理。准备物防增益、致盲和神官治疗；帕尔提提欧潜力的四连枪刺、猎人精准射击很好用。" }
      ],
      "treasures": [
        { "item": "振奋梅子篮", "how": "西栋：入口东侧楼梯下的杂物区门内" },
        { "item": "底力荔枝(L)", "how": "西栋：猫道一路东、南到交叉口后继续往南" },
        { "item": "火之精灵石(L)", "how": "西栋：交叉口东侧梯子下到厂房地面，熔炉旁" },
        { "item": "毒枪（Venom Lance）", "how": "西栋：油池楼梯后方码头，划过油池" },
        { "item": "24500叶", "how": "东栋：下楼后北侧第二间办公室" },
        { "item": "大块银矿（Large Silver Ore）", "how": "东栋：北侧第四间办公室" },
        { "item": "生命橄榄(L)", "how": "东栋：下楼前旁边向南的支路" },
        { "item": "陈年葡萄酒（Aged Wine）", "how": "东栋：下层偏西的办公室" },
        { "item": "机械弓（Mechanical Bow）", "how": "东栋：上述办公室外左侧墙壁隐藏楼梯通往的储藏室" },
        { "item": "焕活果酱", "how": "东栋：一楼右侧最后一间办公室" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "西栋入口有存档点；东栋一楼Boss前有存档点。剧情中途需要进行一次重大的「购买」，战后切换夜晚用帕尔提提欧的雇佣收尾。"
    }
  ],
  "story": [
    {
      "title": "卡丝蒂 第1章：失忆的药师",
      "character": "卡丝蒂",
      "location": "canalbrine",
      "level": "1-5",
      "summary": "失去记忆的卡丝蒂随船抵达卡纳尔布莱恩，凭药师装束被镇民认出。镇上居民接连病倒，她治愈病人后推断问题出在水源，前往城南水源调查并击败异变的猿猴。",
      "steps": [
        "船上：用「探听」询问头上有绿色气泡的船员，去下层查看药师背包",
        "抵达卡纳尔布莱恩后过桥触发剧情，夜晚用「安抚」+狼人退烧药治疗少年塞纳",
        "治疗三名病人：东北武器店附属屋内老人、东南船旁倒地的女孩、南部出口西侧民居中卧床的镇民",
        "顺路拿：西南小屋旁抗性坚果、灯塔顶伐木大斧（沉睡草让灯塔守睡着）；钱优先买防具",
        "经「通往水源之路」进入「水源」，在Boss前小贩处补给存档"
      ],
      "boss": "维隆与多隆（维隆弱斧/风/暗，多隆弱冰/暗）",
      "tips": "先打2盾的多隆；剩一只后它会吞食同伴强化并蓄力「腐烂之臂」。卡丝蒂潜力「每一滴都算数」可让调合不消耗素材，配合斧破防。"
    },
    {
      "title": "泰米诺斯 第2章：卡纳尔布莱恩的连环杀人",
      "character": "泰米诺斯",
      "location": "canalbrine",
      "level": "14",
      "summary": "泰米诺斯追查教皇之死来到卡纳尔布莱恩寻找神学者卢西安，却遭遇信奉邪神的蒙面凶手。与圣堂机关骑士克里克合作，推理出下一个目标在酒馆，最终登上圣堂机关之船与凶手对决。",
      "steps": [
        "前往东北教堂，询问绿色气泡的围观者",
        "与克里克会合，乘独木舟前往西侧孤立的卢西安宅，收集笔记、祈祷手册、祈祷顺序三条线索并推理",
        "去酒馆二楼观看舞者赫尔墨斯表演，夜晚对离舞台最近的男子「胁迫」揭穿真凶",
        "进入教堂并从东侧出口登上圣堂机关之船（顺手拿教堂小房间的沉睡草）"
      ],
      "boss": "建筑师瓦多斯（弱枪/短剑/冰/光）",
      "tips": "后期会封住枪/光弱点并蓄力召唤大型元素，留BP用短剑/冰破防。章节结束可选择第3章路线：裂谷城或风雹城。"
    },
    {
      "title": "奥修特 第2章：卡塔拉克塔路线",
      "character": "奥修特",
      "location": "conning_creek",
      "level": "15",
      "summary": "奥修特为寻找传说之兽卡塔拉克塔来到康宁湾，在港口听见异响，遇到守护者阿尔皮翁。了解真相后一同进入海神洞窟，最终获得新伙伴阿克塔。",
      "steps": [
        "从托托哈哈岛乘渡船到卡纳尔布莱恩，经大桥、西康宁湾海道抵达康宁湾（也可在酒馆「听故事」开启）",
        "沿城镇北路去港口，向东沿海滩前进发现离岸小岛",
        "白天对阿尔皮翁使用「挑衅」并获胜",
        "从港口东侧码头划船到小岛，进入海神洞窟到达最深处的卵"
      ],
      "boss": "阿尔皮翁（挑衅1对1）",
      "tips": "本章无正式Boss，难度低。获得的阿克塔是常驻挑衅指令，后期会成长。"
    },
    {
      "title": "奥斯瓦尔德 第3章：重返康宁湾",
      "character": "奥斯瓦尔德",
      "location": "conning_creek",
      "level": "18",
      "summary": "越狱的奥斯瓦尔德回到曾与妻女生活的康宁湾追查仇人哈维。他在烧毁的旧居后的书房遭遇昔日助手克拉丽莎，之后锁定卫兵队长斯坦瓦，杀入卫兵队基地逼问线索。",
      "steps": [
        "向东到郊外，查看奥斯瓦尔德烧毁的旧居，绕到屋后（顺手开火之精灵石(M)宝箱）进入右侧洞窟书房",
        "击败克拉丽莎夫人证明身份",
        "调查三名镇民：基地前的镇民、酒馆南侧市场的小贩、酒馆外的厨师长",
        "进入城镇中央的卫兵队基地，一路搜刮后在顶层挑战队长"
      ],
      "boss": "克拉丽莎夫人（弱枪/短剑/雷）→ 斯坦瓦队长（弱剑/枪/弓/雷/暗；部下弱斧/弓/火/风）",
      "tips": "斯坦瓦的弱点被部下遮挡，先清两名部下。章节结束得知下一个线索在纹之地蒙特维斯。"
    },
    {
      "title": "交汇篇：神官与盗贼 第2部",
      "character": "泰米诺斯、索洛奈",
      "location": "conning_creek",
      "level": "45",
      "summary": "两人在康宁湾得知第1部中遇到的少女阿尔帕特斯遇害。泰米诺斯与索洛奈潜入现场搜集线索，循着纸条找到月与太阳洞窟，取得镜子碎片。",
      "steps": [
        "前置：完成交汇篇第1部（弗拉姆教堂村）及两人各自的全部个人剧情；两人在队中到康宁湾酒馆开启",
        "前往港口，夜晚用索洛奈「突袭」击倒小屋门前的卫兵",
        "进屋后切换白天，对遗体「偷窃」得到折起的纸条",
        "到西康宁湾海道北端海滩左侧隐藏通路进入月与太阳洞窟，一路深入",
        "在最深处反复切换昼夜，直到平台出现蓝色光点，调查得到「模糊的镜子」"
      ],
      "boss": "无",
      "tips": "洞窟等级45，沿途宝箱有强力腰带与光之精灵石(L)。"
    },
    {
      "title": "帕尔提提欧 第4章（最终章）：洛克岛",
      "character": "帕尔提提欧",
      "location": "roque_island",
      "level": "45",
      "summary": "手握巨额支票的帕尔提提欧来到洛克岛，准备向父亲昔日的合伙人洛克收购蒸汽机权利。因缺少证件进不了总部，在书记官奥莉帮助下从酒馆暗门潜入，穿过西栋工厂与东栋办公楼，最终对决洛克的蒸汽战车。",
      "steps": [
        "前置：完成「商机：特洛甫霍普篇」获得船只，从任意停泊所出海前往洛克岛",
        "穿过停泊所进入城镇，北上总部触发剧情（也可在西南酒馆开启）",
        "跟随奥莉回到酒馆，经暗门进入总部侧街，进入左侧门（西栋）",
        "西栋：猫道—厂房—油池（划船拿毒枪），走出天桥进入东栋",
        "东栋：搜刮各办公室（隐藏楼梯有机械弓），一楼存档后出门触发长剧情，期间进行关键「购买」"
      ],
      "boss": "蒸汽战车 黑曜号（本体弱枪/弓/暗，需先拆炮台/烟囱/装甲板）",
      "tips": "战后切换夜晚用「雇佣」结束剧情，帕尔提提欧习得EX技能「Share SP」。"
    }
  ],
  "sidequests": [
    {
      "name": "等待日与夜",
      "en": "Waiting All Day and Night",
      "location": "canalbrine",
      "trigger": "卡纳尔布莱恩酒馆外桌旁的「等待的青年」（昼夜各是不同的人）",
      "steps": [
        "用引导或雇佣让其中一位青年同行",
        "切换时间段（白天↔夜晚）",
        "与座位上换成的另一位青年对话"
      ],
      "reward": "3000叶、魔力坚果、底力荔枝",
      "difficulty": "易"
    },
    {
      "name": "旅人的失物",
      "en": "Traveler's Lost and Found",
      "location": "canalbrine",
      "trigger": "白天旅店南侧桥边的年轻旅人",
      "steps": [
        "乘渡船前往托托哈哈岛兽人海滩停泊所",
        "白天找码头上的渡船工作人员（Ferry Staff），用偷窃/购买等方式取得「白色粉末瓶」",
        "交给年轻旅人"
      ],
      "reward": "4000叶、暴击坚果(M)",
      "difficulty": "易"
    },
    {
      "name": "灯塔修复",
      "en": "Lighthouse Restoration",
      "location": "canalbrine",
      "trigger": "划船到卡纳尔布莱恩北侧灯塔，与城镇灯塔守对话",
      "steps": [
        "需要自有船只（完成帕尔提提欧「商机：特洛甫霍普篇」）",
        "出海前往新德尔斯塔港停泊所以北的灯塔岛",
        "从岛上灯塔守处取得「艾尔莫莱特反射镜」（无法偷窃/抢夺，只能购买或恳求等方式）",
        "交给卡纳尔布莱恩的灯塔守"
      ],
      "reward": "12000叶、灯塔守的头巾、坚韧坚果(L)",
      "difficulty": "中"
    },
    {
      "name": "葡萄培育法",
      "en": "Goading the Grapes",
      "location": "western_conning_creek_coast",
      "trigger": "康宁湾西侧阶梯下葡萄园的葡萄农",
      "steps": [
        "前往叶之地库罗普提尔的酒馆，吧台旁的老葡萄专家",
        "用探查/探听等获得情报「种葡萄的诀窍」",
        "回葡萄园告诉葡萄农"
      ],
      "reward": "10000叶、滋养坚果(M)",
      "difficulty": "易"
    },
    {
      "name": "偷鱼贼",
      "en": "The Fish Filcher",
      "location": "conning_creek",
      "trigger": "白天在康宁湾港口海滩的渔夫头领（夜晚他在酒馆，但不能接任务）",
      "steps": [
        "切换到夜晚，在海滩等待约2分钟",
        "偷鱼贼出现在渔获旁后，用突袭/挑战/挑衅等方式击倒他"
      ],
      "reward": "6000叶、强化坚果(M)",
      "difficulty": "易"
    },
    {
      "name": "少女的心愿",
      "en": "A Young Girl's Wish",
      "location": "conning_creek",
      "trigger": "康宁湾郊外墓地中的冷漠少女，探查得知她的愿望清单",
      "steps": [
        "纹之地国境大瀑布的神官公会：探查左侧的神官小说家，得到「见习神官冒险记续集」情报",
        "明之地新德尔斯塔剧场前的可丽饼店老板：取得「豪华可丽饼」",
        "叶之地亭伯雷恩城镇广场喷泉右侧的花艺师罗兰：引导/雇佣带回康宁湾",
        "回到少女处，逐一交付（每样都要单独对话交付）"
      ],
      "reward": "15000叶、喜悦背心、复苏果酱",
      "difficulty": "中"
    },
    {
      "name": "克拉丽莎夫人的下一章",
      "en": "Lady Clarissa's Next Chapter",
      "location": "conning_creek",
      "trigger": "通关奥斯瓦尔德剧情后，郊外墓地中望着丈夫墓碑的克拉丽莎",
      "steps": [
        "用引导/雇佣让克拉丽莎同行",
        "带她前往托托哈哈岛的兽人村"
      ],
      "reward": "9000叶、用旧的长杆（Well-Worn Pole）",
      "difficulty": "易"
    },
    {
      "name": "弗洛伊德与瑟斯顿的下一章",
      "en": "Floyd and Thurston's Next Chapter",
      "location": "roque_island",
      "trigger": "通关帕尔提提欧剧情后，洛克岛城镇南部的瑟斯顿",
      "steps": [
        "找到埋头工作不睡觉的弗洛伊德（白天在道具店）",
        "用突袭/挑战/安抚（沉睡草）等方式让他昏倒"
      ],
      "reward": "12000叶、弗洛伊德的新式弓（Floyd's Neo Bow）",
      "difficulty": "易"
    },
    {
      "name": "旅人的行囊（卡丝蒂开局）",
      "en": "The Traveler's Bag",
      "location": "western_canalbrine_coast",
      "trigger": "以卡丝蒂为初始主角并完成第1章后，在西卡纳尔布莱恩海道遇到被偷行李的青年阿尔",
      "steps": [
        "夜晚在本道路上找到「阴沉的男人」并与之对话",
        "击败现出原形的盗贼（弱枪/短剑/斧/杖/光）",
        "把行李还给阿尔"
      ],
      "reward": "少量叶、滑溜坚果、治愈葡萄×3（后续连锁支线通往隐藏Boss）",
      "difficulty": "易"
    }
  ],
  "items": [
    { "name": "药师职业证", "en": "Apothecary License", "type": "职业证", "location": "conning_creek", "how": "与旅店南侧药师公会的会长对话即得第1张；第2张上交3个恩典草芽（Herb-of-Grace Bud，托托哈哈岛沉没遗迹的巨鳄掉落/可偷）；第3张上交3个原始角灵药（Primeval Horn Elixir，叶之地威洛斯宅邸的鹿类敌人掉落/可偷）", "effect": "非卡丝蒂角色可将药师设为副职业" },
    { "name": "银剑", "en": "Silver Sword", "type": "武器", "location": "canalbrine_bridge", "how": "大桥北侧小岛废灯塔顶宝箱", "effect": "物攻+59、速度+13，前期强力剑" },
    { "name": "伐木大斧", "en": "Woodcutter's Great Axe", "type": "武器", "location": "canalbrine", "how": "北侧灯塔顶宝箱，需先让灯塔守昏睡", "effect": "卡丝蒂开局即可入手的斧" },
    { "name": "纪念鱼叉", "en": "Memorial Harpoon", "type": "武器", "location": "canalbrine", "how": "偷窃/购买城镇中央桥东侧的NPC（老人与商人组合）", "effect": "枪，附带降低敌方速度的效果" },
    { "name": "大师鱼叉", "en": "Master Harpoon", "type": "武器", "location": "canalbrine", "how": "武器店「新装备上架」后购买，20000叶（托托哈哈岛特洛甫霍普的渔夫也持有）", "effect": "物攻+103、命中+31" },
    { "name": "暴击耳环", "en": "Critical Earring", "type": "饰品", "location": "canalbrine", "how": "北侧武器店购买，280叶", "effect": "发明家「暴击瞄准镜」所需素材之一" },
    { "name": "奥罗奇要塞设计图", "en": "Fort Orochi Plans", "type": "其他", "location": "canalbrine", "how": "偷窃/购买酒馆一楼的前U国木匠", "effect": "日之野赛伊支线「亡国的设计图」所需" },
    { "name": "龙之壶", "en": "Dragon Vase", "type": "其他", "location": "canalbrine", "how": "偷窃/购买船旁的可疑小贩", "effect": "日之野库支线「库之宝物」所需（需通关光的剧情）" },
    { "name": "雷之锤", "en": "Thunder Mace", "type": "武器", "location": "lair_of_the_usurper", "how": "篡夺者潜窟存档点后第二段楼梯下的隐藏西向通道" },
    { "name": "生命圣杯", "en": "Grail of Life", "type": "道具", "location": "lair_of_the_usurper", "how": "篡夺者潜窟东南三连宝箱之一" },
    { "name": "风化的宝盾", "en": "Weathered Treasure Shield", "type": "防具", "location": "lair_of_the_usurper", "how": "篡夺者潜窟东南三连宝箱之一" },
    { "name": "断盔斧", "en": "Helmcleaver", "type": "武器", "location": "northern_conning_creek_coast", "how": "通往灵药公祭坛沙洲路的南侧小支路宝箱" },
    { "name": "成对三叉戟", "en": "Matching Trident", "type": "武器", "location": "northern_conning_creek_coast", "how": "击倒西侧沙洲上的等待中的女人后开宝箱，或直接偷她身上的那把" },
    { "name": "必中手镯", "en": "Unerring Bracelet", "type": "饰品", "location": "western_conning_creek_coast", "how": "东北下方海滩码头划船到东侧小岛" },
    { "name": "章鱼罐", "en": "Octopuff Pot", "type": "饰品", "location": "conning_creek", "how": "偷窃/购买白天通往港口路旁的渔夫", "effect": "提高章鱼旅人（高经验敌人）遭遇率" },
    { "name": "守护纹章", "en": "Blazon of Protection", "type": "饰品", "location": "conning_creek", "how": "击倒杂货店旁卫兵后，绕到杂货店后方的宝箱" },
    { "name": "冠军服", "en": "Champion's Garb", "type": "防具", "location": "conning_creek", "how": "偷窃夜晚酒馆左上桌的军官" },
    { "name": "彩虹玻璃瓶", "en": "Rainbow Glass Bottle", "type": "其他", "location": "conning_creek", "how": "港口北侧海滩西北端宝箱", "effect": "发明家「属性炸弹瓶」素材" },
    { "name": "贪婪之斧", "en": "Axe of Avarice", "type": "武器", "location": "guard_outpost", "how": "击败斯坦瓦队长掉落" },
    { "name": "强力腰带", "en": "Mighty Belt", "type": "饰品", "location": "cavern_of_the_moon_and_sun", "how": "洞窟北侧黑暗区左边较隐蔽的南向楼梯下" },
    { "name": "毒枪", "en": "Venom Lance", "type": "武器", "location": "roque_company", "how": "西栋油池：从楼梯后码头划船过去" },
    { "name": "机械弓", "en": "Mechanical Bow", "type": "武器", "location": "roque_company", "how": "东栋下层偏西办公室外左墙隐藏楼梯后的储藏室" },
    { "name": "末日破坏者", "en": "Doombreaker", "type": "武器", "location": "roque_island", "how": "偷窃/购买洛克公司总部门前的卫兵" },
    { "name": "暴击手镯", "en": "Critical Bracelet", "type": "饰品", "location": "roque_island", "how": "总部大门外东侧宝箱；武器店也有售6500叶", "effect": "暴击+50" },
    { "name": "远古齿轮", "en": "Ancient Cog", "type": "其他", "location": "roque_island", "how": "夜晚偷窃/抢夺酒馆旁民居内的女工厂工人", "effect": "发明家「Arkar's Coil」素材" },
    { "name": "古族之剑", "en": "Lost Tribe's Blade", "type": "武器", "location": "curious_nest", "how": "海上击败封锁海湾的身经百战之鲨掉落" },
    { "name": "古族之弓", "en": "Lost Tribe's Bow", "type": "武器", "location": "curious_nest", "how": "恶食之巢顶层，击败Tyrannodrake后开箱" },
    { "name": "龙卷长柄", "en": "Tornado Glaive", "type": "武器", "location": "curious_nest", "how": "恶食之巢顶层宝箱" },
    { "name": "凶猛之牙", "en": "Fang of Ferocity", "type": "饰品", "location": "curious_nest", "how": "恶食之巢顶层宝箱" },
    { "name": "机关护目镜", "en": "Gimmick Goggles", "type": "防具", "location": "curious_nest", "how": "击败鲨鱼后海湾西侧海面宝箱；洛克岛武器店也有售13000叶", "effect": "物防+65、属防+43、回避+59" },
    { "name": "灯塔守的头巾", "en": "Lighthouse Keeper's Bandana", "type": "防具", "location": "canalbrine", "how": "支线「灯塔修复」奖励" },
    { "name": "喜悦背心", "en": "Vest of Joy", "type": "防具", "location": "conning_creek", "how": "支线「少女的心愿」奖励" },
    { "name": "弗洛伊德的新式弓", "en": "Floyd's Neo Bow", "type": "武器", "location": "roque_island", "how": "支线「弗洛伊德与瑟斯顿的下一章」奖励" }
  ],
  "jobs": [
    { "name": "药师", "en": "Apothecary", "location": "conning_creek", "how": "康宁湾旅店南侧民居内的药师公会，与会长对话即得第1张职业证；第2张：上交3个恩典草芽；第3张：上交3个原始角灵药" }
  ],
  "tips": [
    "卡纳尔布莱恩—兽人海滩停泊所（托托哈哈岛）—新德尔斯塔港停泊所之间有免费渡船，是东西大陆往来的主要通道。",
    "康宁湾不是停泊所，从东大陆前往需在卡纳尔布莱恩下船后经西卡纳尔布莱恩海道→大桥→北/西康宁湾海道南下；西康宁湾海道西南还可直通日之野东赛伊沙路。",
    "野外危险度会随剧情推进提升：西卡纳尔布莱恩海道/大桥 5→8→11，北/西康宁湾海道 14→22→28→34；迷宫等级固定。",
    "购买船只后船会停靠在卡纳尔布莱恩，海上宝箱：卡纳尔布莱恩以北生命橄榄(L)、东北兽之围巾、以西沉没的金像；洛克岛西南有扩散血清。",
    "月与太阳洞窟（Lv45）常出现胖凯特，是中后期练级与刷钱的好去处；装备章鱼罐可提高章鱼旅人遭遇率。",
    "可在本区学到的光的技能：卡纳尔布莱恩教堂主祭神官「神圣守护」（强度10），配合舞娘「Sealticge's Seduction」可让全队数回合无敌；康宁湾夜间镇民「Level Sweep」。",
    "帕尔提提欧「商机：凛芬镇篇」所需的小提琴手在卡纳尔布莱恩酒馆；纹之地支线「为钱做研究」所需的章鱼爱好者在康宁湾酒馆；明之地支线「富家少年」需要带走卡纳尔布莱恩教堂里的父亲。"
  ]
});

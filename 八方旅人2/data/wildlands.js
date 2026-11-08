OT2.addRegion({
  "id": "wildlands",
  "name": "荒野之地",
  "en": "Wildlands",
  "continent": "west",
  "levelRange": "1-50",
  "starter": "帕尔提提欧（商人）",
  "intro": "荒野之地位于西大陆东北部，是寸草不生的火山岩荒原，地下埋藏着丰富矿藏，也是商人帕尔提提欧的故乡。南部是银矿小镇欧兹拉修，北部有建在峡谷上、月影教团信徒聚居的克拉克里奇，以及传说大魔导士达克斯特长眠之地附近的偏远村落格拉维尔。地区从序盘（欧兹拉修周边1~11级）延伸到终盘（格拉维尔周边45~50级），并藏有商人公会、武器大师与多个高难度可选迷宫。",
  "highlights": [
    "格拉维尔的退休铁匠波尔塔：带任意一把「生锈的武器」即可解锁隐藏职业武器大师，集齐6把神器奖励贤王之盾",
    "西克拉克里奇荒道悬崖上的商人公会可获得商人职业证；南克拉克里奇荒道隐藏的绅商伯祭坛可解锁帕尔提提欧EX技能",
    "白色幽谷（危险度50）的深渊之物：掉落灾厄之眼，支线奖励姐妹护符",
    "隐藏事件：夜晚在格拉维尔村口等到黎明，对出现的少年使用「胁迫」可打倒「影之少年」并拾取日影之杖",
    "未完成隧道：发明家素材「天然磁石」与削弱护符（万口怪守护）",
    "克拉克里奇NPC可偷到岩石切割斧、守护者之斧、碎石剑等中期强力武器，以及跨区支线关键道具「奇迹之石」"
  ],
  "locations": [
    {
      "id": "oresrush",
      "name": "欧兹拉修",
      "en": "Oresrush",
      "type": "town",
      "pos": [18.6, 79.6],
      "level": "1",
      "desc": "帕普与罗克建立的银矿小镇、帕尔提提欧的故乡；帕尔提提欧第1章与索洛奈第2章（母亲篇）的舞台。",
      "story": ["帕尔提提欧 第1章", "索洛奈 第2章（母亲篇）", "帕尔提提欧 第4章（尾声）"],
      "boss": [],
      "treasures": [
        { "item": "轻钱袋（Light Coin Pouch）", "how": "帕尔提提欧家一楼最里面的房间宝箱" },
        { "item": "速度增强果实（Light Nut）", "how": "宝箱：旅店后方的楼梯上去，进入武器店内" },
        { "item": "还魂橄榄（Olive of Life）", "how": "隐藏物品：探听入口大水桶下的NPC，位于北侧" },
        { "item": "糖果（Candy）", "how": "隐藏物品：探听北侧小孩，位于旅店外" },
        { "item": "活力戒指（Empowering Ring）", "how": "隐藏物品：夜晚收买酒馆外的男子，位于其南侧" }
      ],
      "npcs": [
        { "name": "帕普（Papp）", "item": "旅人斗篷（Traveler's Mantle）、抵抗果实M（Resistant Nut (M)）", "method": "偷窃/购买", "note": "帕尔提提欧的父亲；探听可得「廉价雇佣」情报" },
        { "name": "道具店南侧的女子", "item": "滋养果实（Nourishing Nut）", "method": "偷窃", "note": "探听可得旅店打折情报" },
        { "name": "牧场主（栅栏另一侧）", "item": "精准耳环（Unerring Earring）、卫兵巨弓（Guard's Greatbow）", "method": "偷窃/购买/引导/诱惑", "note": "精准耳环是发明家技能「会心瞄准镜」素材；引导/诱惑强度6，技能「二段突击」（枪），无可探听情报" },
        { "name": "酒馆店员", "item": "活力耳环（Empowering Earring）、清爽果酱（Refreshing Jam）", "method": "偷窃/购买", "note": "昼夜皆在；强度5，技能「回旋踢」" },
        { "name": "退休矿工（武器店内）", "item": "坚固的十字镐（Sturdy Pickaxe）", "method": "购买", "note": "购买5500叶（偷窃率很低，不可强夺，也可恳求）；冬之地支线「石中剑」取得生锈的剑所需" },
        { "name": "内德/妮基/哈里（Ned/Nikki/Harry）", "item": "支线「征求好笑话」所需情报", "method": "探听/收买", "note": "内德在酒馆，妮基在旅店上方阳台，哈里在旅店左侧楼梯旁、通往铸造厂的路边（昼夜皆在）" },
        { "name": "老人（昼）", "item": "醒神李子M（Inspiriting Plum (M)）、治愈葡萄M（Healing Grape (M)）", "method": "偷窃/探听", "note": "探听可得隐藏的重钱袋（位于铸造厂）" },
        { "name": "男子（昼）", "item": "非力之花、石头、锐利的石头", "method": "偷窃/探听", "note": "探听可得隐藏的短弓（位于铸造厂）" }
      ],
      "shops": [
        "武器店：银剑（速度+13）、库克力弯刀、骨枪、巨弓、青铜盾、羽毛帽、旅人斗篷、银坠饰（属攻+10）等",
        "道具店：治愈葡萄、醒神李子、还魂橄榄、清醒/觉醒药草及调合素材"
      ],
      "tips": "声望恢复需4500叶。帕尔提提欧第1章中小镇会以16年前、8年前、萧条期等多个时代登场。夜晚在旅店与隔壁建筑之间的NPC收买3000叶可得「新装备上架」。"
    },
    {
      "id": "oresrush_foundry",
      "name": "欧兹拉修铸造厂",
      "en": "Oresrush: Foundry",
      "type": "town",
      "pos": [15.5, 77.5],
      "level": "7",
      "desc": "镇北的旧铸造厂，奴隶商人在此开设赌命的「死亡之桌」，索洛奈第2章母亲篇的关键地点。",
      "story": ["索洛奈 第2章（母亲篇）"],
      "boss": [],
      "treasures": [
        { "item": "被偷的货物（Stocked Goods）", "how": "打昏挡在左侧房屋前的粗鲁商人后进屋开宝箱；支线「被盗的货物」任务道具" },
        { "item": "重钱袋（Heavy Coin Pouch）", "how": "隐藏物品：探听欧兹拉修镇内白天的老人后出现在铸造厂" },
        { "item": "短弓（Short Bow）", "how": "隐藏物品：探听欧兹拉修镇内白天的男子后出现在铸造厂" }
      ],
      "npcs": [
        { "name": "粗鲁商人（Boorish Merchant）", "item": "睡眠粉瓶（睡眠の瓶詰）、幻惑之叶（まやかしの葉）", "method": "挑战", "note": "昼夜都在；挡住藏赃物的房屋，打昏后可进入" }
      ],
      "shops": [],
      "tips": "铸造厂内没有商店与旅店（补给回欧兹拉修镇内）。索洛奈第2章前入口封闭，剧情后直到索洛奈全篇完成前再次关闭。"
    },
    {
      "id": "silver_mine",
      "name": "银矿 / 银矿遗址",
      "en": "Silver Mine / Abandoned Silver Mine",
      "type": "field",
      "pos": [25.8, 80.7],
      "level": "1~2",
      "desc": "欧兹拉修东侧的银矿。「银矿」只在帕尔提提欧第1章回忆中（夜晚）出现，现代变为结构扩大的「银矿遗址」，深处通往吉夫宅邸。",
      "story": ["帕尔提提欧 第1章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄（Healing Grape）", "how": "银矿（回忆时期）宝箱" },
        { "item": "500叶", "how": "银矿遗址宝箱" },
        { "item": "启迪戒指（Enlightening Ring）", "how": "银矿遗址宝箱" },
        { "item": "光之精灵石（Light Soulstone）", "how": "银矿遗址宝箱" },
        { "item": "醒神李子（Inspiriting Plum）", "how": "银矿遗址宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "一路向上走到可当桥用的铁轨，穿过峡谷后再经隧道即可抵达吉夫宅邸。"
    },
    {
      "id": "giffs_manse",
      "name": "吉夫宅邸",
      "en": "Giff's Manse",
      "type": "dungeon",
      "pos": [27.3, 74.5],
      "level": "5",
      "desc": "恶棍吉夫的豪宅，帕尔提提欧第1章的迷宫。",
      "story": ["帕尔提提欧 第1章"],
      "boss": [
        { "name": "恶棍头目吉夫", "en": "Giff", "level": "5~6", "weakness": ["枪", "短剑", "斧", "冰"], "tips": "HP约1050、4盾，带两名手下：手下I（弱点：短剑、弓、火、冰，1盾）、手下II（弱点：枪、短剑、斧、冰，2盾）。先用弓/枪/火击倒手下，再集中攻击吉夫。帕尔提提欧本身有枪、弓、火，可在镇上雇佣持斧或短剑的NPC补足；冰弱点需靠宅邸内冰之哨兵掉落的冰之精灵石（掉率约4%）。Boss前有存档点与商人，可买长枪与铜胸甲。掉落银锭。" }
      ],
      "treasures": [
        { "item": "治愈葡萄（Healing Grape）", "how": "宅邸玄关右手边的房间" },
        { "item": "小块银矿（Small Silver Ore）", "how": "喷水广场深处的房间" },
        { "item": "青铜盾（Bronze Shield）", "how": "喷水广场左手边靠前处" },
        { "item": "皮盔（Leather Helm）", "how": "喷水广场2楼中央的房间" }
      ],
      "npcs": [],
      "shops": ["Boss房前有商人，可补给装备与回复品"],
      "tips": "敌人2~3级：冰之哨兵（弱点：枪、斧、杖、火）、看门犬、蛋雏等。"
    },
    {
      "id": "south_oresrush_wilds",
      "name": "南欧兹拉修荒道",
      "en": "Southern Oresrush Wilds",
      "type": "field",
      "pos": [18.3, 85],
      "level": "5/8/11",
      "desc": "欧兹拉修南侧荒道，南通日之野北琉砂原，西接叶之地南库罗普提尔森道。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "雷之精灵石（Thunder Soulstone）", "how": "宝箱" },
        { "item": "无名之剑（Nameless Sword）", "how": "宝箱" },
        { "item": "勇气药草（Herb of Valor）", "how": "宝箱" },
        { "item": "2000叶", "how": "宝箱" }
      ],
      "npcs": [
        { "name": "阿尔（Al）", "item": "支线「旅人的包袱」", "method": "挑战", "note": "仅当帕尔提提欧为初始主角时出现在此，击败后得滑溜果实与治愈葡萄x3" }
      ],
      "shops": [],
      "tips": "序盘往返叶之地与日之野的通道。"
    },
    {
      "id": "crackridge_anchorage",
      "name": "克拉克里奇港停泊所",
      "en": "Crackridge Harbor: Anchorage",
      "type": "port",
      "pos": [21.9, 61],
      "level": "5/8/11",
      "desc": "荒野之地的港口停泊所，连接叶之地东库罗普提尔森道与南克拉克里奇荒道，取得船后可由此出海。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "库克力弯刀（Kukri）", "how": "宝箱" },
        { "item": "治愈葡萄M（Healing Grape (M)）", "how": "宝箱" },
        { "item": "毒粉瓶（Bottle of Poison Dust）", "how": "宝箱" }
      ],
      "npcs": [
        { "name": "可疑的男子（Suspicious Man）", "item": "凤凰扇（Phoenix Fan）", "method": "偷窃/购买", "note": "日之野支线「库国的宝物」所需宝物之一" },
        { "name": "巴雷（Bale）", "item": "—", "method": "—", "note": "奥斯瓦尔德第1、2章完成后作为NPC出现" }
      ],
      "shops": [],
      "tips": "游戏内此处西侧连接东库罗普提尔森道、北侧连接克拉克里奇荒道一带。夜晚有私奔的汀巴雷因贵族女子等可疑人物。"
    },
    {
      "id": "south_crackridge_wilds",
      "name": "南克拉克里奇荒道",
      "en": "Southern Crackridge Wilds",
      "type": "field",
      "pos": [17.5, 52.6],
      "level": "20/28/34",
      "desc": "港口北侧的荒道，西侧有未完成隧道入口，东侧隐藏着绅商伯祭坛，东北通往西克拉克里奇荒道。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "活力荔枝（Empowering Lychee）", "how": "宝箱" },
        { "item": "喧嚣药草（Herb of Clamor）", "how": "宝箱" },
        { "item": "6400叶", "how": "宝箱（其中一个位于通往祭坛的隐藏隧道内）" },
        { "item": "暗之精灵石M（Shadow Soulstone (M)）", "how": "宝箱" }
      ],
      "npcs": [
        { "name": "监工（Overseer）", "item": "—", "method": "挑战", "note": "挡在未完成隧道入口，需挑战/挑衅/伏击打昏" }
      ],
      "shops": [],
      "tips": "奶油咩咩（Buttermeep）在此出没，可收取较多叶子。"
    },
    {
      "id": "unfinished_tunnel",
      "name": "未完成隧道",
      "en": "Unfinished Tunnel",
      "type": "dungeon",
      "pos": [11.6, 50.7],
      "level": "34",
      "desc": "被怪物入侵而停工的矿道，可选迷宫，支线「洞窟里的怪物」的舞台。",
      "story": [],
      "boss": [
        { "name": "万口怪", "en": "Manymaws", "level": "34~40", "weakness": ["剑", "斧", "杖", "火"], "tips": "HP约47500，盾6→8。第一阶段弱点剑/斧/杖/火；使用「突变」后变为枪、斧、弓、杖、冰。专精状态异常：开场与被击破后用「恶臭」施加毒/盲/睡眠/混乱，还有「毒息」「异变」（沉默），后期蓄力「腐臭」。带足异常回复（卡丝蒂调合、免疫之叶）与防异常饰品，用多段攻击快速击破。掉落复苏果酱；击败后约3%几率作为随机遇敌出现可捕获。" }
      ],
      "treasures": [
        { "item": "天然磁石（Natural Magnetite）", "how": "沿铁轨向南，走右侧木板下去，再向南下木板，往左走到梯子爬上的宝箱；无需击败Boss。发明家技能「阿卡的线圈」素材" },
        { "item": "削弱护符（Enfeebling Amulet）", "how": "万口怪守护的宝箱" },
        { "item": "复苏果酱（Revitalizing Jam）", "how": "宝箱" },
        { "item": "还魂橄榄M（Olive of Life (M)）", "how": "宝箱" },
        { "item": "清醒之石（Clarity Stone）", "how": "宝箱" },
        { "item": "药草精华（Herb Elixir）", "how": "宝箱" },
        { "item": "2100叶 / 13500叶", "how": "宝箱" }
      ],
      "npcs": [
        { "name": "工头（Foreman）", "item": "支线「洞窟里的怪物」", "method": "—", "note": "进入隧道后自动接取" }
      ],
      "shops": [],
      "tips": "致敬前作的废弃矿山。敌人为野生鼹鼠王、古代鸟人、血腥公牛等，约30~35级。"
    },
    {
      "id": "altar_of_trader",
      "name": "绅商伯祭坛",
      "en": "Altar of the Trader",
      "type": "shrine",
      "pos": [27.5, 51.2],
      "level": "20/28/34",
      "desc": "供奉绅商伯比菲尔冈（Bifelgan）的守护神祭坛，帕尔提提欧在队时调查神像可解锁EX技能。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "入口在南克拉克里奇荒道，通往西克拉克里奇荒道的入口以南有一条矿道，里面的隐藏通道（内有宝箱）通往祭坛。帕尔提提欧可获得EX技能「Negotiate Schedule」（与行动顺序相关的交涉技）。商人公会会长也说祭坛就在这一带。"
    },
    {
      "id": "west_crackridge_wilds",
      "name": "西克拉克里奇荒道",
      "en": "Western Crackridge Wilds",
      "type": "field",
      "pos": [24.6, 41.9],
      "level": "20/28/34",
      "desc": "克拉克里奇西侧荒道，北通西格拉维尔荒道，南接南克拉克里奇荒道；西北悬崖上是商人公会。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "醒神李子篮（Inspiriting Plum Basket）", "how": "宝箱" },
        { "item": "还魂橄榄（Olive of Life）", "how": "宝箱" },
        { "item": "头巾（Headgear）", "how": "宝箱" },
        { "item": "骨铠（Bone Mail）", "how": "宝箱" },
        { "item": "8500叶", "how": "宝箱" },
        { "item": "雷之精灵石M（Thunder Soulstone (M)）", "how": "宝箱" }
      ],
      "npcs": [
        { "name": "商人公会会长", "item": "商人职业证", "method": "—", "note": "交谈即得第1张；支付10万叶得第2张、30万叶得第3张" },
        { "name": "幸运宠儿（Fortune's Favorite）", "item": "特殊商品", "method": "购买", "note": "白天在会长旁，只能购买不能偷" },
        { "name": "商业魔术师（Conjurer of Commerce）", "item": "特殊商品", "method": "购买", "note": "夜晚替换出现" }
      ],
      "shops": ["商人公会旁的昼/夜商人"],
      "tips": "从克拉克里奇西出口进入，爬上北侧悬崖即达商人公会。"
    },
    {
      "id": "crackridge",
      "name": "克拉克里奇",
      "en": "Crackridge",
      "type": "town",
      "pos": [34.9, 40.6],
      "level": "24",
      "desc": "建在峡谷边、月影教团信徒聚居的小镇，传说之兽泰拉沉睡在镇下；奥修特第2章泰拉篇与泰米诺斯第3章克拉克里奇篇的舞台。",
      "story": ["奥修特 第2章（泰拉篇）", "泰米诺斯 第3章（克拉克里奇篇）"],
      "boss": [],
      "treasures": [
        { "item": "还魂橄榄M（Olive of Life (M)）", "how": "入口附近楼梯下的宝箱" },
        { "item": "来自地狱尽头（From the Far Reaches of Hell）", "how": "南侧梯子下，打昏挡路的学者后进屋开宝箱（关键道具）" },
        { "item": "物攻增强果实L（Fortifying Nut (M)）", "how": "隐藏物品：探听石匠（昼在道具店外、夜在酒馆内）后出现，位于镇东侧的空房子内" },
        { "item": "钢之弓（Steel Bow）", "how": "隐藏物品：夜晚在东侧房屋外的三位老人中，探听右边的女子后出现，位于武器店外" },
        { "item": "银盾（Silver Shield）", "how": "隐藏物品：探听入口的吉他手后出现，沿入口向东北方向的小路上行不远处" },
        { "item": "薄暗之花（薄闇の花）", "how": "隐藏物品：探听存档点旁的学者后出现，位于旅店内" },
        { "item": "睡眠粉瓶（睡眠の瓶詰）", "how": "隐藏物品：探听存档点东侧树旁的老人后出现，位于北侧空房子旁" },
        { "item": "石头（石ころ）", "how": "隐藏物品：探听东侧空房子南面两名男孩中右边的一个后出现，位于道具店与旅店之间" },
        { "item": "火之精灵石L（火の精霊石（特大））", "how": "隐藏物品：探听酒馆里的商人（昼）后出现，位于镇东南角房屋外" }
      ],
      "npcs": [
        { "name": "吉他手（入口）", "item": "丹宁工作服（Denim Work Clothes）", "method": "偷窃", "note": "中期不错的身体防具；探听得隐藏的银盾" },
        { "name": "老人", "item": "潜行短剑（Stealthy Knife）", "method": "偷窃", "note": "适合短剑角色；探听得隐藏的睡眠粉瓶（北侧空房子旁）" },
        { "name": "夜晚中段的男子", "item": "碎石剑（Stonesplitter）", "method": "强夺/恳求", "note": "收买得「新装备上架」情报；中期极强的剑" },
        { "name": "夜晚中段的女子", "item": "橡木杖（Oak Staff）", "method": "强夺", "note": "收买得钢之弓位置" },
        { "name": "武器店内士兵", "item": "尖刺盾（Spiked Shield）、守护者之斧（Guardian's Axe）", "method": "偷窃/购买", "note": "守护者之斧也是发明家素材；可用阿格妮娅诱惑他，跳舞时能提升全队攻防" },
        { "name": "可疑商人（Suspicious Merchant）", "item": "奇迹之石（Miracle Stone）", "method": "偷窃/购买", "note": "明之地支线「筋疲力尽！」的解法之一" },
        { "name": "石匠（道具店外）", "item": "岩石切割斧（Rock Cleaver）", "method": "偷窃/购买", "note": "昼在道具店外、夜在酒馆内；探听得隐藏的物攻增强果实L" },
        { "name": "旅店外的女子", "item": "新月项链（Crescent Moon Necklace）", "method": "偷窃", "note": "探听得「挑衅高手」情报；月影教团信徒的项链只能偷/强夺" },
        { "name": "年轻男子（夜晚）", "item": "禁忌之杖（Forbidden Staff）", "method": "强夺", "note": "挑战难度8；大幅降低物攻但属攻暴增，同时降低属防" },
        { "name": "峡谷边的舞者", "item": "猎鹰外套（Falcon Coat）、火之护符（Fire Amulet）", "method": "偷窃", "note": "探听得「轻松引导」情报" },
        { "name": "学者（南侧梯下）", "item": "—", "method": "挑战", "note": "挡住藏有「来自地狱尽头」的房屋，需打昏" },
        { "name": "学者（存档点旁）", "item": "醒神李子M、精神戒指", "method": "偷窃/探听", "note": "探听得隐藏的薄暗之花（位于旅店内）" },
        { "name": "酒馆内的商人（昼）", "item": "增强药剂、扩散药剂", "method": "偷窃/探听", "note": "探听得隐藏的火之精灵石L（东南角房屋外）" },
        { "name": "男孩（昼，空房子南侧右边）", "item": "手帕、治愈葡萄", "method": "偷窃/探听", "note": "探听得隐藏的石头；左边的男孩可探听得旅店折扣" }
      ],
      "shops": [
        "武器防具店：重力长枪、新月军刀、附魔之刃、骨刃斧、黑曜石短剑、射手之弓、魔导杖、连枷、骷髅盔、元素长袍、守护戒指等",
        "道具店：火之精灵石M与常用回复品"
      ],
      "tips": "声望恢复需4500叶。白天镇民不愿谈论遗迹；夜晚的小女孩会跑向废弃道路后消失。「来自地狱尽头」是纹之地支线「搜集奇书」所需三本书之一，与隐藏Boss相关。"
    },
    {
      "id": "path_to_bed_of_titan",
      "name": "通往地神寝床之路 / 地神寝床",
      "en": "Path to the Bed of the Titan / Bed of the Titan",
      "type": "dungeon",
      "pos": [36.3, 48.5],
      "level": "29",
      "desc": "克拉克里奇南侧沿峭壁搭建的木架小路，尽头的地神寝床沉睡着传说之兽泰拉。",
      "story": ["奥修特 第2章（泰拉篇）"],
      "boss": [
        { "name": "地神泰拉", "en": "Tera", "level": "29", "weakness": ["短剑", "斧", "杖", "冰", "暗"], "tips": "HP约43500、盾数始终为6。随战斗推进会「硬化身体」逐步失去弱点（大致：黄血时剩斧/冰/暗，红血时剩冰/暗）。「践踏」单体约1200、「震动」全体约900、「火星」随机3段，务必让全员HP保持在1200以上并做好复活准备。「喷嚏/大喷嚏」会把1~2名队员吹出战斗数回合，每人都留些BP以便少人也能击破。「盘绕熔岩」期间物理攻击会反伤，改用魔法与增益；「灼热大地」后每回合持续烧伤。推荐神官回复、奥斯瓦尔德冰魔法、盗贼降攻，奥修特可召唤波姆提升防御。掉落守护者巨斧。" }
      ],
      "treasures": [
        { "item": "活力石榴M（Energizing Pomegranate (M)）", "how": "通往地神寝床之路宝箱" },
        { "item": "守护手镯（Protective Bracelet）", "how": "宝箱" },
        { "item": "骑士巨弓（Knight's Greatbow）", "how": "宝箱" },
        { "item": "火之护符（Fire Amulet）", "how": "宝箱；泰拉后期多火属性攻击，非常实用" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "地神寝床本身没有随机遇敌与宝箱。路上敌人约20~33级（野生鼹鼠、吸血蝙蝠、王秃鹫、毛蜘蛛等）。"
    },
    {
      "id": "abandoned_road",
      "name": "废弃道路",
      "en": "Abandoned Road",
      "type": "field",
      "pos": [43.7, 40.7],
      "level": "23",
      "desc": "克拉克里奇东侧通往落日遗迹的荒废道路。",
      "story": ["泰米诺斯 第3章（克拉克里奇篇）"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄M（Healing Grape (M)）", "how": "宝箱" },
        { "item": "9200叶", "how": "宝箱" },
        { "item": "瓶装噩梦（Bottled Nightmares）", "how": "宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "泰米诺斯第3章中在此揭穿蕾萨的月影教团身份。"
    },
    {
      "id": "fellsun_ruins",
      "name": "落日遗迹",
      "en": "Fellsun Ruins",
      "type": "dungeon",
      "pos": [51.9, 40.4],
      "level": "24",
      "desc": "守火之民「卡尔族」的古老圣地，30年前遭月影教团屠杀，遍地白骨；壁画背后藏有圣火。",
      "story": ["泰米诺斯 第3章（克拉克里奇篇）", "最终章相关（为了黎明的旅途）"],
      "boss": [],
      "treasures": [
        { "item": "活力石榴L（Energizing Pomegranate (L)）", "how": "宝箱" },
        { "item": "元素长袍（Elemental Robe）", "how": "宝箱" },
        { "item": "翡翠之杖（Jade Staff）", "how": "宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "泰米诺斯第3章克拉克里奇篇没有Boss战。敌人：傀儡骷髅（弱斧/杖/风/光）、光之残骸、吸血蝙蝠等。最终章开始后壁画被破坏，露出圣火。"
    },
    {
      "id": "west_gravell_wilds",
      "name": "西格拉维尔荒道",
      "en": "Western Gravell Wilds",
      "type": "field",
      "pos": [45.4, 13.2],
      "level": "45",
      "desc": "通往格拉维尔的高危荒道，西南接西克拉克里奇荒道，桥下深谷通往白色幽谷。",
      "story": [],
      "boss": [
        { "name": "影之少年", "en": "Shadowy Boy", "level": "45+", "weakness": ["杖", "雷", "光"], "tips": "隐藏事件：夜晚在格拉维尔村口外等待到黎明，白天抱着玩偶的少年会出现在村外（格拉维尔区域出口附近），用泰米诺斯「胁迫」揭穿并触发战斗。15盾，弱点杖/雷/光，需要对应的武器或属性手段。击败后附近出现隐藏物品日影之杖（物攻+171、属攻+335，光/暗属性威力提升）。" }
      ],
      "treasures": [
        { "item": "碎星剑（Starsplitter）", "how": "宝箱" },
        { "item": "23500叶", "how": "宝箱" },
        { "item": "活力石榴L（Energizing Pomegranate (L)）", "how": "宝箱" },
        { "item": "雷之精灵石L（Thunder Soulstone (L)）", "how": "宝箱" },
        { "item": "宁静药草（Herb of Serenity）", "how": "宝箱" },
        { "item": "致盲粉瓶（Bottle of Blinding Dust）", "how": "宝箱" },
        { "item": "日影之杖（Sunshadow Staff）", "how": "隐藏物品：击败影之少年后出现" }
      ],
      "npcs": [
        { "name": "商人（靠近格拉维尔的桥边）", "item": "情报「狩猎委托」", "method": "探听", "note": "支线「阿尔皮欧涅的后续」所需" }
      ],
      "shops": [],
      "tips": "白色幽谷入口：从格拉维尔往西过第一座吊桥，再沿南边的桥折回，在桥下找到梯子一路下行。纹之地边境神官公会会长也提到过日影之杖的传说。"
    },
    {
      "id": "ivory_ravine",
      "name": "白色幽谷",
      "en": "Ivory Ravine",
      "type": "dungeon",
      "pos": [46.2, 19.5],
      "level": "50",
      "desc": "由木板与梯子构成、深入峡谷的漆黑可选迷宫，谷底水域栖息着深渊之物。",
      "story": [],
      "boss": [
        { "name": "深渊之物", "en": "Deep One", "level": "50+", "weakness": ["剑", "斧", "火", "光"], "tips": "HP约138000，盾10→13，每回合行动2次，HP50%时「突变」：弱点变为枪、短剑、弓、冰，并增加至3次行动。开场宣告「第七灾厄将至」，第一~第六灾厄依次越来越强，「第六灾厄」使全员HP变为1，随后蓄力「大灾厄」造成全体9999伤害，必须在此之前击破或击倒。「绝望一击」致沉默/昏迷、「恐怖一击」致恐惧、「海之呼唤」全体伤害并回血、「慢动作」降速。建议早早致盲它削弱物理攻击，第一阶段用斧剑多段破盾，第二阶段用弓（「箭雨」等）；装备暗属性抗性饰品。掉落灾厄之眼（物攻/属攻+120）。" }
      ],
      "treasures": [
        { "item": "失落部族之斧（Lost Tribe's Axe）", "how": "入口南侧不过吊桥，沿左侧楼梯与梯子下去的宝箱" },
        { "item": "混乱粉瓶（Bottle of Befuddling Dust）", "how": "过桥后在下一座吊桥前沿梯子下去" },
        { "item": "暮霭（Evening Mist）", "how": "过第二座桥后北侧宝箱；法系角色用的强力弓" },
        { "item": "巨人之棍（Giant's Club）", "how": "存档点右侧楼梯到底后左侧宝箱" }
      ],
      "npcs": [
        { "name": "迷路的少女（Lost Girl）", "item": "支线「失踪的少女」", "method": "引导", "note": "位于谷底水中小岛，需先击败深渊之物" }
      ],
      "shops": [],
      "tips": "极其黑暗。最后一个宝箱旁有存档点，乘小舟驶向小岛时触发Boss战。"
    },
    {
      "id": "gravell",
      "name": "格拉维尔",
      "en": "Gravell",
      "type": "town",
      "pos": [64.7, 12.2],
      "level": "45",
      "desc": "远离文明、饱受瘟疫与灾祸的小村，大魔导士达克斯特长眠的达斯克鲁因灵殿就在附近；奥斯瓦尔德第5章的舞台，也是武器大师职业的所在地。",
      "story": ["奥斯瓦尔德 第5章"],
      "boss": [],
      "treasures": [
        { "item": "石英盾（Quartz Shield）", "how": "上坡后「志向远大的青年」身后的宝箱，性能很好" },
        { "item": "活力荔枝L（Empowering Lychee (L)）", "how": "隐藏物品：探听入口处穿蓝衣的人，位于武器店旁" },
        { "item": "魔力果实M（Magic Nut (M)）", "how": "隐藏物品：探听右侧最右边的小孩，位于南侧酒馆内" }
      ],
      "npcs": [
        { "name": "退休铁匠波尔塔（Porta）", "item": "武器大师职业证/支线「寻找神之武器」", "method": "—", "note": "存档点右侧房屋，需先打昏门口的讨债人；持有任意生锈武器即可解锁武器大师" },
        { "name": "讨债人（Debt Collector）", "item": "—", "method": "挑战", "note": "挑战/挑衅（难度6）、安抚（1个安眠鼠尾草）或伏击（30级）均可" },
        { "name": "入口处老人", "item": "锐利果实L（Sharp Nut (L)）", "method": "偷窃", "note": "白天" },
        { "name": "入口士兵（夜晚）", "item": "石英长袍（Quartz Robe）、神盾（Aegis Shield）", "method": "强夺/恳求", "note": "夜晚" },
        { "name": "武器店内女子（夜晚）", "item": "附魔之刃（Enchanted Edge）、物理腰带（Physical Belt）", "method": "强夺/恳求", "note": "收买得「新装备上架」情报" },
        { "name": "商店外的男子", "item": "炼狱护符（Inferno Amulet）", "method": "偷窃", "note": "探听得「强夺高手」情报" },
        { "name": "阿尔皮欧涅（Alpione）", "item": "强韧果实L（Tough Nut (L)）", "method": "偷窃", "note": "奥修特全篇完成后出现在旅店附近" },
        { "name": "抱玩偶的少年", "item": "「玩偶」（无法取得）", "method": "胁迫", "note": "白天在村内；隐藏事件见西格拉维尔荒道" }
      ],
      "shops": [
        "武器防具店：粗胚短剑、钻石短剑、粗胚杖、钻石杖、精金圆盾、巨盔、迅捷斗篷、刺激手镯等",
        "道具店：火之精灵石L、M级回复品、扩散血清"
      ],
      "tips": "前往格拉维尔：快速移动到克拉克里奇→西出口西克拉克里奇荒道→左上进入西格拉维尔荒道→右上抵达。周边危险度45。"
    },
    {
      "id": "path_to_duskruin",
      "name": "通往达斯克鲁因灵殿之路",
      "en": "Path to the Duskruin Shrine",
      "type": "field",
      "pos": [80.5, 10.9],
      "level": "45",
      "desc": "格拉维尔东侧通往灵殿的道路，奥斯瓦尔德第5章中被诡异黑雾笼罩。",
      "story": ["奥斯瓦尔德 第5章"],
      "boss": [],
      "treasures": [
        { "item": "古代外套（Antique Coat）", "how": "宝箱" },
        { "item": "活力石榴M（Energizing Pomegranate (M)）", "how": "宝箱" },
        { "item": "治愈葡萄串（Healing Grape Bunch）", "how": "宝箱（全体治愈葡萄）" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "第5章中需在夜晚「强夺」失去神智的村民手中的黑水晶来解救他们。"
    },
    {
      "id": "duskruin_shrine",
      "name": "达斯克鲁因灵殿（含最深处）",
      "en": "Duskruin Shrine / Duskruin Shrine: Depths",
      "type": "dungeon",
      "pos": [88.9, 12.6],
      "level": "45",
      "desc": "安放大魔导士达克斯特遗骸的巨大遗迹，现为月影教团的神殿；奥斯瓦尔德最终章的迷宫。",
      "story": ["奥斯瓦尔德 第5章"],
      "boss": [
        { "name": "哈维教授", "en": "Professor Harvey", "level": "45", "weakness": ["枪", "斧", "火", "冰", "雷"], "tips": "10盾；HP降到约3万以下（奥斯瓦尔德对话后）弱点变为短剑/弓/光/暗，盾仍为10。会召唤两只纯粹元素（护盾3，弱杖/火/冰/雷/风/光），用火/冰/雷魔法打它们还能顺便削哈维的盾；「讲课」会让单体睡眠。物理手不足时可用魂石造成稳定伤害。奥斯瓦尔德本章获得的「究极魔法」无视弱点削盾，建议留到哈维只剩1盾、且奥斯瓦尔德有3BP时配合潜在力「集中魔力」一击。掉落还魂橄榄（特大）。" }
      ],
      "treasures": [
        { "item": "还魂橄榄（特大）（Olive of Life (L)）", "how": "灵殿宝箱" },
        { "item": "会心项链（Critical Necklace）", "how": "灵殿宝箱" },
        { "item": "冰之精灵石L（Ice Soulstone (L)）", "how": "灵殿宝箱" },
        { "item": "25000叶", "how": "灵殿宝箱" },
        { "item": "深渊之杖（Abyssal Rod）", "how": "最深处宝箱" },
        { "item": "活力荔枝L（Empowering Lychee (L)）", "how": "最深处宝箱" },
        { "item": "治愈葡萄串（Healing Grape Bunch）", "how": "最深处宝箱" },
        { "item": "暗之精灵石L（Shadow Soulstone (L)）", "how": "最深处宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人34~50级，包括火/冰残骸、冰之亡魂、狂暴犀牛等，火元素弱冰与暗。奥斯瓦尔德故事结束后仍可回最深处看到受损的祭坛。"
    }
  ],
  "roads": [
    ["west_gravell_wilds", "gravell"],
    ["west_gravell_wilds", "ivory_ravine"],
    ["west_gravell_wilds", "west_crackridge_wilds"],
    ["gravell", "path_to_duskruin"],
    ["path_to_duskruin", "duskruin_shrine"],
    ["west_crackridge_wilds", "crackridge"],
    ["west_crackridge_wilds", "south_crackridge_wilds"],
    ["crackridge", "abandoned_road"],
    ["abandoned_road", "fellsun_ruins"],
    ["crackridge", "path_to_bed_of_titan"],
    ["south_crackridge_wilds", "unfinished_tunnel"],
    ["south_crackridge_wilds", "altar_of_trader"],
    ["south_crackridge_wilds", "crackridge_anchorage"],
    ["oresrush", "oresrush_foundry"],
    ["oresrush", "silver_mine"],
    ["silver_mine", "giffs_manse"],
    ["oresrush", "south_oresrush_wilds"]
  ],
  "links": [
    {"from": "crackridge_anchorage", "region": "leaflands", "to": "east_cropdale_trail"},
    {"from": "crackridge_anchorage", "region": "sundering_sea", "to": "anchorage_crackridge"},
    {"from": "south_oresrush_wilds", "region": "leaflands", "to": "south_cropdale_trail"},
    {"from": "south_oresrush_wilds", "region": "hinoeuma", "to": "northern_ryu_sands"}
  ],
  "story": [
    {
      "title": "帕尔提提欧 第1章：夺回欧兹拉修",
      "character": "帕尔提提欧",
      "location": "giffs_manse",
      "level": "1",
      "summary": "16年前帕普与罗克在荒地上建起银矿小镇欧兹拉修，8年前盛极一时，却因契约中的「致命缺陷」被前地主夺回土地并课以重税，镇民陷入贫困。24岁的帕尔提提欧为病父买药后下定决心，召集伙伴前往恶棍吉夫的宅邸夺回小镇的财富，并得知幕后地主竟是他敬仰的罗克。",
      "steps": [
        "（回忆）寻找持有银矿石的人并「购买」银矿石，向父亲报告",
        "（回忆）报告当日销售额，雇佣帮手前往银矿击退吉夫一伙",
        "（现代）购买药品交给父亲",
        "穿过银矿遗址前往吉夫宅邸，击败吉夫"
      ],
      "boss": "恶棍头目吉夫（弱点：枪、短剑、斧、冰）＋手下I/II",
      "tips": "帕尔提提欧夜晚可「雇佣」镇民参战，持斧或短剑的雇佣兵能补足弱点。冰弱点可用冰之哨兵掉落的冰之精灵石。下一站是明之地钟表银行（Clockbank）。"
    },
    {
      "title": "索洛奈 第2章（母亲篇）：死亡之桌",
      "character": "索洛奈",
      "location": "oresrush_foundry",
      "level": "7",
      "summary": "为了取下项圈，索洛奈必须杀死黑蛇的「父亲」与「母亲」夺取钥匙。她来到欧兹拉修打听母亲的下落，经马具店牵线进入旧铸造厂，在赌命的「死亡之桌」上与奴隶商人对决，得知母亲藏身于韦尔格罗夫的母亲花园。",
      "steps": [
        "前往马具店，被要求带来一匹「马」",
        "跟踪另一名客人，从凶恶男子身上偷到「马」（暗号）",
        "回马具店得知母亲与奴隶商人在旧铸造厂会面",
        "在小巷甩掉跟踪者，偷下面具少年的面具",
        "进入铸造厂，在死亡之桌与奴隶商人对决"
      ],
      "boss": "无（本章没有强制战斗）",
      "tips": "本章没有强制战斗，甩掉跟踪者后直接偷面具即可，参加「死亡之桌」时右边的杯子是正确答案（选左杯会毒死，可从选择前重来）。面具少年长得和皮洛一模一样。完成后前往叶之地韦尔格罗夫（第3章母亲篇）。"
    },
    {
      "title": "奥修特 第2章（泰拉篇）：沉睡的地神",
      "character": "奥修特",
      "location": "path_to_bed_of_titan",
      "level": "29",
      "summary": "为对抗四百年一度的「绯月之夜」，奥修特四处寻找三只传说之兽，其中之一沉睡在克拉克里奇之下。村长装病不肯带路，她用奶油咩咩肉干收买了饥饿少年波姆，由他引路下到谷底唤醒泰拉。",
      "steps": [
        "在克拉克里奇打听泰拉的消息（期间发生地震）",
        "寻找愿意带路的人，与饥饿的少年波姆交好（给他肉干）",
        "与波姆一同沿梯子下到通往地神寝床之路",
        "在地神寝床用喊声与弓箭唤醒泰拉并战斗"
      ],
      "boss": "地神泰拉（弱点：短剑、斧、杖、冰、暗，战斗中逐步减少）",
      "tips": "带上火之护符（同迷宫宝箱）、充足的复活道具。奥修特的三条第2章路线都完成后才能进入第3章。"
    },
    {
      "title": "泰米诺斯 第3章（克拉克里奇篇）：落日遗迹的真相",
      "character": "泰米诺斯",
      "location": "fellsun_ruins",
      "level": "24",
      "summary": "泰米诺斯来到已故审问官卢西安曾研究过的落日遗迹附近的克拉克里奇，想调查「守火之民」。镇民讳莫如深，夜里却在旅店秘密集会。他护送自称要去镇外的女子蕾萨，识破她是月影教团信徒，并由她带往遗迹，发现卡尔族被屠杀的惨烈真相。",
      "steps": [
        "前往旅店，在镇上调查",
        "夜晚之后在旅店外「引导」蕾萨",
        "把蕾萨带到镇外（废弃道路）",
        "前往落日遗迹并深入调查壁画"
      ],
      "boss": "无",
      "tips": "本路线没有Boss战。泰米诺斯第3章另有冬之地斯托姆黑尔路线，两条都要完成才能进入第4章。"
    },
    {
      "title": "奥斯瓦尔德 第5章：究极魔法",
      "character": "奥斯瓦尔德",
      "location": "duskruin_shrine",
      "level": "45",
      "summary": "得知女儿艾莲娜还活着，奥斯瓦尔德赶到大魔导士达克斯特长眠的格拉维尔。黑雾让村民神智失常，他夺下村民手中的黑水晶救人，循线深入达斯克鲁因灵殿最深处，与企图用艾莲娜之血完成「究极魔法」的哈维决战。",
      "steps": [
        "在格拉维尔查看村民情况",
        "夜晚「强夺」失去神智的村民手中的黑水晶（共数人）",
        "经通往达斯克鲁因灵殿之路进入灵殿最深处",
        "击败哈维教授，之后「调查」艾莲娜"
      ],
      "boss": "哈维教授（弱点：枪、斧、火、冰、雷；HP约3万以下变为短剑、弓、光、暗）＋纯粹元素×2",
      "tips": "强夺村民需要等级足够；灵殿敌人等级可达50。保留「究极魔法」在哈维剩1盾时使用。"
    }
  ],
  "sidequests": [
    {
      "name": "被盗的货物",
      "en": "Stolen Goods",
      "location": "oresrush",
      "trigger": "帕尔提提欧第1章完成后（或以其他主角抵达欧兹拉修后），与东侧通往银矿遗址出口旁的小贩交谈",
      "steps": [
        "前往镇北的欧兹拉修铸造厂",
        "打昏挡在左侧房屋前的粗鲁商人",
        "打开屋内宝箱取得「被偷的货物」交给小贩"
      ],
      "reward": "3000叶、速度增强果实（Light Nut）、治愈葡萄M",
      "difficulty": "易"
    },
    {
      "name": "征求好笑话",
      "en": "Wanted: A Good Joke",
      "location": "oresrush",
      "trigger": "帕尔提提欧第1章完成后（或以其他主角抵达欧兹拉修后），与道具店前戴红帽的乔（Joe）交谈（乔不能处于被带着同行状态）",
      "steps": [
        "向酒馆内的内德探听/收买「内德的恋爱建议」",
        "向旅店上方阳台的妮基收买「妮基的独门笑话」",
        "向通往铸造厂路边的哈里收买「哈里的自嘲笑话」",
        "把三条情报告诉乔"
      ],
      "reward": "3500叶、刺激果实M（Invigorating Nut (M)）",
      "difficulty": "易"
    },
    {
      "name": "洞窟里的怪物",
      "en": "The Cave Monster",
      "location": "unfinished_tunnel",
      "trigger": "在南克拉克里奇荒道西北打昏未完成隧道入口的监工，进入后工头自动委托",
      "steps": [
        "深入未完成隧道",
        "击败盘踞深处的万口怪"
      ],
      "reward": "5000叶、抵抗果实L（Resistant Nut (L)）",
      "difficulty": "难"
    },
    {
      "name": "失踪的少女",
      "en": "The Missing Girl",
      "location": "gravell",
      "trigger": "格拉维尔村口附近（波尔塔家南侧）的担忧的母亲",
      "steps": [
        "队伍需有可引导/带人同行的角色（泰米诺斯、阿格妮娅、帕尔提提欧、奥修特等）",
        "前往西格拉维尔荒道，沿桥下的梯子进入白色幽谷",
        "下到谷底乘舟驶向小岛，击败深渊之物取得「浑浊水晶手镯」",
        "把手镯交给迷路的少女，引导她回到母亲身边"
      ],
      "reward": "15000叶、姐妹护符（Sisters' Amulet，速度+100、会心+100）",
      "difficulty": "难"
    },
    {
      "name": "伸手摘星",
      "en": "Reaching for the Stars",
      "location": "gravell",
      "trigger": "格拉维尔旅店旁梯子上方平台的志向远大的青年（想当歌手却被村民拦着不让走）",
      "steps": [
        "切换为夜晚",
        "打昏旅店南侧的两名村民与村口存档点附近的士兵（索洛奈伏击最省事，也可卡丝蒂安抚）",
        "三人都倒下后自动播放剧情"
      ],
      "reward": "15000叶、华丽帽子（Gaudy Hat）",
      "difficulty": "易"
    },
    {
      "name": "寻找神之武器",
      "en": "In Search of the Divine Weapons",
      "location": "gravell",
      "trigger": "打昏格拉维尔存档点右侧房屋前的讨债人，与屋内退休铁匠波尔塔交谈",
      "steps": [
        "交给波尔塔任意一把生锈武器即解锁武器大师并重铸为神器",
        "生锈的剑：冬之地温特布鲁姆支线「石中剑」（需欧兹拉修退休矿工的坚固十字镐）",
        "生锈的长枪：叶之地汀巴雷因城广场，老兵把守的仓库内",
        "生锈的短剑：分隔之海「女皇号残骸」；生锈的斧：日之野「流沙牢狱」Boss后",
        "生锈的弓：「沉没遗迹」Boss后；生锈的杖：「水精灵之座」",
        "集齐6把全部重铸后完成"
      ],
      "reward": "20000叶、贤王之盾（Wise King's Shield，物防/属防+110，战斗开始时提升物防）",
      "difficulty": "难"
    },
    {
      "name": "阿尔皮欧涅的后续",
      "en": "Alpione's Next Chapter",
      "location": "gravell",
      "trigger": "奥修特全篇（第3章）完成后，与格拉维尔旅店附近的阿尔皮欧涅交谈",
      "steps": [
        "阿尔皮欧涅想找需要猎人的人",
        "前往西格拉维尔荒道，向靠近格拉维尔的桥边商人探听「狩猎委托」（卡丝蒂/奥斯瓦尔德）",
        "回格拉维尔告诉阿尔皮欧涅"
      ],
      "reward": "10000叶、阿尔皮欧涅护符（Alpione's Amulet）",
      "difficulty": "易"
    }
  ],
  "items": [
    { "name": "日影之杖", "en": "Sunshadow Staff", "type": "武器", "location": "west_gravell_wilds", "how": "夜晚在格拉维尔村口外等到黎明，对出现的少年用泰米诺斯「胁迫」，击败影之少年后拾取隐藏物品" },
    { "name": "贤王之盾", "en": "Wise King's Shield", "type": "防具", "location": "gravell", "how": "支线「寻找神之武器」集齐6把神器后的奖励", "effect": "物防/属防+110，战斗开始时提升物防" },
    { "name": "姐妹护符", "en": "Sisters' Amulet", "type": "饰品", "location": "gravell", "how": "支线「失踪的少女」奖励", "effect": "速度+100、会心+100" },
    { "name": "灾厄之眼", "en": "Eye of Calamity", "type": "饰品", "location": "ivory_ravine", "how": "深渊之物必定掉落", "effect": "物攻+120、属攻+120，战斗开始时降低敌方物攻与属攻" },
    { "name": "暮霭", "en": "Evening Mist", "type": "武器", "location": "ivory_ravine", "how": "白色幽谷第二座桥后北侧宝箱", "effect": "适合法系角色的强力弓" },
    { "name": "失落部族之斧", "en": "Lost Tribe's Axe", "type": "武器", "location": "ivory_ravine", "how": "白色幽谷入口南侧下行的宝箱" },
    { "name": "碎星剑", "en": "Starsplitter", "type": "武器", "location": "west_gravell_wilds", "how": "西格拉维尔荒道宝箱" },
    { "name": "深渊之杖", "en": "Abyssal Rod", "type": "武器", "location": "duskruin_shrine", "how": "达斯克鲁因灵殿最深处宝箱" },
    { "name": "会心项链", "en": "Critical Necklace", "type": "饰品", "location": "duskruin_shrine", "how": "达斯克鲁因灵殿宝箱" },
    { "name": "石英盾", "en": "Quartz Shield", "type": "防具", "location": "gravell", "how": "格拉维尔上坡处志向远大的青年身后宝箱" },
    { "name": "附魔之刃 / 物理腰带", "en": "Enchanted Edge / Physical Belt", "type": "武器", "location": "gravell", "how": "夜晚格拉维尔武器店内女子：强夺/恳求" },
    { "name": "强韧果实L", "en": "Tough Nut (L)", "type": "道具", "location": "gravell", "how": "奥修特全篇后偷窃格拉维尔的阿尔皮欧涅", "effect": "大幅提升物防" },
    { "name": "守护者巨斧", "en": "Guardian's Great Axe", "type": "武器", "location": "path_to_bed_of_titan", "how": "奥修特第2章泰拉必定掉落" },
    { "name": "火之护符 / 骑士巨弓", "en": "Fire Amulet / Knight's Greatbow", "type": "饰品", "location": "path_to_bed_of_titan", "how": "通往地神寝床之路宝箱" },
    { "name": "翡翠之杖", "en": "Jade Staff", "type": "武器", "location": "fellsun_ruins", "how": "落日遗迹宝箱" },
    { "name": "天然磁石", "en": "Natural Magnetite", "type": "其他", "location": "unfinished_tunnel", "how": "未完成隧道内宝箱（无需击败Boss）", "effect": "发明家技能「阿卡的线圈」素材（另需废铁、古代齿轮）" },
    { "name": "削弱护符", "en": "Enfeebling Amulet", "type": "饰品", "location": "unfinished_tunnel", "how": "万口怪守护的宝箱" },
    { "name": "碎石剑", "en": "Stonesplitter", "type": "武器", "location": "crackridge", "how": "夜晚克拉克里奇中段男子：强夺/恳求" },
    { "name": "守护者之斧 / 尖刺盾", "en": "Guardian's Axe / Spiked Shield", "type": "武器", "location": "crackridge", "how": "偷窃/购买克拉克里奇武器店内士兵", "effect": "守护者之斧也是发明家技能「加速之锤」素材" },
    { "name": "岩石切割斧", "en": "Rock Cleaver", "type": "武器", "location": "crackridge", "how": "偷窃/购买道具店外的石匠" },
    { "name": "禁忌之杖", "en": "Forbidden Staff", "type": "武器", "location": "crackridge", "how": "夜晚强夺旅店附近的年轻男子（挑战难度8）", "effect": "大幅降低物攻、大幅提升属攻，并降低属防" },
    { "name": "奇迹之石", "en": "Miracle Stone", "type": "其他", "location": "crackridge", "how": "偷窃/购买克拉克里奇的可疑商人", "effect": "明之地支线「筋疲力尽！」的解法之一" },
    { "name": "来自地狱尽头", "en": "From the Far Reaches of Hell", "type": "其他", "location": "crackridge", "how": "打昏南侧梯下的学者，进屋开宝箱", "effect": "纹之地支线「搜集奇书」所需，关联隐藏Boss" },
    { "name": "凤凰扇", "en": "Phoenix Fan", "type": "其他", "location": "crackridge_anchorage", "how": "偷窃/购买港口停泊所的可疑男子", "effect": "日之野支线「库国的宝物」所需" },
    { "name": "坚固的十字镐", "en": "Sturdy Pickaxe", "type": "其他", "location": "oresrush", "how": "向欧兹拉修武器店内退休矿工购买（5500叶）", "effect": "冬之地支线「石中剑」→生锈的剑（武器大师）" },
    { "name": "旅人斗篷", "en": "Traveler's Mantle", "type": "防具", "location": "oresrush", "how": "偷窃/购买帕普，也可在武器店购买（3100叶）" },
    { "name": "精准耳环", "en": "Unerring Earring", "type": "饰品", "location": "oresrush", "how": "偷窃/购买欧兹拉修栅栏另一侧的NPC", "effect": "发明家技能「会心瞄准镜」素材" },
    { "name": "启迪戒指", "en": "Enlightening Ring", "type": "饰品", "location": "silver_mine", "how": "银矿遗址宝箱" },
    { "name": "阿尔皮欧涅护符", "en": "Alpione's Amulet", "type": "饰品", "location": "gravell", "how": "支线「阿尔皮欧涅的后续」奖励" },
    { "name": "华丽帽子", "en": "Gaudy Hat", "type": "防具", "location": "gravell", "how": "支线「伸手摘星」奖励" },
    { "name": "抵抗果实L", "en": "Resistant Nut (L)", "type": "道具", "location": "unfinished_tunnel", "how": "支线「洞窟里的怪物」奖励", "effect": "大幅提升属防" }
  ],
  "jobs": [
    { "name": "商人", "en": "Merchant", "location": "west_crackridge_wilds", "how": "从克拉克里奇西出口进入西克拉克里奇荒道，爬上北侧（西北）悬崖找到商人公会，与会长交谈获得第1张职业证。追加证：支付10万叶→第2张；支付30万叶→第3张。" },
    { "name": "武器大师（隐藏职业）", "en": "Armsmaster", "location": "gravell", "how": "打昏格拉维尔存档点右侧房屋前的讨债人，进屋与退休铁匠波尔塔交谈；持有任意一把生锈武器（如叶之地汀巴雷因城广场的生锈的长枪）即可获得职业证。初始技能为「六连击」「坚壁」及所交神器对应的技能，其余技能需集齐对应神器解锁。" }
  ],
  "tips": [
    "地区连通：南欧兹拉修荒道西接叶之地南库罗普提尔森道、南通日之野北琉砂原；克拉克里奇港停泊所连接叶之地东库罗普提尔森道。",
    "危险度分层：欧兹拉修与港口一带5~11级，克拉克里奇周边20~34级，格拉维尔一带45级，白色幽谷50级，可选迷宫难度跳跃较大。",
    "商人追加职业证只需花钱（10万/30万叶），帕尔提提欧的收取（Collect）与南/西克拉克里奇荒道的奶油咩咩都是赚钱好手段。",
    "武器大师只需一把生锈武器即可解锁，最方便的是叶之地汀巴雷因城广场的生锈的长枪，或用欧兹拉修的坚固十字镐换冬之地的生锈的剑。",
    "跨地区关键道具：克拉克里奇可疑商人的奇迹之石（明之地「筋疲力尽！」）、港口可疑男子的凤凰扇（日之野「库国的宝物」）、克拉克里奇的「来自地狱尽头」（纹之地「搜集奇书」→隐藏Boss）。",
    "格拉维尔隐藏事件：夜晚在村口外等到天亮，用泰米诺斯胁迫出现的少年，打倒影之少年可得日影之杖。",
    "月影教团信徒佩戴的新月项链只能偷窃或强夺获得。",
    "帕尔提提欧第4章尾声中，罗克与帕普一起在欧兹拉修铺设铁路。"
  ]
});

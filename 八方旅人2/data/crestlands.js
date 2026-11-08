OT2.addRegion({
  "id": "crestlands",
  "name": "纹之地",
  "en": "Crestlands",
  "continent": "east",
  "levelRange": "1-50",
  "starter": "泰米诺斯（神官）",
  "intro": "纹之地位于东大陆东侧的山岳地带，西接明之地、北连冬之地，是圣火教会总本山「弗拉姆教堂」的所在地，也是泰米诺斯的出身地。区域由西向东依次为弗拉姆教堂、国境大瀑布、学术都市蒙特维斯，东南端则是举办盛大庆典的梅里希尔斯。这里承载了泰米诺斯第1章、光第2章、索洛奈第3章（父亲篇）、奥斯瓦尔德第4章、阿格妮娅最终章等大量主线，并藏有冠军腰带、禁忌之剑、返咒项圈等顶级装备。",
  "highlights": [
    "国境大瀑布的神官公会可领取神官职业证，公会内侧门后是「圣火神祭坛」，带泰米诺斯造访习得EX技能「超过回复的祈祷」（Prayer for Plenty）",
    "蒙特维斯地下竞技场支线「斗技大会之王」：击败尤莉娜斯可得冠军腰带（物攻+100、暴击+100、防偷袭），之后可通过登记员反复挑战刷取",
    "无缘墓地（Lv40）：打倒食梦者得禁忌之剑，另有全队复活回满的「再诞之杯」与破暗猛击斧",
    "水灵之座（Lv26，无Boss）：返咒项圈（装备负面数值转为正面）+ 武器大师用的「生锈的杖」",
    "支线「来自遥远地狱」完成后开启分隔之海「终焉之门」（隐藏Boss路线前置）并获得纹章（物防/属防+100）",
    "梅里希尔斯可偷取钻石短剑、疾风斗篷、属性护符及多种大号属性坚果，是后期强化的宝库"
  ],

  "locations": [
    {
      "id": "flamechurch",
      "name": "弗拉姆教堂",
      "en": "Flamechurch",
      "type": "town",
      "pos": [9.9, 50.6],
      "level": "0",
      "desc": "圣火教会的门前小镇、泰米诺斯的起点，北侧经巡礼路通往大圣堂。",
      "story": ["泰米诺斯 第1章", "泰米诺斯&索洛奈 交汇篇 上篇"],
      "boss": [],
      "treasures": [
        { "item": "400叶", "how": "道具店北侧小屋内的宝箱" },
        { "item": "卫兵护盾（Guard's Shield，物防+25/属防+21）", "how": "旅馆旁梯子上方士兵的公寓内（右侧宝箱），需先用偷袭/挑战等击倒门口士兵" },
        { "item": "治愈葡萄", "how": "同上士兵公寓内（左侧宝箱）" },
        { "item": "隐藏物：活力石榴（大）", "how": "向礼拜堂南侧的年轻市民探听得知，位于道具店北侧房屋旁" },
        { "item": "隐藏物：羽饰帽（Feathered Hat）", "how": "向礼拜堂门前神官探听，位于礼拜堂西侧" },
        { "item": "隐藏物：年代物葡萄酒（Aged Wine）", "how": "向夜晚酒馆内的饮料商探听，位于酒馆外" }
      ],
      "npcs": [
        { "name": "老人（Elderly Man）", "item": "库克力弯刀（Kukri）、救赎念珠（Rosary of Redemption）", "method": "偷窃/购买/挑战/引导", "note": "白天在小镇入口。强度8级，可雇佣并使用技能「千刃」（Thousand Blades），实力极强，低等级勿挑战" },
        { "name": "士兵（Soldier）", "item": "风筝盾（Kite Shield）、青铜头盔（Bronze Helm）", "method": "偷窃/购买/挑战", "note": "旅馆旁梯子上方。探听可得旅馆折扣；击倒后可进入其公寓开宝箱" },
        { "name": "神官（礼拜堂门前）", "item": "圣火蜡烛、纸偶剧（Paper Play）", "method": "偷窃/购买", "note": "白天。圣火蜡烛用于支线「朝圣者的安全」，纸偶剧用于托托哈哈岛支线「Shirlutto's Next Chapter」" },
        { "name": "神官（礼拜堂右侧）", "item": "圣火蜡烛、清醒药草", "method": "偷窃/购买", "note": "白天。支线「朝圣者的安全」所需的第二支蜡烛" },
        { "name": "长老（Elder）", "item": "羽饰帽、巡礼者长袍（Pilgrim's Robe）", "method": "偷窃/购买", "note": "礼拜堂西侧，支线「朝圣者的安全」委托人" },
        { "name": "弹琴的神官", "item": "守护耳环、苏醒药草", "method": "偷窃/购买", "note": "礼拜堂后部钢琴前，与帕尔提提欧「商机的气息」系列有关" },
        { "name": "产婆（Midwife）", "item": "清醒药草、睡眠粉瓶、治愈葡萄（大）", "method": "偷窃/购买", "note": "白天在酒馆，与冬之地支线「要生了！」有关" },
        { "name": "饮料商（夜）", "item": "兽皮兜帽（Hide Hood）、全体回复葡萄", "method": "偷窃/抢夺", "note": "夜晚在酒馆内" }
      ],
      "shops": [
        "商店：针刺短剑 2800、咒术杖 800、木杖 2400、石杖 2600、魔导杖 10000（需情报解锁）",
        "防具/饰品：小圆盾 600、尖帽 2100、巡礼者长袍 3100、守护耳环 280、守护戒指 3000（需情报解锁）",
        "道具：治愈葡萄 50、葡萄（大）260、醒神李子 240、还魂橄榄 500、李子之叶 200、闪光之花 60"
      ],
      "tips": "旅馆旁梯子上的士兵在前期较难击倒，可稍后再来开公寓宝箱。入口的老人是前期最强雇佣兵之一，但雇佣费高昂。"
    },
    {
      "id": "flamechurch_pilgrims_way",
      "name": "弗拉姆教堂巡礼路",
      "en": "Flamechurch Pilgrims' Way",
      "type": "field",
      "pos": [9.5, 41.6],
      "level": "1",
      "desc": "连接小镇与大圣堂的山路，中段有一座带水域的洞窟。",
      "story": ["泰米诺斯 第1章"],
      "boss": [],
      "treasures": [
        { "item": "醒神李子", "how": "起点存档点左上坡道旁" },
        { "item": "治愈葡萄", "how": "克里克入队后，向右下楼梯" },
        { "item": "物防强化坚果（Tough Nut）", "how": "进入洞窟后走左侧岔路，出洞后的小平台尽头" },
        { "item": "精神戒指（Stimulating Ring，最大SP+30）", "how": "洞窟右侧水池，乘小舟到东北码头" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "完成支线「朝圣者的安全」后，巡礼路点满蜡烛并不再遇敌。"
    },
    {
      "id": "flamechurch_cathedral_entrance",
      "name": "弗拉姆教堂·大圣堂前",
      "en": "Flamechurch: Cathedral Entrance",
      "type": "town",
      "pos": [12, 34.3],
      "level": "0",
      "desc": "大圣堂正门前的广场，有圣火、资料馆、墓地，东北角的小屋通往大圣堂地下。",
      "story": ["泰米诺斯 第1章"],
      "boss": [],
      "treasures": [
        { "item": "暗之精灵石", "how": "西侧两栋房屋中右边那栋内的宝箱（建筑师瓦多斯身后）" },
        { "item": "隐藏物：火之精灵石（大）", "how": "向西侧房屋前的学者探听，位于圣火附近" },
        { "item": "隐藏物：属防强化坚果", "how": "向资料馆前的少年探听，位于东侧墓碑上" },
        { "item": "隐藏物：糖果", "how": "向圣火旁的老人探听，位于西侧房屋内" }
      ],
      "npcs": [
        { "name": "建筑师瓦多斯（Vados the Architect）", "item": "情报：地下通道位置", "method": "胁迫", "note": "泰米诺斯第1章夜晚剧情目标，弱光，用圣光两次即可" },
        { "name": "学者", "item": "光之精灵石、光之精灵石（大）、糖果", "method": "偷窃/购买", "note": "白天，西侧房屋前" },
        { "name": "历史学家（资料馆内）", "item": "石杖（Stone Rod）、醒神李子（大）", "method": "偷窃/购买", "note": "白天" },
        { "name": "圣堂骑士（白天）", "item": "长枪（Long Spear）、启迪耳环（Enlightening Earring）", "method": "偷窃/购买", "note": "守在大圣堂正门" },
        { "name": "圣堂骑士（夜）", "item": "银剑（Silver Sword）、活力石榴（大）", "method": "抢夺", "note": "夜晚守在大圣堂正门" },
        { "name": "可疑青年（夜）", "item": "金怀表、沉甸甸的钱袋、金戒指", "method": "抢夺", "note": "圣火东侧，探听可得「盗窃技巧」" },
        { "name": "奥尔特（Ort）", "item": "疾风盾（Swift Shield）、帝国铠甲（Imperial Armor）、潜力恢复的荔枝（大）", "method": "偷窃/购买", "note": "完成泰米诺斯全部故事后出现在大圣堂前阶梯，支线「Ort's Next Chapter」委托人，完成后移居斯托姆黑尔" }
      ],
      "shops": [
        "杂货商（圣火右侧）：还魂橄榄 500、醒神李子 240、治愈葡萄（大）250、治愈葡萄 50、魔导杖 10000、石杖 2600、木杖 2400、咒术杖 800、针刺短剑 2800、守护戒指 3000、巡礼者长袍 3100、尖帽 2100、小圆盾 600",
        "旅行商人：还魂橄榄 500、醒神李子 240、治愈葡萄 50、皮甲 400、橡胶头盔 200"
      ],
      "tips": "泰米诺斯第1章在此学会夜间行动「胁迫」。"
    },
    {
      "id": "flamechurch_cathedral",
      "name": "弗拉姆教堂·大圣堂",
      "en": "Flamechurch: Cathedral",
      "type": "town",
      "pos": [14.9, 28.5],
      "level": "6",
      "desc": "圣火教会总本山「艾尔弗里克大圣堂」，教皇遇害事件的现场。",
      "story": ["泰米诺斯 第1章", "泰米诺斯&索洛奈 交汇篇 上篇"],
      "boss": [
        { "name": "费尔瓦格", "en": "Felvarg", "level": "5", "weakness": ["剑", "光"], "tips": "5盾。克里克的「圣斩」破盾并降低属防，再接泰米诺斯BP满的圣光。HP降低后会「锁定泰米诺斯」并封锁弱点，准备释放「致命之爪」：用克里克的「掩护」代为承受，或用泰米诺斯的底力「审判」无视弱点削盾" }
      ],
      "treasures": [
        { "item": "还魂橄榄", "how": "从地下梯子上来后，出口旁房间" },
        { "item": "光之精灵石", "how": "大圣堂右侧最里面的卧室" },
        { "item": "天使的戒指（Angel's Ring，最大SP+30/属防+20）", "how": "交汇篇「泰米诺斯&索洛奈 上篇」中，经教皇房间暗门进入屋顶梁架，过梁后向下楼梯" },
        { "item": "隐藏物：小圆盾", "how": "向大圣堂北侧走道右边的女市民探听，位于入口大厅" },
        { "item": "隐藏物：光之治疗药草", "how": "向入口处的女性探听，位于东侧房间" }
      ],
      "npcs": [
        { "name": "神官（东侧走廊）", "item": "巡礼者长袍、暗之护符（Dark Amulet）", "method": "偷窃/购买", "note": "白天" },
        { "name": "猎人", "item": "复合弓（Composite Bow）、兽肝", "method": "偷窃/购买", "note": "白天，北侧走道左边" },
        { "name": "神官长（Head Cleric）", "item": "光之杖（Light Wand）、醒神李子", "method": "偷窃/购买", "note": "祭坛旁，探听可得「轻松引导」" },
        { "name": "神官（祭坛旁）", "item": "贤者之杖（Rod of Wisdom）、魔除之叶、沉默治疗药草", "method": "偷窃/购买", "note": "支线「圣窗的修复」委托人" },
        { "name": "戴牛仔帽的巡礼者", "item": "活力石榴（大）、火之护符（Fire Amulet）", "method": "偷窃/购买", "note": "完成「圣窗的修复」后出现" }
      ],
      "shops": [],
      "tips": "第三支圣火蜡烛的持有者夜晚会移动到祭坛附近。"
    },
    {
      "id": "cathedral_cellars",
      "name": "大圣堂地下",
      "en": "Cathedral Cellars",
      "type": "dungeon",
      "pos": [20.7, 22.1],
      "level": "5",
      "desc": "从大圣堂前东北角小屋下梯子进入的秘密水道，通往大圣堂内部。",
      "story": ["泰米诺斯 第1章"],
      "boss": [],
      "treasures": [
        { "item": "光之精灵石", "how": "入口向左（北）上楼梯" },
        { "item": "醒神李子", "how": "水道中央小岛，乘小舟抵达" },
        { "item": "朝圣者之杖（Pilgrim Rod，物攻+9/属攻+10）", "how": "对岸上楼梯后，大雕像背后的隐藏小路" }
      ],
      "npcs": [],
      "shops": ["出口梯子旁有行商，可补充装备"],
      "tips": "敌人：红菊石（弱剑/光）、行走白骨（弱杖/光）、巨蛞蝓（弱杖）等。支线「Ort's Next Chapter」也会回到这里，战斗位于西侧雕像旁。"
    },
    {
      "id": "eastern_flamechurch_pass",
      "name": "东弗拉姆教堂山道",
      "en": "Eastern Flamechurch Pass",
      "type": "field",
      "pos": [26.1, 47.7],
      "level": "约11（随进度变化）",
      "desc": "纹之地的交通枢纽：西通弗拉姆教堂、北通冬之地东寒岬村雪道、南通明之地西轮敦山道、东通国境大瀑布。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "皮甲（Fur Armor）", "how": "从弗拉姆教堂南下，路线转东前右侧小路（存档点北侧窄路）" },
        { "item": "火之精灵石", "how": "通往国境大瀑布出口前，路边台阶上方" },
        { "item": "安眠草", "how": "通往东寒岬村雪道（北）的路右侧小空地" },
        { "item": "活力石榴", "how": "通往西轮敦山道（南）的路右侧隐蔽空地" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "存档点处为三岔路口，前期从新德尔斯塔/寒岬村方向来招募泰米诺斯都会经过这里。"
    },
    {
      "id": "borderfall",
      "name": "国境大瀑布",
      "en": "Borderfall",
      "type": "field",
      "pos": [45.3, 42.7],
      "level": "约14-33（随进度变化）",
      "desc": "纹之地中央的峡谷瀑布，有神官公会、圣火神祭坛与隐藏迷宫水灵之座。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "醒神李子（大）", "how": "从东弗拉姆教堂山道进入后沿路上坡，台阶左侧" },
        { "item": "影弓（Shadow Bow，物攻+55/属攻+55，小概率致盲）", "how": "存档点向西，上台阶后向右穿过岩石" },
        { "item": "雷之精灵石（大）", "how": "存档点向东过吊桥后右侧" },
        { "item": "潜力恢复的荔枝", "how": "过吊桥后下梯子，乘小舟向西" }
      ],
      "npcs": [
        { "name": "神官（公会内）", "item": "青金石杖（Lapis Rod）", "method": "偷窃/购买", "note": "神官公会教会内" },
        { "name": "神官（公会内）", "item": "精神戒指（最大SP+30）", "method": "偷窃/购买", "note": "神官公会教会内" }
      ],
      "shops": [],
      "tips": "存档点向西北过南北向的长吊桥，北端教会即神官公会；教会内书架左侧的门通往圣火神祭坛。瀑布下方水潭北侧的洞窟是水灵之座入口。"
    },
    {
      "id": "altar_of_the_flamebringer",
      "name": "圣火神祭坛",
      "en": "Altar of the Flamebringer",
      "type": "shrine",
      "pos": [39.9, 35.5],
      "level": "0",
      "desc": "圣火神艾尔弗里克的祭坛，是全游戏唯一位于建筑物内的守护神祭坛。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "入口在国境大瀑布神官公会教会内（书架左侧的门）。带泰米诺斯调查艾尔弗里克神像，习得EX技能「超过回复的祈祷」（Prayer for Plenty，SP20，为单体回复HP且可超过最大HP）。"
    },
    {
      "id": "seat_of_the_water_sprite",
      "name": "水灵之座",
      "en": "Seat of the Water Sprite",
      "type": "dungeon",
      "pos": [52.9, 37],
      "level": "26",
      "desc": "国境大瀑布瀑布后方的隐藏迷宫，没有Boss，但宝物极为丰厚。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "察知手环（Enlightening Bracelet，回避+50）", "how": "进入后先不上码头，乘小舟向西到另一个码头" },
        { "item": "全体醒神李子（Inspiriting Plum Basket）", "how": "上码头后存档点向北（东侧）" },
        { "item": "10000叶", "how": "存档点向西，北转处左侧楼梯下的隐藏通道" },
        { "item": "还魂橄榄（大）", "how": "北侧主路转东时左侧遗迹内的小楼梯" },
        { "item": "返咒项圈（Blessing in Disguise）", "how": "东侧岔路下梯子到水底区域" },
        { "item": "活力石榴（特大）", "how": "两道瀑布间梯子旁再向东" },
        { "item": "生锈的杖（Rusty Staff）", "how": "下梯子后路尽头中央圆形平台" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "从国境大瀑布过吊桥后下梯子，乘小舟驶向瀑布后的洞窟进入。返咒项圈可把装备负面数值转为正面，与救赎念珠等「诅咒」装备搭配极强。生锈的杖带到荒野之地格拉维尔的铁匠处可锻造为神器并解锁武器大师技能。"
    },
    {
      "id": "western_montwise_pass",
      "name": "西蒙特维斯山道",
      "en": "Western Montwise Pass",
      "type": "field",
      "pos": [61.1, 38.4],
      "level": "约14-22（随进度变化）",
      "desc": "蒙特维斯西侧的十字路口：西接国境大瀑布、东上楼梯到蒙特维斯、北通北蒙特维斯山道、南通西梅里希尔斯山道。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "冰装头盔（Gelid Helm，物防+21/属防+18，减轻冰属性伤害）", "how": "存档点向北，看到向右的台阶时向左钻到岩石下" },
        { "item": "800叶", "how": "存档点向右，路标旁梯子上方" },
        { "item": "活力石榴（大）", "how": "从路标向南过桥，沿坡道绕到桥下" }
      ],
      "npcs": [
        { "name": "士兵（北蒙特维斯山道入口）", "item": "羽毛盾（Feather Shield）、骑士头盔（Knight's Helm）", "method": "偷窃/购买/挑战/偷袭", "note": "挡住北蒙特维斯山道入口，需用挑战/偷袭等击倒才能通行" }
      ],
      "shops": [],
      "tips": "前往斯托姆黑尔（冬之地）必须先击倒北侧入口的士兵。"
    },
    {
      "id": "northern_montwise_pass",
      "name": "北蒙特维斯山道",
      "en": "Northern Montwise Pass",
      "type": "field",
      "pos": [61.3, 19.8],
      "level": "36",
      "desc": "穿过矿坑通往冬之地南斯托姆黑尔雪道的唯一道路，路线错综复杂。",
      "story": ["光 第4章（途经）", "泰米诺斯 第3章 斯托姆黑尔路线（途经）"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄（大）", "how": "入口立即向右" },
        { "item": "金砂（Gold Dust）", "how": "坡道上看到梯子后方的宝箱，从右侧入口绕进去左转；另一处在四岔路口左侧（共2个）" },
        { "item": "大银矿石（Large Silver Ore）", "how": "一个在西南角，一个在存档点南侧长梯子下方（共2个）" },
        { "item": "安眠草", "how": "向北坡道的岔路向左" },
        { "item": "暗之精灵石（大）", "how": "存档点向南右侧" },
        { "item": "狙击项链（Unerring Necklace，命中+80）", "how": "过存档点，上木坡前向左沿路到底" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "入口在西蒙特维斯山道北端，需先击倒守门士兵。"
    },
    {
      "id": "montwise",
      "name": "蒙特维斯",
      "en": "Montwise",
      "type": "town",
      "pos": [71.2, 32],
      "level": "0",
      "desc": "拥有索利斯蒂亚最大图书馆的学术都市，地下却藏着血腥的竞技场。",
      "story": ["光 第2章", "索洛奈 第3章（父亲篇）", "奥斯瓦尔德 第4章", "奥斯瓦尔德&帕尔提提欧 交汇篇 下篇"],
      "boss": [],
      "treasures": [
        { "item": "誓言之弓（Engagement Bow，物攻+197/速度+64）", "how": "酒馆旁被前斗士把守的房屋：击倒门口前斗士后，屋内还有前冠军守着宝箱，需约Lv30才能用偷袭/挑战击倒她" },
        { "item": "轻羽斗篷（Feather Mantle，物防+26/属防+38/速度+10）", "how": "从图书馆西北出口到城墙上，沿城墙向南" },
        { "item": "隐藏物：风之精灵石（特大）", "how": "向南侧楼梯旁的园丁探听，位于图书馆外" },
        { "item": "隐藏物：纹章大盾（Crested Greatshield）", "how": "向夜晚入口守卫探听，位于城镇东侧" },
        { "item": "隐藏物：精神耳环（Stimulating Earring）", "how": "向图书馆前的富豪投资人探听，位于斗士把守的房屋内" },
        { "item": "隐藏物：疾风之花、厚重学术书", "how": "分别向图书馆前学者、楼梯北侧商人探听" }
      ],
      "npcs": [
        { "name": "守卫（白天）", "item": "冠军之剑（Champion's Sword）、纹章大盾（Crested Greatshield）", "method": "偷窃/购买/挑战", "note": "城镇入口，极强，低等级勿挑战" },
        { "name": "前斗士", "item": "铁铠（Iron Mail）、卡西乌斯（Cassius）", "method": "偷窃/挑战/偷袭", "note": "守在酒馆旁房屋门口" },
        { "name": "前冠军", "item": "梳子、双效之叶、潜力恢复的荔枝", "method": "偷窃/挑战/偷袭", "note": "房屋内，击倒后可开誓言之弓宝箱" },
        { "name": "商人", "item": "历史书（History Book）、魔力坚果（中）", "method": "偷窃/购买", "note": "历史书用于托托哈哈岛支线「Shirlutto's Next Chapter」" },
        { "name": "园丁", "item": "稀有矿石、风之精灵石（大）、沉甸甸的钱袋", "method": "偷窃/购买", "note": "通往无缘墓地的楼梯旁，探听得隐藏的风之精灵石（特大）——修复圣窗用" },
        { "name": "担心的女性", "item": "重刃（Heavy Blade）、银盾（Silver Shield）、双效之叶", "method": "偷窃/购买", "note": "竞技场入口上方步道，支线「斗技大会之王」委托人" },
        { "name": "斗士（夜，酒馆）", "item": "战斗手斧（Battle Hatchet）、头饰、潜力戒指（Empowering Ring）", "method": "抢夺/挑战", "note": "实力强" },
        { "name": "章鱼学者", "item": "稀有矿石、睡眠粉瓶", "method": "偷窃/购买", "note": "旅馆门前，支线「穷困潦倒的研究者」委托人" }
      ],
      "shops": [
        "杂货店：贤者之杖、蓝宝石杖、智慧魔杖、尖帽、星光帽、轻羽斗篷、魔导长袍、精神戒指及各类回复道具（魔法职业装备齐全）"
      ],
      "tips": "城镇西出口通西蒙特维斯山道，东侧桥梁通荒凉山道，南侧水井旁梯子下行至无缘墓地。地下竞技场的楼梯在城镇东侧。"
    },
    {
      "id": "montwise_library",
      "name": "蒙特维斯·图书馆",
      "en": "Montwise: Library",
      "type": "town",
      "pos": [74.3, 26.7],
      "level": "0",
      "desc": "多层结构的巨大图书馆，最底层隐藏着通往地下研究室的入口。",
      "story": ["奥斯瓦尔德 第4章", "奥斯瓦尔德&帕尔提提欧 交汇篇 下篇"],
      "boss": [],
      "treasures": [
        { "item": "青金石杖（Lapis Rod，物攻+29/属攻+59/属防+14）", "how": "图书馆东侧上层，书架顶上的宝箱" },
        { "item": "隐藏物：还魂橄榄（特大）", "how": "向夜晚前台图书管理员探听，位于一楼东侧" },
        { "item": "隐藏物：毛皮长袍（Fur Robe）", "how": "向东侧设计师探听，位于西北自习室" },
        { "item": "隐藏物：极上肉干（Superior Jerky）", "how": "向地下一层西侧学者探听，位于一楼西南" }
      ],
      "npcs": [
        { "name": "学者&市民（西侧桌子）", "item": "雷之精灵石（特大）、火之精灵石（特大）、稀有矿石等", "method": "偷窃/购买", "note": "白天。修复圣窗所需的大号精灵石来源" },
        { "name": "学者（地下一层东侧）", "item": "先锋标枪（Vanguard's Javelin）、还魂橄榄（特大）", "method": "偷窃/购买", "note": "白天，探听得「高明的抢夺」" },
        { "name": "学者（地下一层西侧）", "item": "兽人之弓（Beastling's Bow）、狩猎装（Hunting Attire）、肉干", "method": "偷窃/购买", "note": "白天" },
        { "name": "设计师", "item": "咒术长袍（Charm Robe）、尖帽、潜力恢复的荔枝", "method": "偷窃/购买", "note": "白天，东侧" },
        { "name": "老人（城墙上）", "item": "活力石榴、冰之精灵石、银币袋", "method": "偷窃/购买", "note": "从西北出口到城墙，探听得「廉价雇佣」" },
        { "name": "历史学家（最底层东侧）", "item": "金怀表、学术书等", "method": "偷窃/购买", "note": "可探听「Nyx家族史」，为其他地区支线所需情报" },
        { "name": "图书管理员（夜）", "item": "尖帽、雷之护符（Lightning Amulet）", "method": "抢夺", "note": "夜晚前台" },
        { "name": "兽人（夜）", "item": "属防强化坚果（中）、光之坚果（中）、物防强化坚果（大）", "method": "抢夺", "note": "夜晚西侧书架" },
        { "name": "阿尔（Al）", "item": "守护戒指、潜力恢复的荔枝（大）", "method": "抢夺", "note": "完成「旅行者的包」后夜晚出现；再完成「收集稀有书籍」后发布「来自遥远地狱」" },
        { "name": "雷古鲁斯（Regulus）", "item": "小麦面包×2、学术书", "method": "偷窃/购买", "note": "东北研究室，交汇篇相关人物" }
      ],
      "shops": [],
      "tips": "奥斯瓦尔德第4章需对三名学者（上层西侧1人、地下一层东西各1人）使用「探查」，再到最底层左侧梯子触发暗门剧情。"
    },
    {
      "id": "montwise_arena",
      "name": "蒙特维斯·地下竞技场",
      "en": "Montwise: Underground Arena",
      "type": "town",
      "pos": [74.8, 34.9],
      "level": "15-50",
      "desc": "斗士们以性命相搏的地下竞技场，光第2章的舞台。",
      "story": ["光 第2章"],
      "boss": [
        { "name": "百尸 班德拉姆", "en": "Bandelam the Reaper", "level": "15", "weakness": ["枪", "短剑", "斧", "火", "光"], "tips": "盾6→8→10。开局常用「盾击+死神」组合，并封锁枪/斧/光，只能靠短剑/火破盾；每次破盾后切换弱点，进入红血后每回合行动2次并公开全部弱点。物理输出为主，用商人「雇佣兵」提升全队防御、盗贼降物攻，配合泰米诺斯底力无视弱点削盾" },
        { "name": "尤莉娜斯", "en": "Yurinas", "level": "建议50左右", "weakness": ["剑", "短剑", "斧", "冰", "风"], "tips": "支线「斗技大会之王」的单挑对手，HP约30000、6盾。会使用「疾风斩」多段攻击、降速连击、自身加速加回避；中途发动「不再留手」永久每回合2动且盾变8。输了支线也照样完成，击败可得冠军腰带" }
      ],
      "treasures": [
        { "item": "暗闇粉瓶（Bottle of Blinding Dust）", "how": "光第2章剧情中，向登记员报名进入斗场后在西侧" },
        { "item": "隐藏物：活力石榴（大）", "how": "向白天登记员旁的士兵探听，位于竞技场西侧" },
        { "item": "隐藏物：命中强化坚果（Sharp Nut）", "how": "向夜晚登记员旁的观众探听，位于竞技场东侧" }
      ],
      "npcs": [
        { "name": "士兵", "item": "还魂橄榄、阔剑（Broadsword）、铁盾（Iron Shield）", "method": "偷窃/购买", "note": "白天，登记员旁" },
        { "name": "观众（武器店旁）", "item": "手帕、全体回复葡萄、活力石榴（大）", "method": "偷窃/购买", "note": "白天，探听得「轻松挑战」" },
        { "name": "斗士×2（夜）", "item": "斩魔刀（Evil Slayer）、救赎念珠、毒粉瓶、扩散剂、回春果酱", "method": "抢夺/挑战", "note": "武器店南侧，探听可解锁新装备" },
        { "name": "懦弱的青年（夜）", "item": "长剑、衰弱之花、苏醒药草", "method": "抢夺/挑战", "note": "东侧观战区，支线「斗技大会之王」中需击倒他" },
        { "name": "尤莉娜斯", "item": "—", "method": "挑战", "note": "支线完成后出现在观众席左侧，可挑战学习技能；但冠军腰带需通过登记员进入斗场挑战才稳定掉落" }
      ],
      "shops": [
        "武器防具店（上层右侧）：阔剑 7000、斗士弯刀 11000、战士之剑 22000（需情报）、长柄斧（War Grave）7500、三叉戟（Fuscina）21000（需情报）、刺针短剑 20000、斗士短剑（需情报）35000、羽毛盾 6900、卡西乌斯 2100、斗士装束 3900"
      ],
      "tips": "光第2章大部分战斗为光单人上阵，建议光本人达到Lv15以上；连战之间可回城住旅馆。支线「斗技大会之王」需通关光第2章后才出现。"
    },
    {
      "id": "forsaken_graveyard",
      "name": "无缘墓地",
      "en": "Forsaken Graveyard",
      "type": "dungeon",
      "pos": [73.4, 46.5],
      "level": "40",
      "desc": "蒙特维斯南侧地下的废弃墓地，最深处由强敌食梦者守护着传说武器。",
      "story": [],
      "boss": [
        { "name": "食梦者", "en": "Devourer of Dreams", "level": "40+", "weakness": ["阶段1：剑/斧/杖/风", "阶段2：枪/弓/杖/风", "阶段3：火/冰/风", "阶段4：短剑/弓/风/暗"], "tips": "10盾，HP约55000。开场用「梦之邀约」隐藏我方行动顺序（Boss自身仍可见），还会用群体睡眠/混乱、恐惧等异常。弱点分四阶段变化：①剑/斧/杖/风 ②枪/弓/杖/风 ③火/冰/风 ④短剑/弓/风/暗——全程有「风」弱点，带风属性攻击最稳。日食（Eclipse）前优先破盾，备好异常治疗与复活" }
      ],
      "treasures": [
        { "item": "再诞之杯（Grail of Life）", "how": "存档点南侧小桥向西，烛台雕像前。全队复活并完全回复，全游戏极少" },
        { "item": "即死耐性石（Vivifying Stone）", "how": "沿烛光主路下楼梯，长椅东侧" },
        { "item": "破暗猛击斧（Dark Slasher，物攻+197/暴击+58，暗属性攻击威力提升）", "how": "长椅西侧（北楼梯）" },
        { "item": "火之精灵石（特大）", "how": "西南方废墟房屋内梯子上到二楼" },
        { "item": "禁忌之剑（Forbidden Blade，物攻+322/速度+77，小概率提升目标物攻）", "how": "最南端台阶上的宝箱，需击败食梦者" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "入口在蒙特维斯道具店南侧、楼梯下水井旁的梯子。道中敌人较弱，Boss是难点。"
    },
    {
      "id": "underground_laboratory",
      "name": "地下研究室",
      "en": "Underground Laboratory",
      "type": "dungeon",
      "pos": [77.3, 21.9],
      "level": "36",
      "desc": "哈维教授藏在图书馆地底的秘密实验室，奥斯瓦尔德第4章的迷宫。",
      "story": ["奥斯瓦尔德 第4章"],
      "boss": [
        { "name": "悲叹魔像", "en": "Grieving Golem", "level": "36", "weakness": ["枪", "杖", "风", "光"], "tips": "盾7→14。第一阶段弱枪/杖/风/光，第二阶段变为剑/弓/冰/暗，崩坏阶段弱六种武器（此时战斗基本结束）。开场每回合2动，「溶解之暗」使目标每次行动扣HP/SP/BP，「哀嚎」降低属攻，所以别只靠奥斯瓦尔德魔法，改用多段物理（如枪的连刺、剑的猛攻）。发出紫色光芒代表下回合追加行动，务必优先破盾；后期「踩踏」盾变14并加行动" }
      ],
      "treasures": [
        { "item": "14000叶", "how": "进入后一直向右的小房间" },
        { "item": "噩梦瓶装（Bottled Nightmares）×2", "how": "向左两个房间内的两个宝箱" },
        { "item": "火之精灵石（特大）", "how": "再往前的长房间（可用于修复圣窗）" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "通关前无法进入。Boss前有一场嵌合体战，「畸形生物」会全体中毒，优先击倒；战后回存档点补给再进最深处。"
    },
    {
      "id": "abandoned_traverse",
      "name": "荒凉山道",
      "en": "Abandoned Traverse",
      "type": "field",
      "pos": [81.5, 32.8],
      "level": "30",
      "desc": "蒙特维斯东侧桥梁外的荒废山路，尽头是废教会。",
      "story": ["索洛奈 第3章（父亲篇）"],
      "boss": [],
      "treasures": [
        { "item": "毒粉瓶", "how": "进入后第一个岔路向左" },
        { "item": "活力石榴", "how": "过桥（遇见「父亲」处）后向北" },
        { "item": "守护者腰带（Guardian Amulet，物防+65）", "how": "过桥后南下，左侧小凹处的金色宝箱" },
        { "item": "冰之精灵石（大）", "how": "继续南下被迫右转，小洞窟内" }
      ],
      "npcs": [],
      "shops": [],
      "tips": ""
    },
    {
      "id": "abandoned_church",
      "name": "废教会",
      "en": "Abandoned Church",
      "type": "dungeon",
      "pos": [88.1, 28.5],
      "level": "31",
      "desc": "荒凉山道尽头的废弃教会，索洛奈与「父亲」对决之地。",
      "story": ["索洛奈 第3章（父亲篇）"],
      "boss": [
        { "name": "父亲", "en": "Father", "level": "31", "weakness": ["枪", "短剑", "斧", "风", "光"], "tips": "8盾、HP约58000，弱点不变。物理伤害很高且有全体降物攻/降速攻击，用盗贼降其物攻、剑士挑衅+反击承伤，配合神官群体回复。HP低于75%后，HP不足一半的角色会被标记，未及时回复会被「致命一击」秒杀；黄血后速度提升每回合2动，蓄力的「暗杀」为单体即死。可偷取回春果酱，商人可收取8000叶" }
      ],
      "treasures": [
        { "item": "全体治愈葡萄（Healing Grape Bunch）", "how": "入口右行越过第一道楼梯，讲台区南侧" },
        { "item": "玄黑匕首（Black Dagger，物攻+118/速度+55，小概率致盲）", "how": "讲台后方红色宝箱" },
        { "item": "全体醒神李子", "how": "回到楼梯上行绕过讲台，下来后向左" },
        { "item": "还魂橄榄（大）", "how": "存档点再向右" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "击败父亲后获得短剑「玛丽埃塔」。"
    },
    {
      "id": "western_merry_hills_pass",
      "name": "西梅里希尔斯山道",
      "en": "Western Merry Hills Pass",
      "type": "field",
      "pos": [68.2, 63.6],
      "level": "45",
      "desc": "从西蒙特维斯山道南下通往梅里希尔斯的短小山道，路边有摊位。",
      "story": ["阿格妮娅 第5章（途经）"],
      "boss": [
        { "name": "异国刺客（4人）", "en": "Foreign Assassin", "level": "45+", "weakness": ["Ⅰ：弓/火/光", "Ⅱ：剑/枪/弓", "Ⅲ：斧/冰/光", "Ⅳ：剑/杖/冰/风"], "tips": "夜晚在北侧梯子下方的死路出现，类似Boss战，一次出现4人，每人弱点不同（Ⅰ约4盾、Ⅱ5盾、Ⅲ3盾、Ⅳ5盾），建议逐个破盾击破；Ⅱ会削减最大HP，可优先处理，Ⅰ常用全体攻击。全部击败后可用帕尔提提欧的「雇佣」招募其为战斗助手（每次约50000叶，全体短剑大伤害并回复全队HP/SP）" }
      ],
      "treasures": [
        { "item": "治愈葡萄（大）", "how": "入口南行右侧" },
        { "item": "日纹之盾（Sun Shield，物防+91/属防+91，行动后回复HP）", "how": "过桥后上台阶，先进北侧洞窟到梯子处" },
        { "item": "睡眠治疗药草（Herb of Awakening）", "how": "再过一座桥时留意南侧" },
        { "item": "熟睡草（Herb of Serenity）", "how": "摊位北侧、进入梅里希尔斯前" }
      ],
      "npcs": [],
      "shops": [],
      "tips": ""
    },
    {
      "id": "merry_hills",
      "name": "梅里希尔斯",
      "en": "Merry Hills",
      "type": "town",
      "pos": [81.5, 68.6],
      "level": "0",
      "desc": "纹之地东南端举办「大庆典」的华丽城镇，阿格妮娅最终章的舞台。",
      "story": ["阿格妮娅 第5章"],
      "boss": [],
      "treasures": [
        { "item": "潜力恢复的荔枝（特大）", "how": "旅馆北上楼梯到酒馆，再向左过桥进入北侧房屋" },
        { "item": "沉默治疗药草", "how": "北侧桥左边、前往祭殿入口的地图切换处附近" },
        { "item": "隐藏物：遗忘之帽（Forgotten Hat）", "how": "向戴软呢帽男子北侧的老人探听" },
        { "item": "隐藏物：回避强化坚果", "how": "向入口处卖面包的少女探听，位于左侧楼梯上" },
        { "item": "隐藏物：沉默耐性石（Articulate Stone）", "how": "向入口右侧的女性探听，位于北侧" }
      ],
      "npcs": [
        { "name": "商人（绿帽）", "item": "钻石短剑（Diamond Dagger）", "method": "偷窃/购买", "note": "入口少女南侧。此时期顶级短剑；探听可解锁新装备" },
        { "name": "女性（入口右侧左边）", "item": "疾风斗篷（Quick Cloak）", "method": "偷窃/购买", "note": "加速度，适合索洛奈" },
        { "name": "女性（入口右侧右边）", "item": "暴风护符（Tempest Amulet）", "method": "偷窃/购买", "note": "探听得旅馆内隐藏的随性之叶" },
        { "name": "诗人（橙发）", "item": "魔力坚果（大）", "method": "偷窃/购买", "note": "主街北段右侧" },
        { "name": "男子（士兵前）", "item": "狂暴之兽（Raging Beast，弓）", "method": "偷窃/购买", "note": "主街北段" },
        { "name": "士兵", "item": "—", "method": "探听", "note": "可得「盗窃技巧」" },
        { "name": "酒馆外女性", "item": "—", "method": "探听", "note": "可得旅馆折扣" },
        { "name": "莱拉（Laila）", "item": "—", "method": "—", "note": "完成阿格妮娅故事后出现，支线「Laila's Next Chapter」委托人" }
      ],
      "shops": [
        "武器防具店：专家之弓、猎鹰外套、华丽短剑、破坏者之刃、疾风盾、闪耀头冠、华丽舞衣、守护手环等",
        "道具店：暴击坚果（中）、还魂橄榄（大）、各类药草与扩散剂"
      ],
      "tips": "入城即可开始阿格妮娅第5章；若不在队伍中可到酒馆「听故事」触发。"
    },
    {
      "id": "merry_hills_shrine_entrance",
      "name": "梅里希尔斯·祭殿入口",
      "en": "Merry Hills: Shrine Entrance",
      "type": "town",
      "pos": [77.9, 64],
      "level": "0",
      "desc": "乌尔斯特拉祭殿前的广场，夜晚聚集大量表演者与观众。",
      "story": ["阿格妮娅 第5章"],
      "boss": [],
      "treasures": [
        { "item": "2700叶", "how": "广场西侧（白天女性南侧）" },
        { "item": "体力项链（Empowering Necklace，最大HP+1000）", "how": "广场东北角" },
        { "item": "隐藏物：活力石榴（特大）", "how": "向白天广场西侧的女性探听，位于她北侧" },
        { "item": "隐藏物：华丽舞台装（Ornate Costume）", "how": "向夜晚的设计师探听，位于东北" }
      ],
      "npcs": [
        { "name": "入口NPC", "item": "光之坚果（大）", "method": "偷窃/购买", "note": "白天，广场入口正前方" },
        { "name": "歌手×2（夜）", "item": "暴击坚果（大）、魔力坚果（大）", "method": "抢夺", "note": "广场左侧" },
        { "name": "人体雕像旁的观众（夜）", "item": "属性护符（Elemental Ward）", "method": "抢夺", "note": "非常好用的饰品" },
        { "name": "男子（夜）", "item": "体力坚果（大）（Nourishing Nut (L)）", "method": "抢夺", "note": "歌手左侧" },
        { "name": "舞者（夜）", "item": "华丽舞台装", "method": "抢夺", "note": "广场右侧，探听得「无法抗拒的魅力」" },
        { "name": "乐师（白天）", "item": "唱片「Critical Clash I」「Critical Clash II」", "method": "偷窃/购买", "note": "北侧入口附近，留声机用" },
        { "name": "年轻收藏家", "item": "神秘箱子（Mysterious Box）", "method": "偷窃/购买", "note": "东北角，取得箱子即触发支线「神秘的箱子」" }
      ],
      "shops": [],
      "tips": "阿格妮娅第5章中需在此对吉尔使用「诱惑」并带到钢琴前制造骚动。"
    },
    {
      "id": "shrine_of_ulsterra",
      "name": "乌尔斯特拉祭殿",
      "en": "Shrine of Ul'sterra",
      "type": "dungeon",
      "pos": [79.5, 58.4],
      "level": "45",
      "desc": "大庆典的会场所在，满是观众的古代祭殿，仅在阿格妮娅第5章开始后可进入。",
      "story": ["阿格妮娅 第5章"],
      "boss": [],
      "treasures": [
        { "item": "回春果酱（Refreshing Jam）", "how": "入口最左侧拱门下楼梯" },
        { "item": "元素增幅器（Elemental Augmentor，属攻+100）", "how": "果酱宝箱右侧墙壁是隐藏通道，向东走到底" },
        { "item": "华丽的演出服（Resplendent Costume，物防+130/属防+169/回避+78）", "how": "北侧存档点正北、出口楼梯旁" },
        { "item": "血染的匕首（Bloodstained Knife，物攻+290，恢复造成伤害25%的HP）", "how": "北侧柱列处右转，沿小路南下到梯子，爬上观众席上方的桥" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人多为机械系（魔导机兵Mk.II等）与巨鹰，弓/枪对多数敌人有效。"
    },
    {
      "id": "stage_of_the_moon_and_sun",
      "name": "月与太阳的舞台",
      "en": "Stage of the Moon and Sun",
      "type": "dungeon",
      "pos": [82.9, 57.6],
      "level": "45",
      "desc": "大庆典「恩惠之祭」的主舞台，阿格妮娅与多尔西妮娅的最终对决之地。",
      "story": ["阿格妮娅 第5章"],
      "boss": [
        { "name": "多尔西妮娅", "en": "Dolcinaea", "level": "45", "weakness": ["枪", "短剑", "弓", "雷", "暗"], "tips": "6盾，每回合2动。「抢戏」会把一名角色暂时踢出战斗，「舞台礼仪」封印单体攻击；会召唤「多尔西妮娅的粉丝」（弱弓/杖/风/暗），粉丝在场时她只剩弓与暗弱点。弓弱点始终有效，猎人「精准射击」+商人给BP最稳；要击杀粉丝请在她破盾之前进行。蓄力「独唱会」可让全队昏迷数回合" },
        { "name": "巨星 多尔西妮娅", "en": "Dolcinaea the Star", "level": "45", "weakness": ["剑", "短剑", "斧", "火", "风"], "tips": "8盾。开场「月步」强化自身并2动，之后有群体火、睡眠+死亡倒数、沉默、吸干SP等；「爱的提线木偶」会夺走一名队友（需把他打倒才能夺回，期间她只剩短剑与风弱点）；「安可」强化歌曲，后期每回合3动。准备卡丝蒂的调合或药草清除异常，用阿格妮娅的狮子舞+底力加速破盾" }
      ],
      "treasures": [
        { "item": "24000叶", "how": "进入舞台区域后先别上台，地图右侧柱子后方" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "第一战胜利后阿格妮娅习得EX技能「希望之歌」，并回满状态进入第二战。"
    }
  ],

  "roads": [
    ["flamechurch", "flamechurch_pilgrims_way"],
    ["flamechurch_pilgrims_way", "flamechurch_cathedral_entrance"],
    ["flamechurch_cathedral_entrance", "flamechurch_cathedral"],
    ["flamechurch_cathedral_entrance", "cathedral_cellars"],
    ["flamechurch", "eastern_flamechurch_pass"],
    ["eastern_flamechurch_pass", "borderfall"],
    ["borderfall", "altar_of_the_flamebringer"],
    ["borderfall", "seat_of_the_water_sprite"],
    ["borderfall", "western_montwise_pass"],
    ["western_montwise_pass", "northern_montwise_pass"],
    ["western_montwise_pass", "montwise"],
    ["western_montwise_pass", "western_merry_hills_pass"],
    ["montwise", "montwise_library"],
    ["montwise_library", "underground_laboratory"],
    ["montwise", "montwise_arena"],
    ["montwise", "forsaken_graveyard"],
    ["montwise", "abandoned_traverse"],
    ["abandoned_traverse", "abandoned_church"],
    ["western_merry_hills_pass", "merry_hills"],
    ["merry_hills", "merry_hills_shrine_entrance"],
    ["merry_hills_shrine_entrance", "shrine_of_ulsterra"],
    ["shrine_of_ulsterra", "stage_of_the_moon_and_sun"]
  ],

  "links": [
    {"from": "eastern_flamechurch_pass", "region": "winterlands", "to": "eastern_cape_cold_snows"},
    {"from": "eastern_flamechurch_pass", "region": "brightlands", "to": "western_cb_highroad"},
    {"from": "northern_montwise_pass", "region": "winterlands", "to": "southern_stormhail_snows"}
  ],

  "story": [
    {
      "title": "泰米诺斯 第1章（弗拉姆教堂）",
      "character": "泰米诺斯",
      "location": "flamechurch",
      "level": "1",
      "summary": "审问官泰米诺斯在弗拉姆教堂与圣堂骑士克里克相识，随后教皇在大圣堂遇害。两人夜间无法从正门进入大圣堂，只能借地下通道潜入，并在圣堂内与魔兽对决。本章教学夜间行动「胁迫」与底力。",
      "steps": [
        "在弗拉姆教堂观看开场剧情，与克里克同行前往巡礼路",
        "巡礼路途中克里克正式入队，沿途开宝箱（洞窟水池里有精神戒指）",
        "到达大圣堂前（夜晚），对建筑师瓦多斯使用「胁迫」（弱光，圣光两次即可）得知地下通道",
        "顺手打开瓦多斯身后房屋内的暗之精灵石宝箱，从东北小屋梯子下到大圣堂地下",
        "地下迷宫取光之精灵石、SP李子、朝圣者之杖（雕像背后隐藏路），爬梯子进入大圣堂",
        "大圣堂内取还魂橄榄与光之精灵石，存档后走向祭坛迎战费尔瓦格"
      ],
      "boss": "费尔瓦格（弱点：剑、光）",
      "tips": "圣斩降属防后接BP满的圣光伤害最高。Boss「锁定泰米诺斯」后用克里克「掩护」或泰米诺斯底力「审判」破盾。击败掉落全体回复葡萄。"
    },
    {
      "title": "泰米诺斯&索洛奈 交汇篇 上篇（弗拉姆教堂）",
      "character": "泰米诺斯、索洛奈",
      "location": "flamechurch_cathedral",
      "level": "16",
      "summary": "索洛奈听说大圣堂内藏有名为「阿尔帕特斯」的宝藏，拉着泰米诺斯一起调查。两人从一位装糊涂的前木匠口中得知教皇房间的暗门，最终在屋顶上方的房间里找到的「宝藏」却是一名女子，并获得「模糊的镜子碎片」。",
      "steps": [
        "需先完成泰米诺斯第2章与索洛奈第2章；两人在队时进入弗拉姆教堂触发（或到酒馆触发）",
        "夜晚对礼拜堂阶梯东北的「健忘老人」使用泰米诺斯的胁迫（弱杖）",
        "切换为白天，用泰米诺斯「引导」老人（前木匠），步行经巡礼路到大圣堂（不能快速移动）",
        "进入大圣堂右侧的教皇房间，老人推开书架露出暗门",
        "沿屋顶梁架向西，途中下楼梯取天使的戒指，再爬梯子进入顶部房间结束本篇"
      ],
      "boss": "无（仅有胁迫小战斗）",
      "tips": "下篇在港湾之地康宁湾，需完成两人各自的全部故事后解锁。"
    },
    {
      "title": "光 第2章（蒙特维斯·地下竞技场）",
      "character": "光",
      "location": "montwise_arena",
      "level": "15",
      "summary": "为寻找旧友军师卡赞，光来到蒙特维斯，却在地下竞技场与欠下巨债的卡赞重逢，被迫为他出战。光一路击败斗士、屠夫杰托，最终对上竞技场冠军「百尸」班德拉姆；卡赞借机夺下竞技场主人博尔诺的产业，答应回归光的阵营。",
      "steps": [
        "进入蒙特维斯即可开始（或在酒馆「听故事」触发），沿城东螺旋楼梯下到地下竞技场",
        "白天对斗士使用「挑战」（弱枪），可学到斧技「猛击」",
        "向登记员报名，挑战斗士小组（剑/斧/枪弱点交错），获胜得勇气药草与还魂橄榄（中）",
        "回旅馆休整后再报名，挑战屠夫杰托（弱剑/暗/枪/斧），可学枪技「迟缓横扫」",
        "挑战班德拉姆（单挑，弱枪/光/火/斧），胜利后暴动开始，全队对战真正的班德拉姆"
      ],
      "boss": "百尸 班德拉姆（弱点：枪、短剑、斧、火、光）",
      "tips": "除最终战外光都是单人作战，光自身需Lv15以上。最终战盾数6→8→10且每次破盾切换弱点，红血后2动；准备强力回复与防御增益，光的底力「天烈斩」留到破盾时输出。"
    },
    {
      "title": "索洛奈 第3章 父亲篇（蒙特维斯·废教会）",
      "character": "索洛奈",
      "location": "abandoned_church",
      "level": "31",
      "summary": "索洛奈依约来到蒙特维斯与「蛇父」见面。父亲在荒凉山道的桥上向她讲述与她生母有关的往事，随后在废教会揭晓真相并与她决一死战。",
      "steps": [
        "需完成索洛奈第2章父亲篇（冬之地凛芬镇）；进入蒙特维斯触发",
        "从城镇东侧桥梁进入荒凉山道，在桥上与父亲对话",
        "沿途取守护者腰带（南侧小凹处金色宝箱）、冰之精灵石（大）等",
        "抵达废教会，取玄黑匕首（讲台后）等宝箱，存档后在最深处迎战父亲"
      ],
      "boss": "父亲（弱点：枪、短剑、斧、风、光）",
      "tips": "被标记的低血量角色会被「致命一击」秒杀，务必保持全员半血以上；黄血后2动并有即死「暗杀」。胜利获得短剑「玛丽埃塔」（物攻高、加回避，小概率即死）。"
    },
    {
      "title": "奥斯瓦尔德 第4章（蒙特维斯·地下研究室）",
      "character": "奥斯瓦尔德",
      "location": "underground_laboratory",
      "level": "36",
      "summary": "为向仇敌哈维复仇，奥斯瓦尔德来到蒙特维斯大图书馆调查，发现通往哈维秘密研究室的暗门。在实验室深处，哈维放出以亡妻之血制造的魔像，而女儿艾莲娜竟称哈维为「爸爸」，奥斯瓦尔德的目的由复仇转为救出女儿。",
      "steps": [
        "进入图书馆，先在东侧上层书架顶取青金石杖",
        "对上层西侧1名、地下一层东西各1名学者使用「探查」收集情报",
        "到最底层左侧梯子附近触发剧情，发现地下研究室入口",
        "研究室内取14000叶、噩梦瓶装×2、火之精灵石（特大），与嵌合体战斗",
        "回存档点补给后进入最深处迎战悲叹魔像"
      ],
      "boss": "悲叹魔像（弱点：枪、杖、风、光 → 剑、弓、冰、暗）",
      "tips": "魔像会降低属攻并施加行动扣血/SP/BP的黑焰，物理多段攻击更稳定；准备大量BP回复（石榴）。悲叹魔像掉落还魂橄榄（特大）。"
    },
    {
      "title": "奥斯瓦尔德&帕尔提提欧 交汇篇 下篇（蒙特维斯）",
      "character": "奥斯瓦尔德、帕尔提提欧",
      "location": "montwise_library",
      "level": "45",
      "summary": "奥斯瓦尔德与帕尔提提欧应旧识雷古鲁斯之邀来看他的新发明，却发现望远镜因欠债被放贷人收走。两人打倒放贷人的打手，夺回改良望远镜，与雷古鲁斯一同观测夜空。",
      "steps": [
        "需完成交汇篇上篇（新德尔斯塔）以及奥斯瓦尔德、帕尔提提欧各自的全部故事",
        "进入蒙特维斯（或在酒馆）触发，到图书馆东北楼梯上方的研究室找到雷古鲁斯",
        "前往图书馆东侧的放贷人宅邸，击败门外三名打手",
        "进入宅邸再击败打手头目与两名打手",
        "夜晚用奥斯瓦尔德的「抢夺」对放贷人取回改良望远镜（弱短剑/斧/雷/光）"
      ],
      "boss": "放贷人（弱点：短剑、斧、雷、光）",
      "tips": "整体难度很低，奥斯瓦尔德的雷魔法可轻松应付。"
    },
    {
      "title": "阿格妮娅 第5章（梅里希尔斯·大庆典）",
      "character": "阿格妮娅",
      "location": "merry_hills",
      "level": "45",
      "summary": "阿格妮娅来到梅里希尔斯参加大庆典，旅途中的回忆已化为「希望之歌」。多尔西妮娅派人阻挠，但旅途中结识的伙伴纷纷相助，最终她登上月与太阳的舞台，与巨星多尔西妮娅一决高下。",
      "steps": [
        "经西梅里希尔斯山道进入梅里希尔斯触发（或在旅馆东北的酒馆「听故事」）",
        "击退两名雇来的打手（弱短剑/弓/风/暗）",
        "北上与旅行剧团等旧识重逢，在祭殿入口对吉尔使用「诱惑」带到钢琴前制造骚动",
        "进入乌尔斯特拉祭殿，取元素增幅器、华丽的演出服、血染的匕首等宝箱",
        "进入月与太阳的舞台，先取右侧柱子后的24000叶，存档后上台迎战多尔西妮娅（两连战）"
      ],
      "boss": "多尔西妮娅（弱点：枪、短剑、弓、雷、暗）→ 巨星 多尔西妮娅（弱点：剑、短剑、斧、火、风）",
      "tips": "第一战靠弓弱点稳定破盾；第二战重点是异常治疗与尽快打倒被「爱的提线木偶」夺走的队友。第一战后阿格妮娅习得EX技能「希望之歌」。"
    }
  ],

  "sidequests": [
    {
      "name": "朝圣者的安全",
      "en": "Pilgrim Protection",
      "location": "flamechurch",
      "trigger": "弗拉姆教堂礼拜堂西侧（礼拜堂旁房屋前）的长老",
      "steps": [
        "取得3支圣火蜡烛（偷窃/购买/抢夺等均可）",
        "①礼拜堂门前的神官（白天；夜晚在礼拜堂内）",
        "②礼拜堂右侧的神官（白天；夜晚在存档点左侧附近）",
        "③大圣堂前圣火旁的神官（白天；夜晚在墓地附近/大圣堂内祭坛旁）",
        "交给长老"
      ],
      "reward": "5000叶、强化坚果（Fortifying Nut）、物防强化坚果；完成后巡礼路点满蜡烛且不再遇敌",
      "difficulty": "易"
    },
    {
      "name": "圣窗的修复",
      "en": "Cathedral Window Repair",
      "location": "flamechurch_cathedral",
      "trigger": "完成泰米诺斯第1章后，大圣堂北侧祭坛旁的神官",
      "steps": [
        "收集火、冰、雷、风四种「特大」精灵石各1个（英文名带(L)）",
        "火（特大）：蒙特维斯图书馆西侧桌边的学者与市民（白天）；也可在地下研究室、无缘墓地宝箱获得",
        "雷（特大）：同上图书馆的学者与市民；也可向托托哈哈岛特洛甫霍普东侧海滩的渔夫师傅购买",
        "风（特大）：蒙特维斯园丁探听得隐藏物（图书馆外）",
        "冰（特大）：更早可向港湾之地卡纳尔布莱恩码头船旁的商人购买（阿格妮娅约14级可恳求）；也可向特洛甫霍普西北猫咪爱好者小屋旁的少年购买（约5985叶）",
        "交给神官"
      ],
      "reward": "8000叶、灵能之杖（Psychic Staff，属防很高）；完成后大圣堂出现新的巡礼者NPC",
      "difficulty": "中"
    },
    {
      "name": "穷困潦倒的研究者",
      "en": "Will Research for Money",
      "location": "montwise",
      "trigger": "蒙特维斯旅馆门前的章鱼学者",
      "steps": [
        "前往港湾之地康宁湾的酒馆，找到右侧的「章鱼爱好者」",
        "用引导/诱惑等带人行动把他带回蒙特维斯交给章鱼学者"
      ],
      "reward": "章鱼壶（Octopuff Pot）",
      "difficulty": "易"
    },
    {
      "name": "斗技大会之王",
      "en": "Tourney Champion",
      "location": "montwise_arena",
      "trigger": "通关光第2章后，竞技场入口上方步道（旅馆下一层）的担心的女性",
      "steps": [
        "夜晚进入地下竞技场，找到东侧观战区望着斗场的「懦弱的青年」",
        "用挑战/偷袭等击倒他，代替他上场",
        "单挑「不屈之刃」尤莉娜斯——胜负都会完成支线"
      ],
      "reward": "2000叶、强化果酱（BP/底力回复）；若击败尤莉娜斯额外获得冠军腰带（物攻+100、暴击+100、防止被偷袭）",
      "difficulty": "难"
    },
    {
      "name": "收集稀有书籍",
      "en": "Procuring Peculiar Tomes",
      "location": "montwise_library",
      "trigger": "蒙特维斯图书馆西北楼梯旁的「珍本专家」",
      "steps": [
        "《来自遥远地狱》：荒野之地克拉克雷吉东南被学者守着的房屋内宝箱（需击倒学者）",
        "《兽人岛见闻录》：托托哈哈岛兽人村存档点附近的异国旅人身上",
        "《巨壁的奇妙传说》：冬之地南斯托姆黑尔雪道存档点东侧的考古学家身上",
        "三本书交给珍本专家"
      ],
      "reward": "6500叶、司书护符（Librarian's Amulet）、回春果酱",
      "difficulty": "中"
    },
    {
      "name": "来自遥远地狱",
      "en": "From the Far Reaches of Hell",
      "location": "montwise_library",
      "trigger": "完成「旅行者的包」与「收集稀有书籍」后，夜晚在图书馆东南角找到阿尔",
      "steps": [
        "乘船从兽人之滨停泊处向北航行至分隔之海「无名岛」（Lv38）",
        "在岛上高处击败巨人（Gigantes）",
        "对出现的乔治·拉祖利使用探查/收买/探听/胁迫，获得情报「解读未知语言的方法」",
        "回图书馆告诉阿尔"
      ],
      "reward": "4500叶、纹章（Coat of Arms，物防/属防+100）；之后开启分隔之海「终焉之门」，阿尔离开图书馆",
      "difficulty": "中"
    },
    {
      "name": "神秘的箱子",
      "en": "A Mysterious Box",
      "location": "merry_hills_shrine_entrance",
      "trigger": "梅里希尔斯·祭殿入口东北角的年轻收藏家，取得其身上的「神秘箱子」即触发",
      "steps": [
        "用偷窃/购买等方式拿到神秘箱子",
        "带着箱子前往叶之地汀巴雷因南方的威洛斯家宅邸（Lv50）",
        "夜晚到二楼中央房间，把箱子交给「废墟中的女性」"
      ],
      "reward": "6666叶、死神镰刀（Reaper's Sickle）",
      "difficulty": "中"
    },
    {
      "name": "奥尔特的新篇章",
      "en": "Ort's Next Chapter",
      "location": "flamechurch_cathedral_entrance",
      "trigger": "完成泰米诺斯全部故事后，大圣堂前阶梯上的奥尔特",
      "steps": [
        "随奥尔特前往东北，看到可疑男子进入通往地下的小屋",
        "用索洛奈的偷袭或卡丝蒂的麻醉等击倒门口的可疑男子",
        "下到大圣堂地下，前往西侧雕像旁与奥尔特会合",
        "击败可疑男子们（弱枪/弓/火/光）"
      ],
      "reward": "10000叶、誓约之剑（Sword of Oaths，物攻+349/回避+104，小概率降低目标物攻）",
      "difficulty": "易"
    },
    {
      "name": "莱拉的新篇章",
      "en": "Laila's Next Chapter",
      "location": "merry_hills",
      "trigger": "完成阿格妮娅全部故事后（Game8称还需完成泰米诺斯故事），梅里希尔斯主街通往祭殿入口前左侧的莱拉",
      "steps": [
        "与莱拉对话观看舞蹈，她跑去参加舞蹈比赛后失意离开",
        "到主街上方的桥上找到莱拉触发剧情",
        "回到祭殿入口，在东侧找到逃跑的评审（戴高帽）",
        "用挑战/偷袭等战斗类行动击倒评审"
      ],
      "reward": "10000叶、莱拉的护身符（Laila's Amulet）",
      "difficulty": "易"
    }
  ],

  "items": [
    { "name": "冠军腰带", "en": "Champion's Belt", "type": "饰品", "location": "montwise_arena", "how": "支线「斗技大会之王」中击败尤莉娜斯；之后可通过登记员反复挑战她再次获得", "effect": "物攻+100、暴击+100，防止敌人偷袭" },
    { "name": "禁忌之剑", "en": "Forbidden Blade", "type": "武器", "location": "forsaken_graveyard", "how": "击败食梦者后开启最深处宝箱", "effect": "剑，物攻+322、速度+77，小概率提升目标物攻" },
    { "name": "再诞之杯", "en": "Grail of Life", "type": "道具", "location": "forsaken_graveyard", "how": "存档点南侧小桥向西的宝箱", "effect": "全队复活并完全回复，全游戏极少" },
    { "name": "破暗猛击斧", "en": "Dark Slasher", "type": "武器", "location": "forsaken_graveyard", "how": "长椅西侧宝箱", "effect": "斧，物攻+197、暴击+58，暗属性攻击威力提升" },
    { "name": "即死耐性石", "en": "Vivifying Stone", "type": "饰品", "location": "forsaken_graveyard", "how": "长椅东侧宝箱", "effect": "防止即死" },
    { "name": "返咒项圈", "en": "Blessing in Disguise", "type": "饰品", "location": "seat_of_the_water_sprite", "how": "东侧岔路下梯子到水底区域的宝箱", "effect": "其他装备的负面数值转为正面" },
    { "name": "生锈的杖", "en": "Rusty Staff", "type": "其他", "location": "seat_of_the_water_sprite", "how": "迷宫最深处中央平台的宝箱", "effect": "交给荒野之地格拉维尔的铁匠可锻造为神器之杖，装备后解锁武器大师技能" },
    { "name": "察知手环", "en": "Enlightening Bracelet", "type": "饰品", "location": "seat_of_the_water_sprite", "how": "进入后乘小舟向西到另一码头", "effect": "回避+50" },
    { "name": "誓约之剑", "en": "Sword of Oaths", "type": "武器", "location": "flamechurch_cathedral_entrance", "how": "支线「奥尔特的新篇章」奖励", "effect": "剑，物攻+349、回避+104，小概率降低目标物攻" },
    { "name": "纹章", "en": "Coat of Arms", "type": "饰品", "location": "montwise_library", "how": "支线「来自遥远地狱」奖励", "effect": "物防+100、属防+100" },
    { "name": "莱拉的护身符", "en": "Laila's Amulet", "type": "饰品", "location": "merry_hills", "how": "支线「莱拉的新篇章」奖励" },
    { "name": "死神镰刀", "en": "Reaper's Sickle", "type": "武器", "location": "merry_hills_shrine_entrance", "how": "支线「神秘的箱子」奖励" },
    { "name": "灵能之杖", "en": "Psychic Staff", "type": "武器", "location": "flamechurch_cathedral", "how": "支线「圣窗的修复」奖励", "effect": "杖，属防加成高" },
    { "name": "司书护符", "en": "Librarian's Amulet", "type": "饰品", "location": "montwise_library", "how": "支线「收集稀有书籍」奖励" },
    { "name": "章鱼壶", "en": "Octopuff Pot", "type": "其他", "location": "montwise", "how": "支线「穷困潦倒的研究者」奖励" },
    { "name": "玛丽埃塔", "en": "Marietta", "type": "武器", "location": "abandoned_church", "how": "索洛奈第3章父亲篇击败父亲后获得", "effect": "短剑，物攻高并加回避，小概率即死" },
    { "name": "玄黑匕首", "en": "Black Dagger", "type": "武器", "location": "abandoned_church", "how": "讲台后方红色宝箱", "effect": "短剑，物攻+118、速度+55，小概率致盲" },
    { "name": "守护者腰带", "en": "Guardian Amulet", "type": "饰品", "location": "abandoned_traverse", "how": "过桥后南下左侧小凹处的金色宝箱", "effect": "物防+65" },
    { "name": "血染的匕首", "en": "Bloodstained Knife", "type": "武器", "location": "shrine_of_ulsterra", "how": "观众席上方桥上的宝箱（阿格妮娅第5章中）", "effect": "短剑，物攻+290，回复造成伤害25%的HP" },
    { "name": "华丽的演出服", "en": "Resplendent Costume", "type": "防具", "location": "shrine_of_ulsterra", "how": "北侧存档点正北、出口楼梯旁", "effect": "物防+130、属防+169、回避+78" },
    { "name": "元素增幅器", "en": "Elemental Augmentor", "type": "饰品", "location": "shrine_of_ulsterra", "how": "左侧地下果酱宝箱旁的隐藏通道尽头", "effect": "属攻+100" },
    { "name": "誓言之弓", "en": "Engagement Bow", "type": "武器", "location": "montwise", "how": "酒馆旁房屋内，需依次击倒前斗士与前冠军（约Lv30）", "effect": "弓，物攻+197、速度+64，小概率降低目标回避" },
    { "name": "日纹之盾", "en": "Sun Shield", "type": "防具", "location": "western_merry_hills_pass", "how": "过桥上台阶后北侧洞窟内", "effect": "物防+91、属防+91，行动后回复HP" },
    { "name": "狙击项链", "en": "Unerring Necklace", "type": "饰品", "location": "northern_montwise_pass", "how": "过存档点后上木坡前向左到底", "effect": "命中+80" },
    { "name": "冰装头盔", "en": "Gelid Helm", "type": "防具", "location": "western_montwise_pass", "how": "存档点北侧岩石下的宝箱", "effect": "物防+21、属防+18，减轻冰属性伤害" },
    { "name": "体力项链", "en": "Empowering Necklace", "type": "饰品", "location": "merry_hills_shrine_entrance", "how": "广场东北角宝箱", "effect": "最大HP+1000" },
    { "name": "天使的戒指", "en": "Angel's Ring", "type": "饰品", "location": "flamechurch_cathedral", "how": "交汇篇「泰米诺斯&索洛奈 上篇」中屋顶梁架下方的宝箱", "effect": "最大SP+30、属防+20" },
    { "name": "影弓", "en": "Shadow Bow", "type": "武器", "location": "borderfall", "how": "存档点向西上台阶后向右穿过岩石", "effect": "弓，物攻+55、属攻+55，小概率致盲" },
    { "name": "钻石短剑", "en": "Diamond Dagger", "type": "武器", "location": "merry_hills", "how": "偷窃/购买入口南侧绿帽商人", "effect": "后期强力短剑" },
    { "name": "疾风斗篷", "en": "Quick Cloak", "type": "防具", "location": "merry_hills", "how": "偷窃/购买入口右侧的女性", "effect": "提升速度，适合索洛奈" },
    { "name": "属性护符", "en": "Elemental Ward", "type": "饰品", "location": "merry_hills_shrine_entrance", "how": "夜晚抢夺人体雕像旁的观众" },
    { "name": "纹章大盾", "en": "Crested Greatshield", "type": "防具", "location": "montwise", "how": "向夜晚入口守卫探听后在城镇东侧拾取隐藏物；或偷窃白天入口守卫" },
    { "name": "冠军之剑", "en": "Champion's Sword", "type": "武器", "location": "montwise", "how": "偷窃/购买/挑战白天入口守卫（实力极强）" },
    { "name": "精神戒指", "en": "Stimulating Ring", "type": "饰品", "location": "flamechurch_pilgrims_way", "how": "巡礼路洞窟水池东北码头宝箱；国境大瀑布神官公会也可偷到", "effect": "最大SP+30" },
    { "name": "朝圣者之杖", "en": "Pilgrim Rod", "type": "武器", "location": "cathedral_cellars", "how": "大雕像背后隐藏小路的宝箱", "effect": "杖，物攻+9、属攻+10，泰米诺斯前期升级" },
    { "name": "青金石杖", "en": "Lapis Rod", "type": "武器", "location": "montwise_library", "how": "图书馆东侧上层书架顶宝箱；国境大瀑布神官公会的神官也持有", "effect": "杖，物攻+29、属攻+59、属防+14" },
    { "name": "神官证", "en": "Cleric License", "type": "职业证", "location": "borderfall", "how": "与神官公会会长对话获得第1张；公会任务交付「高位神官的护符」（叶之地星落之泉）与「高位神官的经典」（冬之地地狱之城Lv55）各再得1张，最多3张" }
  ],

  "jobs": [
    { "name": "神官", "en": "Cleric", "location": "borderfall", "how": "国境大瀑布存档点向西北，过南北向长吊桥后进入北端教会，与神官公会会长对话即得神官证。追加证书：①交付星落之泉（叶之地，Lv15）的「高位神官的护符」②交付地狱之城（冬之地，Lv55）的「高位神官的经典」。同一教会内的门通往圣火神祭坛" }
  ],

  "tips": [
    "纹之地没有隐藏职业：发明家在明之地东新德尔斯塔街道、武器大师在荒野之地格拉维尔、咒术师在日之野库国五重塔、魔术师在分隔之海失落之岛。但水灵之座的「生锈的杖」是武器大师的技能素材。",
    "修复圣窗所需的四种特大精灵石，本区就能凑齐三种：蒙特维斯图书馆学者（雷、火）、园丁情报（风）、地下研究室/无缘墓地宝箱（火）；冰需到托托哈哈岛特洛甫霍普。",
    "冠军腰带可刷：完成「斗技大会之王」后通过竞技场登记员可反复挑战尤莉娜斯（可任选一名队员出战），击败后几乎必定获得腰带，可为多名角色各刷一条。",
    "前往冬之地斯托姆黑尔（光第4章、泰米诺斯第3章斯托姆黑尔路线）必须经西蒙特维斯山道北端，并先用战斗类行动击倒守门士兵。",
    "西梅里希尔斯山道夜晚的4名异国刺客全部击败后，可用帕尔提提欧「雇佣」招募为战斗助手。",
    "梅里希尔斯与祭殿入口夜晚可抢到大量「（大）」属性坚果（暴击、魔力、体力、光）与属性护符，是角色永久强化的好去处。",
    "弗拉姆教堂入口的老人和蒙特维斯入口守卫都是强度极高的NPC，前期千万不要贸然挑战。"
  ]
});

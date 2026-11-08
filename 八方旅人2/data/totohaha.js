OT2.addRegion({
  "id": "totohaha",
  "name": "托托哈哈岛",
  "en": "Toto'haha",
  "continent": "east",
  "levelRange": "1-50",
  "starter": "奥修特（猎人）",
  "intro": "托托哈哈岛是分隔之海上的群岛，由北边的哈哈岛与南边的托托岛组成，是猎人奥修特的出身地。南岛有兽人与人类共居的兽人村、最大的聚落特洛甫霍普（浮游剧场与造船厂），以及往返卡纳尔布莱恩与新德尔斯塔的渡船停泊所；北岛则是水没遗迹遍布的高等级区域，深处有兽人的无名村与迷失之森。",
  "highlights": [
    "特洛甫霍普造船厂：帕尔提提欧花100000叶买下船只，解锁分隔之海航行（洛克岛、恶食之巢、魔途之岛等都需要船）",
    "西特洛甫霍普古道的猎人公会（猎人职业证）与狩王女祭坛（奥修特EX技能「Indomitable Beast」）",
    "特洛甫霍普猫咪爱好者家中的「凯特琳的木天蓼」大幅提高凯特（经验/金钱怪）遭遇率，练级神器",
    "海鸣洞穴（Lv48）的猛兽之弓、JP增幅器，沉没遗迹（Lv46）的海神之枪（攻击次数+1）与武器大师用生锈的弓",
    "通关后偷窃NPC：兽人村科哈泽「身经百战之弓」、无名村希尔卢托「身经百战之斧」，都是顶级武器",
    "泰米诺斯最终章途中的古代仪式假面（行动后回复SP）与神圣之杖（光属性强化）"
  ],
  "locations": [
    {
      "id": "beasting_bay_anchorage",
      "name": "兽人海滩停泊所",
      "en": "Beasting Bay: Anchorage",
      "type": "port",
      "pos": [26.2, 57.5],
      "level": "5/8/11",
      "desc": "托托岛北岸的渡船停泊所，渡船往返卡纳尔布莱恩（港湾之地）与新德尔斯塔港停泊所（明之地）；买船后也可从此出海。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "沉睡草（Slumber Sage）", "how": "东侧海面上的小岛" },
        { "item": "治愈葡萄(M)", "how": "东侧悬崖上" }
      ],
      "npcs": [
        { "name": "渡船工作人员（Ferry Staff）", "item": "白色粉末瓶（港湾之地支线「旅人的失物」所需）、手帕、沉甸甸的钱袋", "method": "偷窃/购买", "note": "白天，码头上" },
        { "name": "岛民（Islander）", "item": "战斗长柄（War Glaive）、活力石榴", "method": "偷窃/购买", "note": "船只南侧" }
      ],
      "shops": [],
      "tips": "东侧出口通往西特洛甫霍普古道，南侧接北兽人古道。沿海滩找到码头划独木舟，可去北方小岛上的海鸣洞穴（Lv48，初期别去）。海上以北是魔途之岛（Nameless Isle，分隔之海）。"
    },
    {
      "id": "north_beasting_traverse",
      "name": "北兽人古道",
      "en": "North Beasting Traverse",
      "type": "field",
      "pos": [29.5, 73.4],
      "level": "5/8/11",
      "desc": "连接停泊所与兽人村的初期道路，奥修特离开故乡后的第一条野外路线。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "醒神李子（大）", "how": "停泊所南边的海滩向西，小遗迹内" },
        { "item": "底力荔枝", "how": "海滩左侧" },
        { "item": "风之精灵石", "how": "底力荔枝宝箱东侧的楼梯上" },
        { "item": "战斧（War Axe）", "how": "南部存档点前岔路走下方路，从存档点下方穿过到小海滩" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "以奥修特开局并完成第1章后，夜晚会在此遇到支线「旅人的行囊」。敌人为岛蛙人、Lloris等，弱短剑/斧/雷居多。"
    },
    {
      "id": "beasting_village",
      "name": "兽人村",
      "en": "Beasting Village",
      "type": "town",
      "pos": [22.6, 81.6],
      "level": "",
      "desc": "奥修特的故乡，西侧是兽人聚落、东侧是人类聚落，两族关系微妙。",
      "story": ["奥修特 第1章", "奥修特 第3章"],
      "boss": [
        { "name": "暗黑之物", "en": "Dark Entity", "level": "1-5", "weakness": ["短剑", "斧", "雷", "风"], "tips": "奥修特第1章最终战，发生在村南。4盾，破防后会召唤神秘雏鸟（1盾，弱弓）并「吞噬」它们强化，随后蓄力「暗之风暴」。尽快清掉雏鸟（岛蛙人II的技能可一口气击晕）即可避免蓄力；潜力「野兽本能」解锁后用「野兽之牙」收尾。掉落醒神李子篮。" }
      ],
      "treasures": [
        { "item": "强化果酱（Reinforcing Jam）、完美肉干、抗性坚果(L)", "how": "西侧兽人区被守卫兽人挡住的粮仓小屋内（守卫很强，建议突袭）" },
        { "item": "大弓（Giant Bow）", "how": "击倒东侧人类区井后瞭望塔前的村民（较弱），登塔开箱" },
        { "item": "1800叶", "how": "人类区北侧最大的小屋内" },
        { "item": "皮革小圆盾（Leather Buckler）", "how": "隐藏物品：探听人类区入口旁的村民后出现在西侧木箱堆旁" },
        { "item": "灵敏戒指（Sprightly Ring）", "how": "隐藏物品：探听道具店内的村民后出现在酒馆旁" }
      ],
      "npcs": [
        { "name": "入口处兽人×2", "item": "滋养坚果、伐木大斧、奇想叶；情报：西侧楼梯旁的隐藏上等肉干", "method": "偷窃/探听", "note": "白天，兽人区入口" },
        { "name": "兽人女孩", "item": "爱之护身符（Amulet of Affection，支线「架起桥梁」所需）、树果、梅子叶", "method": "偷窃/购买", "note": "白天，旅店平台下" },
        { "name": "旅店前兽人", "item": "狩猎装束（Hunting Attire）、暴击坚果", "method": "偷窃", "note": "白天" },
        { "name": "南侧悬崖夜岗兽人", "item": "昏迷石斧（Stupefying Stone Axe）、睡眠粉末瓶、雷之精灵石(M)；情报：挑衅高手", "method": "偷窃/探查", "note": "夜晚，强敌" },
        { "name": "外来旅人（Foreign Traveler）", "item": "兽人岛见闻录（Dispatches from Beastling Island，纹之地支线「搜集奇书」所需）、旅人之弓", "method": "偷窃/购买", "note": "白天存档点附近" },
        { "name": "武器店前村民", "item": "无名之剑（Nameless Sword）、满银钱袋；探查后武器店「新装备上架」", "method": "偷窃/探查", "note": "白天，战斗力较强" },
        { "name": "陷阱猎人（Trapper）", "item": "毒粉末瓶、强力耳环", "method": "偷窃", "note": "白天道具店旁" },
        { "name": "道具店内村民", "item": "羽毛帽、刺激耳环；情报：酒馆旁的隐藏灵敏戒指", "method": "偷窃/探听", "note": "白天" },
        { "name": "人类区南侧夜岗村民", "item": "铁剑、毒粉末瓶、暗之精灵石(M)", "method": "偷窃", "note": "夜晚" },
        { "name": "尤瓦（Juvah）", "item": "上等肉干、极上肉干", "method": "偷窃", "note": "白天村西北海角，奥修特的师父" },
        { "name": "科哈泽（Cohazeh）", "item": "身经百战之弓（Battle-Tested Bow）、猩红守护石（Scarlet Stone of Protection）", "method": "偷窃/购买", "note": "通关奥修特剧情后，白天在人类区最东侧小屋外" }
      ],
      "shops": [
        "兽人区：旅店与道具店只收肉干（Jerky），奥修特第1章期间只能使用兽人区",
        "人类区（通关奥修特第1章后开放）：道具店、武器店、酒馆。武器店有铁斧7000、银手斧22000、开拓者之斧（Frontier Axe）55000等（高价货需新装备上架）"
      ],
      "tips": "南出口通往「主兽墓所之路」，北出口接北兽人古道。奥修特第3章与终章都会回到这里。"
    },
    {
      "id": "path_to_the_tombs",
      "name": "通往主兽墓所之路",
      "en": "Path to the Tombs of the Wardenbeasts",
      "type": "field",
      "pos": [23.2, 91.5],
      "level": "1",
      "desc": "兽人村南方的森林小路，东通主兽墓所，西通决战之丘。",
      "story": ["奥修特 第1章", "奥修特 第3章"],
      "boss": [
        { "name": "鬣蜥王", "en": "King Iguana", "level": "1", "weakness": ["斧", "弓", "雷"], "tips": "奥修特第1章开场战，仅1盾，用伙伴的挑衅打弱点或直接攻击，削到低HP可捕获，之后可「料理」成30个肉干。" }
      ],
      "treasures": [
        { "item": "必中戒指（Unerring Ring）", "how": "向东走看到北侧楼梯，上去即是" },
        { "item": "醒神李子", "how": "瀑布泉水左侧码头乘独木舟向南到另一码头" },
        { "item": "肉干（Jerky）", "how": "瀑布东北方最东侧小支路" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "第1章中在此捕获岛蛙人与Lloris可大幅节省SP；奥修特会自动捕获低HP的敌人。第3章从第一个存档点南边的西向路进入决战之丘。"
    },
    {
      "id": "tombs_of_the_wardenbeasts",
      "name": "主兽墓所",
      "en": "Tombs of the Wardenbeasts",
      "type": "dungeon",
      "pos": [41.3, 89.2],
      "level": "5",
      "desc": "供奉历代主兽的古老墓所，奥修特第1章营救迷路少女之地，终章也会再访。",
      "story": ["奥修特 第1章", "终章：通往黎明之旅"],
      "boss": [
        { "name": "怪异魔物", "en": "Grotesque Monster", "level": "终章（约50+）", "weakness": ["斧", "弓", "冰", "光"], "tips": "终章限定。7盾，带两只扭曲之子（3盾，弱斧/弓）。以暗属性全体攻击为主，残血后再召唤扭曲之子并蓄力「暗之风暴」。装备暗之护符/宵暗辟邪符大幅减伤，用猎人精准射击破防。掉落黑弓（Black Bow）；战后让卡丝蒂与奥修特在队中，靠近北侧圣火台使用闪耀之镜。" }
      ],
      "treasures": [
        { "item": "骨头（Bone）", "how": "四岔路口向北上楼梯" },
        { "item": "复合弓（Composite Bow）", "how": "四岔路口南侧土坡下的西向路" },
        { "item": "锐利坚果（Sharp Nut）", "how": "东侧小岔路先往南" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "迷路少女不信任兽人，需夜晚用「交友」给她1个肉干带出墓所（肉干可从岛蛙人身上料理获得）。"
    },
    {
      "id": "summit_of_strife",
      "name": "决战之丘",
      "en": "Summit of Strife",
      "type": "dungeon",
      "pos": [6.6, 94.2],
      "level": "45",
      "desc": "兽人为「绯月之夜」布防的山丘，奥修特最终章的起点，入口在主兽墓所之路西侧。",
      "story": ["奥修特 第3章"],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "绯月升起后连续进行三场强制战：暗影马蝇、暗影狂暴菇（会连锁麻痹，务必尽快破防）、混合编队。丘上没有宝箱，也没有存档点（存档在随后的深绿之森）。之后进入深绿之森。"
    },
    {
      "id": "verdant_wood",
      "name": "深绿之森",
      "en": "Verdant Wood",
      "type": "dungeon",
      "pos": [10.6, 94.2],
      "level": "45",
      "desc": "奥修特最终章途经的森林，暗影魔物出没且无法逃跑。",
      "story": ["奥修特 第3章"],
      "boss": [],
      "treasures": [
        { "item": "活力石榴(L)", "how": "存档点后楼梯旁的洞穴里" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "暗影系敌人普遍弱光，战斗不能逃跑，记得每战后回复。林道很短：入口处有泰拉的短暂演出，存档点后楼梯旁只有一个洞穴（活力石榴(L)），再往前就是怒涛之岬。"
    },
    {
      "id": "stormy_cape",
      "name": "怒涛之岬",
      "en": "Stormy Cape",
      "type": "dungeon",
      "pos": [6.6, 98.2],
      "level": "45",
      "desc": "由多座吊桥连接的海岬，格拉西斯会造出向西的冰之捷径，北侧藏有多个宝箱。",
      "story": ["奥修特 第3章"],
      "boss": [],
      "treasures": [
        { "item": "霸者大斧（Axe of the Conqueror）", "how": "存档点北边第一座吊桥前的楼梯下，位于第二座吊桥下方" },
        { "item": "复苏果酱", "how": "第一座吊桥东端北侧" },
        { "item": "龙卷弓（Tornado Bow）", "how": "过第二座吊桥后西北岔路往西南" },
        { "item": "底力荔枝（特大）", "how": "第三座吊桥南侧岔路向左" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "不走冰之捷径而先往北可拿全部宝箱。霸者大斧：物攻+306、暴击+90；龙卷弓：物攻+295、速度+90、风属性威力提升。"
    },
    {
      "id": "moonview_cliff",
      "name": "望月断崖",
      "en": "Moonview Cliff",
      "type": "dungeon",
      "pos": [10.6, 98.2],
      "level": "45",
      "desc": "怒涛之岬西南阶梯之上的断崖，奥修特最终章决战之地。",
      "story": ["奥修特 第3章"],
      "boss": [
        { "name": "拉加卡尔 / 玛拉玛奥尔（悲月）", "en": "Lājackal / Malamaowl of the Sorrowful Moon", "level": "45", "weakness": ["阶段1：剑/斧/冰/风", "阶段2：弓/杖/风/暗", "阶段3：枪/短剑/火/雷/光"], "tips": "对手是第1章没被选中的那只（弱点栏为拉加卡尔三阶段；玛拉玛奥尔三阶段依次为 短剑/弓/火 → 枪/斧/杖/暗 → 剑/弓/冰/雷/光）。7盾，每次破防后变身并更换弱点，会「捕食」使一人HP降为1、降低全队BP，后期一回合三动并蓄力大招。开场阿克塔化身新卡塔拉克塔给予防御增益，伙伴也会成长。保持破防、解除减益，奥修特潜力输出。" }
      ],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "阶梯顶端有存档点，音乐中断即Boss将至。断崖上没有宝箱。胜利后奥修特习得EX技能「Provoke Beasts」。"
    },
    {
      "id": "western_tropuhopu_traverse",
      "name": "西特洛甫霍普古道",
      "en": "Western Tropu'hopu Traverse",
      "type": "field",
      "pos": [53.3, 61.5],
      "level": "16（随进度22/28/32）",
      "desc": "停泊所与特洛甫霍普之间的道路，北侧乘独木舟可通往哈哈岛，南侧有狩王女祭坛，西侧隐蔽林地有猎人公会。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "底力荔枝", "how": "进入后沿路右行（到路牌/存档点之前），留意画面下方的岔路" },
        { "item": "光之精灵石(M)", "how": "存档点后方四岔路口向东，上楼梯顶端" },
        { "item": "上等肉干", "how": "存档点北上再往西，猎人营地" },
        { "item": "灵敏手环（Sprightly Bracelet，速度+50）", "how": "四岔路口向北到湖边码头，在上码头前先往左上楼梯，墙头上的宝箱" },
        { "item": "治愈葡萄串", "how": "存档点向东，下楼梯到沙滩后立刻向南" }
      ],
      "npcs": [
        { "name": "老人（Elderly Man）", "item": "可召唤「治愈葡萄(M)」；光可学「Brain Bash」", "method": "挑战/引导", "note": "白天，猎人公会前断梯旁" },
        { "name": "药师（Apothecary）", "item": "恩典草芽（Herb-of-Grace Bud）", "method": "偷窃/购买", "note": "白天，四岔路口北侧碎石堆旁；药师追加职业证所需素材" },
        { "name": "兽人猎人（夜晚，公会内）", "item": "猛兽之弓（Raging Beast）", "method": "偷窃/购买", "note": "夜晚猎人公会内，强度8" }
      ],
      "shops": [],
      "tips": "猎人公会在四岔路口西侧、穿过灌木的隐蔽林地中，与公会长交谈即得猎人职业证。北上到需要划船处即进入南无名古道（Lv45）。"
    },
    {
      "id": "altar_of_the_huntress",
      "name": "狩王女祭坛",
      "en": "Altar of the Huntress",
      "type": "shrine",
      "pos": [66.4, 72],
      "level": "16（随进度22/28/32）",
      "desc": "猎人守护神的祭坛，入口是西特洛甫霍普古道东端沙滩上治愈葡萄串宝箱正下方（南侧）的隐藏小路。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "从存档点向东下楼梯到沙滩，拿完治愈葡萄串后直接向宝箱正下方走即是隐藏小路（亦可从特洛甫霍普城外大片沙地沿红花小径向南）。带奥修特前来习得EX技能「Indomitable Beast」：提升自身物攻、回避、速度3回合（Boost可延长至最多9回合）。"
    },
    {
      "id": "tropuhopu",
      "name": "特洛甫霍普",
      "en": "Tropu'hopu",
      "type": "town",
      "pos": [83.9, 56.7],
      "level": "",
      "desc": "托托哈哈岛最大的海边聚落，北区为浮游剧场（Floating Theater），东侧为造船厂（Shipyard），可在此购买船只。",
      "story": ["阿格妮娅 第3章", "帕尔提提欧 商机的气息：特洛甫霍普篇"],
      "boss": [],
      "treasures": [
        { "item": "活力石榴(M)", "how": "西侧码头划船绕到城镇西北的小岛" },
        { "item": "凯特琳的木天蓼（Cait Powder）", "how": "西北小屋，需击倒门口的猫咪爱好者" },
        { "item": "美丽珍珠（Pretty Pearl）", "how": "东北梯子下，需击倒把守梯子的岛民" },
        { "item": "头骨头盔（Skull Helm）", "how": "从上述梯子下的码头向北再向东划到小岛" },
        { "item": "底力荔枝（大）", "how": "造船厂码头旁" },
        { "item": "醒神李子（大）", "how": "浮游剧场：向西从中央平台下方通道往东，独自坐着的女性旁" }
      ],
      "npcs": [
        { "name": "渔夫师傅与爱睡的渔夫", "item": "大师鱼叉（Master Harpoon）、雷之精灵石（特大）（Thunder Soulstone (L)）、强力叶", "method": "偷窃/购买", "note": "白天东侧海滩；支线「睡过头的人」。雷之精灵石（特大）即纹之地「圣窗的修复」所需的雷（特大），game8.jp 把渔夫师傅列为该石的推荐来源" },
        { "name": "年轻男子（Young Man）", "item": "战士之剑（Warrior's Sword）、月贝项链", "method": "偷窃/购买", "note": "白天诗人北侧，强度极高，别轻易挑战" },
        { "name": "诗人（Poet）", "item": "还魂橄榄(M)、风之精灵石(M)、魅力长袍", "method": "偷窃", "note": "白天西侧道具店旁" },
        { "name": "渔妇（Fisherwoman）", "item": "美丽珍珠（支线「寻找珍珠」）、活力石榴(M)；情报：造船厂出口的隐藏稀有石", "method": "偷窃/探听", "note": "白天西侧码头" },
        { "name": "老人（Elderly Man）与工匠", "item": "启迪手镯、雷之精灵石、稀有石×2、鲜艳宝石；老人情报：西侧海滩的隐藏美丽珍珠", "method": "偷窃/探听", "note": "白天造船厂出口附近" },
        { "name": "岛民与兽人（夜晚）", "item": "神射手之弓（Marksman's Bow）、光之坚果(L)、美丽珍珠、还魂橄榄(M)等", "method": "偷窃", "note": "夜晚入口东侧" },
        { "name": "长椅上的岛民", "item": "活力石榴、底力荔枝（特大）；闲聊/探查后武器店「新装备上架」", "method": "偷窃/探查", "note": "白天酒馆西侧，很强" },
        { "name": "村长（Mayor）与商人", "item": "满银钱袋、治愈葡萄串、银框单片眼镜等；村长情报：旅店折扣", "method": "偷窃/探查", "note": "白天存档点北侧栈道" },
        { "name": "少女与学者（旅店外）", "item": "月贝手镯、光/暗之精灵石(M)、古钱币；少女可教「难以抗拒的魅力」", "method": "偷窃/探查", "note": "白天" },
        { "name": "药师（夜晚）", "item": "恩典草芽、强化血清、复苏果酱", "method": "偷窃", "note": "夜晚西侧码头" },
        { "name": "浮游剧场：街头小贩", "item": "还魂橄榄、盐渍海鲜；情报：辣味烤鸡食谱（兽人村支线所需）", "method": "偷窃/探听", "note": "白天剧场入口北侧，很强" },
        { "name": "浮游剧场：工匠", "item": "华丽纱丽（Gorgeous Sari）、强力手镯、活力石榴", "method": "偷窃", "note": "白天剧场西北小屋内" },
        { "name": "造船厂：泰莉（Terry）", "item": "未完成的船（100000叶）、船只改造券（20000叶）；完成商机后可偷强力之斧、强化血清", "method": "购买", "note": "白天，需帕尔提提欧在队" },
        { "name": "少年（猫咪爱好者小屋旁）", "item": "冰之精灵石（特大）（Ice Soulstone (L)）", "method": "偷窃/购买", "note": "白天，与水手同站在西北猫咪爱好者小屋旁，购买约5985叶。纹之地「圣窗的修复」可以用这颗冰（特大）；game8.jp 任务页更早的推荐来源是卡纳尔布莱恩码头商人（阿格妮娅约14级可恳求）" }
      ],
      "shops": [
        "武器防具店（酒馆左侧）：斩击长柄11000、重骨长枪22000、马格努斯短刀20000、骑士巨弓21000、幸运魔杖（Fortune Wand）33000、魅力长袍4800、灵敏戒指3000等（部分需新装备上架）",
        "旅店在东、酒馆在东北、道具店在西；造船厂在城东海滩尽头"
      ],
      "tips": "城镇被水道分割，西侧码头可乘独木舟绕到城下与外围小岛。支线「寻找珍珠」的三颗珍珠都在本镇。凯特琳的木天蓼可装备在饰品栏提高凯特遭遇率，配合高等级野外刷经验与金钱。"
    },
    {
      "id": "cavern_of_waves",
      "name": "海鸣洞穴",
      "en": "Cavern of Waves",
      "type": "dungeon",
      "pos": [32.3, 46.4],
      "level": "48",
      "desc": "停泊所北方海上小岛的可选迷宫，需从停泊所海滩码头划独木舟前往。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "盐渍海鲜", "how": "入口右路下到码头，向西划一小段" },
        { "item": "治愈葡萄串", "how": "存档点向西走到尽头" },
        { "item": "还魂橄榄(L)", "how": "回头第一个北向路，下一个岔路左转下楼梯" },
        { "item": "JP增幅器（JP Augmentor）", "how": "继续向东的岔路一直往东" },
        { "item": "猛兽之弓（Raging Beast，物攻+179/回避+56）", "how": "北路绕下楼梯到水边，右转后北侧隐藏通道" },
        { "item": "破灭的遗物（Ruinous Relic）×3", "how": "楼梯旁码头划船向北，洞窟最深处三个宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "无Boss，但敌人等级48，含胖凯特（经验多）、巨鳄（可偷恩典草芽）。初期千万别来。"
    },
    {
      "id": "southern_nameless_traverse",
      "name": "南无名古道",
      "en": "Southern Nameless Village Traverse",
      "type": "field",
      "pos": [61.5, 48.5],
      "level": "45",
      "desc": "哈哈岛南部被水淹没的遗迹群道路，大部分需乘独木舟移动，北通无名村，西通沉没遗迹。",
      "story": ["泰米诺斯 第4章"],
      "boss": [],
      "treasures": [
        { "item": "风之精灵石(L)", "how": "进入后先往右，再往南穿过拱门的东南遗迹平台边缘" },
        { "item": "极上肉干（Superior Jerky）", "how": "存档点北侧中央平台的楼梯上" },
        { "item": "安宁草", "how": "向西划到另一码头上岸，岔路走上方" },
        { "item": "精神腰带（Mental Belt，属攻+65/属防+50）", "how": "存档点向北经倒塌石柱，先去右侧码头上岸往南爬竹梯" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "西侧码头上岸后沿楼梯往下即沉没遗迹入口。北端码头上岸进入无名村。"
    },
    {
      "id": "sinking_ruins",
      "name": "沉没遗迹",
      "en": "Sinking Ruins",
      "type": "dungeon",
      "pos": [53.3, 40.7],
      "level": "46",
      "desc": "南无名古道西侧的可选迷宫，深处有会石化的巨兽守护宝物。",
      "story": [],
      "boss": [
        { "name": "贝希摩斯", "en": "Behemoth", "level": "46", "weakness": ["枪", "斧", "弓", "冰"], "tips": "8盾→「观察」后10盾，第二阶段弱点换为剑/短剑/雷/风/暗。开场就用石化魔法，之后在关键节点再用；石化只能用恩典草芽或战斗不能后复活解除——本迷宫的巨鳄（Giant Gator）可偷/掉恩典草芽，先准备3~4个。降低其物攻、提高己方防御，用海神之枪、精准射击、攻击性斩击、HP窃取削盾。掉落复苏果酱。" }
      ],
      "treasures": [
        { "item": "完美肉干", "how": "北上楼梯绕过树，第一个岔路走南向走廊" },
        { "item": "沉默耐性石（Articulate Stone）", "how": "向西路转南处北侧的门内" },
        { "item": "恩典草芽（Herb-of-Grace Bud）", "how": "上述位置南边楼梯旁被树挡住的梯子下" },
        { "item": "30000叶", "how": "火把路尽头岔路右侧楼梯上" },
        { "item": "海神之枪（Sea God's Spear）", "how": "30000叶楼梯东北的遗迹小路" },
        { "item": "生锈的弓（Rusty Bow）", "how": "西侧连续楼梯北上，击败Boss后开启" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "海神之枪：物攻+224、命中+91，普通攻击次数+1，破盾利器。生锈的弓交给荒野之地格拉维尔的铁匠可解锁武器大师技能。"
    },
    {
      "id": "nameless_village",
      "name": "无名村",
      "en": "Nameless Village",
      "type": "town",
      "pos": [58.7, 27.2],
      "level": "",
      "desc": "哈哈岛深处的兽人聚落，泰米诺斯最终章的起点，北方是迷失之森。",
      "story": ["泰米诺斯 第4章"],
      "boss": [],
      "treasures": [
        { "item": "神话之角（Mythical Horn）", "how": "入口东侧被强壮兽人守着的宝箱（建议突袭）" },
        { "item": "盐渍海鲜", "how": "武器店东侧梯子下" },
        { "item": "底力荔枝（大）", "how": "通往迷失之森的路上右侧桥下梯子" },
        { "item": "精神项链（Stimulating Necklace，最大SP+80）", "how": "从村内任一码头划船向南到瀑布，沿瀑布往东找第三个码头" },
        { "item": "混乱粉末瓶", "how": "村东侧梯子上" },
        { "item": "禁忌之弓（Forbidden Bow，物攻+315/暴击+70/回避-120）", "how": "东侧被兽人挡住的小屋内，用路径行动击倒他" }
      ],
      "npcs": [
        { "name": "村长（Mayor）与兽人", "item": "兽王（King of Beasts）、活力石榴(L)、治愈葡萄串、醒神李子篮、玻璃弹珠；村长情报：引导更容易", "method": "偷窃/探查", "note": "白天道具店外" },
        { "name": "武器店外兽人", "item": "上等肉干、滋养坚果(L)；探查后「新装备上架」", "method": "偷窃/探查", "note": "白天" },
        { "name": "北桥上的小兽人", "item": "黑曜石短刀（Obsidian Dagger）、风之精灵石", "method": "偷窃", "note": "白天" },
        { "name": "东侧小屋门前兽人", "item": "毁灭切肉刀（Cleaver of Destruction）、肉干、暴击坚果(M)", "method": "偷窃/突袭", "note": "白天；屋内兽人持有神圣项链（Divine Necklace）、薄暮之花" },
        { "name": "旅店外兽人", "item": "醒神李子（大）、风之精灵石(L)", "method": "偷窃", "note": "白天入口处" },
        { "name": "南桥东侧的小兽人", "item": "奇妙古董、恩典草芽、树果；情报：挑衅高手", "method": "偷窃/探查", "note": "白天" },
        { "name": "希尔卢托（Shirlutto）", "item": "身经百战之斧（Battle-Tested Axe，可能是游戏中最强斧之一）、暴击坚果(M)、骨头", "method": "偷窃/购买", "note": "通关泰米诺斯剧情后在村北迷失之森入口附近，支线委托人" }
      ],
      "shops": [
        "武器防具店：古代之弓55000、守护者之弓60000、古代之杖54000、神盾（Aegis Shield）18000、守护者之盾20500、石英长袍24000、守护者法衣26500、古代头环13000等（部分需新装备上架）",
        "与兽人村不同，这里用叶币交易"
      ],
      "tips": "神话之角是发明家「锡制号角」素材之一。泰米诺斯第4章需先在村东侧梯子下找到希尔卢托并引导他同行，才能通过迷失之森的循环迷宫。"
    },
    {
      "id": "wandering_wood",
      "name": "迷失之森",
      "en": "Wandering Wood",
      "type": "dungeon",
      "pos": [61.4, 16.1],
      "level": "45",
      "desc": "无名村北方的森林，前段是无限循环的迷路，需兽人带路才能通过。",
      "story": ["泰米诺斯 第4章"],
      "boss": [],
      "treasures": [
        { "item": "古代仪式假面（Antique Ceremonial Mask）", "how": "存档点后岔路一直往北" },
        { "item": "醒神李子（大）", "how": "岔路东侧，跳过南下楼梯继续往东的土路" },
        { "item": "28000叶", "how": "下楼梯进入开阔地后立刻往正北的支路" },
        { "item": "治愈葡萄串", "how": "开阔地最东侧" },
        { "item": "光之精灵石(L)", "how": "北上主路左侧楼梯上" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "古代仪式假面：物防+49、属防+73，每次行动后回复SP，极推荐。洞穴前与希尔卢托再次对话可获得3个极上肉干。敌人中巨鳄可偷恩典草芽。"
    },
    {
      "id": "rifted_rock",
      "name": "裂岩",
      "en": "Rifted Rock",
      "type": "dungeon",
      "pos": [65.4, 16.1],
      "level": "45",
      "desc": "迷失之森尽头的洞窟遗迹，圣堂机关骑士团在此遭遇惨剧，泰米诺斯最终决战之地。",
      "story": ["泰米诺斯 第4章"],
      "boss": [
        { "name": "卡尔德娜队长 / 夜之卡尔德娜", "en": "Captain Kaldena / Kaldena of Night", "level": "45", "weakness": ["阶段1：枪/杖/冰/风", "阶段2：剑/短剑/斧/火/光"], "tips": "两段战。第一形态8盾（弱枪/杖/冰/风），以物理与暗属性为主，可能附加致盲，「黑暗之墓」可秒杀单人，蓄力「致盲冲击」时破防打断。第二形态夜之卡尔德娜13盾（弱剑/短剑/斧/火/光），带有治疗效果减半的减益直到被破防，后期一回合三动并蓄力「深渊之波」。提前装备宵暗辟邪符，卡丝蒂调合解致盲，提速后用攻击性斩击、HP窃取每回合破防。掉落月蚀之刃（Eclipse Edge），可偷清爽果酱。" }
      ],
      "treasures": [
        { "item": "复苏果酱", "how": "起点平台南侧刚走过的楼梯下方通道往北" },
        { "item": "神圣之杖（Hallowed Rod，光属性威力提升）", "how": "最北一段楼梯上偏离主路，穿过岩壁破洞后左转的隐藏路" },
        { "item": "宵暗辟邪符（Void Amulet，大幅减轻暗属性伤害）", "how": "火把长楼梯南侧梯子下" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "神圣之杖是泰米诺斯的最佳武器之一；宵暗辟邪符建议立刻给队员装备迎战Boss。Boss前倒地骑士旁会出现存档点。"
    }
  ],
  "roads": [
    ["beasting_bay_anchorage", "north_beasting_traverse"],
    ["north_beasting_traverse", "beasting_village"],
    ["beasting_village", "path_to_the_tombs"],
    ["path_to_the_tombs", "tombs_of_the_wardenbeasts"],
    ["path_to_the_tombs", "summit_of_strife"],
    ["summit_of_strife", "verdant_wood"],
    ["verdant_wood", "stormy_cape"],
    ["stormy_cape", "moonview_cliff"],
    ["beasting_bay_anchorage", "cavern_of_waves"],
    ["beasting_bay_anchorage", "western_tropuhopu_traverse"],
    ["western_tropuhopu_traverse", "tropuhopu"],
    ["western_tropuhopu_traverse", "altar_of_the_huntress"],
    ["western_tropuhopu_traverse", "southern_nameless_traverse"],
    ["southern_nameless_traverse", "sinking_ruins"],
    ["southern_nameless_traverse", "nameless_village"],
    ["nameless_village", "wandering_wood"],
    ["wandering_wood", "rifted_rock"]
  ],
  "links": [],
  "story": [
    {
      "title": "奥修特 第1章：兽人村的猎人",
      "character": "奥修特",
      "location": "beasting_village",
      "level": "1-5",
      "summary": "奥修特在师父尤瓦的要求下选择一生的伙伴（玛拉玛奥尔或拉加卡尔），十年后成长为猎人。人类首领科哈泽请求她搜救在墓所中失踪的少女，归来时村子遭到暗黑之物袭击。",
      "steps": [
        "选择伙伴：玛拉玛奥尔（擅打属性弱点，破盾强）或拉加卡尔（擅打武器弱点，伤害高）",
        "击败并捕获鬣蜥王，回村用「料理」做成肉干分给族人",
        "白天对闯入的人类使用「挑衅」将其赶走",
        "在兽人区道具店用肉干换装备，南下进入主兽墓所之路，捕获岛蛙人、Lloris",
        "主兽墓所深处夜晚用「交友」+1个肉干带走迷路少女",
        "回村途中在村南的小贩处补给后迎战Boss"
      ],
      "boss": "鬣蜥王（弱斧/弓/雷）→ 暗黑之物（弱短剑/斧/雷/风；雏鸟弱弓）",
      "tips": "雏鸟出现后尽快清掉可阻止「暗之风暴」。章节结束后奥修特踏上寻找三只传说之兽的旅途。"
    },
    {
      "title": "阿格妮娅 第3章：特洛甫霍普的巡回剧团",
      "character": "阿格妮娅",
      "location": "tropuhopu",
      "level": "20",
      "summary": "阿格妮娅来到特洛甫霍普，帮助一支马车陷进沙里的女性巡回剧团，又去找回消沉离队的团长吉赛尔，最终登上浮游剧场同台演出，并得知「盛大庆典」的消息。",
      "steps": [
        "在马车北侧切换夜晚，对持有木剑的镇民「恳求」取得木剑，交给团长吉赛尔撬出马车",
        "前往北侧浮游剧场，得知吉赛尔失踪",
        "穿过城镇西南，从码头乘独木舟向北，在附近小岛找到吉赛尔",
        "切换白天用「诱惑」带回吉赛尔，到剧场舞台右侧与团员会合开始演出"
      ],
      "boss": "无战斗",
      "tips": "本章没有战斗，可早早完成。章节结束后阿格妮娅前往日之野赛伊。"
    },
    {
      "title": "帕尔提提欧 商机的气息：特洛甫霍普篇（购买船只）",
      "character": "帕尔提提欧",
      "location": "tropuhopu",
      "level": "任意",
      "summary": "帕尔提提欧在造船厂撞见富人与中介为船价争执，得知传奇造船匠的徒弟泰莉造了一艘船。泰莉开价100000叶，买下后船只完工，可自定义颜色与帆上的标志，命名为「格兰德·泰莉号」。",
      "steps": [
        "帕尔提提欧在队，沿特洛甫霍普海滩向东进入造船厂触发剧情",
        "上码头与泰莉对话，得知售价100000叶",
        "攒够钱后白天用帕尔提提欧的「购买」买下「未完成的船」",
        "选择船体颜色与帆的标志，之后可从任意停泊所或卡纳尔布莱恩出海"
      ],
      "boss": "无",
      "tips": "船只是帕尔提提欧第4章（洛克岛）的必要条件，也解锁大量海上宝箱、迷宫与隐藏职业魔术师。想重新涂装可白天向泰莉购买船只改造券（20000叶），次数不限。"
    },
    {
      "title": "泰米诺斯 第4章（最终章）：无名村与迷失之森",
      "character": "泰米诺斯",
      "location": "nameless_village",
      "level": "45",
      "summary": "泰米诺斯追踪圣堂机关卡尔德娜队长与骑士们来到无名村，凭一句谜语进入迷失之森。在兽人希尔卢托带领下穿越森林，于裂岩深处直面真相与卡尔德娜。",
      "steps": [
        "从兽人海滩停泊所经西特洛甫霍普古道北上，乘独木舟穿过南无名古道抵达无名村（或在村东北酒馆开启）",
        "从村西侧下层向北进入迷失之森，发现道路无限循环",
        "回村东侧梯子下找到希尔卢托，白天「引导」他同行，即可穿越循环区",
        "沿途拿古代仪式假面、28000叶等，到洞穴前与希尔卢托对话得极上肉干×3",
        "进入裂岩，拿神圣之杖与宵暗辟邪符，在倒地骑士旁存档后决战"
      ],
      "boss": "卡尔德娜队长（弱枪/杖/冰/风）→ 夜之卡尔德娜（弱剑/短剑/斧/火/光）",
      "tips": "第二形态治疗减半且频繁致盲，装备宵暗辟邪符、带卡丝蒂解状态。通关后泰米诺斯习得EX技能「Heavenly Shine」，希尔卢托留在村北并开放支线。"
    },
    {
      "title": "奥修特 第3章（最终章）：绯月之夜",
      "character": "奥修特",
      "location": "beasting_village",
      "level": "45",
      "summary": "集齐三只传说之兽的奥修特回到兽人村，主兽尤瓦在西北海角等候。她前往决战之丘迎接「绯月之夜」，一路穿越深绿之森与怒涛之岬，在望月断崖与当年被她舍弃、已化为魔物的另一只伙伴对决。",
      "steps": [
        "到兽人村（或人类区酒馆）开启，去西北海角见尤瓦",
        "经主兽墓所之路第一个存档点南侧的西向路进入决战之丘，连续打三场暗影魔物强制战",
        "向西进入深绿之森（战斗不可逃跑），存档点后洞穴拿活力石榴(L)",
        "北上怒涛之岬，先别走冰之捷径，往北拿霸者大斧、龙卷弓、底力荔枝（特大）",
        "从西南阶梯登上望月断崖，存档后迎战"
      ],
      "boss": "拉加卡尔/玛拉玛奥尔（悲月），弱点每阶段变化",
      "tips": "胜利后对它使用「交友」结束剧情，奥修特习得EX技能「Provoke Beasts」。"
    },
    {
      "title": "终章：通往黎明之旅（主兽墓所）",
      "character": "全员",
      "location": "tombs_of_the_wardenbeasts",
      "level": "50+",
      "summary": "完成全部八人剧情与交汇篇后，于叶之地南库罗普提尔森道的营地开启终章。黎明不再到来，各地圣火熄灭，其中一处就在托托哈哈岛的主兽墓所深处。",
      "steps": [
        "终章期间时间固定为夜晚，可随时在菜单变更队伍",
        "前往兽人村，南下进入主兽墓所，走到两尊雕像前会提示危险，先回复存档",
        "击败怪异魔物与扭曲之子",
        "让卡丝蒂与奥修特在队中，在北侧熄灭的圣火台使用闪耀之镜"
      ],
      "boss": "怪异魔物（弱斧/弓/冰/光；扭曲之子弱斧/弓）",
      "tips": "装备暗之护符/宵暗辟邪符能大幅降低伤害；掉落黑弓。"
    }
  ],
  "sidequests": [
    {
      "name": "架起桥梁",
      "en": "Building Bridges",
      "location": "beasting_village",
      "trigger": "白天东侧人类区井边，想和兽人交朋友的人类男孩",
      "steps": [
        "前往西侧兽人区，找旅店平台下方的兽人女孩",
        "用偷窃/购买等方式取得「爱之护身符」",
        "交给人类男孩"
      ],
      "reward": "暴击坚果、抗性坚果",
      "difficulty": "易"
    },
    {
      "name": "料理的计谋",
      "en": "Culinary Cunning",
      "location": "beasting_village",
      "trigger": "兽人区东北小屋外想尝试辛辣人类料理的料理爱好者",
      "steps": [
        "前往特洛甫霍普北部的浮游剧场，白天找入口北侧的街头小贩",
        "用探查/探听等获得「辣味烤鸡食谱」情报",
        "回兽人村告诉料理爱好者"
      ],
      "reward": "3000叶、贪食长柄（Gluttonous Glaive）",
      "difficulty": "易"
    },
    {
      "name": "睡过头的人",
      "en": "The Late Riser",
      "location": "tropuhopu",
      "trigger": "特洛甫霍普南侧海滩的渔夫师傅，抱怨助手总睡过头",
      "steps": [
        "白天用挑战/挑衅/突袭等方式击倒旁边的爱睡的渔夫（必须在白天）",
        "第二天他就能准时出现，任务完成"
      ],
      "reward": "4800叶、滑溜坚果(M)",
      "difficulty": "易"
    },
    {
      "name": "寻找珍珠",
      "en": "Pearl Hunt",
      "location": "tropuhopu",
      "trigger": "浮游剧场西南的寻找珍珠的男人",
      "steps": [
        "白天造船厂出口附近的老人：探听得知西侧海滩的隐藏美丽珍珠并拾取",
        "白天西侧码头的渔妇：偷窃/购买她身上的美丽珍珠",
        "夜晚存档点南侧与兽人站在一起的岛民：偷窃/购买他身上的美丽珍珠",
        "集齐三颗交给委托人"
      ],
      "reward": "15000叶、丘比特之弓（Cupid's Bow）、底力荔枝（大）",
      "difficulty": "易"
    },
    {
      "name": "舞台演员",
      "en": "Stage Actors",
      "location": "tropuhopu",
      "trigger": "浮游剧场东侧平台上想找能真打的演员的舞台导演",
      "steps": [
        "用任意可战斗的路径行动（挑战/挑衅等）与导演单挑",
        "导演弱剑/短剑/雷/风/光，近战为主且怕致盲",
        "胜利后成为下一出戏的主角（不同角色结局演出不同）"
      ],
      "reward": "4500叶、物理腰带（Physical Belt）",
      "difficulty": "中"
    },
    {
      "name": "Ghormf!",
      "en": "Ghormf!",
      "location": "nameless_village",
      "trigger": "无名村东侧不停说着「ghormf」的兽人",
      "steps": [
        "前往兽人村，在道具店西侧附近找到同样说着奇怪语言的兽人",
        "用引导/雇佣/交友等方式让他同行",
        "带到无名村的委托人处"
      ],
      "reward": "10000叶、昏迷石斧（Stupefying Stone Axe）",
      "difficulty": "易"
    },
    {
      "name": "希尔卢托的下一章",
      "en": "Shirlutto's Next Chapter",
      "location": "nameless_village",
      "trigger": "通关泰米诺斯剧情后，无名村北侧通往迷失之森楼梯旁的希尔卢托",
      "steps": [
        "日之野赛伊：酒馆前的商人身上的「鲁特琴」（全天）",
        "纹之地弗拉姆教堂村：泰米诺斯开局教堂前的神官（白天）身上的「纸偶剧」",
        "纹之地蒙特维斯：入口楼梯附近、存档点西北的商人（白天）身上的「历史书」",
        "用偷窃/购买取得后带回，与希尔卢托反复对话推进"
      ],
      "reward": "10000叶、惑乱巨弓（Befuddling Greatbow）",
      "difficulty": "中"
    },
    {
      "name": "旅人的行囊（奥修特开局）",
      "en": "The Traveler's Bag",
      "location": "north_beasting_traverse",
      "trigger": "以奥修特为初始主角并完成第1章后，在北兽人古道遇到被偷行李的青年阿尔",
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
    { "name": "猎人职业证", "en": "Hunter License", "type": "职业证", "location": "western_tropuhopu_traverse", "how": "西特洛甫霍普古道西侧隐蔽林地的猎人公会，与会长对话得第1张；第2张：上交「流沙怪物的肝脏」（日之野流沙牢狱Boss掉落）；第3张：上交「海怪的胡须」（分隔之海漩涡中的Scourge of the Sea掉落）", "effect": "非奥修特角色可设猎人为副职业（无法使用奥修特专属的捕获伙伴）" },
    { "name": "未完成的船", "en": "Unfinished Vessel", "type": "其他", "location": "tropuhopu", "how": "帕尔提提欧在队，白天在造船厂向泰莉「购买」，100000叶", "effect": "获得自有船只，可从各停泊所出海探索分隔之海" },
    { "name": "船只改造券", "en": "Ship Alteration Ticket", "type": "其他", "location": "tropuhopu", "how": "买船后白天向泰莉购买，20000叶", "effect": "重新选择船体颜色与帆的标志" },
    { "name": "凯特琳的木天蓼", "en": "Cait Powder", "type": "饰品", "location": "tropuhopu", "how": "西北小屋宝箱，需击倒门口的猫咪爱好者", "effect": "更容易遭遇凯特（高经验/高金钱敌人）" },
    { "name": "头骨头盔", "en": "Skull Helm", "type": "防具", "location": "tropuhopu", "how": "东北梯子下码头划船到东北小岛", "effect": "属攻+22、物防+20、属防+36" },
    { "name": "大师鱼叉", "en": "Master Harpoon", "type": "武器", "location": "tropuhopu", "how": "偷窃/购买白天东侧海滩的渔夫师傅或爱睡的渔夫", "effect": "物攻+103、命中+31" },
    { "name": "战士之剑", "en": "Warrior's Sword", "type": "武器", "location": "tropuhopu", "how": "偷窃/购买白天诗人北侧的年轻男子（极强，勿硬打）" },
    { "name": "丘比特之弓", "en": "Cupid's Bow", "type": "武器", "location": "tropuhopu", "how": "支线「寻找珍珠」奖励" },
    { "name": "大弓", "en": "Giant Bow", "type": "武器", "location": "beasting_village", "how": "击倒人类区瞭望塔前的村民后登塔开箱", "effect": "物攻+24、暴击+6，前期好弓" },
    { "name": "身经百战之弓", "en": "Battle-Tested Bow", "type": "武器", "location": "beasting_village", "how": "通关奥修特剧情后，偷窃/购买白天人类区东侧的科哈泽", "effect": "终盘最强级弓" },
    { "name": "猩红守护石", "en": "Scarlet Stone of Protection", "type": "饰品", "location": "beasting_village", "how": "通关奥修特剧情后偷窃/购买科哈泽" },
    { "name": "兽人岛见闻录", "en": "Dispatches from Beastling Island", "type": "其他", "location": "beasting_village", "how": "偷窃/购买存档点附近的外来旅人", "effect": "蒙特维斯支线「搜集奇书」所需（隐藏Boss连锁任务的一环）" },
    { "name": "猛兽之弓", "en": "Raging Beast", "type": "武器", "location": "cavern_of_waves", "how": "海鸣洞穴北路水边隐藏通道宝箱；也可夜晚在猎人公会偷窃/购买兽人猎人", "effect": "物攻+179、回避+56，小概率降低目标回避" },
    { "name": "JP增幅器", "en": "JP Augmentor", "type": "饰品", "location": "cavern_of_waves", "how": "海鸣洞穴东侧岔路尽头宝箱", "effect": "提高获得的JP" },
    { "name": "灵敏手环", "en": "Sprightly Bracelet", "type": "饰品", "location": "western_tropuhopu_traverse", "how": "存档点北上码头左侧楼梯上", "effect": "速度+50" },
    { "name": "精神腰带", "en": "Mental Belt", "type": "饰品", "location": "southern_nameless_traverse", "how": "存档点北侧右边码头上岸后爬竹梯", "effect": "属攻+65、属防+50" },
    { "name": "海神之枪", "en": "Sea God's Spear", "type": "武器", "location": "sinking_ruins", "how": "30000叶宝箱楼梯东北的遗迹小路", "effect": "物攻+224、命中+91，普通攻击次数+1" },
    { "name": "沉默耐性石", "en": "Articulate Stone", "type": "饰品", "location": "sinking_ruins", "how": "西行路转南处北侧门内", "effect": "防止沉默" },
    { "name": "生锈的弓", "en": "Rusty Bow", "type": "其他", "location": "sinking_ruins", "how": "击败贝希摩斯后开启最深处宝箱", "effect": "交给格拉维尔铁匠，解锁武器大师的弓系技能（首次上交任意生锈武器即解锁武器大师）" },
    { "name": "禁忌之弓", "en": "Forbidden Bow", "type": "武器", "location": "nameless_village", "how": "东侧被兽人挡住的小屋内宝箱", "effect": "物攻+315、暴击+70、回避-120" },
    { "name": "精神项链", "en": "Stimulating Necklace", "type": "饰品", "location": "nameless_village", "how": "划船到村南瀑布，沿瀑布向东第三个码头", "effect": "最大SP+80" },
    { "name": "神话之角", "en": "Mythical Horn", "type": "其他", "location": "nameless_village", "how": "入口东侧兽人守护的宝箱", "effect": "发明家「锡制号角」素材（全员潜力槽充满）" },
    { "name": "身经百战之斧", "en": "Battle-Tested Axe", "type": "武器", "location": "nameless_village", "how": "通关泰米诺斯剧情后，偷窃/购买村北的希尔卢托", "effect": "终盘最强级斧" },
    { "name": "毁灭切肉刀", "en": "Cleaver of Destruction", "type": "武器", "location": "nameless_village", "how": "偷窃/购买东侧小屋门前的兽人守卫" },
    { "name": "惑乱巨弓", "en": "Befuddling Greatbow", "type": "武器", "location": "nameless_village", "how": "支线「希尔卢托的下一章」奖励" },
    { "name": "昏迷石斧", "en": "Stupefying Stone Axe", "type": "武器", "location": "nameless_village", "how": "支线「Ghormf!」奖励；兽人村夜间南崖的兽人也持有" },
    { "name": "古代仪式假面", "en": "Antique Ceremonial Mask", "type": "防具", "location": "wandering_wood", "how": "存档点后岔路向北", "effect": "物防+49、属防+73，行动后回复SP" },
    { "name": "神圣之杖", "en": "Hallowed Rod", "type": "武器", "location": "rifted_rock", "how": "最北楼梯上穿过岩壁破洞左转的隐藏路", "effect": "物攻+152、属攻+304，光属性攻击威力提升" },
    { "name": "宵暗辟邪符", "en": "Void Amulet", "type": "饰品", "location": "rifted_rock", "how": "火把长楼梯南侧梯子下", "effect": "大幅减轻暗属性伤害" },
    { "name": "月蚀之刃", "en": "Eclipse Edge", "type": "武器", "location": "rifted_rock", "how": "击败卡尔德娜掉落" },
    { "name": "霸者大斧", "en": "Axe of the Conqueror", "type": "武器", "location": "stormy_cape", "how": "第二座吊桥下方宝箱", "effect": "物攻+306、暴击+90，极小概率使目标致盲" },
    { "name": "龙卷弓", "en": "Tornado Bow", "type": "武器", "location": "stormy_cape", "how": "第二座吊桥后西北岔路往西南", "effect": "物攻+295、速度+90，风属性威力提升" },
    { "name": "黑弓", "en": "Black Bow", "type": "武器", "location": "tombs_of_the_wardenbeasts", "how": "终章击败怪异魔物掉落" }
  ],
  "jobs": [
    { "name": "猎人", "en": "Hunter", "location": "western_tropuhopu_traverse", "how": "西特洛甫霍普古道西侧、通往停泊所出口北边隐蔽林地中的猎人公会，与会长对话得第1张；第2张需上交流沙怪物的肝脏（流沙牢狱Boss），第3张需上交海怪的胡须（Scourge of the Sea）" }
  ],
  "tips": [
    "托托哈哈岛是东西大陆交通枢纽：兽人海滩停泊所有渡船往返卡纳尔布莱恩与新德尔斯塔港停泊所。",
    "南岛（托托岛）的北兽人古道、停泊所为初期区（5→8→11），西特洛甫霍普古道为中期区（16→22→28→32）；北岛（哈哈岛）的南无名古道、迷失之森、沉没遗迹等均为Lv45以上高等级区，海鸣洞穴Lv48。",
    "兽人村兽人区只收肉干，奥修特可将捕获的魔物「料理」成肉干；通关第1章后开放人类区的正常商店。",
    "巨鳄（Giant Gator，出没于海鸣洞穴、沉没遗迹、迷失之森）可偷恩典草芽——既是对付贝希摩斯石化的唯一解药，也是药师公会第2张职业证的上交物。",
    "买船后：停泊所以北海上是魔途之岛（Lv38，Boss Gigantes，隐藏Boss连锁任务）；特洛甫霍普以南海面有安宁草宝箱；托托哈哈岛东南方海域的漩涡与「???」岛（终焉之门）属于分隔之海，是挑战隐藏Boss加尔德拉的地点。",
    "凯特琳的木天蓼（特洛甫霍普）+章鱼罐（康宁湾）+高等级野外，是全游戏最快的练级刷钱组合之一。",
    "通关后别忘了偷「名字NPC」：科哈泽（身经百战之弓）、希尔卢托（身经百战之斧），完成克拉丽莎夫人的支线需把她带来兽人村。"
  ]
});

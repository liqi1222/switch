OT2.addRegion({
  "id": "leaflands",
  "name": "叶之地",
  "en": "Leaflands",
  "continent": "west",
  "levelRange": "1-50",
  "starter": "阿格妮娅（舞娘）",
  "intro": "叶之地位于西大陆西部，是被茂密森林覆盖的田园地带，也是舞者阿格妮娅的故乡。北部有出产覆盆子与桃子的乡村库罗普提尔，南部是曾经繁荣、如今经济萧条的韦尔格罗夫，西北则是湖畔王国汀巴雷因及其王城。本地区横跨序盘（库罗普提尔一带1~11级）到终盘（汀巴雷因一带45~50级），承载了多位主角的第3、4章以及卡丝蒂与奥修特的交汇篇。",
  "highlights": [
    "汀巴雷因城广场的老兵可偷窃/购买终盘强弓「驱魔之弓（Exorcising Bow）」，其把守的仓库内宝箱有武器大师神器「生锈的长枪」",
    "韦尔格罗夫的舞娘公会可获得舞娘职业证；北韦尔格罗夫森道隐藏的舞踏姬祭坛可解锁阿格妮娅EX技能",
    "星落之泉（需从东库罗普提尔森道划独木舟进入）击败君王后获得高阶神官护符（神官追加职业证用）",
    "帕尔提提欧第3章完成后开放的韦尔格罗夫百货商店：夜晚可强夺/恳求大量强力装备，以及发明家素材「铁皮玩具」",
    "汀巴雷因法院三部曲支线（无罪/有罪/正义的证明）合计奖励丰厚，含多颗L级果实",
    "韦罗兹家宅邸是全系列首座鬼屋，宝箱有诅咒铠甲、禁忌之斧等特殊装备"
  ],
  "locations": [
    {
      "id": "cropdale",
      "name": "库罗普提尔",
      "en": "Cropdale",
      "type": "town",
      "pos": [78, 36.4],
      "level": "1",
      "desc": "阿格妮娅的故乡，盛产覆盆子与桃子的宁静小村，阿格妮娅第1章及卡丝蒂&奥修特交汇篇的起点。",
      "story": ["阿格妮娅 第1章", "卡丝蒂&奥修特 交汇篇 第1部", "卡丝蒂&奥修特 交汇篇 第2部"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄（Healing Grape）", "how": "乘小舟下水后码头右侧的宝箱" },
        { "item": "还魂橄榄（Olive of Life）", "how": "码头左侧，穿过几座桥后路尽头的宝箱" },
        { "item": "树果（Tree Nut）", "how": "隐藏物品：向北侧桥边的两名小孩探听后出现在小孩附近" },
        { "item": "祭典花环（Festival Garland）", "how": "隐藏物品：探听桥边小孩后出现在酒馆外" },
        { "item": "稀有石（Rare Stone）", "how": "隐藏物品：向桥上老人探听后出现在南侧中间房屋外" },
        { "item": "会心果实M（Critical Nut (M)）", "how": "隐藏物品：探听阿格妮娅家右侧的村民后出现在东北养猪户屋外" }
      ],
      "npcs": [
        { "name": "织工（Weaver）", "item": "风之精灵石（Wind Soulstone）", "method": "偷窃", "note": "存档点旁，也是支线「库罗普织物复兴」委托人；另持刺激耳环（Stimulating Earring）" },
        { "name": "屋外的妇人", "item": "刺激耳环（Stimulating Earring）/旅店打折情报", "method": "偷窃/探听", "note": "存档点左侧屋外" },
        { "name": "村民（阿格妮娅家右侧）", "item": "强韧果实（Tough Nut）、清爽果酱（Refreshing Jam）", "method": "偷窃", "note": "过桥后可见；探听可得东北屋外隐藏物品" },
        { "name": "加鲁德（Garud）", "item": "优质背心（Quality Vest）", "method": "偷窃", "note": "阿格妮娅的父亲，在自家里屋" },
        { "name": "桥上的女子", "item": "坚韧之弓（Tenacious Bow）", "method": "恳求/强夺", "note": "仅夜晚出现在中央桥上；收买可得「更丰富的商品」情报" },
        { "name": "道具店外的男子", "item": "情报「无法抗拒的魅力」（Undeniable Allure）", "method": "探听", "note": "提升阿格妮娅诱惑成功率；旁边女子可探听「井鸢尾的用途」（支线「无用的果实」所需）" },
        { "name": "兽人（Beastling）", "item": "清爽果酱（Refreshing Jam）", "method": "偷窃", "note": "东北养猪户家中，需先打昏门口守卫进入" },
        { "name": "吟游诗人（Minstrel）", "item": "情报「更容易探听」", "method": "收买", "note": "夜晚在入口右侧桥上；传言是汀巴雷因国王派来的密探" }
      ],
      "shops": ["杂货店：治愈葡萄、橄榄、醒神李子、祭典花环、旅人斗篷、灵魂弯刀、青金石杖等，序盘装备补充点"],
      "tips": "阿格妮娅第1章完成后才能接本村两个支线。夜晚酒馆内有醉酒贵族（支线「醉酒的贵族」）。村庄修复声望需2250叶。"
    },
    {
      "id": "festival_grounds",
      "name": "祭典会场",
      "en": "Festival Grounds",
      "type": "field",
      "pos": [81.9, 15.1],
      "level": "1",
      "desc": "库罗普提尔丰收祭的会场，阿格妮娅第1章在此招募帮手并于最后献舞。",
      "story": ["阿格妮娅 第1章"],
      "boss": [],
      "treasures": [{ "item": "500叶", "how": "会场内宝箱" }],
      "npcs": [],
      "shops": [],
      "tips": "少数没有随机遇敌的野外地图之一。"
    },
    {
      "id": "forest_path",
      "name": "森林小道",
      "en": "Forest Path",
      "type": "field",
      "pos": [81.9, 21.1],
      "level": "1",
      "desc": "库罗普提尔北侧的林间小路，连接祭典会场（北）、薄暗之森（西）与兽道（东，需乘独木舟）。",
      "story": ["阿格妮娅 第1章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄（Healing Grape）", "how": "存档点处沿左侧岔路向北的宝箱" },
        { "item": "风之精灵石（Wind Soulstone）", "how": "从入口向西过桥后往南的小路尽头" },
        { "item": "毛皮铠甲（Fur Armor）", "how": "乘独木舟北上，河北岸水车小屋内的宝箱（支线「库罗普织物复兴」的织物图样也在此屋）" }
      ],
      "npcs": [
        { "name": "老妇人之子（Elderly Woman's Son）", "item": "库罗普织物图样相关情报", "method": "探听", "note": "支线「库罗普织物复兴」的关键人物" }
      ],
      "shops": [],
      "tips": "前往兽道需从本图乘独木舟向东；老妇人之子站在存档点附近（昼夜都在）。薄暗之森入口既可走陆路也可乘独木舟沿河向西进入。"
    },
    {
      "id": "veil_of_trees",
      "name": "薄暗之森",
      "en": "Veil of Trees",
      "type": "dungeon",
      "pos": [72.8, 21.7],
      "level": "5",
      "desc": "长满覆盆子的阴暗森林，阿格妮娅第1章的迷宫，深处有巨大野猪杜欧尔杜欧尔。",
      "story": ["阿格妮娅 第1章"],
      "boss": [
        { "name": "杜欧尔杜欧尔", "en": "Duorduor", "level": "1~5", "weakness": ["短剑", "斧", "风"], "tips": "HP约3600、5盾。会召唤2只森林土拨鼠，并会「采浆果」回复少量HP。出现「看起来很激动」时进入蓄力，下回合用「野猪冲撞」造成极大单体伤害，务必在其行动前击破。阿格妮娅可在村中诱惑NPC带入战斗补足弱点。" }
      ],
      "treasures": [
        { "item": "敏捷戒指（Sprightly Ring）", "how": "乘独木舟沿河进入本区后立刻可见的宝箱（河道入口处）" },
        { "item": "治愈葡萄（Healing Grape）", "how": "进入后的台阶处，倒木后方的宝箱" },
        { "item": "醒神李子（Inspiriting Plum）", "how": "绕过大树根后向南下台阶的尽头" },
        { "item": "滑溜果实（Slippery Nut）", "how": "往北走绕过树根再折向南，存档点之前的宝箱" },
        { "item": "还魂橄榄（Olive of Life）", "how": "存档点东侧大树后的隐藏小路（路向左弯时选右边）尽头" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人等级2~7。Boss掉落醒神李子篮（Inspiriting Plum Basket）。"
    },
    {
      "id": "animal_trail",
      "name": "兽道",
      "en": "Animal Trail",
      "type": "dungeon",
      "pos": [91.4, 23.1],
      "level": "16",
      "desc": "鹿与杜欧尔杜欧尔栖息的森林兽径，卡丝蒂&奥修特交汇篇两部的舞台。",
      "story": ["卡丝蒂&奥修特 交汇篇 第1部", "卡丝蒂&奥修特 交汇篇 第2部"],
      "boss": [
        { "name": "狂暴杜欧尔杜欧尔", "en": "Dire Duorduor", "level": "16", "weakness": ["剑", "弓", "杖", "火"], "tips": "交汇篇第1部。HP约5800、5盾，可全队参战。最强招式「倒木」全体伤害但命中不稳，「极限冲撞」单体高伤并晕眩。难度很低。" },
        { "name": "怪异的影子", "en": "Strange Shadow（Wriggling Shadow）", "level": "45", "weakness": ["剑", "短剑", "弓", "风", "光"], "tips": "交汇篇第2部。需由奥修特「挑衅」开战，由她的伙伴魔物代为战斗。" },
        { "name": "潜伏之影", "en": "Creeping Shadow", "level": "45", "weakness": ["枪", "斧", "弓", "冰", "光"], "tips": "交汇篇第2部最终战，HP约50000、6盾。招式多为暗属性（单体「压迫之影」、全体「邀入黑暗」「暗之波动」），装备暗抗饰品或降低其属性攻击即可轻松应对；暗属性攻击对它效果差。掉落强化血清。" }
      ],
      "treasures": [{ "item": "宁静药草（Herb of Serenity）", "how": "第1部击败狂暴杜欧尔杜欧尔后，在环形岔路向南走到东南角的宝箱" }],
      "npcs": [],
      "shops": [],
      "tips": "从森林小道乘独木舟向东抵达。整段兽径很短：进入后向东即遇狂暴杜欧尔杜欧尔（第1部）/怪异的影子（第2部）；环形岔路只有南北两支，北侧是中央空地（存档点、乌利乌利所在），南侧尽头只有一只宝箱（宁静药草），空地东行为潜伏之影。空地长着托托哈哈特产的什卡巴果。"
    },
    {
      "id": "east_cropdale_trail",
      "name": "东库罗普提尔森道",
      "en": "Eastern Cropdale Trail",
      "type": "field",
      "pos": [87.9, 36.6],
      "level": "5/8/11",
      "desc": "库罗普提尔东侧森道，北通荒野之地克拉克里奇港停泊所，南接南库罗普提尔森道；河道可划船南下至星落之泉。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "圆盾（Round Shield）", "how": "通往南库罗普提尔森道的路北段岔路向西到码头，乘独木舟北上穿过桥下、瀑布边的宝箱" },
        { "item": "活力荔枝（Empowering Lychee）", "how": "存档点南侧空地的东面，半隐蔽的宝箱" },
        { "item": "1600叶", "how": "库罗普提尔东侧岔路继续向东，第二个岔路口朝南（克拉克里奇港出口南侧）" },
        { "item": "安眠鼠尾草（Slumber Sage）", "how": "库罗普提尔出口过桥前、南侧栅门内（存档点西侧）" }
      ],
      "npcs": [
        { "name": "阿尔（Al）", "item": "支线「旅人的包袱」", "method": "挑战", "note": "仅当阿格妮娅为初始主角时出现在此，击败后得滑溜果实与治愈葡萄x3" }
      ],
      "shops": [],
      "tips": "危险度随游戏进度在5/8/11间变化。在此下河乘独木舟一路南行可进入星落之泉。"
    },
    {
      "id": "south_cropdale_trail",
      "name": "南库罗普提尔森道",
      "en": "Southern Cropdale Trail",
      "type": "field",
      "pos": [83.4, 46.9],
      "level": "5/8/11",
      "desc": "交通枢纽：北接东库罗普提尔森道，东通荒野之地南欧兹拉修荒道，西接北韦尔格罗夫森道，南方水路通往星落之泉。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "风之护符（Wind Amulet）", "how": "星落之泉水路入口旁" },
        { "item": "祭典花环（Festival Garland）", "how": "通往北韦尔格罗夫森道的出口北侧" },
        { "item": "治愈葡萄M（Healing Grape (M)）", "how": "从东库罗普提尔森道入口向西走" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "前往韦尔格罗夫、汀巴雷因或荒野之地欧兹拉修都要经过这里。"
    },
    {
      "id": "starfall_spring",
      "name": "星落之泉",
      "en": "Starfall Spring",
      "type": "dungeon",
      "pos": [82.7, 58.4],
      "level": "15",
      "desc": "只能经河道进入的洞窟，可选迷宫，深处有魔物君王守护着高阶神官护符。",
      "story": [],
      "boss": [
        { "name": "君王", "en": "Monarch", "level": "15~20", "weakness": ["枪", "短剑", "弓", "暗"], "tips": "HP约13000、5盾；无法被偷窃。HP≤75%时召唤豪猪与威严土拨鼠，HP≤50%时每回合行动2次。开场带有3层物理攻击必定闪避，用猎人「精准射击」等多段攻击一次消掉后再正常输出。会使用全体风属性「狂风」，并以「魅惑鳞粉」召唤土拨鼠与豪猪。掉落睡眠之枪（Spear of Sleep）。击败后约3%几率在此作为随机遇敌出现。" }
      ],
      "treasures": [
        { "item": "高阶神官护符（High Priest's Amulet）", "how": "西北角宝箱，需击败君王后才能拿到；用于神官追加职业证" },
        { "item": "清醒之石（Wakeful Stone）", "how": "瀑布西侧凹室：向南到岔路后先别下楼梯，向北上台阶" },
        { "item": "暗之精灵石（Shadow Soulstone）", "how": "东南小径第一段楼梯后向北" },
        { "item": "睡眠粉瓶（Bottle of Sleeping Dust）", "how": "存档点往东南走到底的死胡同" },
        { "item": "6000叶", "how": "清醒之石那条台阶下去之后，下一处岔路向左的尽头" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "入口：在东库罗普提尔森道下河乘独木舟，经南库罗普提尔森道一路向南。"
    },
    {
      "id": "north_wellgrove_trail",
      "name": "北韦尔格罗夫森道",
      "en": "Northern Wellgrove Trail",
      "type": "field",
      "pos": [63.6, 51.4],
      "level": "14/22/28/34",
      "desc": "终年下雨的森道，东接南库罗普提尔森道，南接东韦尔格罗夫森道，西通南汀巴雷因森道，北侧隐藏着舞踏姬祭坛。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "风之精灵石M（Wind Soulstone (M)）", "how": "从南库罗普提尔森道一侧南行后的第一个东向岔路" },
        { "item": "卫兵之盾（Guard's Shield）", "how": "存档点向西走，第一个向南的岔路" },
        { "item": "活力石榴L（Energizing Pomegranate (L)）", "how": "存档点西侧大树下" },
        { "item": "还魂橄榄M（Olive of Life (M)）", "how": "存档点北侧" },
        { "item": "魔力吞噬者（Magic Eater）", "how": "存档点北侧" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "除卡丝蒂剧情外，这是唯一持续降雨的地图。舞踏姬祭坛入口在通往南库罗普提尔森道的道路附近、悬崖下被原木半遮挡处。"
    },
    {
      "id": "altar_lady_of_grace",
      "name": "舞踏姬祭坛",
      "en": "Altar of the Lady of Grace",
      "type": "shrine",
      "pos": [60.4, 42.4],
      "level": "14/22/28/34",
      "desc": "供奉舞踏姬希尔蒂杰（Sealticge）的守护神祭坛，阿格妮娅在队时调查神像可解锁EX技能。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "阿格妮娅需在队伍中，调查神像获得EX技能「Windy Refrain」（让我方全员下回合最先行动）。入口位于北韦尔格罗夫森道北侧，被悬崖下的原木遮挡。"
    },
    {
      "id": "east_wellgrove_trail",
      "name": "东韦尔格罗夫森道",
      "en": "Eastern Wellgrove Trail",
      "type": "field",
      "pos": [59.7, 67.7],
      "level": "14/22/28/34",
      "desc": "韦尔格罗夫东侧森道，北接北韦尔格罗夫森道，南通日之野西赛砂原。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "魔术师短剑（Magus Knife）", "how": "通往北韦尔格罗夫森道的出口附近，破损栅门后" },
        { "item": "清爽果酱（Refreshing Jam）", "how": "存档点东侧的空地；入口是存档点左侧桥下的隐藏通道" },
        { "item": "火之精灵石M（Fire Soulstone (M)）", "how": "存档点东侧木结构旁" },
        { "item": "7200叶", "how": "宝箱" },
        { "item": "活力荔枝L（Empowering Lychee (L)）", "how": "通往韦尔格罗夫的桥下" }
      ],
      "npcs": [
        { "name": "盗马贼", "item": "日之野支线「逃跑的马」解决手段之一", "method": "挑战", "note": "打昏后可完成库城下町马匹出租人的委托（另一解法为引导欧兹拉修的驯马师）" }
      ],
      "shops": [],
      "tips": "从日之野北上进入叶之地的主要入口。"
    },
    {
      "id": "wellgrove",
      "name": "韦尔格罗夫",
      "en": "Wellgrove",
      "type": "town",
      "pos": [47.3, 69.4],
      "level": "26",
      "desc": "曾靠与南方沙漠贸易致富、如今萧条的城镇，富豪阿尔隆德居住于此；光、索洛奈、帕尔提提欧的第3章都在这里展开，并设有舞娘公会。",
      "story": ["光 第3章", "索洛奈 第3章（母亲篇）", "帕尔提提欧 第3章"],
      "boss": [],
      "treasures": [
        { "item": "士兵之弓（Soldier's Bow）", "how": "舞娘公会门外宝箱；也是发明家技能「加速之锤」素材" },
        { "item": "刺激果实L（Invigorating Nut (L)）", "how": "隐藏物品：夜晚收买酒馆后方的「神秘商人」(1000叶)后出现在入口附近" },
        { "item": "活力荔枝（Empowering Lychee）", "how": "隐藏物品：探听旅店内的店主后出现在酒馆北侧台阶底部" },
        { "item": "强化血清（Strengthening Serum）", "how": "隐藏物品：探听舞娘公会南侧的「女孩的继父」后出现在镇东侧空摊位旁" },
        { "item": "滑溜果实（Slippery Nut）", "how": "隐藏物品：探听舞娘公会舞台左侧的见习舞娘后出现在旅店北侧" },
        { "item": "风之精灵石（Wind Soulstone）", "how": "隐藏物品：探听秘密之森入口旁的商人后出现在通往阿尔隆德宅邸的路上" },
        { "item": "玻璃弹珠（Glass Marble）", "how": "隐藏物品：夜晚探听镇西侧的年轻男子后出现在酒馆外" },
        { "item": "隼之外套（Falcon Coat）", "how": "隐藏物品：探听酒馆北侧大建筑外的行商后出现在旅店内" },
        { "item": "重骨长枪（Heavy Bone Spear）", "how": "隐藏物品：探听百货商店2楼唱片店前的商人后出现在2楼中央休息区北侧花坛旁（帕尔提提欧第3章后）" }
      ],
      "npcs": [
        { "name": "入口右侧的男子（商人）", "item": "醒神李子篮（Inspiriting Plum Basket）、刺激果实（Invigorating Nut）", "method": "偷窃", "note": "白天，站在入口旁" },
        { "name": "行商（Peddler）", "item": "皮革小圆盾（Leather Buckler）、魅力长袍（Charm Robe）、骑士头盔（Knight's Helm）", "method": "偷窃", "note": "白天，旅店与酒馆北侧大建筑外；探听可得旅店内隐藏物品（较难）" },
        { "name": "士兵（2名）", "item": "骑士巨弓（Knight's Greatbow）、角盔（Horned Helm）、破灭者（Doombreaker）", "method": "强夺/恳求", "note": "仅夜晚出现在入口；其一收买5000叶得「偷窃技巧」情报（提升本镇偷窃成功率）" },
        { "name": "旅店内的男子", "item": "清爽果酱（Refreshing Jam）、锐利果实L（Sharp Nut (L)）、扩散血清（Diffusing Serum）", "method": "偷窃", "note": "白天；探听可得酒馆北侧台阶下的隐藏活力荔枝" },
        { "name": "神秘商人（Mysterious Merchant）", "item": "滋养果实L、抵抗果实L、魔力果实L", "method": "恳求", "note": "夜晚在酒馆后方，阿格妮娅约20级可恳求；收买1000叶告知刺激果实L位置" },
        { "name": "见习舞娘（舞娘公会内）", "item": "刺激项链（Stimulating Necklace，SP+80）", "method": "偷窃/购买", "note": "非常推荐，适合法系角色" },
        { "name": "舞娘（舞娘公会台阶上）", "item": "敏捷手镯（Sprightly Bracelet，速度+50）", "method": "偷窃/购买", "note": "适合索洛奈等速度型角色" },
        { "name": "百货商店2楼商人", "item": "铁皮玩具（Tin Toy）", "method": "强夺/恳求", "note": "帕尔提提欧第3章后、仅夜晚；发明家技能「铁皮号角」素材" },
        { "name": "百货商店入口柱旁的人", "item": "石英长袍（Quartz Robe）、钻石盾（Diamond Shield）", "method": "强夺/恳求", "note": "帕尔提提欧第3章后、夜晚" },
        { "name": "百货商店入口另一人", "item": "噬魂剑（Soulsucker）、吸血刃（Bloodsucker）、火之护符（Fire Amulet）", "method": "强夺/恳求", "note": "帕尔提提欧第3章后、夜晚" },
        { "name": "百货商店圣堂骑士", "item": "重型巨盾（Heavy Greatshield）、圣骑士之枪（Paladin's Lance）、骑士头盔（Knight's Helm）", "method": "强夺/恳求", "note": "帕尔提提欧第3章后、夜晚，站在百货商店入口；实力很强，建议用阿格妮娅「恳求」而非奥斯瓦尔德「强夺」" },
        { "name": "百货商店右上角店外的女子", "item": "白金手斧（Platinum Hatchet）", "method": "偷窃/购买", "note": "帕尔提提欧第3章后、白天" },
        { "name": "老卫兵（Elderly Guard）", "item": "支线「米拉与老卫兵的后续」", "method": "引导", "note": "索洛奈全篇完成后出现在道具店东侧" }
      ],
      "shops": [
        "入口处武器/防具摊：精炼之剑、破灭者、角盔、元素长袍等",
        "百货商店（帕尔提提欧第3章后开放）：武器店（巨人之刃、雷光长柄刀、狙击之弓、兽王弓、世界树之杖等）、防具店（白金盾、白金盔、白金铠、星光帽、杂技斗篷、龙之围巾等）、全种类状态回复药草、药师调合素材、唱片18~24号"
      ],
      "tips": "三条第3章推荐等级为光26/索洛奈31/帕尔提提欧35，可按此顺序推进。南出口通往母亲花园，西出口通往秘密之森，北侧是阿尔隆德宅邸。声望恢复需6000叶。"
    },
    {
      "id": "alrond_estate",
      "name": "阿尔隆德宅邸",
      "en": "Wellgrove: Alrond's Estate",
      "type": "town",
      "pos": [50.5, 66],
      "level": "35",
      "desc": "韦尔格罗夫领主、富豪阿尔隆德的宅邸，帕尔提提欧第3章最终战在此迷雾中进行。",
      "story": ["帕尔提提欧 第3章"],
      "boss": [
        { "name": "雾中之敌（萨斯顿）", "en": "Enemy in the Mist（Thurston）", "level": "35", "weakness": ["剑", "斧", "弓", "冰", "风"], "tips": "HP约35000、4盾。开场「浓雾中看不见目标」：锁定弱点且闪避一切攻击，须先摧毁后排蒸汽机（弱点：枪、短剑、火、雷）。萨斯顿会用「紧急维修」解除蒸汽机的击破状态、「修理」让其复活，因此最好在他行动顺序靠后时击破蒸汽机并一口气摧毁。HP降到约一半（约2万）以下时召唤9盾的新型蒸汽机（弱点：短剑、杖、风、暗），战术相同。可在此偷取（Collect）约17000叶；帕尔提提欧的「雇佣帮手：老兵」配合潜在力爆发很有效。" }
      ],
      "treasures": [
        { "item": "活力荔枝L（Empowering Lychee (L)）", "how": "宅邸庭院右侧宝箱" },
        { "item": "灵巧斗篷（Nimble Mantle）", "how": "过桥后左侧宝箱，性能优秀" }
      ],
      "npcs": [
        { "name": "管家米沙（Misha）", "item": "支线「米沙的后续」", "method": "探听", "note": "帕尔提提欧全篇完成后可接" }
      ],
      "shops": [],
      "tips": "宅邸是韦尔格罗夫的子区域，建筑内没有商店、旅店，也没有可拿的宝箱（两只宝箱都在过桥后的前庭）。完成「米沙的后续」后，可用路径技能招募阿尔隆德作同伴（社区常用于提升经验获取效率练级）。"
    },
    {
      "id": "secret_forest",
      "name": "秘密之森",
      "en": "Secret Forest",
      "type": "dungeon",
      "pos": [35.3, 67.3],
      "level": "26",
      "desc": "韦尔格罗夫西侧的森林，非法军火交易的地点，光第3章的迷宫。",
      "story": ["光 第3章"],
      "boss": [
        { "name": "罗将军", "en": "General Rou", "level": "26", "weakness": ["枪", "弓", "雷"], "tips": "需在白天由光「挑战」进行一对一决斗（之前先与全队击败3名库国士兵，弱点：枪、斧、冰、光）。4盾，攻击单调：半血后「蓄力架势」永久提升攻击，「神威双刃」连斩两次。带好回复道具，光装备剑士被动「复仇之刃」可在被攻击时削盾；也可让光副职业为药师叠加防御与持续回复。击败后可学会其技能，掉落强防果实L。" }
      ],
      "treasures": [
        { "item": "光之护符（Light Amulet）", "how": "进入后靠近韦尔格罗夫出口、路北侧的宝箱" },
        { "item": "小乌鸦（Little Crow）", "how": "最北侧小路（环形路北端）尽头，剑类武器" },
        { "item": "10000叶", "how": "木桥正东方" },
        { "item": "清爽果酱（Refreshing Jam）", "how": "存档点西南方台阶上的宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "存档点在深处交易现场前，Boss战前务必回复。"
    },
    {
      "id": "road_to_mothers_garden",
      "name": "通往母亲花园之路",
      "en": "Road to Mother's Garden",
      "type": "field",
      "pos": [46.1, 80.8],
      "level": "30",
      "desc": "韦尔格罗夫南侧通往孤儿院的道路。",
      "story": ["索洛奈 第3章（母亲篇）"],
      "boss": [],
      "treasures": [
        { "item": "勇气药草（Herb of Valor）", "how": "从韦尔格罗夫入口向南不久，东侧台阶下" },
        { "item": "刺痛短剑（Stinging Dagger）", "how": "主路转向南之后、独木舟码头之前，东侧半隐藏小路" },
        { "item": "醒神李子M（Inspiriting Plum (M)）", "how": "码头乘独木舟，河道中小岛上的宝箱" },
        { "item": "沉默头巾（Silent Bandana）", "how": "从该小岛继续向北，钻过桥下进入洞窟；可防恐惧，母亲战非常有用" },
        { "item": "活力荔枝L（Empowering Lychee (L)）", "how": "孤儿院大门西侧，存档点旁向左绕过围墙的隐藏宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "务必拿到沉默头巾，与母亲花园的镇静之石一起装备在主力输出身上。"
    },
    {
      "id": "mothers_garden_orphanage",
      "name": "母亲花园孤儿院",
      "en": "Mother's Garden: Orphanage",
      "type": "town",
      "pos": [39.5, 92.5],
      "level": "31",
      "desc": "表面受修道院支持的孤儿院，实为黑蛇母亲培养孩子做盗贼的据点。",
      "story": ["索洛奈 第3章（母亲篇）"],
      "boss": [],
      "treasures": [],
      "npcs": [
        { "name": "莫罗佐夫（Morozov）", "item": "母亲花园的钥匙", "method": "偷窃", "note": "索洛奈第3章剧情必需" }
      ],
      "shops": [],
      "tips": "需偷到修女服伪装后才能进入。院内没有商店、旅店和宝箱（来路上5只、后方花园5只）。剧情结束后孤儿院摆脱黑蛇控制，音乐与NPC对话都会改变。"
    },
    {
      "id": "mothers_garden",
      "name": "母亲花园",
      "en": "Mother's Garden",
      "type": "dungeon",
      "pos": [37.8, 81.7],
      "level": "31",
      "desc": "孤儿院后方的修剪庭园，尽头的黑钟塔是惩罚孩子的地方，索洛奈第3章母亲篇的迷宫。",
      "story": ["索洛奈 第3章（母亲篇）"],
      "boss": [
        { "name": "母亲", "en": "Mother", "level": "31", "weakness": ["短剑", "弓", "冰", "光"], "tips": "HP约42000、6盾，可偷醒神李子篮。会用「母亲最懂」施加恐惧（无法积蓄/使用BP），以及「束缚」使人昏迷；装备镇静之石与沉默头巾防恐惧。HP降低后鞭子附带恐惧并强化自身：盾数提升、每回合行动两次。" },
        { "name": "母亲的副手", "en": "Mother's Aide", "level": "31", "weakness": ["剑", "杖", "火", "雷"], "tips": "HP约21000、4盾，不会被再召唤，优先击倒。「挖眼」致盲、「肩撞」降物防；母亲对其使用「爱之鞭」后会蓄力放出高伤「不祥颤动」，需及时击破。" }
      ],
      "treasures": [
        { "item": "治愈葡萄串（Healing Grape Bunch）", "how": "入口处向左（西）" },
        { "item": "镇静之石（Calming Stone）", "how": "不进树篱拱门，一直向西走到底；防恐惧" },
        { "item": "角盔（Horned Helm）", "how": "进入树篱拱门后立刻向右的岔路（HP+100）" },
        { "item": "13000叶", "how": "树篱迷宫中路再向右的岔路" },
        { "item": "清爽果酱（Refreshing Jam）", "how": "穿过迷宫继续向北时，右侧岔路" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "无论昼夜都是满月夜景。进入最终钟楼战前做好补给与装备调整。"
    },
    {
      "id": "south_timberain_trail",
      "name": "南汀巴雷因森道",
      "en": "Southern Timberain Trail",
      "type": "field",
      "pos": [45.6, 52.3],
      "level": "45",
      "desc": "汀巴雷因南侧的湖畔森道，东接北韦尔格罗夫森道，西北通往韦罗兹家宅邸。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "3000叶", "how": "宝箱" },
        { "item": "活力石榴M（Energizing Pomegranate (M)）", "how": "宝箱" },
        { "item": "催眠之剑（Hypno Sword）", "how": "需乘独木舟、沿梯子上下前往的小岛，湖边瀑布附近" },
        { "item": "清爽果酱（Refreshing Jam）", "how": "宝箱" },
        { "item": "被盗之剑（Stolen Sword）", "how": "隐藏物品：支线「正义的证明」进行中出现在向北走到彩虹与瀑布处（凶器）" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "完成纹之地支线「神秘的盒子」前，夜晚凉亭旁会出现幽灵少女；完成后凉亭出现「破旧的日记」。携带神秘盒子靠近宅邸方向会听到「还给我」。"
    },
    {
      "id": "house_wellows_manor",
      "name": "韦罗兹家宅邸",
      "en": "House Wellows Manor",
      "type": "dungeon",
      "pos": [38.6, 54],
      "level": "50",
      "desc": "韦罗兹一家惨遭杀害后荒废的闹鬼宅邸，可选高难度迷宫，系列首座鬼屋。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "诅咒铠甲（Cursed Armor）", "how": "宝箱" },
        { "item": "还魂橄榄（特大）（Olive of Life (L)）", "how": "宝箱" },
        { "item": "禁忌之斧（Forbidden Axe）", "how": "宝箱" },
        { "item": "治愈葡萄串（Healing Grape Bunch）", "how": "宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "没有背景音乐，战斗也无战斗曲。出现的恶魔鹿HP约15000、7盾，远强于普通个体，掉落/可偷原始鹿角药剂（药师追加职业证相关素材）。纹之地支线「神秘的盒子」需在夜晚把盒子交给2楼被划破肖像画房间里出现的幽灵女子。"
    },
    {
      "id": "timberain",
      "name": "汀巴雷因",
      "en": "Timberain",
      "type": "town",
      "pos": [42.2, 40.5],
      "level": "45",
      "desc": "被森林环绕的湖畔王国首都，贵族势力强大，法院审理西大陆各地案件；卡丝蒂第4章的舞台。",
      "story": ["卡丝蒂 第4章"],
      "boss": [],
      "treasures": [
        { "item": "守护项链（Protective Necklace）", "how": "法院右侧梯子下到码头，乘独木舟前往附近小岛上的宝箱" },
        { "item": "醒神李子篮（Inspiriting Plum Basket）", "how": "隐藏物品：探听入口处的男孩，位于北侧旅店外" },
        { "item": "星光帽（Starlight Hat）", "how": "隐藏物品：探听道具店内老人，位于东南角酒馆旁民宅内" },
        { "item": "光之果实（Light Nut）", "how": "隐藏物品：探听法院门外左侧男子，位于法院入口附近" },
        { "item": "蔚蓝太阳之剑（Azure Sun Sword）", "how": "隐藏物品（关键道具）：支线「有罪的证明」中探听酒馆附近老人后出现在旅店旁" }
      ],
      "npcs": [
        { "name": "入口处的男孩", "item": "刺激果实L（Invigorating Nut (L)）", "method": "偷窃", "note": "白天；旁边女子可探听「更容易探听」" },
        { "name": "道具店内老人", "item": "抵抗果实M（Resistant Nut (M)）", "method": "偷窃", "note": "白天" },
        { "name": "武器店内士兵", "item": "重型巨盾（Heavy Greatshield）", "method": "强夺/恳求", "note": "夜晚；收买得「新装备上架」情报" },
        { "name": "北侧女子", "item": "锐利果实（Sharp Nut）/旅店打折情报", "method": "偷窃/探听", "note": "白天" },
        { "name": "桥东南侧的士兵", "item": "英雄之斧（Hero's Axe，物攻+340）、活力项链（Empowering Necklace，HP+1000）", "method": "偷窃/购买", "note": "白天；部分攻略记为法官持有，以游戏内为准" },
        { "name": "法官（法院前）", "item": "祝福法衣（Blessed Vestments，属攻+74/物防+130/属防+215）、神盾锤（Aegis Mace）", "method": "偷窃/购买", "note": "祝福法衣偷窃率很低，帕尔提提欧购买不到3万叶，强烈推荐给法系角色" },
        { "name": "士兵（酒馆附近）", "item": "穿刺短剑（Piercing Dagger）", "method": "强夺/恳求", "note": "夜晚；收买得「偷窃技巧」情报" },
        { "name": "酒馆内士兵", "item": "巨盔（Great Helm）、会心项链（Critical Necklace）", "method": "强夺", "note": "夜晚，两件都很强" },
        { "name": "梅兰（Meylan）", "item": "支线「无罪的证明」「有罪的证明」", "method": "引导/探听", "note": "法院外的卫兵" }
      ],
      "shops": ["武器防具店：银剑、帝国之斧、近卫手斧、神盾、帝国头盔/铠甲、近卫头盔/铠甲、活力手镯等", "道具店：扩散血清、强化血清、各类M级回复品与药草"],
      "tips": "声望恢复需15000叶。奥斯瓦尔德第1章的审判场景就发生在本地法院。偷窃前建议先收买夜晚士兵获得「偷窃技巧」。"
    },
    {
      "id": "timberain_castle_square",
      "name": "汀巴雷因城广场",
      "en": "Timberain Castle: Town Square",
      "type": "town",
      "pos": [45.6, 37],
      "level": "45",
      "desc": "汀巴雷因王城前的广场，守卫着秘密通道的老兵身上有传说中的驱魔之弓。",
      "story": ["卡丝蒂 第4章"],
      "boss": [],
      "treasures": [
        { "item": "生锈的长枪（Rusty Polearm）", "how": "西侧老兵把守的仓库：打昏老兵后，从仓库右侧门进入隐蔽通道一路向东，走到尽头的宝箱" },
        { "item": "风之精灵石L（Wind Soulstone (L)）", "how": "城门左侧的宝箱" },
        { "item": "魔力果实M（Magic Nut (M)）", "how": "隐藏物品：探听北侧小女孩，位于右侧楼梯下" }
      ],
      "npcs": [
        { "name": "老兵（Elderly Soldier）", "item": "驱魔之弓（Exorcising Bow）、敏捷项链（Sprightly Necklace）", "method": "偷窃/购买", "note": "驱魔之弓物攻+339、速度+110，购买价61750叶，也可强夺或阿格妮娅约73级恳求；他会挡住仓库入口，需挑战/伏击打昏" },
        { "name": "王室园丁（Royal Gardener）", "item": "恩典药草芽（Herb-of-Grace Bud）", "method": "偷窃", "note": "进广场后右侧第二人；据Neoseeker为药师追加职业证所需" },
        { "name": "蒂芙尼（Tiffany）", "item": "古代头冠（Ancient Circlet）", "method": "偷窃", "note": "支线「被迫的婚约」委托人，头冠适合法系角色" },
        { "name": "右侧楼梯下的老人", "item": "会心果实L（Critical Nut (L)）", "method": "偷窃", "note": "白天" },
        { "name": "右侧建筑内士兵", "item": "情报「挑衅高手」（Provoke Like a Pro）", "method": "收买", "note": "提升挑衅/挑战相关成功率" }
      ],
      "shops": [],
      "tips": "广场没有商店和旅店，买卖在汀巴雷因城内。卡丝蒂第4章前城门被铁栅封住；她的故事完成后改由守卫把守，需打昏守卫才能进城。"
    },
    {
      "id": "timberain_castle",
      "name": "汀巴雷因城（含屋顶）",
      "en": "Timberain Castle / Timberain Castle: Roof",
      "type": "dungeon",
      "pos": [44.5, 32.9],
      "level": "45",
      "desc": "汀巴雷因王族的巨大城堡，卡丝蒂第4章中特鲁索在屋顶降下毒雨。",
      "story": ["卡丝蒂 第4章"],
      "boss": [
        { "name": "药师特鲁索", "en": "Trousseau", "level": "45", "weakness": ["阶段1：枪/斧/冰/暗", "阶段2：剑/枪/斧/杖/冰/雷/暗"], "tips": "HP约95000，盾8→12，开场每回合行动2次。「雨开始下了」后每回合开始全员最大HP-75；HP≤50%时「雨势变强」：盾上限升至12，并追加剑、杖、雷弱点，此后每回合我方与他自己最大HP各-150，必须速战速决。会施加毒、盲、沉默、混乱、睡眠，「扩散感染」把一名角色的异常传给全员；「开始调合」蓄力后放全体多重异常，HP≤25%时蓄力「贪婪饥饿」削减全员50%SP与5点BP。带足异常回复与防异常饰品，在蓄力回合内击破。掉落还魂橄榄（特大）。" }
      ],
      "treasures": [
        { "item": "破灭之刃（Cleaver of Destruction）", "how": "城内宝箱" },
        { "item": "扩散血清（Diffusing Serum）", "how": "城内宝箱" },
        { "item": "药草精华（Herb Elixir）", "how": "城内宝箱" },
        { "item": "梦幻花（Dreamy Flower）", "how": "城内宝箱" },
        { "item": "魔导士长袍（Mage's Robe）", "how": "屋顶宝箱" },
        { "item": "23000叶", "how": "屋顶宝箱" },
        { "item": "龙之头盔（Dragon's Helm）", "how": "屋顶宝箱" },
        { "item": "活力石榴L（Energizing Pomegranate (L)）", "how": "屋顶宝箱" },
        { "item": "强化血清（Strengthening Serum）", "how": "屋顶宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "城内敌人约45~50级（冰系守卫机械、火元素、林鸟王等）。卡丝蒂第4章期间屋顶完全无音乐。"
    }
  ],
  "roads": [
    ["timberain", "timberain_castle_square"],
    ["timberain", "timberain_castle"],
    ["timberain", "south_timberain_trail"],
    ["south_timberain_trail", "house_wellows_manor"],
    ["south_timberain_trail", "north_wellgrove_trail"],
    ["north_wellgrove_trail", "altar_lady_of_grace"],
    ["north_wellgrove_trail", "south_cropdale_trail"],
    ["north_wellgrove_trail", "east_wellgrove_trail"],
    ["east_wellgrove_trail", "wellgrove"],
    ["wellgrove", "alrond_estate"],
    ["wellgrove", "secret_forest"],
    ["wellgrove", "road_to_mothers_garden"],
    ["road_to_mothers_garden", "mothers_garden_orphanage"],
    ["mothers_garden_orphanage", "mothers_garden"],
    ["south_cropdale_trail", "starfall_spring"],
    ["south_cropdale_trail", "east_cropdale_trail"],
    ["east_cropdale_trail", "cropdale"],
    ["cropdale", "forest_path"],
    ["forest_path", "festival_grounds"],
    ["forest_path", "veil_of_trees"],
    ["forest_path", "animal_trail"]
  ],
  "links": [
    {"from": "east_cropdale_trail", "region": "wildlands", "to": "crackridge_anchorage"},
    {"from": "south_cropdale_trail", "region": "wildlands", "to": "south_oresrush_wilds"},
    {"from": "east_wellgrove_trail", "region": "hinoeuma", "to": "western_sai_sands"}
  ],
  "story": [
    {
      "title": "阿格妮娅 第1章：舞者的启程",
      "character": "阿格妮娅",
      "location": "cropdale",
      "level": "1",
      "summary": "阿格妮娅在库罗普提尔的酒馆跳舞攒够了1万叶旅费，准备前往明之地新德尔斯塔追逐明星梦。出发前夜帮忙筹备丰收祭时，妹妹帕拉到森林摘覆盆子失踪，森林中还出现了巨大野猪杜欧尔杜欧尔的蹄印。",
      "steps": [
        "在酒馆收取客人的小费，之后回家",
        "前往祭典会场帮忙，用「诱惑」带帮手去见村民",
        "进入薄暗之森寻找帕拉",
        "向父亲加鲁德「恳求」取得道具",
        "击败杜欧尔杜欧尔后在祭典献舞，翌日前往村口出发"
      ],
      "boss": "杜欧尔杜欧尔（弱点：短剑、斧、风）",
      "tips": "Boss召唤的森林土拨鼠弱火与枪，可在村中诱惑持有对应技能的NPC。在「看起来很激动」的蓄力回合内击破以阻止「野猪冲撞」。"
    },
    {
      "title": "卡丝蒂&奥修特 交汇篇 第1部：森林的异变",
      "character": "卡丝蒂、奥修特",
      "location": "animal_trail",
      "level": "16",
      "summary": "两人路过库罗普提尔，发现肉质变差、狩猎不顺，于是深入兽道调查，遭遇失控的杜欧尔杜欧尔。击败后卡丝蒂为它治疗，奥修特与森林动物对话，得知异变的端倪。",
      "steps": [
        "卡丝蒂与奥修特都完成第2章后，两人同时在队伍中前往库罗普提尔触发",
        "从村北的森林小道乘独木舟往东进入兽道",
        "击败狂暴杜欧尔杜欧尔",
        "继续往东与动物交谈，结束本篇"
      ],
      "boss": "狂暴杜欧尔杜欧尔（弱点：剑、弓、杖、火）",
      "tips": "交汇篇战斗可全队参战，奥修特用弓即可快速破盾。剧情后岔路南侧宝箱有宁静药草。"
    },
    {
      "title": "卡丝蒂&奥修特 交汇篇 第2部：黑暗中的身影",
      "character": "卡丝蒂、奥修特",
      "location": "animal_trail",
      "level": "45",
      "summary": "两人再访库罗普提尔，想去探望上次救下的杜欧尔杜欧尔「乌利乌利」。兽道变得一片死寂，怪异的影子挡在路上，最终与潜伏之影决战，背后暗示着更大的黑暗。",
      "steps": [
        "完成第1部，且卡丝蒂第4章、奥修特第3章（全篇）结束后，在库罗普提尔酒馆与店主交谈触发",
        "经森林小道前往兽道",
        "由奥修特「挑衅」怪异的影子，用伙伴魔物击败",
        "治疗乌利乌利后在旁存档，继续向东",
        "击败潜伏之影"
      ],
      "boss": "怪异的影子（弱点：剑、短剑、弓、风、光）；潜伏之影（弱点：枪、斧、弓、冰、光）",
      "tips": "潜伏之影招式以暗属性为主，提高暗抗或降低其属性攻击即可轻松取胜；不要用暗属性攻击它。"
    },
    {
      "title": "光 第3章：秘密之森的军火交易",
      "character": "光",
      "location": "secret_forest",
      "level": "26",
      "summary": "光听从卡赞的建议来到韦尔格罗夫，要阻止运往库国的武器。商人阿兹玛收钱后透露交易将在西边森林深处进行。光在秘密之森现身阻止，与先王最信任的将军「野牛」罗决斗。",
      "steps": [
        "在韦尔格罗夫找到商人阿兹玛并「收买」（夜晚）",
        "从西出口进入秘密之森",
        "与全队击败3名库国士兵",
        "白天由光「挑战」罗将军进行单挑"
      ],
      "boss": "罗将军（弱点：枪、弓、雷）",
      "tips": "单挑战只有光一人，提前准备回复道具；剑士被动「复仇之刃」很好用。战后武器被运往琉，光的下一站是冬之地斯托姆黑尔。"
    },
    {
      "title": "索洛奈 第3章（母亲篇）：母亲花园",
      "character": "索洛奈",
      "location": "mothers_garden",
      "level": "31",
      "summary": "根据奴隶商人的情报，索洛奈追踪「母亲」来到韦尔格罗夫郊外的孤儿院母亲花园。她偷来修女服混入其中，看到母亲给少女米拉戴上项圈，并得知惩罚孩子的门钥匙在莫罗佐夫手上，最终在黑钟塔与母亲对决。",
      "steps": [
        "在韦尔格罗夫偷取修女服（Steal a habit）",
        "经通往母亲花园之路进入孤儿院并四处查看",
        "向莫罗佐夫偷取母亲花园的钥匙",
        "穿过母亲花园，在尽头钟塔与母亲决战"
      ],
      "boss": "母亲（弱点：短剑、弓、冰、光）＋母亲的副手（弱点：剑、杖、火、雷）",
      "tips": "先击倒副手；在通往母亲花园之路拿沉默头巾、母亲花园拿镇静之石防恐惧。两把钥匙都无法打开项圈，下一步前往新德尔斯塔寻找答案。"
    },
    {
      "title": "帕尔提提欧 第3章：韦尔格罗夫百货商店",
      "character": "帕尔提提欧",
      "location": "alrond_estate",
      "level": "35",
      "summary": "为了凑齐向罗克购买蒸汽机的800亿叶，帕尔提提欧来韦尔格罗夫拜访富豪阿尔隆德。阿尔隆德要求他振兴萧条的城镇作为条件，帕尔提提欧想出把所有商家集中到一处——世界第一家百货商店。商店大获成功后，宅邸却被迷雾笼罩，罗克的前秘书萨斯顿前来行刺。",
      "steps": [
        "逛城镇，帮差点被骗的年轻人（实为阿尔隆德本人）完成一笔漂亮的生意",
        "前往阿尔隆德宅邸，接受振兴城镇的条件",
        "找到空建筑，夜晚「雇佣」3名商人",
        "请记者奥莉宣传，并「购买」3种商品（咖啡豆、怀表、银器；也可能是特制小麦粉、优质纸张等替代品，视已完成的「商业气息」而定），至少需先完成1个「商业气息」",
        "回宅邸报告，进入迷雾前往阿尔隆德的房间迎战"
      ],
      "boss": "雾中之敌／萨斯顿（弱点：剑、斧、弓、冰、风），伴随蒸汽机（枪、短剑、火、雷）与新型蒸汽机（短剑、杖、风、暗）",
      "tips": "必须先摧毁蒸汽机才能打到萨斯顿，并留足行动在他修好蒸汽机前集中输出。完成后获得800亿叶支票，前往港湾之地罗克岛。"
    },
    {
      "title": "卡丝蒂 第4章：紫色之雨",
      "character": "卡丝蒂",
      "location": "timberain_castle",
      "level": "45",
      "summary": "恢复全部记忆的卡丝蒂赶到汀巴雷因，要阻止昔日同伴特鲁索在加冕典礼上降下剧毒紫雨。她与埃德蒙重逢，在格里夫指挥官的支持下让士兵疏散居民，随后独自登上城顶与特鲁索决战，并调合解药救治所有中毒者。",
      "steps": [
        "在城中打听情报，与埃德蒙重逢",
        "到酒馆说服士兵，得到格里夫指挥官的支持",
        "疏散居民后前往汀巴雷因城",
        "穿过城内登上屋顶，与特鲁索决战"
      ],
      "boss": "药师特鲁索（阶段1：枪、斧、冰、暗，8盾；阶段2：剑、枪、斧、杖、冰、雷、暗，12盾）",
      "tips": "战斗中最大HP会每回合被削减，拖得越久越危险；备好异常状态回复与防护饰品，集中在其蓄力回合击破。"
    }
  ],
  "sidequests": [
    {
      "name": "库罗普织物复兴",
      "en": "Crop Revival",
      "location": "cropdale",
      "trigger": "阿格妮娅第1章完成后，与存档点旁的织工交谈",
      "steps": [
        "前往村北森林小道，向「老妇人之子」探听（卡丝蒂/奥斯瓦尔德）",
        "乘独木舟前往森林小道北侧的水车小屋，取得库罗普织物图样（Crop Tapestry Pattern）",
        "交给织工"
      ],
      "reward": "3000叶、刺激果实（Invigorating Nut）、醒神李子M",
      "difficulty": "易"
    },
    {
      "name": "醉酒的贵族",
      "en": "The Soused Nobleman",
      "location": "cropdale",
      "trigger": "阿格妮娅第1章完成后，夜晚在酒馆与里面的女招待交谈",
      "steps": [
        "用打昏类路径技能（伏击/挑战/挑衅/安抚等）让大声喧哗的醉酒贵族失去意识",
        "回报女招待"
      ],
      "reward": "4000叶、繁荣护符（Prosperity Charm）",
      "difficulty": "易"
    },
    {
      "name": "无用的果实",
      "en": "Useless Fruit",
      "location": "wellgrove",
      "trigger": "韦尔格罗夫舞娘公会外左侧的两名男子（体贴的青年）",
      "steps": [
        "前往库罗普提尔，向道具店外的「博学的村民」探听情报「井鸢尾的用途」",
        "回韦尔格罗夫告诉委托人"
      ],
      "reward": "6000叶、野兽围巾（Beastly Scarf）",
      "difficulty": "易"
    },
    {
      "name": "孩子的心愿",
      "en": "Through a Child's Eyes",
      "location": "wellgrove",
      "trigger": "旅店左侧的忧郁女孩",
      "steps": [
        "用引导/诱惑类路径技能带上女孩的母亲（镇中心酒馆与旅店之间）",
        "再带上女孩的继父（北侧舞娘公会外）；队伍中需有两个引导名额",
        "带两人去见女孩"
      ],
      "reward": "5000叶、慈悲护符（Charm of Compassion）",
      "difficulty": "易"
    },
    {
      "name": "米沙的后续",
      "en": "Misha's Next Chapter",
      "location": "alrond_estate",
      "trigger": "帕尔提提欧全篇（第4章）完成后，与阿尔隆德宅邸的管家米沙交谈",
      "steps": [
        "米沙想知道阿尔隆德每晚偷偷外出做什么",
        "夜晚向「散步的镇民」收买（光），得到「棕色外套男子」等目击情报",
        "白天用卡丝蒂/奥斯瓦尔德向「热心的镇民」探听",
        "汇总情报「阿尔隆德的目击证词」交给米沙"
      ],
      "reward": "15000叶、管家燕尾服（Butler's Tailcoat）；之后可招募阿尔隆德",
      "difficulty": "易"
    },
    {
      "name": "米拉与老卫兵的后续",
      "en": "Mira and the Elderly Guard's Next Chapter",
      "location": "wellgrove",
      "trigger": "索洛奈全篇（第4章）完成后，与道具店东侧的老卫兵交谈",
      "steps": [
        "用泰米诺斯等的引导类技能让老卫兵同行",
        "前往明之地失落之种（Lostseed），途经废弃街道与缆车",
        "进入失落之种后往西爬上台阶触发剧情"
      ],
      "reward": "9000叶、复仇之刃（Vengeful Knife）",
      "difficulty": "中"
    },
    {
      "name": "无罪的证明",
      "en": "Proof of Innocence",
      "location": "timberain",
      "trigger": "汀巴雷因法院外与卫兵梅兰交谈",
      "steps": [
        "夜晚带泰米诺斯或阿格妮娅前往城镇北侧的桥",
        "引导/诱惑「病弱的女子」",
        "带她去见梅兰，她的证词证明被告的不在场"
      ],
      "reward": "11000叶、滋养果实L（Nourishing Nut (L)）、还魂橄榄M",
      "difficulty": "易"
    },
    {
      "name": "有罪的证明",
      "en": "Proof of Guilt",
      "location": "timberain",
      "trigger": "完成「无罪的证明」后再与梅兰交谈（没触发时切换为夜晚）",
      "steps": [
        "进入法院获取信息",
        "向法院南侧（酒馆前）的「悔恨的老人」探听",
        "拾取旅店旁出现的隐藏物品「蔚蓝太阳之剑」",
        "交给梅兰（部分攻略注明需在夜晚交付）"
      ],
      "reward": "12000叶、会心果实L（Critical Nut (L)）",
      "difficulty": "易"
    },
    {
      "name": "正义的证明",
      "en": "Proof of Justice",
      "location": "timberain",
      "trigger": "完成「无罪的证明」与「有罪的证明」后，在法庭内与旁听者交谈（梅兰被诬陷杀人）",
      "steps": [
        "（需先完成「有罪的证明」，并向法院书记员、速记员探听）前往南汀巴雷因森道，向北走到彩虹与瀑布处拾取隐藏物品「被盗之剑」（凶器）",
        "前往明之地新德尔斯塔：后巷，在通往游戏厅的街上向「阴郁的老妇人」（梅兰的姑妈）探听「杀手的动机」",
        "带着证物与情报回法院"
      ],
      "reward": "30000叶、强防果实L（Fortifying Nut (L)）、魔力果实L（Magic Nut (L)）",
      "difficulty": "中"
    },
    {
      "name": "被迫的婚约",
      "en": "A Forced Hand",
      "location": "timberain_castle_square",
      "trigger": "汀巴雷因城广场与蒂芙尼交谈：她不想嫁给素未谋面的蒙特怀斯人马尔杰罗",
      "steps": [
        "解法1：前往纹之地蒙特怀斯图书馆北侧，引导马尔杰罗带回见蒂芙尼（两人和平分手）",
        "解法2：用卡丝蒂/奥斯瓦尔德向马尔杰罗的助手探听「马尔杰罗的为人」，告诉蒂芙尼（两人开始交往）",
        "两种结局奖励相同"
      ],
      "reward": "15000叶、精神腰带（Mental Belt）",
      "difficulty": "中"
    }
  ],
  "items": [
    { "name": "驱魔之弓", "en": "Exorcising Bow", "type": "武器", "location": "timberain_castle_square", "how": "城广场西侧老兵：偷窃、购买（61750叶）、强夺，或阿格妮娅约73级恳求", "effect": "物攻+339、速度+110，攻击时小几率降低目标属性攻击" },
    { "name": "生锈的长枪", "en": "Rusty Polearm", "type": "武器", "location": "timberain_castle_square", "how": "打昏老兵后进入仓库，右侧门后长通道尽头的宝箱", "effect": "交给荒野之地格拉维尔的波尔塔可解锁武器大师并重铸为神器长枪" },
    { "name": "英雄之斧", "en": "Hero's Axe", "type": "武器", "location": "timberain", "how": "白天向汀巴雷因过桥后东南侧士兵偷窃/购买（Game8记为法官持有）", "effect": "物攻+340、速度+102" },
    { "name": "祝福法衣", "en": "Blessed Vestments", "type": "防具", "location": "timberain", "how": "向法院前的法官偷窃（成功率低）或购买（约3万叶以内）", "effect": "属攻+74、物防+130、属防+215" },
    { "name": "活力项链", "en": "Empowering Necklace", "type": "饰品", "location": "timberain", "how": "与英雄之斧为同一NPC持有，偷窃/购买", "effect": "最大HP+1000" },
    { "name": "巨盔 / 会心项链", "en": "Great Helm / Critical Necklace", "type": "防具", "location": "timberain", "how": "夜晚强夺酒馆内士兵", "effect": "巨盔：物防/属防+59、速度+49" },
    { "name": "刺激果实L", "en": "Invigorating Nut (L)", "type": "道具", "location": "timberain", "how": "偷窃汀巴雷因入口处的男孩；韦尔格罗夫另有一颗为隐藏物品", "effect": "大幅提升最大SP" },
    { "name": "会心果实L", "en": "Critical Nut (L)", "type": "道具", "location": "timberain_castle_square", "how": "偷窃城广场右侧楼梯下的老人；支线「有罪的证明」奖励也有一颗", "effect": "大幅提升会心" },
    { "name": "恩典药草芽", "en": "Herb-of-Grace Bud", "type": "其他", "location": "timberain_castle_square", "how": "偷窃城广场的王室园丁", "effect": "据Neoseeker为药师追加职业证所需素材" },
    { "name": "破灭之刃", "en": "Cleaver of Destruction", "type": "武器", "location": "timberain_castle", "how": "汀巴雷因城内宝箱（卡丝蒂第4章期间或之后打昏守卫进城）" },
    { "name": "龙之头盔 / 魔导士长袍", "en": "Dragon's Helm / Mage's Robe", "type": "防具", "location": "timberain_castle", "how": "汀巴雷因城屋顶宝箱" },
    { "name": "禁忌之斧 / 诅咒铠甲", "en": "Forbidden Axe / Cursed Armor", "type": "武器", "location": "house_wellows_manor", "how": "韦罗兹家宅邸宝箱（危险度50）" },
    { "name": "灵巧斗篷", "en": "Nimble Mantle", "type": "防具", "location": "alrond_estate", "how": "阿尔隆德宅邸过桥后左侧宝箱", "effect": "中期非常优秀的身体防具" },
    { "name": "刺激项链", "en": "Stimulating Necklace", "type": "饰品", "location": "wellgrove", "how": "偷窃/购买舞娘公会内左侧的见习舞娘", "effect": "最大SP+80" },
    { "name": "敏捷手镯", "en": "Sprightly Bracelet", "type": "饰品", "location": "wellgrove", "how": "偷窃/购买舞娘公会台阶上的舞娘", "effect": "速度+50" },
    { "name": "铁皮玩具", "en": "Tin Toy", "type": "其他", "location": "wellgrove", "how": "帕尔提提欧第3章后，夜晚在百货商店2楼中央商人处强夺/恳求", "effect": "发明家技能「铁皮号角」素材（另需活力荔枝、神话之角）" },
    { "name": "士兵之弓", "en": "Soldier's Bow", "type": "武器", "location": "wellgrove", "how": "舞娘公会门外宝箱", "effect": "发明家技能「加速之锤」素材之一" },
    { "name": "管家燕尾服", "en": "Butler's Tailcoat", "type": "防具", "location": "alrond_estate", "how": "支线「米沙的后续」奖励" },
    { "name": "复仇之刃", "en": "Vengeful Knife", "type": "武器", "location": "wellgrove", "how": "支线「米拉与老卫兵的后续」奖励" },
    { "name": "精神腰带", "en": "Mental Belt", "type": "饰品", "location": "timberain_castle_square", "how": "支线「被迫的婚约」奖励" },
    { "name": "高阶神官护符", "en": "High Priest's Amulet", "type": "其他", "location": "starfall_spring", "how": "击败君王后取得西北角宝箱", "effect": "神官追加职业证用" },
    { "name": "睡眠之枪", "en": "Spear of Sleep", "type": "武器", "location": "starfall_spring", "how": "君王必定掉落" },
    { "name": "小乌鸦", "en": "Little Crow", "type": "武器", "location": "secret_forest", "how": "秘密之森木桥北侧小路尽头宝箱（剑）" },
    { "name": "镇静之石 / 沉默头巾", "en": "Calming Stone / Silent Bandana", "type": "饰品", "location": "mothers_garden", "how": "镇静之石在母亲花园左侧尽头宝箱；沉默头巾在通往母亲花园之路宝箱", "effect": "防恐惧，母亲战必备" },
    { "name": "坚韧之弓", "en": "Tenacious Bow", "type": "武器", "location": "cropdale", "how": "夜晚库罗普提尔中央桥上的女子：恳求/强夺" },
    { "name": "优质背心", "en": "Quality Vest", "type": "防具", "location": "cropdale", "how": "偷窃阿格妮娅的父亲加鲁德" },
    { "name": "繁荣护符", "en": "Prosperity Charm", "type": "饰品", "location": "cropdale", "how": "支线「醉酒的贵族」奖励" }
  ],
  "jobs": [
    { "name": "舞娘", "en": "Dancer", "location": "wellgrove", "how": "韦尔格罗夫北侧上坡顶端的建筑即舞娘公会，与红衣会长交谈直接获得第1张职业证。追加证：1名角色学会舞娘的神技能→第2张；2名角色学会→第3张。" },
    { "name": "神官（追加职业证素材）", "en": "Cleric (extra license)", "location": "starfall_spring", "how": "星落之泉击败君王后宝箱中的高阶神官护符，用于神官公会的追加职业证（神官公会本身位于纹之地边境）。" },
    { "name": "武器大师（神器：生锈的长枪）", "en": "Armsmaster (Rusty Polearm)", "location": "timberain_castle_square", "how": "取得生锈的长枪后带到荒野之地格拉维尔交给铁匠波尔塔，即可解锁武器大师（任意一把生锈武器均可解锁）并重铸为神器。" }
  ],
  "tips": [
    "地区连通：东库罗普提尔森道北通荒野之地克拉克里奇港停泊所；南库罗普提尔森道东通荒野之地南欧兹拉修荒道；东韦尔格罗夫森道南通日之野西赛砂原。",
    "星落之泉只能走水路：在东库罗普提尔森道下河乘独木舟一路向南。15级左右即可挑战君王拿高阶神官护符。",
    "韦尔格罗夫的三个第3章推荐等级分别为光26、索洛奈31、帕尔提提欧35；帕尔提提欧第3章完成后百货商店开放，夜晚强夺/恳求可拿到大量终盘前的强力装备与发明家素材。",
    "汀巴雷因与韦尔格罗夫的夜间士兵可收买获得「偷窃技巧」，提升本镇偷窃成功率；偷窃失败会降低声望，偷窃前先存档。",
    "汀巴雷因城广场老兵的驱魔之弓是终盘顶级弓之一，61750叶可直接用帕尔提提欧购买；拿完后打昏他进入仓库取生锈的长枪。",
    "跨地区支线关联：日之野「米卡的后续」需引导库罗普提尔阿格妮娅家中的帕拉；日之野「逃跑的马」可在东韦尔格罗夫森道打昏盗马贼；纹之地「神秘的盒子」需把盒子送到韦罗兹家宅邸。",
    "完成「米沙的后续」后可招募富豪阿尔隆德，社区常用他来提升经验获取效率进行练级。",
    "北韦尔格罗夫森道终年下雨，舞踏姬祭坛入口藏在悬崖下原木后，阿格妮娅在队时调查神像获得EX技能。"
  ]
});

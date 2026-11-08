OT2.addRegion({
  "id": "cliftlands",
  "name": "断崖地区",
  "official": "克里夫兰多地区",
  "en": "Cliftlands",
  "continent": "west",
  "levelRange": "1-50",
  "starter": "提里昂（盗贼）",
  "intro": "断崖地区位于奥斯泰拉西部的红色高地，峭壁与深谷纵横，以矿业闻名。由东向西依次是层叠在悬崖上的大城柏达弗尔（提里昂出身地）、因淘金热而繁荣的矿业城镇库欧利克雷斯特、以及没落的边境村落欧亚威尔；北接森林地区，南接河川地区。这里承载了提里昂第1章、特蕾莎第2章、塞拉斯第2章与阿芬第4章，并有鸟葬洞窟、腐朽的开采所、龙咏神殿三处可选迷宫和盗公子的祠堂（盗贼副职业）。",
  "highlights": [
    "南库欧利克雷斯特崖道旁的「盗公子的祠堂」可获得盗贼副职业证，偷窃+偷取SP/HP类技能前期就很强",
    "鸟葬洞窟（Lv20）：击败亚耶罗巴特取得魔力之斧，紫箱铁壁坚果；本迷宫遇敌经验/金钱收益在内环区域中最高，适合1~2章间练级",
    "腐朽的开采所（Lv30）：击败戴特摩尔取得暴力之剑（物攻+200，低概率降低目标物攻），是中期最强剑之一",
    "龙咏神殿（Lv50）：紫箱弓圣之大弓、水晶盔，也是支线「龙之母凯娅（III）」的舞台",
    "城镇NPC装备：库欧利克雷斯特老妇人的禁忌之枪（69,000叶）、南欧亚威尔崖道神秘骑士的符文手斧、欧亚威尔商店的食人魔砍刀等",
    "提里昂第1章期间柏达弗尔居民偷窃成功率极高，开局可先把全镇偷一遍换钱换装备"
  ],

  "locations": [
    {
      "id": "bolderfall",
      "name": "柏达弗尔",
      "en": "Bolderfall",
      "type": "town",
      "wpos": [557, 441],
      "level": "1",
      "desc": "断崖地区最大的城市，依悬崖分为贵族居住的上层（瑞布斯宅邸前）、商店与旅店所在的中层、平民与酒馆所在的下层；提里昂的起点。",
      "story": ["提里昂 第1章"],
      "boss": [],
      "treasures": [
        { "item": "1,000叶", "how": "中层北侧（提里昂起始处正北）房屋内的宝箱" },
        { "item": "刺击匕首（Stinging Dagger）", "how": "中层旅店后方的紫色宝箱，需提里昂开锁" },
        { "item": "隐藏物：隼之匕首（Falcon Dagger）", "how": "向中层老婆婆（Elderly Woman）探听得知，在存档点东南被老人堵门的房屋内；需用挑衅/挑战等方式让门口老人让开" },
        { "item": "铁盔（Iron Helm）", "how": "宅邸前存档点北侧的紫色宝箱" },
        { "item": "阔剑（Broadsword）", "how": "宅邸前大门内左侧的宝箱（第1章出示介绍信进门后可取）" },
        { "item": "隐藏物：战矛（War Spear）", "how": "向宅邸前守卫（Guard，提到妻子与未出生孩子的那位）探听得知，位于大门内" },
        { "item": "隐藏物：回避盾（Elusive Shield）、旧靴子（Weathered Boots）、脏布球（Dirty Ball of Cloth）", "how": "分别向宅邸前三条看门狗探听得知，位于宅邸前区域" }
      ],
      "npcs": [
        { "name": "富商（Wealthy Merchant）", "item": "信用证明书（介绍信）", "method": "偷窃", "note": "下层武器店前，提里昂第1章剧情必偷" },
        { "name": "严肃的卫兵（Stern Guardsman）", "item": "刺激项链（Stimulating Necklace，30,000叶）、刺激耳环", "method": "偷窃/购买", "note": "中层东北大宅门口；支线「革命的火种」委托人" },
        { "name": "骄傲的收藏家（Proud Collector）", "item": "混乱短剑（Befuddling Dagger）、惊奇之物（Astonishing Object）", "method": "偷窃/购买", "note": "中层" },
        { "name": "勤劳的丈夫（Industrious Husband）", "item": "秘术之弓（Arcane Bow）", "method": "偷窃/购买", "note": "中层，来自希·沃尔基" },
        { "name": "镇民（Townsperson，提里昂附近）", "item": "铁斧、铁枪、复合弓", "method": "偷窃/购买/探听", "note": "探听得「新武器上架」，解锁商店新装备" },
        { "name": "老婆婆（Elderly Woman）", "item": "治愈葡萄（大）×2、醒神李子（大）×2", "method": "偷窃/购买/探听", "note": "探听得隼之匕首的隐藏位置" },
        { "name": "老人（Old Man）", "item": "活力石榴", "method": "偷窃/购买/探听", "note": "堵在藏有隼之匕首的房门口；探听得旅店折扣" },
        { "name": "老佣兵（下层民居内的镇民）", "item": "治愈葡萄（大）、活力石榴", "method": "偷窃/购买/引导/诱惑", "note": "下层一户需要进门的屋内；资料显示强度10、可召唤技能Guillotine，挑战极难，适合后期作为助战" },
        { "name": "老练的盗贼（Veteran Brigand）", "item": "铁短剑、灵敏耳环（Sprightly Earring）", "method": "偷窃/购买", "note": "下层；支线「盗贼的规矩」委托人" },
        { "name": "贫民/贫民革命家（下层）", "item": "叛逆之斧（Rebel's Axe）、革命之剑（Revolutionary Sword）、正义之枪（Spear of Justice）", "method": "偷窃/购买", "note": "第1章后出现，用于支线「革命的火种」" },
        { "name": "开明的贵族（Enlightened Aristocrat）", "item": "启迪耳环（Enlightening Earring）", "method": "探听", "note": "中层东北大宅内；探听得情报「改革计划（Project Plans）」" },
        { "name": "警卫队长（宅邸前）", "item": "清醒之石（Wakeful Stone）", "method": "偷窃/购买", "note": "宅邸前大门守卫，挑战强度9，前期勿挑战" },
        { "name": "希斯柯特（宅邸前，提里昂第4章后）", "item": "隼之军刀（Falcon Saber）", "method": "偷窃/购买/引导/诱惑", "note": "提里昂第4章完成后出现在宅邸前；引导需较高等级" }
      ],
      "shops": [
        "道具店（中层入口附近）：治愈葡萄 50、醒神李子 240、还魂橄榄 500、混乱/恐怖治疗药草 30 及基础药材",
        "武器防具店在下层；向提里昂旁的镇民探听「新武器上架」后可买到更好的武器"
      ],
      "tips": "提里昂第1章期间本镇NPC偷窃几乎必定成功，先把好东西偷完；第1章完成后镇内会出现新NPC和4个支线（中层2个、下层1个、宅邸前1个）。恢复声望需1,500叶。"
    },
    {
      "id": "ravus_manor",
      "name": "瑞布斯的宅邸",
      "en": "Ravus Manor",
      "type": "dungeon",
      "wpos": [572, 432],
      "level": "1~11（随队伍人数浮动）",
      "desc": "柏达弗尔上层的瑞布斯家豪宅，藏有龙石；提里昂第1章迷宫，只能从宅邸东侧窗户潜入。",
      "story": ["提里昂 第1章"],
      "boss": [
        { "name": "希斯柯特", "en": "Heathcote", "level": "约6~11", "weakness": ["短剑", "弓", "火", "冰", "雷"], "tips": "护盾随队伍人数变化（约4~8）。同时登场的瑞布斯的士兵（弱点：剑、斧、风、光）会给希斯柯特加物防并四连击，优先击倒。希斯柯特残血时会「轻盈跳跃」大幅提升闪避，并进入蓄力（深色气场）后释放全体重击，蓄力期间要么破防打断、要么全员防御；可能补召一名半血士兵。提里昂学会吸血类短剑技能可边打边回血。" }
      ],
      "treasures": [
        { "item": "醒神李子", "how": "一层一路向西走到书架附近" },
        { "item": "治愈葡萄", "how": "入口右侧楼梯上楼，尽头房间内" },
        { "item": "800叶", "how": "回到一层走中央楼梯上二层，西侧门前左侧死路" },
        { "item": "疾风之衣（Wind Attire）", "how": "进入西门后的新区域，最东侧小房间内的紫色宝箱" },
        { "item": "治愈葡萄", "how": "新区域左侧上楼后沿走廊向右，第二个房间过拐角处" },
        { "item": "精神坚果（Invigorating Nut）", "how": "同层上方通路走到底" },
        { "item": "混乱之瓶（Bottle of Befuddling Dust）", "how": "通往存档点与行商的楼梯下方" }
      ],
      "npcs": [
        { "name": "行商（Traveling Peddler）", "item": "补给品", "method": "购买", "note": "Boss房前存档点旁，可卖掉多余装备" }
      ],
      "shops": [],
      "tips": "宅邸前大门在剧情后也不会打开，日后再进只能走东侧窗户。每取回一颗龙石，Boss房桌上就会多摆出一颗。"
    },
    {
      "id": "north_bolderfall_pass",
      "name": "北柏达弗尔崖道",
      "en": "North Bolderfall Pass",
      "type": "field",
      "wpos": [503, 395],
      "level": "1~11（随队伍人数浮动）",
      "desc": "柏达弗尔北面的崖道，北通森林地区西希·沃尔基森道，西南接南柏达弗尔崖道。",
      "story": ["提里昂 第1章"],
      "boss": [],
      "treasures": [
        { "item": "1,000叶", "how": "崖道内宝箱" },
        { "item": "治愈葡萄", "how": "崖道内宝箱" },
        { "item": "还魂橄榄", "how": "崖道内宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "以提里昂为初始角色时，第1章完成后可在此遇到受伤的旅人基特（支线「旅人基特」）。危险度最高档时与南崖道并列内环野外金钱收益最高。"
    },
    {
      "id": "south_bolderfall_pass",
      "name": "南柏达弗尔崖道",
      "en": "South Bolderfall Pass",
      "type": "field",
      "wpos": [498, 478],
      "level": "1~11（随队伍人数浮动）",
      "desc": "连接北柏达弗尔崖道、西侧南库欧利克雷斯特崖道与南方西库利亚布鲁克川道的交通要道，谷底有鸟葬洞窟。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "崖道内宝箱" },
        { "item": "睡眠治愈药草（Herb of Awakening）", "how": "崖道内宝箱" },
        { "item": "醒神李子（大）", "how": "崖道内宝箱" },
        { "item": "风之精灵石", "how": "提里昂第3章回忆中那处悬崖的位置" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "北侧入口过桥后沿坡道一路下到谷底即可进入鸟葬洞窟。"
    },
    {
      "id": "carrion_caves",
      "name": "鸟葬洞窟",
      "en": "Carrion Caves",
      "type": "dungeon",
      "wpos": [523, 495],
      "level": "20",
      "desc": "南柏达弗尔崖道谷底、河边的半露天洞窟，遍布白骨，栖息着大量猛禽；可选迷宫。",
      "story": [],
      "boss": [
        { "name": "亚耶罗巴特", "en": "Heavenwing", "level": "建议25以上", "weakness": ["枪", "弓", "暗"], "tips": "HP约9,700、护盾10、无随从。会自我强化物攻、降低单人物攻物防，并用火属性单体「陨石风暴」与全体「焚烧」。带火抗饰品，用欧贝利克的多段枪技、汉伊特的箭雨快速破盾，破防时集中输出。击败后在本迷宫以约3%概率作为随机敌人出现，可让汉伊特捕获。" }
      ],
      "treasures": [
        { "item": "铁壁坚果（Tough Nut）", "how": "紫色宝箱，需提里昂开锁" },
        { "item": "还魂橄榄（大）", "how": "洞窟内宝箱" },
        { "item": "6,000叶", "how": "洞窟内宝箱" },
        { "item": "醒神李子（大）", "how": "洞窟内宝箱" },
        { "item": "魔力之斧（Enchanted Axe，物攻+132、暴击+65）", "how": "击败亚耶罗巴特后，Boss房后方的宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人多为鸟类，枪、弓、风通吃；平均遇敌收益在内环区域最高，是第1章到第2章之间的练级好去处。"
    },
    {
      "id": "quarrycrest",
      "name": "库欧利克雷斯特",
      "en": "Quarrycrest",
      "type": "town",
      "wpos": [330, 443],
      "level": "18-24",
      "desc": "因淘金热兴起的矿业城镇，由贪婪的大地主莫洛克掌控；分为城镇与东北方的矿山两部分。",
      "story": ["特蕾莎 第2章", "塞拉斯 第2章"],
      "boss": [],
      "treasures": [
        { "item": "疑似金矿石（Pseudo Gold Ore）", "how": "旅店旁的宝箱" },
        { "item": "貌似金矿石（Dubious Gold Ore）", "how": "存档点左侧被高等级男子守着的房屋旁" },
        { "item": "风之精灵石（大）", "how": "道具店后方坡道上的小屋内" },
        { "item": "隐藏物：疑似金矿石", "how": "向城镇内的劳工探听得知" },
        { "item": "隐藏物：火之精灵石（特大）", "how": "向城镇内老婆婆探听得知" }
      ],
      "npcs": [
        { "name": "老婆婆（Elderly Woman）", "item": "禁忌之枪（Forbidden Spear）", "method": "购买", "note": "69,000叶，资料显示无法偷窃；淘金热中发现金脉的老奶奶，住在有人看守的房屋里" },
        { "name": "奥黛特（Odette）", "item": "火之精灵石（大）、灵敏戒指、长柄钉锤（Pole Mace）", "method": "偷窃/购买/探听", "note": "塞拉斯第2章后在其家中；探听可得「不去祭拜杰佛里的原因」（支线「瑞贝罗与奥黛特」用）" },
        { "name": "镇民（Townsperson）", "item": "银币袋、守护戒指、暴击手镯（Critical Bracelet）", "method": "偷窃/购买", "note": "城镇内" },
        { "name": "镇民（Townsperson）", "item": "维京斧（Viking Axe，15,200叶）、坚固头盔", "method": "偷窃/购买", "note": "城镇内" },
        { "name": "镇民（Townsperson）", "item": "回春果酱（16,500叶）、铁壁坚果（大）", "method": "偷窃/购买", "note": "探听可得「魅惑之术」类情报" },
        { "name": "根迪（Gendy）", "item": "根迪的地毯布（Gendy's Footcloth）", "method": "偷窃/购买", "note": "城镇入口附近，支线「织工的烦恼」委托人" },
        { "name": "镇民（入口附近）", "item": "—", "method": "探听", "note": "探听得「讨价还价技巧（Smarter Bartering）」，提高特蕾莎购买折扣率" }
      ],
      "shops": [
        "道具店：治愈葡萄（大）260、还魂橄榄（大）3,000、净化之粉（Purifying Dust）3,200 等",
        "武器防具店位于矿山区域（见库欧利克雷斯特·矿山）"
      ],
      "tips": "城镇西侧出口通往莫洛克宅邸的道路，旅店后方是下水道入口（塞拉斯第2章前被木板封住）。恢复声望需2,500叶。"
    },
    {
      "id": "quarrycrest_mines",
      "name": "库欧利克雷斯特·矿山",
      "en": "Quarrycrest Mines",
      "type": "town",
      "wpos": [347, 432],
      "level": "18",
      "desc": "库欧利克雷斯特东北上方的矿区，有武器防具店与酒馆，矿工们随身带着刚挖出的矿石与精灵石。",
      "story": ["特蕾莎 第2章"],
      "boss": [],
      "treasures": [
        { "item": "恐怖治疗药草（Herb of Valor）", "how": "酒馆外向左过桥后的宝箱" },
        { "item": "治愈葡萄串（Healing Grape Bunch）", "how": "旁边台地上的宝箱" },
        { "item": "看似金矿石（Fool's Gold Ore）", "how": "沿右上阶梯爬到最顶端" },
        { "item": "隐藏物：看似金矿石、还魂橄榄（大）、回春果酱", "how": "分别向三名劳工探听得知" }
      ],
      "npcs": [
        { "name": "外出打工的男人（Migrant Worker）", "item": "碎石（Nondescript Stone）", "method": "购买", "note": "特蕾莎第2章剧情，500叶；实为未打磨的碧闪石" },
        { "name": "劳工×3（Laborer）", "item": "碎石（Nondescript Stone）", "method": "购买", "note": "特蕾莎第2章剧情需各买一块" },
        { "name": "劳工（Laborer）", "item": "看似金矿石、风之精灵石（特大）、寂静头巾（Silent Bandana，14,820叶）", "method": "偷窃/购买", "note": "矿山内" },
        { "name": "好奇的女士 / 新人歌手", "item": "新月短剑（Crescent Dagger，11,400叶）", "method": "偷窃/购买", "note": "两人都持有；新人歌手需完成支线「Setting Out」的引导路线后出现" },
        { "name": "蛋男（The Egg Man）", "item": "暗之精灵石（特大）、长柄钉锤", "method": "偷窃/购买/引导/诱惑", "note": "完成「龙之母凯娅（I）」后出现，支线（II）需带他去见凯娅" },
        { "name": "矿工（Miner）", "item": "手斧、铁盔", "method": "偷窃/购买", "note": "矿山最上方，支线「矿工的难题」委托人" }
      ],
      "shops": [
        "武器防具店：山贼之枪 10,000、重枪 15,000、魔导长柄刀（Magus Glaive）32,000、山岳砍刀（Hill Cleaver）40,000（需探听情报解锁）、连枷 8,000、奇迹之杖 16,000、银盔 3,600、银背心 4,160、风筝盾 2,400"
      ],
      "tips": "这里的劳工大多带着精灵石，可偷可买；登记矿工号码等人物简介颇有趣味。"
    },
    {
      "id": "quarrycrest_sewers",
      "name": "下水道",
      "en": "The Sewers",
      "type": "dungeon",
      "wpos": [325, 453],
      "level": "24",
      "desc": "库欧利克雷斯特地下、比城镇更古老的水道，学者基甸在深处设立了吸血研究设施；塞拉斯第2章迷宫。",
      "story": ["塞拉斯 第2章"],
      "boss": [
        { "name": "基甸", "en": "Gideon", "level": "24", "weakness": ["剑", "短剑", "斧", "光"], "tips": "护盾7。开战会召唤两只傀儡骷髅（弱点：斧、杖、火、光），骷髅在场时基甸的弱点被封锁，所以首回合把BP留给骷髅，用塞拉斯的范围火魔法一并清掉。基甸会用全体暗属性攻击附带黑暗、单体重击约700伤害，注意回复。掉落基甸的短剑。" }
      ],
      "treasures": [
        { "item": "醒神李子篮（Inspiriting Plum Basket）", "how": "进入后向北、西再向南走到路尽头" },
        { "item": "狙击军刀（Snipe Saber）", "how": "向北过桥后立即向南的紫色宝箱" },
        { "item": "火之精灵石（大）", "how": "过桥后沿主路向西的空地上（狙击军刀宝箱以西）" },
        { "item": "活力石榴（特大）", "how": "火之精灵石上方小房间内" },
        { "item": "治愈葡萄串", "how": "西侧小桥北面" },
        { "item": "灵敏戒指（Sprightly Ring）", "how": "上一个宝箱左侧的隐藏通路，一路向西再向南" },
        { "item": "混乱之瓶", "how": "Boss房前存档点南侧尽头" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "入口在旅店后方。敌人多为鬼火与骷髅，带火、光、雷、风属性攻击方便。"
    },
    {
      "id": "road_to_morlocks_manse",
      "name": "通往莫洛克宅邸的道路",
      "en": "Road to Morlock's Manse",
      "type": "field",
      "wpos": [301, 430],
      "level": "17",
      "desc": "从库欧利克雷斯特西北出口通往莫洛克宅邸的崖路，过桥即到宅邸。",
      "story": ["特蕾莎 第2章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄（大）", "how": "入口一路向西到底，再找南侧坡道绕下去" },
        { "item": "醒神李子", "how": "道路转向东时，沿东侧台阶上去" },
        { "item": "5,000叶", "how": "存档点处先不过桥，向东走到尽头" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人：大秃鹰（枪、弓）、双手蛋（剑、枪、斧）、盔甲蜥蜴（剑、斧、风）、洛里斯（短剑、火、风）。"
    },
    {
      "id": "morlocks_manse",
      "name": "莫洛克的宅邸",
      "en": "Morlock's Manse",
      "type": "dungeon",
      "wpos": [306, 416],
      "level": "18",
      "desc": "大地主莫洛克的阴暗宅邸，挂满他本人的肖像；特蕾莎第2章迷宫，阿里被关押于此。",
      "story": ["特蕾莎 第2章"],
      "boss": [
        { "name": "奥玛尔", "en": "Omar", "level": "18-20", "weakness": ["枪", "短剑", "杖", "冰", "光"], "tips": "护盾5，每次从破防中恢复后护盾+2（最多9）。带两名部下（弱点：剑、斧、雷、风），莫洛克会用金钱强化部下的攻防与速度，部下被打倒后还会补充，建议用范围技先破部下再集火奥玛尔。奥玛尔只用物理攻击（全体横扫、蓄力后的重劈），可叠物防或降其物攻。掉落奥玛尔之斧。" }
      ],
      "treasures": [
        { "item": "治愈葡萄（大）", "how": "上楼后左手第一个房间" },
        { "item": "活力石榴（大）", "how": "向南走廊尽头下楼后的第一个房间" },
        { "item": "昏迷耐性石（Conscious Stone）", "how": "上楼后存档点旁边的房间" },
        { "item": "6,000叶", "how": "同一房间西北角的隐藏通路后（本作唯一完全隐藏的房间）" },
        { "item": "风之精灵石（大）", "how": "从上一房间向西南出去的另一个房间" },
        { "item": "回春果酱（Refreshing Jam）", "how": "东北进入第二区域后左侧门内" },
        { "item": "高速头盔（Hasty Helm）", "how": "第二区域二楼第二个房间的紫色宝箱" },
        { "item": "还魂橄榄（大）", "how": "下楼至Boss前存档点，越过大门继续走到底" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人：狂暴游隼（枪、短剑、弓、风）、凶暴的看门狗（斧、弓、火、雷）、魔导机、莫洛克的警备兵（枪、短剑、冰）。"
    },
    {
      "id": "south_quarrycrest_pass",
      "name": "南库欧利克雷斯特崖道",
      "en": "South Quarrycrest Pass",
      "type": "field",
      "wpos": [402, 485],
      "level": "17~28（随章节浮动）",
      "desc": "库欧利克雷斯特南面的交通枢纽，东连南柏达弗尔崖道、西连南欧亚威尔崖道，并通往盗公子的祠堂与腐朽的开采所。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "活力石榴", "how": "崖道内宝箱" },
        { "item": "火焰护符（Fire Amulet）", "how": "崖道内宝箱" },
        { "item": "恐怖治疗药草", "how": "崖道内宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "从南柏达弗尔崖道过来，北过桥到路标后向东可进腐朽的开采所；祠堂入口在西南侧。危险度会在17/20/25/28间随进度提高。"
    },
    {
      "id": "shrine_prince_of_thieves",
      "name": "盗公子的祠堂",
      "en": "Shrine of the Prince of Thieves",
      "type": "shrine",
      "wpos": [378, 506],
      "level": "17",
      "desc": "供奉盗公子埃伯尔（Aeber）的祠堂，调查神像即可解锁盗贼副职业。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "无敌人无宝箱，第2章前即可顺路拿到；盗贼副职业的偷取SP/HP类技能对续航很有帮助。"
    },
    {
      "id": "derelict_mine",
      "name": "腐朽的开采所",
      "en": "Derelict Mine",
      "type": "dungeon",
      "wpos": [428, 468],
      "level": "30",
      "desc": "被遗弃的旧矿坑，矿车与灯笼仍散落各处，深处盘踞着多头怪物戴特摩尔；可选迷宫。",
      "story": [],
      "boss": [
        { "name": "戴特摩尔", "en": "Manymaws", "level": "建议30~35", "weakness": ["剑", "斧", "火"], "tips": "HP约14,900、护盾10。会用全体毒息、降低暴击，首次破防恢复后开始使用「恶臭」，全体随机附加睡眠/混乱/毒/沉默/黑暗。对策：舞娘「全体化」配合药师「健全化」让全队数回合免疫异常，或让阿芬随时用药解除；商人捐赠BP可加速破盾。击败后约3%概率随机遇敌出现，可让汉伊特捕获。" }
      ],
      "treasures": [
        { "item": "10,000叶", "how": "矿坑内宝箱" },
        { "item": "昏迷耐性石（Conscious Stone）", "how": "紫色宝箱" },
        { "item": "醒神李子（大）", "how": "矿坑内宝箱" },
        { "item": "还魂橄榄（特大）", "how": "矿坑内宝箱" },
        { "item": "风之精灵石（特大）", "how": "矿坑内宝箱" },
        { "item": "暴力之剑（Carnage Blade，物攻+200，攻击时低概率降低目标物攻）", "how": "击败戴特摩尔后Boss房后方的宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人以骷髅、元素、菌类为主，火、光、杖、枪都有用；本迷宫在城镇附近，第2章进度经过时可视等级顺手攻略。"
    },
    {
      "id": "orewell",
      "name": "欧亚威尔",
      "en": "Orewell",
      "type": "town",
      "wpos": [265, 485],
      "level": "45",
      "desc": "横跨深谷、矿脉枯竭后破败的边境村落，正受疫病困扰；阿芬第4章舞台，村北崖边有旅行药师格拉墨的墓。",
      "story": ["阿芬 第4章"],
      "boss": [],
      "treasures": [
        { "item": "绳子碎片（Scrap of Rope）", "how": "村内宝箱" },
        { "item": "缓和之粉（Soothing Dust）", "how": "村内宝箱" },
        { "item": "68叶", "how": "村内宝箱" },
        { "item": "旧靴子（Weathered Boots）", "how": "村内宝箱" },
        { "item": "隐藏物：山岳砍刀（Hill Cleaver）", "how": "向村中老人（Old Man）探听得知，探查成功率仅约5%" },
        { "item": "隐藏物：复苏果酱（Revitalizing Jam）、醒神李子篮、醒神李子（大）、空钱袋", "how": "分别向村民、悲伤的母亲、迟钝的镇民、懒汉探听得知" }
      ],
      "npcs": [
        { "name": "迟钝的镇民（Oblivious Townsperson）", "item": "启迪项链（Enlightening Necklace，15,200叶）", "method": "偷窃/购买", "note": "村内" },
        { "name": "村民（Villager）", "item": "火之精灵石（特大）、火焰护符", "method": "偷窃/购买", "note": "村内" },
        { "name": "村民（Villager）", "item": "治愈葡萄串、醒神李子篮、回春果酱", "method": "偷窃/购买/探听", "note": "探听得「更丰富的商品」，可能解锁商店新货" },
        { "name": "老人（Old Man）", "item": "精神坚果（大）、铁壁坚果（大）、魔法坚果（大）", "method": "偷窃/购买", "note": "嗜酒老人，屋门被妻子守着" },
        { "name": "落魄商人（Struggling Merchant）", "item": "还魂橄榄（特大）", "method": "偷窃/购买/挑战", "note": "村西北，支线「悬崖边上」委托人" },
        { "name": "悲伤的母亲（Miserable Mother）", "item": "葡萄精华、李子精华", "method": "探听", "note": "村西南，支线「浪子」委托人" }
      ],
      "shops": [
        "杂货店（含装备）：熊之砍刀（Bear Cleaver）31,000、精金手斧（Adamantine Hatchet）44,000、食人魔砍刀（Ogre Cleaver）60,000（需情报解锁）、精金盾 14,400、寂静披风（Silent Cape）19,200、各类治疗药草"
      ],
      "tips": "本村不卖药材；西北出口通往卢贝之森，南出口通往南欧亚威尔崖道。恢复声望需6,000叶。"
    },
    {
      "id": "trail_to_forest_of_rubeh",
      "name": "通往卢贝之森的道路",
      "en": "Trail to the Forest of Rubeh",
      "type": "field",
      "wpos": [246, 474],
      "level": "45",
      "desc": "欧亚威尔西北出口外的崖路，北通卢贝之森。",
      "story": ["阿芬 第4章"],
      "boss": [],
      "treasures": [
        { "item": "净化之粉（Purifying Dust）", "how": "出村向左到岔路，先不去北边存档点，向左下坡" },
        { "item": "20,000叶", "how": "回存档点继续向左，下一个岔路往南绕到死路" },
        { "item": "活力石榴（大）", "how": "爬坡过桥后向南下坡，宝箱在桥下" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人：诡异的鸟（枪、弓、雷、光）、诡异的幼体（剑、斧、雷）、红猛角犀牛、四丈蜘蛛（剑、斧、杖、雷）。"
    },
    {
      "id": "forest_of_rubeh",
      "name": "卢贝之森",
      "en": "Forest of Rubeh",
      "type": "dungeon",
      "wpos": [228, 449],
      "level": "45/46",
      "desc": "断崖地区唯一的森林迷宫，雾气弥漫的夜间森林分三条岔路，中路尽头是俯瞰大瀑布的崖顶，天狗鹫在此筑巢；阿芬第4章迷宫。",
      "story": ["阿芬 第4章"],
      "boss": [
        { "name": "天狗鹫", "en": "Ogre Eagle", "level": "45+", "weakness": ["剑", "弓", "冰", "雷", "暗"], "tips": "开场用羽翼封锁弱点，只剩冰可用（护盾4）；第一次破防后护盾升到6并开放剑、雷，第二次破防后护盾8并开放全部弱点。所有物理攻击都可能附带毒、黑暗、睡眠、混乱及攻防降低，「吹飞」会让一人离场3回合。HP降到一半左右会放「七色毒」，之后每回合降低全队最大HP，务必速战。对策：装防睡眠/混乱饰品，舞娘「全体化」+阿芬「健全化」全队免疫异常，学者冰魔法或阿芬投掷有害之种开局破盾。掉落回春果酱。" }
      ],
      "treasures": [
        { "item": "爆炎护符（Inferno Amulet）", "how": "外围区域进入后向右，南侧边缘的紫色宝箱" },
        { "item": "风之精灵石（大）", "how": "路往上时贴右墙走上去的观景台死路" },
        { "item": "活力石榴（大）", "how": "向上时立刻贴左墙的小路" },
        { "item": "混乱治疗药草", "how": "再往上贴左侧通往西北的路" },
        { "item": "昏迷耐性石", "how": "北部区域，进入后往西北" },
        { "item": "净化之种（Purifying Seed）", "how": "西侧可疑木桥南面" },
        { "item": "醒神李子（大）", "how": "西边树旁" },
        { "item": "破灭之粉（Ruinous Dust）", "how": "西路南段转北处，贴右墙绕到断柱后方" },
        { "item": "银币袋（Silver-filled Pouch）", "how": "外围西南角，被巨石挡住视线，需在附近来回走找「打开」提示" },
        { "item": "隼之强弓（Augmented Bow of the Falcon）", "how": "西侧新画面北面" },
        { "item": "30,000叶", "how": "同画面向南走地下小路的死路" },
        { "item": "活力石榴（大）", "how": "首画面右侧被树遮挡的死路北缘" },
        { "item": "破灭之种（Ruinous Seed）", "how": "树旁宝箱处向北再向右上坡" },
        { "item": "治愈葡萄串、复苏果酱（Revitalizing Jam）", "how": "内部区域北上后走左路，途中一个、尽头一个" },
        { "item": "治愈葡萄（大）", "how": "内部岔路先往北，右侧" },
        { "item": "帝国铠甲（Imperial Armor）", "how": "同路向西被最左侧大树完全遮住，需绕圈寻找" },
        { "item": "治疗药草（Herb of Healing）", "how": "Boss前存档点向右，坡道下方南侧小路" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "宝箱多且隐蔽，三条岔路中有两条是死路但都有宝箱。敌人：邪鹿怪异种、风元素（冰、雷）、大鹫（枪）、双颈蛇（短剑、斧、冰）、法尔帕斯异种等。"
    },
    {
      "id": "south_orewell_pass",
      "name": "南欧亚威尔崖道",
      "en": "South Orewell Pass",
      "type": "field",
      "wpos": [292, 515],
      "level": "45",
      "desc": "欧亚威尔南面带瀑布的尘土崖道，东连南库欧利克雷斯特崖道，南接河川地区北利维福德川道，北侧岔路通往龙咏神殿。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "活力石榴（特大）", "how": "崖道内宝箱" },
        { "item": "火之精灵石（大）", "how": "崖道内宝箱" },
        { "item": "治愈葡萄（大）", "how": "崖道内宝箱" },
        { "item": "还魂橄榄（大）", "how": "崖道内宝箱" }
      ],
      "npcs": [
        { "name": "神秘骑士（Mysterious Knight）", "item": "符文手斧（Rune Hatchet，67,200叶）", "method": "偷窃/购买", "note": "崖道上；探听需较高等级" },
        { "name": "骄傲的侍从（Proud Squire）", "item": "好奇之花", "method": "偷窃/购买", "note": "以引导/诱惑方式完成河川地区支线「冒险人生」后出现" }
      ],
      "shops": [],
      "tips": "从利维福德方向北上的第一站。敌人等级45，有大鹫、悬崖大鸟人、红猛角犀牛等。"
    },
    {
      "id": "dragonsong_fane",
      "name": "龙咏神殿",
      "en": "Dragonsong Fane",
      "type": "dungeon",
      "wpos": [318, 502],
      "level": "50",
      "desc": "南欧亚威尔崖道北部的红色地下遗迹，东半部露天，中央石台燃着火焰，疑为古时孵化龙的祭坛；可选迷宫，无Boss。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "弓圣之大弓（Holy Longbow）", "how": "紫色宝箱（需盗贼开锁）：存档点北侧左路，沿窄台阶爬到顶" },
        { "item": "水晶盔（Crystal Helm）", "how": "存档点右侧下楼梯后，穿过右边拱门，被楼梯遮挡的背景宝箱" },
        { "item": "活力石榴（特大）", "how": "存档点右侧下楼梯后的前景宝箱" },
        { "item": "治愈葡萄串", "how": "右路向东途中，拱门列背靠墙的宝箱" },
        { "item": "还魂橄榄（特大）", "how": "向南到最后空地前的草地小死路" },
        { "item": "昏迷耐性石", "how": "最后空地（燃火石台处）的右上角" }
      ],
      "npcs": [
        { "name": "好奇的神官（Curious Cleric）", "item": "龙蛋（Dragon Egg）", "method": "挑战/挑衅", "note": "仅在支线「龙之母凯娅（III）」进行中出现在神殿东侧尽头，强度8，打倒后必得龙蛋" }
      ],
      "shops": [],
      "tips": "入口：从南欧亚威尔崖道存档点向北，沿路向东，岔路处再往北走到尽头（吊桥前右侧岔道下坡）。敌人为Lv50的古代遗物与盗贼，偶尔出现高HP的Revenant系列。"
    }
  ],

  "roads": [
    ["bolderfall", "north_bolderfall_pass"],
    ["bolderfall", "ravus_manor"],
    ["north_bolderfall_pass", "south_bolderfall_pass"],
    ["south_bolderfall_pass", "carrion_caves"],
    ["south_bolderfall_pass", "south_quarrycrest_pass"],
    ["south_quarrycrest_pass", "quarrycrest"],
    ["south_quarrycrest_pass", "shrine_prince_of_thieves"],
    ["south_quarrycrest_pass", "derelict_mine"],
    ["south_quarrycrest_pass", "south_orewell_pass"],
    ["quarrycrest", "quarrycrest_mines"],
    ["quarrycrest", "quarrycrest_sewers"],
    ["quarrycrest", "road_to_morlocks_manse"],
    ["road_to_morlocks_manse", "morlocks_manse"],
    ["south_orewell_pass", "orewell"],
    ["south_orewell_pass", "dragonsong_fane"],
    ["orewell", "trail_to_forest_of_rubeh"],
    ["trail_to_forest_of_rubeh", "forest_of_rubeh"]
  ],

  "links": [
    { "from": "north_bolderfall_pass", "region": "woodlands", "to": "west_swarkii_trail" },
    { "from": "south_bolderfall_pass", "region": "riverlands", "to": "west_clearbrook_traverse" },
    { "from": "south_orewell_pass", "region": "riverlands", "to": "north_riverford_traverse" }
  ],

  "story": [
    {
      "title": "提里昂 第1章：潜入瑞布斯的宅邸",
      "character": "提里昂",
      "location": "ravus_manor",
      "level": "1~11（随队伍人数浮动）",
      "summary": "盗贼提里昂在柏达弗尔下层酒馆听闻瑞布斯家秘宝的传闻，偷来商人的信用证明书混进宅邸，却在宝物前被管家希斯柯特识破。战胜后被戴上象征盗贼耻辱的「愚者手环」，宅邸主人蔻蒂莉亚要求他找回被盗的其余三颗龙石，作为解开手环的条件。",
      "steps": [
        "在柏达弗尔下层酒馆开始，听老板讲述瑞布斯家宝藏的传闻（回忆中出现昔日搭档）",
        "从下层西侧楼梯上到中层，再走东南楼梯到「宅邸前」，靠近大门触发剧情：没有介绍信无法进入",
        "回到中层偷听商人谈话，解锁场景指令「偷窃」；途中会被两名想合伙的盗贼搭讪",
        "到下层武器店前，对富商使用偷窃取得「信用证明书」",
        "回到宅邸前出示介绍信进门，可先偷光门前守卫并拿左侧阔剑，再从宅邸右侧（东侧）窗户潜入",
        "宅邸内收集宝箱（紫箱疾风之衣），二层存档点旁有行商；深处调查紫色龙石触发Boss战",
        "战后被戴上愚者手环，与蔻蒂莉亚约定找回龙石；回酒馆与老板对话后从中层北出口离开，下一站平原地区诺布尔寇德（红宝石龙石）"
      ],
      "boss": "希斯柯特（弱点：短剑、弓、火、冰、雷）+ 瑞布斯的士兵（弱点：剑、斧、风、光）",
      "tips": "先打掉会给管家加物防的士兵；希斯柯特残血后提升闪避并蓄力放全体技，蓄力时防御或抢先破防。等级6左右即可稳过。"
    },
    {
      "title": "特蕾莎 第2章：碧闪石与大地主",
      "character": "特蕾莎",
      "location": "morlocks_manse",
      "level": "18",
      "summary": "特蕾莎循着手记来到库欧利克雷斯特，发现矿工嫌弃的碎石其实是珍贵的碧闪石，与年轻商人阿里展开商战。大地主莫洛克以「全镇买卖归他管」为由抢夺货物，阿里反抗被佣兵奥玛尔抓走，特蕾莎前往莫洛克宅邸救人。",
      "steps": [
        "在库欧利克雷斯特开始章节，前往矿山，对外出打工的男人使用购买，买下碎石（500叶）",
        "认识商人阿里，回城镇南侧广场卖出碧闪石（获得1,500叶）",
        "再到矿山向三名劳工各购买一块碎石",
        "回广场摆摊，客人被阿里抢走；之后前往城镇入口附近触发剧情，阿里被莫洛克和奥玛尔带走",
        "从城镇西北出口经「通往莫洛克宅邸的道路」进入莫洛克的宅邸",
        "宅邸内注意存档点旁房间西北角的隐藏房间（6,000叶）与二楼紫箱高速头盔，最深处挑战奥玛尔",
        "胜利后莫洛克认输并离开城镇，特蕾莎与阿里约定在格兰波特大拍卖再会；下一站森林地区维克塔霍洛"
      ],
      "boss": "奥玛尔（弱点：枪、短剑、杖、冰、光）+ 奥玛尔的部下×2（弱点：剑、斧、雷、风）",
      "tips": "先用范围技清部下；奥玛尔每次破防恢复后护盾+2，准备多种弱点手段。"
    },
    {
      "title": "塞拉斯 第2章：下水道的失踪事件",
      "character": "塞拉斯",
      "location": "quarrycrest_sewers",
      "level": "24",
      "summary": "塞拉斯追查被盗的禁书《边狱之书》，前来库欧利克雷斯特拜访学姐奥黛特。奥黛特请他先调查镇上接连发生的失踪事件，塞拉斯推理出犯人藏身下水道，揭穿以居民鲜血制作血晶的学者基甸。",
      "steps": [
        "在库欧利克雷斯特开始章节，从道具店后方坡道爬到城镇最高处的奥黛特家",
        "对奥黛特使用探查，得到失踪事件的发生地点（旅店附近）",
        "探查存档点附近与旅店门前两位标有绿色气泡的镇民，获得「下水道」与「目击证词」情报",
        "推理问答依次选择：在旅店附近 → 任何时间（两者皆有）→ 下水道",
        "旅店后方的下水道入口开放，进入下水道（紫箱狙击军刀、隐藏通路的灵敏戒指）",
        "存档后进入深处研究设施，与基甸战斗",
        "战后取得《边狱之书》抄本，与奥黛特查出抄本出自斯托冈德；下一站高原地区斯托冈德"
      ],
      "boss": "基甸（弱点：剑、短剑、斧、光）+ 傀儡骷髅×2（弱点：斧、杖、火、光）",
      "tips": "骷髅在场时基甸弱点被封，先用范围火魔法清骷髅；基甸HP是第2章Boss中最低的。"
    },
    {
      "title": "阿芬 第4章：为了欧根",
      "character": "阿芬",
      "location": "forest_of_rubeh",
      "level": "45",
      "summary": "阿芬来到疫病蔓延的欧亚威尔，与旧识药师欧根并肩救治病人，但欧根自己也染上了同样的怪病并拒绝治疗。得知欧根的过去后，阿芬回忆起儿时救了自己的旅行药师传下的药方，前往卢贝之森取天狗鹫的羽毛。",
      "steps": [
        "抵达欧亚威尔观看剧情，进入村内酒馆与欧根交谈，之后有夜晚剧情",
        "向南走上吊桥触发欧根病倒的剧情",
        "回到东北小屋，对病人使用打听，获得「欧根的呓语」",
        "前往旅店，听欧根讲述他的过去",
        "在阿芬的回忆中对旅行药师使用打听，获得「药方」，得知需要天狗鹫的羽毛",
        "从村子西北出口经「通往卢贝之森的道路」进入卢贝之森（宝箱很多，留意隐藏宝箱）",
        "在森林深处的瀑布崖顶击败天狗鹫，带羽毛回旅店治好欧根；结局在村北格拉墨·克洛斯佛德之墓前"
      ],
      "boss": "天狗鹫（弱点：剑、弓、冰、雷、暗；开场仅冰有效，破防后逐步开放）",
      "tips": "被许多玩家视为最难的第4章Boss：全物理攻击带随机异常，半血后七色毒持续削减最大HP，务必做好异常免疫并集中BP速攻。完成后可在雪原地区诺斯利奇找欧根开启支线「欧根的后日谈」。"
    }
  ],

  "sidequests": [
    {
      "name": "旅人基特",
      "en": "Kit, the Traveler",
      "location": "north_bolderfall_pass",
      "trigger": "仅当以提里昂为初始角色时，完成第1章后在北柏达弗尔崖道遇到受伤的旅人",
      "steps": ["交给他一个治愈葡萄（初始角色身上自带）"],
      "reward": "1,500叶（之后基特移居诺布尔寇德，开启后续支线）",
      "difficulty": "易"
    },
    {
      "name": "黑暗神之女（I）",
      "en": "Daughter of the Dark God (I)",
      "location": "bolderfall",
      "trigger": "提里昂第1章完成后，宅邸前的阿尔法斯（Alphas）迷恋附近一位黑发女子",
      "steps": ["用汉伊特或欧贝利克对阿尔法斯使用挑衅/挑战并击败他（强度5，弱斧和短剑，招式三连击伤害约600，前期可稍后再来）"],
      "reward": "5,000叶（续篇（II）在河川地区）",
      "difficulty": "中"
    },
    {
      "name": "龙之母凯娅（I）",
      "en": "Kaia, Mother of Dragons (I)",
      "location": "bolderfall",
      "trigger": "提里昂第1章完成后，柏达弗尔桥边寻找蛋的女孩说她的蛋掉进了河里",
      "steps": [
        "顺河而下到河川地区西库利亚布鲁克川道，对河边的友善农夫使用打听/探查，得知隐藏物位置",
        "拾取隐藏物「巨大的蛋」，交还给柏达弗尔的女孩（凯娅）"
      ],
      "reward": "1,500叶、Light Nut",
      "difficulty": "易"
    },
    {
      "name": "龙之母凯娅（II）",
      "en": "Kaia, Mother of Dragons (II)",
      "location": "quarrycrest",
      "trigger": "完成（I）后，凯娅移居库欧利克雷斯特，想找镇上精通龙蛋的老人",
      "steps": ["到库欧利克雷斯特·矿山对「蛋男」（The Egg Man）使用引导/诱惑", "带他回去见凯娅"],
      "reward": "6,600叶、Light Nut (M)",
      "difficulty": "易"
    },
    {
      "name": "龙之母凯娅（III）",
      "en": "Kaia, Mother of Dragons (III)",
      "location": "orewell",
      "trigger": "完成（II）后，在欧亚威尔入口附近遇到凯娅，她的龙蛋被人偷走（第4章程度）",
      "steps": [
        "带上汉伊特或欧贝利克，出村沿南欧亚威尔崖道北侧岔路进入龙咏神殿（Lv50）",
        "一路向东找到好奇的神官，挑战/挑衅并击败他（强度8），取得龙蛋",
        "回欧亚威尔交给凯娅"
      ],
      "reward": "11,000叶、龙公主长袍（Robe of the Dragon Princess）、Light Nut (L)",
      "difficulty": "难"
    },
    {
      "name": "革命的火种",
      "en": "Sparks of Revolution",
      "location": "bolderfall",
      "trigger": "提里昂第1章完成后，中层东北大宅门口的严肃卫兵担心下层平民即将起义",
      "steps": [
        "方法A：在柏达弗尔下层对贫民们偷窃/购买「叛逆之斧」「革命之剑」「正义之枪」，交给卫兵",
        "方法B：对卫兵身后大宅里的开明贵族使用探查/打听得到「改革计划」，告诉下层的贫民革命家"
      ],
      "reward": "2,000叶",
      "difficulty": "易"
    },
    {
      "name": "盗贼的规矩",
      "en": "The Bandits' Code",
      "location": "bolderfall",
      "trigger": "提里昂第1章完成后，柏达弗尔下层的老练盗贼想金盆洗手，但按玛尔塔一伙的规矩须先找到接班人",
      "steps": [
        "方法A：到沙漠地区桑谢德酒馆西北角，对踌躇的青年使用引导/诱惑，带回给盗贼",
        "方法B：到森林地区维克塔霍洛第一区西南角教会式建筑前，对孤儿院院长使用探查/打听得「玛尔塔一伙」情报，告诉盗贼"
      ],
      "reward": "2,400叶、守护纹章（Blazon of Protection）",
      "difficulty": "易"
    },
    {
      "name": "织工的烦恼",
      "en": "The Weaver's Predicament",
      "location": "quarrycrest",
      "trigger": "库欧利克雷斯特入口附近的织工根迪抱怨店里生意冷清（第2~3章程度）",
      "steps": [
        "方法A：对根迪偷窃/购买「根迪的地毯布」，带到雪原地区弗雷姆葛雷斯第一区东南角（原初洞窟出口旁）房屋，交给发抖的镇民",
        "方法B：到平原地区诺布尔寇德西侧奥立克宅邸前的时髦旅人处探查/打听「织物的用途」，告诉根迪"
      ],
      "reward": "6,500叶、织工护符（Weaver's Charm）",
      "difficulty": "中"
    },
    {
      "name": "矿工的难题",
      "en": "A Miner Dilemma",
      "location": "quarrycrest_mines",
      "trigger": "库欧利克雷斯特·矿山最上方的矿工说鹤嘴锄太钝挖不动岩石（第2章程度）",
      "steps": ["到海岸地区葛鲁德修亚北部装备店前，对卖石人偷窃/购买「欧亚威尔磨刀石」", "带回交给矿工"],
      "reward": "9,000叶、锐利坚果（Sharp Nut）、暴击坚果（Critical Nut）",
      "difficulty": "中"
    },
    {
      "name": "悬崖边上",
      "en": "On the Precipice",
      "location": "orewell",
      "trigger": "欧亚威尔西北角被骗光家产、想要轻生的落魄商人（第4章程度）",
      "steps": [
        "方法A：直接对他挑战/挑衅并击败（很弱），让他清醒过来",
        "方法B：到平原地区阿特拉斯达姆王宫门前（学院正门右侧）对万事通米罗探查/打听「果冻辣椒（The Jellypeno）」，告诉商人"
      ],
      "reward": "11,000叶、回春果酱",
      "difficulty": "易"
    },
    {
      "name": "浪子",
      "en": "The Wayward Son",
      "location": "orewell",
      "trigger": "欧亚威尔西南角的母亲后悔十年前对当了骑士的儿子说了重话（第4章程度）",
      "steps": [
        "到沙漠地区马尔沙利姆王宫一层左侧牢房附近，对严肃的骑士使用引导（奥菲莉亚需Lv45）或诱惑（成功率低）",
        "带他回欧亚威尔见母亲"
      ],
      "reward": "9,000叶、还魂橄榄（特大）",
      "difficulty": "中"
    },
    {
      "name": "希斯柯特的恶作剧",
      "en": "Heathcote's High Jinks",
      "location": "bolderfall",
      "trigger": "提里昂第4章完成后，宅邸前大门外的希斯柯特收到盗贼预告信",
      "steps": ["到平原地区维斯帕米尔镇顶端风车附近，对老人使用引导/诱惑", "带他回柏达弗尔宅邸前见希斯柯特"],
      "reward": "12,000叶、希斯柯特的短剑（Heathcote's Dagger）",
      "difficulty": "中"
    },
    {
      "name": "瑞贝罗与奥黛特",
      "en": "Revello and Odette",
      "location": "quarrycrest",
      "trigger": "塞拉斯与普里姆萝洁的第4章都完成后，瑞贝罗（Revello）站在库欧利克雷斯特的奥黛特家门口",
      "steps": [
        "进屋对奥黛特使用探查/打听，获得「不去祭拜杰佛里的原因」",
        "到平原地区诺布尔寇德东区最东端的大宅，把情报告诉瑞贝罗"
      ],
      "reward": "9,000叶、瑞贝罗的头盔（Revello's Helm）",
      "difficulty": "易"
    }
  ],

  "items": [
    { "name": "隼之匕首", "en": "Falcon Dagger", "type": "武器", "location": "bolderfall", "how": "向中层老婆婆探听隐藏物，在被老人堵门的房屋内拾取；第1章即可获得的强力短剑", "effect": "" },
    { "name": "刺击匕首", "en": "Stinging Dagger", "type": "武器", "location": "bolderfall", "how": "中层旅店后方紫色宝箱", "effect": "" },
    { "name": "疾风之衣", "en": "Wind Attire", "type": "防具", "location": "ravus_manor", "how": "瑞布斯的宅邸第二区域东侧小房间紫色宝箱", "effect": "" },
    { "name": "回避盾", "en": "Elusive Shield", "type": "防具", "location": "bolderfall", "how": "向宅邸前一条看门狗探听得隐藏物（第1章后宅邸前开放探索）", "effect": "" },
    { "name": "战矛", "en": "War Spear", "type": "武器", "location": "bolderfall", "how": "向宅邸前守卫探听，隐藏物在大门内", "effect": "" },
    { "name": "刺激项链", "en": "Stimulating Necklace", "type": "饰品", "location": "bolderfall", "how": "对中层东北大宅门口的严肃卫兵偷窃/购买（30,000叶）", "effect": "" },
    { "name": "魔力之斧", "en": "Enchanted Axe", "type": "武器", "location": "carrion_caves", "how": "击败鸟葬洞窟Boss亚耶罗巴特后开启宝箱", "effect": "物攻+132、暴击+65" },
    { "name": "铁壁坚果", "en": "Tough Nut", "type": "道具", "location": "carrion_caves", "how": "鸟葬洞窟紫色宝箱", "effect": "永久提升物防" },
    { "name": "暴力之剑", "en": "Carnage Blade", "type": "武器", "location": "derelict_mine", "how": "击败腐朽的开采所Boss戴特摩尔后开启宝箱", "effect": "物攻+200，攻击时低概率降低目标物攻" },
    { "name": "昏迷耐性石", "en": "Conscious Stone", "type": "饰品", "location": "derelict_mine", "how": "腐朽的开采所紫色宝箱；莫洛克的宅邸、卢贝之森、龙咏神殿也各有一个", "effect": "防止昏迷类异常" },
    { "name": "狙击军刀", "en": "Snipe Saber", "type": "武器", "location": "quarrycrest_sewers", "how": "下水道紫色宝箱（塞拉斯第2章开放后）", "effect": "" },
    { "name": "灵敏戒指", "en": "Sprightly Ring", "type": "饰品", "location": "quarrycrest_sewers", "how": "下水道隐藏通路尽头的宝箱；也可从奥黛特处偷窃/购买", "effect": "" },
    { "name": "高速头盔", "en": "Hasty Helm", "type": "防具", "location": "morlocks_manse", "how": "莫洛克的宅邸第二区域二楼紫色宝箱", "effect": "" },
    { "name": "奥玛尔之斧", "en": "Omar's Axe", "type": "武器", "location": "morlocks_manse", "how": "特蕾莎第2章击败奥玛尔必定掉落", "effect": "" },
    { "name": "基甸的短剑", "en": "Gideon's Dagger", "type": "武器", "location": "quarrycrest_sewers", "how": "塞拉斯第2章击败基甸必定掉落", "effect": "" },
    { "name": "禁忌之枪", "en": "Forbidden Spear", "type": "武器", "location": "quarrycrest", "how": "向库欧利克雷斯特被看守房屋内的老婆婆购买，69,000叶（资料显示不可偷）", "effect": "" },
    { "name": "魔导长柄刀", "en": "Magus Glaive", "type": "武器", "location": "quarrycrest_mines", "how": "矿山武器店购买，32,000叶", "effect": "物攻+96、属攻+162" },
    { "name": "山岳砍刀", "en": "Hill Cleaver", "type": "武器", "location": "quarrycrest_mines", "how": "矿山武器店40,000叶（需先探听情报解锁）；欧亚威尔老人处也可探听到隐藏物", "effect": "物攻+221、暴击+86" },
    { "name": "寂静头巾", "en": "Silent Bandana", "type": "防具", "location": "quarrycrest_mines", "how": "对矿山劳工偷窃/购买（14,820叶）", "effect": "" },
    { "name": "新月短剑", "en": "Crescent Dagger", "type": "武器", "location": "quarrycrest_mines", "how": "对矿山的好奇女士或新人歌手偷窃/购买（11,400叶）", "effect": "" },
    { "name": "食人魔砍刀", "en": "Ogre Cleaver", "type": "武器", "location": "orewell", "how": "欧亚威尔商店60,000叶（需先探听情报解锁）", "effect": "物攻+286、暴击+110" },
    { "name": "寂静披风", "en": "Silent Cape", "type": "防具", "location": "orewell", "how": "欧亚威尔商店19,200叶", "effect": "物防+102、属防+114、回避+147" },
    { "name": "启迪项链", "en": "Enlightening Necklace", "type": "饰品", "location": "orewell", "how": "对欧亚威尔迟钝的镇民偷窃/购买（15,200叶）", "effect": "" },
    { "name": "爆炎护符", "en": "Inferno Amulet", "type": "饰品", "location": "forest_of_rubeh", "how": "卢贝之森外围紫色宝箱", "effect": "" },
    { "name": "隼之强弓", "en": "Augmented Bow of the Falcon", "type": "武器", "location": "forest_of_rubeh", "how": "卢贝之森西侧画面北面的宝箱", "effect": "" },
    { "name": "帝国铠甲", "en": "Imperial Armor", "type": "防具", "location": "forest_of_rubeh", "how": "卢贝之森内部被大树完全遮挡的隐藏宝箱", "effect": "" },
    { "name": "弓圣之大弓", "en": "Holy Longbow", "type": "武器", "location": "dragonsong_fane", "how": "龙咏神殿紫色宝箱", "effect": "" },
    { "name": "水晶盔", "en": "Crystal Helm", "type": "防具", "location": "dragonsong_fane", "how": "龙咏神殿宝箱", "effect": "" },
    { "name": "符文手斧", "en": "Rune Hatchet", "type": "武器", "location": "south_orewell_pass", "how": "对南欧亚威尔崖道的神秘骑士偷窃/购买（67,200叶）", "effect": "" },
    { "name": "龙公主长袍", "en": "Robe of the Dragon Princess", "type": "防具", "location": "orewell", "how": "支线「龙之母凯娅（III）」奖励", "effect": "" },
    { "name": "希斯柯特的短剑", "en": "Heathcote's Dagger", "type": "武器", "location": "bolderfall", "how": "支线「希斯柯特的恶作剧」奖励（提里昂第4章后）", "effect": "" },
    { "name": "瑞贝罗的头盔", "en": "Revello's Helm", "type": "防具", "location": "quarrycrest", "how": "支线「瑞贝罗与奥黛特」奖励", "effect": "" },
    { "name": "织工护符", "en": "Weaver's Charm", "type": "饰品", "location": "quarrycrest", "how": "支线「织工的烦恼」奖励", "effect": "" },
    { "name": "守护纹章", "en": "Blazon of Protection", "type": "饰品", "location": "bolderfall", "how": "支线「盗贼的规矩」奖励", "effect": "" }
  ],

  "jobs": [
    { "name": "盗贼", "en": "Thief", "location": "shrine_prince_of_thieves", "how": "进入南库欧利克雷斯特崖道西南侧的盗公子的祠堂，调查盗公子神像即可获得盗贼职业证（无需战斗）" }
  ],

  "tips": [
    "提里昂第1章期间柏达弗尔居民的偷窃成功率极高，先把全镇值钱装备偷一遍（之后新出现的NPC成功率会降低）",
    "鸟葬洞窟（Lv20）的平均遇敌金钱/经验/JP在内环区域中最高，适合第1~2章之间练级；南北柏达弗尔崖道在最高危险度时也很赚钱",
    "南库欧利克雷斯特崖道是本区交通枢纽：东去柏达弗尔、北上库欧利克雷斯特、西往欧亚威尔，并可顺路拿盗贼副职业、挑战腐朽的开采所",
    "亚耶罗巴特与戴特摩尔被击败后会以约3%概率在各自迷宫随机出现，可让汉伊特捕获作为召唤兽",
    "莫洛克的宅邸存档点旁房间西北角有本作唯一完全隐藏的房间（6,000叶）；卢贝之森与下水道也有多个需要贴墙寻找的隐藏通路",
    "欧亚威尔、南欧亚威尔崖道、卢贝之森、龙咏神殿都是第4章等级（45~50）的区域，第2章来库欧利克雷斯特时不要贸然西进",
    "龙之母凯娅三部曲横跨柏达弗尔→库欧利克雷斯特→欧亚威尔，最终奖励龙公主长袍；黑暗神之女（I）则是贯穿全图的隐藏支线起点",
    "提里昂第4章结束后会回到柏达弗尔交还龙石，宅邸前可与希斯柯特对话开启支线「希斯柯特的恶作剧」"
  ]
});

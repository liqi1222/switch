OT2.addRegion({
  "id": "highlands",
  "name": "高原地区",
  "official": "哈伊兰多地区",
  "en": "Highlands",
  "continent": "east",
  "levelRange": "1-55",
  "starter": "欧贝利克（剑士）",
  "intro": "高原地区位于奥斯泰拉东南部的群山之中，岩石裸露、林木稀疏，北接海岸地区、西接沙漠地区。由北向南依次是欧贝利克隐居的鹅卵石村、高原最大的书籍装订之城斯托冈德、以剧场闻名的山巅之城艾巴霍多；这里曾是号角堡王国与凡图斯王朝的故土。本区承载欧贝利克第1章、汉伊特第2章、塞拉斯第3章与普里姆萝洁第4章，并有雷剑将的祠堂（剑士副职业）、隐藏的魔剑士的祠堂（符文大师）、高难迷宫艾巴霍多地下坑道遗迹，以及终盘的号角堡合战场遗迹与菲尼斯之门。",
  "highlights": [
    "北斯托冈德山道的「雷剑将的祠堂」可直接获得剑士副职业证，第2章途中顺路拿",
    "西艾巴霍多山道深处的「魔剑士的祠堂」（Lv50）：击败魔剑士巴罗格解锁隐藏职业符文大师",
    "艾巴霍多大剧场两个紫箱：无形之剑（物攻+235、回避+100）与纤细的舞女服装（回避+166），上层另有紫箱古老法杖",
    "艾巴霍多地下坑道遗迹（Lv55）：隐藏Boss噬梦（弱点剑/光），紫箱斗智法杖（属攻+333）",
    "城镇NPC强力装备：斯托冈德下街的禁断之剑（75,000叶）、娜塔莉亚的水晶盔，艾巴霍多居民的死神之剑/三位一体之剑/符文长弓，艾巴霍多武器店的兆速小刀",
    "终盘：完成相关支线后快速旅行至号角堡合战场遗迹，进入菲尼斯之门挑战真结局"
  ],

  "locations": [
    {
      "id": "cobbleston",
      "name": "鹅卵石村",
      "en": "Cobbleston",
      "type": "town",
      "wpos": [935, 545],
      "level": "1",
      "desc": "高原西部群山间的小村，以放牧和种菜为生；欧贝利克化名「贝克」在此担任护卫，是他的起点。",
      "story": ["欧贝利克 第1章"],
      "boss": [],
      "treasures": [
        { "item": "团长之剑（Captain's Sword）", "how": "村内红色宝箱" },
        { "item": "治愈葡萄", "how": "村内木宝箱" },
        { "item": "隐藏物：战争骑枪（War Lance）", "how": "向村长打听/探查得知，在村长家屋内；第1章前期就能拿到的强力长枪" },
        { "item": "隐藏物：秘术之弓（Arcane Bow）、还魂橄榄、净化之种（Purifying Seed）、糖果（Candy）", "how": "分别向酒馆村民、两名村民与菲利普打听/探查得知位置后拾取" }
      ],
      "npcs": [
        { "name": "村长（Village Headman）", "item": "战争骑枪的隐藏位置", "method": "探听", "note": "第1章开场可与其比试；打听成功率很高" },
        { "name": "诺艾尔（Noelle）", "item": "灵敏项链（Sprightly Necklace，约15,200叶）、刺激戒指", "method": "偷窃/购买", "note": "历史研究家，支线「历史研究家诺艾尔」委托人；之后会依次移动到斯托冈德上街、艾巴霍多" },
        { "name": "笑容灿烂的农民（Kindly Farmer）", "item": "银枪（Silver Spear）", "method": "偷窃/购买", "note": "支线「农田的肥料」委托人" },
        { "name": "健壮的牧牛人（Courageous Cowherd）", "item": "牛粪（Cow Droppings）", "method": "偷窃/购买", "note": "支线「农田的肥料」所需道具" },
        { "name": "酒馆村民（女弓手）", "item": "不偏耳环；挑战胜利有小概率掉落暗影弓（Shadow Bow）", "method": "挑战/偷窃", "note": "强度6，前期很难打赢；探听得秘术之弓隐藏位置" },
        { "name": "卡斯顿（Gaston）", "item": "无形之剑（Unseen Saber，约47,500叶）、水晶铠甲（Crystal Armor，约57,000叶）", "method": "偷窃/购买", "note": "欧贝利克故事推进后（据资料为第4章完成后）出现在村中，是终盘级装备来源" },
        { "name": "自警团团长（Captain of the Watch）", "item": "情报「轻松比试」", "method": "探听", "note": "第1章剧情中需与自警团成员比试" }
      ],
      "shops": [
        "杂货/武器店（村东侧通往南山道的出口旁）：铁剑 800、战枪 1,400、秘术短剑 2,200、巨剑 7,500、银背心 4,160 等",
        "治愈葡萄 50、醒神李子 240、还魂橄榄 500 及各种治疗药草；打听得「新武器上架」后追加塔盾（14,400）"
      ],
      "tips": "第1章完成后村中出现支线「农田的肥料」「历史研究家诺艾尔（I）」「无法忘怀的回忆」。欧贝利克的「比试」可与村民切磋刷经验。"
    },
    {
      "id": "mountain_pass",
      "name": "通往山贼大本营的道路",
      "en": "Mountain Pass",
      "type": "field",
      "wpos": [942, 528],
      "level": "1~11（随队伍人数浮动）",
      "desc": "从鹅卵石村东北出口延伸进山的小路，尽头是山贼大本营。",
      "story": ["欧贝利克 第1章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "存档点向上" },
        { "item": "醒神李子", "how": "存档点向下绕行" },
        { "item": "光之精灵石", "how": "存档点处向左上方的岔路" },
        { "item": "旧硬币（Old Coin，换金）", "how": "过桥后存档点附近的红色宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "怪物几乎都弱剑（鼠人：剑/短剑/弓/光；岩犰狳：剑/斧/暗；游隼：枪/短剑/弓/风/暗），横一字斩即可清场。山贼大本营入口前有一场3名山贼的剧情战。"
    },
    {
      "id": "brigands_den",
      "name": "山贼大本营",
      "en": "Brigands' Den",
      "type": "dungeon",
      "wpos": [930, 514],
      "level": "1~11（随队伍人数浮动）",
      "desc": "鹅卵石村北面山中的阴冷洞窟，山贼们的据点；欧贝利克第1章迷宫。",
      "story": ["欧贝利克 第1章"],
      "boss": [
        { "name": "卡斯顿", "en": "Gaston", "level": "约5~11", "weakness": ["枪", "短剑", "杖", "冰", "雷"], "tips": "护盾与HP随队伍人数增加。同行两名山贼弱点为剑/斧/火/风/暗，先用横一字斩（可增幅）一起破防清掉。卡斯顿「大幅挥起武器」后下回合会放单体强击（四人队时约500伤害），提前削盾在蓄力时破防，或全员防御/欧贝利克挑衅+增幅防御硬吃。主攻用枪（千本枪）；回复道具备足。" }
      ],
      "treasures": [
        { "item": "治愈葡萄", "how": "入口向右走到底" },
        { "item": "黑帽（Black Cap）", "how": "上述宝箱处继续向右的隐藏小路尽头，红色宝箱" },
        { "item": "铜制提灯（Copper Lantern，换金）", "how": "入口向左走到底，上方红色宝箱" },
        { "item": "火之精灵石", "how": "铜制提灯下方的木宝箱" },
        { "item": "醒神李子", "how": "行商与存档点处向下走" }
      ],
      "npcs": [
        { "name": "行商（Traveling Peddler）", "item": "治愈葡萄、醒神李子、还魂橄榄", "method": "购买", "note": "Boss前存档点旁" }
      ],
      "shops": ["Boss前行商：治愈葡萄 50、醒神李子 240、还魂橄榄 500"],
      "tips": "建议在洞内用JP学会剑士技能「千本枪」再打Boss。击败卡斯顿后得知黑骑士古斯塔夫可能知道艾尔哈特的下落，第2章前往维克塔霍洛（森林地区）。"
    },
    {
      "id": "south_cobbleston_gap",
      "name": "南鹅卵石村山道",
      "en": "South Cobbleston Gap",
      "type": "field",
      "wpos": [957, 573],
      "level": "1/4/7/11",
      "desc": "鹅卵石村东侧出口外的山道，西通沙漠地区东桑谢德沙道，北接北鹅卵石村山道。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "睡眠治疗药草（Herb of Awakening）", "how": "进入山道后先向右" },
        { "item": "沉默治疗药草（Herb of Clamor）", "how": "上坡后岔路向左走到底" },
        { "item": "治愈葡萄", "how": "岔路向右后下坡右侧" },
        { "item": "1,000叶", "how": "左侧小山洞深处" },
        { "item": "还魂橄榄", "how": "靠近北鹅卵石村山道一侧" }
      ],
      "npcs": [
        { "name": "基特（Kit，旅行青年）", "item": "支线「旅人基特」", "method": "交付道具", "note": "仅当以欧贝利克为第一位主角时出现在存档点附近" }
      ],
      "shops": [],
      "tips": "危险度随已加入同伴数变化（1/4/7/11）。前往沙漠地区桑谢德（普里姆萝洁起点）走这里向西。"
    },
    {
      "id": "north_cobbleston_gap",
      "name": "北鹅卵石村山道",
      "en": "North Cobbleston Gap",
      "type": "field",
      "wpos": [985, 522],
      "level": "1/4/7/11",
      "desc": "高原北部的山道交汇点：北通海岸地区东利布尔泰德海道，南接南鹅卵石村山道与北斯托冈德山道，东北角有无垢巢窟。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "存档点向右，再向下" },
        { "item": "魔导坚果（Magic Nut）", "how": "上述宝箱处继续向左（紫色宝箱，需盗贼开锁）" },
        { "item": "1,200叶", "how": "向右走到头后笔直向下" },
        { "item": "醒神李子", "how": "山道途中" },
        { "item": "光之精灵石", "how": "通往海岸地区的木桥旁" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "前往利布尔泰德（特蕾莎起点）由此向北过木桥。东北角的无垢巢窟是支线「历史研究家诺艾尔（I）」的目的地。"
    },
    {
      "id": "untouched_sanctum",
      "name": "无垢巢窟",
      "en": "Untouched Sanctum",
      "type": "dungeon",
      "wpos": [995, 504],
      "level": "15",
      "desc": "北鹅卵石村山道东北的灰雾洞窟，有地下湖和记载古国菲里恩历史的石碑。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "醒神李子", "how": "木宝箱" },
        { "item": "极点权杖（Pole Mace）", "how": "红色宝箱" },
        { "item": "鹰眼坚果（Sharp Nut）", "how": "紫色宝箱，需盗贼开锁" },
        { "item": "治愈葡萄（大）", "how": "木宝箱" },
        { "item": "还魂橄榄（大）", "how": "木宝箱" },
        { "item": "醒神李子（大）", "how": "木宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "怪物种类是全游戏最多的（12种），多为鬼火与骷髅，弱点各异，带上法术职业。存档点向右后一直向下可找到西南侧石碑（诺艾尔支线）。"
    },
    {
      "id": "north_stonegard_pass",
      "name": "北斯托冈德山道",
      "en": "North Stonegard Pass",
      "type": "field",
      "wpos": [1025, 572],
      "level": "17/20/25/30",
      "desc": "高原的交通枢纽：西北接北鹅卵石村山道，北通海岸地区月隐海道（往葛鲁德修亚），东北到斯托冈德，西南接西斯托冈德山道。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "活力石榴", "how": "山道途中" },
        { "item": "治愈葡萄（大）", "how": "山道途中" },
        { "item": "光之精灵石（大）", "how": "山道途中" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "雷剑将的祠堂入口就在本山道上，第2章前往斯托冈德时顺路获得剑士副职业。"
    },
    {
      "id": "shrine_thunderblade",
      "name": "雷剑将的祠堂",
      "en": "Shrine of the Thunderblade",
      "type": "shrine",
      "wpos": [1003, 563],
      "level": "17~30（北斯托冈德山道危险度）",
      "desc": "供奉雷剑将布兰德的祠堂，位于北斯托冈德山道旁。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "调查祭坛神像即可获得剑士职业证，无需战斗。剑士奥义「雷剑将布兰德的刚击」是挑战隐藏祠堂Boss时的主力输出。"
    },
    {
      "id": "stonegard",
      "name": "斯托冈德",
      "en": "Stonegard",
      "type": "town",
      "wpos": [1100, 548],
      "level": "27",
      "desc": "高原最大的城市，以书籍装订业闻名；依山分为主街、贵族居住的上街和平民与工坊所在的下街。",
      "story": ["汉伊特 第2章", "塞拉斯 第3章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄（大）", "how": "上街木宝箱" },
        { "item": "刺甲（Spiked Armor）", "how": "下街红色宝箱" },
        { "item": "隐藏物：士兵大弓（Soldier's Longbow）、空钱包、火之精灵石（特大）、大羽毛", "how": "向上街几名镇民与装订工匠打听/探查得知位置" },
        { "item": "隐藏物：引力斧（Graviton Axe）、硬剑（Bastard Sword）、醒神李子（大）", "how": "向下街两名镇民与神官打听/探查得知位置" },
        { "item": "隐藏物：装有银币的皮袋", "how": "向主街一名镇民打听/探查" }
      ],
      "npcs": [
        { "name": "镇民（下街武器店附近的铁商）", "item": "禁断之剑（Forbidden Blade，75,000叶）", "method": "购买", "note": "物攻+310、速度+120，终盘级剑" },
        { "name": "娜塔莉亚（Natalia，下街）", "item": "水晶盔（Crystal Helm，约39,900叶）", "method": "偷窃/购买", "note": "汉伊特第2章相关人物" },
        { "name": "粉碎者阿奇波尔德（Archibold the Crusher，下街）", "item": "双刃战斧（Double Tomahawk，约61,750叶）、银斧", "method": "偷窃/购买", "note": "欧贝利克第2章对手，据资料在欧贝利克第4章完成后出现" },
        { "name": "流氓手下（Ruffian Lackey，下街）", "item": "岩石斩斧（Rock Cleaver，约26,600叶）", "method": "偷窃/购买", "note": "" },
        { "name": "神官（Cleric，下街）", "item": "挑战胜利有约10%概率掉落黄金发饰（Golden Hairpiece）", "method": "挑战", "note": "强度8，非常强" },
        { "name": "镇民（下街，强度8）", "item": "挑战胜利有约5%概率掉落炽天使之枪（Seraphim Spear）", "method": "挑战", "note": "后期再来" },
        { "name": "镇民（上街）", "item": "骑士之剑、月光剑、地狱战斧、帝王铠甲", "method": "偷窃/购买", "note": "约21,600~30,600叶" },
        { "name": "镇民（上街）", "item": "神射手长弓（Marksman's Longbow，约17,100叶）", "method": "偷窃/购买", "note": "探听可得士兵大弓隐藏位置" },
        { "name": "镇民（上街，强度6）", "item": "挑战胜利有约8%概率掉落太古长袍（Primeval Robe）", "method": "挑战", "note": "" },
        { "name": "邻家老爷爷（主街）", "item": "塔盾（Tower Shield，约13,680叶）", "method": "偷窃/购买", "note": "引导成功率高" },
        { "name": "诺艾尔（上街）", "item": "灵敏项链", "method": "偷窃/购买", "note": "支线「历史研究家诺艾尔（II）」委托人" }
      ],
      "shops": [
        "下街武器店：角斧（Horn Cleaver）22,000、士兵大弓 12,000、魔术师之弓 10,000、隼之帽 6,960、元素长袍 8,160；向下街镇民打听「新武器上架」后追加帝王背心（Imperial Vest）19,200",
        "下街道具店：治愈葡萄（大）260、还魂橄榄（大）3,000、净化之尘 3,200 等"
      ],
      "tips": "上街北侧是伊冯的老家，东侧出口通往幻影之森。恢复声望需3,500叶。下街的娜塔莉亚与欧伦也与雪原地区支线「再会阿丽安娜」有关。"
    },
    {
      "id": "yvons_birthplace",
      "name": "伊冯的老家（含地下）",
      "en": "Yvon's Birthplace & Cellar",
      "type": "dungeon",
      "wpos": [1110, 532],
      "level": "40",
      "desc": "斯托冈德上街北侧荒废二十年的伊冯校长旧宅；地上为宅邸、地下为广阔的研究室，塞拉斯第3章迷宫。",
      "story": ["塞拉斯 第3章"],
      "boss": [
        { "name": "伊冯", "en": "Yvon", "level": "约40", "weakness": ["短剑", "杖", "光"], "tips": "护盾5→8→12。开场弱点短剑/杖/光；第一次破防恢复后护盾升到8并追加弱点火，第二次恢复后护盾升到12并追加冰；HP降到一半以下进入暴走，攻击必定会心，越往后越危险，要集中BP尽快压血。同行特别研究员弱点枪/斧/雷/暗，可先处理。带药师或神官保证回复，副职业尽量覆盖短剑/杖/光。" }
      ],
      "treasures": [
        { "item": "骨头（Bone）", "how": "地上宅邸陷阱坑内，仅塞拉斯第3章期间可取，错过永久失去" },
        { "item": "醒神李子", "how": "地上宅邸" },
        { "item": "巨型石英法杖（Sturdy Quartz Rod）", "how": "地下紫色宝箱，需开锁" },
        { "item": "12,000叶", "how": "地下" },
        { "item": "黑暗耐性石（Bright Stone）", "how": "地下" },
        { "item": "活力石榴（大）、火之精灵石（大）、光之精灵石（特大）、醒神李子篮", "how": "地下各房间" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "本迷宫随机战平均经验是中环区域最高（森林地区不归之森除外），适合第3~4章之间练级。"
    },
    {
      "id": "spectrewood_path",
      "name": "通往幻影之森的道路",
      "en": "Spectrewood Path",
      "type": "field",
      "wpos": [1160, 553],
      "level": "26",
      "desc": "斯托冈德上街东侧通往幻影之森的山路，上方道路被落石堵住。",
      "story": ["汉伊特 第2章"],
      "boss": [],
      "treasures": [
        { "item": "5,000叶", "how": "山路途中" },
        { "item": "看着像金矿石的东西（Fool's Gold Ore，换金）", "how": "山路途中" },
        { "item": "沉默治疗药草", "how": "山路途中" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "汉伊特第2章：上路被落石堵住，回到存档点下方右侧，对拟态成树木的魔物「古老之树（Ancient One）」使用唆使，打倒后开出下方新路。章节完成后上路改为木栅栏，下方通路保留。"
    },
    {
      "id": "spectrewood",
      "name": "幻影之森",
      "en": "The Spectrewood",
      "type": "dungeon",
      "wpos": [1192, 550],
      "level": "27",
      "desc": "斯托冈德东北的迷雾森林，残存废墟石柱，森林之主栖息其中；汉伊特第2章迷宫。",
      "story": ["汉伊特 第2章"],
      "boss": [
        { "name": "森林之主", "en": "Lord of the Forest", "level": "约27", "weakness": ["剑", "斧", "火", "光"], "tips": "护盾约7，共三个阶段、每次破防恢复后弱点切换：①剑/斧/火/光 ②枪/短剑/斧/火/暗 ③弓/杖/火/风（据游民星空），火属性全程有效。会召唤树木/菌类小怪（摇动的树木弱斧/火/雷，猛毒菇弱短剑/火/风，乱跑的菌类弱枪/冰/暗）。被其「吞噬」类技能击中HP会降为1，需要稳定回复。" }
      ],
      "treasures": [
        { "item": "火之护符（Fire Amulet）", "how": "紫色宝箱，需开锁" },
        { "item": "回春果酱（Refreshing Jam）", "how": "森林内" },
        { "item": "6,000叶", "how": "森林内" },
        { "item": "装有铜币的皮袋", "how": "森林内" },
        { "item": "火之精灵石（大）", "how": "森林内" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "击败森林之主后发现被红眼石化的赞塔，汉伊特第3章前往雪原地区史迪尔斯诺寻找占卜师。"
    },
    {
      "id": "west_stonegard_pass",
      "name": "西斯托冈德山道",
      "en": "West Stonegard Pass",
      "type": "field",
      "wpos": [945, 593],
      "level": "17/20/25/30",
      "desc": "连接北斯托冈德山道、沙漠地区东威尔斯宾克沙道与西艾巴霍多山道的山道，下层岔路通往王家之墓。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "装有铜币的皮袋", "how": "山道途中" },
        { "item": "活力石榴", "how": "山道途中" },
        { "item": "醒神李子（大）", "how": "山道途中" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "岔路高处一侧通往艾巴霍多方向（西艾巴霍多山道危险度45），低处通往王家之墓。"
    },
    {
      "id": "tomb_of_kings",
      "name": "王家之墓",
      "en": "Tomb of Kings",
      "type": "dungeon",
      "wpos": [935, 611],
      "level": "25",
      "desc": "凡图斯王朝历代国王长眠的巨大遗迹洞窟，深处有无名守墓人讲述王朝因兄弟内战而灭亡的往事。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "速度头盔（Hasty Helm）", "how": "紫色宝箱，需开锁" },
        { "item": "9,400叶", "how": "遗迹内" },
        { "item": "奇特的古董（Curious Antique，换金）", "how": "遗迹内" },
        { "item": "治愈葡萄串、火之精灵石（大）、黑暗之瓶、黑暗耐性石", "how": "遗迹内：第一段楼梯上后向西走到头为黑暗之瓶，第二段楼梯上为葡萄，火之精灵石（大）在隐藏通道出口南侧，黑暗耐性石在最高层北墙边" }
      ],
      "npcs": [
        { "name": "无名守墓人（Nameless Gravekeeper）", "item": "情报「守墓人的情报」；持有光之精灵石（特大）、醒神李子（大）", "method": "探听/偷窃", "note": "支线「王家的秘密」解法②所需情报" }
      ],
      "shops": [],
      "tips": "怪物以风/光属性魔导机与盗贼为主，带剑/火系攻击较顺。迷宫内有2个存档点：入口分岔处与中央大阶梯中途。"
    },
    {
      "id": "west_everhold_pass",
      "name": "西艾巴霍多山道",
      "en": "West Everhold Pass",
      "type": "field",
      "wpos": [955, 667],
      "level": "45",
      "desc": "艾巴霍多城下的山道，西接西斯托冈德山道，道路深处藏有艾巴霍多地下坑道遗迹与魔剑士的祠堂。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "光之精灵石（特大）", "how": "山道途中" },
        { "item": "装有银币的皮袋", "how": "山道途中" },
        { "item": "活力石榴（大）", "how": "山道途中" },
        { "item": "火之精灵石（大）", "how": "山道途中" },
        { "item": "醒神李子（大）", "how": "山道途中" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "首次进入必定遭遇1只蛇鸟+3只暗乌鸦。魔剑士的祠堂：从存档点向东绕过石柱，进入岩石背后向南穿过石拱即到。"
    },
    {
      "id": "everhold",
      "name": "艾巴霍多",
      "en": "Everhold",
      "type": "town",
      "wpos": [990, 652],
      "level": "45",
      "desc": "凡图斯王朝故地、建于高山之巅的城市，以大剧场闻名，居民人人都像在扮演角色；普里姆萝洁第4章舞台。",
      "story": ["普里姆萝洁 第4章"],
      "boss": [],
      "treasures": [
        { "item": "稀有的石头（Rare Stone，换金）", "how": "城内红色宝箱" },
        { "item": "治愈葡萄（大）", "how": "城内木宝箱" },
        { "item": "隐藏物：还魂橄榄（大）、稀有的石头、奇特的古董", "how": "分别向剧场引导员、老人、少女打听/探查得知位置" }
      ],
      "npcs": [
        { "name": "镇民（男）", "item": "死神之剑（Deathly Blade，约45,600叶）", "method": "偷窃/购买", "note": "" },
        { "name": "老人（Old Man）", "item": "三位一体之剑（Trinity Sword，约43,700叶）、太古长袍（Primeval Robe）", "method": "偷窃/购买/探听", "note": "探听得稀有的石头隐藏位置" },
        { "name": "镇民（女）", "item": "符文长弓（Rune Bow，约48,450叶）", "method": "偷窃/购买", "note": "探听得旅店折扣" },
        { "name": "镇民（扮演魔法使的女演员）", "item": "智慧法杖（Wisdom Staff，约38,000叶）、魔导士长袍（Sorcerer's Robe）", "method": "偷窃/购买/探听", "note": "探听得「新武器上架」，解锁武器店兆速小刀" },
        { "name": "热心的演员（Ardent Actor）", "item": "天使军刀（Angel Saber，约30,400叶）、静默披风、大头盔", "method": "偷窃/购买", "note": "支线「所谓演员」委托人" },
        { "name": "团长（Impresario）", "item": "增强命中/回避/会心的坚果（特大）各一（约5,472叶）", "method": "偷窃/购买/比试", "note": "支线「舞台的主角」委托人；强度7，弱点剑/短剑/光" },
        { "name": "镇民（强度7）", "item": "挑战胜利有约8%概率掉落达人大弓（Master's Longbow）", "method": "挑战", "note": "" },
        { "name": "大道具负责人（Stage Carpenter）", "item": "老旧的挂毯（Timeworn Tapestry）", "method": "偷窃/购买", "note": "旅馆前；支线「历史研究家诺艾尔（III）」所需" }
      ],
      "shops": [
        "武器防具店：深红短剑 35,000、灵魂小刀 37,000、绿洲之帽 18,000、静默披风（Silent Cape，回避+147）19,200；打听「新武器上架」后追加兆速小刀（Legion Dagger，物攻+263、回避+129）55,000",
        "道具店：治愈葡萄串 720、醒神李子（大）900、还魂橄榄（大）3,000、混乱/恐怖治疗药草 等"
      ],
      "tips": "城镇分为城区与大剧场两部分。恢复声望需1,000叶。团长之后会出现在森林地区西希·沃尔基森道（「团长与阿尔法丝」系列，通往终盘）；「旅途的最后」完成后剧团移居达斯克瓦罗。"
    },
    {
      "id": "everhold_amphitheatre",
      "name": "艾巴霍多大剧场",
      "en": "Everhold Amphitheatre",
      "type": "dungeon",
      "wpos": [983, 640],
      "level": "45/46",
      "desc": "由凡图斯王朝城堡改建的巨大剧场，分为大厅、下层（Arena）与上层雅座（Balcony）；席米恩在此上演以普里姆萝洁人生为蓝本的戏剧。",
      "story": ["普里姆萝洁 第4章"],
      "boss": [
        { "name": "席米恩（第一战）", "en": "Simeon", "level": "约45", "weakness": ["枪", "短剑", "杖", "暗"], "tips": "与两个人偶同时登场：人偶·父亲（弱点斧/火/雷/光，护盾5，攻击力最高）、人偶·舞娘（弱点剑/斧/杖/火，护盾4，会给敌方加物攻/物防并吸血）。席米恩本体威胁小，先集火舞娘再打父亲，人偶蓄力时优先打断。战斗结束前补满状态，紧接第二战。" },
        { "name": "席米恩（第二战·后颈之男）", "en": "Simeon, the Puppet Master", "level": "约46", "weakness": ["枪", "短剑", "杖", "风", "暗"], "tips": "HP约96,450，护盾6→8→10，每次破防恢复后弱点切换：枪/短剑/杖/风/暗 → 剑/斧/火/雷/暗 → 短剑/斧/弓/冰/暗，暗属性始终有效，开场会封锁部分弱点。主要威胁是全体沉默与暗属性攻击：带沉默耐性饰品或用药师「健全化」，备好沉默治疗药草。HP降到一半后会隐藏行动顺序，按部就班即可。" }
      ],
      "treasures": [
        { "item": "醒神李子篮", "how": "大厅（城镇区域）右侧柱子后" },
        { "item": "无形之剑（Unseen Saber）", "how": "下层：存档点北侧门进入，右侧楼梯上小房间的紫色宝箱" },
        { "item": "纤细的舞女服装（Ethereal Dancer Garb）", "how": "下层：存档点向西第二个门内的紫色宝箱" },
        { "item": "30,000叶、20,000叶", "how": "下层两处房间" },
        { "item": "火之精灵石（特大）、回春果酱、醒神李子（大）、火炎护符（Inferno Amulet）", "how": "下层各房间，火炎护符在第二个存档点右侧房间" },
        { "item": "古老法杖（Enchanted Rod）", "how": "上层雅座紫色宝箱" },
        { "item": "装有银币的皮袋、光之精灵石（特大）、黑暗耐性石、复苏果酱（Revitalizing Jam）、活力石榴（特大）", "how": "上层雅座各房间" }
      ],
      "npcs": [
        { "name": "剧场引导员×4（Usher）", "item": "各属性精灵石（大）×2+（特大）×1", "method": "偷窃/购买/探听", "note": "可探听得黑暗之瓶、治愈葡萄串的隐藏位置及「无法抗拒的诱惑」「盗窃技巧」等情报；其中一人挑战掉落陨石法杖（约8%）" },
        { "name": "剧场经理（Theater Manager）", "item": "增强项链（Empowering Necklace，约19,000叶）、醒神李子篮", "method": "偷窃/购买", "note": "" }
      ],
      "shops": [],
      "tips": "下层/上层敌人多为冰/光属性魔导机与黑曜会干部，带火/暗属性攻击。剧场内穿插剧中剧情，打完Boss后剧场音乐恢复为城镇BGM。"
    },
    {
      "id": "everhold_tunnels",
      "name": "艾巴霍多地下坑道遗迹",
      "en": "Everhold Tunnels",
      "type": "dungeon",
      "wpos": [940, 681],
      "level": "55",
      "desc": "西艾巴霍多山道深处满是烛台、碎石与骸骨的地下遗迹，危险度仅次于平原地区的净化之森。",
      "story": [],
      "boss": [
        { "name": "噬梦", "en": "Devourer of Dreams", "level": "55", "weakness": ["剑", "光"], "tips": "HP约21,216、护盾10。攻击带恐怖与即死效果，给主力装恐怖耐性石，可用欧贝利克挑衅/商人紧急回避吸收；血量不高，集中爆发速攻即可。击败后会以约3%概率在本迷宫随机出现，可让汉伊特捕获（使出全体即死技「死亡之云」）。可偷/掉落复苏果酱。" }
      ],
      "treasures": [
        { "item": "斗智法杖（Knowledge Staff）", "how": "紫色宝箱，需开锁；物攻+111、属攻+333、速度+99" },
        { "item": "死亡斩斧（Death Cleaver）", "how": "红色宝箱" },
        { "item": "35,000叶", "how": "红色宝箱" },
        { "item": "黑暗耐性石", "how": "红色宝箱（Boss后）" },
        { "item": "活力石榴（特大）、醒神李子（大）、还魂橄榄（大）、治愈葡萄串", "how": "坑道各处" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "怪物为大鼠人、狂战羊、腐朽的盔甲、山贼骷髅等，光属性与斧/杖普遍有效。建议Lv55以上并备齐异常状态对策。"
    },
    {
      "id": "shrine_runeblade",
      "name": "魔剑士的祠堂",
      "en": "Shrine of the Runeblade",
      "type": "shrine",
      "wpos": [1002, 688],
      "level": "50",
      "desc": "隐藏于西艾巴霍多山道的祠堂，下半埋于山根雾中、上半是通往天空的长阶梯，魔剑士巴罗格在顶端等候。",
      "story": [],
      "boss": [
        { "name": "魔剑士巴罗格", "en": "Balogar, the Runeblade", "level": "建议50以上", "weakness": ["短剑", "斧", "弓", "光", "暗"], "tips": "HP约197,849，护盾5→7→9。HP高于一半时会封锁其中3个弱点（常见为短剑/弓/光，只剩斧/暗可削盾），HP过半后解除。各种符文单体攻击附带睡眠、气绝、黑暗（盲目）、降防等异常，后期「扩散符文」使攻击全体化。对策：全员装药师辅助技能「提高异常状态回避」，或舞娘奥义（技能全体化）+药师「健全化」让全队免疫；全员HP最好3,000以上；剑士奥义「雷剑将布兰德的刚击」+「突破伤害上限」为主力输出。" }
      ],
      "treasures": [
        { "item": "醒神李子篮", "how": "红色宝箱" },
        { "item": "治愈葡萄串", "how": "红色宝箱" },
        { "item": "50,000叶", "how": "红色宝箱" },
        { "item": "复苏果酱", "how": "红色宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "击败巴罗格后调查祭坛获得隐藏职业「符文大师」。符文大师可给自身附加属性符文追击，并能把仅对自身生效的技能扩展到全体。"
    },
    {
      "id": "ruins_of_hornburg",
      "name": "号角堡合战场遗迹",
      "en": "Ruins of Hornburg",
      "type": "secret",
      "wpos": [1063, 696],
      "level": "",
      "desc": "号角堡王国覆灭的古战场，欧贝利克第1章开场梦境的舞台；无敌人、无宝箱、无背景音乐，崖顶可远眺菲尼斯之门的尖塔。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "无法步行抵达：完成森林地区支线「团长与阿尔法丝，在那之后」并接下「旅途的最后」后，才会在大地图（艾巴霍多东南方）出现快速旅行点。走到战场尽头会看到基特与莉布拉克进入菲尼斯之门。"
    },
    {
      "id": "gate_of_finis",
      "name": "菲尼斯之门",
      "en": "The Gate of Finis",
      "type": "secret",
      "wpos": [1073, 684],
      "level": "建议70以上",
      "desc": "号角堡遗址深处连接冥界的门，封印着邪神加尔德拉；游戏的终盘隐藏迷宫与真结局舞台。",
      "story": [],
      "boss": [
        { "name": "马蒂亚斯的暗影（上排左1）", "en": "Mattias?", "level": "终盘", "weakness": ["剑", "斧", "冰", "光"], "tips": "HP约149,283、护盾4；击败必掉还魂橄榄（特大）。奥菲莉亚第4章最终Boss的暗影，是8人中血量最少的一个。" },
        { "name": "伊冯的暗影（上排左2）", "en": "Yvon?", "level": "终盘", "weakness": ["短剑", "杖", "光"], "tips": "HP约163,771、护盾3；击败必掉复苏果酱。塞拉斯第3章Boss的暗影，护盾最少、弱点只有3个。" },
        { "name": "毒牙虎的暗影（上排右2）", "en": "Venomtooth Tiger?", "level": "终盘", "weakness": ["枪", "弓", "火", "光"], "tips": "HP约193,691、护盾6；击败必掉醒神李子篮。特蕾莎的宿敌暗影，8人中血量最高。" },
        { "name": "维尔纳的暗影（上排右1）", "en": "Werner?", "level": "终盘", "weakness": ["短剑", "斧", "雷", "风", "光"], "tips": "HP约167,865、护盾5；击败必掉醒神李子篮。欧贝利克第3章Boss的暗影。" },
        { "name": "席米恩的暗影（下排左1）", "en": "Simeon?", "level": "终盘", "weakness": ["枪", "短剑", "杖", "风", "暗"], "tips": "HP约176,369、护盾4；击败必掉活力石榴（特大）。普里姆萝洁第4章Boss的暗影。" },
        { "name": "米格尔的暗影（下排左2）", "en": "Miguel?", "level": "终盘", "weakness": ["剑", "弓", "风", "暗"], "tips": "HP约170,070、护盾7；击败必掉活力石榴（特大）。阿芬的宿敌暗影，8人中护盾最多。" },
        { "name": "达留斯的暗影（下排右2）", "en": "Darius?", "level": "终盘", "weakness": ["枪", "短剑", "斧", "冰", "风"], "tips": "HP约188,966、护盾4；击败必掉复苏果酱。提里昂的宿敌暗影；开场会使用「偷窃物品」打全体，低HP队伍需注意。" },
        { "name": "龙的暗影（下排右1）", "en": "Dragon?", "level": "终盘", "weakness": ["剑", "斧", "弓", "冰", "光"], "tips": "HP约174,794、护盾4~5；击败必掉还魂橄榄（特大）。汉伊特的宿敌暗影（龙）。" },
        { "name": "全知之眼", "en": "Omniscient Eye", "level": "终盘", "weakness": ["短剑", "斧", "杖", "雷", "光"], "tips": "第一队（四人）负责。护盾8，开场召唤愤怒之魂（弱光）、尖叫之魂（弱枪/短剑/弓）、哀嚎之魂（弱剑/短剑/冰/风），魂在场时本体无敌，必须先逐个击破；HP降到约50%与25%时会再次召唤并追加效果，最后吞噬魂魄每回合行动3次。" },
        { "name": "堕落之神加尔德拉", "en": "Galdera, the Fallen", "level": "终盘", "weakness": ["枪", "短剑", "弓", "冰", "光"], "tips": "第二队（四人）负责。开场用黑暗之幕封锁本体弱点（护盾显示99、无敌），需先击破三个部位：莉布拉克（护盾6，弱剑/短剑/火/光）、深渊之口（弱剑/枪/弓）、堕落之刃（弱冰/雷/风）；部位被破后本体护盾9，每回合行动3次，使用「放逐魂魄」把全员HP降为1并清空BP。全员须突破伤害上限、备足全回复/复活手段。" }
      ],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "击败加尔德拉完成「旅途的最后」，获得100,000叶与拒绝缎带（Spurning Ribbon，全异常状态防护），标题画面出现王冠，菲尼斯之门随后关闭。"
    }
  ],

  "story": [
    {
      "title": "欧贝利克 第1章·启程 ─为了重新奋起─（鹅卵石村・山贼大本营）",
      "character": "欧贝利克",
      "location": "brigands_den",
      "level": "1~11（随队伍人数浮动）",
      "summary": "八年前号角堡陷落时，「钢剑骑士」欧贝利克目睹挚友「烈剑骑士」艾尔哈特弑君背叛；如今他化名贝克在鹅卵石村当护卫。山贼来袭并掳走少年菲利普，欧贝利克独自杀入山贼大本营，击败头目卡斯顿后得知古斯塔夫可能知道艾尔哈特的下落。",
      "steps": [
        "开场梦境后与村长对话，用「比试」与两名自警团成员切磋（可先挑战村长，打听得战争骑枪隐藏位置后去村长家拿）",
        "去村东北入口击退3名山贼（弱点剑，横一字斩+增幅清场）",
        "菲利普被掳走，补给后从村东北出口进入「通往山贼大本营的道路」，沿途4个宝箱",
        "山贼大本营入口再战3名山贼，进洞搜刮黑帽、铜制提灯等宝箱，Boss前有行商与存档点",
        "击败卡斯顿救出菲利普，与村长告别后启程"
      ],
      "boss": "卡斯顿（弱点：枪、短剑、杖、冰、雷）＋山贼×2（弱点：剑、斧、火、风、暗）",
      "tips": "卡斯顿「大幅挥起武器」后下一回合的强击伤害极高，要么提前削盾在其蓄力时破防，要么全员防御。第2章地点为森林地区维克塔霍洛。"
    },
    {
      "title": "汉伊特 第2章·追寻恩师（斯托冈德・幻影之森）",
      "character": "汉伊特",
      "location": "spectrewood",
      "level": "27",
      "summary": "汉伊特追寻师父赞塔的足迹来到斯托冈德。救下被贵族内森纠缠的娜塔莉亚后，得知赞塔进入深山狩猎未归；她穿过被落石阻断的山路进入幻影之森，击败暴怒的森林之主，却发现赞塔已被魔兽红眼石化。",
      "steps": [
        "在斯托冈德酒馆接取主线，再于酒馆打听赞塔的消息",
        "出门遇到内森纠缠娜塔莉亚，用汉伊特的唆使让魔物吓跑内森与护卫",
        "从上街东侧出口进入「通往幻影之森的道路」，上路被落石堵住",
        "回到存档点下方，对拟态成树木的古老之树使用唆使并击败，开出新路",
        "进入幻影之森深处击败森林之主，找到被石化的赞塔与他留下的箭书",
        "回城与娜塔莉亚交谈收尾"
      ],
      "boss": "森林之主（弱点：剑、斧、火、光；三阶段弱点切换，火始终有效）",
      "tips": "第2章途经北斯托冈德山道时先拿雷剑将的祠堂（剑士职业）。第3章前往雪原地区史迪尔斯诺寻找占卜师苏珊娜。"
    },
    {
      "title": "塞拉斯 第3章·怪物校长（斯托冈德・伊冯的老家）",
      "character": "塞拉斯",
      "location": "yvons_birthplace",
      "level": "40",
      "summary": "塞拉斯追查失窃古书《边狱之书》来到斯托冈德，从装订工坊得知书曾交给翻译家多米尼克。安抚心怀愧疚的多米尼克后，得知委托人正是伊冯校长；秘书露西娅引塞拉斯去伊冯的老家并将其推入陷阱，特蕾泽赶来救援却被伊冯掳走，塞拉斯追入地下击败化为怪物的伊冯。",
      "steps": [
        "在斯托冈德酒馆接取主线，探查装订工坊员工得知书卖给了多米尼克",
        "多米尼克闭门不见，向三名标绿镇民打听/探查他的往事后再访，得知委托人是伊冯",
        "遇到露西娅，随她前往上街北侧伊冯的老家，被推入陷阱坑（顺手拿骨头宝箱，仅此时可得）",
        "特蕾泽放下绳子救出塞拉斯，随后被伊冯掳走",
        "追入地下研究室，深处击败伊冯救出特蕾泽"
      ],
      "boss": "伊冯（弱点：短剑、杖、光；破防恢复后依次追加火、冰）＋特别研究员（弱点：枪、斧、雷、暗）",
      "tips": "伊冯护盾5→8→12，HP降到一半以下后暴走、全攻击会心，务必在前两轮破防内打掉大部分血量。第4章地点为森林地区达斯克瓦罗。"
    },
    {
      "title": "普里姆萝洁 第4章·达成誓言（艾巴霍多・大剧场）",
      "character": "普里姆萝洁",
      "location": "everhold_amphitheatre",
      "level": "45",
      "summary": "得知最信任之人席米恩正是杀父仇人「乌鸦纹身」三人中的最后一人，普里姆萝洁来到艾巴霍多。大剧场正上演以她人生为蓝本的戏，她一边看着舞台上的往事一边穿过剧场下层与上层雅座，在阳台与席米恩两连战后完成复仇。",
      "steps": [
        "在艾巴霍多酒馆接取主线，进入大剧场（大厅的引导员可偷精灵石、可诱惑作助战）",
        "大厅左侧进入下层，沿途剧中剧情推进，拿取无形之剑、纤细的舞女服装两个紫箱",
        "上楼进入上层雅座，拿取古老法杖等宝箱，存档后进入阳台",
        "第一战：席米恩＋人偶·父亲＋人偶·舞娘",
        "第二战：后颈之男席米恩，击败后完成复仇"
      ],
      "boss": "席米恩（弱点：枪、短剑、杖、暗）＋人偶·父亲（斧、火、雷、光）＋人偶·舞娘（剑、斧、杖、火）；第二战后颈之男席米恩（枪、短剑、杖、风、暗→剑、斧、火、雷、暗→短剑、斧、弓、冰、暗）",
      "tips": "带盗贼（可配「盗取」类辅助）偷人偶身上的装备；第二战重点防沉默。"
    }
  ],

  "sidequests": [
    {
      "name": "旅人基特（旅行青年）",
      "en": "Kit, the Traveler",
      "location": "south_cobbleston_gap",
      "trigger": "仅当第一位主角选择欧贝利克时，离开鹅卵石村后在南鹅卵石村山道存档点附近遇到基特",
      "steps": ["把1个治愈葡萄交给基特"],
      "reward": "1,500叶（与真结局相关的基特系列支线起点之一）",
      "difficulty": "易"
    },
    {
      "name": "农田的肥料",
      "en": "Fertile Fields",
      "location": "cobbleston",
      "trigger": "欧贝利克第1章完成后，与鹅卵石村左下的笑容灿烂的农民对话",
      "steps": ["对村中健壮的牧牛人使用购买/偷窃取得「牛粪」", "把牛粪交给笑容灿烂的农民"],
      "reward": "1,500叶、醒神李子（大）",
      "difficulty": "易"
    },
    {
      "name": "历史研究家诺艾尔（I）",
      "en": "Noelle, Seeker of Knowledge (I)",
      "location": "cobbleston",
      "trigger": "欧贝利克第1章完成后，与欧贝利克家门口的诺艾尔对话",
      "steps": ["对诺艾尔使用引导/诱惑让她同行", "经南鹅卵石村山道前往北鹅卵石村山道东北的无垢巢窟", "存档点向右再一直向下，调查西南侧的石碑"],
      "reward": "4,800叶、铁壁坚果（Tough Nut）",
      "difficulty": "易"
    },
    {
      "name": "无法忘怀的回忆",
      "en": "Never Forget",
      "location": "cobbleston",
      "trigger": "欧贝利克第1章完成后，与村口的忧郁的青年对话",
      "steps": [
        "解法①：到平原地区诺布尔寇德，对和蔼的古董商购买/偷窃「萝拉的记事本」，带回交给青年",
        "解法②：对忧郁的青年使用引导/诱惑，带他到诺布尔寇德东地区西南的墓碑处"
      ],
      "reward": "9,000叶、鹰眼坚果（大）",
      "difficulty": "中"
    },
    {
      "name": "历史研究家诺艾尔（II）",
      "en": "Noelle, Seeker of Knowledge (II)",
      "location": "stonegard",
      "trigger": "完成（I）后，在斯托冈德上街无法进入的宅邸前与诺艾尔对话（研究贝奥武夫王的历史）",
      "steps": ["到下街对随风起舞的吟游诗人打听/探查，获得情报「艾巴霍多的城塞」", "回上街告诉诺艾尔"],
      "reward": "6,600叶、铁壁坚果（大）",
      "difficulty": "易"
    },
    {
      "name": "无赖",
      "en": "Up to No Good",
      "location": "stonegard",
      "trigger": "与斯托冈德下街商店前的老人（Elderly Shopowner）对话",
      "steps": [
        "解法①：到沙漠地区桑谢德道具店附近，对失忆的女孩（莱拉）使用引导/诱惑，带回下街与老人身旁的流氓对话",
        "解法②：对下街的流氓使用比试/唆使并击败，剧情后上楼梯向北，在转角对托比亚斯使用比试/唆使并击败"
      ],
      "reward": "5,000叶、守护者护符（Guardian Amulet）",
      "difficulty": "中"
    },
    {
      "name": "王家的秘密",
      "en": "A Royal Secret",
      "location": "stonegard",
      "trigger": "与斯托冈德上街喜欢历史的青年（Inquiring Youth）对话",
      "steps": [
        "解法①：在下街对有高贵气息的青年（Patrician Youth）使用引导/诱惑，带到上街与喜欢历史的青年对话",
        "解法②：经西斯托冈德山道前往王家之墓，对无名守墓人打听/探查得「守墓人的情报」，回来告诉青年"
      ],
      "reward": "5,000叶、王家之证（Royal Crest，大幅提升最大HP的饰品）",
      "difficulty": "中"
    },
    {
      "name": "异国的语言",
      "en": "Lost in Translation",
      "location": "stonegard",
      "trigger": "与斯托冈德上街的装订工匠（Bookbinder）对话",
      "steps": ["到海岸地区利布尔泰德左侧，对异国的老婆婆使用引导/诱惑", "带回斯托冈德上街与装订工匠对话"],
      "reward": "6,500叶、异国之服（Exotic Garb）",
      "difficulty": "易"
    },
    {
      "name": "学者拉塞尔，在那之后",
      "en": "Russell's Repentance",
      "location": "stonegard",
      "trigger": "塞拉斯第4章完成后，与斯托冈德的拉塞尔对话",
      "steps": [
        "在断崖地区柏达弗尔对「克里夫兰多的知识分子」打听/探查，得「克里夫兰多的历史」",
        "在雪原地区史迪尔斯诺对「弗洛斯特兰多的知识分子」打听/探查，得「弗洛斯特兰多的历史」",
        "在森林地区达斯克瓦罗对「伍多兰多的知识分子」打听/探查，得「伍多兰多的历史」",
        "回斯托冈德把三条情报告诉拉塞尔"
      ],
      "reward": "9,000叶、告解盔甲（Confessional Armor）",
      "difficulty": "中"
    },
    {
      "name": "舞台的主角",
      "en": "Star of the Stage",
      "location": "everhold",
      "trigger": "与艾巴霍多的团长（Impresario）对话（明星剑士跑了，需要人顶替演出）",
      "steps": ["对团长使用比试/唆使并击败他（强度7，弱点剑、短剑、光）"],
      "reward": "15,000叶、复苏果酱（Revitalizing Jam）",
      "difficulty": "难"
    },
    {
      "name": "所谓演员",
      "en": "Performance Art",
      "location": "everhold",
      "trigger": "与艾巴霍多的热心的演员（Ardent Actor）对话（他要扮演传说骑士索克拉斯）",
      "steps": [
        "解法①：到平原地区阿特拉斯达姆王城前右侧，对美丽的吟游诗人打听/探查得「索克拉斯之歌」，回来告诉演员",
        "解法②：到海岸地区格兰波特摊贩街，对诡异的旧货商购买/偷窃「索克拉斯之剑」，交给演员"
      ],
      "reward": "22,000叶",
      "difficulty": "中"
    },
    {
      "name": "历史研究家诺艾尔（III）",
      "en": "Noelle, Seeker of Knowledge (III)",
      "location": "everhold",
      "trigger": "完成（II）后，在艾巴霍多与诺艾尔对话",
      "steps": ["对旅馆前的大道具负责人购买/偷窃「老旧的挂毯」", "交给诺艾尔"],
      "reward": "11,000叶、铁壁坚果（特大）（英文资料另记有历史学家之帽 Historian's Hat）",
      "difficulty": "易"
    },
    {
      "name": "旅途的最后",
      "en": "At Journey's End",
      "location": "ruins_of_hornburg",
      "trigger": "八位主角第4章全部完成，并完成「寻找父亲的旅行者基特（II）」「命中注定之人（II）」与「团长与阿尔法丝，在那之后」后，在森林地区西希·沃尔基森道与团长对话",
      "steps": [
        "快速旅行至号角堡合战场遗迹（艾巴霍多东南方新出现的地点），走到尽头目睹基特与莉布拉克进入菲尼斯之门",
        "进入菲尼斯之门（进入后无法返回、无存档点），用对应主角的队伍依次击败8个宿敌暗影",
        "登上阶梯，两支四人队伍接力击败全知之眼与堕落之神加尔德拉"
      ],
      "reward": "100,000叶、拒绝缎带（Spurning Ribbon）；解锁真结局",
      "difficulty": "难"
    }
  ],

  "items": [
    { "name": "战争骑枪", "en": "War Lance", "type": "武器", "location": "cobbleston", "how": "向村长打听/探查得隐藏物，在村长家屋内拾取；第1章即可获得", "effect": "前期强力长枪" },
    { "name": "团长之剑", "en": "Captain's Sword", "type": "武器", "location": "cobbleston", "how": "鹅卵石村红色宝箱", "effect": "" },
    { "name": "黑帽", "en": "Black Cap", "type": "防具", "location": "brigands_den", "how": "山贼大本营入口向右尽头再沿隐藏小路向右的红色宝箱", "effect": "" },
    { "name": "鹰眼坚果", "en": "Sharp Nut", "type": "道具", "location": "untouched_sanctum", "how": "无垢巢窟紫色宝箱（需开锁）", "effect": "永久提升命中" },
    { "name": "魔导坚果", "en": "Magic Nut", "type": "道具", "location": "north_cobbleston_gap", "how": "北鹅卵石村山道宝箱（游民星空记为紫色宝箱）", "effect": "永久提升属攻" },
    { "name": "速度头盔", "en": "Hasty Helm", "type": "防具", "location": "tomb_of_kings", "how": "王家之墓紫色宝箱（需开锁）", "effect": "物防+50、属防+58、速度+78" },
    { "name": "火之护符", "en": "Fire Amulet", "type": "饰品", "location": "spectrewood", "how": "幻影之森紫色宝箱（需开锁）", "effect": "减轻火属性伤害" },
    { "name": "巨型石英法杖", "en": "Sturdy Quartz Rod", "type": "武器", "location": "yvons_birthplace", "how": "伊冯的老家地下紫色宝箱（需开锁）", "effect": "物攻+42、属攻+89、回避+26" },
    { "name": "无形之剑", "en": "Unseen Saber", "type": "武器", "location": "everhold_amphitheatre", "how": "大剧场下层紫色宝箱（需开锁）；也可在鹅卵石村向卡斯顿偷窃/购买（后期）", "effect": "物攻+235、回避+100，攻击时偶尔使敌人混乱" },
    { "name": "纤细的舞女服装", "en": "Ethereal Dancer Garb", "type": "防具", "location": "everhold_amphitheatre", "how": "大剧场下层紫色宝箱（需开锁）", "effect": "物防+122、属防+134、回避+166" },
    { "name": "古老法杖", "en": "Enchanted Rod", "type": "武器", "location": "everhold_amphitheatre", "how": "大剧场上层雅座紫色宝箱（需开锁）", "effect": "物攻+91、属攻+242，偶尔降低敌人属防" },
    { "name": "火炎护符", "en": "Inferno Amulet", "type": "饰品", "location": "everhold_amphitheatre", "how": "大剧场下层第二个存档点右侧房间的宝箱", "effect": "大幅减轻火属性伤害" },
    { "name": "斗智法杖", "en": "Knowledge Staff", "type": "武器", "location": "everhold_tunnels", "how": "艾巴霍多地下坑道遗迹紫色宝箱（需开锁）", "effect": "物攻+111、属攻+333、速度+99" },
    { "name": "死亡斩斧", "en": "Death Cleaver", "type": "武器", "location": "everhold_tunnels", "how": "艾巴霍多地下坑道遗迹红色宝箱", "effect": "" },
    { "name": "禁断之剑", "en": "Forbidden Blade", "type": "武器", "location": "stonegard", "how": "向斯托冈德下街武器店附近的铁商镇民购买（75,000叶）", "effect": "物攻+310、速度+120" },
    { "name": "水晶盔", "en": "Crystal Helm", "type": "防具", "location": "stonegard", "how": "向斯托冈德下街的娜塔莉亚偷窃/购买（约39,900叶）", "effect": "物防+180" },
    { "name": "双刃战斧", "en": "Double Tomahawk", "type": "武器", "location": "stonegard", "how": "向斯托冈德下街的粉碎者阿奇波尔德偷窃/购买（约61,750叶，欧贝利克第4章后出现）", "effect": "" },
    { "name": "水晶铠甲", "en": "Crystal Armor", "type": "防具", "location": "cobbleston", "how": "向鹅卵石村的卡斯顿偷窃/购买（约57,000叶，欧贝利克故事推进后出现）", "effect": "" },
    { "name": "死神之剑", "en": "Deathly Blade", "type": "武器", "location": "everhold", "how": "向艾巴霍多镇民偷窃/购买（约45,600叶）", "effect": "" },
    { "name": "三位一体之剑", "en": "Trinity Sword", "type": "武器", "location": "everhold", "how": "向艾巴霍多的老人偷窃/购买（约43,700叶）", "effect": "" },
    { "name": "符文长弓", "en": "Rune Bow", "type": "武器", "location": "everhold", "how": "向艾巴霍多镇民偷窃/购买（约48,450叶）", "effect": "" },
    { "name": "智慧法杖", "en": "Wisdom Staff", "type": "武器", "location": "everhold", "how": "向艾巴霍多扮演魔法使的女演员偷窃/购买（约38,000叶）", "effect": "" },
    { "name": "兆速小刀", "en": "Legion Dagger", "type": "武器", "location": "everhold", "how": "向艾巴霍多女演员镇民打听「新武器上架」后在武器店购买（55,000叶）", "effect": "物攻+263、回避+129" },
    { "name": "静默披风", "en": "Silent Cape", "type": "防具", "location": "everhold", "how": "艾巴霍多武器店购买（19,200叶），或向热心的演员偷窃", "effect": "物防+102、属防+114、回避+147" },
    { "name": "帝王背心", "en": "Imperial Vest", "type": "防具", "location": "stonegard", "how": "向斯托冈德下街镇民打听「新武器上架」后在下街武器店购买（19,200叶）", "effect": "物防+120、属防+132" },
    { "name": "王家之证", "en": "Royal Crest", "type": "饰品", "location": "stonegard", "how": "支线「王家的秘密」奖励", "effect": "大幅提升最大HP" },
    { "name": "告解盔甲", "en": "Confessional Armor", "type": "防具", "location": "stonegard", "how": "支线「学者拉塞尔，在那之后」奖励（塞拉斯第4章后）", "effect": "" },
    { "name": "异国之服", "en": "Exotic Garb", "type": "防具", "location": "stonegard", "how": "支线「异国的语言」奖励", "effect": "" },
    { "name": "守护者护符", "en": "Guardian Amulet", "type": "饰品", "location": "stonegard", "how": "支线「无赖」奖励；也可向上街的内森偷窃/购买", "effect": "" },
    { "name": "复苏果酱", "en": "Revitalizing Jam", "type": "道具", "location": "everhold", "how": "支线「舞台的主角」奖励；魔剑士的祠堂、大剧场上层宝箱亦有", "effect": "HP/SP/BP全回复" },
    { "name": "拒绝缎带", "en": "Spurning Ribbon", "type": "饰品", "location": "gate_of_finis", "how": "完成终盘支线「旅途的最后」（击败加尔德拉）", "effect": "防护全部异常状态" }
  ],

  "jobs": [
    { "name": "剑士", "en": "Warrior", "location": "shrine_thunderblade", "how": "进入北斯托冈德山道旁的雷剑将的祠堂，调查雷剑将布兰德神像即可获得剑士职业证（无需战斗）" },
    { "name": "符文大师", "en": "Runelord", "location": "shrine_runeblade", "how": "从艾巴霍多出城到西艾巴霍多山道，存档点向东绕到岩石背后、向南穿过石拱进入魔剑士的祠堂（危险度50），登顶调查祭坛并击败魔剑士巴罗格后获得隐藏职业证" }
  ],

  "tips": [
    "高原地区交通枢纽是北/西斯托冈德山道：北接海岸地区（月隐海道→葛鲁德修亚、东利布尔泰德海道→利布尔泰德），西接沙漠地区（东威尔斯宾克沙道），南下艾巴霍多",
    "伊冯的老家（Lv40）随机战平均经验在中环区域名列前茅，第3~4章之间可在此练级；西艾巴霍多山道（Lv45）与地下坑道遗迹（Lv55）适合后期",
    "第1章期间就能在鹅卵石村拿到战争骑枪（村长家隐藏物），大幅降低前期难度",
    "大剧场引导员身上都带有精灵石（大/特大），盗贼可在普里姆萝洁第4章前后顺手偷取",
    "艾巴霍多团长（Impresario）身上的命中/回避/会心坚果（特大）可偷可买，是少数可获得永久能力提升的来源",
    "斯托冈德下街的娜塔莉亚、欧伦与雪原地区支线「再会阿丽安娜（I/II）」相关，普里姆萝洁与汉伊特第4章完成后才能推进",
    "号角堡合战场遗迹与菲尼斯之门只能在终盘通过快速旅行抵达；进入菲尼斯之门前务必准备两支练满的四人队伍"
  ],

  "roads": [
    ["cobbleston", "mountain_pass"],
    ["mountain_pass", "brigands_den"],
    ["cobbleston", "south_cobbleston_gap"],
    ["south_cobbleston_gap", "north_cobbleston_gap"],
    ["north_cobbleston_gap", "untouched_sanctum"],
    ["north_cobbleston_gap", "north_stonegard_pass"],
    ["north_stonegard_pass", "shrine_thunderblade"],
    ["north_stonegard_pass", "stonegard"],
    ["north_stonegard_pass", "west_stonegard_pass"],
    ["stonegard", "yvons_birthplace"],
    ["stonegard", "spectrewood_path"],
    ["spectrewood_path", "spectrewood"],
    ["west_stonegard_pass", "tomb_of_kings"],
    ["west_stonegard_pass", "west_everhold_pass"],
    ["west_everhold_pass", "everhold"],
    ["everhold", "everhold_amphitheatre"],
    ["west_everhold_pass", "everhold_tunnels"],
    ["west_everhold_pass", "shrine_runeblade"],
    ["ruins_of_hornburg", "gate_of_finis"]
  ],
  "links": [
    { "from": "north_cobbleston_gap", "region": "coastlands", "to": "east_rippletide_coast" },
    { "from": "north_stonegard_pass", "region": "coastlands", "to": "moonstruck_coast" },
    { "from": "south_cobbleston_gap", "region": "sunlands", "to": "eastern_sunshade_sands" },
    { "from": "west_stonegard_pass", "region": "sunlands", "to": "eastern_wellspring_sands" }
  ]
});

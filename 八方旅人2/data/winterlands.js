OT2.addRegion({
  "id": "winterlands",
  "name": "冬之地",
  "en": "Winterlands",
  "continent": "east",
  "levelRange": "2-55",
  "starter": "奥斯瓦尔德（学者）",
  "intro": "冬之地位于东大陆北部，终年冰雪覆盖。西北海上的弗里吉特监狱岛是奥斯瓦尔德第1、2章的舞台；大陆西侧的科尔德凯普、温特布鲁姆属于前中期区域（经南/东科尔德凯普雪道连接明之地与纹之地），东侧的斯托姆黑尔则是中后期重镇，只能从纹之地蒙特怀斯北上抵达，与本区西半部不相连。光、泰米诺斯、奥修特、卡丝蒂、索洛奈的重要章节都在这里展开，南斯托姆黑尔雪道还藏着等级55的隐藏迷宫奈落之城。",
  "highlights": [
    "西温特布鲁姆雪道：学者公会（学者职业证）与学者王祭坛（奥斯瓦尔德EX技能「传授 Teach」）",
    "奈落之城（巨壁地下洞，需7人过桥触发）：击败恐狼获得「真理之秘石」（永续大魔法化）、神官第3张职业证所需的「大神官的经典」，还有蚺斩巨剑、落幕种族之杖",
    "温特布鲁姆支线「剑与石」可拿到生锈的剑，带去荒野之地格拉维尔可解锁隐藏职业「武器大师」并重铸为征服者之剑",
    "斯托姆黑尔圣堂机关总部：光可在西侧被看守的房间里向圣堂骑士学到最强单体技之一「Limb from Limb（四连斩）」；武具店可直接购买增强剂",
    "光的故事全部通关后，梅城内的雷梅可被偷/买到神枪「雷鸣之枪 Thunder's Roar」，昆藏持有守护者之盾",
    "温特布鲁姆盗贼区夜间NPC身上有毒刃、小鸦剑、复苏之石、SP坚果(L)等前中期顶级装备"
  ],

  "locations": [
    {
      "id": "frigit_isle",
      "name": "弗里吉特监狱岛（大监狱/广场/采掘场）",
      "en": "Frigit Isle: Prison / Yard / Mining Site",
      "type": "town",
      "pos": [4.5, 20.6],
      "level": "1",
      "desc": "北西海上的孤岛监狱，八十年来无人成功越狱，奥斯瓦尔德在此服刑五年。",
      "story": ["奥斯瓦尔德 第1章"],
      "boss": [],
      "treasures": [
        { "item": "黑暗之瓶（Bottle of Blinding Dust）", "how": "大监狱2楼西北牢房" },
        { "item": "醒神李子", "how": "大监狱3楼东侧阳台" }
      ],
      "npcs": [
        { "name": "囚犯（第1章开场）", "item": "奥斯瓦尔德的笔记、治愈葡萄", "method": "强夺（剧情必做）", "note": "奥斯瓦尔德戴着口罩不能用魔法，只能用杖普攻，很简单" },
        { "name": "食堂的囚犯们", "item": "复活草（Herb of Revival）、旧布、毒之瓶", "method": "强夺", "note": "第1章三项准备完成后、进入地下道前的夜晚可以强夺；之后无法返回监狱" },
        { "name": "广场中央的囚犯们", "item": "还魂橄榄、治愈葡萄、醒神李子", "method": "强夺", "note": "建议先进地下道练1~2级再回来强夺" },
        { "name": "图书室的狱卒", "item": "醒神李子篮、冰之精灵石", "method": "强夺", "note": "图书室左上角躲着的囚犯带火之精灵石" },
        { "name": "东门狱卒", "item": "醒神李子", "method": "强夺", "note": "" },
        { "name": "186666号囚犯", "item": "（剧情彩蛋）", "method": "对话", "note": "奥斯瓦尔德全章通关、监狱关闭后，夜晚站在监狱桥上" }
      ],
      "shops": [],
      "tips": "岛上没有商店与旅店（补给品只能在监狱地下道向神秘囚犯购买）。第1章需要在三天内完成三件事（顺序随意）：①食堂右上角观察（Scrutinize）艾美拉德拉入伙；②先观察食堂门外的囚犯得知「贝尔的弱点」，再与广场中央的贝尔交涉拿到防寒衣；③观察2楼楼梯口囚犯得知劳动报告的位置，去食堂旁的图书室北侧第一个书架拿「劳动报告」。离开后要等奥斯瓦尔德全部章节通关，才能乘自己的船经分隔之海重返此岛（首次登岛后恢复快速旅行），届时正门开放，有隐藏道具「铁壁坚果」。"
    },
    {
      "id": "prison_underground_passage",
      "name": "监狱地下道",
      "en": "Prison: Underground Passage",
      "type": "dungeon",
      "pos": [11.3, 30.1],
      "level": "2",
      "desc": "奥斯瓦尔德越狱时穿过的地下通道，也是第1章Boss战场所。",
      "story": ["奥斯瓦尔德 第1章"],
      "boss": [
        { "name": "典狱长戴维斯", "en": "Warden Davids", "level": "5", "weakness": ["短剑", "杖", "火", "雷"], "tips": "推荐等级5，HP约2700。护盾5，开场带2名狱卒（护盾2，弱短剑/杖/冰/雷），狱卒被打倒后会被「看守招集」再次叫来（增援护盾1），不必专门追着打，集火戴维斯即可。艾美拉德的短剑乱斩适合削盾，破防后奥斯瓦尔德BP全开+火焰魔法，底力发动后魔法会变成单体高伤。注意他先喊出「惩罚时间」，下一回合会用「对罪人的制裁」随机4连击，看到后尽快破防打断。掉落SP全体回复葡萄。" }
      ],
      "treasures": [
        { "item": "治愈葡萄", "how": "沿弧形楼梯下一层，右手边牢房" },
        { "item": "醒神李子", "how": "下梯子后，梯子后方的牢房" },
        { "item": "罪人之杖（Sinner's Staff）", "how": "同层前景中断掉的楼梯挡住了隐藏通路，向西走过去的牢房里" },
        { "item": "古旧的项链（Ancient Necklace）", "how": "最底层断头台北侧墙壁有向西的隐藏通路" },
        { "item": "还魂橄榄", "how": "最底层返回后向东的牢房" }
      ],
      "npcs": [
        { "name": "神秘的囚犯", "item": "治愈葡萄、醒神李子、布头巾（Cloth Hood）", "method": "购买（商店）", "note": "在最后一个牢房附近、存档点前" }
      ],
      "shops": ["神秘囚犯的地下小摊：补给品与布头巾"],
      "tips": "敌人：霜冻鼹鼠、冰之精灵（Ice Wisp）、白蝙蝠，都怕火/光。奥斯瓦尔德开战自动「分析」弱点，适合在这里先练到4级左右。"
    },
    {
      "id": "frigit_isle_anchorage",
      "name": "弗里吉特监狱岛入口/停泊所",
      "en": "Frigit Isle: Entrance / Anchorage",
      "type": "port",
      "pos": [4.9, 40.4],
      "level": "7",
      "desc": "越狱后的逃亡路线，奥斯瓦尔德在此用冰魔法造出冰舟漂向科尔德凯普。",
      "story": ["奥斯瓦尔德 第2章"],
      "boss": [],
      "treasures": [
        { "item": "治愈葡萄", "how": "入口区沿悬崖西行，监狱正门附近" },
        { "item": "魔导坚果（Magic Nut）", "how": "停泊所：沿主路西行越过第一段楼梯，再走向北的第二段楼梯，悬崖上" },
        { "item": "醒神李子", "how": "停泊所：第一段楼梯南下后靠右，前景岩石后" },
        { "item": "冰之精灵石", "how": "乘冰舟西行，两个码头中的上方码头" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "乘冰舟后先去上方码头拿冰之精灵石，再去下方码头触发剧情（之后无法返回）。强制战斗的增援狱卒弱短剑/冰/雷。"
    },
    {
      "id": "cape_cold",
      "name": "科尔德凯普",
      "en": "Cape Cold",
      "type": "town",
      "pos": [22.2, 67.1],
      "level": "5",
      "desc": "冬之地西部的小渔村，奥斯瓦尔德被退休学者救起的地方。",
      "story": ["奥斯瓦尔德 第2章"],
      "boss": [],
      "treasures": [
        { "item": "2000叶", "how": "往北去海边的路右侧民房内" },
        { "item": "活力石榴", "how": "北侧海滩西边，晒鱼架后面" }
      ],
      "npcs": [
        { "name": "入口处的男人（夜）", "item": "重钱袋、金怀表、旧吊坠", "method": "强夺/偷窃", "note": "持有高价物但HP很低，是奥斯瓦尔德前期赚钱的好肥羊；探听可知杂货店附近木桶上有隐藏的战争长柄刀（War Glaive）" },
        { "name": "退休学者（西侧民房）", "item": "银羽毛笔（支线道具）", "method": "偷窃/购买/强夺", "note": "用于支线「给儿子的礼物」；探听可知海边小船里藏着魔导坚果" },
        { "name": "酒馆门口的粗暴村民", "item": "阔剑（Broadsword）、铁壁坚果", "method": "强夺/偷窃", "note": "很强，前期别硬打" },
        { "name": "杂货店里的村民", "item": "灵敏耳环、银发饰", "method": "偷窃", "note": "探听可得旅店折扣" },
        { "name": "旅店南侧的男孩和女孩", "item": "糖果、冰之精灵石、毛绒玩偶、旧吊坠", "method": "偷窃", "note": "男孩知道去海滩路上的隐藏道具" },
        { "name": "海边民房的老妇人", "item": "治愈葡萄（大）、醒神李子篮", "method": "偷窃", "note": "知道酒馆外隐藏的活力石榴" },
        { "name": "海滩的渔夫们（日）", "item": "轻钱袋、活力石榴、圆盾等", "method": "偷窃", "note": "右边年轻渔夫可探听到「杂货店进货增加」" },
        { "name": "杂货店门口的随从（夜）", "item": "圆盾、冰之精灵石（大）", "method": "强夺", "note": "可学到「熟练的强夺」情报" },
        { "name": "初为人父者 / 村民 / 老渔夫", "item": "光的习得技：闪避架势、Level Slash（全体剑技）、雪球投掷（全体冰）", "method": "挑战", "note": "光用「挑战」击败即可学会；渔夫另可学Befuddling Arrow" }
      ],
      "shops": [
        "杂货店：铁剑2600、库克力弯刀7000、旅人之弓7000、木杖2400、圆盾2300等；毛皮帽子1900、毛皮长袍3500需先打听情报才上架",
        "酒馆（开放留声机后）可买到乐曲「7. 学者 奥斯瓦尔德」"
      ],
      "tips": "如果不是以奥斯瓦尔德开局，他不在村里，而是倒在南科尔德凯普雪道北段路边，靠近即可入队。"
    },
    {
      "id": "southern_cape_cold_snows",
      "name": "南科尔德凯普雪道",
      "en": "Southern Cape Cold Snows",
      "type": "field",
      "pos": [18.5, 86.1],
      "level": "5/8/11",
      "desc": "连接冬之地与明之地（新德尔斯塔平原）的雪道，北通科尔德凯普，东南通东科尔德凯普雪道。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "底力回复荔枝", "how": "存档点稍西，地图中央附近" },
        { "item": "醒神李子（大）", "how": "南边两座桥之间往南的小空地" },
        { "item": "还魂橄榄（大）", "how": "东南水域乘独木舟向北，另一处码头上岸" },
        { "item": "朝圣者长袍（Pilgrim's Robe）", "how": "同一水域向西，绕到桥下的第三个码头" }
      ],
      "npcs": [
        { "name": "奥斯瓦尔德", "item": "同伴加入", "method": "对话", "note": "非奥斯瓦尔德开局时，倒在北段路边" },
        { "name": "阿尔（Al）", "item": "支线「旅人的行囊」", "method": "对话", "note": "仅奥斯瓦尔德开局时在此出现（完成第2章后）" }
      ],
      "shops": [],
      "tips": "白天有霜冻熊、雪狐、雪貂；夜晚多狼与高等狼。危险度会随队伍成长而提升。"
    },
    {
      "id": "eastern_cape_cold_snows",
      "name": "东科尔德凯普雪道",
      "en": "Eastern Cape Cold Snows",
      "type": "field",
      "pos": [45.6, 78.6],
      "level": "随进度变化",
      "desc": "去温特布鲁姆的中继路：西接南科尔德凯普雪道，南接纹之地东弗雷姆丘奇山道，北接西温特布鲁姆雪道，东通无赖据点。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "毛皮帽子（Fur Cap）", "how": "乘独木舟向西" },
        { "item": "冰之精灵石", "how": "存档点东北方向的小路" },
        { "item": "600叶", "how": "存档点西侧的小围栏内" },
        { "item": "尖锋匕首", "how": "雪道内宝箱（物攻+25、速度+6）" }
      ],
      "npcs": [
        { "name": "行商（Peddler）", "item": "支线「无赖的据点」", "method": "对话", "note": "存档点西北的路标旁" }
      ],
      "shops": [],
      "tips": "从弗雷姆丘奇（泰米诺斯起点）北上即可到达，是东大陆前期集结同伴的必经之路。"
    },
    {
      "id": "ruffians_hideout",
      "name": "无赖据点",
      "en": "Ruffians' Hideout",
      "type": "dungeon",
      "pos": [53.4, 78.2],
      "level": "14",
      "desc": "盘踞在东科尔德凯普雪道旁的无赖窝，支线「无赖的据点」的目的地。",
      "story": [],
      "boss": [
        { "name": "无赖头目＋无赖×2", "en": "Ruffian Leader", "level": "约14", "weakness": ["枪", "斧", "杖", "雷"], "tips": "不难。无赖I弱剑/弓/火/光，无赖II弱短剑/弓/火/暗，先清小兵。" }
      ],
      "treasures": [
        { "item": "黑暗之瓶", "how": "存档点西南（另一说东侧）近处" },
        { "item": "1000叶", "how": "存档点向东南走到区域另一端" },
        { "item": "异端大剑（Heretic's Greatsword）", "how": "东侧冰洞内（物攻+69、命中-40、暗属性攻击威力提升）" },
        { "item": "还魂橄榄（大）", "how": "乘船到北侧，码头往西的冰隧道" },
        { "item": "风之装束（Wind Robe）", "how": "击败无赖三人组后开启" }
      ],
      "npcs": [
        { "name": "门口的无赖", "item": "放行", "method": "挑战/偷袭", "note": "从存档点往东走会被他挡路；也可从雪道过桥向东的码头乘船直接进入" }
      ],
      "shops": [],
      "tips": "敌人有古代蜥蜴人、雪牦牛、白色吼鱼等，适合12~16级练级。"
    },
    {
      "id": "western_winterbloom_snows",
      "name": "西温特布鲁姆雪道",
      "en": "Western Winterbloom Snows",
      "type": "field",
      "pos": [44, 61.1],
      "level": "随进度变化",
      "desc": "通往温特布鲁姆的雪道，学者公会与学者王祭坛都在这里。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "冰之精灵石（大）", "how": "进入后从右侧斜坡下到结冰的湖面，沿桥下一直往东" },
        { "item": "游隼戒指（Falcon Ring）", "how": "离开祭坛后往左，不走上坡，继续向左爬坡绕到岩石后（入口北侧能看到的宝箱）" },
        { "item": "扩散剂（Diffusing Serum）", "how": "公会下来后往右爬楼梯，留意画面上方往上的阶梯" }
      ],
      "npcs": [
        { "name": "学者公会会长", "item": "学者职业证", "method": "对话", "note": "地图西北山上的建筑，熔炉旁头顶盾牌图标的男人" }
      ],
      "shops": [],
      "tips": "学者王祭坛入口：在湖面上向北走时不要从斜坡上岸，而是钻进左侧桥下继续向北，桥北侧的视觉死角就是祭坛入口。"
    },
    {
      "id": "altar_of_the_scholarking",
      "name": "学者王祭坛",
      "en": "Altar of the Scholarking",
      "type": "shrine",
      "pos": [44.7, 51.6],
      "level": "随进度变化",
      "desc": "碩学王阿雷芬（Aelfric）的守护神祭坛，藏在西温特布鲁姆雪道的桥下。",
      "story": [],
      "boss": [],
      "treasures": [],
      "npcs": [],
      "shops": [],
      "tips": "带奥斯瓦尔德调查中央雕像，学会第二个EX技能「传授（Teach）」：把自身的增益效果赋予一名同伴（SP12），配合「天才之笔/Stroke of Genius」及BP加成效果极强。"
    },
    {
      "id": "winterbloom",
      "name": "温特布鲁姆",
      "en": "Winterbloom",
      "type": "town",
      "pos": [52.1, 60.4],
      "level": "16",
      "desc": "冬之地北部的雪中小镇，西北有罗莎的大宅与药草园，北边是盗贼区；此地为死路，无法从这里去斯托姆黑尔。",
      "story": ["卡丝蒂 第2章（温特布鲁姆篇）", "索洛奈 第2章（父亲篇）"],
      "boss": [],
      "treasures": [
        { "item": "增强剂（Strengthening Serum）", "how": "西北罗莎宅邸2楼左侧" },
        { "item": "150叶", "how": "东北「给儿子的礼物」委托人家中（该屋共3个宝箱），需先让门口的父亲气绝/睡着才能进门" },
        { "item": "老旧的盔甲", "how": "与150叶同在「给儿子的礼物」委托人家中，同样需先放倒门口的父亲" },
        { "item": "治愈葡萄", "how": "与上面两个宝箱同在「给儿子的礼物」委托人家中，同样需先放倒门口的父亲" },
        { "item": "冰之精灵石（大）", "how": "奥德利（Audley，留声机发明者）家后方" }
      ],
      "npcs": [
        { "name": "持枪男子（北口附近，昼夜皆在）", "item": "士兵长枪（Soldier's Spear）", "method": "偷窃/购买", "note": "偷窃成功率约8%，购买约17000叶；商店售价22000，非常强力的前期长枪" },
        { "name": "岔路口的士兵（夜）", "item": "士兵长枪、冰之精灵石、锋芒坚果（L）", "method": "强夺/诱惑", "note": "很强，约24级的奥斯瓦尔德才勉强能赢；探听/收买可知右侧隐藏的银剑" },
        { "name": "岔路口的男子（夜）", "item": "魔导师之杖（Mage Wand）、衰弱之花、还魂橄榄", "method": "强夺/诱惑", "note": "强力杖；探听/收买可知隐藏的毒治疗草" },
        { "name": "台阶前的男人（日）", "item": "精炼之剑（Refined Sword）", "method": "偷窃", "note": "成功率偏低，但是很好的升级" },
        { "name": "旅店下方台阶的NPC（日）", "item": "骑士巨弓（Knight's Greatbow）", "method": "偷窃/购买", "note": "" },
        { "name": "道具店里的士兵", "item": "银手斧、角盔", "method": "偷窃/购买", "note": "角盔偷窃率极低，建议帕尔提提欧直接买" },
        { "name": "酒馆的老人", "item": "（光习得技 Bludgeon）", "method": "挑战", "note": "可探听到酒馆外隐藏的石榴叶" },
        { "name": "温特布鲁姆镇民/樵夫/父亲", "item": "光习得技：Ensnaring Shot、Chop Wood、Stand Ground", "method": "挑战", "note": "" }
      ],
      "shops": [
        "道具店：治愈葡萄（大）260、醒神李子240、还魂橄榄500等",
        "武具店在盗贼区（见盗贼区条目）"
      ],
      "tips": "帕尔提提欧带队来到镇东侧会触发「商机的气息：温特布鲁姆篇」。卡丝蒂与索洛奈的第2章入口都在镇口酒馆（可「听故事」触发）。"
    },
    {
      "id": "winterbloom_thieves_quarter",
      "name": "温特布鲁姆：盗贼区",
      "en": "Winterbloom: Thieves' Quarter",
      "type": "town",
      "pos": [53.5, 55],
      "level": "16~36",
      "desc": "温特布鲁姆北侧的阴暗街区，雪兔帮的地盘，白天冷清、夜晚盗贼云集。",
      "story": ["卡丝蒂 第2章（温特布鲁姆篇）", "索洛奈 第2章（父亲篇）"],
      "boss": [
        { "name": "普拉克、米克、马克", "en": "Plukk, Mikk & Makk", "level": "24", "weakness": ["剑", "短剑", "斧", "火"], "tips": "普拉克护盾7，弱点被两名手下遮挡：米克（护盾4，弱枪/弓/冰）、马克（护盾4，弱弓/冰/雷/风）。先集中击倒一名手下（冰属性全体魔法很好用），残存的手下会自我强化。两人都倒下后普拉克每回合行动3次，但护盾只有7，存好BP连续破防即可。普拉克蓄力「致命一击」时两手下会给她加攻、给我方降防，务必打断。建议两名治疗位（神官+卡丝蒂），掉落漂流匕首（Drifting Dagger）。" }
      ],
      "treasures": [
        { "item": "底力回复荔枝（大）", "how": "盗贼区内宝箱" }
      ],
      "npcs": [
        { "name": "武具店的男人（日）", "item": "破损的圣盾（Tattered Sacred Shield）、巨弓、毛皮铠", "method": "偷窃/购买", "note": "" },
        { "name": "北侧建筑外右边的盗贼（夜）", "item": "小鸦剑（Little Crow）、卫兵头盔、卫兵铠甲", "method": "偷窃/请求/强夺", "note": "阿格妮娅请求小鸦剑需30级；收买可知武具店外隐藏的尖刺盾" },
        { "name": "左侧盗贼（夜）", "item": "毒刃（Poison Knife）", "method": "请求/偷窃/强夺", "note": "极强短剑，阿格妮娅请求需约36级" },
        { "name": "北侧建筑里的盗贼（夜）", "item": "SP坚果（L）（Invigorating Nut (L)）", "method": "偷窃/强夺", "note": "收买可让武具店「新装备上架」" },
        { "name": "北侧建筑里的女人（夜）", "item": "复苏之石（Vivifying Stone，防即死）", "method": "偷窃/强夺", "note": "" },
        { "name": "入口的盗贼二人组（夜）", "item": "HP坚果、SP坚果", "method": "偷窃", "note": "左边的可收买得知隐藏的迅捷坚果（Light Nut）" },
        { "name": "盗贼（盗贼区）", "item": "光习得技：Shield Thief（无视弱点削1盾）、Befuddling Slash", "method": "挑战", "note": "Shield Thief的盗贼在盗贼区，Befuddling Slash的在武具店" },
        { "name": "普拉克（卡丝蒂篇后）", "item": "光习得技：Let's End This!（全体攻升防降）", "method": "挑战", "note": "梅莉亚后续支线前在盗贼区酒馆，完成后移到药草园" }
      ],
      "shops": [
        "武具店：士兵长枪22000、猎鹰小刀9000、刺击匕首20000、贯穿匕首35000（需情报）、银手斧22000、橡木杖19000、角盔5000、猎鹰外套10100、杂技斗篷15200（需情报）"
      ],
      "tips": "这里的夜间NPC装备强度远超当前进度，建议中期带阿格妮娅/索洛奈回来扫一遍。"
    },
    {
      "id": "snowhares_den",
      "name": "雪兔巢穴",
      "en": "Snowhares' Den",
      "type": "dungeon",
      "pos": [60.4, 60.7],
      "level": "16",
      "desc": "雪兔帮的地下据点，从盗贼区东侧雪兔帮总部的后屋进入，索洛奈第2章迷宫。",
      "story": ["索洛奈 第2章（父亲篇）"],
      "boss": [
        { "name": "贝尔戈米", "en": "Bergomi", "level": "16", "weakness": ["剑", "弓", "火"], "tips": "第一阶段护盾4、弱剑/弓/火，但两名手下（护盾3，弱短剑/杖/雷/光）在场时无法打弱点，先清手下。破防后护盾升至8、每回合2动，弱点扩展为剑/短剑/弓/火/光。他大量使用毒、混乱和降能力，带卡丝蒂用净化叶调合解状态，帕尔提提欧的雇佣佣兵可减物伤。只有混乱必须优先解。掉落/可偷还魂橄榄（特大）。" }
      ],
      "treasures": [
        { "item": "治愈葡萄（大）", "how": "入口疲惫女子南侧" },
        { "item": "暗之精灵石（大）", "how": "疲惫女子东侧下梯子乘船，向南第一个右侧拱门" },
        { "item": "体力手环（Empowering Bracelet，HP+500）", "how": "东侧码头北边的隐藏水道，划进去爬梯子" },
        { "item": "醒神李子（大）", "how": "东侧码头上梯子后稍北" },
        { "item": "石英匕首（Quartz Dagger）", "how": "乘船到最东南角" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "直接往南走东线可以速通；想拿宝箱就走东边水路。Boss前有存档点。"
    },
    {
      "id": "southern_stormhail_snows",
      "name": "南斯托姆黑尔雪道",
      "en": "Southern Stormhail Snows",
      "type": "field",
      "pos": [81.6, 65.7],
      "level": "37",
      "desc": "前往斯托姆黑尔的唯一道路，南接纹之地北蒙特怀斯山道，路上横亘着巨大的城墙。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "15000叶", "how": "存档点向左下楼梯，楼梯转向右时看北侧墙上的大裂缝，进去往左" },
        { "item": "猛兽之弓（Raging Beast）", "how": "下到最底层一直往右再上楼梯" },
        { "item": "冰之精灵石（特大）", "how": "圣堂骑士旁边的梯子上" },
        { "item": "闪电盔甲（Lightning Armor）", "how": "巨壁地下洞入口右边的梯子爬到顶" },
        { "item": "复活草（Herb of Revival）", "how": "最后向北的楼梯处先往左" }
      ],
      "npcs": [
        { "name": "考古学家（日，存档点右侧）", "item": "《巨壁的奇妙传说》（The Curious Legend of the Great Wall）", "method": "偷窃/购买/强夺", "note": "蒙特怀斯支线「收集珍奇书籍」所需三本书之一，是隐藏Boss支线链的起点" },
        { "name": "梯子旁左侧的NPC", "item": "杂技斗篷（Acrobat's Mantle）", "method": "偷窃/购买", "note": "兼具物防/属防/速度" }
      ],
      "shops": [],
      "tips": "前往方法：在纹之地西蒙特怀斯山道北端打倒（或弄晕/睡）挡路的卫兵，穿过北蒙特怀斯山道即到。本雪道与冬之地西半部不相连。"
    },
    {
      "id": "beneath_the_wall",
      "name": "巨壁地下洞",
      "en": "Beneath the Wall",
      "type": "dungeon",
      "pos": [68.6, 68.1],
      "level": "55",
      "desc": "南斯托姆黑尔雪道城墙下的小洞窟，只有存档点、吊桥和一个宝箱——但它是奈落之城的入口。",
      "story": [],
      "boss": [],
      "treasures": [
        { "item": "石头（Stone）", "how": "吊桥对面；桥塌后无法再拿，可先单独过桥拿走" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "4人队伍再用帕尔提提欧（雇佣）、泰米诺斯（引导）、阿格妮娅（诱惑）、奥修特（结交）等「带人同行」指令带上NPC，凑满7人以上一起走上吊桥，桥会断裂把你们摔进奈落之城。"
    },
    {
      "id": "infernal_castle",
      "name": "奈落之城",
      "en": "Infernal Castle",
      "type": "secret",
      "pos": [70.5, 71.2],
      "level": "55",
      "desc": "全游戏最容易错过的隐藏高难迷宫，位于巨壁地下洞的断桥下方。",
      "story": [],
      "boss": [
        { "name": "卡尼斯·迪鲁斯（恐狼）", "en": "Dreadwolf", "level": "55+", "weakness": ["枪", "斧", "弓", "火", "风"], "tips": "护盾9→11；召唤2只战狼（护盾3，弱剑/短剑/弓/火）遮挡除火以外的弱点。中段发动「感官敏锐」后，任何BP加成攻击或潜力技都会被闪避并遭到可秒杀的反击，此时只用不需BP的多段手段：猎人精准射击、学者元素乱射、双斧（Double Tomahawk）、海神之枪等二连击武器、光的多段习得技。两名猎人轮流精准射击+捕兽夹最稳。破防后再把积攒的BP一口气打出去。红血后每回合3动并蓄力「致命之牙」，建议保留物防增益。" }
      ],
      "treasures": [
        { "item": "醒神李子篮", "how": "落地点左侧" },
        { "item": "冰冻避邪符（Blizzard Amulet）", "how": "入口南侧右边楼梯下" },
        { "item": "活力石榴（大）", "how": "长楼梯下右侧" },
        { "item": "落幕种族之杖（Lost Tribe's Staff）", "how": "长楼梯左侧半隐藏小房间（物攻+190、属攻+381、物防-102）" },
        { "item": "蚺斩巨剑（Serpent Slayer）", "how": "十字路口左侧楼梯下的梯子上（物攻+420，命中-75、暴击-150，搭配补正命中的饰品极强）" },
        { "item": "真理之秘石（Stone of Truth）", "how": "击败恐狼后开启其守护的宝箱" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "可沿断桥残骸爬回巨壁地下洞。击败Boss掉落「大神官的经典」，拿到纹之地边境瀑布（Borderfall）神官公会换第3张神官职业证。"
    },
    {
      "id": "stormhail",
      "name": "斯托姆黑尔",
      "en": "Stormhail",
      "type": "town",
      "pos": [79.9, 51.1],
      "level": "37",
      "desc": "冬之地东部的重镇，圣堂机关与梅氏一族两派势力并存，北面经大桥通往梅城与灵峰阿尔塔赫。",
      "story": ["光 第4章", "泰米诺斯 第3章（斯托姆黑尔篇）", "奥修特 第2章（格拉切斯篇）"],
      "boss": [],
      "treasures": [
        { "item": "骑士盔甲（Knight's Armor）", "how": "城镇西侧房屋后面（HP+300、物防99、属防65）" },
        { "item": "醒神李子篮", "how": "城镇东侧、武具店东边房屋旁" }
      ],
      "npcs": [
        { "name": "圣堂骑士二人组（总部南侧）", "item": "战争长柄刀、卫兵铠甲、银剑、暗之精灵石（大）、属攻坚果", "method": "偷窃/强夺", "note": "" },
        { "name": "武器商人与圣堂骑士（总部外）", "item": "鬼杀（Ogre's Bane）、帝国之斧、雷电避邪符、守护护符等", "method": "偷窃/购买", "note": "武器商人知道南侧隐藏的达人之弓；骑士知道西侧道具店附近隐藏的还魂橄榄（特大）" },
        { "name": "武具店里的精英圣堂骑士", "item": "神盾之剑（Aegis Sword）、还魂橄榄、重钱袋", "method": "偷窃/购买", "note": "" },
        { "name": "酒馆的探险家", "item": "Herb-of-Grace Bud、还魂橄榄（大）、回避坚果（L）", "method": "偷窃", "note": "观察可得旅店折扣" },
        { "name": "梅家士兵二人（夜，存档点旁）", "item": "梅家之枪、梅家之剑、雷之精灵石（大）、贝壳圆盾", "method": "强夺", "note": "左边士兵知道东侧墓地隐藏的骑士盔甲" },
        { "name": "酒馆的精英圣堂骑士（夜）", "item": "巨刃、骑士巨弓、优质肉干", "method": "强夺", "note": "" },
        { "name": "精英圣堂骑士", "item": "光习得技：Vacuum Slice（强力单体剑技）", "method": "挑战", "note": "" },
        { "name": "奥尔特（Ort）", "item": "迅捷之盾、帝国铠甲、底力回复荔枝（大）", "method": "偷窃/购买", "note": "需泰米诺斯通关且完成弗雷姆丘奇支线「奥尔特的后续」后，出现在东侧墓地" }
      ],
      "shops": [
        "武具店：神盾之剑37000、圣堂骑士灵剑60000（需情报）、圣骑士长枪35000、海伯利安之枪55000、守护者之斧23000、白金手斧37000、达人之弓35000、石英杖36000、圣火教会灵杖60000（需情报）、骑士铠甲15200等",
        "道具店：可直接购买增强剂4000、扩散剂3000，以及还魂橄榄（大）3000、醒神李子（大）900"
      ],
      "tips": "光、泰米诺斯、奥修特的章节都可在镇内酒馆（西侧中央路旁）用「听故事」触发。三人推荐等级都在37~39，建议一次来把三章串着打。"
    },
    {
      "id": "stormhail_sacred_guard_hq",
      "name": "斯托姆黑尔：圣堂机关总部",
      "en": "Stormhail: Sacred Guard Headquarters",
      "type": "town",
      "pos": [83.3, 57.4],
      "level": "37",
      "desc": "圣火教会武装组织「圣堂机关」的总部，泰米诺斯第3章的调查舞台，内有通往禁忌圣堂的暗道。",
      "story": ["泰米诺斯 第3章（斯托姆黑尔篇）"],
      "boss": [],
      "treasures": [
        { "item": "剥皮斧·戒（Flayer's Admonishment）", "how": "1楼西侧走廊被圣堂骑士挡住的房间，先让门卫气绝/打倒（物攻+323，攻击回复造成伤害25%的HP）" },
        { "item": "活力石榴", "how": "2楼东侧房间" },
        { "item": "光之精灵石（特大）", "how": "2楼爬梯子上到最高处横梁，东侧" }
      ],
      "npcs": [
        { "name": "西侧被看守房间里的圣堂骑士", "item": "光习得技：Limb from Limb（单体四连斩，SP35）", "method": "挑战", "note": "强度7，需先处理门口的骑士（他带白金盾）。全游戏最强输出技之一" },
        { "name": "圣堂骑士（总部）", "item": "光习得技：Boost from Beyond（牺牲自己给队友各+1BP）", "method": "挑战", "note": "" },
        { "name": "登记处女职员", "item": "厚重的书、抵抗坚果（L）", "method": "偷窃", "note": "知道1楼西侧房间隐藏的增强剂" },
        { "name": "2楼东侧精英圣堂骑士", "item": "暗之精灵石（特大）、金戒指", "method": "偷窃/强夺", "note": "" },
        { "name": "2楼西侧圣堂骑士", "item": "圣堂之剑、强化果酱", "method": "偷窃", "note": "" },
        { "name": "1楼东侧神官（夜）", "item": "赎罪念珠、光之精灵石（特大）", "method": "强夺", "note": "观察可学「轻松引导」" },
        { "name": "2楼东侧两名骑士（夜）", "item": "雷电长柄刀、骷髅盔、铁壁坚果（L）、精炼之剑", "method": "强夺", "note": "" }
      ],
      "shops": [],
      "tips": "总部内没有商店与旅店（补给请回斯托姆黑尔镇内）。1楼东侧骑士知道2楼隐藏的雷之护符；夜间西侧第一间房的商人知道2楼东侧房间隐藏的古代硬币。"
    },
    {
      "id": "forbidden_shrine",
      "name": "禁忌圣堂",
      "en": "Forbidden Shrine",
      "type": "dungeon",
      "pos": [85.3, 54.6],
      "level": "37",
      "desc": "藏在圣堂机关总部地下的秘密圣堂与禁书库，泰米诺斯第3章（斯托姆黑尔篇）迷宫。",
      "story": ["泰米诺斯 第3章（斯托姆黑尔篇）"],
      "boss": [
        { "name": "库巴莉副官", "en": "Deputy Cubaryi", "level": "37", "weakness": ["枪", "斧", "杖"], "tips": "四阶段，每次破防后换盾并改变弱点与蓄力技，护盾5→7→9→11。①（反射盾）枪/斧/杖；②枪/斧/弓；③（毒盾：用武器攻击会中毒，改用魔法）短剑/弓/火/风/光；④（无效化盾II，减益无效且自身强化）枪/杖/风/暗。需要能覆盖多种武器和属性的队伍，泰米诺斯专职治疗，其他人在不能打弱点的阶段防御攒BP。" }
      ],
      "treasures": [
        { "item": "闪光避邪符（Gleaming Amulet）", "how": "沿火把路北→东，过桥前先下南侧楼梯" },
        { "item": "还魂橄榄（大）", "how": "桥对面" },
        { "item": "治愈葡萄（大）", "how": "烛光雕像台座左侧" },
        { "item": "15000叶", "how": "台座右侧下楼梯后北边的小房间" },
        { "item": "碎魔者权杖（Magic Breaker）", "how": "存档点西侧墙壁有隐藏通路（物攻+198、属攻+102）" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "雷之精灵（Lightning Elemental）会掉万能精灵石（Almighty Soulstone），是学者第3张职业证的材料。"
    },
    {
      "id": "castle_mei",
      "name": "梅城（斯托姆黑尔：大桥/梅城）",
      "en": "Stormhail: Bridge / Castle Mei",
      "type": "town",
      "pos": [97, 48.8],
      "level": "39",
      "desc": "斯托姆黑尔北侧大桥另一端、梅氏一族的城堡，光的旧友雷梅坐镇于此。",
      "story": ["光 第4章"],
      "boss": [
        { "name": "昆藏＋梅家枪兵×2", "en": "Kunzo", "level": "39", "weakness": ["短剑", "斧", "雷"], "tips": "章节开头战，难度不高。枪兵（护盾3）弱剑/弓/火/暗；枪兵全灭后昆藏会强化物理能力，反击很痛，没把握一回合破防就用魔法或防御攒BP。掉落滋养坚果（L）、还魂橄榄（大）。" }
      ],
      "treasures": [
        { "item": "雷之精灵石（大）", "how": "入口大厅北侧一排房间中的一间" },
        { "item": "16000叶", "how": "入口大厅东端、存档点西北的栏杆边（上层）" }
      ],
      "npcs": [
        { "name": "城门口的梅家士兵", "item": "梅家之剑、雷之精灵石（特大）", "method": "偷窃", "note": "" },
        { "name": "大厅东侧的梅家士兵", "item": "梅家之枪、板甲圆盾", "method": "偷窃", "note": "知道西北房间隐藏的混乱之瓶" },
        { "name": "佣兵与家臣", "item": "冰斧、铁壁坚果（M）、灵巧斗篷、银币袋", "method": "偷窃", "note": "佣兵可观察得「新装备上架」" },
        { "name": "梅家士兵", "item": "光习得技：The Pride of Clan Mei（攻击+速度提升）", "method": "挑战", "note": "" },
        { "name": "雷梅（光通关后）", "item": "雷鸣之枪（Thunder's Roar）、还魂橄榄（大）；光习得技 Bolt Brandish", "method": "偷窃/购买/挑战", "note": "顶级长枪，务必拿到" },
        { "name": "昆藏（光通关后）", "item": "守护者之盾（Protector's Shield）、活力石榴（大）", "method": "偷窃/购买", "note": "可观察学到「轻松挑战」" }
      ],
      "shops": [],
      "tips": "梅城内没有商店与旅店（补给请回斯托姆黑尔镇内）。梅城夜间无人。从入口大厅向西可回到被雷梅毁掉的大桥返回斯托姆黑尔补给。"
    },
    {
      "id": "castle_mei_east_tower",
      "name": "梅城：东塔/处刑塔",
      "en": "Castle Mei: East Tower / Gallows",
      "type": "dungeon",
      "pos": [97.6, 42.8],
      "level": "39",
      "desc": "梅城深处的高塔迷宫，顶层处刑塔是光第4章Boss战场。",
      "story": ["光 第4章"],
      "boss": [
        { "name": "雷梅＋梅家剑士×2", "en": "Rai Mei", "level": "39", "weakness": ["剑", "杖", "火", "光"], "tips": "开场弱点被锁定，梅家剑士×2（护盾3，弱枪/弓/火/雷/暗）全灭后才露出雷梅的弱点。雷梅在「迅雷架势」（护盾7、每回合2动，弱剑/杖/火/光）与「轰雷架势」（护盾7，攻击附带雷属性追击，弱短剑/斧/风/暗）间切换；HP下降后进入「真·迅雷架势」（护盾9、每回合3动）或「真·轰雷架势」（护盾9、雷追击伤害约翻倍），弱点与对应架势相同，每次换架势都要换武器/属性。「一番枪」会让她下回合先手连击，「十字枪」为2连雷属性攻击，「雷鸣」带气绝，需要先破防或回血。梅城宝箱里的雷抗饰品很有用，神官全体治疗+商人闪避（Sidestep）+防御增益很关键。" }
      ],
      "treasures": [
        { "item": "熟睡草（Herb of Serenity）", "how": "上东侧楼梯后一直向东，出到城墙走道" },
        { "item": "雷之精灵石（特大）", "how": "2楼平台北上楼梯左侧半隐藏的侧阶下去" },
        { "item": "治愈葡萄（大）", "how": "顶层左侧小房间" },
        { "item": "恶梦之枪（Nightmare Glaive）", "how": "过桥进入第二座塔，东南梯子下去再过小桥的空房间（物攻+210、命中-60、小概率睡眠）" },
        { "item": "雷电避邪符（Thunderstorm Amulet）", "how": "第二座塔存档点西侧的桥，通往孤立小塔" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "敌人以雷属性机械（雷之哨兵/守卫/馆长 Mk.II，多数弱风）和梅家枪兵为主，带风属性很轻松。"
    },
    {
      "id": "sacred_peak_altahe",
      "name": "灵峰阿尔塔赫",
      "en": "Sacred Peak Altahe",
      "type": "dungeon",
      "pos": [70.3, 30.6],
      "level": "37",
      "desc": "斯托姆黑尔北方的雪山，传说之鸟格拉切斯的栖息地，奥修特第2章（格拉切斯篇）迷宫。",
      "story": ["奥修特 第2章（格拉切斯篇）"],
      "boss": [
        { "name": "格拉切斯", "en": "Glacis", "level": "37", "weakness": ["枪", "短剑", "弓", "火"], "tips": "护盾8，全是冰属性攻击。「绝对零度」会让单人冻结数回合无法行动，「冰封大地」每回合削全员SP。中途召唤2只蓝色元素（弱剑/短剑/斧/火）遮挡弱点，并可能开反射——务必速清。最稳打法：把BP喂给猎人连发精准射击快速破防，装备本迷宫拿到的冰之避邪符减冰伤，用推迟行动顺序的技能控制其单动节奏。战后奥修特捕获格拉切斯，可作为挑衅召唤（每战1次，3BP）。掉落守护者冰刃（Guardian's Iceblade）。" }
      ],
      "treasures": [
        { "item": "BP/底力回复果酱（Reinforcing Jam）", "how": "走东侧小路不远处" },
        { "item": "冰之避邪符（Ice Amulet）", "how": "沿火把山路上行右侧" },
        { "item": "冰之精灵石（特大）", "how": "西行到梯子处，上第一段后左侧往下的梯子" },
        { "item": "绝对零度之弓（Absolute Zero Bow）", "how": "爬到顶向东，吊桥前稍往北左侧的隐藏小路（物攻+187、属攻+158、冰攻提升）" }
      ],
      "npcs": [],
      "shops": [],
      "tips": "入口在斯托姆黑尔大桥北侧楼梯上，看守的圣堂骑士需在白天用奥修特「挑衅」打败。吊桥对面的存档点就是Boss前。"
    }
  ],

  "roads": [
    ["frigit_isle", "frigit_isle_anchorage"],
    ["frigit_isle", "prison_underground_passage"],
    ["frigit_isle_anchorage", "prison_underground_passage"],
    ["cape_cold", "southern_cape_cold_snows"],
    ["southern_cape_cold_snows", "eastern_cape_cold_snows"],
    ["eastern_cape_cold_snows", "ruffians_hideout"],
    ["eastern_cape_cold_snows", "western_winterbloom_snows"],
    ["western_winterbloom_snows", "altar_of_the_scholarking"],
    ["western_winterbloom_snows", "winterbloom"],
    ["winterbloom", "winterbloom_thieves_quarter"],
    ["winterbloom_thieves_quarter", "snowhares_den"],
    ["southern_stormhail_snows", "stormhail"],
    ["southern_stormhail_snows", "beneath_the_wall"],
    ["beneath_the_wall", "infernal_castle"],
    ["stormhail", "stormhail_sacred_guard_hq"],
    ["stormhail_sacred_guard_hq", "forbidden_shrine"],
    ["stormhail", "sacred_peak_altahe"],
    ["stormhail", "castle_mei"],
    ["castle_mei", "castle_mei_east_tower"]
  ],

  "links": [
    { "from": "southern_cape_cold_snows", "region": "brightlands", "to": "nd_flats" },
    { "from": "eastern_cape_cold_snows", "region": "crestlands", "to": "eastern_flamechurch_pass" },
    { "from": "southern_stormhail_snows", "region": "crestlands", "to": "northern_montwise_pass" }
  ],

  "story": [
    {
      "title": "奥斯瓦尔德 第1章：雪狱中的学者",
      "character": "奥斯瓦尔德",
      "location": "frigit_isle",
      "level": "1",
      "summary": "被冤枉杀害妻女的学者奥斯瓦尔德在弗里吉特监狱岛服刑五年，为了向真凶哈维复仇而策划越狱。本章教学两个路途指令：夜间「强夺」、白天「观察」，最后穿过监狱地下道击败典狱长。",
      "steps": [
        "夜晚对囚犯使用强夺，夺回奥斯瓦尔德的笔记",
        "第二天在广场完成三项准备（顺序随意）：观察食堂右上角的艾美拉德拉他入伙",
        "观察食堂门外的囚犯得知贝尔的弱点，再找广场中央的贝尔拿到防寒衣",
        "大监狱2楼观察楼梯口的囚犯得知劳动报告位置，到图书室北侧第一个书架取得劳动报告（顺路拿2楼西北牢房与3楼东阳台的宝箱）",
        "第四天调查食堂后方的建筑过渡到夜晚，艾美拉德入队并交出口罩钥匙（可以用魔法了），调查广场西端建筑打开逃生路线",
        "离开前可强夺广场各NPC（之后无法回来），进入监狱地下道收集宝箱、在神秘囚犯处补给",
        "地下道尽头击败典狱长戴维斯"
      ],
      "boss": "典狱长戴维斯（弱点：短剑、杖、火、雷；狱卒弱短剑、杖、冰、雷）",
      "tips": "第1章与第2章连续进行，奥斯瓦尔德要完成两章才能自由行动。先在地下道练到3~4级再去强夺囚犯更稳。"
    },
    {
      "title": "奥斯瓦尔德 第2章：冰海脱逃",
      "character": "奥斯瓦尔德",
      "location": "frigit_isle_anchorage",
      "level": "紧接第1章",
      "summary": "越狱成功后，二人在入口/停泊所一路逃亡，发现船已戒严。奥斯瓦尔德受艾美拉德启发，用冰魔法造出冰舟逃离孤岛；艾美拉德为掩护他引火烧船。奥斯瓦尔德漂到科尔德凯普，被退休学者救起，本章结束。",
      "steps": [
        "开场回忆：向东走回家，看完回忆后回到逃亡现场（建议给奥斯瓦尔德学「雷击」覆盖更多弱点）",
        "沿悬崖西行拿治愈葡萄，往南进入停泊所，顺路取魔导坚果与醒神李子",
        "存档点后与增援狱卒强制战斗（弱短剑/冰/雷）",
        "在小屋避难后剧情造出冰舟，西行先去上方码头拿冰之精灵石，再去下方码头触发剧情",
        "在科尔德凯普醒来，章节完成"
      ],
      "boss": "无（仅增援狱卒杂兵战）",
      "tips": "本章结束后要等奥斯瓦尔德全部通关才能乘船重返弗里吉特岛，宝箱务必拿齐。若以奥斯瓦尔德开局，之后在南科尔德凯普雪道会遇到阿尔的支线「旅人的行囊」。"
    },
    {
      "title": "卡丝蒂 第2章：温特布鲁姆篇",
      "character": "卡丝蒂",
      "location": "winterbloom",
      "level": "24",
      "summary": "循着诊疗日志来到温特布鲁姆寻找失去的记忆，镇民都把卡丝蒂当作老朋友。她为病重的领主罗莎调药，却遭罗莎的侄子格雷格绑走罗莎的女儿梅莉亚，只能闯入盗贼区酒馆救人。",
      "steps": [
        "白天依次询问头顶绿色气泡的镇民，得知与罗莎夫人的关系",
        "前往西北的罗莎宅邸（2楼有增强剂宝箱），在左侧房间见罗莎与女儿梅莉亚",
        "去宅邸右侧的药草园，向梅莉亚询问后收集血莓、雪草、鳞树叶，调出罗莎的药",
        "回到罗莎房间遇见侄子格雷格；夜晚对罗莎使用「安抚」给药",
        "管家莉莉拿出格雷格的信——梅莉亚被绑架，前往北边盗贼区西北的破旧酒馆（进门前存档）",
        "击败普拉克一伙后回宅邸，分别询问罗莎和梅莉亚，想起「特鲁索」的名字，章节完成"
      ],
      "boss": "普拉克（弱点：剑、短剑、斧、火）＋米克（枪、弓、冰）＋马克（弓、冰、雷、风）",
      "tips": "这是很多玩家第一次团灭的Boss，建议全队约24级并已有副职业。米克马克即一代彩蛋人物。全体冰魔法可同时打两名手下的弱点。"
    },
    {
      "title": "索洛奈 第2章：父亲篇",
      "character": "索洛奈",
      "location": "snowhares_den",
      "level": "16",
      "summary": "为了摆脱黑蛇帮，索洛奈追随「父亲」来到温特布鲁姆，被要求暗杀敌对组织雪兔帮的首领贝尔戈米，作为脱离组织的考验。",
      "steps": [
        "前往北边盗贼区西北的酒馆，被三人包围后切换到夜晚对三人使用「偷袭」",
        "父亲现身并交代任务，前往盗贼区东侧的雪兔帮总部",
        "夜晚偷袭门口的看守，进入总部，调查1楼后屋进入雪兔巢穴",
        "从疲惫女子处了解情况，走南侧路线速通或东侧水路拿宝箱",
        "东端存档后挑战贝尔戈米，战后父亲出现，约索洛奈到蒙特怀斯会合，章节完成"
      ],
      "boss": "贝尔戈米（第一阶段弱点：剑、弓、火；第二阶段：剑、短剑、弓、火、光；手下弱短剑、杖、雷、光）",
      "tips": "贝尔戈米大量施加毒、混乱、降能力，强烈建议带卡丝蒂。他全是物理攻击，帕尔提提欧的雇佣佣兵与防御很有效。"
    },
    {
      "title": "泰米诺斯 第3章：斯托姆黑尔篇",
      "character": "泰米诺斯",
      "location": "forbidden_shrine",
      "level": "37",
      "summary": "泰米诺斯追查教皇遇害案，来到圣堂机关总部要审问凶手瓦德斯，却发现对方「从未抵达」。他与克里克一起调查圣堂机关的黑暗面，最终在总部地下的禁忌圣堂直面真相。",
      "steps": [
        "在总部门口与克里克相遇，入内交涉后决定调查圣堂机关",
        "前往总部东侧墓地，沿血迹走到尽头调查可疑的褐色物体，触发长剧情",
        "到西北的旅店住一晚，第二天在总部门口发生令人痛心的事件",
        "进入「心智宫殿」推理，对出现的人影使用「引导」，跟随他到2楼西翼书库调查",
        "再跟随人影爬上横梁，调查大彩绘玻璃旁伸出的支架，回到楼下出现新通道",
        "穿过禁忌圣堂（存档点西墙有隐藏路通往碎魔者权杖），在北侧禁书库迎战库巴莉"
      ],
      "boss": "库巴莉副官（四阶段弱点轮换：枪/斧/杖 → 枪/斧/弓 → 短剑/弓/火/风/光 → 枪/杖/风/暗）",
      "tips": "第三阶段为毒盾，武器攻击会中毒，改用魔法。若尚未完成克拉克里奇篇，需再去西大陆；两篇都完成后才会开启终章。"
    },
    {
      "title": "奥修特 第2章：格拉切斯篇",
      "character": "奥修特",
      "location": "sacred_peak_altahe",
      "level": "37",
      "summary": "为寻找三大传说之兽，奥修特来到斯托姆黑尔追寻冰鸟格拉切斯。格拉切斯的悲鸣让整个地区大雪不断，奥修特登上灵峰阿尔塔赫与它对决并将其收服。",
      "steps": [
        "进入斯托姆黑尔后听到尖啸，向北穿过城镇到大桥，在入口北侧楼梯处与圣堂骑士对话",
        "切换到白天用「挑衅」打败挡路的圣堂骑士",
        "进入灵峰阿尔塔赫，与名叫海格的男子交谈后绕远路上山，沿途收集强化果酱、冰之避邪符",
        "爬梯子到顶后，吊桥前北侧的隐藏小路拿绝对零度之弓",
        "过吊桥存档，挑战格拉切斯并捕获它"
      ],
      "boss": "格拉切斯（弱点：枪、短剑、弓、火；蓝色元素弱剑、短剑、斧、火）",
      "tips": "冻结无法解除只能等，所以速攻破防最重要。两名猎人（主职+副职）连发精准射击非常有效，盗贼的HP窃取也能帮忙。"
    },
    {
      "title": "光 第4章：雷之城",
      "character": "光",
      "location": "castle_mei",
      "level": "39",
      "summary": "为对抗篡位的弟弟穆根，光前往斯托姆黑尔投靠旧友——梅城城主雷梅，却遭到敌视并被投入地牢。在意外盟友帮助下脱身后，光一路攻上东塔处刑塔与雷梅决战。",
      "steps": [
        "从斯托姆黑尔向北到大桥，走右侧的桥触发剧情，与昆藏及枪兵战斗",
        "战后进入回忆，用「挑战」完成一场简单的决斗",
        "在地牢中醒来，被意外的盟友救出，上楼进入梅城入口大厅（可向西经大桥回城补给）",
        "收集大厅北侧房间与东端上层宝箱，存档后上东侧楼梯进入梅城东塔",
        "顶层过桥进入第二座塔，存档点东侧楼梯通往处刑塔，击败雷梅"
      ],
      "boss": "昆藏（弱点：短剑、斧、雷）／雷梅（弱点：剑、杖、火、光；轰雷架势时为短剑、斧、风、暗）＋梅家剑士×2（护盾3）",
      "tips": "雷梅战漫长但直接：先清剑士，治疗位最好是神官。光通关后回到梅城，可从雷梅身上拿到雷鸣之枪。"
    }
  ],

  "sidequests": [
    {
      "name": "婴儿要出生了",
      "en": "The Baby's Coming",
      "location": "cape_cold",
      "trigger": "科尔德凯普入口处焦急的村民：妻子提前临盆，而产婆去弗雷姆丘奇朝圣了。",
      "steps": [
        "前往纹之地弗雷姆丘奇，在旅店找到产婆",
        "用引导/雇佣/诱惑等带人同行的路途指令让她跟随",
        "带回科尔德凯普与委托人对话"
      ],
      "reward": "3000叶、滋养坚果（Nourishing Nut）",
      "difficulty": "易"
    },
    {
      "name": "无赖的据点",
      "en": "Ruffians' Redoubt",
      "location": "eastern_cape_cold_snows",
      "trigger": "东科尔德凯普雪道存档点西北路标旁的行商，抱怨附近无赖横行。",
      "steps": [
        "从存档点向东，打倒或弄晕门口的无赖（或从北边码头乘船进入）",
        "穿过无赖据点，在中央水域北侧找到无赖头目和两名手下并击败",
        "回到行商处报告"
      ],
      "reward": "6000叶、行商的羽毛帽（Peddler's Feathered Cap）；据点内另可开启风之装束宝箱",
      "difficulty": "易"
    },
    {
      "name": "剑与石",
      "en": "The Sword in the Stone",
      "location": "winterbloom",
      "trigger": "温特布鲁姆东侧道具店旁的困扰女子，田里插着一把拔不出来的剑。",
      "steps": [
        "方法1：前往荒野之地奥瑞斯拉什东北武具店，从退休矿工身上偷窃/购买/强夺/请求「坚固的十字镐」，交给女子",
        "方法2：带足8人（4名队员＋带同行的NPC）一起拔剑"
      ],
      "reward": "7000叶、生锈的剑（Rusty Sword）、复苏果酱（Revitalizing Jam）",
      "difficulty": "中"
    },
    {
      "name": "给儿子的礼物",
      "en": "A Present for My Son",
      "location": "winterbloom",
      "trigger": "温特布鲁姆东北，站在家门口的父亲：儿子要去当学者，想送他饯别礼物却没钱。",
      "steps": [
        "前往科尔德凯普西侧民房，从退休学者（救了奥斯瓦尔德的人）身上偷窃/购买/强夺「银羽毛笔」",
        "交给温特布鲁姆的父亲"
      ],
      "reward": "300叶、魔导坚果（M）、回复果酱（Refreshing Jam）",
      "difficulty": "易"
    },
    {
      "name": "梅莉亚的后续",
      "en": "Melia's Next Chapter",
      "location": "winterbloom",
      "trigger": "卡丝蒂第4章通关后，到温特布鲁姆西北宅邸2楼找梅莉亚（领主），她担心雪兔帮又在干坏事。",
      "steps": [
        "前往盗贼区北东侧的建筑找到雪兔帮现任首领普拉克（日文攻略所述位置）",
        "用偷窃/购买/强夺/请求从普拉克身上拿到「雪兔帮的信」",
        "交给梅莉亚"
      ],
      "reward": "9000叶、梅莉亚的护身符（Melia's Amulet）",
      "difficulty": "易"
    },
    {
      "name": "令人不安的商店",
      "en": "A Disquieting Shop",
      "location": "stormhail",
      "trigger": "斯托姆黑尔西侧道具店里的店主女儿，说话支支吾吾，旁边的「母亲」态度很奇怪。",
      "steps": [
        "让柜台后的黏人女子气绝或睡着：光挑战/奥斯瓦尔德强夺打倒、索洛奈夜间偷袭，或卡丝蒂用安眠类药物安抚",
        "她其实是劫店的盗贼，与女儿对话完成"
      ],
      "reward": "12000叶、命中坚果（L）（Sharp Nut (L)）、回避坚果（L）（Slippery Nut (L)）",
      "difficulty": "中（女子战斗力不低）"
    },
    {
      "name": "未了的爱",
      "en": "Lingering Love",
      "location": "stormhail",
      "trigger": "斯托姆黑尔东侧武具店附近的忧郁女子，思念离她而去的恋人尤吉斯，只留下一条项链。",
      "steps": [
        "方法1：用偷窃/购买等从她身上拿走「珍贵的项链」",
        "方法2：与旁边开朗的男子对话得知尤吉斯去了纹之地梅里希尔斯，在旅店前找到正在搭讪的尤吉斯，用带人同行的指令带回来（剧情更有趣）"
      ],
      "reward": "14000叶、魅惑缎带（Alluring Ribbon）",
      "difficulty": "易"
    },
    {
      "name": "旅人的行囊",
      "en": "The Traveler's Bag",
      "location": "southern_cape_cold_snows",
      "trigger": "仅在以奥斯瓦尔德为开局主角时，完成第2章后在南科尔德凯普雪道遇到行李被偷的青年阿尔。",
      "steps": [
        "夜晚在雪道上找到面色阴沉的男人，反复对话后进入战斗（盗贼弱枪、短剑、斧、杖、光）",
        "把阿尔的行囊还给他"
      ],
      "reward": "1500叶、回避坚果、治愈葡萄×3；为隐藏Boss支线链「来自地狱尽头」「通往异界之门」的起点",
      "difficulty": "易"
    },
    {
      "name": "商机的气息：温特布鲁姆篇",
      "en": "The Scent of Commerce: Winterbloom",
      "location": "winterbloom",
      "trigger": "帕尔提提欧在队时到温特布鲁姆东侧，有人在民房里呼救——其实是发明家奥德利的留声机在循环播放求救录音。",
      "steps": [
        "把三位乐手带回温特布鲁姆见奥德利（白天，用任意带人同行的指令）：",
        "弗雷姆丘奇东侧礼拜堂里弹钢琴的神官",
        "运河布莱恩酒馆入口附近的小提琴手",
        "荒野之地克拉克里奇入口处的吉他手"
      ],
      "reward": "猫之曲（钢琴/吉他/小提琴三版本）；解锁各地酒馆的留声机点歌功能，之后可在商店和NPC处收集更多乐曲",
      "difficulty": "中（需跑三个地区）"
    }
  ],

  "items": [
    { "name": "罪人之杖", "en": "Sinner's Staff", "type": "武器", "location": "prison_underground_passage", "how": "监狱地下道：前景断楼梯后的隐藏通路向西的牢房宝箱", "effect": "物攻+5、属攻+14（开局奥斯瓦尔德的重要升级）" },
    { "name": "古旧的项链", "en": "Ancient Necklace", "type": "饰品", "location": "prison_underground_passage", "how": "监狱地下道最底层断头台北侧的隐藏通路宝箱", "effect": "最大HP+30、最大SP+10" },
    { "name": "朝圣者长袍", "en": "Pilgrim's Robe", "type": "防具", "location": "southern_cape_cold_snows", "how": "东南水域乘独木舟向西绕到桥下第三个码头的宝箱", "effect": "最大SP+15、物防+27、属防+33" },
    { "name": "毛皮帽子", "en": "Fur Cap", "type": "防具", "location": "eastern_cape_cold_snows", "how": "乘独木舟向西的宝箱；科尔德凯普杂货店获得情报后也可以1900叶购买", "effect": "最大HP+40、物防+15、属防+17" },
    { "name": "异端大剑", "en": "Heretic's Greatsword", "type": "武器", "location": "ruffians_hideout", "how": "无赖据点东侧冰洞宝箱", "effect": "物攻+69、命中-40，暗属性攻击威力提升" },
    { "name": "风之装束", "en": "Wind Robe", "type": "防具", "location": "ruffians_hideout", "how": "击败无赖头目三人组后开启的宝箱", "effect": "物防+33、属防+36，减少风属性伤害" },
    { "name": "游隼戒指", "en": "Falcon Ring", "type": "饰品", "location": "western_winterbloom_snows", "how": "离开学者王祭坛后往左绕到岩石后的宝箱", "effect": "速度+10、回避+10" },
    { "name": "体力手环", "en": "Empowering Bracelet", "type": "饰品", "location": "snowhares_den", "how": "雪兔巢穴东侧码头北边的隐藏水道，爬梯子上的宝箱", "effect": "最大HP+500" },
    { "name": "石英匕首", "en": "Quartz Dagger", "type": "武器", "location": "snowhares_den", "how": "雪兔巢穴乘船到最东南角的宝箱", "effect": "物攻+60、属攻+58，极小概率降低目标属防" },
    { "name": "士兵长枪", "en": "Soldier's Spear", "type": "武器", "location": "winterbloom", "how": "北口附近白天的男子（偷窃约8% / 购买约17000叶），夜间岔路口士兵（强夺）；盗贼区武具店售22000叶", "effect": "前中期非常强的长枪，可拿两把" },
    { "name": "魔导师之杖", "en": "Mage Wand", "type": "武器", "location": "winterbloom", "how": "夜间岔路口的男子，强夺或诱惑", "effect": "强力属攻杖" },
    { "name": "毒刃", "en": "Poison Knife", "type": "武器", "location": "winterbloom_thieves_quarter", "how": "夜间盗贼区左侧的盗贼，偷窃/强夺，阿格妮娅请求需约36级", "effect": "攻击力远超同期的短剑" },
    { "name": "小鸦剑", "en": "Little Crow", "type": "武器", "location": "winterbloom_thieves_quarter", "how": "夜间北侧建筑外右边的盗贼，阿格妮娅请求需30级（同人身上还有卫兵头盔、卫兵铠甲）", "effect": "强力剑" },
    { "name": "复苏之石", "en": "Vivifying Stone", "type": "饰品", "location": "winterbloom_thieves_quarter", "how": "夜间北侧建筑里的女人，偷窃/强夺", "effect": "防止即死" },
    { "name": "生锈的剑", "en": "Rusty Sword", "type": "武器", "location": "winterbloom", "how": "支线「剑与石」奖励", "effect": "交给荒野之地格拉维尔的铁匠波尔塔可解锁武器大师，并重铸为征服者之剑（Conqueror's Sword），解锁武器大师技能「Cosmic Roar」" },
    { "name": "猛兽之弓", "en": "Raging Beast", "type": "武器", "location": "southern_stormhail_snows", "how": "下到雪道最底层一直往右再上楼梯的宝箱", "effect": "物攻+179、回避+56，极小概率降低目标回避" },
    { "name": "闪电盔甲", "en": "Lightning Armor", "type": "防具", "location": "southern_stormhail_snows", "how": "巨壁地下洞入口右侧的梯子爬到顶的宝箱", "effect": "物防+124、属防+67，减少雷属性伤害" },
    { "name": "杂技斗篷", "en": "Acrobat's Mantle", "type": "防具", "location": "southern_stormhail_snows", "how": "梯子旁左侧NPC，偷窃/购买；盗贼区武具店获得情报后15200叶出售", "effect": "兼具物防、属防与速度" },
    { "name": "骑士盔甲", "en": "Knight's Armor", "type": "防具", "location": "stormhail", "how": "斯托姆黑尔西侧房屋后的宝箱；东侧墓地还有一件隐藏的（夜间梅家士兵告知）", "effect": "最大HP+300、物防+99、属防+65" },
    { "name": "剥皮斧·戒", "en": "Flayer's Admonishment", "type": "武器", "location": "stormhail_sacred_guard_hq", "how": "圣堂机关总部1楼西侧被看守的房间宝箱，需先让门口圣堂骑士气绝", "effect": "物攻+323，攻击时回复造成伤害25%的HP" },
    { "name": "碎魔者权杖", "en": "Magic Breaker", "type": "武器", "location": "forbidden_shrine", "how": "禁忌圣堂存档点西侧墙壁隐藏通路尽头的宝箱", "effect": "物攻+198、属攻+102，极小概率降低目标属防" },
    { "name": "闪光避邪符", "en": "Gleaming Amulet", "type": "饰品", "location": "forbidden_shrine", "how": "禁忌圣堂过桥前南侧楼梯下的宝箱", "effect": "大幅减少光属性伤害" },
    { "name": "绝对零度之弓", "en": "Absolute Zero Bow", "type": "武器", "location": "sacred_peak_altahe", "how": "灵峰阿尔塔赫吊桥前北侧的隐藏小路宝箱", "effect": "物攻+187、属攻+158，冰属性攻击威力提升" },
    { "name": "冰之避邪符", "en": "Ice Amulet", "type": "饰品", "location": "sacred_peak_altahe", "how": "灵峰阿尔塔赫火把山路右侧宝箱", "effect": "减少冰属性伤害，格拉切斯战必备" },
    { "name": "守护者冰刃", "en": "Guardian's Iceblade", "type": "武器", "location": "sacred_peak_altahe", "how": "奥修特第2章Boss格拉切斯掉落", "effect": "" },
    { "name": "恶梦之枪", "en": "Nightmare Glaive", "type": "武器", "location": "castle_mei_east_tower", "how": "梅城东塔第二座塔东南梯子下、过小桥后空房间的宝箱", "effect": "物攻+210、命中-60，极小概率使目标睡眠" },
    { "name": "雷电避邪符", "en": "Thunderstorm Amulet", "type": "饰品", "location": "castle_mei_east_tower", "how": "第二座塔存档点西侧桥通往的孤立小塔宝箱", "effect": "大幅减少雷属性伤害" },
    { "name": "雷鸣之枪", "en": "Thunder's Roar", "type": "武器", "location": "castle_mei", "how": "光的故事全部通关后，梅城入口大厅东侧的雷梅身上偷窃/购买", "effect": "顶级长枪，强烈推荐" },
    { "name": "守护者之盾", "en": "Protector's Shield", "type": "防具", "location": "castle_mei", "how": "光通关后梅城内的昆藏身上偷窃/购买", "effect": "" },
    { "name": "蚺斩巨剑", "en": "Serpent Slayer", "type": "武器", "location": "infernal_castle", "how": "奈落之城十字路口左侧楼梯下的梯子上宝箱", "effect": "物攻+420、命中-75、暴击-150（用提升命中的装备弥补后伤害惊人）" },
    { "name": "落幕种族之杖", "en": "Lost Tribe's Staff", "type": "武器", "location": "infernal_castle", "how": "奈落之城长楼梯左侧半隐藏小房间宝箱", "effect": "物攻+190、属攻+381、物防-102" },
    { "name": "冰冻避邪符", "en": "Blizzard Amulet", "type": "饰品", "location": "infernal_castle", "how": "奈落之城入口南侧右边楼梯下的宝箱", "effect": "大幅减少冰属性伤害" },
    { "name": "真理之秘石", "en": "Stone of Truth", "type": "饰品", "location": "infernal_castle", "how": "击败恐狼后开启其守护的宝箱", "effect": "战斗开始时获得永续的「大魔法化」效果，法师核心饰品，奥斯瓦尔德装备后极其强大" },
    { "name": "大神官的经典", "en": "High Priest's Book of Scripture", "type": "其他", "location": "infernal_castle", "how": "奈落之城Boss恐狼掉落", "effect": "交给边境瀑布的神官公会换取第3张神官职业证" },
    { "name": "巨壁的奇妙传说", "en": "The Curious Legend of the Great Wall", "type": "其他", "location": "southern_stormhail_snows", "how": "白天存档点右侧的考古学家身上偷窃/购买/强夺", "effect": "蒙特怀斯图书馆支线「收集珍奇书籍」的三本书之一（隐藏Boss支线链）" },
    { "name": "增强剂", "en": "Strengthening Serum", "type": "道具", "location": "stormhail", "how": "斯托姆黑尔道具店4000叶直接购买；温特布鲁姆罗莎宅邸2楼宝箱也有一瓶", "effect": "调合素材，提升效果的增强剂" }
  ],

  "jobs": [
    { "name": "学者", "en": "Scholar", "location": "western_winterbloom_snows", "how": "西温特布鲁姆雪道西北山上的建筑里与学者公会会长对话即得第1张。第2张：上交5个古代遗物核心（Ancient Sentinel Core，无属性哨兵/守卫/馆长系敌人掉落或偷取）；第3张：上交5个万能精灵石（Almighty Soulstone，大型元素系敌人掉落，如禁忌圣堂的雷之精灵）" },
    { "name": "神官（第3张职业证）", "en": "Cleric", "location": "infernal_castle", "how": "神官公会位于纹之地边境瀑布；第3张需上交奈落之城Boss恐狼掉落的「大神官的经典」" },
    { "name": "武器大师", "en": "Armsmaster", "location": "winterbloom", "how": "隐藏职业。完成温特布鲁姆支线「剑与石」得到生锈的剑，带到荒野之地格拉维尔、打倒挡门的讨债人后给铁匠波尔塔看任意一把生锈武器即可获得职业证" }
  ],

  "tips": [
    "本区分为互不相连的两块：西半部（科尔德凯普、温特布鲁姆）经南科尔德凯普雪道连明之地、经东科尔德凯普雪道连纹之地弗雷姆丘奇；东半部斯托姆黑尔只能从纹之地西蒙特怀斯山道北端（打倒挡路卫兵）经北蒙特怀斯山道进入，温特布鲁姆是死路。",
    "斯托姆黑尔集中了光第4章、泰米诺斯第3章、奥修特第2章（推荐37~39级），可以一次来串着打完；进镇后用三人各自的「听故事」触发。",
    "光的习得技在本区非常丰富：圣堂机关总部的 Limb from Limb（四连斩）、盗贼区的 Shield Thief（无视弱点削盾）、斯托姆黑尔精英骑士的 Vacuum Slice、科尔德凯普村民的 Level Slash 都值得挑战。",
    "温特布鲁姆盗贼区和斯托姆黑尔的夜间NPC身上有大量超前装备，阿格妮娅的请求、奥斯瓦尔德的强夺、索洛奈的偷窃各有等级/成功率门槛，中期回来扫荡收益很高。",
    "奥斯瓦尔德开局时，科尔德凯普入口夜间的男人HP低、身上有重钱袋和金怀表，是强夺赚钱的首选目标。",
    "弗里吉特监狱岛在奥斯瓦尔德第2章后封闭，需奥斯瓦尔德全部章节通关，乘自己的船（帕尔提提欧的商机的气息：托普霍普篇购得）经分隔之海手动航行抵达，首次登岛后恢复快速旅行。",
    "隐藏迷宫奈落之城：南斯托姆黑尔雪道城墙下左侧的巨壁地下洞，带够7人（含同行NPC）踏上吊桥即可掉入。Boss恐狼「感官敏锐」期间禁止用BP加成和潜力技。",
    "南斯托姆黑尔雪道考古学家的《巨壁的奇妙传说》是隐藏Boss支线链（收集珍奇书籍→来自地狱尽头→通往异界之门）的必需品，别忘了拿。",
    "禁忌圣堂的雷之精灵、奈落之城的暗之精灵会掉万能精灵石（学者第3张职业证材料），东塔与其他遗迹的无属性机械会掉古代遗物核心（学者第2张职业证材料）。"
  ]
});

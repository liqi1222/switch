OT2.setGlobal({
  "title": "歧路旅人2 全地图互动攻略",
  "intro": "《歧路旅人2》（八方旅人2 / Octopath Traveler II）是 Square Enix 于 2023 年 2 月 24 日发售的 HD-2D 回合制 RPG，舞台是被分隔之海一分为二的东西两块大陆「索里斯提亚（Solistia）」，8 位旅人各自拥有 3~5 章的主线，并通过 4 组交汇篇与最终章汇聚到一起。本攻略以世界地图形式按地区整理城镇、迷宫、主线、支线、宝箱与 NPC 道具，并在全局页汇总角色、职业、交汇篇、最终章、隐藏 Boss、推荐路线与系统技巧。",

  "characters": [
    {
      "id": "hikari",
      "name": "光",
      "en": "Hikari",
      "job": "剑士",
      "region": "hinoeuma",
      "start": "库国 Ku（非初始角色时在沙粒之村 Ryu 加入）",
      "talent": "习得的技能（Learned Skills）：用白天指令「比试」击败镇民后，可习得该镇民对应的专属技能并在战斗中使用，最多可同时持有 5 个。",
      "pathDay": { "name": "比试（Challenge）", "desc": "与镇民一对一决斗；获胜后可习得对方的技能，也能把挡路的 NPC 打倒清走。" },
      "pathNight": { "name": "收买（Bribe）", "desc": "支付叶币从镇民处获取情报（隐藏道具位置、支线线索等）。" },
      "latent": "阴之力（Shadow's Hold，通关个人剧情后改名为 Light's Radiance，效果不变）：潜力槽满后可不耗 SP 使用专属剑技——Tenretsuzan（单体高威力剑击）、飞燕华 Hienka（单体剑击 2 次并在回合末再行动 1 次）、双月闪 Sougetsusen（对全体先剑后枪攻击）。",
      "exSkills": [
        "Ultimate Stance（普通攻击变为攻击全体，持续数回合）：带光前往剑士祭坛「Altar of the Thunderblade」习得",
        "Shinjumonjigiri（真十字斩：全体剑击后追加单体强力剑击）：通关光的个人剧情后习得"
      ],
      "chapters": [
        { "no": "1", "title": "第1章", "location": "库国 Ku / 沙粒之村 Ryu", "region": "hinoeuma", "level": "1", "boss": "南军将领；立津·米修约" },
        { "no": "2", "title": "第2章", "location": "蒙特维斯 Montwise（地下竞技场）", "region": "crestlands", "level": "15", "boss": "百尸班德拉姆" },
        { "no": "3", "title": "第3章", "location": "威尔格罗布 Wellgrove（秘密森林）", "region": "leaflands", "level": "26", "boss": "罗将军（光单挑）" },
        { "no": "4", "title": "第4章", "location": "斯托姆黑伊鲁 Stormhail（梅伊城）", "region": "winterlands", "level": "39", "boss": "城主鸣·雷" },
        { "no": "5", "title": "第5章（终章）", "location": "库国 Ku（南库国沙路、库城）", "region": "hinoeuma", "level": "45", "boss": "将军立津·米修约；国王无间·库；黑暗之光；魔化无间" }
      ],
      "tips": "物理主力输出，第5章连续 3 场 Boss 战（立津、心魔、无间）需备足回复。多用「比试」收集强力习得技能（全体技、带属性的技能可弥补剑/枪以外的弱点）。副职业社区常推荐武器大师（全武器+高伤）、药师/商人（自给自足，便于比试），后期配剑士支援技能「Deal More Damage」突破 9999 上限。通关后可挑战库国五重塔取得咒术师。"
    },
    {
      "id": "agnea",
      "name": "阿格妮娅",
      "en": "Agnea",
      "job": "舞娘",
      "region": "leaflands",
      "start": "库罗普提尔 Cropdale",
      "talent": "即兴舞会（Dance Session）：用「诱惑」带领镇民同行时，使用狮子之舞（Lion Dance）、孔雀之舞（Peacock Strut）、短剑之舞（Dagger Dance）会按该镇民触发额外效果，无需在战斗中召唤。",
      "pathDay": { "name": "诱惑（Allure）", "desc": "让镇民跟随同行，可在战斗中召唤协助，并配合固有能力提供舞蹈追加效果。" },
      "pathNight": { "name": "讨要（Entreat）", "desc": "不花钱、不战斗，向镇民讨得其持有的道具（需满足条件）。" },
      "latent": "团结（All Together Now）：将单体技能的效果扩散为全体（奥义及只作用于自身的技能除外），最适合把单体增益一次性加给全队。",
      "exSkills": [
        "Windy Refrain（全体风属性攻击，并使我方下回合先手行动）：带阿格妮娅前往舞娘祭坛「舞姬的祭坛 Altar of the Lady of Grace」（北威尔格罗布森道）",
        "Song of Hope（希望之歌：延长我方全体增益效果的持续回合）：通关阿格妮娅的个人剧情后习得"
      ],
      "chapters": [
        { "no": "1", "title": "第1章", "location": "库罗普提尔 Cropdale", "region": "leaflands", "level": "1", "boss": "杜欧尔杜欧尔" },
        { "no": "2", "title": "第2章", "location": "新德尔斯塔 New Delsta（剧场）", "region": "brightlands", "level": "14", "boss": "剧场经理拉·马尼" },
        { "no": "3", "title": "第3章", "location": "特洛甫霍普 Tropu'hopu", "region": "totohaha", "level": "20", "boss": "无" },
        { "no": "4", "title": "第4章", "location": "塞伊 Sai（龙望之丘）", "region": "hinoeuma", "level": "34", "boss": "保镖贝萝妮卡" },
        { "no": "5", "title": "第5章（终章）", "location": "梅林希尔斯 Merryhills（月与太阳的舞台）", "region": "crestlands", "level": "45", "boss": "多尔希尼娅；明星多尔希尼娅" }
      ],
      "tips": "核心辅助：潜力「团结」+ 狮子之舞/孔雀之舞等单体增益可瞬间覆盖全队；攻略站推荐给她挂魔术师，用潜力把「Reflective Barrier」铺满全队应对最终 Boss 的魔法伤害。速度和属性攻击高，也能挂学者打属性。"
    },
    {
      "id": "partitio",
      "name": "帕尔提提欧",
      "en": "Partitio",
      "job": "商人",
      "region": "wildlands",
      "start": "欧兹拉修 Oresrush",
      "talent": "互惠互利（Business Partners）：用「雇佣」带领的镇民会在购物、卖出、收集（Collect）、雇佣兵（Hired Help）等与钱相关的行动上提供各自的加成；购物/卖出类加成需帕尔提提欧在出战队伍中。",
      "pathDay": { "name": "购买（Purchase）", "desc": "花叶币直接向镇民购买其持有的道具。" },
      "pathNight": { "name": "雇佣（Hire）", "desc": "付费让镇民同行，可在战斗中召唤协助，并配合固有能力提供金钱相关加成。" },
      "latent": "干劲（Hoot and Holler）：立即将自己的 BP 补满。",
      "exSkills": [
        "Negotiate Schedule（付钱让单个敌人跳过其回合、改由我方行动）：带帕尔提提欧前往商人祭坛「绅商伯的祭坛 Altar of the Trader」（南克拉克雷吉荒道）",
        "Share SP（将自身剩余 SP 按比例分给一名队友）：通关帕尔提提欧的个人剧情后习得"
      ],
      "chapters": [
        { "no": "1", "title": "第1章", "location": "欧兹拉修 Oresrush", "region": "wildlands", "level": "1", "boss": "匪帮头目吉夫" },
        { "no": "2", "title": "第2章", "location": "轮敦 Clockbank（洛克公司工厂）", "region": "brightlands", "level": "18", "boss": "看门狗加内特" },
        { "no": "外传", "title": "商机的气息·特洛甫霍普篇（花 10 万叶买船 Grand Terry，第4章前必做）", "location": "特洛甫霍普 Tropu'hopu（造船所）", "region": "totohaha", "level": "" },
        { "no": "外传", "title": "商机的气息·凛芬镇篇（留声机，酒馆可点播音乐）", "location": "凛芬镇 Winterbloom", "region": "winterlands", "level": "" },
        { "no": "外传", "title": "商机的气息·塞伊篇（可阅读《商人手稿 Mercantile Manuscript》）", "location": "塞伊 Sai", "region": "hinoeuma", "level": "" },
        { "no": "3", "title": "第3章", "location": "威尔格罗布 Wellgrove（阿尔隆德宅邸）", "region": "leaflands", "level": "35", "boss": "秘书萨斯顿（雾中之敌）" },
        { "no": "4", "title": "第4章（终章）", "location": "洛克岛 Roque Island", "region": "harborlands", "level": "45", "boss": "蒸汽装甲车黑曜石" }
      ],
      "tips": "第2章后需完成至少一篇「商机的气息」才能开第3章，且特洛甫霍普篇的买船是第4章前提，船也是出海、魔术师、海上隐藏 Boss 的前提，建议尽早攒 10 万叶。潜力回满 BP，配合商人「闪避（Sidestep）」+ 魔术师「Seal of Diffusion」可让全队闪避物理攻击；「佣兵召唤（Hired Help）」伤害只看花费不看能力，适合破盾。"
    },
    {
      "id": "osvald",
      "name": "奥斯瓦尔德",
      "en": "Osvald",
      "job": "学者",
      "region": "winterlands",
      "start": "弗里吉特监狱岛 Frigit Isle",
      "talent": "预习（Study Foe）：战斗开始时自动揭示敌人的部分弱点。",
      "pathDay": { "name": "探查（Scrutinize）", "desc": "从镇民处获取情报（隐藏道具、支线线索等）。" },
      "pathNight": { "name": "抢夺（Mug）", "desc": "与镇民战斗，获胜后夺走其持有的道具。" },
      "latent": "魔法收敛化（Concentrate Spells）：将魔法集中到单一目标并提升威力，全体魔法变为高伤单体魔法。",
      "exSkills": [
        "Teach（将自身的能力上升效果传授给一名队友）：带奥斯瓦尔德前往学者祭坛「硕学王的祭坛 Altar of the Scholarking」（西凛芬镇雪道冰面桥下）",
        "One True Magic（究极魔法：超越属性的全体高威力魔法，无视弱点削盾）：第5章对哈维的 Boss 战中自动习得"
      ],
      "chapters": [
        { "no": "1", "title": "第1章（监狱岛）", "location": "弗里吉特监狱岛 Frigit Isle", "region": "winterlands", "level": "1", "boss": "典狱长戴维茨" },
        { "no": "2", "title": "第2章（越狱，紧接第1章）", "location": "弗里吉特监狱岛·地道 / 寒岬村 Cape Cold 一带", "region": "winterlands", "level": "1", "boss": "无" },
        { "no": "3", "title": "第3章", "location": "康宁湾 Conning Creek（卫兵队基地）", "region": "harborlands", "level": "18", "boss": "斯坦瓦队长；克拉丽莎夫人（奥斯瓦尔德单挑）" },
        { "no": "4", "title": "第4章", "location": "蒙特维斯 Montwise（地下研究室）", "region": "crestlands", "level": "36", "boss": "悲叹魔像" },
        { "no": "5", "title": "第5章（终章）", "location": "格拉维尔 Gravell（达斯克鲁因神殿）", "region": "wildlands", "level": "45", "boss": "哈维教授" }
      ],
      "tips": "魔法主力：属性攻击坚果优先给他。潜力把全体魔法收束成单体，适合打 Boss 破防后爆发；「Teach」可把自身强化转给队友。第4章需集齐关于哈维的 3 条情报才能进图书馆地下，第5章需集齐 5 个黑水晶才能触发与哈维的决战。副职业可选神官补短板，或商人取得枪/弓与「休息（Rest）」回 SP。"
    },
    {
      "id": "throne",
      "name": "索洛奈",
      "en": "Throné",
      "job": "盗贼",
      "region": "brightlands",
      "start": "新德尔斯塔 New Delsta",
      "talent": "暗夜的加护（Blessing of Darkness）：夜晚战斗时强化我方全体的能力。",
      "pathDay": { "name": "偷取（Steal）", "desc": "按成功率偷取镇民持有的道具，失败会降低城镇声望。" },
      "pathNight": { "name": "偷袭（Ambush）", "desc": "与镇民战斗并将其击晕，可清除挡路的 NPC。" },
      "latent": "残影（Leave No Trace）：本回合可行动 2 次。",
      "exSkills": [
        "Veil of Darkness（全体暗属性攻击，并必定闪避 1 次物理攻击）：带索洛奈前往盗贼祭坛「盗公子的祭坛 Altar of the Prince of Thieves」（南轮敦街道）",
        "Disguise（变装：变身为一名队友，获得其能力与技能，持续数回合）：通关索洛奈的个人剧情后习得"
      ],
      "chapters": [
        { "no": "1", "title": "第1章", "location": "新德尔斯塔 New Delsta", "region": "brightlands", "level": "1", "boss": "皮尔洛" },
        { "no": "2", "title": "第2章 蛇母篇", "location": "欧兹拉修 Oresrush", "region": "wildlands", "level": "7", "boss": "无（仅有追踪者战）" },
        { "no": "2", "title": "第2章 蛇父篇", "location": "凛芬镇 Winterbloom", "region": "winterlands", "level": "16", "boss": "雪兔贝尔戈米" },
        { "no": "3", "title": "第3章 蛇母篇（需先完成蛇母篇第2章）", "location": "威尔格罗布 Wellgrove（母亲的庭园）", "region": "leaflands", "level": "31", "boss": "母亲与母亲的副手" },
        { "no": "3", "title": "第3章 蛇父篇（需先完成蛇父篇第2章）", "location": "蒙特维斯 Montwise（废弃教堂）", "region": "crestlands", "level": "31", "boss": "父亲" },
        { "no": "4", "title": "第4章（终章，需完成两条路线）", "location": "新德尔斯塔 New Delsta / 遗种镇 Lostseed", "region": "brightlands", "level": "45", "boss": "克洛德" }
      ],
      "tips": "偷取是前期拿高级装备的主要手段，在高等级城镇存档后反复尝试。潜力 2 动配合盗贼奥义伤害很高（社区经验：奥义伤害与速度相关，速度坚果优先给她）；夜间固有能力可与泰米诺斯的「月光审判」叠加，夜战更轻松。副职业可选舞娘（自加增益）、猎人（补斧/弓弱点+陷阱）。"
    },
    {
      "id": "temenos",
      "name": "泰米诺斯",
      "en": "Temenos",
      "job": "神官",
      "region": "crestlands",
      "start": "弗拉姆教堂村 Flamechurch",
      "talent": "月光审判（Moonlight Judgment）：夜晚战斗时削弱敌方全体的能力。",
      "pathDay": { "name": "引导（Guide）", "desc": "带领镇民同行，可在战斗中召唤协助。" },
      "pathNight": { "name": "揭发（Coerce）", "desc": "对镇民进行审问式对决，击破其防备后获取情报，失败无法得到情报。" },
      "latent": "定罪（Judgment）：一段时间内任何攻击都能削减敌人护盾（无视弱点），且无视弱点锁定。",
      "exSkills": [
        "Prayer for Plenty（无视上限为单体恢复 HP，可过量回复）：带泰米诺斯前往神官祭坛「圣火神的祭坛 Altar of the Flamebringer」（国境大瀑布神官公会教堂内）",
        "Heavenly Shine（消耗全部 SP 对全体造成光属性伤害，SP 越多威力越大）：通关泰米诺斯的个人剧情后习得"
      ],
      "chapters": [
        { "no": "1", "title": "第1章", "location": "弗拉姆教堂村 Flamechurch（大圣堂）", "region": "crestlands", "level": "1", "boss": "凶暴的狼费尔瓦格" },
        { "no": "2", "title": "第2章", "location": "卡纳尔布来因 Canalbrine", "region": "harborlands", "level": "14", "boss": "建筑师瓦多斯" },
        { "no": "3", "title": "第3章 克拉克雷吉篇", "location": "克拉克雷吉 Crackridge（落日遗迹）", "region": "wildlands", "level": "24", "boss": "无" },
        { "no": "3", "title": "第3章 斯托姆黑伊鲁篇", "location": "斯托姆黑伊鲁 Stormhail（禁忌圣堂）", "region": "winterlands", "level": "37", "boss": "副长库巴里" },
        { "no": "4", "title": "第4章（终章，需完成两条第3章）", "location": "无名村 Nameless Village（裂岩）", "region": "totohaha", "level": "45", "boss": "卡尔德娜队长；夜之卡尔德娜" }
      ],
      "tips": "治疗兼破盾核心：潜力「定罪」让全体魔法也能无视弱点削盾，挂学者后用加强的全体魔法可一次削多层盾，「揭发」也更容易成功。「Prayer for Plenty」与神官奥义可做超量回复，Heavenly Shine 是后期常见的爆发手段（社区的加尔德拉打法以此为核心）。属性防御坚果优先给他（回复量与属性防御挂钩）。"
    },
    {
      "id": "ochette",
      "name": "奥修特",
      "en": "Ochette",
      "job": "猎人",
      "region": "totohaha",
      "start": "兽人村 Beasting Village",
      "talent": "捕获/加工（Capture/Prepare）：战斗中可捕获魔物（对手 HP 越低越容易），之后在战斗中召唤其技能，或加工成食物类道具；最多持有 6 只，另有同伴兽阿卡拉（豺，识破武器弱点）或玛希娜（猫头鹰，识破属性弱点）二选一。",
      "pathDay": { "name": "唆使（Provoke）", "desc": "与镇民战斗，可击倒挡路的 NPC。" },
      "pathNight": { "name": "收服（Befriend）", "desc": "让镇民同行，可在战斗中召唤协助。" },
      "latent": "兽之力（Animal Instincts）：可不耗 SP 使用专属技能（如对全体的强力物理攻击 Beastly Claws 等）。",
      "exSkills": [
        "Indomitable Beast（提升自身物攻、回避、速度数回合）：带奥修特前往猎人祭坛「狩猎女王的祭坛 Altar of the Huntress」（西特洛甫霍普古道）",
        "Provoke Beasts（依次唆使多只已捕获魔物出手）：通关奥修特的个人剧情后习得"
      ],
      "chapters": [
        { "no": "1", "title": "第1章", "location": "兽人村 Beasting Village（主兽墓所）", "region": "totohaha", "level": "1", "boss": "夜晚来临之物" },
        { "no": "2", "title": "第2章 卡塔拉克塔篇（Cateracta）", "location": "康宁湾 Conning Creek（海神洞窟）", "region": "harborlands", "level": "15", "boss": "无（阿尔皮翁为唆使单挑）" },
        { "no": "2", "title": "第2章 提拉篇（Tera）", "location": "克拉克雷吉 Crackridge（地神的寝床）", "region": "wildlands", "level": "29", "boss": "提拉" },
        { "no": "2", "title": "第2章 古拉奇斯篇（Glacis）", "location": "斯托姆黑伊鲁 Stormhail（圣峰阿尔塔赫）", "region": "winterlands", "level": "37", "boss": "古拉奇斯" },
        { "no": "3", "title": "第3章（终章，需集齐三只传说魔物）", "location": "兽人村 Beasting Village（望月断崖）", "region": "totohaha", "level": "45", "boss": "悲月的拉加卡尔或玛拉玛奥尔（取决于第1章选择）" }
      ],
      "tips": "第1章选择同伴：阿卡拉（豺）或玛希娜（猫头鹰）；据社区整理，第3章的 Boss 形态与未选的那只有关。多捕获强力魔物：恐狼（奈落之城再次遭遇时可捕获）、海坊主（漩涡 Boss，之后海上夜间可遇）等都是后期主力召唤；隐藏 Boss 首次遭遇无法捕获，击败后在原迷宫随机重遇才能捕获。"
    },
    {
      "id": "castti",
      "name": "卡丝蒂",
      "en": "Castti",
      "job": "药师",
      "region": "harborlands",
      "start": "卡纳尔布来因 Canalbrine",
      "talent": "调合（Concoct）：在战斗中组合素材制作药剂，可回复、增益或攻击；默认 2 种素材，每消耗 BP 可多加 1 种，最多 5 种。",
      "pathDay": { "name": "打听（Inquire）", "desc": "从镇民处获取情报。" },
      "pathNight": { "name": "让人睡着（Soothe）", "desc": "让镇民睡着，可暂时清除挡路的 NPC。" },
      "latent": "节约（Every Drop Counts）：调合时不消耗素材。",
      "exSkills": [
        "Drastic Measures（单体强力斧击，并解除目标的异常与弱化，解除越多威力越高）：带卡丝蒂前往药师祭坛「灵药公的祭坛 Altar of the Charitable」（北康宁湾海道，需穿过浅滩）",
        "Remedy（随机给一名队友附加多个正面状态）：通关卡丝蒂的个人剧情后习得"
      ],
      "chapters": [
        { "no": "1", "title": "第1章", "location": "卡纳尔布来因 Canalbrine（水源）", "region": "harborlands", "level": "1", "boss": "多伦与贝伦" },
        { "no": "2", "title": "第2章 塞伊篇", "location": "塞伊 Sai（沙流之道、沙狮巢穴）", "region": "hinoeuma", "level": "17", "boss": "沙狮" },
        { "no": "2", "title": "第2章 凛芬镇篇", "location": "凛芬镇 Winterbloom", "region": "winterlands", "level": "24", "boss": "普拉克、米克与马克" },
        { "no": "3", "title": "第3章（需完成两条第2章）", "location": "无人村 Abandoned Village（利菲亚山）", "region": "brightlands", "level": "31", "boss": "无" },
        { "no": "4", "title": "第4章（终章）", "location": "汀巴雷因 Timberain（汀巴雷因城屋顶）", "region": "leaflands", "level": "45", "boss": "药师特洛索" }
      ],
      "tips": "万能后勤：调合可做全体回复、补 BP/SP、属性攻击；配合「扩散剂」可变为全体效果。潜力「节约」可免费反复使用珍贵素材，Boss 战前保持潜力满格。社区的加尔德拉等高难打法中，常用药师奥义配合道具为全队补 BP。"
    }
  ],

  "jobs": [
    { "name": "剑士", "en": "Warrior", "kind": "基础", "region": "hinoeuma", "where": "塞伊 Sai（镇内上方房屋）", "how": "首次进入公会得第1张职业证；第2张：队伍中有 1 人学会剑士奥义；第3张：有 2 人学会剑士奥义。", "weapons": "剑、枪", "features": "前排物理输出与坦克：Abide 蓄力、Stout Wall/Incite 嘲讽承伤、Vengeful Blade 反击削盾、奥义 Brand's Blade。支援技能 Summon Strength（物攻+50）、Latent Power Plus、Deal More Damage（伤害上限提升到 99,999，后期必备）。" },
    { "name": "商人", "en": "Merchant", "kind": "基础", "region": "wildlands", "where": "西克拉克雷吉荒道 Western Crackridge Wilds", "how": "首次进入公会得第1张；第2张支付 100,000 叶；第3张支付 300,000 叶。", "weapons": "枪、弓", "features": "Collect 从敌人身上收钱、Donate BP 送 BP、Sidestep 闪避物理、Rest 回复、Hired Help 花钱召唤佣兵（伤害与能力无关，后期常用于破盾与清杂）；奥义 Bifelgan's Bounty。支援技能含 Grows on Trees、Boost-Start、Hang Tough、Full Power。" },
    { "name": "盗贼", "en": "Thief", "kind": "基础", "region": "brightlands", "where": "轮敦 Clockbank 工厂街（从入口左侧连续上楼，再下楼绕到被木箱遮住的门；会长只在夜晚出现）", "how": "首次与会长交谈得第1张；第2张：把白天轮敦入口广场老人持有的「盗贼的宝石」交给会长；第3张：把分隔之海「女帝的骸骨船 Shipwreck of the Empress」（Lv48）红色宝箱中的「盗贼王的蓝宝石」交给会长。", "weapons": "剑、短剑", "features": "战斗中偷取、HP Thief 吸血、Armor Corrosive/Shackle Foe 降防降速等削弱；奥义 Aeber's Reckoning。支援技能含 Fleetfoot、Incidental Attack 等。" },
    { "name": "舞娘", "en": "Dancer", "kind": "基础", "region": "leaflands", "where": "威尔格罗布 Wellgrove（城镇北侧舞娘公会）", "how": "首次与会长交谈得第1张；第2张：有 1 人学会舞娘奥义；第3张：有 2 人学会舞娘奥义。", "weapons": "短剑", "features": "Lion Dance（物攻提升）、Peacock Strut、Stimulate 等单体增益与随机效果的 Bewildering Grace；奥义 Sealticge's Seduction 让下一个技能变为全体。支援技能 Hard Worker 可提升 JP 获取。" },
    { "name": "猎人", "en": "Hunter", "kind": "基础", "region": "totohaha", "where": "西特洛甫霍普古道 Western Tropu'hopu Traverse（需穿过树荫）", "how": "首次进入得第1张；第2张：「流沙魔物的肝脏」，击败日之野西塞伊沙路「流沙监牢」（Lv30）的沙漠虫获得；第3张：「大海魔物的触须」，击败分隔之海漩涡中的海坊主获得。", "weapons": "斧、弓", "features": "Thunderbird 多段弓击、Leghold Trap 降低敌人行动顺序、Take Aim 等；奥义 Draefendi's Bow。支援技能 Salt the Wound（破防后追加行动）非常强力。" },
    { "name": "药师", "en": "Apothecary", "kind": "基础", "region": "harborlands", "where": "康宁湾 Conning Creek（城镇南侧、旅店下方的房屋）", "how": "首次与会长交谈得第1张；第2张：交付 3 个「芸香花蕾」（新德尔斯塔平原夜间黑市有售，也可从特定魔物取得）；第3张：交付 3 个「古代角药」，可在叶之地韦罗斯家的宅邸（House Wellows Manor，Lv50）从恶魔鹿偷取或掉落，偷取较稳。", "weapons": "斧", "features": "不用杖也能奶：Healing Touch、Replenish Health 回复，Rehabilitate 解异常，Poison Axe/Weak to Poison 毒系输出；奥义 Dohter's Charity。支援技能 Vigorous Victor、Inspiriting Break。" },
    { "name": "神官", "en": "Cleric", "kind": "基础", "region": "crestlands", "where": "国境大瀑布 Borderfall（左上房屋教堂）", "how": "首次进入得第1张；第2张：「大神官的护符」，在叶之地南库罗普提尔森道乘小船到「星落之泉 Starfall Spring」，击败人面蝶后红色宝箱获得；第3张：「大神官的圣典」，冬之地南斯托姆黑伊鲁雪道「巨壁的地下洞」→「奈落之城」（Lv55）击败恐狼掉落。", "weapons": "杖", "features": "回复与光属性：Heal Wounds、Revive、Sacred Shield 吸收伤害、Holy Light/Luminescence 光属性攻击；奥义 Aelfric's Blessing（让目标在回合末追加一次行动）。支援技能含 Resilience、Rise Again 等。" },
    { "name": "学者", "en": "Scholar", "kind": "基础", "region": "winterlands", "where": "西凛芬镇雪道 Western Winterbloom Snows（一直向左走到底再往上的屋子）", "how": "首次进入得第1张；第2张：5 个「古代魔导机的核心」，在明之地「噬船之口 Sunken Maw」偷取古代遗物（兽）类敌人；第3张：5 个「全能精灵石」，偷取各类元素怪（推荐被遗弃的水路的冰元素）。", "weapons": "杖", "features": "火/冰/雷基础魔法、Elemental Barrage 多属性、Analyze 看弱点、Advanced Magic 强化魔法；奥义 Alephan's Wisdom。支援技能 Extra Experience（经验提升）适合练级。" },
    { "name": "发明家", "en": "Inventor", "kind": "隐藏", "region": "brightlands", "where": "东新德尔斯塔街道 Eastern New Delsta Highroad 东北角河边的红色小屋（新德尔斯塔东出口）", "how": "与发明家安卡（Arkar）对话即可取得唯一一张传承证，同时开启支线「天才发明家」。技能不靠 JP 学习：需收集指定素材（如 Rainbow Glass Bottle、Scrap Metal、Natural Magnetite、Ancient Cog、Mythical Horn、Tin Toy，部分发明还需特定武器）交给 Arkar 完成新发明才能解锁。", "weapons": "剑、斧", "features": "发明不耗 SP、用后需若干回合重新制作；Changeable Catapult 可选任意武器属性攻击全体，Springy Boots/Hastening Hammer 调整行动顺序。支援技能「先驱 A Step Ahead」（战斗开始时先手行动）是前期强力被动，建议最早取得的隐藏职业。" },
    { "name": "武器大师", "en": "Armsmaster", "kind": "隐藏", "region": "wildlands", "where": "格拉维尔 Gravell（记录点右侧锻造屋）", "how": "先取得任意一把生锈武器（最容易的是「生锈之剑」：在欧兹拉修武器店向绿帽 NPC 购买/偷取「结实的鹤嘴锄」，交给凛芬镇支线「石中剑」的委托人获得），再用比试/唆使/偷袭等击倒门口挡路的人，进屋与退休锻造师波尔塔（Porta）对话取得传承证。", "weapons": "剑、枪、短剑、斧、弓、杖（全六种）", "features": "唯一能用全部武器的职业，Sixfold Strike 一次打六种武器弱点。其余技能需把各地找到的生锈武器交给 Porta 修复成神兵并装备该武器才能使用。支援技能含 Master of Offense 等。" },
    { "name": "咒术师", "en": "Conjurer", "kind": "隐藏", "region": "hinoeuma", "where": "库国 Ku 库城入口东侧的「五重塔 Five-Tiered Tower」", "how": "通关光的个人剧情后开放；连续挑战五层各一名 Boss（无杂兵，层间可存档、可离开整备），击败顶层「祭司帝丙午神乐 Priestess Hinoekagura」后获得传承证并完成支线「A Tower of Trials」（据 3DM 另得 20,000 叶与一件防具）。", "weapons": "弓、杖", "features": "Conjure 系技能让我方普通/武器攻击追加火/冰/雷/风一击，帮助打属性弱点；Prayer for Rain、Rite of the Sun、Dance of Immunity 等辅助，奥义 BP Boost。支援技能 SP Saver、BP Regeneration 等。" },
    { "name": "魔术师", "en": "Arcanist", "kind": "隐藏", "region": "sundering_sea", "where": "分隔之海「魔途之岛 The Lost Isle」（Lv45）", "how": "需先通过帕尔提提欧「商机的气息·特洛甫霍普篇」花 10 万叶买船；出海击败漩涡中的海坊主进入东侧海域后驶向魔途之岛，爬上梯子到告示牌处，切换夜晚，沿左侧隐约发光的隐形道路前进，与「魔导士的后裔」对话取得传承证。", "weapons": "短剑、杖", "features": "Seal of Diffusion 把增益扩散给全队、Seal of Inversion 把弱化转为增益、Seal of Immortality 延续效果，Reflective Barrier 反射魔法，并有光/暗属性攻击；被普遍认为是最值得取得的隐藏职业之一。" }
  ],

  "crossedPaths": [
    {
      "name": "学者与商人（The Scholar & Merchant）",
      "characters": "奥斯瓦尔德 & 帕尔提提欧",
      "unlock": "上篇：两人都完成各自第2章；下篇：两人都完成各自最终章。",
      "parts": [
        { "part": "上篇", "location": "新德尔斯塔 New Delsta", "region": "brightlands", "level": "8", "boss": "无" },
        { "part": "下篇", "location": "蒙特维斯 Montwise（图书馆）", "region": "crestlands", "level": "45", "boss": "无" }
      ],
      "reward": "上篇：两人帮助奥斯瓦尔德的旧识、天文学家雷古鲁斯（Regulus）完成其发明；下篇：前往蒙特维斯协助他寻回失窃的发明。完成两篇是最终章的解锁条件之一（具体道具奖励未核实）。"
    },
    {
      "name": "舞娘与剑士（The Dancer & Warrior）",
      "characters": "阿格妮娅 & 光",
      "unlock": "上篇：两人都完成各自第2章；下篇：两人都完成各自最终章。",
      "parts": [
        { "part": "上篇", "location": "沙粒之村 Ryu", "region": "hinoeuma", "level": "8", "boss": "无" },
        { "part": "下篇", "location": "库国 Ku（城下町、宁静洞窟 Tranquil Grotto）", "region": "hinoeuma", "level": "45", "boss": "尤米（光单挑）" }
      ],
      "reward": "上篇：夜晚寻找弹奏琵琶的乐师尤米（Yomi），需讨要马尾毛修琴；下篇：在库国筹备慰灵祭，前往宁静洞窟找到尤米并由光与其一对一战斗。完成后为最终章条件之一。"
    },
    {
      "name": "神官与盗贼（The Cleric & Thief）",
      "characters": "泰米诺斯 & 索洛奈",
      "unlock": "上篇：两人都完成各自第2章；下篇：两人都完成各自最终章。",
      "parts": [
        { "part": "上篇", "location": "弗拉姆教堂村 Flamechurch（大圣堂）", "region": "crestlands", "level": "16", "boss": "无" },
        { "part": "下篇", "location": "康宁湾 Conning Creek（月与太阳洞窟 Cavern of the Moon and Sun）", "region": "harborlands", "level": "45", "boss": "无" }
      ],
      "reward": "上篇取得「模糊的镜子碎片」；下篇持有碎片与「折起的纸」进入月与太阳洞窟，完成后取得「模糊的镜子 Cloudy Mirror」。"
    },
    {
      "name": "药师与猎人（The Apothecary & Hunter）",
      "characters": "卡丝蒂 & 奥修特",
      "unlock": "上篇：卡丝蒂完成两条第2章、奥修特至少完成一条第2章后开放；下篇：两人都完成各自最终章。",
      "parts": [
        { "part": "上篇", "location": "库罗普提尔 Cropdale（兽道 Animal Trail）", "region": "leaflands", "level": "16", "boss": "狂暴杜欧尔杜欧尔" },
        { "part": "下篇", "location": "库罗普提尔 Cropdale（兽道 Animal Trail）", "region": "leaflands", "level": "45", "boss": "怪异的影子（奥修特单挑）；潜伏之影" }
      ],
      "reward": "上篇：在库罗普提尔调查狩猎歉收，进入森林遇到多尔朵尔（duorduor）「Wooly-Ooly」；下篇：再访时发现森林异状并前往兽道解决。完成后为最终章条件之一（具体道具奖励未核实）。"
    }
  ],

  "finale": {
    "title": "最终章「通往黎明的旅程」（Journey for the Dawn / Extra Stories，共 Part 1~3）",
    "unlock": "完成 8 位主角全部个人剧情，并完成 4 组交汇篇（上下篇共 8 段）后，前往叶之地「南库罗普提尔森道 Southern Cropdale Trail」的营地（地图显示 Extra Stories 绿色标记）即可开始。开始前会弹出警告：进入后可做的事会受限，支线需在此之前或通关后再做，强烈建议另存一个存档。游戏推荐等级 55，社区建议最终战 60 级以上并备齐最佳装备。",
    "steps": [
      "Part 1：在南库罗普提尔森道营火处观看剧情，八人汇合；之后可随时在菜单中自由编排全部 8 人，世界陷入长夜，直到击败最终 Boss 前都无法回到白天。",
      "Part 2（四处可任意顺序）·纹之地：传送到弗拉姆教堂村，剧情后立即与 Arcanette 战斗；进入大圣堂可取得 Tanzy 的日记，队伍中带泰米诺斯与索洛奈，在应燃起蓝色火焰的火炬处使用道具栏里发光的「闪亮的镜子（Shiny Mirror）」。",
      "Part 2·托托哈哈岛：从兽人村向东进入「守护兽之墓 Tombs of the Wardenbeasts」，在深处击败 Grotesque Monster，带卡丝蒂与奥修特对火炬使用镜子。",
      "Part 2·荒野之地：从克拉克雷吉向东进入「落日遗迹 Fellsun Ruins」，收集 13 张日记残页，带帕尔提提欧与奥斯瓦尔德对火炬使用镜子。",
      "Part 2·日之野：从库国向东进入「宁静洞窟 Tranquil Grotto」，带光与阿格妮娅对火炬使用镜子。",
      "Part 3：四处蓝色圣火点亮后，世界地图上的光柱指向分隔之海中央的「Vidania（众神之战场）」；从卡纳尔布来因等最近的港口乘自家船出航。岛上有存档点且无随机遇敌，城堡内一路向上即可到达最终 Boss。",
      "最终战：先用当前出战 4 人作战，战斗中途前排 4 人会被邪神吞没，改由后备 4 人继续；进入第二形态后 8 人同时在场，可在两组之间切换行动。",
      "击败后光明恢复，可带全部 8 人继续自由游玩；回到南库罗普提尔森道营火处调查即可观看尾声（Epilogue）——看尾声前先把想做的支线做完。"
    ],
    "bosses": [
      { "name": "Arcanette", "weakness": ["枪", "斧", "冰", "雷"], "tips": "会召唤「夜之仆从（Servants of the Night）」守护自身弱点，优先击杀召唤物再破本体盾；召唤物多弱光，带神官/魔术师的全体光属性攻击，学者 Analyze 可快速看清召唤物弱点。" },
      { "name": "Grotesque Monster（守护兽之墓）", "weakness": ["斧", "弓", "冰", "光"], "tips": "托托哈哈岛路线的守关 Boss，带猎人/斧系角色与光属性魔法即可稳定破盾。" },
      { "name": "邪神 Vide（第一形态，社区译名「伍迪」）", "weakness": ["剑", "斧", "杖", "雷", "光"], "tips": "本体中途会变更弱点（攻略记录为弓、火、暗）；身边最多 4 条触手，各自弱点不同，用全体多段攻击（佣兵召唤、光的全体习得技能、魔石类道具）同时削盾。中途前排 4 人被吞没，后备队必须同样具备治疗与输出，编队时两组都要均衡。" },
      { "name": "邪神 Vide the Wicked（第二形态）", "weakness": ["剑", "短剑", "弓", "风", "光"], "tips": "左右两臂各有弱点且会变化。8 人同时在场但每回合只能 4 人行动，Boss 只攻击最后行动的那一组，回合末要让耐打的一组最后行动。HP 降低后会施放「Eternal Night（永夜）」使我方无法复活，务必保持血量；将其破防可暂时解除永夜，趁机复活队友。攻略站推荐让帕尔提提欧或阿格妮娅挂魔术师：前者 Sidestep+Seal of Diffusion 全队闪避物理，后者潜力扩散 Reflective Barrier 防魔法。" }
    ],
    "rewards": "通关真结局：世界重回白昼、全员可自由编队继续游玩，可在营火处观看尾声与制作人员名单。之后仍可挑战隐藏 Boss 加尔德拉等终盘内容。"
  },

  "exBosses": [
    { "name": "人面蝶（Monarch）", "region": "leaflands", "location": "星落之泉 Starfall Spring（南库罗普提尔森道乘小船前往）", "level": "15", "how": "迷宫最深处的固定 Boss。", "tips": "弱点：枪、短剑、弓、暗。身后红色宝箱为「大神官的护符」（神官第2张职业证）。" },
    { "name": "蠢动的大花（Carnivorous Plant）", "region": "brightlands", "location": "被遗弃的水路（Abandoned Walkway）", "level": "20", "how": "迷宫深处的固定 Boss。", "tips": "弱点：剑、火、冰、光。该迷宫的冰元素可偷取「全能精灵石」（学者第3张证素材）。" },
    { "name": "沙漠虫（Lord of the Sands）", "region": "hinoeuma", "location": "流沙监牢 Quicksand Gaol（西塞伊沙路）", "level": "30", "how": "迷宫深处的区域 Boss。", "tips": "弱点：剑、短剑、斧、冰、光。击败获得「流沙魔物的肝脏」（猎人第2张职业证）。" },
    { "name": "戴特摩尔（Manymaws）", "region": "wildlands", "location": "未完工的隧道 Unfinished Tunnel", "level": "34", "how": "支线「The Cave Monster」相关，击败即完成该支线，守护「Enfeebling Amulet」。", "tips": "每回合 2 动，开场即施放毒/沉默/失明/混乱/睡眠的 Foul Odor，带防异常饰品与解状态手段；低血量后变异并改变弱点。" },
    { "name": "历战之鲛（Battle-Worn Shark）", "region": "sundering_sea", "location": "分隔之海西侧海域（白天出海遭遇）", "level": "34（海域等级，社区建议平均 50 级）", "how": "购船后在海上触发，击败一次后白天可在海上随机遇到并捕获。", "tips": "两阶段弱点不同（一阶枪、短剑、杖、火；二阶剑、短剑、斧、雷）。被奥修特捕获后可作强力全体攻击召唤兽。" },
    { "name": "基加提亚斯（Gigantes）", "region": "sundering_sea", "location": "无名孤岛 Nameless Isle（兽人之滨停泊处向北航行）", "level": "38", "how": "迷宫终点 Boss；支线「From the Far Reaches of Hell」需在此击败它后向出现的 Georges Lazuli 获取情报。", "tips": "弱点：剑、弓、火、冰、雷。开场使用 Harden 提高护盾且每次行动继续叠盾，要尽早集中 BP 多段攻击破防。" },
    { "name": "噬梦（Devourer of Dreams）", "region": "crestlands", "location": "无缘墓地 Forsaken Graveyard", "level": "40", "how": "迷宫深处的固定 Boss。", "tips": "弱点：剑、斧、杖、风。" },
    { "name": "试刀杀人的卡鲁马（Karma）", "region": "hinoeuma", "location": "腐朽的寺院 Decaying Temple（东塞伊沙路）", "level": "40", "how": "支线相关 Boss。寺院红色宝箱内有商人传说武器「火龙之矛」。", "tips": "弱点：枪、短剑、斧、杖、冰、雷，弱点多，全体多段攻击即可快速破防。" },
    { "name": "亚耶罗巴特（Heavenwing）", "region": "brightlands", "location": "旧钟楼 Old Clock Tower", "level": "44", "how": "支线「For Whom the Clock Tower Tolls」中击败，首杀掉落「Gale Feather」。", "tips": "弱点：剑、枪、斧、弓、雷。会布置持续灼烧的 Flame Prison 并降我方攻防，蓄力 Crimson Flame 前务必破防。" },
    { "name": "贝西摩斯（Behemoth）", "region": "totohaha", "location": "陨落的遗迹 Sinking Ruins", "level": "46", "how": "迷宫深处的可选 Boss。", "tips": "弱点：枪、斧、弓、冰。会石化单人并用 Shatter 击碎石化者，还有让全员 HP 变 1 的 Rift，需带石化防护/解除与全体回复。" },
    { "name": "梅伊尔史多洛姆（Deep One）", "region": "wildlands", "location": "白色幽谷 Ivory Ravine", "level": "50", "how": "支线「The Missing Girl」需击败它，首杀掉落「Eye of Calamity」。", "tips": "开场开始「灾厄」倒计时：第一到第五灾厄造成比例伤害，第六灾厄全员 HP 变 1，随后蓄力「Great Calamity」造成 9999 固定伤害，必须在此之前破防或击杀。半血后每回合 2 动、护盾上限提高并改变弱点（社区记录一阶剑、斧、火、光，二阶枪、短剑、弓、冰）。" },
    { "name": "翼蜥蜴重型种（Tyrannodrake）", "region": "sundering_sea", "location": "恶食之巢 Curious Nest", "level": "52", "how": "迷宫深处守护宝物的可选 Boss。", "tips": "「Adaptive Evolution」：被打中的弱点会被移除（只剩一个时不再移除），并会变异改变弱点；Rotting Breath 会削减最大 HP。尽量一回合用多种武器一口气破防（武器大师 Sixfold Strike 很合适）。" },
    { "name": "恐狼（Dreadwolf）", "region": "winterlands", "location": "巨壁的地下洞 → 奈落之城 Infernal Castle（南斯托姆黑伊鲁雪道）", "level": "55", "how": "迷宫最深处 Boss；巨壁的地下洞需引导/带领 3 名居民走过桥才会掉入。", "tips": "弱点：枪、斧、弓、火、风。掉落「大神官的圣典」（神官第3张证），后方红色宝箱为学者传说武器「真理之秘石」。首战无法捕获，之后在奈落之城随机重遇可捕获，是奥修特最强召唤兽之一（全体 4 次短剑攻击并降防）。" },
    { "name": "海坊主（Scourge of the Sea）", "region": "sundering_sea", "location": "分隔之海右下（东南）方的大漩涡", "level": "社区建议平均 50 级", "how": "购船后驶入漩涡触发；击败后可进入东侧海域（魔途之岛、？？？岛等），之后夜间出海可随机重遇并捕获。", "tips": "两阶段（一阶剑、斧、杖、火、光；二阶短剑、弓、雷、暗），HP 约 10 万。掉落「大海魔物的触须」（猎人第3张证）。捕获后其召唤技「左直拳」可无视弱点一次削 6 层盾。" },
    { "name": "五重塔五连战（Gken / Ichchadhari / Tyran / Auðnvarg / Priestess Hinoekagura）", "region": "hinoeuma", "location": "库国 五重塔 Five-Tiered Tower", "level": "终盘（光通关后开放）", "how": "通关光的个人剧情后进入，每层一名 Boss，层间可存档并离开整备。", "tips": "一层老剑士戈更（短剑、弓、风）；二层耍蛇人伊查达力（枪、短剑、弓、雷）；三层求道者泰兰（剑、弓、火、暗）；四层阿武山座狼（一阶斧、弓、火、光，二阶剑、杖、雷、风）；顶层祭司帝丙午神乐 HP 20 万、护盾 7→10→13（一阶枪、弓、冰、暗，二阶斧、杖、风、光）。击败后获得咒术师。" },
    { "name": "加尔德拉（Galdera, the Fallen，社区译名「加尔戴拉」）", "region": "sundering_sea", "location": "？？？岛 → 异界之门 Gate of Finis（托托哈哈岛以东海域）", "level": "社区建议 60~75 以上", "how": "完成三个支线：「旅行者的包 The Traveler's Bag」（东新德尔斯塔街道路牌旁的 Al，夜晚击败篝火边的盗贼取回包）、「世界三大奇书 Procuring Peculiar Tomes」（蒙特维斯图书馆，收集三本书：兽人村探险家、南斯托姆黑伊鲁雪道 NPC、克拉克雷吉守门人屋内宝箱）、「From the Far Reaches of Hell（边狱之书）」（无名孤岛击败基加提亚斯后向 Georges 获取解读未知语言的情报交给 Al）。之后乘船到？？？岛，门已开启，与 Al 对话开启支线「A Gate Between Worlds」。", "tips": "本作最强 Boss，与一代相同分两队作战。第一战 Omniscient Eye（弱点短剑、斧、杖、雷、光，HP 约 60 万）+ 三个亡魂：亡魂未清空前打不到眼球，且建议同一回合内击破三个亡魂，否则会复活/反击；眼球会清除我方增益，低血量时吞噬亡魂、护盾翻倍。第二战加尔德拉本体（弱点枪、短剑、弓、冰）连同大剑、头盔、裂地之手等部位，部位全灭后本体护盾大增、一回合多动。社区常用：先驱先手 + BP 道具轮转、灵药公/神官奥义叠 Buff、恐狼唆使与佣兵召唤全体输出、泰米诺斯 Heavenly Shine 爆发。奖励「Spurning Ribbon」（装备后不再遇敌）。" }
  ],

  "routes": [
    { "stage": "开局 Lv1-10", "plan": "选择初始角色（初始主角在通关个人剧情前不能离队，社区常推荐索洛奈：地图指令实用且剧情首尾都在新德尔斯塔）。完成自己的第1章后按地理顺序拜访其余 7 人的第1章城镇（游民星空流程示例：寒岬村 → 弗拉姆教堂村 → 新德尔斯塔 → 乘船到兽人村 → 卡纳尔布来因 → 沙粒之村 → 欧兹拉修 → 库罗普提尔），全员第1章推荐等级都是 Lv1。途中顺手在东新德尔斯塔街道取得发明家，并访问各公会拿第1张职业证；完成索洛奈第2章蛇母篇（Lv7）。" },
    { "stage": "前期 Lv10-20", "plan": "全员第1章打完后队伍一般在 15~20 级。依次推进：阿格妮娅第2章（14）、泰米诺斯第2章（14）、光第2章（15）、奥修特卡塔尔奥库塔篇（15）、索洛奈蛇父篇（16）、卡丝蒂塞伊篇（17）、帕尔提提欧第2章（18）、奥斯瓦尔德第3章（18）、阿格妮娅第3章（20）。两人第2章都完成后开启交汇篇上篇（学者&商人、舞娘&剑士 Lv8，神官&盗贼、药师&猎人 Lv16）。可去星落之泉打人面蝶拿神官第2张证。" },
    { "stage": "中期 Lv20-32", "plan": "泰米诺斯克拉克雷吉篇（24）、卡丝蒂凛芬镇篇（24）、光第3章（26）、奥修特提拉篇（29），随后索洛奈两条第3章（31）与卡丝蒂第3章（31）。在凛芬镇做「石中剑」拿生锈之剑并去格拉维尔取得武器大师；完成「商机的气息」攒 10 万叶买船，出海后可打历战之鲛、无名孤岛等。" },
    { "stage": "中后期 Lv32-45", "plan": "阿格妮娅第4章（34）、帕尔提提欧第3章（35）、奥斯瓦尔德第4章（36）、泰米诺斯斯托姆黑伊鲁篇（37）、奥修特古拉奇斯篇（37）、光第4章（39）。击败漩涡海坊主进入东侧海域取得魔术师；可挑战旧钟楼、无缘墓地、腐朽的寺院等 Lv40~44 迷宫与 Boss 刷装备。" },
    { "stage": "后期 Lv45-55", "plan": "所有终章推荐 Lv45：光第5章、阿格妮娅第5章、帕尔提提欧第4章、奥斯瓦尔德第5章、索洛奈第4章、泰米诺斯第4章、奥修特第3章、卡丝蒂第4章，通关后各自获得第2个 EX 技能；然后完成四组交汇篇下篇（Lv45）。光通关后挑战五重塔取得咒术师；可挑战陨落的遗迹、白色幽谷、恶食之巢、奈落之城等高难迷宫。" },
    { "stage": "终盘 Lv55+", "plan": "准备好最佳装备与八人两套均衡编队后，从南库罗普提尔森道营地开启最终章（推荐 55，社区建议 60+），完成四处圣火后前往 Vidania 击败邪神。之后完成三条前置支线挑战加尔德拉（建议 60~75+），并收集所有生锈武器与发明素材。" }
  ],

  "systems": [
    "昼夜切换：在城镇与野外可随时切换白天/夜晚（部分剧情中除外）。时间带会改变镇民位置与种类、可用的地图指令，以及部分固有能力（索洛奈「暗夜的加护」、泰米诺斯「月光审判」仅在夜晚生效）；夜晚野外敌人更强，适合练级。",
    "地图指令（Path Actions）：每位主角白天、夜晚各有一个地图指令，可获取道具（偷取/购买/讨要/抢夺）、情报（探查/打听/收买/揭发）、带领镇民同行（引导/诱惑/雇佣/收服）或打倒/清除 NPC（比试/唆使/偷袭/让人睡着）。带成功率的指令失败会降低该城镇声望，可在酒馆付钱恢复；据攻略站说明夜间指令不会影响声望。",
    "破防与增幅（Break & Boost）：敌人有护盾值，用其弱点武器/属性攻击可削盾，削到 0 即「破防」——敌人跳过行动且受到伤害提升。每回合获得 1 点 BP（上限 5），一次最多投入 3 BP 增幅技能威力或攻击次数；把握在 Boss 蓄力大招前破防是核心技巧。",
    "潜力（Latent Power）：本作新增，击败各主角第1章 Boss 后解锁。受到伤害或破防敌人时积累潜力槽，满后可发动角色专属能力（如索洛奈 2 动、帕尔提提欧补满 BP、泰米诺斯无视弱点削盾、阿格妮娅单体变全体等）。旅店休息可回满潜力。",
    "同行 NPC 与雇佣兵：通过引导/诱惑/雇佣/收服带领的镇民可在战斗中召唤协助；阿格妮娅、帕尔提提欧还会从同行者处获得固有能力加成。商人技能「佣兵召唤（Hired Help）」花叶币召唤佣兵，伤害与使用者能力无关，后期仍很实用。",
    "副职业与职业证：基础职业需找到各地公会取得职业证，第1张进入公会即得，第2、3张需完成公会给出的任务（每个基础职业最多 3 张，可让 3 人同时担任）；隐藏职业只有 1 张。副职业提供武器、技能与能力加成，学会一定数量技能后解锁支援技能（Support Skills）。主角无法使用副职业对应的地图指令与固有能力。",
    "守护神祭坛与 EX 技能：每位主角有 2 个只属于自己的 EX 技能——第1个带本人前往对应职业的守护神祭坛（多在公会附近）习得，第2个在通关该主角个人剧情后习得。隐藏职业没有祭坛与 EX 技能。",
    "船只与分隔之海：完成帕尔提提欧「商机的气息·特洛甫霍普篇」花 10 万叶买下船「Grand Terry」后可自由航海。海上有无名孤岛、女帝的骸骨船、恶食之巢、魔途之岛、？？？岛等可选地点和随机遭遇的海上 Boss；击败大漩涡中的海坊主后才能进入东侧海域。",
    "商机的气息与收藏：帕尔提提欧的专属外传共 3 篇。凛芬镇篇完成后各酒馆可用留声机点播原声音乐；塞伊篇完成后可阅读记载世界观的《商人手稿》。",
    "捕获与调合：奥修特可捕获魔物并在战斗中召唤（Boss 级魔物每场限一次、需满 BP），也可加工成肉干等道具；卡丝蒂用素材调合药剂，消耗 BP 可追加素材，配「扩散剂」可变为全体效果。",
    "交汇篇与最终章：两位相关主角都完成第2章后可开启交汇篇上篇，都完成个人剧情后开启下篇；8 人主线与 4 组交汇篇全部完成后，最终章在南库罗普提尔森道开启。"
  ],

  "tips": [
    "道具在本攻略里用统一的名字：治愈葡萄回复体力，醒神李子回复法力（SP），活力石榴回复增幅点（BP），还魂橄榄让倒下的人站起来，回春果酱同时补体力与法力，复苏果酱连增幅点一起补满，底力荔枝回复潜力。后面的（大）是一份更足的，（特大）是最大的一份；葡萄「串」和李子「篮」则是给全队用的。能力坚果按加成来记：体魄是体力、精神是法力、锋芒是物理攻击、铁壁是物理防御、魔导是属性攻击、抗魔是属性防御、鹰眼是命中、轻身是回避、会心是暴击、迅捷是速度。",
    "多存档：偷取、探查等有成功率的行动前先存档，失败后读档重试，避免掉声望。",
    "推荐推进顺序：先把八人的第1章全部打完并探索沿途城镇，再按推荐等级由低到高交错推进各人章节，避免单人主线推进过快导致等级失衡或卡关。",
    "前期强化：早拿发明家（东新德尔斯塔街道），其支援技能「先驱 A Step Ahead」可让战斗开场先手；用索洛奈偷取、奥斯瓦尔德抢夺、阿格妮娅讨要高等级城镇 NPC 的装备，能大幅提升前期战力。",
    "必拿神兵：武器大师的生锈武器修复后是顶级武器；各公会还记录了传说武器线索，例如商人「火龙之矛」（东塞伊沙路腐朽的寺院红箱）、猎人「破魔之弓」（汀巴雷因城前广场守塔老兵身上）、盗贼「噬月短剑」（遗种镇入口）、学者「真理之秘石」（奈落之城 Boss 后红箱）、药师「双刃战斧」（康宁湾西南海上红箱）、舞娘「快乐背心」（康宁湾郊外支线「少女的心愿」）、神官「天使魔鬼之杖」（西克拉克雷吉荒道，夜晚等到黎明出现的小孩处用泰米诺斯揭发得到线索）。",
    "伤害上限：后期主力输出务必装备剑士支援技能「Deal More Damage」（伤害上限 99,999），否则对高 HP Boss 输出会被 9999 卡死。",
    "夜战组合：索洛奈「暗夜的加护」强化我方 + 泰米诺斯「月光审判」削弱敌方，两人同队并在夜晚作战收益极高。",
    "破盾思路：学者 Analyze 或奥斯瓦尔德预习先看弱点；泰米诺斯潜力「定罪」+ 学者全体魔法可一次削多层盾；武器大师 Sixfold Strike、商人佣兵召唤、海坊主「左直拳」都能无视或覆盖大量弱点。",
    "练级：挂学者支援技能 Extra Experience 增加经验，舞娘 Hard Worker 增加 JP；夜晚野外敌人更强、收益更高。遇到背着袋子的猫「凯特琳（Cait）」回避极高，用魔法击杀可得大量奖励。社区流传的高效方法还有带领特定 NPC（如威尔格罗布的贵族阿尔伦多）到高等级迷宫利用其召唤技能获取大量经验（细节以实测为准）。",
    "刷钱：商人 Collect 收集敌人身上的叶币、支援技能 Grows on Trees 提高战后叶币；帕尔提提欧雇佣有卖出加成的镇民后出售偷来的高价装备；后期高等级迷宫的宝箱与掉落也能快速回本。买船（10 万）和商人第2/3张证（10 万/30 万）是主要开销。",
    "属性坚果：先确定每人的副职业和装备再吃，避免能力溢出浪费；社区建议属性攻击给学者、属性防御给神官、速度与回避给盗贼。",
    "最终章前准备：最终章开始后支线与大部分行动受限，务必先完成想做的支线、购物、祭坛与职业证，并另开存档；最终战使用全部 8 人，后备 4 人也要配好职业与装备。",
    "捕获隐藏 Boss：贝西摩斯、梅伊尔史多洛姆、恐狼等可选 Boss 首次击败后，会以约 3% 概率在原迷宫作为随机遭遇出现，此时才能被奥修特捕获。"
  ]
});

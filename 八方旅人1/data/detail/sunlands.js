OT2.addDetail("sunlands", {
  "sunshade": {
    "theme": "town",
    "size": [100, 70],
    "note": "建在巨岩岩檐下的城镇：左下（西南）是城镇入口，入口大道向东延伸，中段台阶上到酒馆前广场；西街向西经过舞娘宿舍、旅店小巷，尽头是桑谢德地下道入口；西北角小巷有明星舞娘与莉亚。宝箱与隐藏物位置参照 h1g/toragame，建筑相对位置为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [100, 0], [100, 6], [80, 8], [60, 5], [40, 8], [20, 5], [0, 7]], "label": "巨岩岩檐" },
      { "kind": "building", "rect": [46, 10, 22, 18], "label": "酒馆" },
      { "kind": "plaza", "circle": [56, 36, 5], "label": "酒馆前" },
      { "kind": "building", "rect": [22, 36, 14, 10], "label": "舞娘宿舍" },
      { "kind": "building", "rect": [38, 40, 9, 7], "label": "武器店" },
      { "kind": "house", "rect": [62, 40, 10, 7] },
      { "kind": "building", "rect": [2, 36, 10, 8], "label": "旅店" },
      { "kind": "building", "rect": [2, 50, 9, 6], "label": "道具店" },
      { "kind": "house", "rect": [76, 40, 9, 7] },
      { "kind": "house", "rect": [72, 56, 9, 7] },
      { "kind": "house", "rect": [86, 52, 9, 7] },
      { "kind": "house", "rect": [24, 62, 8, 6], "label": "上锁民家" },
      { "kind": "house", "rect": [30, 14, 10, 8] },
      { "kind": "sand", "rect": [40, 60, 28, 10] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [18, 60], [34, 56], [56, 52], [72, 50], [90, 48]], "label": "入口大道（下街）" },
      { "kind": "stairs", "pts": [[56, 52], [56, 41], [56, 36]], "label": "台阶上到酒馆前" },
      { "kind": "main", "pts": [[56, 36], [57, 29]] },
      { "kind": "main", "pts": [[56, 36], [42, 33], [28, 32], [14, 30], [2, 28]], "label": "西街（往地下道）" },
      { "kind": "minor", "pts": [[18, 60], [14, 50], [14, 40], [14, 30]], "label": "旅店小巷" },
      { "kind": "minor", "pts": [[28, 32], [26, 22], [18, 14], [8, 10]], "label": "西北小巷" },
      { "kind": "minor", "pts": [[28, 32], [29, 41]] },
      { "kind": "stairs", "pts": [[34, 56], [40, 50], [42, 47]], "label": "宿舍东侧台阶" },
      { "kind": "minor", "pts": [[34, 56], [30, 60], [28, 63]], "label": "镇口民家" },
      { "kind": "minor", "pts": [[57, 29], [50, 24], [48, 18]], "label": "酒馆左下楼梯" },
      { "kind": "minor", "pts": [[57, 29], [58, 18], [64, 15]], "label": "舞台侧幕" },
      { "kind": "minor", "pts": [[57, 29], [64, 27], [66, 25]], "label": "酒馆内右下角" },
      { "kind": "minor", "pts": [[58, 18], [52, 13]], "label": "吧台" },
      { "kind": "minor", "pts": [[90, 48], [90, 60], [80, 63]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "southern_sunshade_sands", "label": "城镇入口（往南桑谢德沙道）", "lp": "t", "dir": "西南" },
      { "kind": "exit", "at": [2, 28], "to": "sunshade_catacombs", "label": "地下道入口", "lp": "t", "dir": "西" },
      { "kind": "npc", "at": [24, 58], "label": "入口的老人（诱惑助战）", "npc": [5], "lp": "b" },
      { "kind": "inn", "at": [12, 40], "label": "旅店", "lp": "r" },
      { "kind": "npc", "at": [16, 46], "label": "失忆的少女", "npc": [2], "lp": "r" },
      { "kind": "item", "at": [11, 53], "label": "道具店", "lp": "r" },
      { "kind": "npc", "at": [8, 30], "label": "老婆婆", "npc": [3], "lp": "b" },
      { "kind": "tavern", "at": [57, 29], "label": "酒馆入口", "lp": "r" },
      { "kind": "chest", "at": [48, 17], "tr": [1], "label": "治愈葡萄（酒馆内）", "lp": "l" },
      { "kind": "hidden", "at": [64, 15], "tr": [4], "label": "还魂橄榄（大）（舞台侧幕）", "note": "对城西北的明星舞娘打听/探查后出现。", "lp": "b" },
      { "kind": "hidden", "at": [66, 25], "tr": [5], "label": "奥术战戟（酒馆右下角）", "note": "对酒馆内离舞台最近的看板娘打听/探查（情报Lv8）后出现；位置为示意。", "lp": "r" },
      { "kind": "hidden", "at": [52, 13], "tr": [6], "label": "体魄坚果（吧台）", "note": "对酒馆内酒馆老板打听/探查（情报Lv10）后出现；位置为示意。", "lp": "t" },
      { "kind": "hidden", "at": [29, 41], "tr": [2], "label": "葡萄（大）（宿舍内）", "note": "对酒馆前的酒馆老板的部下打听/探查后出现；宝箱位置据攻略站在舞娘宿舍内（示意）。", "lp": "b" },
      { "kind": "weapon", "at": [42, 47], "label": "武器店", "lp": "r" },
      { "kind": "npc", "at": [37, 53], "label": "镇民（武器店新货）", "npc": [7], "lp": "b" },
      { "kind": "chest_red", "at": [28, 64], "tr": [0], "label": "古风舞者衣装（上锁民家内）", "note": "城镇入口附近，需先对门前镇民（强度1）「挑战」获胜才能进屋；位置为示意。", "lp": "r" },
      { "kind": "npc", "at": [41, 51], "label": "酒馆老板的部下（武器店东南侧）", "npc": [0], "lp": "r" },
      { "kind": "npc", "at": [49, 34], "label": "醉酒的保镖", "npc": [6], "lp": "l" },
      { "kind": "npc", "at": [26, 22], "label": "明星舞娘", "npc": [4], "lp": "r" },
      { "kind": "hidden", "at": [18, 14], "tr": [3], "label": "装满银币的钱袋", "note": "对武器店东南侧门口的酒馆老板的部下（情报Lv8）打听/探查后出现；宝箱位置据攻略站在城西北一带（示意）。", "lp": "r" },
      { "kind": "npc", "at": [8, 10], "label": "四处游历的少女（莉亚）", "npc": [1], "lp": "b" }
    ]
  },
  "sunshade_catacombs": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "从城西入口（右上）进入，先向西穿过长廊，再沿西侧南下经过存档点与旅行商人，最后沿南侧向东到达东南出口；中段「下方拱门」进去后向左有隐蔽通路通往体力耳环。普通宝箱具体位置为示意。",
    "zones": [
      { "kind": "room", "rect": [80, 4, 18, 22], "label": "入口" },
      { "kind": "room", "rect": [6, 32, 26, 18], "label": "存档点" },
      { "kind": "room", "rect": [32, 28, 30, 14], "label": "下方拱门" },
      { "kind": "room", "rect": [74, 54, 24, 14], "label": "出口" },
      { "kind": "wall", "rect": [24, 22, 6, 18] },
      { "kind": "pit", "poly": [[64, 30], [80, 28], [88, 40], [72, 46]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 16], [78, 14], [58, 16], [38, 14], [18, 18], [12, 30], [16, 42], [24, 54], [44, 58], [64, 60], [80, 62], [96, 66]] },
      { "kind": "minor", "pts": [[98, 16], [96, 28]], "label": "入口正下方" },
      { "kind": "stairs", "pts": [[58, 16], [60, 10], [60, 8]], "label": "石拱之后上楼梯" },
      { "kind": "minor", "pts": [[58, 16], [60, 28], [56, 36]], "label": "下方拱门" },
      { "kind": "hidden", "pts": [[56, 36], [46, 38], [38, 36]], "label": "拱门内向左的隐蔽通路" },
      { "kind": "minor", "pts": [[16, 42], [26, 42]] },
      { "kind": "minor", "pts": [[16, 42], [20, 38], [20, 36]], "label": "存档点右侧" },
      { "kind": "stairs", "pts": [[16, 42], [20, 48], [24, 54]], "label": "存档点下行台阶" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 16], "to": "sunshade", "label": "往桑谢德（城西）", "lp": "b", "dir": "东" },
      { "kind": "exit", "at": [96, 66], "to": "southern_sunshade_sands", "label": "出口（往南桑谢德沙道）", "lp": "t", "dir": "东南" },
      { "kind": "gate", "at": [88, 64], "label": "告示牌（第1章前封锁）", "lp": "b" },
      { "kind": "chest", "at": [96, 28], "tr": [0], "label": "入口正下方", "lp": "l" },
      { "kind": "landmark", "at": [70, 15], "label": "石拱", "lp": "t" },
      { "kind": "chest", "at": [60, 8], "tr": [1], "label": "暗之精灵石", "note": "穿过石拱后上楼梯（经过时可隐约看到）。", "lp": "r" },
      { "kind": "landmark", "at": [56, 36], "label": "拱门", "lp": "r" },
      { "kind": "chest_red", "at": [38, 36], "tr": [3], "label": "体力耳环", "note": "从下方拱门进入后向左走的隐蔽通路尽头。", "lp": "b" },
      { "kind": "danger", "at": [38, 14], "label": "光精灵（弱暗）", "lp": "t" },
      { "kind": "save", "at": [16, 42], "label": "存档点", "lp": "b" },
      { "kind": "peddler", "at": [26, 42], "label": "旅行商人", "npc": [0], "lp": "r" },
      { "kind": "chest", "at": [20, 36], "tr": [2], "label": "醒神李子", "note": "存档点右侧，楼梯的另一侧。", "lp": "r" }
    ]
  },
  "southern_sunshade_sands": {
    "theme": "desert",
    "size": [100, 70],
    "note": "东西向的沙道：西端通往河川地区，东端接东桑谢德沙道；东北岔路上坡回桑谢德城镇入口，西北岩壁下是桑谢德地下道出口，出地下道即是赫尔根尼修的Boss战地点。三个宝箱分别在南北小岔路尽头（位置为示意）。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [26, 10], [10, 14], [0, 12]], "label": "地下道出口" },
      { "kind": "cliff", "poly": [[70, 0], [100, 0], [100, 16], [90, 14], [80, 8]], "label": "桑谢德岩壁" },
      { "kind": "sand", "rect": [28, 52, 30, 16], "label": "沙丘" },
      { "kind": "sand", "poly": [[40, 6], [64, 4], [70, 18], [50, 22]] },
      { "kind": "rock", "rect": [84, 48, 12, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 42], [18, 40], [38, 44], [58, 40], [78, 38], [98, 36]], "label": "沙道主路" },
      { "kind": "minor", "pts": [[18, 40], [16, 26], [13, 4]], "label": "往地下道出口" },
      { "kind": "main", "pts": [[78, 38], [84, 22], [92, 4]], "label": "往桑谢德城镇入口" },
      { "kind": "minor", "pts": [[38, 44], [34, 56], [26, 62]] },
      { "kind": "minor", "pts": [[58, 40], [62, 26], [56, 16]] },
      { "kind": "minor", "pts": [[78, 38], [76, 52], [86, 62]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 42], "to": "riverlands/south_clearbrook_traverse", "label": "往南库利亚布鲁克川道", "lp": "t", "dir": "西" },
      { "kind": "exit", "at": [13, 4], "to": "sunshade_catacombs", "label": "桑谢德地下道出口", "lp": "r", "dir": "西北" },
      { "kind": "exit", "at": [92, 4], "to": "sunshade", "label": "往桑谢德", "lp": "l", "dir": "东北" },
      { "kind": "exit", "at": [98, 36], "to": "eastern_sunshade_sands", "label": "往东桑谢德沙道", "lp": "b", "dir": "东" },
      { "kind": "boss", "at": [16, 24], "label": "赫尔根尼修（第1章）", "lp": "r" },
      { "kind": "npc", "at": [48, 42], "label": "受伤的旅人（克里斯）", "npc": [0], "lp": "b" },
      { "kind": "chest_red", "at": [26, 62], "tr": [0], "lp": "r", "note": "桑谢德正南，矮石柱后" },
      { "kind": "chest", "at": [56, 16], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [86, 62], "tr": [2], "lp": "l" }
    ]
  },
  "eastern_sunshade_sands": {
    "theme": "desert",
    "size": [100, 70],
    "note": "东西向主路贯穿：西接南桑谢德沙道，东通高原地区南鹅卵石村山道；西段向北的岔路通往砂笛洞窟，向南的岔路通往北威尔斯宾克沙道（危险度骤升）。宝箱位于几条小岔路尽头（位置为示意）。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [36, 0], [32, 8], [14, 10], [0, 8]], "label": "砂笛洞窟" },
      { "kind": "cliff", "poly": [[78, 0], [100, 0], [100, 14], [90, 12]] },
      { "kind": "sand", "rect": [40, 44, 30, 20], "label": "沙丘" },
      { "kind": "rock", "rect": [86, 40, 12, 12] },
      { "kind": "sand", "poly": [[46, 6], [70, 8], [66, 22], [50, 20]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 34], [20, 34], [40, 30], [60, 34], [80, 30], [98, 26]], "label": "沙道主路" },
      { "kind": "minor", "pts": [[40, 30], [30, 16], [22, 4]], "label": "北上往砂笛洞窟" },
      { "kind": "main", "pts": [[20, 34], [14, 50], [6, 67]], "label": "南下往北威尔斯宾克沙道" },
      { "kind": "minor", "pts": [[60, 34], [64, 48], [58, 58]] },
      { "kind": "minor", "pts": [[80, 30], [84, 16]] },
      { "kind": "minor", "pts": [[14, 50], [28, 58]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 34], "to": "southern_sunshade_sands", "label": "往南桑谢德沙道", "lp": "t", "dir": "西" },
      { "kind": "exit", "at": [98, 26], "to": "highlands/south_cobbleston_gap", "label": "往南鹅卵石村山道", "lp": "b", "dir": "东" },
      { "kind": "exit", "at": [22, 4], "to": "whistling_cavern", "label": "砂笛洞窟入口", "lp": "r", "dir": "西北" },
      { "kind": "exit", "at": [6, 67], "to": "northern_wellspring_sands", "label": "往北威尔斯宾克沙道", "lp": "r", "dir": "西南" },
      { "kind": "chest", "at": [58, 58], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [84, 16], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [28, 58], "tr": [2], "lp": "r" },
      { "kind": "danger", "at": [60, 34], "label": "骷髅/蚂蚁/蜥蜴人", "lp": "t" }
    ]
  },
  "whistling_cavern": {
    "theme": "cave",
    "size": [100, 70],
    "note": "东南洞口进入，入口附近就是存档点。存档点往西是岔路群：靠左沿洞窟边缘走到尽头是紫宝箱，向东北汇合到北侧路口，路口往西是火之精灵石、往北是李子、往东是死路；存档点往北走到分岔，往北是橄榄，往南绕石柱走隐藏通路是重弓。流沙不断从洞顶落下。宝箱具体位置按攻略描述示意。",
    "zones": [
      { "kind": "room", "rect": [74, 48, 24, 20], "label": "入口洞厅" },
      { "kind": "room", "rect": [4, 28, 26, 22], "label": "西侧边缘" },
      { "kind": "room", "rect": [4, 2, 24, 16], "label": "西北空地" },
      { "kind": "room", "rect": [34, 2, 20, 16], "label": "北侧" },
      { "kind": "rock", "rect": [66, 40, 6, 6], "label": "石柱" },
      { "kind": "sand", "circle": [48, 40, 4], "label": "流沙" },
      { "kind": "sand", "circle": [24, 26, 3] },
      { "kind": "sand", "circle": [74, 60, 3] },
      { "kind": "rock", "rect": [74, 4, 22, 14] }
    ],
    "paths": [
      { "kind": "main", "pts": [[94, 66], [86, 60], [72, 56], [58, 54]], "label": "入口→存档点→岔路群" },
      { "kind": "minor", "pts": [[58, 54], [44, 56], [30, 52], [20, 44], [16, 36]], "label": "往西，沿边缘靠左" },
      { "kind": "minor", "pts": [[16, 36], [26, 28], [38, 22]], "label": "向东北汇合" },
      { "kind": "minor", "pts": [[58, 54], [54, 40], [46, 28], [38, 22]], "label": "往北到路口" },
      { "kind": "minor", "pts": [[38, 22], [26, 14], [14, 10]], "label": "路口往西" },
      { "kind": "minor", "pts": [[38, 22], [40, 12], [44, 5]], "label": "路口往北" },
      { "kind": "minor", "pts": [[38, 22], [50, 20], [58, 18]], "label": "路口往东（死路）" },
      { "kind": "minor", "pts": [[86, 60], [84, 46], [78, 38]], "label": "存档点往北" },
      { "kind": "minor", "pts": [[78, 38], [80, 26], [86, 14]], "label": "分岔往北" },
      { "kind": "hidden", "pts": [[78, 38], [70, 36], [64, 42], [66, 48]], "label": "分岔往南绕石柱" }
    ],
    "pois": [
      { "kind": "exit", "at": [94, 66], "to": "eastern_sunshade_sands", "label": "洞口", "lp": "l", "dir": "东南" },
      { "kind": "save", "at": [86, 60], "label": "存档点", "lp": "t" },
      { "kind": "chest_purple", "at": [16, 36], "tr": [0], "label": "6000叶", "note": "需盗贼：存档点往西，沿洞窟边缘靠左走到尽头。", "lp": "r" },
      { "kind": "chest", "at": [14, 10], "tr": [1], "label": "火之精灵石（大）", "lp": "r" },
      { "kind": "chest_red", "at": [66, 48], "tr": [2], "label": "重弓", "note": "分岔往南绕石柱，沿墙下行，隐藏通路尽头。", "lp": "l" },
      { "kind": "chest", "at": [44, 5], "tr": [3], "label": "醒神李子（大）", "note": "岩石遮挡处的隐藏小路。", "lp": "r" },
      { "kind": "chest", "at": [88, 12], "tr": [4], "label": "还魂橄榄（大）", "note": "半藏在崖壁岩石后。", "lp": "l" },
      { "kind": "landmark", "at": [38, 22], "label": "北侧路口", "lp": "b" },
      { "kind": "landmark", "at": [58, 18], "label": "死路", "lp": "t" },
      { "kind": "landmark", "at": [78, 38], "label": "分岔", "lp": "r" },
      { "kind": "danger", "at": [46, 30], "label": "巨大蝎子三连（经验高）", "lp": "r" },
      { "kind": "landmark", "at": [26, 28], "label": "流沙落下处", "lp": "t" }
    ]
  }
});

OT2.addDetail("sunlands", {
  "northern_wellspring_sands": {
    "theme": "desert",
    "size": [100, 70],
    "note": "从东北（东桑谢德沙道）南下的沙道：中段向西钻进岩石夹缝是舞姬的祠堂；继续南下到岔口，向东是流沙洞窟（洞外有负伤的侦察兵），向西南通往威尔斯宾克，正南接东威尔斯宾克沙道。宝箱位置为示意。",
    "zones": [
      { "kind": "rock", "poly": [[0, 12], [26, 14], [30, 26], [0, 27]], "label": "西侧岩石" },
      { "kind": "rock", "poly": [[0, 33], [30, 34], [26, 46], [0, 48]] },
      { "kind": "cliff", "poly": [[86, 44], [100, 42], [100, 68], [90, 66]], "label": "流沙洞窟" },
      { "kind": "sand", "rect": [56, 30, 26, 14], "label": "沙丘" },
      { "kind": "sand", "poly": [[8, 54], [28, 50], [40, 66], [12, 68]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[94, 3], [80, 14], [62, 24], [50, 36], [48, 50], [50, 67]], "label": "南北沙道" },
      { "kind": "minor", "pts": [[50, 36], [34, 32], [18, 30], [3, 30]], "label": "西侧岩缝（往舞姬的祠堂）" },
      { "kind": "main", "pts": [[48, 50], [30, 58], [6, 66]], "label": "往威尔斯宾克" },
      { "kind": "minor", "pts": [[48, 50], [66, 52], [84, 56], [97, 57]], "label": "往流沙洞窟" },
      { "kind": "minor", "pts": [[94, 3], [88, 7]], "label": "入口左侧灌木后" },
      { "kind": "minor", "pts": [[84, 56], [82, 46]], "label": "侦察兵右侧短死路" },
      { "kind": "hidden", "pts": [[97, 57], [93, 64]], "label": "洞口外沿岩石下缘的隐藏通路" },
      { "kind": "minor", "pts": [[66, 52], [70, 64]], "label": "弯道附近" }
    ],
    "pois": [
      { "kind": "exit", "at": [94, 3], "to": "eastern_sunshade_sands", "label": "往东桑谢德沙道", "lp": "l", "dir": "东北" },
      { "kind": "exit", "at": [3, 30], "to": "shrine_lady_of_grace", "label": "舞姬的祠堂（岩缝）", "lp": "b", "dir": "西" },
      { "kind": "exit", "at": [97, 57], "to": "quicksand_caves", "label": "流沙洞窟入口", "lp": "t", "dir": "东南" },
      { "kind": "exit", "at": [6, 66], "to": "wellspring", "label": "往威尔斯宾克", "lp": "t", "dir": "西南" },
      { "kind": "exit", "at": [50, 67], "to": "eastern_wellspring_sands", "label": "往东威尔斯宾克沙道", "lp": "r", "dir": "南" },
      { "kind": "npc", "at": [82, 52], "label": "负伤的侦察兵", "npc": [0], "lp": "t" },
      { "kind": "chest", "at": [88, 7], "tr": [0], "label": "醒神李子", "note": "入口正左侧，半藏在灌木后。", "lp": "b" },
      { "kind": "chest", "at": [82, 46], "tr": [1], "label": "还魂橄榄", "note": "负伤侦察兵右边的短死路。", "lp": "l" },
      { "kind": "chest", "at": [70, 64], "tr": [2], "label": "活力石榴（大）", "note": "去流沙洞窟路上弯道附近，半埋在沙中。", "lp": "r" },
      { "kind": "chest_red", "at": [93, 64], "tr": [3], "label": "帝国长枪", "note": "流沙洞窟入口外，沿岩石下缘的隐藏通路。", "lp": "l" }
    ]
  },
  "shrine_lady_of_grace": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "从东侧（北威尔斯宾克沙道）钻进岩石夹缝，穿过祠堂门后是两侧立有火盆的回廊，尽头台阶上是舞姬希尔缇吉的祭坛；无战斗、无宝箱。回廊形状为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[62, 0], [100, 0], [100, 34], [80, 34], [66, 30]] },
      { "kind": "cliff", "poly": [[62, 70], [100, 70], [100, 46], [80, 46], [66, 50]] },
      { "kind": "room", "rect": [8, 16, 54, 40], "label": "祠堂" },
      { "kind": "plaza", "circle": [22, 36, 8], "label": "祭坛" }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 40], [84, 40], [68, 38]], "label": "岩石夹缝" },
      { "kind": "main", "pts": [[68, 38], [56, 38], [44, 38], [34, 38]], "label": "祠堂回廊" },
      { "kind": "stairs", "pts": [[34, 38], [28, 37], [24, 36]], "label": "祭坛台阶" },
      { "kind": "minor", "pts": [[56, 38], [50, 26], [40, 26], [34, 38]] },
      { "kind": "minor", "pts": [[56, 38], [50, 50], [40, 50], [34, 38]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 40], "to": "northern_wellspring_sands", "label": "出口（北威尔斯宾克沙道）", "lp": "t", "dir": "东" },
      { "kind": "landmark", "at": [84, 40], "label": "岩缝入口", "lp": "b" },
      { "kind": "gate", "at": [68, 38], "label": "祠堂门", "lp": "t" },
      { "kind": "landmark", "at": [50, 26], "label": "火盆", "lp": "t" },
      { "kind": "landmark", "at": [50, 50], "label": "火盆", "lp": "b" },
      { "kind": "shrine", "at": [24, 36], "label": "舞姬祭坛（副职业：舞娘）", "lp": "b" }
    ]
  },
  "quicksand_caves": {
    "theme": "cave",
    "size": [100, 70],
    "note": "西北洞口进入（洞口附近和Boss前各有一个存档点），第一个火盆处分三路：往南小路再走东侧隐藏通路到紫宝箱，往右到火之精灵石，正路往东南进大厅。大厅西北可绕行；大厅向东上坡到北侧高台（右转/墙后向西各有宝箱），向东南走到最深处是操蛇男子与大蛇。",
    "zones": [
      { "kind": "room", "rect": [2, 2, 30, 26], "label": "火盆" },
      { "kind": "room", "rect": [42, 26, 24, 18], "label": "大厅" },
      { "kind": "room", "rect": [64, 2, 34, 20], "label": "北侧高台" },
      { "kind": "room", "rect": [74, 48, 24, 20], "label": "最深处" },
      { "kind": "wall", "rect": [64, 4, 4, 10] },
      { "kind": "sand", "circle": [30, 56, 5], "label": "流沙" },
      { "kind": "sand", "circle": [80, 34, 4] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 6], [16, 12], [26, 22], [40, 30], [54, 36]] },
      { "kind": "minor", "pts": [[26, 22], [24, 36], [26, 48]], "label": "火盆处往南小路" },
      { "kind": "hidden", "pts": [[26, 48], [36, 52], [42, 52]], "label": "东侧隐藏通路" },
      { "kind": "minor", "pts": [[26, 22], [38, 18], [46, 10]], "label": "火盆分岔往右" },
      { "kind": "minor", "pts": [[54, 36], [46, 30], [46, 24]], "label": "大厅西北绕行" },
      { "kind": "main", "pts": [[54, 36], [66, 30]] },
      { "kind": "stairs", "pts": [[66, 30], [72, 20]], "label": "坡道" },
      { "kind": "minor", "pts": [[72, 20], [86, 16], [94, 12]], "label": "坡道后右转" },
      { "kind": "minor", "pts": [[72, 20], [70, 10], [60, 6]], "label": "北侧分岔墙后向西" },
      { "kind": "main", "pts": [[54, 36], [62, 48], [76, 56], [88, 60]], "label": "往最深处" },
      { "kind": "minor", "pts": [[62, 48], [52, 60], [44, 64]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 6], "to": "northern_wellspring_sands", "label": "洞口", "lp": "r", "dir": "西北" },
      { "kind": "save", "at": [10, 9], "label": "洞口存档点", "lp": "b" },
      { "kind": "landmark", "at": [26, 22], "label": "第一个火盆", "lp": "l" },
      { "kind": "chest_purple", "at": [42, 52], "tr": [0], "label": "炼狱斧", "note": "需盗贼。", "lp": "r" },
      { "kind": "chest", "at": [46, 10], "tr": [2], "label": "火之精灵石（特大）", "lp": "r" },
      { "kind": "chest_red", "at": [46, 24], "tr": [1], "label": "回春果酱", "lp": "l" },
      { "kind": "chest_red", "at": [94, 12], "tr": [3], "label": "恐怖耐性石", "lp": "b" },
      { "kind": "chest_red", "at": [60, 6], "tr": [5], "label": "守护之手镯", "lp": "l" },
      { "kind": "chest_red", "at": [44, 64], "tr": [4], "label": "醒神李子篮", "note": "第六个火盆旁的短路尽头，位置为示意。", "lp": "l" },
      { "kind": "save", "at": [78, 57], "label": "最终存档点（Boss前）", "lp": "t" },
      { "kind": "boss", "at": [88, 60], "label": "操蛇男子 & 大蛇", "npc": [0], "note": "支线「潜伏在沙漠中的身影」进行中、对侦察兵打听后才出现。", "lp": "t" }
    ]
  },
  "wellspring": {
    "theme": "town",
    "size": [100, 70],
    "note": "围绕中央绿洲的交易村：东北口通北威尔斯宾克沙道，西门通西威尔斯宾克沙道（蜥蜴人巢窟方向），南门通南威尔斯宾克废道（黑市）。北侧最左是被镇民看守的紫宝箱民家，其右邻是被卫兵看守的黑市商人民家；西门一带有艾尔哈特所在房间与警卫所（内有宝箱）；东侧是杂货店、存档点、酒馆与旅店；下层道路的摊位间水边有宝箱。建筑相对位置为示意（参照攻略の虎/hrs 地图）。",
    "zones": [
      { "kind": "water", "poly": [[42, 30], [56, 27], [66, 33], [64, 44], [52, 48], [40, 42]], "label": "绿洲" },
      { "kind": "building", "rect": [4, 2, 14, 9], "label": "被看守的民家（紫宝箱）" },
      { "kind": "building", "rect": [36, 3, 14, 9], "label": "黑市商人的民家" },
      { "kind": "house", "rect": [56, 3, 10, 8] },
      { "kind": "house", "rect": [2, 18, 10, 7], "label": "民家" },
      { "kind": "house", "rect": [2, 36, 10, 7], "label": "西口房间" },
      { "kind": "building", "rect": [16, 38, 12, 8], "label": "警卫所" },
      { "kind": "building", "rect": [80, 24, 12, 8], "label": "杂货店" },
      { "kind": "building", "rect": [78, 46, 12, 8], "label": "酒馆" },
      { "kind": "house", "rect": [70, 4, 9, 6] },
      { "kind": "house", "rect": [26, 62, 8, 6] },
      { "kind": "building", "rect": [66, 58, 8, 6], "label": "旅店" },
      { "kind": "grass", "circle": [52, 38, 14] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 4], [82, 12], [64, 15], [46, 15], [30, 15], [16, 16]], "label": "北街" },
      { "kind": "minor", "pts": [[16, 16], [11, 11]] },
      { "kind": "main", "pts": [[30, 15], [24, 28], [12, 30], [2, 30]], "label": "西街（往西门）" },
      { "kind": "minor", "pts": [[12, 30], [8, 25], [7, 22]] },
      { "kind": "minor", "pts": [[22, 42], [19, 44]], "label": "警卫所内左后角" },
      { "kind": "minor", "pts": [[60, 54], [66, 58]] },
      { "kind": "minor", "pts": [[12, 30], [8, 36], [8, 39]] },
      { "kind": "minor", "pts": [[24, 28], [22, 38], [22, 42]] },
      { "kind": "minor", "pts": [[24, 28], [32, 44], [34, 60]] },
      { "kind": "main", "pts": [[82, 12], [74, 28], [73, 36], [72, 42], [60, 54]], "label": "东街" },
      { "kind": "main", "pts": [[60, 54], [46, 58], [34, 60], [24, 68]], "label": "南街（往南门）" },
      { "kind": "minor", "pts": [[74, 28], [80, 28]] },
      { "kind": "minor", "pts": [[72, 42], [80, 46], [84, 50]] },
      { "kind": "minor", "pts": [[73, 36], [80, 38]] },
      { "kind": "minor", "pts": [[46, 15], [42, 24]], "label": "绿洲西北" },
      { "kind": "minor", "pts": [[46, 15], [43, 12]] },
      { "kind": "minor", "pts": [[64, 15], [61, 11]] },
      { "kind": "minor", "pts": [[30, 15], [32, 9]] }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 4], "to": "northern_wellspring_sands", "label": "东北口（往北威尔斯宾克沙道）", "lp": "l", "dir": "东北" },
      { "kind": "exit", "at": [2, 30], "to": "western_wellspring_sands", "label": "西门", "lp": "t", "dir": "西北" },
      { "kind": "exit", "at": [24, 68], "to": "southern_wellspring_sands", "label": "南门（往南废道）", "lp": "r", "dir": "西南" },
      { "kind": "npc", "at": [43, 12], "label": "黑市商人", "npc": [1, 2], "note": "门口有卫兵把守（强度9），需挑战/唆使击败才能进屋；屋内商人持有禁断之斧、进化弓·隼。", "lp": "r" },
      { "kind": "tavern", "at": [84, 50], "label": "酒馆", "lp": "b" },
      { "kind": "inn", "at": [67, 59], "label": "旅店", "lp": "r" },
      { "kind": "hidden", "at": [32, 9], "tr": [5], "label": "雷之精灵石（大）（酒馆西）", "note": "对镇民（入口）打听/探查后出现。", "lp": "b" },
      { "kind": "hidden", "at": [42, 24], "tr": [6], "label": "治愈葡萄串（绿洲西北）", "note": "对酒馆客人打听/探查后出现。", "lp": "b" },
      { "kind": "npc", "at": [27, 22], "label": "老人", "npc": [5], "lp": "t" },
      { "kind": "hidden", "at": [7, 22], "tr": [9], "label": "装满钱币的钱袋（对卫视打听）", "note": "欧贝利克与奥菲莉亚第4章通关后出现的卫视（情报Lv40）；位置为示意。", "lp": "r" },
      { "kind": "chest", "at": [19, 44], "tr": [3], "label": "醒神李子（大）（警卫所内）", "note": "警卫所内，左后角。", "lp": "l" },
      { "kind": "chest", "at": [56, 58], "tr": [2], "label": "治愈葡萄（大）（水边）", "note": "下层道路上，两个摊位之间的水边；位置为示意。", "lp": "b" },
      { "kind": "npc", "at": [14, 33], "label": "卫兵（美洲豹长枪）", "npc": [4], "lp": "r" },
      { "kind": "npc", "at": [8, 39], "label": "艾尔哈特（欧贝利克第4章后）", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [22, 42], "label": "贝尔队长", "npc": [3], "lp": "b" },
      { "kind": "npc", "at": [30, 40], "label": "旅行商人", "npc": [6], "lp": "r" },
      { "kind": "hidden", "at": [33, 52], "tr": [4], "label": "装满钱币的钱袋（对贝尔打听）", "note": "可错过：欧贝利克第3章问完第三名镇民之前打听。位置为示意。", "lp": "r" },
      { "kind": "shop", "at": [80, 28], "label": "杂货店", "lp": "b" },
      { "kind": "save", "at": [73, 36], "label": "存档点", "lp": "l" },
      { "kind": "hidden", "at": [80, 38], "tr": [7], "label": "装满铜币的钱袋（存档点旁）", "note": "对商人打听/探查后出现。", "lp": "r" },
      { "kind": "chest_purple", "at": [11, 9], "tr": [0, 1], "label": "紫宝箱×2（14000叶/9000叶）", "note": "最左侧被镇民（强度4）看守的民家：需先对门前镇民挑战获胜才能进屋，开箱需盗贼（14000叶靠左墙、9000叶靠右墙）。", "lp": "r" },
      { "kind": "hidden", "at": [46, 58], "tr": [8], "label": "李子（大）（对卫兵打听）", "note": "位置为示意。", "lp": "b" },
      { "kind": "npc", "at": [62, 56], "label": "死心眼儿的士兵", "npc": [8], "lp": "r" },
      { "kind": "npc", "at": [38, 62], "label": "嗜甜如命的人", "npc": [7], "lp": "r" }
    ]
  },
  "western_wellspring_sands": {
    "theme": "desert",
    "size": [100, 70],
    "note": "从威尔斯宾克西门（东南）出发、斜向西北通往蜥蜴人巢窟的短沙道；中段北侧有小绿洲与废墟，废墟后方的小凹处藏着宝箱；南侧边缘可一路往西走到另一宝箱。",
    "zones": [
      { "kind": "water", "poly": [[52, 18], [64, 16], [70, 24], [62, 32], [52, 30]], "label": "小绿洲" },
      { "kind": "rock", "rect": [50, 4, 16, 8], "label": "废墟" },
      { "kind": "sand", "rect": [10, 40, 30, 16], "label": "沙丘" },
      { "kind": "cliff", "poly": [[0, 0], [10, 0], [2, 14], [0, 14]] },
      { "kind": "cliff", "poly": [[78, 0], [100, 0], [100, 40], [86, 30]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 66], [80, 56], [62, 46], [46, 36], [30, 24], [14, 12], [4, 4]], "label": "沙道" },
      { "kind": "minor", "pts": [[80, 56], [64, 64], [44, 66], [28, 64]], "label": "沿南侧边缘往西" },
      { "kind": "minor", "pts": [[46, 36], [46, 22], [48, 14]], "label": "绿洲北侧" },
      { "kind": "hidden", "pts": [[48, 14], [44, 6], [54, 2]], "label": "废墟后方小凹处" }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 66], "to": "wellspring", "label": "往威尔斯宾克（西门）", "lp": "l", "dir": "东南" },
      { "kind": "exit", "at": [4, 4], "to": "lizardmen_den", "label": "蜥蜴人的巢窟", "lp": "r", "dir": "西北" },
      { "kind": "boss", "at": [62, 46], "label": "蜥蜴人大军（第3章连战）", "lp": "b" },
      { "kind": "chest_red", "at": [28, 64], "tr": [0], "lp": "t", "note": "绿洲西缘南侧、仙人掌旁" },
      { "kind": "chest", "at": [54, 2], "tr": [1], "note": "画面上看不见，但可以调查。", "lp": "r" },
      { "kind": "landmark", "at": [46, 36], "label": "绿洲岔路", "lp": "l" },
      { "kind": "danger", "at": [30, 24], "label": "热砂蜥蜴人（可偷李子大）", "lp": "r" }
    ]
  }
});

OT2.addDetail("sunlands", {
  "lizardmen_den": {
    "theme": "ruins",
    "size": [120, 70],
    "note": "东南入口进入：入口西侧台阶下有宝箱；向北登台阶后右侧有宝箱，北路右墙有隐藏通路；过木桥（桥下与桥南长路各有宝箱）后向西，过西侧台阶、倒塌石柱一路到最后存档点；存档点右侧上层长路有两个宝箱，与艾尔哈特会合后向右进入Boss房。整体按宝箱描述示意。",
    "zones": [
      { "kind": "room", "rect": [90, 50, 28, 18], "label": "入口" },
      { "kind": "room", "rect": [90, 12, 28, 34], "label": "北路" },
      { "kind": "pit", "poly": [[68, 12], [88, 12], [86, 28], [70, 28]] },
      { "kind": "room", "rect": [28, 4, 36, 32], "label": "倒塌石柱区" },
      { "kind": "room", "rect": [2, 26, 20, 24], "label": "最后存档点" },
      { "kind": "room", "rect": [22, 52, 24, 16], "label": "Boss房" },
      { "kind": "rock", "rect": [70, 44, 16, 8] },
      { "kind": "rock", "poly": [[0, 0], [24, 0], [20, 14], [0, 18]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[116, 66], [100, 60]] },
      { "kind": "stairs", "pts": [[100, 60], [90, 62], [86, 67]], "label": "入口西侧台阶下" },
      { "kind": "minor", "pts": [[100, 60], [110, 54]] },
      { "kind": "main", "pts": [[100, 60], [100, 46]] },
      { "kind": "stairs", "pts": [[100, 46], [100, 38]], "label": "北侧台阶" },
      { "kind": "minor", "pts": [[100, 38], [110, 36]], "label": "台阶上右侧" },
      { "kind": "main", "pts": [[100, 38], [94, 28], [86, 22]], "label": "北路" },
      { "kind": "hidden", "pts": [[94, 28], [108, 22], [114, 16]], "label": "北路右侧墙壁隐藏通路" },
      { "kind": "minor", "pts": [[94, 28], [86, 34], [78, 32]], "label": "下到木桥下方" },
      { "kind": "bridge", "pts": [[86, 22], [70, 22]], "label": "木桥" },
      { "kind": "minor", "pts": [[70, 22], [66, 36], [64, 50], [60, 64]], "label": "桥南长路" },
      { "kind": "main", "pts": [[70, 22], [58, 20]] },
      { "kind": "stairs", "pts": [[58, 20], [54, 32], [50, 40]], "label": "过桥后西侧台阶往南" },
      { "kind": "main", "pts": [[58, 20], [44, 14]] },
      { "kind": "stairs", "pts": [[44, 14], [40, 24], [36, 28]], "label": "倒塌石柱后台阶下" },
      { "kind": "main", "pts": [[44, 14], [30, 18], [16, 28], [12, 42]] },
      { "kind": "stairs", "pts": [[12, 42], [22, 40]] },
      { "kind": "minor", "pts": [[22, 40], [34, 44], [46, 48]], "label": "存档点右侧上层长路" },
      { "kind": "main", "pts": [[12, 42], [16, 50], [20, 56], [30, 60]], "label": "向右进入Boss房" }
    ],
    "pois": [
      { "kind": "exit", "at": [116, 66], "to": "western_wellspring_sands", "label": "巢窟入口", "lp": "t", "dir": "东南" },
      { "kind": "chest", "at": [86, 67], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [110, 54], "tr": [2], "note": "攻略未写明位置，示意。", "lp": "t" },
      { "kind": "chest", "at": [110, 36], "tr": [1], "lp": "t" },
      { "kind": "chest_purple", "at": [114, 16], "tr": [3], "note": "需盗贼。", "lp": "l" },
      { "kind": "chest", "at": [78, 32], "tr": [4], "lp": "b" },
      { "kind": "chest", "at": [60, 64], "tr": [5], "lp": "r" },
      { "kind": "chest", "at": [50, 40], "tr": [6], "lp": "r" },
      { "kind": "landmark", "at": [44, 14], "label": "倒塌石柱", "lp": "t" },
      { "kind": "chest", "at": [36, 28], "tr": [7], "lp": "b" },
      { "kind": "save", "at": [12, 42], "label": "存档点", "lp": "l" },
      { "kind": "npc", "at": [16, 50], "label": "艾尔哈特", "lp": "l" },
      { "kind": "chest", "at": [34, 44], "tr": [8], "lp": "t" },
      { "kind": "chest", "at": [46, 48], "tr": [9], "lp": "r" },
      { "kind": "boss", "at": [30, 60], "label": "蜥蜴人首领→艾尔哈特单挑", "lp": "r" }
    ]
  },
  "southern_wellspring_sands": {
    "theme": "desert",
    "size": [100, 70],
    "note": "从东北（威尔斯宾克南门）下到开阔地：东侧墙边往北走到底再向左绕到景物后方有宝箱；存档点南侧台阶下分两路，往右绕行是紫宝箱，一直往南是石榴；存档点向西是黑市洞口，工作人员守在洞口，旁边木箱后方藏着钱袋。",
    "zones": [
      { "kind": "sand", "circle": [50, 32, 12], "label": "开阔地" },
      { "kind": "cliff", "poly": [[92, 20], [100, 18], [100, 52], [94, 50]] },
      { "kind": "rock", "rect": [76, 30, 10, 6], "label": "景物" },
      { "kind": "cliff", "poly": [[0, 18], [8, 22], [6, 28], [0, 28]], "label": "洞口" },
      { "kind": "rock", "rect": [4, 36, 8, 4] },
      { "kind": "cliff", "poly": [[0, 0], [60, 0], [56, 8], [30, 14], [0, 12]] },
      { "kind": "sand", "rect": [62, 56, 30, 12] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 10], [84, 14], [68, 22], [54, 30]], "label": "往威尔斯宾克" },
      { "kind": "main", "pts": [[54, 30], [40, 36]] },
      { "kind": "minor", "pts": [[54, 30], [66, 40], [84, 44], [90, 34], [90, 26]], "label": "开阔地东侧墙边往北" },
      { "kind": "hidden", "pts": [[90, 26], [84, 26], [78, 28]], "label": "向左绕到景物后方" },
      { "kind": "stairs", "pts": [[40, 36], [40, 48]], "label": "存档点南侧台阶" },
      { "kind": "minor", "pts": [[40, 48], [52, 54], [60, 58]], "label": "台阶下往右绕行" },
      { "kind": "minor", "pts": [[40, 48], [36, 58], [34, 66]], "label": "一直往南" },
      { "kind": "main", "pts": [[40, 36], [24, 34], [10, 32], [2, 32]], "label": "往黑市洞口" },
      { "kind": "minor", "pts": [[10, 32], [13, 38], [9, 43]], "label": "木箱后方" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 10], "to": "wellspring", "label": "往威尔斯宾克（南门）", "lp": "b", "dir": "东北" },
      { "kind": "exit", "at": [2, 32], "to": "black_market", "label": "黑市洞口", "lp": "t", "dir": "西" },
      { "kind": "save", "at": [40, 36], "label": "存档点", "lp": "t" },
      { "kind": "npc", "at": [16, 30], "label": "黑市工作人员×3", "npc": [0], "lp": "t" },
      { "kind": "chest", "at": [34, 66], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [78, 28], "tr": [1], "lp": "t" },
      { "kind": "chest_purple", "at": [60, 58], "tr": [2], "note": "提里昂第3章时必定可开（需盗贼）。", "lp": "r" },
      { "kind": "chest", "at": [9, 43], "tr": [3], "note": "提里昂第3章期间出现。", "lp": "r" }
    ]
  },
  "black_market": {
    "theme": "cave",
    "size": [120, 70],
    "note": "东侧洞口进入，第一个存档点左路有宝箱；中央是摆满摊位的黑市大厅（左上隐藏通路、北侧紫宝箱、右侧尽头上楼前的隐藏通路）。龙石被抢后沿追击路线向西南：第一个分岔往南有宝箱，与喽啰战后左侧死路有宝箱，最后在西南洞口迎战盖雷斯。",
    "zones": [
      { "kind": "room", "rect": [100, 22, 18, 16], "label": "入口" },
      { "kind": "room", "rect": [50, 22, 30, 24], "label": "黑市大厅（摊位）" },
      { "kind": "room", "rect": [92, 36, 20, 8], "label": "上层" },
      { "kind": "room", "rect": [2, 44, 30, 24], "label": "Boss（洞口）" },
      { "kind": "sand", "circle": [36, 20, 6], "label": "金沙" },
      { "kind": "rock", "rect": [70, 54, 18, 12] }
    ],
    "paths": [
      { "kind": "main", "pts": [[118, 30], [104, 30], [92, 30]], "label": "入口" },
      { "kind": "minor", "pts": [[92, 30], [88, 18], [80, 12]], "label": "第一个存档点左路" },
      { "kind": "main", "pts": [[92, 30], [80, 34], [66, 34]] },
      { "kind": "minor", "pts": [[66, 34], [58, 26]] },
      { "kind": "hidden", "pts": [[58, 26], [50, 18], [44, 14]], "label": "摊位左上隐藏通路" },
      { "kind": "minor", "pts": [[66, 34], [66, 14], [66, 6]], "label": "北侧" },
      { "kind": "minor", "pts": [[66, 34], [78, 42], [88, 46]], "label": "大厅右侧尽头" },
      { "kind": "stairs", "pts": [[88, 46], [96, 40], [100, 40]], "label": "上楼" },
      { "kind": "hidden", "pts": [[88, 46], [100, 54], [108, 56]], "label": "上楼前往右的隐藏通路" },
      { "kind": "main", "pts": [[66, 34], [56, 40], [46, 48]], "label": "追击路线" },
      { "kind": "minor", "pts": [[46, 48], [46, 62]], "label": "第一个分岔往南" },
      { "kind": "main", "pts": [[46, 48], [32, 46]] },
      { "kind": "minor", "pts": [[32, 46], [24, 40], [18, 36]], "label": "战后左侧死路" },
      { "kind": "main", "pts": [[32, 46], [24, 56], [16, 56], [6, 62]], "label": "往洞口" },
      { "kind": "minor", "pts": [[24, 56], [30, 64], [36, 66]] },
      { "kind": "minor", "pts": [[16, 56], [16, 48]], "label": "存档点上方" }
    ],
    "pois": [
      { "kind": "exit", "at": [118, 30], "to": "southern_wellspring_sands", "label": "入口（往南废道）", "lp": "b", "dir": "东" },
      { "kind": "save", "at": [92, 30], "label": "第一个存档点", "lp": "b" },
      { "kind": "chest", "at": [80, 12], "tr": [4], "lp": "l" },
      { "kind": "chest", "at": [44, 14], "tr": [0], "lp": "l" },
      { "kind": "chest_purple", "at": [66, 6], "tr": [7], "note": "提里昂第3章时必定可开（需盗贼）。", "lp": "r" },
      { "kind": "chest", "at": [100, 40], "tr": [6], "note": "攻略未写明位置，示意。", "lp": "r" },
      { "kind": "chest", "at": [108, 56], "tr": [1], "lp": "t" },
      { "kind": "chest", "at": [46, 62], "tr": [2], "lp": "r" },
      { "kind": "danger", "at": [32, 46], "label": "达留斯手下（剧情战）", "lp": "b" },
      { "kind": "chest", "at": [18, 36], "tr": [5], "lp": "l" },
      { "kind": "chest", "at": [36, 66], "tr": [3], "note": "攻略未写明位置，示意。", "lp": "r" },
      { "kind": "save", "at": [16, 56], "label": "Boss房存档点", "lp": "r" },
      { "kind": "chest", "at": [16, 48], "tr": [8], "note": "提里昂第3章通关后才能拿。", "lp": "l" },
      { "kind": "boss", "at": [6, 62], "label": "盖雷斯 & 盗贼团干部×2", "lp": "r" }
    ]
  },
  "eastern_wellspring_sands": {
    "theme": "desert",
    "size": [100, 70],
    "note": "沙漠东部的三岔枢纽：北上接北威尔斯宾克沙道，向东通往高原地区西斯托冈德山道，向西南下到东马尔沙利姆沙道；5 个宝箱分布在各路的小岔路尽头（回避手镯为紫宝箱，在路标东南小空地；其余按攻略描述示意）。",
    "zones": [
      { "kind": "cliff", "poly": [[70, 0], [100, 0], [100, 18], [88, 22], [76, 8]] },
      { "kind": "rock", "rect": [6, 18, 14, 12] },
      { "kind": "sand", "rect": [60, 46, 30, 18], "label": "沙丘" },
      { "kind": "sand", "poly": [[28, 24], [44, 22], [42, 36], [26, 38]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 2], [50, 20], [52, 36]], "label": "往北威尔斯宾克沙道" },
      { "kind": "main", "pts": [[52, 36], [70, 34], [86, 30], [98, 28]], "label": "往西斯托冈德山道" },
      { "kind": "main", "pts": [[52, 36], [40, 48], [24, 58], [6, 67]], "label": "往东马尔沙利姆沙道" },
      { "kind": "minor", "pts": [[50, 20], [34, 14], [24, 10]] },
      { "kind": "minor", "pts": [[70, 34], [74, 20], [80, 12]] },
      { "kind": "minor", "pts": [[86, 30], [90, 44]] },
      { "kind": "minor", "pts": [[40, 48], [48, 60], [56, 64]] },
      { "kind": "minor", "pts": [[24, 58], [14, 46]] }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 2], "to": "northern_wellspring_sands", "label": "往北威尔斯宾克沙道", "lp": "r", "dir": "北" },
      { "kind": "exit", "at": [98, 28], "to": "highlands/west_stonegard_pass", "label": "往西斯托冈德山道", "lp": "b", "dir": "东" },
      { "kind": "exit", "at": [6, 67], "to": "eastern_marsalim_sands", "label": "往东马尔沙利姆沙道", "lp": "r", "dir": "西南" },
      { "kind": "landmark", "at": [52, 36], "label": "三岔路口", "lp": "r" },
      { "kind": "chest", "at": [24, 10], "tr": [4], "label": "治愈葡萄（大）", "note": "路标后方（位置为示意）。", "lp": "b" },
      { "kind": "chest_red", "at": [80, 12], "tr": [2], "label": "装满铜币的钱袋", "note": "入口处往右，沿路经过仙人掌（位置为示意）。", "lp": "l" },
      { "kind": "chest", "at": [90, 44], "tr": [1], "label": "愚人金矿石", "note": "存档点左侧下小坡后折返（位置为示意）。", "lp": "l" },
      { "kind": "chest_purple", "at": [56, 64], "tr": [0], "label": "回避手镯", "note": "需盗贼：路标东南方的小空地，仙人掌与棕榈树之间。", "lp": "r" },
      { "kind": "chest", "at": [14, 46], "tr": [3], "label": "雷之精灵石（特大）", "note": "路标左下方，被棕榈叶遮住。", "lp": "t" }
    ]
  },
  "eastern_marsalim_sands": {
    "theme": "desert",
    "size": [100, 70],
    "note": "从东北（东威尔斯宾克沙道）进入后向西直通马尔沙利姆东门；中段岔路向东南延伸到尽头的马尔沙利姆地下墓地。入口左侧是紫宝箱，路标右侧岩柱旁一箱，石桥过桥后一箱；位置为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [50, 0], [44, 6], [20, 8], [0, 6]] },
      { "kind": "sand", "rect": [30, 42, 26, 16], "label": "沙丘" },
      { "kind": "cliff", "poly": [[86, 50], [100, 46], [100, 70], [80, 70]], "label": "地下墓地" },
      { "kind": "rock", "rect": [70, 24, 12, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 4], [80, 14], [62, 26], [44, 32], [26, 34], [2, 34]], "label": "往马尔沙利姆" },
      { "kind": "main", "pts": [[62, 26], [72, 44], [84, 56], [94, 66]], "label": "东南尽头（地下墓地）" },
      { "kind": "minor", "pts": [[62, 26], [70, 22]], "label": "路标右侧岩柱" },
      { "kind": "minor", "pts": [[26, 34], [22, 50], [16, 58]], "label": "石桥过桥后左侧" },
      { "kind": "minor", "pts": [[96, 4], [92, 12]], "label": "入口左侧棕榈树" }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 4], "to": "eastern_wellspring_sands", "label": "往东威尔斯宾克沙道", "lp": "l", "dir": "东北" },
      { "kind": "exit", "at": [2, 34], "to": "marsalim", "label": "往马尔沙利姆", "lp": "t", "dir": "西" },
      { "kind": "exit", "at": [94, 66], "to": "marsalim_catacombs", "label": "马尔沙利姆地下墓地", "lp": "l", "dir": "东南" },
      { "kind": "landmark", "at": [62, 26], "label": "岔路", "lp": "r" },
      { "kind": "danger", "at": [44, 32], "label": "迦缔吉夜群", "lp": "b" },
      { "kind": "chest", "at": [16, 58], "tr": [0], "label": "醒神李子篮", "note": "石桥过桥后左侧，墙与棕榈树之间。", "lp": "r" },
      { "kind": "chest", "at": [70, 22], "tr": [1], "label": "雷之精灵石（特大）", "note": "路标正右方，紧贴孤立的岩柱。", "lp": "r" },
      { "kind": "chest_purple", "at": [92, 12], "tr": [2], "label": "20000叶", "note": "需盗贼：入口处左侧两棵棕榈树下方（攻略の虎、TrueAchievements 一致）。", "lp": "l" }
    ]
  }
});

OT2.addDetail("sunlands", {
  "marsalim_catacombs": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "入口在西北，向东下台阶即是第一个存档点；继续向东上台阶，最里的墙边是紫宝箱，贴右侧石壁有隐藏通路通往复苏果酱；再往下走到三扇门前，门后是沙漠虫的Boss房（击败后深处沙中有名手之枪）。三扇门右侧有两组台阶：取最右一组下行，分岔往右、往下各有一箱；左侧台阶沿回廊向西，经过拱门的隐藏通路、死路尽头与北墙隐藏通路各有一箱。宝箱具体位置为示意。",
    "zones": [
      { "kind": "room", "rect": [2, 4, 16, 12], "label": "入口" },
      { "kind": "room", "rect": [18, 18, 16, 12], "label": "存档点前厅" },
      { "kind": "room", "rect": [38, 4, 24, 16], "label": "台阶上" },
      { "kind": "room", "rect": [56, 22, 22, 12], "label": "三扇门前" },
      { "kind": "room", "rect": [66, 2, 32, 16], "label": "Boss房" },
      { "kind": "room", "rect": [80, 36, 18, 30], "label": "右侧下行台阶" },
      { "kind": "room", "rect": [4, 38, 56, 28], "label": "左侧回廊" }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 10], [14, 12], [20, 22], [28, 26], [38, 22], [46, 14], [52, 22], [58, 28], [66, 28]], "label": "入口→存档点→台阶→三扇门前" },
      { "kind": "minor", "pts": [[46, 14], [46, 10]], "label": "台阶上最里的墙" },
      { "kind": "hidden", "pts": [[46, 14], [54, 10], [58, 8]], "label": "贴右侧石壁的隐藏通路" },
      { "kind": "main", "pts": [[66, 28], [70, 20], [78, 12], [88, 10]], "label": "三扇门→Boss房" },
      { "kind": "minor", "pts": [[88, 10], [92, 6]], "label": "Boss房深处" },
      { "kind": "stairs", "pts": [[66, 28], [78, 28], [84, 36], [88, 46]], "label": "右侧台阶下行" },
      { "kind": "minor", "pts": [[88, 46], [94, 46]], "label": "分岔往右" },
      { "kind": "stairs", "pts": [[88, 46], [90, 58]], "label": "分岔往下" },
      { "kind": "stairs", "pts": [[66, 28], [60, 34], [50, 40], [40, 46], [28, 52], [14, 52], [8, 58]], "label": "左侧台阶→回廊→尽头" },
      { "kind": "hidden", "pts": [[44, 42], [48, 48], [54, 52]], "label": "拱门内右壁隐藏通路" },
      { "kind": "hidden", "pts": [[20, 52], [18, 44], [12, 42]], "label": "北墙隐藏通路" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 10], "to": "eastern_marsalim_sands", "label": "入口", "lp": "b", "dir": "西北" },
      { "kind": "save", "at": [26, 25], "label": "存档点", "lp": "b" },
      { "kind": "chest_purple", "at": [46, 10], "tr": [0], "label": "大蛇短剑", "note": "需盗贼：上台阶后最里的墙边（被尘土遮住）。", "lp": "l" },
      { "kind": "chest_red", "at": [58, 8], "tr": [1], "label": "复苏果酱", "note": "紧挨紫宝箱，贴右侧石壁的隐藏通路。", "lp": "r" },
      { "kind": "gate", "at": [70, 21], "label": "三扇门（危险的预感）", "lp": "l" },
      { "kind": "boss", "at": [84, 10], "label": "沙漠虫（隐藏Boss）", "lp": "b" },
      { "kind": "chest_red", "at": [92, 5], "tr": [7], "label": "名手之枪", "note": "击败沙漠虫后才能开启，半埋在Boss房深处的沙中。", "lp": "l" },
      { "kind": "chest_red", "at": [94, 46], "tr": [2], "label": "回春果酱", "note": "最右一组台阶下行，分岔处往右。", "lp": "b" },
      { "kind": "chest", "at": [90, 59], "tr": [3], "label": "活力石榴（特大）", "note": "同一组台阶，分岔处往下继续下行。", "lp": "l" },
      { "kind": "landmark", "at": [44, 42], "label": "第一座拱门", "lp": "t" },
      { "kind": "chest_red", "at": [54, 52], "tr": [4], "label": "恐怖耐性石", "note": "拱门内右壁的隐藏通路尽头。", "lp": "r" },
      { "kind": "chest_red", "at": [12, 42], "tr": [5], "label": "天使之刀", "note": "沿北墙的隐藏通路。", "lp": "r" },
      { "kind": "chest_red", "at": [8, 58], "tr": [6], "label": "治愈葡萄串", "note": "左侧回廊尽头的死路。", "lp": "r" }
    ]
  },  "marsalim": {
    "theme": "city",
    "size": [120, 70],
    "note": "东西向主街贯穿全城：东门通东马尔沙利姆沙道，西门通灰色沙丘遗迹之路。主街中段北侧是中央广场与酒馆（门前有台阶），南侧是市场；城右侧台阶上到右上角的圣火骑士据点；城左侧台阶上到广场（右下角是武器店），再往西北就是王宫。西门旁有被镇民堵住的民家（紫宝箱）。",
    "zones": [
      { "kind": "plaza", "circle": [60, 45, 6], "label": "中央广场" },
      { "kind": "building", "rect": [52, 18, 16, 12], "label": "酒馆" },
      { "kind": "plaza", "circle": [28, 22, 6], "label": "台阶上广场" },
      { "kind": "building", "rect": [36, 30, 9, 6], "label": "武器店" },
      { "kind": "building", "rect": [92, 4, 24, 14], "label": "圣火骑士据点" },
      { "kind": "building", "rect": [68, 54, 10, 7], "label": "旅店" },
      { "kind": "building", "rect": [82, 54, 10, 7], "label": "道具店" },
      { "kind": "house", "rect": [8, 56, 10, 8], "label": "被堵住的民家" },
      { "kind": "plaza", "circle": [60, 62, 5], "label": "市场" },
      { "kind": "house", "rect": [100, 56, 10, 7] },
      { "kind": "house", "rect": [6, 38, 9, 6] },
      { "kind": "house", "rect": [84, 30, 9, 7] },
      { "kind": "water", "poly": [[44, 4], [50, 4], [50, 14], [44, 14]] },
      { "kind": "wall", "rect": [0, 12, 4, 30] }
    ],
    "paths": [
      { "kind": "main", "pts": [[118, 50], [96, 50], [76, 50], [60, 50], [44, 50], [26, 52], [2, 52]], "label": "主街（东门—西门）", "smooth": false },
      { "kind": "stairs", "pts": [[96, 50], [98, 36], [100, 22]], "label": "城右侧台阶" },
      { "kind": "minor", "pts": [[100, 22], [104, 18]] },
      { "kind": "minor", "pts": [[100, 22], [112, 26]] },
      { "kind": "stairs", "pts": [[44, 50], [38, 40], [34, 30]], "label": "城左侧台阶" },
      { "kind": "main", "pts": [[34, 30], [24, 18], [14, 10], [4, 3]], "label": "往王宫" },
      { "kind": "minor", "pts": [[34, 30], [38, 31]] },
      { "kind": "stairs", "pts": [[60, 50], [60, 40], [60, 31]], "label": "酒馆前台阶" },
      { "kind": "minor", "pts": [[60, 50], [60, 62]], "label": "往市场" },
      { "kind": "minor", "pts": [[34, 30], [40, 26]], "label": "武器店后方" },
      { "kind": "minor", "pts": [[96, 50], [92, 45]], "label": "存档点正东的摊位" },
      { "kind": "minor", "pts": [[26, 52], [14, 56], [13, 62]] }
    ],
    "pois": [
      { "kind": "exit", "at": [118, 50], "to": "eastern_marsalim_sands", "label": "东门", "lp": "t", "dir": "东" },
      { "kind": "exit", "at": [2, 52], "to": "grimsand_road", "label": "西门", "lp": "t", "dir": "西" },
      { "kind": "exit", "at": [4, 3], "to": "marsalim_palace", "label": "往王宫", "lp": "r", "dir": "西北" },
      { "kind": "npc", "at": [104, 18], "label": "艾丽莎（圣火骑士）", "npc": [0], "lp": "l" },
      { "kind": "hidden", "at": [112, 26], "tr": [4], "label": "火之精灵石（特大）", "note": "汉伊特第4章后对圣火骑士打听/探查后出现；位置为示意。", "lp": "b" },
      { "kind": "tavern", "at": [60, 30], "label": "酒馆", "lp": "r" },
      { "kind": "hidden", "at": [63, 36], "tr": [3], "label": "装满铜币的钱袋（酒馆前台阶上）", "note": "对老婆婆打听/探查后出现。", "lp": "r" },
      { "kind": "hidden", "at": [37, 34], "tr": [5], "label": "醒神李子篮（武器店前）", "note": "对镇民（情报Lv45）打听/探查后出现，宝箱在武器店前；位置为示意。", "lp": "b" },
      { "kind": "weapon", "at": [38, 31], "label": "武器店", "lp": "r" },
      { "kind": "npc", "at": [31, 27], "label": "马露夫（特蕾莎第4章后）", "npc": [9], "lp": "l" },
      { "kind": "npc", "at": [40, 53], "label": "老人（武器店新货）", "npc": [8], "lp": "r" },
      { "kind": "save", "at": [70, 47], "label": "存档点", "lp": "t" },
      { "kind": "npc", "at": [78, 46], "label": "不碎者葛利格", "npc": [2], "lp": "r" },
      { "kind": "inn", "at": [73, 54], "label": "旅店", "lp": "b" },
      { "kind": "item", "at": [87, 54], "label": "道具店", "lp": "b" },
      { "kind": "npc", "at": [56, 62], "label": "老贵族", "npc": [4], "lp": "l" },
      { "kind": "npc", "at": [64, 62], "label": "剑士尤里", "npc": [1], "lp": "r" },
      { "kind": "npc", "at": [20, 50], "label": "圣火骑士（城西）", "npc": [3], "lp": "t" },
      { "kind": "npc", "at": [14, 56], "label": "守门镇民（炼狱斧）", "npc": [6], "lp": "r" },
      { "kind": "chest_purple", "at": [13, 62], "tr": [2], "note": "门口镇民挑战需Lv70，基本只能唆使；开箱需盗贼。", "lp": "b" },
      { "kind": "chest", "at": [40, 26], "tr": [0], "label": "黑暗治疗药草", "note": "武器店后方的房子旁（TrueAchievements：武器店后房屋旁）。", "lp": "r" },
      { "kind": "chest", "at": [92, 45], "tr": [1], "label": "睡眠之瓶", "note": "从存档点一直往东，贴墙摊位旁，被部分遮挡。", "lp": "t" }
    ]
  },
  "marsalim_palace": {
    "theme": "castle",
    "size": [120, 70],
    "note": "布局与阿特拉斯达姆王宫相近：右下正门经前庭进入1F大厅，1F西侧有通往地下牢房的台阶；大厅北端台阶上2F，2F正中是王座之间（王座后方有紫宝箱），2F东侧三个宝箱，2F西侧与1F东西两侧有隐藏道具（位置参照攻略の虎）。",
    "zones": [
      { "kind": "room", "rect": [4, 26, 56, 40], "label": "1F" },
      { "kind": "room", "rect": [64, 4, 52, 46], "label": "2F" },
      { "kind": "room", "rect": [4, 2, 36, 20], "label": "地下牢房" },
      { "kind": "building", "rect": [80, 4, 22, 12], "label": "王座之间" },
      { "kind": "garden", "rect": [64, 54, 52, 14], "label": "前庭" }
    ],
    "paths": [
      { "kind": "main", "pts": [[116, 66], [96, 64], [72, 62], [34, 60], [34, 44], [34, 32]], "label": "正门→1F大厅" },
      { "kind": "minor", "pts": [[34, 44], [14, 44], [6, 50]], "label": "1F西侧" },
      { "kind": "minor", "pts": [[34, 44], [52, 44], [56, 36]], "label": "1F东侧" },
      { "kind": "stairs", "pts": [[14, 44], [12, 24], [14, 16]], "label": "往地下牢房" },
      { "kind": "minor", "pts": [[14, 16], [24, 10], [34, 8]], "label": "牢房走廊" },
      { "kind": "stairs", "pts": [[34, 32], [50, 28], [70, 30]], "label": "上2F" },
      { "kind": "main", "pts": [[70, 30], [78, 30], [90, 30], [106, 30], [114, 30]], "label": "2F走廊" },
      { "kind": "main", "pts": [[90, 30], [90, 12]], "label": "王座之间" },
      { "kind": "minor", "pts": [[90, 12], [96, 6]], "label": "王座后方" },
      { "kind": "minor", "pts": [[106, 30], [112, 18]], "label": "2F东侧" },
      { "kind": "minor", "pts": [[106, 30], [112, 42]] },
      { "kind": "minor", "pts": [[78, 30], [72, 41]], "label": "2F西侧" }
    ],
    "pois": [
      { "kind": "exit", "at": [116, 66], "to": "marsalim", "label": "王宫正门（往城下）", "lp": "t", "dir": "东南" },
      { "kind": "npc", "at": [34, 52], "label": "卫兵（巨人之斧）", "npc": [1], "lp": "r" },
      { "kind": "hidden", "at": [6, 50], "tr": [4], "label": "杂物小袋（1F西）", "note": "对2F左侧卫兵打听/探查后出现。", "lp": "r" },
      { "kind": "npc", "at": [24, 44], "label": "部族长", "npc": [4], "lp": "b" },
      { "kind": "hidden", "at": [56, 36], "tr": [6], "label": "李子（大）（1F东）", "note": "对入口卫兵打听/探查后出现。", "lp": "l" },
      { "kind": "npc", "at": [34, 8], "label": "罪人凯文", "npc": [5], "lp": "b" },
      { "kind": "landmark", "at": [90, 12], "label": "王座（克林姆王）", "lp": "l" },
      { "kind": "npc", "at": [88, 20], "label": "雷纳尔将军（汉伊特第4章后）", "npc": [0], "lp": "l" },
      { "kind": "npc", "at": [85, 28], "label": "剧场经理", "npc": [3], "lp": "l" },
      { "kind": "chest_purple", "at": [96, 6], "tr": [3], "note": "王座后方，需盗贼。", "lp": "r" },
      { "kind": "npc", "at": [98, 30], "label": "拉夫队长", "npc": [2], "lp": "b" },
      { "kind": "chest_red", "at": [112, 18], "tr": [0], "lp": "l" },
      { "kind": "chest_red", "at": [114, 30], "tr": [1], "lp": "t" },
      { "kind": "chest_red", "at": [112, 42], "tr": [2], "lp": "l" },
      { "kind": "hidden", "at": [72, 41], "tr": [5], "label": "火之精灵石（特大）（2F西）", "note": "对2F右侧卫兵打听/探查后出现。", "lp": "b" }
    ]
  },
  "grimsand_road": {
    "theme": "desert",
    "size": [100, 70],
    "note": "从马尔沙利姆西门（东）出发，斜向西北穿过石拱到达灰色沙丘遗迹入口；石拱南侧、遗迹入口东侧、西北角各有一个宝箱。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [44, 0], [38, 3], [10, 4], [0, 6]], "label": "灰色沙丘遗迹" },
      { "kind": "rock", "rect": [58, 30, 8, 4] },
      { "kind": "sand", "rect": [66, 52, 30, 14], "label": "沙丘" },
      { "kind": "sand", "poly": [[20, 34], [40, 38], [36, 58], [14, 52]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 40], [80, 42], [62, 36], [44, 28], [30, 18], [20, 8], [16, 2]], "label": "往遗迹" },
      { "kind": "minor", "pts": [[20, 8], [28, 6]], "label": "遗迹入口东侧" },
      { "kind": "minor", "pts": [[62, 36], [60, 50], [56, 58]], "label": "石拱南侧" },
      { "kind": "minor", "pts": [[30, 18], [14, 20], [5, 12]], "label": "西北角" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 40], "to": "marsalim", "label": "往马尔沙利姆（西门）", "lp": "t", "dir": "东" },
      { "kind": "exit", "at": [16, 2], "to": "grimsand_ruins", "label": "遗迹入口", "lp": "b", "dir": "西北" },
      { "kind": "chest", "at": [28, 6], "tr": [0], "lp": "r" },
      { "kind": "landmark", "at": [62, 36], "label": "石拱", "lp": "t" },
      { "kind": "chest", "at": [56, 58], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [5, 12], "tr": [2], "lp": "b" },
      { "kind": "danger", "at": [44, 28], "label": "亡灵骑士/遗物Mk.II（偷窃刷点）", "lp": "l" }
    ]
  },
  "grimsand_ruins": {
    "theme": "ruins",
    "size": [120, 70],
    "note": "右下入口为上层：第一个房间右侧下坡、往南台阶下死路各有宝箱，随后下到下层。下层有往北新区域（紫宝箱）、南侧台阶与雾中的南侧大厅；左侧死路有李子（大）×2，其西北隐藏通路绕到雕像大厅台阶左下。上到雕像大厅后经两尊雕像、右侧房间、过桥（桥下泥地）到最后存档点，右行进入红眼的Boss房。层间相对位置为示意。",
    "zones": [
      { "kind": "room", "rect": [62, 30, 56, 38], "label": "上层" },
      { "kind": "room", "rect": [2, 30, 58, 38], "label": "下层" },
      { "kind": "room", "rect": [2, 54, 26, 14], "label": "南侧大厅（雾）" },
      { "kind": "room", "rect": [2, 2, 54, 26], "label": "雕像大厅" },
      { "kind": "swamp", "rect": [66, 20, 16, 8], "label": "泥地" },
      { "kind": "pit", "poly": [[58, 10], [84, 10], [84, 20], [58, 20]] },
      { "kind": "room", "rect": [94, 2, 24, 22], "label": "Boss房" }
    ],
    "paths": [
      { "kind": "main", "pts": [[116, 66], [106, 60], [98, 56], [86, 52], [74, 46]], "label": "上层" },
      { "kind": "stairs", "pts": [[98, 56], [108, 50], [114, 44]], "label": "第一个房间右侧下坡" },
      { "kind": "stairs", "pts": [[86, 52], [86, 62], [78, 66]], "label": "上层往南台阶下死路" },
      { "kind": "minor", "pts": [[86, 52], [90, 40]] },
      { "kind": "minor", "pts": [[74, 46], [70, 36]] },
      { "kind": "stairs", "pts": [[74, 46], [64, 48], [56, 50]], "label": "下到下层" },
      { "kind": "main", "pts": [[56, 50], [44, 48], [30, 46], [18, 40]], "label": "下层" },
      { "kind": "minor", "pts": [[44, 48], [44, 36], [48, 32]], "label": "下层分岔往北（新区域）" },
      { "kind": "stairs", "pts": [[44, 48], [50, 58], [52, 64]], "label": "右侧台阶往南" },
      { "kind": "stairs", "pts": [[30, 46], [30, 56]], "label": "南侧台阶" },
      { "kind": "minor", "pts": [[30, 56], [34, 64]], "label": "台阶下死路" },
      { "kind": "minor", "pts": [[30, 56], [18, 60], [6, 62]], "label": "南侧大厅最左（雾中）" },
      { "kind": "minor", "pts": [[18, 40], [8, 44]], "label": "死路（李子大×2）" },
      { "kind": "hidden", "pts": [[8, 44], [6, 34], [10, 26]], "label": "西北隐藏通路" },
      { "kind": "stairs", "pts": [[18, 40], [16, 30], [18, 22]], "label": "上到雕像大厅" },
      { "kind": "main", "pts": [[18, 22], [26, 18], [40, 18], [54, 16]], "label": "雕像大厅" },
      { "kind": "minor", "pts": [[18, 22], [20, 8], [28, 5]], "label": "倒塌石柱下方再往右" },
      { "kind": "minor", "pts": [[40, 18], [42, 8]], "label": "第二尊雕像后" },
      { "kind": "minor", "pts": [[54, 16], [58, 8]], "label": "雕像区右侧房间" },
      { "kind": "bridge", "pts": [[54, 16], [68, 16], [82, 16]], "label": "桥" },
      { "kind": "minor", "pts": [[68, 16], [72, 24], [75, 25]], "label": "桥下泥地" },
      { "kind": "main", "pts": [[82, 16], [88, 14]] },
      { "kind": "minor", "pts": [[88, 14], [80, 6], [70, 4]], "label": "最后存档点左路" },
      { "kind": "main", "pts": [[88, 14], [100, 12], [110, 10]], "label": "Boss房" }
    ],
    "pois": [
      { "kind": "exit", "at": [116, 66], "to": "grimsand_road", "label": "遗迹入口", "lp": "t", "dir": "东南" },
      { "kind": "chest", "at": [114, 44], "tr": [0], "lp": "l" },
      { "kind": "chest_purple", "at": [78, 66], "tr": [5], "note": "需盗贼。", "lp": "l" },
      { "kind": "chest", "at": [90, 40], "tr": [1], "note": "攻略未写明位置，示意。", "lp": "r" },
      { "kind": "chest", "at": [70, 36], "tr": [2], "note": "攻略未写明位置，示意。", "lp": "l" },
      { "kind": "chest_purple", "at": [48, 32], "tr": [4], "note": "需盗贼。", "lp": "r" },
      { "kind": "chest", "at": [34, 64], "tr": [6], "lp": "r" },
      { "kind": "chest", "at": [52, 64], "tr": [12], "lp": "r" },
      { "kind": "chest", "at": [6, 62], "tr": [14], "lp": "t" },
      { "kind": "chest", "at": [8, 44], "tr": [10], "label": "醒神李子（大）×2", "lp": "b" },
      { "kind": "chest", "at": [10, 26], "tr": [7], "lp": "r" },
      { "kind": "landmark", "at": [26, 18], "label": "第一尊雕像", "lp": "b" },
      { "kind": "landmark", "at": [40, 18], "label": "第二尊雕像", "lp": "b" },
      { "kind": "landmark", "at": [20, 8], "label": "倒塌石柱", "lp": "l" },
      { "kind": "chest", "at": [28, 5], "tr": [8], "lp": "r" },
      { "kind": "chest", "at": [42, 8], "tr": [9], "lp": "r" },
      { "kind": "chest", "at": [58, 8], "tr": [3], "lp": "b" },
      { "kind": "chest", "at": [75, 25], "tr": [13], "lp": "r" },
      { "kind": "chest", "at": [70, 4], "tr": [11], "lp": "t" },
      { "kind": "save", "at": [88, 14], "label": "最后存档点", "lp": "b" },
      { "kind": "boss", "at": [110, 10], "label": "红眼", "lp": "b" }
    ]
  }
});

OT2.addDetail("highlands", {
  "cobbleston": {
    "theme": "village",
    "size": [100, 70],
    "note": "山坡上的小村，东口通往南鹅卵石村山道，北面上坡出口进山通往山贼大本营；村长家在最高处，西侧是农田与牛棚，商店在东口旁。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [100, 0], [100, 8], [70, 10], [58, 6], [40, 9], [20, 6], [0, 10]] },
      { "kind": "farm", "rect": [6, 34, 22, 18], "label": "农田" },
      { "kind": "grass", "rect": [6, 54, 22, 12], "label": "牧场" },
      { "kind": "house", "rect": [8, 56, 8, 6], "label": "牛棚" },
      { "kind": "building", "rect": [42, 12, 14, 9], "label": "村长家" },
      { "kind": "building", "rect": [62, 26, 12, 8], "label": "酒馆" },
      { "kind": "building", "rect": [76, 44, 10, 7], "label": "商店" },
      { "kind": "house", "rect": [32, 28, 9, 7] },
      { "kind": "house", "rect": [44, 46, 9, 7] },
      { "kind": "house", "rect": [30, 50, 8, 6] },
      { "kind": "plaza", "circle": [52, 36, 6], "label": "村中广场" }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 50], [84, 40], [68, 38], [52, 36], [40, 40], [30, 44]] },
      { "kind": "stairs", "pts": [[52, 36], [52, 28], [49, 22]], "label": "上坡到村长家" },
      { "kind": "minor", "pts": [[52, 28], [62, 22], [70, 14], [78, 4]], "label": "北面山路" },
      { "kind": "minor", "pts": [[68, 38], [68, 34]] },
      { "kind": "minor", "pts": [[84, 40], [81, 44]] },
      { "kind": "minor", "pts": [[40, 40], [36, 35]] },
      { "kind": "minor", "pts": [[40, 40], [46, 50], [48, 53]] },
      { "kind": "minor", "pts": [[30, 44], [28, 52], [20, 58], [16, 59]], "label": "牧场小路" },
      { "kind": "minor", "pts": [[46, 50], [36, 54], [34, 56]] },
      { "kind": "minor", "pts": [[68,34],[68,30]] },
      { "kind": "minor", "pts": [[49,22],[46,19]] },
      { "kind": "minor", "pts": [[30,44],[22,40]] },
      { "kind": "minor", "pts": [[30,44],[24,46]] },
      { "kind": "minor", "pts": [[16,59],[18,62]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 50], "to": "south_cobbleston_gap", "label": "东口", "lp": "t" },
      { "kind": "exit", "at": [78, 4], "to": "mountain_pass", "label": "北面山路", "lp": "l" },
      { "kind": "shop", "at": [81, 47], "label": "杂货/武器店", "lp": "b" },
      { "kind": "inn", "at": [58, 22], "label": "旅店（村长家旁、存档点处）", "lp": "r" },
      { "kind": "tavern", "at": [68, 30], "label": "酒馆", "npc": [4], "lp": "r" },
      { "kind": "chest_red", "at": [36, 34], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [48, 53], "tr": [1], "lp": "r" },
      { "kind": "hidden", "at": [46, 19], "tr": [2], "label": "战争骑枪（村长家内）", "lp": "l" },
      { "kind": "hidden", "at": [22, 40], "tr": [3], "label": "打听后的隐藏物", "note": "秘术之弓、还魂橄榄、净化之种、糖果分散在村内，需分别探听酒馆村民、两名村民与菲利普后才会出现。", "lp": "b" },
      { "kind": "npc", "at": [52, 24], "label": "村长", "npc": [0], "lp": "r" },
      { "kind": "npc", "at": [24, 46], "label": "农民", "npc": [2], "lp": "b" },
      { "kind": "npc", "at": [18, 62], "label": "牧牛人", "npc": [3], "lp": "r" },
      { "kind": "npc", "at": [58, 39], "label": "自警团团长", "npc": [6], "lp": "b" },
      { "kind": "landmark", "at": [52, 36], "label": "广场", "lp": "t" }
    ]
  },
  "mountain_pass": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "从鹅卵石村北口进山的一条山路：存档点处分上下两条小岔，左上方另有岔路，过桥后向西北到达山贼大本营入口。",
    "zones": [
      { "kind": "cliff", "poly": [[100, 0], [60, 0], [66, 14], [82, 20], [100, 18]] },
      { "kind": "cliff", "poly": [[40, 70], [0, 70], [0, 48], [14, 52], [30, 60]] },
      { "kind": "water", "poly": [[44, 0], [36, 0], [34, 30], [38, 50], [42, 70], [48, 70], [44, 48], [42, 28]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[62, 68], [66, 56], [68, 44], [56, 40], [45, 38]] },
      { "kind": "bridge", "pts": [[45, 38], [34, 36]] },
      { "kind": "main", "pts": [[34, 36], [22, 30], [12, 20], [6, 8]] },
      { "kind": "minor", "pts": [[68, 44], [70, 32], [74, 26]], "label": "存档点向上" },
      { "kind": "minor", "pts": [[68, 44], [64, 54], [56, 60], [52, 62]], "label": "存档点向下绕行" },
      { "kind": "minor", "pts": [[56, 40], [52, 26], [48, 14]], "label": "左上方岔路" },
      { "kind": "minor", "pts": [[22, 30], [16, 36]] }
    ],
    "pois": [
      { "kind": "exit", "at": [62, 68], "to": "cobbleston", "label": "往鹅卵石村", "lp": "r" },
      { "kind": "exit", "at": [6, 8], "to": "brigands_den", "label": "山贼大本营入口", "lp": "r" },
      { "kind": "save", "at": [68, 44], "lp": "r", "label": "存档点" },
      { "kind": "chest", "at": [74, 26], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [52, 62], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [48, 14], "tr": [2], "lp": "r" },
      { "kind": "save", "at": [22, 30], "label": "过桥后存档点", "lp": "r" },
      { "kind": "chest_red", "at": [16, 36], "tr": [3], "lp": "l" },
      { "kind": "danger", "at": [10, 15], "label": "3名山贼剧情战", "lp": "r" }
    ]
  },
  "brigands_den": {
    "theme": "cave",
    "size": [100, 70],
    "note": "入口在南侧，左右各一条支洞通往宝箱；正路向北经过行商与存档点进入 Boss 房。右侧支洞尽头还有一条隐藏小路。",
    "zones": [
      { "kind": "room", "rect": [36, 50, 28, 16], "label": "入口洞厅" },
      { "kind": "room", "rect": [70, 46, 26, 14] },
      { "kind": "room", "rect": [4, 38, 26, 18] },
      { "kind": "room", "rect": [38, 22, 24, 14], "label": "存档点" },
      { "kind": "room", "rect": [34, 2, 32, 14], "label": "Boss 房" },
      { "kind": "pit", "poly": [[64, 28], [74, 24], [80, 34], [70, 38]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 58], [50, 44], [50, 30]], "label": "入口洞厅至存档点" },
      { "kind": "main", "pts": [[50, 30], [50, 16], [50, 8]], "label": "存档点至Boss房" },
      { "kind": "minor", "pts": [[50, 58], [64, 56], [78, 54], [90, 52]], "label": "入口向右走到底" },
      { "kind": "hidden", "pts": [[90, 52], [96, 44], [94, 34]], "label": "隐藏小路" },
      { "kind": "minor", "pts": [[50, 58], [36, 54], [22, 48], [12, 42]], "label": "入口向左走到底" },
      { "kind": "minor", "pts": [[22, 48], [20, 52]] },
      { "kind": "minor", "pts": [[50, 30], [42, 32], [36, 40], [34, 44]], "label": "存档点处向下" },
      { "kind": "minor", "pts": [[50,30],[56,27]] }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "mountain_pass", "label": "洞口", "lp": "r" },
      { "kind": "chest", "at": [90, 52], "tr": [0], "lp": "b" },
      { "kind": "chest_red", "at": [94, 34], "tr": [1], "lp": "l" },
      { "kind": "chest_red", "at": [12, 42], "tr": [2], "lp": "t" },
      { "kind": "chest", "at": [20, 52], "tr": [3], "lp": "b" },
      { "kind": "chest", "at": [34, 44], "tr": [4], "lp": "l" },
      { "kind": "save", "at": [50, 30], "lp": "r", "label": "存档点" },
      { "kind": "peddler", "at": [56, 27], "label": "行商", "npc": [0], "lp": "r" },
      { "kind": "danger", "at": [50, 62], "label": "3名山贼剧情战", "lp": "r", "note": "第1章入口处的剧情战，对手弱剑、横一字斩可清场。" },
      { "kind": "boss", "at": [50, 8], "label": "卡斯顿", "lp": "r" }
    ]
  },
  "south_cobbleston_gap": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "西接鹅卵石村、西南往沙漠地区，北端接北鹅卵石村山道。进山后先向右有小岔，上坡后分左右两路：左路到底是死胡同宝箱，右路下坡继续北上；左侧山壁有个小山洞。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [26, 18], [10, 26], [0, 24]] },
      { "kind": "cliff", "poly": [[64, 60], [100, 54], [100, 70], [60, 70]] },
      { "kind": "rock", "rect": [6, 34, 16, 14], "label": "小山洞" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 46], [8, 52], [16, 58], [30, 56], [42, 48]] },
      { "kind": "minor", "pts": [[16, 58], [12, 66], [4, 68]], "label": "往沙漠地区" },
      { "kind": "minor", "pts": [[30, 56], [38, 64], [46, 66]], "label": "进入后先向右" },
      { "kind": "stairs", "pts": [[42, 48], [48, 40], [52, 34]], "label": "上坡" },
      { "kind": "minor", "pts": [[52, 34], [40, 28], [32, 22]], "label": "岔路向左走到底" },
      { "kind": "main", "pts": [[52, 34], [64, 36], [74, 42], [80, 38], [86, 26], [92, 12], [96, 4]] },
      { "kind": "minor", "pts": [[74, 42], [76, 48]], "label": "下坡右侧" },
      { "kind": "minor", "pts": [[30, 56], [24, 48], [18, 42]], "label": "左侧小山洞" },
      { "kind": "minor", "pts": [[86, 26], [94, 28]] },
      { "kind": "minor", "pts": [[64,36],[60,40]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 46], "to": "cobbleston", "label": "往鹅卵石村", "lp": "b" },
      { "kind": "exit", "at": [4, 68], "to": "sunlands/eastern_sunshade_sands", "label": "往东桑谢德沙道", "lp": "r" },
      { "kind": "exit", "at": [96, 4], "to": "north_cobbleston_gap", "label": "往北鹅卵石村山道", "lp": "l" },
      { "kind": "chest", "at": [46, 66], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [32, 22], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [76, 48], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [16, 41], "tr": [3], "lp": "t" },
      { "kind": "chest", "at": [94, 28], "tr": [4], "lp": "b" },
      { "kind": "save", "at": [64, 36], "label": "存档点", "lp": "t" },
      { "kind": "npc", "at": [60, 40], "label": "基特", "npc": [0], "lp": "b" }
    ]
  }
});

OT2.addDetail("highlands", {
  "north_cobbleston_gap": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "西南接南鹅卵石村山道，北端过木桥进入海岸地区，东北角是无垢巢窟入口，东南下坡通往北斯托冈德山道。存档点向右下有两个宝箱（木箱旁的隐藏小路通紫箱）。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [40, 0], [38, 12], [26, 22], [10, 30], [0, 34]] },
      { "kind": "water", "poly": [[38, 10], [64, 8], [100, 12], [100, 18], [62, 16], [40, 18]] },
      { "kind": "cliff", "poly": [[100, 22], [100, 44], [90, 34], [92, 26]] },
      { "kind": "grass", "rect": [32, 54, 18, 14], "label": "草坡" },
      { "kind": "rock", "rect": [82, 20, 10, 8] },
      { "kind": "cliff", "poly": [[60, 70], [70, 60], [86, 66], [92, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 64], [16, 58], [28, 50], [40, 44], [52, 38]] },
      { "kind": "minor", "pts": [[28, 50], [38, 52], [44, 60]], "label": "存档点向右再向下" },
      { "kind": "hidden", "pts": [[44, 60], [36, 64], [30, 66]], "label": "宝箱旁继续向左（隐藏下坡）" },
      { "kind": "main", "pts": [[52, 38], [50, 28], [48, 20]] },
      { "kind": "bridge", "pts": [[48, 20], [50, 8]], "label": "木桥" },
      { "kind": "main", "pts": [[50, 8], [52, 2]] },
      { "kind": "minor", "pts": [[50, 8], [60, 5]], "label": "桥头草丛" },
      { "kind": "main", "pts": [[52, 38], [66, 30], [78, 22], [96, 4]], "label": "往无垢巢窟" },
      { "kind": "hidden", "pts": [[78, 22], [86, 26]], "label": "岩石间隐藏入口" },
      { "kind": "main", "pts": [[52, 38], [66, 44], [80, 52], [98, 62]] },
      { "kind": "minor", "pts": [[66, 44], [80, 40], [92, 38], [92, 48]], "label": "向右到头后笔直向下" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 64], "to": "south_cobbleston_gap", "label": "往南鹅卵石村山道", "lp": "t" },
      { "kind": "exit", "at": [52, 2], "to": "coastlands/east_rippletide_coast", "label": "往东利布尔泰德海道", "lp": "r" },
      { "kind": "exit", "at": [96, 4], "to": "untouched_sanctum", "label": "无垢巢窟", "lp": "l" },
      { "kind": "exit", "at": [98, 62], "to": "north_stonegard_pass", "label": "往北斯托冈德山道", "lp": "t" },
      { "kind": "save", "at": [28, 50], "label": "存档点", "lp": "t" },
      { "kind": "landmark", "at": [52, 38], "label": "路标", "lp": "l" },
      { "kind": "chest", "at": [44, 60], "tr": [0], "lp": "r" },
      { "kind": "chest_purple", "at": [30, 66], "tr": [1], "lp": "r", "note": "游民星空记为紫色宝箱，需开锁；在木宝箱旁岩壁边的隐藏下坡。" },
      { "kind": "chest", "at": [92, 48], "tr": [2], "lp": "l", "note": "部分攻略记为路标南侧（往利布尔泰德方向）的红色宝箱，位置按本地数据示意。" },
      { "kind": "chest", "at": [86, 26], "tr": [3], "lp": "b", "note": "无垢巢窟入口附近，主路旁岩石之间的隐藏小凹处。" },
      { "kind": "chest", "at": [60, 5], "tr": [4], "lp": "r" }
    ]
  },
  "untouched_sanctum": {
    "theme": "cave",
    "size": [100, 70],
    "note": "灰雾洞窟：西南洞口进入后到存档点，向左上有木箱与隐藏红箱，向右下是诺艾尔支线石碑与紫箱，向东沿地下湖的蜿蜒小路到尽头空地有两个木箱。木箱与道具的对应以游戏内为准。",
    "zones": [
      { "kind": "room", "rect": [2, 52, 22, 16], "label": "洞口" },
      { "kind": "room", "rect": [30, 28, 22, 16] },
      { "kind": "water", "poly": [[60, 20], [76, 16], [84, 26], [74, 34], [60, 30]] },
      { "kind": "room", "rect": [78, 42, 20, 20], "label": "尽头空地" },
      { "kind": "room", "rect": [30, 54, 30, 14] },
      { "kind": "rock", "rect": [10, 4, 30, 12] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [14, 58], [26, 46], [40, 36]] },
      { "kind": "minor", "pts": [[40, 36], [36, 24], [34, 12]], "label": "存档点向左再向北" },
      { "kind": "hidden", "pts": [[34, 12], [24, 12], [16, 10]], "label": "左侧岩壁隐藏路" },
      { "kind": "minor", "pts": [[40, 36], [52, 40], [54, 50]], "label": "存档点向右后向下" },
      { "kind": "minor", "pts": [[54, 50], [46, 58], [40, 62]], "label": "往石碑" },
      { "kind": "minor", "pts": [[54, 50], [64, 56], [70, 58]], "label": "岔路向右" },
      { "kind": "main", "pts": [[40, 36], [50, 26], [56, 14], [70, 8], [86, 10], [92, 22], [88, 34], [88, 46]], "label": "蜿蜒小路" },
      { "kind": "minor", "pts": [[88, 46], [82, 47]] },
      { "kind": "minor", "pts": [[88, 46], [93, 57]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "north_cobbleston_gap", "label": "洞口", "lp": "r" },
      { "kind": "save", "at": [40, 36], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [34, 12], "tr": [0], "lp": "r" },
      { "kind": "chest_red", "at": [16, 10], "tr": [1], "lp": "b" },
      { "kind": "chest_purple", "at": [38, 62], "tr": [2], "lp": "l" },
      { "kind": "landmark", "at": [46, 60], "label": "菲里恩石碑", "lp": "b", "note": "支线「历史研究家诺艾尔（I）」需调查的石碑。" },
      { "kind": "chest", "at": [70, 58], "tr": [5], "lp": "r" },
      { "kind": "chest", "at": [82, 47], "tr": [3], "lp": "t" },
      { "kind": "chest", "at": [93, 57], "tr": [4], "lp": "l" },
      { "kind": "landmark", "at": [56, 14], "label": "地下湖畔", "lp": "l" }
    ]
  },
  "north_stonegard_pass": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "高原枢纽：西北来自北鹅卵石村山道，路标处分三路——东去斯托冈德、东北上海岸地区月隐海道、西南下西斯托冈德山道；西侧岔路通往雷剑将的祠堂。三个宝箱均为木箱，道具对应为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[20, 0], [80, 0], [76, 10], [60, 20], [40, 18], [26, 8]] },
      { "kind": "cliff", "poly": [[60, 70], [70, 52], [100, 48], [100, 70]] },
      { "kind": "rock", "rect": [52, 22, 10, 6], "label": "岩拱" },
      { "kind": "grass", "rect": [18, 58, 14, 10] },
      { "kind": "cliff", "poly": [[0, 34], [10, 36], [14, 44], [0, 48]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 4], [14, 14], [28, 26], [46, 36]] },
      { "kind": "main", "pts": [[46, 36], [64, 38], [80, 40], [98, 40]] },
      { "kind": "main", "pts": [[46, 36], [36, 46], [20, 54], [2, 58]] },
      { "kind": "minor", "pts": [[28, 26], [16, 26], [2, 24]], "label": "往雷剑将的祠堂" },
      { "kind": "main", "pts": [[64, 38], [76, 26], [88, 14], [96, 4]] },
      { "kind": "hidden", "pts": [[46, 36], [52, 30], [58, 28]], "label": "路标东侧岩拱下隐藏路" },
      { "kind": "minor", "pts": [[20, 54], [22, 62], [26, 64]], "label": "下坡到树前" },
      { "kind": "minor", "pts": [[88, 14], [80, 10]], "label": "海道口左侧草地" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 4], "to": "north_cobbleston_gap", "label": "往北鹅卵石村山道", "lp": "r" },
      { "kind": "exit", "at": [2, 24], "to": "shrine_thunderblade", "label": "雷剑将的祠堂", "lp": "b" },
      { "kind": "exit", "at": [2, 58], "to": "west_stonegard_pass", "label": "往西斯托冈德山道", "lp": "t" },
      { "kind": "exit", "at": [98, 40], "to": "stonegard", "label": "往斯托冈德", "lp": "t" },
      { "kind": "exit", "at": [96, 4], "to": "coastlands/moonstruck_coast", "label": "往月隐海道", "lp": "l" },
      { "kind": "landmark", "at": [46, 36], "label": "路标", "lp": "b" },
      { "kind": "chest", "at": [58, 28], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [26, 64], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [80, 10], "tr": [2], "lp": "b" }
    ]
  },
  "shrine_thunderblade": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "从北斯托冈德山道东侧进入，穿过火炬通道登上石阶，一本道直达雷剑将布兰德神像；无宝箱、无守护者。",
    "zones": [
      { "kind": "room", "rect": [56, 42, 42, 22], "label": "前殿" },
      { "kind": "room", "rect": [4, 4, 40, 26], "label": "祭坛" },
      { "kind": "cliff", "poly": [[50, 0], [100, 0], [100, 36], [70, 30], [56, 18]] },
      { "kind": "cliff", "poly": [[0, 40], [40, 46], [46, 70], [0, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 56], [80, 54], [64, 52]] },
      { "kind": "stairs", "pts": [[64, 52], [56, 44], [50, 36]], "label": "石阶" },
      { "kind": "main", "pts": [[50, 36], [40, 28], [30, 20]] },
      { "kind": "stairs", "pts": [[30, 20], [24, 15], [18, 12]], "label": "祭坛台阶" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 56], "to": "north_stonegard_pass", "label": "入口", "lp": "t" },
      { "kind": "landmark", "at": [80, 54], "label": "火炬", "lp": "b" },
      { "kind": "landmark", "at": [64, 52], "label": "前殿", "lp": "b" },
      { "kind": "landmark", "at": [50, 36], "label": "石阶顶", "lp": "r" },
      { "kind": "landmark", "at": [36, 25], "label": "火炬", "lp": "b" },
      { "kind": "shrine", "at": [18, 12], "label": "雷剑将布兰德神像", "lp": "b", "note": "调查即可获得剑士职业证，无需战斗。" }
    ]
  },
  "west_stonegard_pass": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "东接北斯托冈德山道，西过木桥到沙漠地区东威尔斯宾克沙道；中央岔路高处一侧南下西艾巴霍多山道，低处下坡往西南的王家之墓。宝箱与道具对应为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[40, 0], [100, 0], [100, 22], [80, 24], [60, 18], [48, 10]] },
      { "kind": "water", "poly": [[28, 0], [36, 0], [36, 70], [28, 70]] },
      { "kind": "cliff", "poly": [[0, 36], [24, 40], [36, 48], [20, 52], [0, 54]] },
      { "kind": "grass", "rect": [2, 6, 12, 10] },
      { "kind": "cliff", "poly": [[66, 70], [70, 54], [90, 56], [100, 64], [100, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 30], [84, 32], [72, 38], [58, 40]] },
      { "kind": "minor", "pts": [[84, 32], [82, 42], [86, 50]], "label": "路转左时下坡" },
      { "kind": "main", "pts": [[58, 40], [48, 36], [38, 32]] },
      { "kind": "bridge", "pts": [[38, 32], [26, 30]], "label": "第1座桥" },
      { "kind": "main", "pts": [[26, 30], [12, 28], [2, 26]] },
      { "kind": "minor", "pts": [[12, 28], [14, 18], [8, 12]], "label": "沙道口上坡后左转（绿旗后）" },
      { "kind": "minor", "pts": [[20, 29], [22, 20], [24, 14]], "label": "过桥前最后岔路左转" },
      { "kind": "main", "pts": [[58, 40], [58, 52], [56, 68]], "label": "高处：往艾巴霍多" },
      { "kind": "stairs", "pts": [[58, 40], [48, 48]], "label": "低处下坡" },
      { "kind": "minor", "pts": [[48, 48], [28, 58], [4, 66]], "label": "往王家之墓" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 30], "to": "north_stonegard_pass", "label": "往北斯托冈德山道", "lp": "l" },
      { "kind": "exit", "at": [2, 26], "to": "sunlands/eastern_wellspring_sands", "label": "往东威尔斯宾克沙道", "lp": "b" },
      { "kind": "exit", "at": [56, 68], "to": "west_everhold_pass", "label": "往西艾巴霍多山道", "lp": "r" },
      { "kind": "exit", "at": [4, 66], "to": "tomb_of_kings", "label": "王家之墓", "lp": "t" },
      { "kind": "landmark", "at": [58, 40], "label": "高低岔路", "lp": "r" },
      { "kind": "chest_red", "at": [86, 50], "tr": [0], "lp": "l", "note": "从北斯托冈德山道一侧进入后向下，道路左转处再下坡。" },
      { "kind": "chest", "at": [8, 12], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [24, 14], "tr": [2], "lp": "r" }
    ]
  },
  "tomb_of_kings": {
    "theme": "ruins",
    "size": [120, 70],
    "note": "层层向上的巨大墓穴，示意图从右（1F 入口）到左（5F 最深处）并排画各层。2F 楼梯下有隐藏拱门通木箱与紫箱；3F 有左右两道楼梯通往 4F；5F 深处是无名守墓人。木/红箱与道具的对应为示意。",
    "zones": [
      { "kind": "room", "rect": [96, 4, 22, 62], "label": "1F" },
      { "kind": "room", "rect": [72, 4, 22, 62], "label": "2F" },
      { "kind": "room", "rect": [48, 4, 22, 62], "label": "3F" },
      { "kind": "room", "rect": [24, 4, 22, 62], "label": "4F" },
      { "kind": "room", "rect": [2, 4, 20, 62], "label": "5F" }
    ],
    "paths": [
      { "kind": "main", "pts": [[116, 4], [108, 14], [106, 40], [104, 56]] },
      { "kind": "stairs", "pts": [[104, 56], [96, 58], [90, 56]], "label": "入口上楼" },
      { "kind": "stairs", "pts": [[90, 56], [88, 40], [86, 24], [84, 10]], "label": "2F 大楼梯" },
      { "kind": "minor", "pts": [[90, 56], [78, 58]], "label": "2F 向左" },
      { "kind": "minor", "pts": [[78, 58], [76, 48]], "label": "凹处" },
      { "kind": "hidden", "pts": [[76, 48], [76, 40]], "label": "楼梯下隐藏拱门" },
      { "kind": "minor", "pts": [[76, 40], [80, 30], [78, 22]], "label": "楼梯下向上" },
      { "kind": "stairs", "pts": [[84, 10], [76, 8], [66, 12]] },
      { "kind": "main", "pts": [[66, 12], [60, 24], [58, 40], [59, 54]] },
      { "kind": "minor", "pts": [[66, 12], [67, 20]] },
      { "kind": "stairs", "pts": [[59, 54], [50, 60], [42, 60]], "label": "左楼梯" },
      { "kind": "stairs", "pts": [[58, 40], [50, 40], [44, 40]], "label": "右楼梯" },
      { "kind": "minor", "pts": [[42, 60], [28, 62]], "label": "不上楼向左" },
      { "kind": "minor", "pts": [[44, 40], [40, 34]], "label": "围栏平台" },
      { "kind": "stairs", "pts": [[42, 60], [36, 50], [30, 38], [28, 24], [22, 16], [16, 14]], "label": "上 5F" },
      { "kind": "main", "pts": [[16, 14], [12, 28], [12, 48]] },
      { "kind": "minor", "pts": [[16, 14], [8, 8]] }
    ],
    "pois": [
      { "kind": "exit", "at": [116, 4], "to": "west_stonegard_pass", "label": "入口", "lp": "l" },
      { "kind": "chest", "at": [78, 58], "tr": [3], "label": "黑暗之瓶", "lp": "b" },
      { "kind": "chest", "at": [76, 40], "tr": [3], "label": "火之精灵石（大）", "lp": "l" },
      { "kind": "chest_purple", "at": [78, 22], "tr": [0], "lp": "l" },
      { "kind": "chest_red", "at": [67, 20], "tr": [1], "lp": "l", "note": "3F 楼梯顶周边区域的右上角。" },
      { "kind": "chest_red", "at": [28, 62], "tr": [2], "lp": "t" },
      { "kind": "chest_red", "at": [40, 34], "tr": [3], "label": "黑暗耐性石", "lp": "t" },
      { "kind": "chest_red", "at": [8, 8], "tr": [3], "label": "治愈葡萄串", "lp": "b" },
      { "kind": "npc", "at": [12, 48], "label": "无名守墓人", "npc": [0], "lp": "b" },
      { "kind": "save", "at": [106, 40], "label": "存档点（入口分岔处）", "lp": "l" },
      { "kind": "save", "at": [12, 30], "label": "存档点（中央大阶梯中途）", "lp": "r" },
      { "kind": "stairs", "at": [104, 56], "label": "往 2F", "lp": "l" }
    ]
  }
});

OT2.addDetail("highlands", {
  "stonegard": {
    "theme": "city",
    "size": [120, 80],
    "note": "依山而建分三层：西口进城是主街（旅店、酒馆），主街北侧台阶上到上街（喷水池、贵族宅邸，北侧是伊冯的老家、东口通往幻影之森），主街东端下行到下街（武器店、道具店与平民住宅）。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [28, 26], [0, 30]] },
      { "kind": "cliff", "poly": [[0, 58], [58, 58], [60, 80], [0, 80]] },
      { "kind": "plaza", "rect": [32, 2, 86, 24], "label": "上街" },
      { "kind": "plaza", "rect": [2, 32, 54, 22], "label": "主街" },
      { "kind": "plaza", "rect": [62, 36, 56, 40], "label": "下街" },
      { "kind": "building", "rect": [8, 49, 10, 7], "label": "旅店" },
      { "kind": "building", "rect": [22, 32, 12, 6], "label": "酒馆" },
      { "kind": "house", "rect": [46, 46, 8, 6] },
      { "kind": "building", "rect": [37, 4, 14, 8], "label": "无法进入的宅邸" },
      { "kind": "plaza", "circle": [68, 13, 4], "label": "喷水池" },
      { "kind": "building", "rect": [96, 4, 16, 9], "label": "宅邸" },
      { "kind": "house", "rect": [54, 4, 8, 6] },
      { "kind": "house", "rect": [78, 6, 8, 6] },
      { "kind": "building", "rect": [64, 38, 10, 7], "label": "武器店" },
      { "kind": "building", "rect": [64, 62, 10, 7], "label": "道具店" },
      { "kind": "house", "rect": [84, 60, 9, 6] },
      { "kind": "house", "rect": [86, 40, 8, 6] },
      { "kind": "house", "rect": [104, 68, 12, 8], "label": "最里面的民宅" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 46], [14, 42], [30, 42], [44, 42], [58, 44]], "smooth": false },
      { "kind": "minor", "pts": [[14, 42], [13, 49]] },
      { "kind": "minor", "pts": [[30, 42], [28, 38]] },
      { "kind": "stairs", "pts": [[44, 42], [44, 32], [46, 22]], "label": "北侧台阶上上街" },
      { "kind": "main", "pts": [[34, 20], [46, 22], [60, 18], [68, 18], [80, 20], [94, 20], [100, 21], [118, 22]], "smooth": false },
      { "kind": "minor", "pts": [[46, 22], [44, 12]] },
      { "kind": "minor", "pts": [[94, 20], [93, 15]], "label": "宅邸左侧墙边" },
      { "kind": "minor", "pts": [[100, 21], [104, 12], [108, 2]], "label": "北侧：往伊冯的老家" },
      { "kind": "stairs", "pts": [[58, 44], [64, 48], [68, 50]], "label": "下行到下街" },
      { "kind": "main", "pts": [[68, 50], [80, 52], [94, 54], [104, 60], [110, 68]], "smooth": false },
      { "kind": "minor", "pts": [[68, 50], [69, 45]] },
      { "kind": "minor", "pts": [[80, 52], [74, 58], [69, 62]] },
      { "kind": "stairs", "pts": [[94, 54], [96, 46], [100, 40]], "label": "上楼梯向北（转角）" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 46], "to": "north_stonegard_pass", "label": "西口", "lp": "t" },
      { "kind": "exit", "at": [118, 22], "to": "spectrewood_path", "label": "东口（往幻影之森）", "lp": "b" },
      { "kind": "exit", "at": [108, 2], "to": "yvons_birthplace", "label": "伊冯的老家", "lp": "l", "dir": "东北" },
      { "kind": "inn", "at": [13, 49], "label": "旅店", "lp": "b" },
      { "kind": "tavern", "at": [28, 38], "label": "酒馆", "lp": "l" },
      { "kind": "chest", "at": [34, 40], "label": "醒神李子（酒馆前）", "lp": "t", "note": "攻略站记载在酒馆前木桶旁，本地数据未列出。" },
      { "kind": "npc", "at": [22, 44], "label": "邻家老爷爷", "npc": [9], "lp": "b" },
      { "kind": "hidden", "at": [52, 42], "tr": [4], "label": "装有银币的皮袋", "lp": "b", "note": "需向主街一名镇民打听/探查后出现，位置为示意。" },
      { "kind": "npc", "at": [46, 28], "label": "台阶上的镇民", "npc": [7], "lp": "r" },
      { "kind": "npc", "at": [44, 14], "label": "诺艾尔", "npc": [10], "lp": "r" },
      { "kind": "npc", "at": [60, 18], "label": "上街镇民", "npc": [6], "lp": "b" },
      { "kind": "landmark", "at": [68, 18], "label": "喷水池前", "lp": "b" },
      { "kind": "npc", "at": [80, 20], "label": "上街镇民（强度6）", "npc": [8], "lp": "b" },
      { "kind": "hidden", "at": [86, 20], "tr": [2], "label": "上街隐藏物", "lp": "t", "note": "士兵大弓、空钱包、火之精灵石（特大）、大羽毛，需向上街镇民与装订工匠打听后出现，位置为示意。" },
      { "kind": "chest", "at": [93, 15], "tr": [0], "lp": "l" },
      { "kind": "weapon", "at": [69, 45], "label": "武器店", "lp": "r" },
      { "kind": "npc", "at": [76, 51], "label": "铁商（禁断之剑）", "npc": [0], "lp": "b" },
      { "kind": "hidden", "at": [63, 51], "tr": [3], "label": "下街隐藏物", "lp": "l", "note": "引力斧、硬剑、醒神李子（大），需向下街两名镇民与神官打听后出现；硬剑在入口商店附近。" },
      { "kind": "item", "at": [69, 62], "label": "道具店", "lp": "r" },
      { "kind": "npc", "at": [76, 57], "label": "神官", "npc": [4], "lp": "l" },
      { "kind": "npc", "at": [88, 53], "label": "娜塔莉亚", "npc": [1], "lp": "t" },
      { "kind": "npc", "at": [96, 56], "label": "阿奇波尔德", "npc": [2], "lp": "b" },
      { "kind": "npc", "at": [104, 60], "label": "流氓手下", "npc": [3], "lp": "l" },
      { "kind": "npc", "at": [100, 40], "label": "托比亚斯（支线「无赖」）", "lp": "l" },
      { "kind": "chest_red", "at": [110, 68], "tr": [1], "lp": "t", "note": "下街最里面的民宅内，门口由商店老人/流氓看守（视支线进度）。" }
    ]
  },
  "yvons_birthplace": {
    "theme": "manor",
    "size": [120, 70],
    "note": "左半为地上宅邸（1F 有陷阱坑，2F 最左房间有木箱），右半为地下研究室：上层存档点周围有多条下楼岔路，下层穿过两间房后上楼是紫箱，最深处与伊冯决战。地下各箱与道具的对应为示意。",
    "zones": [
      { "kind": "room", "rect": [2, 36, 42, 30], "label": "宅邸 1F" },
      { "kind": "room", "rect": [2, 4, 42, 26], "label": "宅邸 2F" },
      { "kind": "pit", "circle": [35, 52, 4], "label": "陷阱坑" },
      { "kind": "room", "rect": [46, 4, 72, 30], "label": "地下·上层" },
      { "kind": "room", "rect": [46, 38, 72, 28], "label": "地下·下层" },
      { "kind": "room", "rect": [94, 54, 12, 10] },
      { "kind": "room", "rect": [78, 54, 12, 10] },
      { "kind": "room", "rect": [46, 52, 14, 14], "label": "最深处" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 66], [12, 60], [22, 54], [22, 44]] },
      { "kind": "minor", "pts": [[22, 54], [33, 52]], "label": "被引到陷阱坑" },
      { "kind": "stairs", "pts": [[22, 44], [22, 30], [20, 22]], "label": "上 2F" },
      { "kind": "minor", "pts": [[20, 22], [12, 14], [6, 10]], "label": "2F 最左房间" },
      { "kind": "minor", "pts": [[20, 22], [32, 16], [40, 12]] },
      { "kind": "minor", "pts": [[22, 44], [40, 40]] },
      { "kind": "stairs", "pts": [[40, 40], [46, 24], [52, 8]], "label": "下到地下研究室" },
      { "kind": "main", "pts": [[52, 8], [64, 10], [80, 10], [96, 12], [110, 16], [112, 30], [112, 42]] },
      { "kind": "stairs", "pts": [[52, 8], [50, 18], [52, 24]], "label": "入口左侧下楼" },
      { "kind": "hidden", "pts": [[52, 24], [60, 28], [64, 30]], "label": "右墙隐藏路→下方阳台" },
      { "kind": "minor", "pts": [[64, 10], [68, 18], [74, 20]], "label": "穿过入口右侧房间" },
      { "kind": "stairs", "pts": [[74, 20], [76, 28]] },
      { "kind": "stairs", "pts": [[80, 10], [88, 18], [90, 26]], "label": "存档点右侧下楼" },
      { "kind": "main", "pts": [[112, 42], [104, 48], [90, 50], [76, 50], [62, 50]] },
      { "kind": "minor", "pts": [[104, 48], [100, 58]], "label": "下层左侧房间" },
      { "kind": "stairs", "pts": [[62, 50], [58, 44], [56, 40]], "label": "穿过两间房后上楼" },
      { "kind": "minor", "pts": [[56, 40], [66, 40]], "label": "楼梯顶右侧房间" },
      { "kind": "stairs", "pts": [[56, 40], [50, 46], [52, 58]], "label": "下到最深处" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 66], "to": "stonegard", "label": "宅邸大门", "lp": "t" },
      { "kind": "chest", "at": [33, 52], "tr": [0], "lp": "b", "note": "仅塞拉斯第3章被推入陷阱坑时可取，错过永久失去。" },
      { "kind": "chest", "at": [6, 10], "tr": [1], "lp": "r", "note": "2F 最左房间，壁炉与床之间的后墙边。" },
      { "kind": "stairs", "at": [52, 8], "label": "地下入口", "lp": "t" },
      { "kind": "chest", "at": [52, 24], "tr": [5], "label": "活力石榴（大）", "lp": "l" },
      { "kind": "chest_red", "at": [64, 30], "tr": [3], "lp": "b" },
      { "kind": "chest_red", "at": [76, 28], "tr": [4], "lp": "r" },
      { "kind": "save", "at": [80, 10], "label": "存档点", "lp": "t" },
      { "kind": "chest", "at": [90, 26], "tr": [5], "label": "火之精灵石（大）", "lp": "r" },
      { "kind": "chest", "at": [100, 58], "tr": [5], "label": "光之精灵石（特大）", "lp": "b" },
      { "kind": "chest_purple", "at": [66, 40], "tr": [2], "lp": "r" },
      { "kind": "chest_red", "at": [51, 41], "tr": [5], "label": "醒神李子篮", "lp": "l", "note": "通往最深处的楼梯顶附近房间，黑板旁。" },
      { "kind": "boss", "at": [52, 59], "label": "伊冯", "lp": "r" }
    ]
  },
  "spectrewood_path": {
    "theme": "forest",
    "size": [100, 70],
    "note": "西接斯托冈德上街东口。存档点向东北的上路被落石堵住（章节后改为木栅栏），存档点下方右侧唆使拟态树木的古老之树后开出下路，经草地到幻影之森入口。宝箱与道具对应为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [100, 0], [100, 20], [80, 30], [66, 22], [50, 10], [30, 18], [0, 16]] },
      { "kind": "rock", "rect": [56, 10, 8, 6], "label": "落石" },
      { "kind": "grass", "rect": [62, 34, 30, 18], "label": "草地" },
      { "kind": "forest", "poly": [[0, 54], [30, 60], [50, 66], [70, 62], [100, 56], [100, 70], [0, 70]] },
      { "kind": "forest", "rect": [80, 20, 16, 10], "label": "雾中拱门" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [14, 40], [28, 38]] },
      { "kind": "minor", "pts": [[14, 40], [14, 30], [12, 24]], "label": "入口北侧岩缝" },
      { "kind": "minor", "pts": [[28, 38], [40, 28], [52, 18], [58, 16]], "label": "上路（被落石堵住）" },
      { "kind": "minor", "pts": [[28, 38], [34, 50], [44, 54]], "label": "存档点下方右侧" },
      { "kind": "main", "pts": [[44, 54], [58, 52], [70, 46], [84, 44], [98, 40]], "label": "打倒古老之树后开出的下路" },
      { "kind": "minor", "pts": [[70, 46], [74, 38]], "label": "草地北侧崖边" },
      { "kind": "stairs", "pts": [[84, 44], [86, 34], [88, 26]], "label": "绿旗前上坡（雾中）" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "stonegard", "label": "往斯托冈德", "lp": "t" },
      { "kind": "exit", "at": [98, 40], "to": "spectrewood", "label": "幻影之森", "lp": "b" },
      { "kind": "save", "at": [28, 38], "label": "存档点", "lp": "t" },
      { "kind": "gate", "at": [58, 16], "label": "落石（后为木栅栏）", "lp": "b" },
      { "kind": "danger", "at": [44, 54], "label": "古老之树", "lp": "b", "note": "汉伊特第2章：对拟态成树木的魔物使用唆使并打倒，开出下方新路。" },
      { "kind": "landmark", "at": [84, 44], "label": "绿旗", "lp": "b" },
      { "kind": "chest_red", "at": [12, 24], "tr": [0], "lp": "r" },
      { "kind": "chest_red", "at": [74, 38], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [88, 26], "tr": [2], "lp": "l" }
    ]
  },
  "spectrewood": {
    "theme": "forest",
    "size": [100, 70],
    "note": "西侧入口进入，第一个存档点向北有两处红箱；主路东南经石拱与断柱（隐藏紫箱），再北上到最后存档点，东北角是森林之主的空地。红箱与道具对应为示意。",
    "zones": [
      { "kind": "forest", "poly": [[0, 0], [30, 0], [24, 8], [6, 14], [0, 12]] },
      { "kind": "forest", "poly": [[44, 20], [58, 14], [62, 40], [50, 50], [40, 40]] },
      { "kind": "rock", "rect": [66, 52, 14, 8], "label": "石拱" },
      { "kind": "room", "rect": [76, 2, 22, 16], "label": "森林之主" },
      { "kind": "grass", "rect": [84, 54, 14, 12] },
      { "kind": "forest", "poly": [[0, 62], [40, 64], [56, 70], [0, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 52], [12, 52], [22, 50]] },
      { "kind": "minor", "pts": [[22, 50], [20, 38], [14, 28], [10, 22]], "label": "存档点向上靠左" },
      { "kind": "minor", "pts": [[20, 38], [30, 30], [34, 18], [40, 10]], "label": "折返向右北上到空地" },
      { "kind": "main", "pts": [[22, 50], [36, 56], [50, 58], [64, 58], [72, 58]] },
      { "kind": "hidden", "pts": [[72, 58], [70, 64], [66, 66]], "label": "断柱火炬左侧隐藏路" },
      { "kind": "minor", "pts": [[72, 58], [78, 64], [88, 62], [94, 56]], "label": "拱下向南再向东上草坡" },
      { "kind": "main", "pts": [[64, 58], [66, 46], [70, 34], [72, 26]] },
      { "kind": "minor", "pts": [[72, 26], [68, 32], [60, 32], [58, 26], [62, 22]], "label": "先下后左再绕回" },
      { "kind": "main", "pts": [[72, 26], [80, 16], [86, 10]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 52], "to": "spectrewood_path", "label": "森林入口", "lp": "t" },
      { "kind": "save", "at": [22, 50], "label": "存档点", "lp": "b" },
      { "kind": "chest_red", "at": [10, 22], "tr": [1], "lp": "r" },
      { "kind": "chest_red", "at": [40, 10], "tr": [2], "lp": "r" },
      { "kind": "landmark", "at": [72, 58], "label": "石拱与断柱", "lp": "t" },
      { "kind": "chest_purple", "at": [66, 66], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [94, 56], "tr": [4], "lp": "l" },
      { "kind": "save", "at": [72, 26], "label": "最后的存档点", "lp": "r" },
      { "kind": "chest_red", "at": [62, 22], "tr": [3], "lp": "l" },
      { "kind": "boss", "at": [86, 10], "label": "森林之主", "lp": "b" }
    ]
  },
  "west_everhold_pass": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "北口接西斯托冈德山道，过石桥到存档点：向东北连上四段石阶到艾巴霍多，向西南下到地下坑道遗迹，向东绕过石柱钻到岩石背后、向南穿石拱是魔剑士的祠堂。宝箱与道具对应为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [24, 0], [22, 20], [10, 30], [0, 32]] },
      { "kind": "cliff", "poly": [[44, 0], [90, 0], [80, 10], [64, 18], [50, 14]] },
      { "kind": "pit", "poly": [[20, 30], [30, 28], [36, 40], [24, 46], [16, 40]] },
      { "kind": "rock", "rect": [66, 40, 12, 10], "label": "岩石" },
      { "kind": "cliff", "poly": [[30, 70], [44, 58], [70, 60], [84, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[30, 2], [30, 12], [34, 22]] },
      { "kind": "minor", "pts": [[30, 12], [40, 14], [42, 20]], "label": "入口右侧稍下（紫旗后）" },
      { "kind": "bridge", "pts": [[34, 22], [46, 28]], "label": "石桥" },
      { "kind": "minor", "pts": [[34, 22], [30, 30], [32, 36]], "label": "石桥处向下" },
      { "kind": "main", "pts": [[46, 28], [54, 36]] },
      { "kind": "stairs", "pts": [[54, 36], [62, 30], [70, 24], [78, 18], [86, 10], [96, 4]], "label": "四段石阶往艾巴霍多" },
      { "kind": "minor", "pts": [[78, 18], [72, 12], [66, 10]], "label": "第4段石阶前下行" },
      { "kind": "minor", "pts": [[86, 10], [92, 18], [92, 26]], "label": "大石阶旁向下" },
      { "kind": "minor", "pts": [[54, 36], [62, 44], [56, 52], [62, 56]], "label": "下右坡→下左坡→岔路回转" },
      { "kind": "main", "pts": [[54, 36], [40, 46], [24, 56], [4, 66]] },
      { "kind": "hidden", "pts": [[54, 36], [70, 36], [82, 42], [80, 52], [88, 60], [96, 66]], "label": "绕石柱→岩石背后→向南穿石拱" }
    ],
    "pois": [
      { "kind": "exit", "at": [30, 2], "to": "west_stonegard_pass", "label": "往西斯托冈德山道", "lp": "r" },
      { "kind": "exit", "at": [96, 4], "to": "everhold", "label": "往艾巴霍多", "lp": "l" },
      { "kind": "exit", "at": [4, 66], "to": "everhold_tunnels", "label": "地下坑道遗迹", "lp": "t" },
      { "kind": "exit", "at": [96, 66], "to": "shrine_runeblade", "label": "魔剑士的祠堂", "lp": "l" },
      { "kind": "danger", "at": [30, 8], "label": "首次进入必遇蛇鸟+暗乌鸦", "lp": "l" },
      { "kind": "chest", "at": [42, 20], "tr": [0], "lp": "r" },
      { "kind": "chest_red", "at": [32, 36], "tr": [1], "lp": "l" },
      { "kind": "save", "at": [54, 36], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [66, 10], "tr": [4], "lp": "b" },
      { "kind": "chest", "at": [92, 26], "tr": [3], "lp": "l" },
      { "kind": "chest", "at": [62, 56], "tr": [2], "lp": "r" },
      { "kind": "landmark", "at": [70, 36], "label": "石柱", "lp": "t" },
      { "kind": "landmark", "at": [88, 60], "label": "石拱", "lp": "t" }
    ]
  }
});

OT2.addDetail("highlands", {
  "everhold": {
    "theme": "town",
    "size": [100, 70],
    "note": "山巅之城：西南城门从西艾巴霍多山道登上来，城门内是旅店与武器防具店、道具店，中央广场向北登石阶到酒馆一带，再沿上坡路向西北到大剧场入口。",
    "zones": [
      { "kind": "cliff", "poly": [[60, 70], [72, 58], [90, 56], [100, 60], [100, 70]] },
      { "kind": "cliff", "poly": [[70, 0], [100, 0], [100, 30], [86, 22], [76, 12]] },
      { "kind": "building", "rect": [2, 2, 26, 10], "label": "大剧场" },
      { "kind": "building", "rect": [9, 42, 10, 7], "label": "旅店" },
      { "kind": "building", "rect": [26, 52, 12, 7], "label": "武器防具店" },
      { "kind": "building", "rect": [46, 54, 10, 7], "label": "道具店" },
      { "kind": "plaza", "circle": [50, 42, 6], "label": "中央广场" },
      { "kind": "building", "rect": [58, 22, 12, 8], "label": "酒馆" },
      { "kind": "house", "rect": [24, 28, 10, 7], "label": "被看守的民宅" },
      { "kind": "house", "rect": [70, 36, 10, 6] },
      { "kind": "house", "rect": [80, 48, 9, 6] },
      { "kind": "house", "rect": [40, 14, 9, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 66], [12, 58], [24, 50], [30, 48], [38, 46], [50, 42]] },
      { "kind": "minor", "pts": [[12, 58], [14, 49]] },
      { "kind": "minor", "pts": [[30, 48], [32, 52]] },
      { "kind": "minor", "pts": [[50, 42], [51, 54]] },
      { "kind": "minor", "pts": [[38, 46], [34, 38], [30, 35]], "label": "城门向西北" },
      { "kind": "stairs", "pts": [[50, 42], [48, 32], [44, 26]], "label": "广场北侧石阶" },
      { "kind": "minor", "pts": [[48, 32], [56, 32], [64, 30]], "label": "往酒馆" },
      { "kind": "main", "pts": [[44, 26], [34, 20], [22, 14], [10, 4]], "label": "上坡往大剧场" },
      { "kind": "minor", "pts": [[50, 42], [64, 44], [76, 44]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 66], "to": "west_everhold_pass", "label": "城门", "lp": "r" },
      { "kind": "exit", "at": [10, 4], "to": "everhold_amphitheatre", "label": "大剧场入口", "lp": "r", "dir": "西北" },
      { "kind": "inn", "at": [14, 49], "label": "旅店", "lp": "l" },
      { "kind": "npc", "at": [19, 54], "label": "大道具负责人", "npc": [7], "lp": "b" },
      { "kind": "npc", "at": [24, 50], "label": "镇民（女）", "npc": [2], "lp": "t" },
      { "kind": "weapon", "at": [32, 52], "label": "武器防具店", "lp": "b" },
      { "kind": "item", "at": [51, 54], "label": "道具店", "lp": "b" },
      { "kind": "chest", "at": [36, 38], "tr": [1], "lp": "r", "note": "被看守民宅旁；看守的男子须用比试/挑战击败才能进屋拿隐藏物。" },
      { "kind": "npc", "at": [30, 35], "label": "看守民宅的男子", "lp": "l" },
      { "kind": "save", "at": [58, 32], "label": "存档点", "lp": "b" },
      { "kind": "chest_red", "at": [52, 30], "tr": [0], "lp": "t", "note": "酒馆左侧存档点旁。" },
      { "kind": "tavern", "at": [64, 30], "label": "酒馆", "lp": "r" },
      { "kind": "npc", "at": [44, 26], "label": "女演员（魔法使）", "npc": [3], "lp": "r" },
      { "kind": "npc", "at": [28, 17], "label": "热心的演员", "npc": [4], "lp": "b" },
      { "kind": "npc", "at": [16, 9], "label": "团长", "npc": [5], "lp": "r" },
      { "kind": "hidden", "at": [58, 43], "tr": [2], "label": "打听后的隐藏物", "lp": "b", "note": "还魂橄榄（大）、稀有的石头、奇特的古董，需分别向剧场引导员、老人、少女打听后出现，位置为示意。" },
      { "kind": "npc", "at": [64, 44], "label": "老人", "npc": [1], "lp": "t" },
      { "kind": "npc", "at": [70, 44], "label": "镇民（男）", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [76, 44], "label": "镇民（强度7）", "npc": [6], "lp": "r" }
    ]
  },
  "everhold_amphitheatre": {
    "theme": "castle",
    "size": [120, 80],
    "note": "右下大厅进入，左侧门进下层：前半段沿走廊向西有三间房（第2间紫箱），存档点北门后上楼是无形之剑；西端上楼到后半段，最高层东端第二存档点旁是火炎护符。之后经休息区进入上层雅座，向西到尽头上楼，再沿后半段一路向西到阳台与席米恩决战。",
    "zones": [
      { "kind": "room", "rect": [84, 56, 34, 22], "label": "大厅" },
      { "kind": "room", "rect": [4, 52, 76, 26], "label": "下层·前半" },
      { "kind": "room", "rect": [62, 32, 20, 16], "label": "北门后" },
      { "kind": "room", "rect": [4, 28, 54, 20], "label": "下层·后半" },
      { "kind": "room", "rect": [86, 28, 16, 10], "label": "休息区" },
      { "kind": "room", "rect": [40, 14, 78, 12], "label": "上层雅座·前半" },
      { "kind": "room", "rect": [4, 2, 62, 10], "label": "上层雅座·后半" },
      { "kind": "room", "rect": [8, 14, 16, 10] }
    ],
    "paths": [
      { "kind": "main", "pts": [[118, 78], [104, 70], [92, 66]] },
      { "kind": "minor", "pts": [[104, 70], [112, 62]], "label": "右侧柱子后" },
      { "kind": "main", "pts": [[92, 66], [84, 66], [74, 66], [68, 66], [62, 66], [50, 70], [36, 70], [24, 70], [12, 68]], "label": "下层走廊" },
      { "kind": "minor", "pts": [[68, 66], [70, 54], [72, 46]], "label": "存档点北侧门" },
      { "kind": "stairs", "pts": [[72, 46], [78, 42], [78, 36]], "label": "右侧楼梯上小房间" },
      { "kind": "stairs", "pts": [[62, 66], [60, 58], [58, 54]], "label": "存档点左侧楼梯" },
      { "kind": "minor", "pts": [[58, 54], [64, 56]], "label": "向右到底" },
      { "kind": "minor", "pts": [[58, 54], [50, 56]], "label": "左侧小房间" },
      { "kind": "minor", "pts": [[36, 70], [36, 75]], "label": "第2个门" },
      { "kind": "minor", "pts": [[24, 70], [24, 75]], "label": "第3个门" },
      { "kind": "stairs", "pts": [[12, 68], [8, 58], [10, 46]], "label": "西端上楼（大门）" },
      { "kind": "main", "pts": [[10, 46], [20, 44], [30, 44], [40, 44]] },
      { "kind": "minor", "pts": [[20, 44], [25, 38]] },
      { "kind": "minor", "pts": [[30, 44], [25, 38]] },
      { "kind": "stairs", "pts": [[40, 44], [44, 38], [44, 32]], "label": "右侧楼梯上最高层" },
      { "kind": "main", "pts": [[8, 30], [30, 31], [44, 32], [48, 31], [58, 30]] },
      { "kind": "main", "pts": [[58, 30], [66, 28], [84, 30], [94, 32]] },
      { "kind": "main", "pts": [[94, 32], [104, 30], [112, 22], [96, 20], [80, 20], [64, 20], [48, 20]], "label": "雅座走廊" },
      { "kind": "hidden", "pts": [[112, 22], [114, 16]], "label": "第1间房右墙隐藏门" },
      { "kind": "minor", "pts": [[48, 20], [44, 23]] },
      { "kind": "stairs", "pts": [[48, 20], [50, 12], [54, 8]], "label": "走廊尽头上楼" },
      { "kind": "main", "pts": [[62, 8], [54, 8], [40, 6], [28, 6], [16, 6], [6, 7]] },
      { "kind": "minor", "pts": [[28, 6], [28, 14], [18, 18]], "label": "向南小路→左侧房间" }
    ],
    "pois": [
      { "kind": "exit", "at": [118, 78], "to": "everhold", "label": "剧场正门", "lp": "l" },
      { "kind": "chest", "at": [112, 62], "tr": [0], "lp": "l" },
      { "kind": "npc", "at": [98, 68], "label": "剧场引导员", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [90, 64], "label": "剧场经理", "npc": [1], "lp": "t" },
      { "kind": "save", "at": [68, 66], "label": "存档点", "lp": "b" },
      { "kind": "chest_purple", "at": [78, 36], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [64, 56], "tr": [4], "label": "火之精灵石（特大）", "lp": "r" },
      { "kind": "chest_red", "at": [50, 56], "tr": [3], "label": "30,000叶", "lp": "l" },
      { "kind": "chest_purple", "at": [36, 75], "tr": [2], "lp": "r" },
      { "kind": "chest_red", "at": [24, 75], "tr": [3], "label": "20,000叶", "lp": "l" },
      { "kind": "chest", "at": [25, 38], "tr": [4], "label": "回春果酱", "lp": "t" },
      { "kind": "chest", "at": [8, 30], "tr": [4], "label": "醒神李子（大）", "lp": "b" },
      { "kind": "save", "at": [48, 31], "label": "第二存档点", "lp": "b" },
      { "kind": "chest_red", "at": [56, 30], "tr": [4], "label": "火炎护符", "lp": "t" },
      { "kind": "landmark", "at": [94, 32], "label": "休息区（引导员）", "lp": "b" },
      { "kind": "chest_purple", "at": [114, 16], "tr": [5], "lp": "l" },
      { "kind": "chest_red", "at": [44, 23], "tr": [6], "label": "装有银币的皮袋", "lp": "b" },
      { "kind": "save", "at": [56, 8], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [62, 8], "tr": [6], "label": "光之精灵石（特大）", "lp": "r" },
      { "kind": "chest_red", "at": [48, 5], "tr": [6], "label": "黑暗耐性石", "lp": "t" },
      { "kind": "chest_red", "at": [18, 18], "tr": [6], "label": "复苏果酱", "lp": "r" },
      { "kind": "chest", "at": [22, 4], "tr": [6], "label": "活力石榴（特大）", "lp": "t" },
      { "kind": "save", "at": [14, 7], "label": "存档点", "lp": "b" },
      { "kind": "boss", "at": [6, 7], "label": "席米恩（阳台·两连战）", "lp": "b" }
    ]
  },
  "everhold_tunnels": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "东北入口进入，沿火炬一路向西南深入：第1存档点上楼、第4火炬隐藏门、第5火炬下楼、第6火炬上下各有岔路（上方隐藏门内是紫箱），东南端是噬梦的空地，空地后下楼还有红箱。木箱与道具对应为示意。",
    "zones": [
      { "kind": "room", "rect": [80, 2, 18, 14], "label": "拱廊入口" },
      { "kind": "room", "rect": [20, 4, 16, 12] },
      { "kind": "room", "rect": [50, 22, 14, 12] },
      { "kind": "room", "rect": [78, 48, 20, 16], "label": "Boss 空地" },
      { "kind": "rock", "rect": [4, 56, 20, 12] },
      { "kind": "pit", "poly": [[20, 30], [34, 28], [36, 40], [22, 42]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 4], [88, 8], [76, 12], [70, 12]] },
      { "kind": "hidden", "pts": [[88, 8], [93, 13]], "label": "最右拱柱后" },
      { "kind": "stairs", "pts": [[70, 12], [68, 6], [60, 4]], "label": "存档点里侧楼梯两段" },
      { "kind": "main", "pts": [[70, 12], [60, 18], [50, 20], [40, 22]] },
      { "kind": "hidden", "pts": [[40, 22], [34, 16], [28, 10]], "label": "楼梯左侧隐藏门→上坡房间" },
      { "kind": "stairs", "pts": [[40, 22], [42, 34]] },
      { "kind": "stairs", "pts": [[42, 34], [46, 42], [44, 48]], "label": "下两段楼梯" },
      { "kind": "minor", "pts": [[44, 48], [36, 50]], "label": "再向左" },
      { "kind": "main", "pts": [[42, 34], [56, 38], [66, 42]] },
      { "kind": "stairs", "pts": [[66, 42], [70, 34], [66, 28]], "label": "拱门后楼梯" },
      { "kind": "hidden", "pts": [[66, 28], [58, 28]], "label": "左侧隐藏门" },
      { "kind": "stairs", "pts": [[66, 42], [72, 50], [70, 56]], "label": "下两段楼梯" },
      { "kind": "minor", "pts": [[70, 56], [60, 58]], "label": "再向左" },
      { "kind": "main", "pts": [[66, 42], [80, 46], [88, 56]] },
      { "kind": "minor", "pts": [[88, 56], [95, 56]] },
      { "kind": "stairs", "pts": [[88, 56], [86, 64], [78, 66]], "label": "空地后下楼" }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 4], "to": "west_everhold_pass", "label": "入口", "lp": "l" },
      { "kind": "chest", "at": [93, 13], "tr": [4], "label": "活力石榴（特大）", "lp": "l" },
      { "kind": "save", "at": [70, 12], "label": "第1存档点", "lp": "b" },
      { "kind": "chest", "at": [60, 4], "tr": [4], "label": "醒神李子（大）", "lp": "l" },
      { "kind": "landmark", "at": [40, 22], "label": "第4火炬", "lp": "b" },
      { "kind": "chest_red", "at": [28, 10], "tr": [1], "lp": "b" },
      { "kind": "landmark", "at": [42, 34], "label": "第5火炬", "lp": "l" },
      { "kind": "chest", "at": [36, 50], "tr": [4], "label": "还魂橄榄（大）", "lp": "l" },
      { "kind": "landmark", "at": [66, 42], "label": "第6火炬", "lp": "r" },
      { "kind": "chest_purple", "at": [58, 28], "tr": [0], "lp": "l" },
      { "kind": "chest_red", "at": [60, 58], "tr": [2], "lp": "l" },
      { "kind": "boss", "at": [88, 56], "label": "噬梦", "lp": "t" },
      { "kind": "chest_red", "at": [95, 56], "tr": [4], "label": "治愈葡萄串", "lp": "b" },
      { "kind": "chest_red", "at": [78, 66], "tr": [3], "lp": "l" }
    ]
  },
  "shrine_runeblade": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "西北入口进入后先下到埋在雾中的山根，沿火炬走到第4支火炬，再登上通往天空的火炬长阶梯，顶端祭坛前是魔剑士巴罗格。阶梯右侧下坡深处有两个红箱。",
    "zones": [
      { "kind": "cliff", "poly": [[20, 0], [70, 0], [60, 20], [40, 30], [28, 18]] },
      { "kind": "snow", "poly": [[0, 40], [40, 46], [70, 52], [100, 50], [100, 70], [0, 70]], "label": "山根雾海" },
      { "kind": "room", "rect": [80, 2, 18, 14], "label": "祭坛" },
      { "kind": "cliff", "poly": [[100, 18], [100, 44], [88, 40], [84, 30]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 6], [10, 16], [14, 30], [20, 44], [30, 54]] },
      { "kind": "main", "pts": [[30, 54], [44, 58], [56, 56]] },
      { "kind": "minor", "pts": [[56, 56], [56, 48]], "label": "第4火炬北侧" },
      { "kind": "stairs", "pts": [[56, 56], [64, 46], [72, 34], [80, 22], [86, 12]], "label": "火炬长阶梯" },
      { "kind": "minor", "pts": [[56, 56], [68, 62], [84, 64]], "label": "阶梯右侧下坡到最里面" },
      { "kind": "minor", "pts": [[84, 64], [90, 58], [96, 56]], "label": "回坡前右侧小坡" },
      { "kind": "minor", "pts": [[72, 34], [64, 30]], "label": "阶梯中段平台" },
      { "kind": "main", "pts": [[86, 12], [94, 6]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 6], "to": "west_everhold_pass", "label": "入口", "lp": "r" },
      { "kind": "landmark", "at": [14, 30], "label": "下到雾中", "lp": "r" },
      { "kind": "landmark", "at": [56, 56], "label": "第4火炬", "lp": "b" },
      { "kind": "chest_red", "at": [56, 48], "tr": [0], "lp": "l" },
      { "kind": "chest_red", "at": [84, 64], "tr": [1], "lp": "b" },
      { "kind": "chest_red", "at": [96, 56], "tr": [2], "lp": "l" },
      { "kind": "chest_red", "at": [64, 30], "tr": [3], "lp": "l", "note": "本地数据记为4个红箱，攻略站只列出3个位置，此箱位置为示意。" },
      { "kind": "boss", "at": [86, 12], "label": "魔剑士巴罗格", "lp": "l" },
      { "kind": "shrine", "at": [94, 6], "label": "祭坛（符文大师）", "lp": "b" }
    ]
  },
  "ruins_of_hornburg": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "只能快速旅行抵达的古战场：从西南的抵达点穿过战场与崩塌城门，登上崖顶可远眺菲尼斯之门尖塔，尽头便是菲尼斯之门。无敌人、无宝箱，布局为示意。",
    "zones": [
      { "kind": "field", "poly": [[0, 40], [50, 36], [80, 50], [100, 56], [100, 70], [0, 70]], "label": "古战场" },
      { "kind": "wall", "rect": [58, 28, 4, 12] },
      { "kind": "wall", "rect": [70, 28, 4, 10] },
      { "kind": "wall", "rect": [40, 14, 16, 3] },
      { "kind": "cliff", "poly": [[76, 0], [100, 0], [100, 30], [88, 24], [80, 14]], "label": "崖顶" },
      { "kind": "rock", "rect": [66, 56, 14, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 64], [18, 58], [32, 54], [46, 50]] },
      { "kind": "main", "pts": [[46, 50], [56, 40], [66, 32]] },
      { "kind": "stairs", "pts": [[66, 32], [76, 22], [84, 15]], "label": "登上崖顶" },
      { "kind": "main", "pts": [[84, 15], [96, 4]] },
      { "kind": "minor", "pts": [[46, 50], [60, 56], [72, 60]], "label": "战场残骸" },
      { "kind": "minor", "pts": [[66, 32], [56, 24], [48, 18]], "label": "城墙残垣" }
    ],
    "pois": [
      { "kind": "landmark", "at": [4, 64], "label": "快速旅行抵达点", "lp": "t" },
      { "kind": "landmark", "at": [46, 50], "label": "古战场", "lp": "b" },
      { "kind": "landmark", "at": [72, 60], "label": "号角堡残骸", "lp": "t" },
      { "kind": "gate", "at": [66, 32], "label": "崩塌的城门", "lp": "r" },
      { "kind": "landmark", "at": [48, 18], "label": "城墙残垣", "lp": "r" },
      { "kind": "landmark", "at": [84, 15], "label": "崖顶（远眺尖塔）", "lp": "l" },
      { "kind": "npc", "at": [91, 9], "label": "基特与莉布拉克（剧情）", "lp": "b" },
      { "kind": "exit", "at": [96, 4], "to": "gate_of_finis", "label": "菲尼斯之门", "lp": "l" }
    ]
  },
  "gate_of_finis": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "进入后无法离开、没有存档点。挑战8个暗影Boss（名称带「？」是游戏原名，括号内为对应的主角剧情），中央双旗雕像可换队与装备，最后登上阶梯两队接力击败全知之眼与加尔德拉。房间排布为示意。",
    "zones": [
      { "kind": "room", "rect": [2, 46, 96, 22], "label": "下层回廊" },
      { "kind": "room", "rect": [2, 22, 96, 18], "label": "上层回廊" },
      { "kind": "room", "rect": [30, 2, 44, 16], "label": "最深处" },
      { "kind": "plaza", "circle": [50, 43, 4] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [14, 58], [20, 56]] },
      { "kind": "main", "pts": [[20, 56], [36, 56], [50, 56], [66, 56], [90, 56]] },
      { "kind": "minor", "pts": [[50, 56], [50, 43], [50, 32]], "label": "中央大厅" },
      { "kind": "stairs", "pts": [[90, 56], [92, 44], [90, 32]] },
      { "kind": "main", "pts": [[90, 32], [70, 32], [50, 32], [30, 32], [12, 32]] },
      { "kind": "stairs", "pts": [[12, 32], [20, 20], [36, 12], [50, 10]], "label": "登上阶梯" },
      { "kind": "main", "pts": [[50, 10], [64, 8]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "ruins_of_hornburg", "label": "门口", "lp": "r" },
      { "kind": "boss", "at": [28, 56], "label": "①马蒂亚斯？（奥菲莉亚）", "lp": "t" },
      { "kind": "boss", "at": [42, 56], "label": "②伊冯？（塞拉斯）", "lp": "b" },
      { "kind": "boss", "at": [60, 56], "label": "③毒牙虎？（特蕾莎）", "lp": "t" },
      { "kind": "boss", "at": [76, 56], "label": "④维尔纳？（欧贝利克）", "lp": "b" },
      { "kind": "landmark", "at": [50, 43], "label": "双旗雕像（换队）", "lp": "r" },
      { "kind": "boss", "at": [80, 32], "label": "⑤席米恩？（普里姆萝洁）", "lp": "t" },
      { "kind": "boss", "at": [64, 32], "label": "⑥米格尔？（阿芬）", "lp": "b" },
      { "kind": "boss", "at": [38, 32], "label": "⑦达留斯？（提里昂）", "lp": "t" },
      { "kind": "boss", "at": [22, 32], "label": "⑧龙？（汉伊特）", "lp": "b" },
      { "kind": "boss", "at": [50, 10], "label": "全知之眼", "lp": "b" },
      { "kind": "boss", "at": [64, 8], "label": "堕落之神加尔德拉", "lp": "r" }
    ]
  }
});

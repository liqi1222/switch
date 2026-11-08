OT2.addDetail("flatlands", {
  "atlasdam": {
    "theme": "city",
    "size": [100, 70],
    "note": "王都分三层：南侧城下町（东门入城，酒馆、旅店、武器防具店、道具店围绕广场），中央台阶上去是王城前（左为王立学院、右为王立图书馆），再往北进入王城（西侧3个宝箱、东侧1个）。地下研究室入口在学院脚下，向西北出城。",
    "zones": [
      { "kind": "building", "rect": [32, 3, 36, 14], "label": "王城" },
      { "kind": "building", "rect": [6, 22, 16, 10], "label": "王立学院" },
      { "kind": "building", "rect": [60, 18, 16, 10], "label": "王立图书馆" },
      { "kind": "plaza", "circle": [50, 28, 5], "label": "王城前" },
      { "kind": "garden", "rect": [78, 18, 18, 14] },
      { "kind": "wall", "rect": [2, 38, 44, 2] },
      { "kind": "wall", "rect": [54, 38, 44, 2] },
      { "kind": "plaza", "circle": [50, 54, 5], "label": "城下町广场" },
      { "kind": "building", "rect": [20, 44, 12, 8], "label": "酒馆" },
      { "kind": "building", "rect": [36, 60, 10, 7], "label": "旅店" },
      { "kind": "building", "rect": [56, 44, 12, 8], "label": "武器防具店" },
      { "kind": "building", "rect": [72, 60, 12, 6], "label": "道具店" },
      { "kind": "house", "rect": [6, 58, 10, 7] },
      { "kind": "house", "rect": [22, 60, 9, 6] },
      { "kind": "house", "rect": [90, 58, 8, 8] },
      { "kind": "house", "rect": [74, 44, 9, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 54], [88, 54], [80, 54], [64, 54], [50, 54], [34, 54], [20, 55], [8, 55]], "smooth": false },
      { "kind": "stairs", "pts": [[50, 54], [50, 44], [50, 28]], "label": "大台阶上王城前" },
      { "kind": "main", "pts": [[22, 28], [26, 28], [45, 28], [50, 28], [55, 28], [68, 28]], "smooth": false },
      { "kind": "stairs", "pts": [[50, 28], [50, 18]], "label": "王城大门" },
      { "kind": "minor", "pts": [[50, 18], [50, 12], [42, 12], [36, 12], [36, 6], [42, 6]], "label": "王城西侧", "smooth": false },
      { "kind": "minor", "pts": [[50, 12], [62, 12], [66, 7]], "label": "王城东侧（右翼）", "smooth": false },
      { "kind": "minor", "pts": [[26, 28], [24, 18], [12, 10], [3, 5]], "label": "学院脚下·研究室入口" },
      { "kind": "minor", "pts": [[34, 54], [28, 52]] },
      { "kind": "minor", "pts": [[34, 54], [41, 60]] },
      { "kind": "minor", "pts": [[64, 54], [62, 52]] },
      { "kind": "minor", "pts": [[80, 54], [78, 60]] },
      { "kind": "minor", "pts": [[88, 54], [88, 64]], "label": "入口南侧小巷", "smooth": false },
      { "kind": "minor", "pts": [[88, 54], [88, 46], [90, 46]], "smooth": false },
      { "kind": "minor", "pts": [[68, 28], [80, 26], [88, 24]], "label": "图书馆旁庭园" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 54], "to": "east_atlasdam_flats", "label": "东门", "lp": "t" },
      { "kind": "exit", "at": [3, 5], "to": "subterranean_study", "label": "地下研究室入口", "lp": "r", "note": "塞拉斯第1章开始前入口被木板封住。" },
      { "kind": "chest", "at": [36, 12], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [36, 6], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [42, 6], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [62, 12], "tr": [3], "lp": "b" },
      { "kind": "npc", "at": [56, 12], "label": "王城卫兵", "npc": [2], "lp": "t" },
      { "kind": "npc", "at": [66, 7], "label": "小偷男孩", "npc": [4], "lp": "r" },
      { "kind": "npc", "at": [46, 21], "label": "王城前卫兵", "npc": [3], "lp": "l" },
      { "kind": "npc", "at": [68, 28], "label": "梅赛德斯（图书馆）", "npc": [6], "lp": "b" },
      { "kind": "guild", "at": [22, 28], "label": "王立学院", "lp": "b" },
      { "kind": "tavern", "at": [28, 52], "label": "酒馆", "npc": [0], "lp": "t" },
      { "kind": "npc", "at": [18, 55], "label": "带徽章的醉汉", "npc": [5], "lp": "b" },
      { "kind": "inn", "at": [41, 60], "label": "旅店", "lp": "l" },
      { "kind": "weapon", "at": [62, 52], "label": "武器防具店", "lp": "t" },
      { "kind": "item", "at": [78, 60], "label": "道具店", "lp": "l" },
      { "kind": "save", "at": [92, 54], "label": "入口存档点", "lp": "b" },
      { "kind": "npc", "at": [90, 46], "label": "城门守卫", "npc": [7], "lp": "t" },
      { "kind": "npc", "at": [88, 63], "label": "可疑的放贷人", "npc": [1], "lp": "l", "note": "旁边是教师特拉西奥（支线「特拉西奥的教导(I)」）。" }
    ]
  },
  "subterranean_study": {
    "theme": "cave",
    "size": [100, 70],
    "note": "学院脚下东南侧进洞：入口岔路左宝箱、向北是死胡同；主路向西北到挂灯笼的岔路，北侧洞穴通往两条隐藏小道，向右经楼梯上到旅行商人与存档点，再往北是罗素的研究室。",
    "zones": [
      { "kind": "room", "rect": [66, 50, 30, 18], "label": "入口岔路" },
      { "kind": "room", "rect": [2, 4, 30, 40], "label": "北侧洞穴" },
      { "kind": "room", "rect": [36, 42, 26, 14] },
      { "kind": "room", "rect": [44, 2, 40, 28], "label": "上层·研究室" },
      { "kind": "rock", "poly": [[22, 46], [30, 48], [28, 54], [20, 52]] },
      { "kind": "rock", "poly": [[56, 32], [62, 30], [62, 36]] },
      { "kind": "pit", "poly": [[86, 6], [96, 4], [98, 20], [90, 22]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[80, 68], [80, 58], [66, 52], [44, 50]] },
      { "kind": "minor", "pts": [[80, 58], [70, 62], [64, 64]], "label": "入口岔路往左" },
      { "kind": "minor", "pts": [[80, 58], [88, 48], [92, 36]], "label": "入口往北走到底" },
      { "kind": "minor", "pts": [[44, 50], [30, 44], [22, 32], [18, 18], [16, 10]], "label": "灯笼岔路北侧洞穴" },
      { "kind": "hidden", "pts": [[16, 10], [10, 8], [5, 12]], "label": "最北处往左的隐藏小道" },
      { "kind": "hidden", "pts": [[30, 44], [24, 52], [20, 58]], "label": "回程右手岩石间小道" },
      { "kind": "main", "pts": [[44, 50], [56, 44], [64, 38]], "label": "灯笼岔路往右" },
      { "kind": "minor", "pts": [[64, 38], [74, 38], [80, 40]], "label": "楼梯前继续向右" },
      { "kind": "stairs", "pts": [[64, 38], [64, 28], [64, 22]], "label": "楼梯" },
      { "kind": "minor", "pts": [[64, 22], [70, 22]] },
      { "kind": "minor", "pts": [[64, 22], [56, 16], [52, 12]], "label": "存档点左上方" },
      { "kind": "stairs", "pts": [[64, 22], [54, 24], [46, 28]], "label": "商人左侧楼梯（上→下）" },
      { "kind": "minor", "pts": [[46, 28], [42, 32]] },
      { "kind": "main", "pts": [[64, 22], [70, 14], [74, 6]] }
    ],
    "pois": [
      { "kind": "exit", "at": [80, 68], "to": "atlasdam", "label": "往阿特拉斯达姆（学院）", "lp": "r", "dir": "东南" },
      { "kind": "chest", "at": [64, 64], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [92, 36], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [5, 12], "tr": [2], "lp": "b" },
      { "kind": "chest_purple", "at": [20, 58], "tr": [3], "lp": "b" },
      { "kind": "chest", "at": [80, 40], "tr": [4], "lp": "b" },
      { "kind": "chest_purple", "at": [52, 12], "tr": [5], "lp": "l" },
      { "kind": "chest", "at": [42, 32], "tr": [6], "lp": "l" },
      { "kind": "landmark", "at": [44, 50], "label": "灯笼岔路", "lp": "b" },
      { "kind": "save", "at": [64, 22], "label": "存档点", "lp": "b" },
      { "kind": "peddler", "at": [70, 22], "label": "旅行商人", "npc": [0], "lp": "r" },
      { "kind": "boss", "at": [74, 6], "label": "罗素", "lp": "r" }
    ]
  },
  "east_atlasdam_flats": {
    "theme": "field",
    "size": [100, 70],
    "note": "西口接阿特拉斯达姆东门，走到岔路口后一路向西北通往北阿特拉斯达姆平原、一路向东南下坡通往海岸地区。两个宝箱分别在两条支路尽头（具体位置为示意）。",
    "zones": [
      { "kind": "water", "poly": [[0, 54], [24, 52], [38, 60], [44, 70], [0, 70]] },
      { "kind": "forest", "poly": [[64, 0], [100, 0], [100, 22], [86, 24], [72, 14]] },
      { "kind": "grass", "rect": [40, 24, 30, 14] },
      { "kind": "cliff", "poly": [[74, 46], [100, 40], [100, 70], [76, 70], [72, 58]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [20, 38], [36, 36]] },
      { "kind": "main", "pts": [[36, 36], [30, 22], [18, 10], [6, 4]], "label": "往北阿特拉斯达姆平原" },
      { "kind": "main", "pts": [[36, 36], [56, 42], [66, 54], [62, 68]], "label": "南下海岸地区" },
      { "kind": "minor", "pts": [[56, 42], [74, 36], [86, 30]], "label": "东侧支路" },
      { "kind": "minor", "pts": [[30, 22], [44, 16], [52, 12]], "label": "北侧支路" },
      { "kind": "minor", "pts": [[66, 54], [56, 60], [50, 62]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "atlasdam", "label": "往阿特拉斯达姆", "lp": "t" },
      { "kind": "exit", "at": [6, 4], "to": "north_atlasdam_flats", "label": "往北阿特拉斯达姆平原", "lp": "r", "dir": "西北" },
      { "kind": "exit", "at": [62, 68], "to": "coastlands/north_rippletide_coast", "label": "往北利布尔泰德海道", "lp": "r" },
      { "kind": "chest", "at": [86, 30], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [52, 12], "tr": [1], "lp": "r" },
      { "kind": "npc", "at": [46, 39], "label": "受伤的旅人基特", "npc": [0], "lp": "b" },
      { "kind": "landmark", "at": [36, 36], "label": "岔路口", "lp": "l" },
      { "kind": "landmark", "at": [50, 62], "label": "内海眺望点", "lp": "l" }
    ]
  },
  "north_atlasdam_flats": {
    "theme": "field",
    "size": [100, 70],
    "note": "四向交汇的平原：东南来自东阿特拉斯达姆平原，主路在中央十字路口分出西行（雪原地区）与东北行（西诺布尔寇德平原）两路，西南林中小路通往夜啼之森。宝箱位置为示意。",
    "zones": [
      { "kind": "snow", "poly": [[0, 22], [14, 26], [18, 46], [0, 50]] },
      { "kind": "forest", "poly": [[0, 54], [22, 46], [36, 58], [32, 70], [0, 70]] },
      { "kind": "cliff", "poly": [[0, 0], [50, 0], [44, 10], [24, 12], [0, 14]] },
      { "kind": "grass", "rect": [62, 50, 22, 12] },
      { "kind": "forest", "poly": [[100, 18], [100, 46], [90, 40], [92, 22]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 66], [78, 54], [60, 44]] },
      { "kind": "main", "pts": [[60, 44], [56, 30], [70, 18], [86, 10], [94, 4]], "label": "往西诺布尔寇德平原" },
      { "kind": "main", "pts": [[60, 44], [40, 40], [20, 38], [2, 36]], "label": "往雪原地区" },
      { "kind": "minor", "pts": [[40, 40], [28, 52], [14, 62], [6, 66]], "label": "林中小路往夜啼之森" },
      { "kind": "minor", "pts": [[56, 30], [42, 22], [30, 18]], "label": "西北侧支路" },
      { "kind": "minor", "pts": [[78, 54], [86, 46], [88, 40]], "label": "东侧支路" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 36], "to": "frostlands/n_flamesgrace_wilds", "label": "往北弗雷姆葛雷斯", "lp": "t" },
      { "kind": "exit", "at": [96, 66], "to": "east_atlasdam_flats", "label": "往东阿特拉斯达姆平原", "lp": "l" },
      { "kind": "exit", "at": [6, 66], "to": "whistlewood", "label": "夜啼之森", "lp": "r" },
      { "kind": "exit", "at": [94, 4], "to": "western_noblecourt_flats", "label": "往西诺布尔寇德平原", "lp": "l" },
      { "kind": "chest", "at": [30, 18], "tr": [0], "lp": "b" },
      { "kind": "chest", "at": [88, 40], "tr": [1], "lp": "l" },
      { "kind": "landmark", "at": [60, 44], "label": "十字路口", "lp": "b" }
    ]
  },
  "whistlewood": {
    "theme": "forest",
    "size": [100, 70],
    "note": "从东北角进入的夜之森林，中央是静谧的池塘，道路绕池塘一圈，西端是古斯塔夫所在的林间空地。池塘北侧是火把与藤蔓装饰的遗迹入口：入内向东是银剑，向西是属防增强坚果，再往西北是存档点（南侧为治愈葡萄串），存档点西北是古斯塔夫；池塘东北为1,500叶、西南为活力石榴（位置为示意）。",
    "zones": [
      { "kind": "water", "poly": [[38, 26], [52, 22], [64, 28], [62, 40], [50, 46], [38, 40]], "label": "池塘" },
      { "kind": "forest", "poly": [[0, 0], [70, 0], [62, 8], [30, 10], [0, 16]] },
      { "kind": "forest", "poly": [[74, 60], [100, 60], [100, 70], [70, 70]] },
      { "kind": "forest", "poly": [[20, 64], [44, 62], [46, 70], [18, 70]] },
      { "kind": "grass", "circle": [8, 34, 6], "label": "林间空地" }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 4], [82, 14], [70, 22]] },
      { "kind": "main", "pts": [[70, 22], [50, 16], [30, 22]], "label": "池塘北岸" },
      { "kind": "main", "pts": [[70, 22], [72, 40], [56, 52], [36, 50], [30, 22]], "label": "池塘南岸" },
      { "kind": "main", "pts": [[30, 22], [18, 30], [6, 34]], "label": "西端" },
      { "kind": "minor", "pts": [[82, 14], [86, 22]], "label": "池塘东北" },
      { "kind": "minor", "pts": [[50, 16], [48, 6]], "label": "遗迹入口" },
      { "kind": "minor", "pts": [[48, 6], [58, 6]], "label": "遗迹内向东" },
      { "kind": "minor", "pts": [[48, 6], [38, 6], [26, 8], [14, 20], [18, 30]], "label": "遗迹入口向西北" },
      { "kind": "minor", "pts": [[26, 8], [26, 16]], "label": "存档点南侧" },
      { "kind": "minor", "pts": [[36, 50], [30, 60]], "label": "池塘西南" }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 4], "to": "north_atlasdam_flats", "label": "往北阿特拉斯达姆平原", "lp": "l" },
      { "kind": "chest", "at": [30, 60], "tr": [0], "lp": "r", "note": "池塘西南方。" },
      { "kind": "chest", "at": [86, 22], "tr": [1], "lp": "r", "note": "池塘东北方。" },
      { "kind": "chest", "at": [58, 6], "tr": [2], "lp": "r", "note": "进入遗迹入口后向东。" },
      { "kind": "chest", "at": [26, 16], "tr": [3], "lp": "r", "note": "存档点南侧。" },
      { "kind": "chest", "at": [38, 6], "tr": [4], "lp": "b", "note": "遗迹入口向西。" },
      { "kind": "save", "at": [26, 8], "label": "存档点", "lp": "t" },
      { "kind": "landmark", "at": [50, 16], "label": "遗迹入口（火把与藤蔓）", "lp": "b" },
      { "kind": "landmark", "at": [34, 34], "label": "池塘西侧木栈桥", "lp": "l" },
      { "kind": "npc", "at": [6, 34], "label": "古斯塔夫", "npc": [0], "lp": "t", "note": "欧贝利克第4章完成后出现。" }
    ]
  }
});

OT2.addDetail("flatlands", {
  "western_noblecourt_flats": {
    "theme": "field",
    "size": [100, 70],
    "note": "西南口来自北阿特拉斯达姆平原，主路到中央交汇点后分两路：东侧大路直通诺布尔寇德，东北路通往西维斯帕米尔平原；东侧大路中途向东南下切到硕学王的祠堂，西侧山路通往虚无王座。笨拙的少年在西南草地往南的右侧坡上。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [24, 14], [8, 22], [0, 22]] },
      { "kind": "rock", "poly": [[0, 36], [10, 40], [12, 48], [0, 52]], "label": "西部山地" },
      { "kind": "grass", "rect": [24, 50, 20, 18], "label": "草地" },
      { "kind": "forest", "poly": [[56, 52], [74, 54], [70, 70], [50, 70]] },
      { "kind": "field", "rect": [60, 44, 14, 6] },
      { "kind": "forest", "poly": [[100, 46], [100, 70], [84, 70], [86, 56]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [18, 56], [34, 48], [44, 40]] },
      { "kind": "main", "pts": [[44, 40], [62, 38], [80, 36], [98, 34]], "label": "东侧大路（往诺布尔寇德）" },
      { "kind": "main", "pts": [[62, 38], [72, 24], [84, 12], [94, 3]], "label": "东北路" },
      { "kind": "minor", "pts": [[18, 56], [14, 44], [8, 34], [2, 30]], "label": "西侧山路往虚无王座" },
      { "kind": "minor", "pts": [[34, 48], [38, 58], [34, 64]], "label": "草地往南右侧坡上" },
      { "kind": "minor", "pts": [[80, 36], [78, 50], [72, 68]], "label": "往东南·硕学王的祠堂" },
      { "kind": "minor", "pts": [[72, 24], [60, 16], [52, 12]] },
      { "kind": "minor", "pts": [[84, 12], [74, 5]] },
      { "kind": "minor", "pts": [[14, 44], [24, 40], [28, 36]] },
      { "kind": "minor", "pts": [[78, 50], [90, 54], [94, 58]] },
      { "kind": "minor", "pts": [[44, 40], [42, 26], [36, 16]], "label": "北侧支路" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "north_atlasdam_flats", "label": "往北阿特拉斯达姆平原", "lp": "r" },
      { "kind": "exit", "at": [98, 34], "to": "noblecourt", "label": "诺布尔寇德", "lp": "b" },
      { "kind": "exit", "at": [94, 3], "to": "western_wispermill_flats", "label": "往西维斯帕米尔平原", "lp": "l" },
      { "kind": "exit", "at": [2, 30], "to": "hollow_throne", "label": "虚无王座", "lp": "t" },
      { "kind": "exit", "at": [72, 68], "to": "shrine_of_the_sage", "label": "硕学王的祠堂", "lp": "r", "dir": "南" },
      { "kind": "chest", "at": [52, 12], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [74, 5], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [28, 36], "tr": [2], "lp": "t" },
      { "kind": "chest", "at": [94, 58], "tr": [3], "lp": "l" },
      { "kind": "chest", "at": [36, 16], "tr": [4], "lp": "l" },
      { "kind": "npc", "at": [34, 64], "label": "笨拙的少年（盗墓贼）", "npc": [0], "lp": "l" },
      { "kind": "camp", "at": [53, 40], "label": "剧团帐篷", "npc": [1], "lp": "b", "note": "完成「旅人基特」后剧团团长在此扎营。" }
    ]
  },
  "shrine_of_the_sage": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "从北侧（西诺布尔寇德平原）进入，沿参道和石阶往南直行，回廊两侧有小壁龛，尽头是硕学王阿雷芬的石像，调查即可获得「学者」，无守护者。",
    "zones": [
      { "kind": "forest", "poly": [[0, 0], [40, 0], [36, 16], [0, 20]] },
      { "kind": "forest", "poly": [[60, 0], [100, 0], [100, 20], [64, 16]] },
      { "kind": "wall", "rect": [24, 22, 52, 3] },
      { "kind": "room", "rect": [26, 25, 48, 30], "label": "回廊" },
      { "kind": "room", "rect": [38, 55, 24, 13], "label": "祭坛" }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 2], [50, 14], [50, 22]], "label": "参道" },
      { "kind": "stairs", "pts": [[50, 22], [50, 30]], "label": "入口石阶" },
      { "kind": "main", "pts": [[50, 30], [50, 40], [50, 52]] },
      { "kind": "minor", "pts": [[50, 40], [32, 40]], "label": "左侧壁龛" },
      { "kind": "minor", "pts": [[50, 40], [68, 40]], "label": "右侧壁龛" },
      { "kind": "stairs", "pts": [[50, 52], [50, 60]], "label": "祭坛石阶" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 2], "to": "western_noblecourt_flats", "label": "往西诺布尔寇德平原", "lp": "r" },
      { "kind": "landmark", "at": [50, 14], "label": "参道", "lp": "r" },
      { "kind": "gate", "at": [50, 24], "label": "祠堂大门", "lp": "r" },
      { "kind": "landmark", "at": [32, 40], "label": "左侧壁龛", "lp": "b" },
      { "kind": "landmark", "at": [68, 40], "label": "右侧壁龛", "lp": "b" },
      { "kind": "shrine", "at": [50, 61], "label": "硕学王的石像（获得学者）", "lp": "r" }
    ]
  },
  "hollow_throne": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "东口进入的下层是天然洞窟，沿台阶上到中层的石造遗迹，再上一层是王座之间，王座守护者守在王座前，击败后王座旁宝箱可开出月光剑。宝箱按攻略大致方位绘制：右下角、左下角落、存档点左上、右上攀登到顶（紫色）、王座守护者房间内三个。",
    "zones": [
      { "kind": "room", "rect": [8, 48, 90, 20], "label": "洞窟（下层）" },
      { "kind": "room", "rect": [10, 16, 82, 30], "label": "遗迹（中层）" },
      { "kind": "room", "rect": [36, 1, 30, 13], "label": "王座之间" },
      { "kind": "rock", "poly": [[54, 62], [62, 60], [62, 68], [52, 68]] },
      { "kind": "pit", "poly": [[64, 40], [76, 38], [78, 46], [66, 46]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 56], [82, 56], [66, 58], [50, 56], [40, 50]] },
      { "kind": "stairs", "pts": [[40, 50], [42, 42], [44, 34]], "label": "上到遗迹" },
      { "kind": "main", "pts": [[44, 34], [56, 28], [60, 18]] },
      { "kind": "stairs", "pts": [[60, 18], [56, 12], [54, 8]], "label": "上到王座之间" },
      { "kind": "minor", "pts": [[54, 8], [62, 4]], "label": "王座旁（右上）" },
      { "kind": "minor", "pts": [[56, 12], [44, 11]] },
      { "kind": "minor", "pts": [[56, 12], [50, 13]] },
      { "kind": "minor", "pts": [[82, 56], [88, 66]] },
      { "kind": "minor", "pts": [[50, 56], [30, 60], [18, 62]] },
      { "kind": "minor", "pts": [[40, 50], [24, 46], [14, 42]] },
      { "kind": "minor", "pts": [[60, 18], [76, 14], [86, 10]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 56], "to": "western_noblecourt_flats", "label": "往西诺布尔寇德平原", "lp": "t" },
      { "kind": "chest", "at": [88, 66], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [18, 62], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [30, 60], "tr": [2], "lp": "t" },
      { "kind": "chest", "at": [14, 42], "tr": [3], "lp": "t" },
      { "kind": "save", "at": [24, 46], "label": "存档点", "lp": "b" },
      { "kind": "chest_purple", "at": [86, 10], "tr": [4], "lp": "l", "note": "往右上方攀登到顶。" },
      { "kind": "chest", "at": [50, 13], "tr": [5], "lp": "b" },
      { "kind": "chest", "at": [44, 11], "tr": [6], "lp": "l" },
      { "kind": "chest", "at": [62, 4], "tr": [7], "lp": "r", "note": "击败王座守护者后才能开启。" },
      { "kind": "boss", "at": [54, 8], "label": "王座守护者", "lp": "r" }
    ]
  },
  "western_wispermill_flats": {
    "theme": "field",
    "size": [100, 70],
    "note": "西南口来自西诺布尔寇德平原，主路向东北经存档点通往维斯帕米尔（村口有牧羊人）。主路西段跪着发抖的商人，从那里离开主路一路向西是净化之森；存档点北侧草丛里的小路（两朵花＋红旗）通往西北的占星师的祠堂。宝箱位置为示意。",
    "zones": [
      { "kind": "rock", "rect": [60, 46, 10, 7], "label": "石造遗迹" },
      { "kind": "rock", "rect": [62, 14, 8, 6] },
      { "kind": "grass", "poly": [[40, 22], [58, 20], [60, 36], [44, 38]], "label": "草丛" },
      { "kind": "forest", "poly": [[0, 0], [30, 0], [18, 12], [0, 18]] },
      { "kind": "forest", "poly": [[0, 30], [12, 34], [16, 46], [0, 50]] },
      { "kind": "farm", "rect": [80, 42, 16, 12], "label": "牧草地" }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [20, 58], [36, 50], [52, 44]] },
      { "kind": "main", "pts": [[52, 44], [70, 38], [86, 32], [98, 30]], "label": "往维斯帕米尔" },
      { "kind": "hidden", "pts": [[52, 44], [50, 32], [38, 18], [24, 8], [14, 3]], "label": "存档点北侧草丛小路" },
      { "kind": "minor", "pts": [[36, 50], [22, 40], [10, 30], [2, 24]], "label": "离开主路一路向西" },
      { "kind": "minor", "pts": [[70, 38], [74, 52], [78, 58]] },
      { "kind": "minor", "pts": [[86, 32], [84, 18], [80, 10]] },
      { "kind": "minor", "pts": [[20, 58], [30, 64], [36, 66]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "western_noblecourt_flats", "label": "往西诺布尔寇德平原", "lp": "r" },
      { "kind": "exit", "at": [98, 30], "to": "wispermill", "label": "维斯帕米尔", "lp": "t" },
      { "kind": "exit", "at": [2, 24], "to": "forest_of_purgation", "label": "净化之森", "lp": "r" },
      { "kind": "exit", "at": [14, 3], "to": "shrine_of_the_starseer", "label": "占星师的祠堂", "lp": "r" },
      { "kind": "save", "at": [52, 44], "label": "存档点", "lp": "b" },
      { "kind": "landmark", "at": [50, 32], "label": "红旗与两朵花", "lp": "r" },
      { "kind": "chest", "at": [78, 58], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [80, 10], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [36, 66], "tr": [2], "lp": "r" },
      { "kind": "npc", "at": [90, 33], "label": "悠闲的牧羊人", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [30, 53], "label": "发抖的商人", "npc": [1], "lp": "b" },
      { "kind": "danger", "at": [62, 41], "label": "首战必遇平原飞龙×2", "lp": "t" }
    ]
  }
});

OT2.addDetail("flatlands", {
  "noblecourt": {
    "theme": "town",
    "size": [100, 70],
    "note": "平民西区：西门入城沿主街到中央广场（酒馆、旅店在北侧，市场与道具店在南侧），向北的坡道尽头是奥立克的宅邸（两名看门人把守），主街东端过桥进入东区；东南角下台阶是巴勒姆的破屋。",
    "zones": [
      { "kind": "water", "poly": [[88, 0], [94, 0], [94, 70], [88, 70]] },
      { "kind": "plaza", "circle": [50, 40, 6], "label": "中央广场" },
      { "kind": "building", "rect": [40, 26, 12, 8], "label": "酒馆" },
      { "kind": "building", "rect": [58, 26, 12, 8], "label": "旅店" },
      { "kind": "plaza", "rect": [28, 54, 18, 12], "label": "市场" },
      { "kind": "building", "rect": [56, 58, 12, 8], "label": "道具店" },
      { "kind": "house", "rect": [72, 56, 12, 9], "label": "巴勒姆家" },
      { "kind": "house", "rect": [6, 30, 12, 9] },
      { "kind": "house", "rect": [6, 50, 12, 8] },
      { "kind": "house", "rect": [70, 18, 8, 8] },
      { "kind": "garden", "rect": [12, 0, 26, 6], "label": "奥立克宅邸" },
      { "kind": "cliff", "poly": [[56, 44], [66, 44], [70, 52], [60, 54]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 44], [16, 44], [36, 42], [50, 40], [66, 40], [80, 38], [86, 38]], "label": "主街" },
      { "kind": "bridge", "pts": [[86, 38], [96, 38]], "label": "往东区的桥" },
      { "kind": "main", "pts": [[96, 38], [98, 38]] },
      { "kind": "stairs", "pts": [[36, 42], [32, 28], [26, 14], [24, 2]], "label": "北坡往奥立克宅邸" },
      { "kind": "minor", "pts": [[50, 40], [46, 34]] },
      { "kind": "minor", "pts": [[66, 40], [64, 34]] },
      { "kind": "minor", "pts": [[50, 40], [50, 54], [62, 58]], "label": "往市场与道具店" },
      { "kind": "minor", "pts": [[50, 54], [42, 58], [36, 62]] },
      { "kind": "stairs", "pts": [[66, 40], [68, 48]], "label": "往巴勒姆家的阶梯" },
      { "kind": "minor", "pts": [[68, 48], [74, 54], [80, 56], [86, 58], [84, 64]], "label": "东南角" },
      { "kind": "minor", "pts": [[80, 38], [80, 26], [84, 18]], "label": "东北小巷" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 44], "to": "western_noblecourt_flats", "label": "西门", "lp": "t" },
      { "kind": "exit", "at": [24, 2], "to": "orlicks_manse", "label": "奥立克的宅邸", "lp": "r", "dir": "北" },
      { "kind": "exit", "at": [98, 38], "to": "east_noblecourt", "label": "东区", "lp": "b" },
      { "kind": "npc", "at": [21, 8], "label": "看门人（左）", "npc": [0], "lp": "l" },
      { "kind": "npc", "at": [28, 8], "label": "看门人（右）", "npc": [1], "lp": "r" },
      { "kind": "tavern", "at": [46, 34], "label": "酒馆", "lp": "l" },
      { "kind": "inn", "at": [64, 34], "label": "旅店", "lp": "r" },
      { "kind": "npc", "at": [66, 46], "label": "老妇人（民家门口）", "npc": [2], "lp": "l" },
      { "kind": "npc", "at": [24, 44], "label": "镇民", "npc": [3], "lp": "b" },
      { "kind": "npc", "at": [56, 42], "label": "男孩", "npc": [8], "lp": "t" },
      { "kind": "npc", "at": [44, 57], "label": "沙漠商人", "npc": [9], "lp": "t" },
      { "kind": "npc", "at": [36, 62], "label": "古董商", "npc": [7], "lp": "b" },
      { "kind": "item", "at": [62, 58], "label": "道具店", "lp": "b" },
      { "kind": "npc", "at": [70, 50], "label": "白胡子老人", "npc": [6], "lp": "l" },
      { "kind": "npc", "at": [80, 56], "label": "巴勒姆", "npc": [5], "lp": "t" },
      { "kind": "npc", "at": [86, 58], "label": "奥立克（剧情后）", "npc": [4], "lp": "l" },
      { "kind": "chest", "at": [26, 14], "tr": [0], "lp": "l", "note": "奥立克宅邸正门前。" },
      { "kind": "chest_purple", "at": [74, 54], "tr": [1], "lp": "t", "note": "中央广场右下的民家内，需先击败门口的老婆婆（位置按攻略描述示意）。" },
      { "kind": "landmark", "at": [91, 38], "label": "桥（基特）", "lp": "t" }
    ]
  },
  "east_noblecourt": {
    "theme": "manor",
    "size": [100, 70],
    "note": "城墙围起的贵族区：西门进来沿主街到喷泉广场，东北是阿泽尔哈特宅邸与庭院，北侧小路通往黑曜会之馆侧门；酒馆旁的楼梯下到南侧墓地（雷维洛在楼梯下），墓地最东端是罗莉之墓，墓地右下角有宝箱，阿泽尔哈特宅邸门口左侧另有一个。",
    "zones": [
      { "kind": "wall", "rect": [0, 0, 100, 2] },
      { "kind": "building", "rect": [62, 6, 24, 12], "label": "阿泽尔哈特宅邸" },
      { "kind": "garden", "rect": [62, 18, 24, 8], "label": "庭院" },
      { "kind": "building", "rect": [88, 22, 10, 12], "label": "东侧大宅" },
      { "kind": "plaza", "circle": [50, 34, 6], "label": "喷泉广场" },
      { "kind": "building", "rect": [20, 24, 12, 8], "label": "武器防具店" },
      { "kind": "building", "rect": [18, 44, 12, 8], "label": "酒馆" },
      { "kind": "grass", "rect": [20, 54, 76, 14], "label": "墓地" },
      { "kind": "building", "rect": [30, 4, 18, 10], "label": "黑曜会之馆" },
      { "kind": "house", "rect": [4, 22, 10, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [18, 40], [34, 38], [50, 34], [66, 34], [82, 36], [90, 40]], "label": "主街" },
      { "kind": "minor", "pts": [[50, 34], [46, 22], [40, 14], [40, 2]], "label": "往黑曜会之馆侧门" },
      { "kind": "minor", "pts": [[66, 34], [72, 24], [76, 20]], "label": "宅邸庭院" },
      { "kind": "minor", "pts": [[72, 24], [60, 18], [58, 14]], "label": "宅邸左侧" },
      { "kind": "minor", "pts": [[18, 40], [26, 34]] },
      { "kind": "minor", "pts": [[34, 38], [28, 45]] },
      { "kind": "stairs", "pts": [[34, 38], [38, 50], [40, 56]], "label": "酒馆旁楼梯往墓地" },
      { "kind": "minor", "pts": [[40, 56], [60, 60], [88, 62]], "label": "墓地小路" },
      { "kind": "minor", "pts": [[18, 40], [12, 28], [10, 18]], "label": "西北小巷" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "noblecourt", "label": "往西区", "lp": "t" },
      { "kind": "exit", "at": [40, 2], "to": "obsidian_manse", "label": "黑曜会之馆（侧门）", "lp": "r", "dir": "北", "note": "正门永不开启，剧情中经侧门进入。" },
      { "kind": "npc", "at": [10, 42], "label": "入口镇民", "npc": [4], "lp": "b" },
      { "kind": "weapon", "at": [26, 34], "label": "武器防具店", "lp": "l" },
      { "kind": "tavern", "at": [28, 45], "label": "酒馆", "npc": [3], "lp": "l" },
      { "kind": "npc", "at": [60, 38], "label": "康拉德", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [76, 38], "label": "扬", "npc": [1], "lp": "b" },
      { "kind": "npc", "at": [58, 14], "label": "拾荒者", "npc": [5], "lp": "l" },
      { "kind": "npc", "at": [76, 20], "label": "庭院的商人", "npc": [7], "lp": "r" },
      { "kind": "npc", "at": [90, 40], "label": "特拉西奥（倚栏杆）", "lp": "b" },
      { "kind": "npc", "at": [40, 56], "label": "雷维洛", "npc": [2], "lp": "l" },
      { "kind": "npc", "at": [58, 60], "label": "老守墓人", "npc": [6], "lp": "b" },
      { "kind": "landmark", "at": [88, 62], "label": "罗莉之墓", "lp": "l" },
      { "kind": "chest", "at": [84, 63], "tr": [0], "lp": "b", "note": "墓地右下角。" },
      { "kind": "chest", "at": [66, 21], "tr": [1], "lp": "t", "note": "阿泽尔哈特宅邸门口左侧。" }
    ]
  },
  "orlicks_manse": {
    "theme": "manor",
    "size": [120, 70],
    "note": "宅邸被分隔成互不相连的区块：正门进入1F入口大厅（左侧门内小房间、左侧楼梯上的房间），从大厅楼梯上2F走廊绕一圈，再从2F另一侧楼梯下到1F大桌大厅，最北是要用水晶钥匙开启的实验室与奥立克。2F三个宝箱的具体房间为示意。",
    "zones": [
      { "kind": "room", "rect": [4, 48, 50, 20], "label": "1F 入口大厅" },
      { "kind": "room", "rect": [2, 37, 20, 10], "label": "楼梯上房间" },
      { "kind": "room", "rect": [6, 4, 46, 32], "label": "1F 大桌大厅" },
      { "kind": "room", "rect": [62, 2, 56, 66], "label": "2F" },
      { "kind": "wall", "rect": [6, 15, 46, 2] },
      { "kind": "deck", "rect": [18, 20, 10, 4] }
    ],
    "paths": [
      { "kind": "main", "pts": [[30, 68], [30, 54]] },
      { "kind": "minor", "pts": [[30, 54], [16, 54], [10, 60]], "label": "入口左侧门内房间" },
      { "kind": "stairs", "pts": [[16, 54], [12, 46], [8, 42]], "label": "入口左侧楼梯" },
      { "kind": "stairs", "pts": [[30, 54], [48, 54], [66, 54]], "label": "进门后上楼梯" },
      { "kind": "minor", "pts": [[66, 54], [66, 44]], "label": "上楼梯左侧" },
      { "kind": "main", "pts": [[66, 54], [90, 54], [106, 54], [106, 30], [90, 20], [74, 20]], "label": "2F 走廊" },
      { "kind": "minor", "pts": [[90, 54], [90, 64]] },
      { "kind": "minor", "pts": [[106, 42], [114, 44]] },
      { "kind": "minor", "pts": [[90, 20], [90, 8]] },
      { "kind": "stairs", "pts": [[74, 20], [56, 20], [44, 22]], "label": "下楼到大桌大厅" },
      { "kind": "main", "pts": [[44, 22], [30, 22], [30, 12], [30, 6]] },
      { "kind": "minor", "pts": [[30, 22], [18, 26], [14, 30]], "label": "大桌子后方" }
    ],
    "pois": [
      { "kind": "exit", "at": [30, 68], "to": "noblecourt", "label": "正门", "lp": "r", "note": "对看门人说出口令「万物之真理」进入。" },
      { "kind": "save", "at": [22, 54], "label": "入口存档点", "lp": "t" },
      { "kind": "chest", "at": [10, 60], "tr": [3], "lp": "b" },
      { "kind": "chest", "at": [8, 42], "tr": [4], "lp": "r" },
      { "kind": "stairs", "at": [48, 54], "label": "上 2F", "lp": "t" },
      { "kind": "chest", "at": [66, 44], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [90, 64], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [114, 44], "tr": [2], "lp": "l" },
      { "kind": "chest_purple", "at": [90, 8], "tr": [5], "lp": "r" },
      { "kind": "stairs", "at": [56, 20], "label": "下到大厅", "lp": "t" },
      { "kind": "landmark", "at": [24, 22], "label": "大桌子", "lp": "t" },
      { "kind": "chest", "at": [14, 30], "tr": [6], "lp": "r" },
      { "kind": "save", "at": [30, 17], "label": "存档点（实验室门前）", "lp": "r" },
      { "kind": "gate", "at": [30, 13], "label": "实验室门（水晶钥匙）", "lp": "r" },
      { "kind": "boss", "at": [30, 6], "label": "奥立克", "lp": "r" }
    ]
  },
  "obsidian_manse": {
    "theme": "manor",
    "size": [120, 70],
    "note": "侧门进入1F大厅（吧台区），吧台区右上楼梯上到2F客房走廊，隐藏门众多；1F向东进入第二区域，再上楼到大门前的存档点，阿尔巴斯在大门后。各区之间的连接为示意。",
    "zones": [
      { "kind": "room", "rect": [4, 36, 52, 32], "label": "1F 大厅" },
      { "kind": "deck", "rect": [8, 44, 16, 4], "label": "吧台" },
      { "kind": "room", "rect": [4, 2, 54, 30], "label": "2F 客房" },
      { "kind": "room", "rect": [62, 36, 54, 32], "label": "第二区域" },
      { "kind": "room", "rect": [62, 2, 54, 30], "label": "大门前" },
      { "kind": "wall", "rect": [26, 10, 2, 16] },
      { "kind": "wall", "rect": [42, 4, 2, 14] }
    ],
    "paths": [
      { "kind": "main", "pts": [[28, 68], [28, 56], [54, 56], [80, 56], [100, 56]], "smooth": false },
      { "kind": "minor", "pts": [[28, 56], [18, 50], [14, 42]], "label": "吧台后方" },
      { "kind": "minor", "pts": [[28, 56], [40, 48], [46, 44]] },
      { "kind": "hidden", "pts": [[46, 44], [38, 40]], "label": "酒桶旁隐藏门" },
      { "kind": "stairs", "pts": [[46, 44], [46, 30]], "label": "吧台区右上楼梯" },
      { "kind": "minor", "pts": [[46, 30], [34, 26], [20, 26], [8, 26]], "label": "2F 走廊（走到尽头）", "smooth": false },
      { "kind": "minor", "pts": [[34, 26], [34, 18]], "label": "第一个房间" },
      { "kind": "hidden", "pts": [[34, 18], [44, 16], [50, 10], [54, 6]], "label": "右侧隐藏门→穿过两个房间" },
      { "kind": "minor", "pts": [[20, 26], [20, 14], [12, 6]], "label": "第二个房间" },
      { "kind": "stairs", "pts": [[14, 26], [10, 34], [6, 34]], "label": "西南出口下楼" },
      { "kind": "minor", "pts": [[80, 56], [72, 64]] },
      { "kind": "stairs", "pts": [[100, 56], [106, 46]], "label": "第二区域右侧楼梯" },
      { "kind": "minor", "pts": [[106, 46], [114, 44]], "label": "楼梯上往东" },
      { "kind": "stairs", "pts": [[80, 56], [80, 40], [80, 30]], "label": "上到大门前" },
      { "kind": "main", "pts": [[80, 30], [80, 22], [88, 14], [88, 6]] },
      { "kind": "hidden", "pts": [[88, 14], [100, 14], [104, 10]], "label": "大门右侧隐藏门" }
    ],
    "pois": [
      { "kind": "exit", "at": [28, 68], "to": "east_noblecourt", "label": "侧门", "lp": "r" },
      { "kind": "chest", "at": [14, 42], "tr": [5], "lp": "b" },
      { "kind": "chest", "at": [38, 40], "tr": [6], "lp": "t" },
      { "kind": "chest", "at": [8, 26], "tr": [7], "lp": "t" },
      { "kind": "chest_purple", "at": [54, 6], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [12, 6], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [6, 34], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [72, 64], "tr": [8], "lp": "l" },
      { "kind": "chest", "at": [114, 44], "tr": [4], "lp": "l" },
      { "kind": "save", "at": [80, 22], "label": "存档点", "lp": "l" },
      { "kind": "gate", "at": [88, 14], "label": "大门", "lp": "l" },
      { "kind": "chest", "at": [104, 10], "tr": [3], "lp": "b" },
      { "kind": "boss", "at": [88, 6], "label": "阿尔巴斯", "lp": "r" }
    ]
  }
});

OT2.addDetail("flatlands", {
  "forest_of_purgation": {
    "theme": "forest",
    "size": [100, 70],
    "note": "东侧入口旁就是存档点：从存档点往北再往东是玛纳加尔姆；主路向西深入浓雾森林，最西北角的遗迹祭坛上是遗党首领（支线进行中才出现）。宝箱所在支路为示意（攻略未给出具体方位）。",
    "zones": [
      { "kind": "forest", "poly": [[56, 0], [78, 0], [76, 12], [62, 14]] },
      { "kind": "forest", "poly": [[70, 60], [100, 58], [100, 70], [72, 70]] },
      { "kind": "forest", "poly": [[0, 60], [20, 58], [24, 70], [0, 70]] },
      { "kind": "room", "rect": [86, 4, 12, 16], "label": "魔狼之地" },
      { "kind": "rock", "rect": [2, 2, 16, 14], "label": "遗迹祭坛" },
      { "kind": "rock", "rect": [52, 50, 8, 6] },
      { "kind": "swamp", "poly": [[24, 44], [40, 46], [36, 56], [22, 54]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 50], [86, 50]] },
      { "kind": "main", "pts": [[86, 50], [84, 30], [86, 20], [94, 12]], "label": "存档点往北再往东" },
      { "kind": "main", "pts": [[86, 50], [66, 52], [48, 46], [30, 40], [18, 24], [10, 10]], "label": "往西北深处" },
      { "kind": "minor", "pts": [[66, 52], [64, 64]] },
      { "kind": "minor", "pts": [[48, 46], [40, 60], [30, 64]] },
      { "kind": "minor", "pts": [[30, 40], [14, 48], [8, 54]] },
      { "kind": "minor", "pts": [[84, 30], [70, 24], [60, 18]] },
      { "kind": "minor", "pts": [[48, 46], [50, 32], [44, 22]] },
      { "kind": "minor", "pts": [[18, 24], [28, 12], [36, 6]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 50], "to": "western_wispermill_flats", "label": "往西维斯帕米尔平原", "lp": "t" },
      { "kind": "save", "at": [86, 50], "label": "入口存档点", "lp": "b" },
      { "kind": "boss", "at": [94, 12], "label": "玛纳加尔姆", "lp": "l" },
      { "kind": "npc", "at": [10, 10], "label": "遗党首领", "npc": [0], "lp": "r" },
      { "kind": "chest", "at": [64, 64], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [30, 64], "tr": [1], "lp": "r" },
      { "kind": "chest_purple", "at": [8, 54], "tr": [2], "lp": "t" },
      { "kind": "chest", "at": [60, 18], "tr": [3], "lp": "l" },
      { "kind": "chest", "at": [44, 22], "tr": [4], "lp": "l" },
      { "kind": "chest", "at": [36, 6], "tr": [5], "lp": "r" }
    ]
  },
  "shrine_of_the_starseer": {
    "theme": "cave",
    "size": [100, 70],
    "note": "东南入口进入雾气洞窟，道路沿西侧绕地下湖一圈到北岸，最深处（东北）是占星师史黛欧拉与祠坛。宝箱位置为示意（攻略未给出具体方位）。",
    "zones": [
      { "kind": "water", "poly": [[34, 24], [56, 20], [74, 28], [76, 44], [60, 54], [38, 50], [28, 38]], "label": "地下湖" },
      { "kind": "room", "rect": [74, 2, 24, 18], "label": "最深处" },
      { "kind": "rock", "poly": [[0, 0], [30, 0], [20, 10], [0, 14]] },
      { "kind": "rock", "poly": [[0, 54], [12, 60], [10, 70], [0, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[94, 66], [80, 60], [62, 62], [40, 60], [22, 50], [16, 34], [24, 18], [44, 10], [64, 12], [80, 12]] },
      { "kind": "main", "pts": [[80, 12], [90, 6]] },
      { "kind": "minor", "pts": [[40, 60], [36, 68]] },
      { "kind": "minor", "pts": [[16, 34], [6, 32]] },
      { "kind": "minor", "pts": [[44, 10], [42, 3]] },
      { "kind": "minor", "pts": [[80, 60], [84, 48], [86, 40]], "label": "入口北侧死路" }
    ],
    "pois": [
      { "kind": "exit", "at": [94, 66], "to": "western_wispermill_flats", "label": "往西维斯帕米尔平原", "lp": "l" },
      { "kind": "chest", "at": [36, 68], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [6, 32], "tr": [1], "lp": "t" },
      { "kind": "chest", "at": [42, 3], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [86, 40], "tr": [3], "lp": "l" },
      { "kind": "boss", "at": [80, 12], "label": "占星师 史黛欧拉", "lp": "b" },
      { "kind": "shrine", "at": [90, 6], "label": "占星师祠坛", "lp": "l" }
    ]
  },
  "wispermill": {
    "theme": "village",
    "size": [100, 70],
    "note": "风车小村：西口进村沿主街经旅店、存档点、杂货店到东侧风车；牢房在村子东南，牢房南侧的小路向东通往漆黑洞窟。宝箱位置为示意。",
    "zones": [
      { "kind": "building", "rect": [82, 8, 12, 12], "label": "风车" },
      { "kind": "building", "rect": [8, 12, 10, 10], "label": "风车" },
      { "kind": "building", "rect": [26, 20, 12, 8], "label": "旅店" },
      { "kind": "building", "rect": [54, 18, 12, 8], "label": "杂货店" },
      { "kind": "building", "rect": [64, 40, 14, 10], "label": "牢房" },
      { "kind": "farm", "rect": [20, 44, 22, 14], "label": "田地" },
      { "kind": "house", "rect": [44, 52, 10, 7] },
      { "kind": "house", "rect": [38, 6, 10, 7] },
      { "kind": "forest", "poly": [[82, 40], [100, 36], [100, 54], [86, 52]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 34], [20, 34], [32, 33], [40, 32], [50, 32], [60, 31], [66, 30], [80, 28]], "label": "主街" },
      { "kind": "minor", "pts": [[80, 28], [86, 20]], "label": "东侧风车" },
      { "kind": "minor", "pts": [[32, 33], [32, 28]] },
      { "kind": "minor", "pts": [[60, 31], [60, 26]] },
      { "kind": "minor", "pts": [[40, 32], [36, 18], [30, 10]], "label": "北侧小巷" },
      { "kind": "minor", "pts": [[66, 30], [60, 40], [62, 54], [72, 58], [84, 60], [98, 62]], "label": "牢房南侧·往漆黑洞窟" },
      { "kind": "minor", "pts": [[20, 34], [14, 24]], "label": "西侧风车" },
      { "kind": "minor", "pts": [[50, 32], [48, 46], [40, 54]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 34], "to": "western_wispermill_flats", "label": "西口", "lp": "t" },
      { "kind": "exit", "at": [98, 62], "to": "ebony_grotto", "label": "漆黑洞窟", "lp": "t", "dir": "东" },
      { "kind": "npc", "at": [10, 36], "label": "村口村民", "npc": [5], "lp": "b" },
      { "kind": "npc", "at": [16, 27], "label": "村民（精灵石）", "npc": [6], "lp": "l" },
      { "kind": "inn", "at": [32, 28], "label": "旅店", "lp": "l" },
      { "kind": "npc", "at": [26, 36], "label": "苦恼的村民", "npc": [0], "lp": "b" },
      { "kind": "save", "at": [50, 32], "label": "存档点", "lp": "t" },
      { "kind": "npc", "at": [49, 38], "label": "莉安娜", "npc": [1], "lp": "l" },
      { "kind": "npc", "at": [56, 34], "label": "村民", "npc": [3], "lp": "b" },
      { "kind": "shop", "at": [60, 26], "label": "杂货店", "lp": "l" },
      { "kind": "npc", "at": [66, 26], "label": "特拉西奥", "lp": "r" },
      { "kind": "npc", "at": [82, 25], "label": "苗条的农妇", "npc": [4], "lp": "r" },
      { "kind": "npc", "at": [44, 50], "label": "老妇人", "npc": [2], "lp": "r" },
      { "kind": "chest", "at": [30, 10], "tr": [0], "lp": "r" }
    ]
  },
  "ebony_grotto": {
    "theme": "cave",
    "size": [120, 70],
    "note": "西口进入外层：入口存档点向北到顶、向东贴南侧石柱各有宝箱，主路向东北经北侧岔路到火盆处下到内层。内层从存档点往南经两座火盆，转向东后再南下到Boss前存档点与马蒂亚斯。各宝箱按攻略文字示意，层间具体衔接把握较低。",
    "zones": [
      { "kind": "room", "rect": [2, 2, 56, 66], "label": "外层" },
      { "kind": "room", "rect": [62, 2, 56, 66], "label": "内层" },
      { "kind": "rock", "rect": [22, 48, 4, 4] },
      { "kind": "rock", "rect": [32, 52, 4, 4] },
      { "kind": "rock", "poly": [[54, 36], [58, 38], [56, 42]] },
      { "kind": "cliff", "poly": [[66, 30], [76, 26], [78, 34], [68, 38]] },
      { "kind": "room", "rect": [80, 62, 14, 7], "label": "祭坛" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [10, 40]] },
      { "kind": "minor", "pts": [[10, 40], [12, 24], [14, 6]], "label": "存档点往北走到顶" },
      { "kind": "minor", "pts": [[10, 40], [20, 54], [34, 60], [44, 62]], "label": "向东贴南侧石柱的弯道" },
      { "kind": "main", "pts": [[10, 40], [24, 34], [38, 28], [48, 18]] },
      { "kind": "minor", "pts": [[48, 18], [50, 30], [52, 40], [56, 44]], "label": "北侧岔路往南·右侧岩石间" },
      { "kind": "main", "pts": [[48, 18], [52, 10]] },
      { "kind": "minor", "pts": [[52, 10], [44, 6], [38, 5]], "label": "火盆左侧墙壁入口" },
      { "kind": "stairs", "pts": [[52, 10], [60, 12], [66, 14]], "label": "通往内层" },
      { "kind": "minor", "pts": [[66, 14], [66, 6]], "label": "内层入口正前方" },
      { "kind": "main", "pts": [[66, 14], [78, 20]] },
      { "kind": "minor", "pts": [[78, 20], [92, 18], [100, 14]], "label": "存档点往东" },
      { "kind": "minor", "pts": [[78, 20], [72, 12], [74, 4]], "label": "存档点往北贴左墙" },
      { "kind": "main", "pts": [[78, 20], [84, 30], [88, 36], [92, 44], [104, 44]] },
      { "kind": "stairs", "pts": [[84, 30], [96, 26], [104, 24]], "label": "火盆旁斜坡" },
      { "kind": "stairs", "pts": [[88, 36], [80, 34], [72, 28]], "label": "两火盆之间往西北上高台" },
      { "kind": "hidden", "pts": [[92, 44], [86, 52], [80, 56]], "label": "火盆正南方隐藏通道" },
      { "kind": "hidden", "pts": [[104, 44], [114, 42], [116, 36]], "label": "转南前往东的隐藏小路" },
      { "kind": "main", "pts": [[104, 44], [104, 58]] },
      { "kind": "minor", "pts": [[104, 58], [112, 62], [116, 66]], "label": "Boss前存档点往东南" },
      { "kind": "main", "pts": [[104, 58], [94, 64], [86, 66]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "wispermill", "label": "往维斯帕米尔", "lp": "t" },
      { "kind": "save", "at": [10, 40], "label": "入口存档点", "lp": "b" },
      { "kind": "chest", "at": [14, 6], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [44, 62], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [56, 44], "tr": [2], "lp": "b" },
      { "kind": "landmark", "at": [52, 10], "label": "火盆", "lp": "t" },
      { "kind": "chest", "at": [38, 5], "tr": [3], "lp": "b" },
      { "kind": "chest", "at": [66, 6], "tr": [4], "lp": "t" },
      { "kind": "save", "at": [78, 20], "label": "内层存档点", "lp": "l" },
      { "kind": "chest", "at": [100, 14], "tr": [5], "lp": "r" },
      { "kind": "chest", "at": [74, 4], "tr": [6], "lp": "r" },
      { "kind": "landmark", "at": [84, 30], "label": "火盆", "lp": "r" },
      { "kind": "landmark", "at": [92, 44], "label": "火盆", "lp": "b" },
      { "kind": "chest", "at": [104, 24], "tr": [7], "lp": "r" },
      { "kind": "chest_purple", "at": [72, 28], "tr": [10], "lp": "l" },
      { "kind": "chest", "at": [80, 56], "tr": [8], "lp": "l" },
      { "kind": "chest", "at": [116, 36], "tr": [9], "lp": "l" },
      { "kind": "save", "at": [104, 58], "label": "Boss前存档点", "lp": "r" },
      { "kind": "chest", "at": [116, 66], "tr": [11], "lp": "l" },
      { "kind": "boss", "at": [86, 66], "label": "马蒂亚斯", "lp": "l" }
    ]
  }
});

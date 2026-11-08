OT2.addDetail("brightlands", {
  "new_delsta": {
    "theme": "city",
    "size": [120, 80],
    "note": "花都分主城区（东、中部）与后街（西南）两片：东门通往东新德尔斯塔街道，入口第一段台阶上是酒馆，中央广场向西北经武器防具店、道具店到大剧场，东北是达蒙特宅邸，南侧街道有旅店；西南小巷尽头是下水道入口，向西进入后街，后街北侧是被水渠环绕的游戏厅（黑蛇老巢）。",
    "zones": [
      { "kind": "room", "rect": [0, 24, 44, 56], "label": "后街" },
      { "kind": "water", "poly": [[2, 24], [40, 24], [40, 40], [34, 40], [34, 27], [8, 27], [8, 46], [2, 46]] },
      { "kind": "building", "rect": [10, 28, 21, 12], "label": "游戏厅" },
      { "kind": "building", "rect": [14, 3, 26, 12], "label": "大剧场" },
      { "kind": "building", "rect": [80, 3, 20, 8], "label": "达蒙特宅邸" },
      { "kind": "building", "rect": [102, 13, 12, 7] },
      { "kind": "building", "rect": [60, 14, 10, 6] },
      { "kind": "building", "rect": [42, 22, 9, 6] },
      { "kind": "plaza", "circle": [66, 32, 6], "label": "中央广场" },
      { "kind": "building", "rect": [74, 48, 12, 7] },
      { "kind": "house", "rect": [58, 48, 8, 6] },
      { "kind": "house", "rect": [50, 58, 10, 8] },
      { "kind": "house", "rect": [94, 36, 10, 7] },
      { "kind": "house", "rect": [98, 50, 10, 7] },
      { "kind": "building", "rect": [12, 48, 10, 6] },
      { "kind": "garden", "rect": [2, 60, 12, 10], "label": "黑蛇墓地" },
      { "kind": "building", "rect": [24, 66, 10, 7] }
    ],
    "paths": [
      { "kind": "main", "pts": [[118, 26], [104, 28], [86, 32], [66, 32]] },
      { "kind": "stairs", "pts": [[104, 28], [108, 21]], "label": "入口第一段台阶（酒馆）" },
      { "kind": "minor", "pts": [[108, 21], [116, 20], [116, 12]], "label": "酒馆东侧道路尽头" },
      { "kind": "main", "pts": [[86, 32], [88, 20], [90, 12], [90, 2]], "label": "往达蒙特宅邸" },
      { "kind": "main", "pts": [[66, 32], [60, 24], [52, 18], [40, 18], [27, 17], [27, 2]], "label": "往大剧场（商店街）" },
      { "kind": "main", "pts": [[66, 32], [52, 36], [46, 46], [46, 58], [46, 70], [46, 78]], "label": "西南小巷（下水道）" },
      { "kind": "minor", "pts": [[86, 32], [84, 46], [60, 46], [46, 46]], "label": "南侧街道（旅店）" },
      { "kind": "ladder", "pts": [[46, 68], [54, 64]], "label": "梯子上屋顶" },
      { "kind": "minor", "pts": [[46, 58], [38, 58], [30, 58]], "label": "往后街" },
      { "kind": "minor", "pts": [[30, 58], [30, 48], [20, 44], [20, 41]], "label": "往游戏厅" },
      { "kind": "minor", "pts": [[20, 44], [7, 44]], "label": "游戏厅大门左侧码头" },
      { "kind": "boat", "pts": [[7, 44], [5, 32], [10, 25.5], [30, 25.5], [37, 28], [37, 36]], "label": "乘船绕到游戏厅背后" },
      { "kind": "minor", "pts": [[37, 36], [33, 36]] },
      { "kind": "minor", "pts": [[20, 41], [20, 36], [14, 34]], "label": "游戏厅大厅" },
      { "kind": "minor", "pts": [[20, 36], [24, 36], [28, 31]], "label": "金库" },
      { "kind": "minor", "pts": [[30, 58], [20, 57], [12, 62]], "label": "往墓地" },
      { "kind": "minor", "pts": [[20, 57], [10, 55], [8, 50]], "label": "酒馆左侧小巷" },
      { "kind": "minor", "pts": [[30, 58], [29, 65], [29, 69]], "label": "守卫把守的屋子" },
      { "kind": "minor", "pts": [[60, 24], [63, 20]] },
      { "kind": "minor", "pts": [[66, 32], [72, 26]], "label": "存档点北侧" },
      { "kind": "minor", "pts": [[27, 17], [18, 19]], "label": "剧场门前" },
      { "kind": "minor", "pts": [[27, 10], [18, 8]], "label": "剧场内" }
    ],
    "pois": [
      { "kind": "exit", "at": [118, 26], "to": "eastern_nd_highroad", "label": "东门", "lp": "l", "dir": "东北" },
      { "kind": "exit", "at": [27, 2], "to": "theater_backstage", "label": "大剧场-后台", "lp": "r" },
      { "kind": "exit", "at": [90, 2], "to": "diamante_estate", "label": "宅邸大门", "lp": "r" },
      { "kind": "exit", "at": [46, 78], "to": "underground_waterway", "label": "下水道入口", "lp": "r" },
      { "kind": "tavern", "at": [108, 21], "label": "酒馆", "npc": [13, 19], "lp": "t", "note": "入口第一段台阶上；厨师是支线「招牌菜」委托人，夜晚门外女性可恳求大剧场门票。" },
      { "kind": "chest", "at": [116, 12], "tr": [1], "lp": "l" },
      { "kind": "hidden", "at": [87, 17], "tr": [9], "label": "旅行者斗篷（宅邸门外）", "lp": "l", "note": "情报来自酒馆内的商人。" },
      { "kind": "weapon", "at": [63, 20], "label": "武器防具店", "npc": [0], "lp": "t" },
      { "kind": "item", "at": [48, 20], "label": "道具店", "npc": [5], "lp": "r" },
      { "kind": "save", "at": [70, 35], "label": "存档点", "lp": "b" },
      { "kind": "npc", "at": [72, 26], "label": "画家", "npc": [3], "lp": "r" },
      { "kind": "hidden", "at": [58, 34], "tr": [10], "label": "隐藏道具（主城区）", "lp": "l", "note": "金戒指、毒瓶、长枪（旅店内）、果酱、忘却之花（道具店内）等分散在主城区，需分别向北侧夫人（夜）、观众（夜）、入口商人、青年（夜）探听。" },
      { "kind": "npc", "at": [20, 19], "label": "门卫 / 拉·马尼", "npc": [1, 17], "lp": "b" },
      { "kind": "npc", "at": [38, 20], "label": "可丽饼店 / 观众（夜）", "npc": [14, 11], "lp": "b" },
      { "kind": "npc", "at": [18, 8], "label": "多尔西妮娅", "npc": [16], "lp": "b", "note": "完成支线「保镖贝萝妮卡的后续」后出现在大剧场。" },
      { "kind": "inn", "at": [80, 47], "label": "旅店", "lp": "b" },
      { "kind": "npc", "at": [86, 40], "label": "家庭教师", "npc": [2], "lp": "r" },
      { "kind": "hidden", "at": [74, 45], "tr": [8], "npc": [10], "label": "精灵曲剑（旅店门外）", "lp": "t", "note": "从旅店外的青年（夜）处探听/收买情报后出现。" },
      { "kind": "npc", "at": [68, 47], "label": "贝萝妮卡", "npc": [15], "lp": "b" },
      { "kind": "npc", "at": [56, 46], "label": "三人组", "npc": [4], "lp": "t" },
      { "kind": "chest", "at": [55, 64], "tr": [0], "lp": "r", "note": "下水道入口右侧的梯子爬上屋顶。" },
      { "kind": "save", "at": [30, 58], "label": "后街存档点", "lp": "b" },
      { "kind": "npc", "at": [36, 58], "label": "妓女", "npc": [6], "lp": "t" },
      { "kind": "npc", "at": [29, 64], "label": "后街守卫", "npc": [7], "lp": "r" },
      { "kind": "chest", "at": [29, 70], "tr": [3], "npc": [9], "lp": "r", "note": "守卫把守的妓院内，先让守卫昏厥（如索洛奈夜间「偷袭」）。" },
      { "kind": "tavern", "at": [17, 55], "label": "蒙特雷恩酒馆", "npc": [8], "lp": "t" },
      { "kind": "chest", "at": [8, 50], "tr": [2], "lp": "t", "note": "酒馆左侧小巷，墓地上方尽头。" },
      { "kind": "hidden", "at": [14, 63], "tr": [11], "label": "隐藏道具（后街）", "lp": "b", "note": "尖锋匕首、狙击耳环、扩散剂、睡眠治疗药草，情报分别来自墓地少年、妓院附近女性（夜）、花贩、中央高楼老人。" },
      { "kind": "ship", "at": [6, 44], "label": "码头（乘船）", "lp": "t" },
      { "kind": "chest", "at": [33, 36], "tr": [4], "lp": "b", "note": "从游戏厅大门左侧码头乘船，绕到游戏厅背后（东侧）上岸。" },
      { "kind": "hidden", "at": [14, 34], "tr": [12], "npc": [12, 18], "label": "客人 / 荷官", "lp": "t", "note": "游戏厅内隐藏道具（还魂橄榄、火之精灵石、SP李子）情报来自客人（夜）与总管。" },
      { "kind": "danger", "at": [24, 37], "label": "金库看守", "lp": "b" },
      { "kind": "chest_red", "at": [28, 31], "tr": [5, 6, 7], "label": "金库（3箱）", "lp": "t", "note": "禁忌短剑、物理腰带、40000叶，需先让金库看守昏厥。" }
    ]
  },
  "underground_waterway": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "小型下水道：剧情恢复操作后先向右走到尽头拿守护戒指，再折回向左、向下的岔路拿 HP 葡萄；正路在西侧爬梯子上到看守背后完成「偷袭」，北侧出口回到新德尔斯塔。南侧深处的上锁之门第4章才能打开，通往废弃街道。",
    "zones": [
      { "kind": "water", "rect": [4, 30, 92, 6] },
      { "kind": "room", "rect": [36, 36, 30, 12], "label": "开场地点" },
      { "kind": "room", "rect": [6, 8, 44, 18], "label": "上层通道" },
      { "kind": "room", "rect": [24, 50, 20, 16] },
      { "kind": "room", "rect": [64, 50, 18, 18], "label": "深处" },
      { "kind": "wall", "rect": [66, 60, 14, 2] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 42], [30, 42], [20, 40]] },
      { "kind": "minor", "pts": [[50, 42], [72, 42], [90, 44]], "label": "先向右走到尽头" },
      { "kind": "minor", "pts": [[30, 42], [30, 54], [34, 62]], "label": "往左后向下的岔路" },
      { "kind": "bridge", "pts": [[20, 40], [16, 30]] },
      { "kind": "ladder", "pts": [[16, 30], [14, 22]], "label": "爬梯子绕到看守背后" },
      { "kind": "main", "pts": [[14, 22], [24, 16], [32, 16], [44, 12], [50, 2]] },
      { "kind": "minor", "pts": [[72, 42], [72, 54], [72, 62], [72, 68]], "label": "深处上锁的门（第4章）" }
    ],
    "pois": [
      { "kind": "landmark", "at": [50, 42], "label": "开场（被追兵包围）", "lp": "b" },
      { "kind": "chest", "at": [90, 44], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [34, 62], "tr": [1], "lp": "r" },
      { "kind": "stairs", "at": [14, 24], "label": "梯子", "lp": "l" },
      { "kind": "danger", "at": [32, 16], "label": "看守（偷袭教学）", "lp": "b" },
      { "kind": "danger", "at": [44, 12], "label": "出口埋伏", "lp": "l" },
      { "kind": "exit", "at": [50, 2], "to": "new_delsta", "label": "往新德尔斯塔", "lp": "r" },
      { "kind": "gate", "at": [72, 61], "label": "上锁的门", "lp": "r", "note": "索洛奈第4章用父母处得到的钥匙打开。" },
      { "kind": "exit", "at": [72, 68], "to": "deserted_highroad", "label": "往废弃街道", "lp": "r" }
    ]
  },
  "diamante_estate": {
    "theme": "manor",
    "size": [100, 70],
    "note": "从南侧正门偷袭守卫进入：1F 大厅主楼梯左侧有木箱，上楼后左侧房间是暗之精灵石，右侧走廊经倒地守卫处走下短楼梯拿红箱，再向右到存档点与行商，继续向右到尽头有 SP 李子；Boss 皮尔洛在北侧大厅。",
    "zones": [
      { "kind": "garden", "rect": [30, 56, 40, 12], "label": "前庭" },
      { "kind": "room", "rect": [18, 32, 64, 20], "label": "1F 大厅" },
      { "kind": "room", "rect": [4, 8, 92, 20], "label": "2F" },
      { "kind": "room", "rect": [4, 9, 16, 10] },
      { "kind": "building", "rect": [40, 1, 20, 7], "label": "Boss 房" }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 58], [50, 46]] },
      { "kind": "minor", "pts": [[50, 46], [40, 46], [34, 44]], "label": "大厅主楼梯左侧" },
      { "kind": "stairs", "pts": [[50, 46], [50, 34], [50, 24]], "label": "大厅主楼梯" },
      { "kind": "minor", "pts": [[50, 24], [30, 20], [16, 16], [10, 14]], "label": "上楼后左侧房间" },
      { "kind": "main", "pts": [[50, 24], [66, 20], [74, 18], [82, 14]] },
      { "kind": "stairs", "pts": [[74, 18], [78, 26], [80, 28]], "label": "走下短楼梯" },
      { "kind": "minor", "pts": [[82, 14], [94, 12]], "label": "继续向右到尽头" },
      { "kind": "minor", "pts": [[82, 14], [88, 19]] },
      { "kind": "main", "pts": [[82, 14], [70, 10], [56, 6], [50, 5]], "label": "往 Boss 房" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "new_delsta", "label": "正门", "lp": "r" },
      { "kind": "danger", "at": [50, 60], "label": "门口守卫（偷袭）", "lp": "r" },
      { "kind": "chest", "at": [34, 44], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [10, 14], "tr": [1], "lp": "b" },
      { "kind": "landmark", "at": [74, 18], "label": "倒地守卫", "lp": "t" },
      { "kind": "chest_red", "at": [80, 28], "tr": [2], "lp": "l" },
      { "kind": "save", "at": [82, 14], "label": "存档点", "lp": "t" },
      { "kind": "peddler", "at": [88, 19], "label": "行商", "lp": "r" },
      { "kind": "chest", "at": [94, 12], "tr": [3], "lp": "l" },
      { "kind": "boss", "at": [50, 5], "label": "皮尔洛", "lp": "l" }
    ]
  },
  "theater_backstage": {
    "theme": "manor",
    "size": [100, 70],
    "note": "左半为前台三层：进门一直向左不上楼梯到最左侧拿果酱，楼梯上到 3F 后向左的房间有辟邪符；3F 向右进入右侧后台，先不下楼去右侧房间拿演出服，下楼后的房间有猎鹰匕首，存档点旁梯子上有 HP 葡萄，最深处是拉·马尼。各层的实际连接以游戏为准。",
    "zones": [
      { "kind": "room", "rect": [2, 50, 50, 16], "label": "1F 前厅" },
      { "kind": "room", "rect": [2, 30, 40, 16], "label": "2F" },
      { "kind": "room", "rect": [2, 4, 44, 22], "label": "3F" },
      { "kind": "room", "rect": [52, 4, 46, 26], "label": "后台 上层" },
      { "kind": "room", "rect": [52, 36, 46, 30], "label": "后台 下层" }
    ],
    "paths": [
      { "kind": "main", "pts": [[40, 68], [40, 58], [30, 58]] },
      { "kind": "minor", "pts": [[30, 58], [18, 58], [6, 58]], "label": "一直向左（不上楼梯）" },
      { "kind": "stairs", "pts": [[30, 58], [30, 40]], "label": "楼梯" },
      { "kind": "stairs", "pts": [[30, 40], [24, 36], [24, 18]], "label": "上到 3F" },
      { "kind": "minor", "pts": [[24, 18], [14, 16], [8, 12]], "label": "3F 向左的房间" },
      { "kind": "main", "pts": [[24, 18], [46, 18], [60, 18]], "label": "进入右侧后台" },
      { "kind": "minor", "pts": [[60, 18], [80, 14], [92, 12]], "label": "先不下楼，去右侧房间" },
      { "kind": "stairs", "pts": [[60, 18], [62, 34], [64, 46]], "label": "下楼" },
      { "kind": "minor", "pts": [[64, 46], [56, 56], [56, 58]], "label": "下楼后的房间" },
      { "kind": "main", "pts": [[64, 46], [76, 50]] },
      { "kind": "ladder", "pts": [[76, 50], [84, 40], [86, 38]], "label": "存档点旁的梯子" },
      { "kind": "main", "pts": [[76, 50], [88, 58], [90, 60]], "label": "往拉·马尼" }
    ],
    "pois": [
      { "kind": "exit", "at": [40, 68], "to": "new_delsta", "label": "入口（大剧场）", "lp": "r" },
      { "kind": "chest", "at": [6, 58], "tr": [0], "lp": "t" },
      { "kind": "stairs", "at": [30, 50], "label": "楼梯", "lp": "r" },
      { "kind": "chest", "at": [8, 12], "tr": [1], "lp": "b" },
      { "kind": "chest", "at": [92, 12], "tr": [2], "lp": "l" },
      { "kind": "stairs", "at": [62, 32], "label": "下楼", "lp": "r" },
      { "kind": "chest", "at": [56, 58], "tr": [3], "lp": "r" },
      { "kind": "save", "at": [76, 50], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [86, 38], "tr": [4], "lp": "l" },
      { "kind": "boss", "at": [90, 60], "label": "总管拉·马尼", "lp": "l" }
    ]
  }
});

OT2.addDetail("brightlands", {
  "eastern_nd_highroad": {
    "theme": "field",
    "size": [100, 70],
    "note": "西南接新德尔斯塔，路标处分两路：北上新德尔斯塔平原，东去西轮敦街道。北路中途向左上角的岔路有 HP 葡萄；东路中段北上是阿卡尔之家（发明家），屋外河边有 700 叶；东路尽头前向南的岔路通往右下角的铁刃。",
    "zones": [
      { "kind": "water", "poly": [[84, 0], [90, 0], [90, 26], [100, 28], [100, 34], [86, 32], [84, 28]] },
      { "kind": "building", "rect": [70, 8, 12, 8] },
      { "kind": "forest", "rect": [4, 24, 16, 14] },
      { "kind": "grass", "rect": [54, 50, 22, 14] },
      { "kind": "rock", "rect": [28, 60, 14, 8] },
      { "kind": "forest", "rect": [52, 4, 14, 12] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 66], [16, 58], [30, 48], [44, 40]] },
      { "kind": "main", "pts": [[44, 40], [42, 24], [40, 2]], "label": "往新德尔斯塔平原" },
      { "kind": "main", "pts": [[44, 40], [58, 42], [70, 40], [86, 42], [98, 42]], "label": "往西轮敦街道" },
      { "kind": "minor", "pts": [[42, 24], [24, 14], [8, 8]], "label": "通往左上角" },
      { "kind": "minor", "pts": [[70, 40], [72, 26], [76, 17]], "label": "往阿卡尔之家" },
      { "kind": "minor", "pts": [[72, 26], [80, 24], [83, 22]], "label": "屋外河边" },
      { "kind": "minor", "pts": [[86, 42], [90, 54], [94, 62]], "label": "通往右下角" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 66], "to": "new_delsta", "label": "往新德尔斯塔", "lp": "t" },
      { "kind": "exit", "at": [40, 2], "to": "nd_flats", "label": "往新德尔斯塔平原", "lp": "r" },
      { "kind": "exit", "at": [98, 42], "to": "western_cb_highroad", "label": "往西轮敦街道", "lp": "l" },
      { "kind": "landmark", "at": [44, 40], "label": "路标", "lp": "b" },
      { "kind": "chest", "at": [8, 8], "tr": [1], "lp": "r" },
      { "kind": "house", "at": [76, 17], "label": "阿卡尔之家（发明家）", "npc": [0], "lp": "l", "note": "进屋与阿卡尔对话即获得发明家职业证，并接下支线「天才发明家」。" },
      { "kind": "chest", "at": [83, 22], "tr": [2], "lp": "b" },
      { "kind": "chest", "at": [94, 62], "tr": [0], "lp": "l" },
      { "kind": "npc", "at": [20, 56], "label": "旅行者阿尔", "npc": [1], "lp": "t", "note": "仅以索洛奈开局时出现，支线「旅人的包」。" }
    ]
  },
  "nd_flats": {
    "theme": "field",
    "size": [100, 70],
    "note": "南接东新德尔斯塔街道，存档点向北到中央路口分出西（港口）、东（无人村）两路；继续北上后岔路左转进入阴影处是被遗弃的水路所在的山洞，山洞上方有鸢形盾；北口外是夜间黑市，旁边爬梯子上残垣断壁有熟睡草，再往北进入冬之地。",
    "zones": [
      { "kind": "rock", "rect": [2, 6, 14, 12], "label": "山洞" },
      { "kind": "rock", "rect": [58, 2, 14, 8], "label": "残垣断壁" },
      { "kind": "plaza", "circle": [44, 14, 4] },
      { "kind": "grass", "rect": [60, 42, 30, 14] },
      { "kind": "field", "rect": [8, 46, 30, 16] },
      { "kind": "forest", "rect": [74, 4, 20, 14] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 58], [48, 40], [48, 28], [50, 16], [52, 2]] },
      { "kind": "main", "pts": [[48, 40], [26, 42], [12, 40], [2, 40]], "label": "往港口" },
      { "kind": "main", "pts": [[48, 40], [70, 36], [86, 34], [98, 34]], "label": "往无人村" },
      { "kind": "minor", "pts": [[48, 28], [32, 24], [20, 16], [4, 12]], "label": "北上后岔路左转（阴影处）" },
      { "kind": "minor", "pts": [[20, 16], [16, 8], [10, 4]], "label": "山洞上方" },
      { "kind": "ladder", "pts": [[50, 16], [58, 12], [65, 7]], "label": "爬梯子上残垣" },
      { "kind": "minor", "pts": [[70, 36], [80, 50], [90, 60]], "label": "右下角路边" }
    ],
    "pois": [
      { "kind": "exit", "at": [52, 2], "to": "winterlands/southern_cape_cold_snows", "label": "往南科尔德凯普雪道", "lp": "l" },
      { "kind": "exit", "at": [50, 68], "to": "eastern_nd_highroad", "label": "往东新德尔斯塔街道", "lp": "r" },
      { "kind": "exit", "at": [2, 40], "to": "nd_harbor", "label": "往新德尔斯塔港", "lp": "t" },
      { "kind": "exit", "at": [4, 12], "to": "abandoned_waterway", "label": "被遗弃的水路", "lp": "b" },
      { "kind": "exit", "at": [98, 34], "to": "abandoned_village", "label": "往无人村", "lp": "l" },
      { "kind": "save", "at": [50, 58], "label": "存档点", "lp": "r" },
      { "kind": "npc", "at": [49, 48], "label": "商人（白天）", "npc": [2], "lp": "r" },
      { "kind": "shop", "at": [47, 16], "label": "黑市（仅夜晚）", "npc": [0, 1], "lp": "l", "note": "商品随机，切换昼夜可刷新。" },
      { "kind": "chest", "at": [10, 4], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [65, 7], "tr": [1], "lp": "b" },
      { "kind": "chest", "at": [90, 60], "tr": [2], "lp": "l" }
    ]
  },
  "nd_harbor": {
    "theme": "port",
    "size": [100, 70],
    "note": "东侧接新德尔斯塔平原，沿路向西到港口广场与栈桥，码头渡船付费出航分隔之海；存档点上方的树前有安眠草，广场向西南走到港口左下角有毒瓶。",
    "zones": [
      { "kind": "water", "poly": [[0, 0], [50, 0], [40, 14], [26, 22], [14, 40], [0, 46]] },
      { "kind": "deck", "rect": [16, 18, 12, 6], "label": "栈桥" },
      { "kind": "forest", "rect": [54, 20, 12, 8] },
      { "kind": "house", "rect": [70, 47, 12, 7] },
      { "kind": "grass", "rect": [78, 10, 18, 14] },
      { "kind": "plaza", "circle": [40, 38, 5] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 40], [78, 40], [60, 40], [40, 38], [28, 30]] },
      { "kind": "bridge", "pts": [[28, 30], [18, 20]], "label": "栈桥" },
      { "kind": "boat", "pts": [[18, 20], [8, 8], [2, 2]], "label": "出航（分隔之海）" },
      { "kind": "minor", "pts": [[60, 40], [60, 30]], "label": "存档点上方" },
      { "kind": "minor", "pts": [[40, 38], [30, 52], [14, 62]], "label": "往港口左下角" },
      { "kind": "minor", "pts": [[78, 40], [76, 46]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 40], "to": "nd_flats", "label": "往新德尔斯塔平原", "lp": "l" },
      { "kind": "ship", "at": [18, 20], "to": "sundering_sea/anchorage_new_delsta", "label": "渡船（付费出航）", "lp": "r" },
      { "kind": "save", "at": [60, 40], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [60, 29], "tr": [0], "lp": "r", "note": "存档点上方的树前。" },
      { "kind": "chest", "at": [14, 62], "tr": [1], "lp": "r" },
      { "kind": "landmark", "at": [40, 38], "label": "港口广场", "lp": "b" },
      { "kind": "house", "at": [76, 47], "label": "民宅", "lp": "r" }
    ]
  },
  "abandoned_waterway": {
    "theme": "ruins",
    "size": [120, 70],
    "note": "从右下（东南）入口向左逐层深入：入口北侧斜坡有蠕动之根；中段走高架水道（万病药草、西端蠕动之根），下降一层后西侧下方有 8000 叶；最底层从西码头渡水到中央码头，东侧瀑布后藏着剧毒耐性石，北侧存档点后是 Boss 蠢动的大花，击败后存档点西侧宝箱开出冰霜之斧。",
    "zones": [
      { "kind": "room", "rect": [84, 4, 34, 64], "label": "入口" },
      { "kind": "room", "rect": [44, 4, 38, 64], "label": "中段" },
      { "kind": "room", "rect": [2, 4, 40, 64], "label": "最底层" },
      { "kind": "water", "poly": [[4, 24], [30, 26], [34, 40], [20, 44], [4, 40]] },
      { "kind": "water", "rect": [32, 12, 6, 12] },
      { "kind": "water", "rect": [54, 28, 22, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[116, 66], [104, 56], [100, 40]] },
      { "kind": "minor", "pts": [[100, 40], [104, 24], [108, 14]], "label": "入口北侧斜坡" },
      { "kind": "main", "pts": [[100, 40], [86, 36], [76, 30]] },
      { "kind": "bridge", "pts": [[76, 30], [64, 26], [50, 24]], "label": "高架水道" },
      { "kind": "minor", "pts": [[50, 24], [48, 14]], "label": "西侧高架水道" },
      { "kind": "stairs", "pts": [[50, 24], [52, 40], [56, 48]], "label": "下降一层" },
      { "kind": "minor", "pts": [[56, 48], [48, 56], [46, 62]], "label": "西侧下方" },
      { "kind": "main", "pts": [[56, 48], [44, 46], [38, 44]] },
      { "kind": "stairs", "pts": [[38, 44], [30, 46], [24, 48]], "label": "下到最底层" },
      { "kind": "main", "pts": [[24, 48], [10, 46]], "label": "往西码头" },
      { "kind": "minor", "pts": [[10, 46], [6, 52]] },
      { "kind": "boat", "pts": [[10, 46], [8, 42], [14, 34], [22, 30]], "label": "渡水" },
      { "kind": "hidden", "pts": [[22, 30], [30, 24], [35, 18]], "label": "中央码头东侧瀑布后" },
      { "kind": "main", "pts": [[22, 30], [18, 18], [20, 8]], "label": "往 Boss" },
      { "kind": "minor", "pts": [[18, 18], [8, 16]], "label": "存档点西侧" }
    ],
    "pois": [
      { "kind": "exit", "at": [116, 66], "to": "nd_flats", "label": "入口", "lp": "l" },
      { "kind": "chest", "at": [108, 14], "tr": [0], "label": "蠕动之根（入口北侧斜坡）", "lp": "l" },
      { "kind": "chest", "at": [64, 26], "tr": [1], "lp": "t" },
      { "kind": "chest", "at": [48, 14], "tr": [0], "label": "蠕动之根（西侧高架水道）", "lp": "r" },
      { "kind": "stairs", "at": [52, 40], "label": "下降一层", "lp": "r" },
      { "kind": "chest", "at": [46, 62], "tr": [2], "lp": "r" },
      { "kind": "stairs", "at": [30, 46], "label": "下到最底层", "lp": "b" },
      { "kind": "ship", "at": [8, 42], "label": "西码头", "lp": "r" },
      { "kind": "chest", "at": [6, 52], "tr": [0], "label": "蠕动之根（西码头附近）", "lp": "r" },
      { "kind": "ship", "at": [22, 30], "label": "中央码头", "lp": "r" },
      { "kind": "chest", "at": [35, 18], "tr": [3], "lp": "b" },
      { "kind": "save", "at": [18, 18], "label": "存档点", "lp": "r" },
      { "kind": "chest", "at": [8, 16], "tr": [4], "lp": "b", "note": "击败 Boss 后才能打开。" },
      { "kind": "boss", "at": [20, 8], "label": "蠢动的大花", "lp": "r" }
    ]
  },
  "abandoned_village": {
    "theme": "village",
    "size": [100, 70],
    "note": "荒废的希尔里克：西口进村即是存档点（玛莱娅在右侧），村口东侧是酒馆，主街向东经旅店到中央广场，广场右侧屋内有隐藏扩散剂、东侧放梯凳的屋子住着有家谱的村民，南侧是马厩与杂货店；村子最左侧屋内有守护耳环，东北出口上山。",
    "zones": [
      { "kind": "cliff", "poly": [[20, 0], [84, 0], [80, 12], [60, 18], [40, 16], [26, 10]] },
      { "kind": "building", "rect": [4, 18, 10, 8], "label": "最左侧民宅" },
      { "kind": "building", "rect": [24, 30, 10, 7] },
      { "kind": "building", "rect": [40, 26, 10, 7] },
      { "kind": "plaza", "circle": [50, 40, 6], "label": "广场" },
      { "kind": "house", "rect": [58, 28, 10, 7] },
      { "kind": "building", "rect": [52, 49, 10, 6] },
      { "kind": "house", "rect": [70, 42, 10, 7] },
      { "kind": "building", "rect": [34, 52, 14, 8], "label": "马厩" },
      { "kind": "farm", "rect": [6, 52, 20, 12], "label": "荒田" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 44], [14, 44], [28, 43], [44, 41], [50, 40]] },
      { "kind": "main", "pts": [[50, 40], [66, 40], [80, 30], [88, 18], [96, 4]], "label": "往利菲亚山" },
      { "kind": "minor", "pts": [[12, 44], [10, 30], [9, 27]], "label": "往最左侧民宅" },
      { "kind": "minor", "pts": [[28, 43], [28, 38]] },
      { "kind": "minor", "pts": [[44, 41], [44, 34]] },
      { "kind": "minor", "pts": [[56, 40], [62, 36]], "label": "广场右侧屋" },
      { "kind": "minor", "pts": [[52, 40], [56, 48]] },
      { "kind": "minor", "pts": [[66, 40], [75, 41]], "label": "东侧放梯凳的屋子" },
      { "kind": "minor", "pts": [[40, 42], [41, 52]], "label": "往马厩" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 44], "to": "nd_flats", "label": "往新德尔斯塔平原", "lp": "t" },
      { "kind": "exit", "at": [96, 4], "to": "path_to_liphia", "label": "往利菲亚山的路", "lp": "l" },
      { "kind": "save", "at": [16, 44], "label": "存档点", "lp": "b" },
      { "kind": "npc", "at": [22, 45], "label": "玛莱娅", "lp": "t", "note": "卡丝蒂第3章：白天对她「打听」进入回忆，之后到广场再次打听。" },
      { "kind": "tavern", "at": [28, 37], "label": "酒馆", "lp": "t", "note": "酒馆老板处可手动开始卡丝蒂第3章。" },
      { "kind": "chest", "at": [9, 27], "tr": [0], "lp": "r" },
      { "kind": "inn", "at": [44, 33], "label": "旅店", "lp": "t" },
      { "kind": "npc", "at": [36, 42], "label": "旅行者（白天）", "npc": [1], "lp": "b" },
      { "kind": "hidden", "at": [62, 35], "tr": [1], "lp": "t", "note": "广场右侧屋内，情报来自村民。" },
      { "kind": "shop", "at": [56, 48], "label": "杂货店", "lp": "b" },
      { "kind": "npc", "at": [75, 41], "label": "村民（家谱）", "npc": [0], "lp": "r" }
    ]
  },
  "path_to_liphia": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "无人村东北的一条上山小路，没有宝箱；一路上坡向东，尽头山洞门口有存档点，进洞即利菲亚山。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [100, 0], [100, 20], [70, 24], [40, 30], [0, 34]] },
      { "kind": "cliff", "poly": [[40, 70], [60, 56], [100, 50], [100, 70]] },
      { "kind": "rock", "rect": [86, 22, 12, 14], "label": "山洞口" },
      { "kind": "grass", "rect": [6, 46, 18, 12] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 66], [14, 58], [26, 54], [34, 46]] },
      { "kind": "stairs", "pts": [[34, 46], [42, 40], [50, 40]], "label": "上坡" },
      { "kind": "main", "pts": [[50, 40], [62, 38], [72, 34]] },
      { "kind": "main", "pts": [[72, 34], [84, 32], [90, 30]] },
      { "kind": "main", "pts": [[90, 30], [98, 30]], "label": "进入山洞" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 66], "to": "abandoned_village", "label": "往无人村", "lp": "t" },
      { "kind": "exit", "at": [98, 30], "to": "mount_liphia", "label": "利菲亚山", "lp": "l" },
      { "kind": "save", "at": [90, 31], "label": "山洞门口存档点", "lp": "b" },
      { "kind": "landmark", "at": [34, 46], "label": "坡下", "lp": "l" },
      { "kind": "landmark", "at": [50, 40], "label": "坡顶", "lp": "t" },
      { "kind": "danger", "at": [62, 38], "label": "危险度30", "lp": "b" }
    ]
  },
  "mount_liphia": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "西侧进洞不远处有扩散剂；过木桥后从下方楼梯下去：乘船到对岸拿还魂橄榄（特大），或下楼后向北走（桥的下方）到尽头拿元素守护者；正路上行至分岔：乘船向北后爬梯子上崖有石榴，向右沿发光的小路走到洞外尽头是 12500 叶，继续上行山顶前最后一个宝箱是全体 SP 李子。洞内无存档点（存档点在洞口外的利菲亚山道）、无 Boss。",
    "zones": [
      { "kind": "rock", "rect": [2, 50, 24, 18], "label": "山洞" },
      { "kind": "water", "poly": [[44, 56], [82, 54], [84, 68], [44, 68]] },
      { "kind": "pit", "poly": [[30, 50], [42, 48], [42, 54], [30, 56]] },
      { "kind": "cliff", "poly": [[0, 0], [24, 0], [20, 12], [0, 16]] },
      { "kind": "cliff", "poly": [[64, 40], [100, 44], [100, 52], [70, 50]] },
      { "kind": "snow", "rect": [76, 2, 22, 12], "label": "山顶" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 60], [12, 58], [22, 56], [30, 48]] },
      { "kind": "minor", "pts": [[12, 58], [18, 64]], "label": "进洞不远处" },
      { "kind": "bridge", "pts": [[30, 48], [42, 46]], "label": "木桥" },
      { "kind": "stairs", "pts": [[42, 46], [46, 52], [48, 56]], "label": "从下方楼梯下去" },
      { "kind": "boat", "pts": [[48, 56], [60, 62], [70, 62]], "label": "乘船到对岸" },
      { "kind": "minor", "pts": [[70, 62], [78, 60]] },
      { "kind": "main", "pts": [[42, 46], [54, 36], [60, 30]] },
      { "kind": "ladder", "pts": [[60, 30], [56, 20], [56, 14]], "label": "最上方梯子" },
      { "kind": "minor", "pts": [[42, 46], [38, 36], [34, 24]], "label": "下楼梯后向北（桥下方）到尽头" },
      { "kind": "minor", "pts": [[60, 30], [78, 32], [94, 36]], "label": "发光的小路" },
      { "kind": "main", "pts": [[60, 30], [70, 22], [80, 14], [84, 10], [90, 6]], "label": "往山顶" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 60], "to": "path_to_liphia", "label": "洞口", "lp": "t" },
      { "kind": "chest", "at": [18, 64], "tr": [0], "lp": "r" },
      { "kind": "ship", "at": [48, 56], "label": "小船", "lp": "l" },
      { "kind": "landmark", "at": [36, 47], "label": "木桥", "lp": "t" },
      { "kind": "chest", "at": [78, 60], "tr": [1], "lp": "t" },
      { "kind": "chest", "at": [56, 13], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [34, 24], "tr": [3], "lp": "r", "note": "元素守护者：过木桥后从楼梯下去，再向北走到尽头。" },
      { "kind": "chest", "at": [94, 36], "tr": [4], "lp": "l" },
      { "kind": "chest", "at": [84, 10], "tr": [5], "lp": "b" },
      { "kind": "landmark", "at": [90, 6], "label": "山顶（紫色之雨源头）", "lp": "l" }
    ]
  }
});

OT2.addDetail("brightlands", {
  "western_cb_highroad": {
    "theme": "field",
    "size": [100, 70],
    "note": "西接东新德尔斯塔街道，主路向东依次跨过两座桥到南轮敦街道，第2座桥后向东北进入纹之地。左上角有全体 SP 李子，存档点向右的岔路向上有混乱治疗药草；第1座桥西头的中央码头可乘船：向北到右上对岸码头穿过山洞拿羽毛帽，向南穿过桥下到噬船之口。夜晚两座桥之间有微笑的女性。",
    "zones": [
      { "kind": "water", "rect": [46, 0, 8, 70] },
      { "kind": "water", "rect": [70, 0, 6, 70] },
      { "kind": "rock", "rect": [58, 2, 10, 10], "label": "山洞" },
      { "kind": "grass", "rect": [4, 50, 30, 14] },
      { "kind": "forest", "rect": [18, 4, 18, 12] },
      { "kind": "grass", "rect": [80, 50, 18, 14] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 42], [14, 42], [24, 42], [38, 41], [44, 40]] },
      { "kind": "bridge", "pts": [[44, 40], [56, 40]], "label": "第1座桥" },
      { "kind": "main", "pts": [[56, 40], [66, 40], [70, 40]] },
      { "kind": "bridge", "pts": [[70, 40], [76, 40]], "label": "第2座桥" },
      { "kind": "main", "pts": [[76, 40], [82, 41], [90, 42], [98, 44]] },
      { "kind": "main", "pts": [[82, 41], [88, 24], [96, 4]], "label": "往纹之地" },
      { "kind": "minor", "pts": [[14, 42], [10, 24], [8, 8]], "label": "往左上角" },
      { "kind": "minor", "pts": [[38, 41], [38, 28], [36, 20]], "label": "存档点向右后岔路向上" },
      { "kind": "minor", "pts": [[44, 40], [45, 33]], "label": "往中央码头" },
      { "kind": "boat", "pts": [[45, 33], [50, 22], [55, 14]], "label": "乘船往右上对岸码头" },
      { "kind": "minor", "pts": [[55, 14], [62, 10], [66, 8]], "label": "穿过山洞" },
      { "kind": "boat", "pts": [[45, 33], [50, 40], [50, 56], [50, 68]], "label": "南下穿过桥下" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 42], "to": "eastern_nd_highroad", "label": "往东新德尔斯塔街道", "lp": "t" },
      { "kind": "exit", "at": [98, 44], "to": "southern_cb_highroad", "label": "往南轮敦街道", "lp": "l" },
      { "kind": "exit", "at": [96, 4], "to": "crestlands/eastern_flamechurch_pass", "label": "往东弗拉姆教堂山道", "lp": "l" },
      { "kind": "exit", "at": [50, 68], "to": "ships_maw", "label": "往噬船之口（乘船）", "lp": "r" },
      { "kind": "save", "at": [24, 42], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [8, 8], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [36, 20], "tr": [2], "lp": "l" },
      { "kind": "ship", "at": [45, 33], "label": "中央码头", "lp": "l" },
      { "kind": "ship", "at": [55, 14], "label": "对岸码头", "lp": "b" },
      { "kind": "chest", "at": [66, 8], "tr": [1], "lp": "b" },
      { "kind": "npc", "at": [63, 42], "label": "微笑的女性（夜）", "npc": [0], "lp": "b" }
    ]
  },
  "ships_maw": {
    "theme": "cave",
    "size": [100, 70],
    "note": "乘船从北侧洞口进入：进入后立刻向左的西侧码头有金色宝箱（SP 李子（大）），正路下到存档点；存档点旁爬梯子上去右侧是红箱 13500 叶，向左渡过水池进入老钓鱼迷的小屋；回存档点乘船向东：沿画面下缘的小岛有金色宝箱静寂之盾，尽头是金色宝箱石英杖，并在巨大鱼影处使用鱼饵挑战德鲁斯塔鱼。",
    "zones": [
      { "kind": "water", "rect": [46, 0, 8, 8] },
      { "kind": "room", "rect": [6, 4, 88, 22], "label": "一层" },
      { "kind": "rock", "rect": [26, 28, 22, 6] },
      { "kind": "water", "rect": [14, 30, 10, 8] },
      { "kind": "building", "rect": [2, 28, 10, 8], "label": "小屋" },
      { "kind": "water", "poly": [[24, 48], [96, 40], [98, 68], [24, 68]] }
    ],
    "paths": [
      { "kind": "boat", "pts": [[50, 2], [50, 9]], "label": "乘船进入" },
      { "kind": "main", "pts": [[50, 9], [58, 18], [54, 30], [40, 40], [30, 44]] },
      { "kind": "minor", "pts": [[50, 9], [34, 12], [18, 12]], "label": "一层向左" },
      { "kind": "ladder", "pts": [[30, 44], [28, 34]], "label": "存档点旁梯子" },
      { "kind": "minor", "pts": [[28, 34], [40, 32], [44, 30]], "label": "上去后右侧" },
      { "kind": "boat", "pts": [[28, 34], [18, 34], [12, 34]], "label": "渡过水池" },
      { "kind": "minor", "pts": [[30, 44], [34, 50]] },
      { "kind": "boat", "pts": [[34, 50], [56, 54], [76, 52], [86, 46]], "label": "存档点乘船向东" },
      { "kind": "boat", "pts": [[56, 54], [68, 60]], "label": "巨大鱼影" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 2], "to": "western_cb_highroad", "label": "洞口（乘船）", "lp": "r" },
      { "kind": "ship", "at": [26, 12], "label": "西侧码头", "lp": "t" },
      { "kind": "chest", "at": [18, 12], "tr": [3], "lp": "b", "note": "金色宝箱：进入后立刻向左，西侧码头旁（醒神李子（大））。" },
      { "kind": "save", "at": [30, 44], "label": "存档点", "lp": "l" },
      { "kind": "chest_red", "at": [44, 30], "tr": [2], "lp": "r" },
      { "kind": "npc", "at": [10, 34], "label": "老钓鱼迷", "npc": [0], "lp": "b", "note": "偷窃/购买/强夺「特制的鱼饵」。" },
      { "kind": "ship", "at": [34, 50], "label": "码头", "lp": "b" },
      { "kind": "chest", "at": [88, 44], "tr": [1], "lp": "l", "note": "金色宝箱（石英杖）。" },
      { "kind": "chest", "at": [80, 50], "tr": [0], "lp": "b", "note": "金色宝箱（静寂之盾）：存档点前第三个码头乘船向东，沿画面下缘的小岛上。" },
      { "kind": "boss", "at": [68, 60], "label": "德鲁斯塔鱼（鱼影）", "lp": "r", "note": "在鱼影处使用特制的鱼饵触发战斗。" }
    ]
  },
  "southern_cb_highroad": {
    "theme": "field",
    "size": [100, 70],
    "note": "西侧入口进来，第一个岔路向右上楼梯有光之精灵石；主路经存档点所在的桥向右上方直达轮敦。桥北向左的长路尽头是码头（旁有石榴）：乘船向左可拿 6300 叶，向北进峡谷右侧小洞（地图左上角）有幻象之弓。存档点右侧码头下水，向东南到瀑布前的粉色莲花处向南，即盗公子祭坛。",
    "zones": [
      { "kind": "water", "poly": [[10, 0], [22, 0], [24, 26], [34, 34], [60, 40], [80, 44], [92, 52], [100, 54], [100, 62], [90, 60], [78, 50], [60, 46], [32, 42], [4, 42], [2, 34], [12, 30], [12, 24]] },
      { "kind": "cliff", "poly": [[24, 0], [70, 0], [62, 14], [40, 20], [26, 12]] },
      { "kind": "rock", "rect": [24, 4, 10, 8], "label": "小洞" },
      { "kind": "cliff", "poly": [[0, 0], [10, 0], [12, 24], [0, 28]] },
      { "kind": "grass", "rect": [62, 56, 22, 12] },
      { "kind": "grass", "rect": [8, 60, 26, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 58], [16, 56], [40, 58], [58, 50]] },
      { "kind": "stairs", "pts": [[16, 56], [24, 50], [30, 50]], "label": "入口第一个岔路向右上楼梯" },
      { "kind": "bridge", "pts": [[58, 50], [58, 36]], "label": "存档点所在的桥" },
      { "kind": "main", "pts": [[58, 36], [72, 20], [80, 2]], "label": "往轮敦（右上方）" },
      { "kind": "minor", "pts": [[58, 36], [44, 32], [34, 30]], "label": "存档点向左的长路" },
      { "kind": "minor", "pts": [[34, 30], [30, 28]] },
      { "kind": "minor", "pts": [[34, 30], [33, 36]] },
      { "kind": "boat", "pts": [[33, 36], [18, 38], [6, 40]], "label": "乘船向左" },
      { "kind": "minor", "pts": [[6, 40], [6, 45]] },
      { "kind": "boat", "pts": [[33, 36], [20, 30], [16, 14], [18, 6]], "label": "乘船向北进入峡谷" },
      { "kind": "minor", "pts": [[18, 6], [28, 8]], "label": "峡谷右侧小洞" },
      { "kind": "minor", "pts": [[58, 50], [64, 45]], "label": "存档点右侧码头" },
      { "kind": "boat", "pts": [[64, 45], [80, 49], [86, 53], [90, 58], [92, 62]], "label": "下水向东南" },
      { "kind": "hidden", "pts": [[92, 62], [98, 66]], "label": "粉色莲花处向南" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 58], "to": "western_cb_highroad", "label": "入口（往西轮敦街道）", "lp": "t" },
      { "kind": "exit", "at": [80, 2], "to": "clockbank", "label": "往轮敦", "lp": "r" },
      { "kind": "exit", "at": [98, 66], "to": "altar_thief", "label": "盗公子祭坛", "lp": "l", "dir": "东" },
      { "kind": "chest", "at": [30, 50], "tr": [0], "lp": "r" },
      { "kind": "save", "at": [58, 43], "label": "存档点（桥上）", "lp": "r" },
      { "kind": "ship", "at": [33, 36], "label": "码头", "lp": "b" },
      { "kind": "chest", "at": [30, 28], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [6, 45], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [28, 8], "tr": [3], "lp": "r" },
      { "kind": "ship", "at": [64, 45], "label": "右侧码头", "lp": "b" },
      { "kind": "landmark", "at": [86, 53], "label": "粉色莲花", "lp": "t" },
      { "kind": "landmark", "at": [94, 60], "label": "瀑布", "lp": "l" }
    ]
  },
  "altar_thief": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "从南轮敦街道东南水路乘船进入，上岸后穿过洞窟通道登上石阶，一本道直达盗公子艾贝尔像；索洛奈在队时调查可习得 EX 技能「夜之帷幕」。无宝箱、无守护者。",
    "zones": [
      { "kind": "water", "rect": [0, 32, 18, 16] },
      { "kind": "room", "rect": [20, 30, 32, 18], "label": "洞窟通道" },
      { "kind": "room", "rect": [62, 8, 34, 30], "label": "祭坛" },
      { "kind": "cliff", "poly": [[0, 0], [60, 0], [50, 22], [20, 26], [0, 28]] },
      { "kind": "cliff", "poly": [[0, 52], [60, 50], [100, 46], [100, 70], [0, 70]] }
    ],
    "paths": [
      { "kind": "boat", "pts": [[2, 40], [14, 40]], "label": "乘船进入" },
      { "kind": "main", "pts": [[14, 40], [30, 40], [44, 36]] },
      { "kind": "stairs", "pts": [[44, 36], [54, 30], [62, 28]], "label": "石阶" },
      { "kind": "main", "pts": [[62, 28], [74, 26], [84, 24]] },
      { "kind": "stairs", "pts": [[84, 24], [86, 18]], "label": "祭坛台阶" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "southern_cb_highroad", "label": "水路入口", "lp": "t" },
      { "kind": "ship", "at": [14, 40], "label": "上岸处", "lp": "b" },
      { "kind": "landmark", "at": [30, 40], "label": "洞窟通道", "lp": "b" },
      { "kind": "stairs", "at": [54, 30], "label": "石阶", "lp": "t" },
      { "kind": "landmark", "at": [74, 26], "label": "火炬", "lp": "b" },
      { "kind": "shrine", "at": [86, 18], "label": "盗公子艾贝尔像", "npc": [0], "lp": "b", "note": "需索洛奈在队；习得「夜之帷幕」。" }
    ]
  }
});

OT2.addDetail("brightlands", {
  "clockbank": {
    "theme": "city",
    "size": [110, 80],
    "note": "南侧过入口大桥到喷泉广场（左侧小屋有睡眠瓶，右侧空屋有隐藏道具），入口东侧小路是道具店；主街北上，左手边是酒馆，再北上台阶进入工厂街。酒馆前路灯旁的隐藏楼梯下到码头，乘船南下→向东穿过入口大桥下→向北穿过小桥绕行，水中右侧小岛有尖帽子、最右侧岸边有 SP 李子，终点是旧钟楼（世界地图上位于轮敦西北，故画在左上，水路走法为示意）。",
    "zones": [
      { "kind": "water", "poly": [[14, 0], [22, 0], [22, 4], [100, 4], [100, 10], [22, 10], [22, 22], [14, 22]] },
      { "kind": "water", "rect": [92, 10, 8, 58] },
      { "kind": "water", "rect": [28, 60, 72, 8] },
      { "kind": "water", "rect": [28, 24, 6, 36] },
      { "kind": "building", "rect": [2, 2, 10, 12], "label": "旧钟楼" },
      { "kind": "building", "rect": [36, 24, 12, 8] },
      { "kind": "house", "rect": [38, 46, 8, 6] },
      { "kind": "house", "rect": [62, 46, 8, 6] },
      { "kind": "plaza", "circle": [54, 50, 5], "label": "喷泉广场" },
      { "kind": "building", "rect": [80, 48, 10, 6] },
      { "kind": "rock", "circle": [76, 65, 2] },
      { "kind": "house", "rect": [60, 26, 12, 8] },
      { "kind": "house", "rect": [74, 30, 10, 8] },
      { "kind": "house", "rect": [36, 12, 14, 6] },
      { "kind": "house", "rect": [62, 14, 8, 5] }
    ],
    "paths": [
      { "kind": "main", "pts": [[54, 78], [54, 70]] },
      { "kind": "bridge", "pts": [[54, 70], [54, 58]], "label": "入口大桥" },
      { "kind": "main", "pts": [[54, 58], [54, 56], [54, 50], [54, 40], [54, 34], [54, 24], [54, 20]], "smooth": false },
      { "kind": "minor", "pts": [[54, 50], [42, 49]], "label": "广场左侧小屋" },
      { "kind": "minor", "pts": [[54, 50], [66, 49]], "label": "广场右侧空屋" },
      { "kind": "minor", "pts": [[54, 56], [72, 56], [86, 56]], "label": "入口东侧小路" },
      { "kind": "minor", "pts": [[86, 56], [88, 40]] },
      { "kind": "bridge", "pts": [[88, 40], [104, 40]], "label": "小桥" },
      { "kind": "minor", "pts": [[104, 40], [104, 34]] },
      { "kind": "hidden", "pts": [[54, 34], [42, 36], [31, 36]], "label": "路灯旁的隐藏楼梯" },
      { "kind": "boat", "pts": [[31, 36], [31, 63], [54, 63], [76, 62], [95, 63], [96, 40], [96, 7], [60, 7], [24, 7], [18, 12]], "label": "乘船往旧钟楼" },
      { "kind": "minor", "pts": [[95, 63], [98, 72]], "label": "水路最右侧岸边" },
      { "kind": "stairs", "pts": [[54, 20], [70, 14], [86, 12]], "label": "北侧台阶（往工厂街）" },
      { "kind": "bridge", "pts": [[86, 12], [88, 2]] },
      { "kind": "minor", "pts": [[54, 24], [40, 18], [30, 16]], "label": "往断桥" },
      { "kind": "bridge", "pts": [[30, 16], [23, 16]], "label": "断桥" },
      { "kind": "minor", "pts": [[18, 12], [12, 14], [7, 10], [6, 3]] },
      { "kind": "ladder", "pts": [[12, 14], [6, 19]], "label": "入口旁梯子" }
    ],
    "pois": [
      { "kind": "exit", "at": [54, 78], "to": "southern_cb_highroad", "label": "入口", "lp": "r" },
      { "kind": "exit", "at": [88, 2], "to": "clockbank_industrial", "label": "往工厂街", "lp": "l", "dir": "东北" },
      { "kind": "exit", "at": [6, 3], "to": "old_clocktower", "label": "旧钟楼入口", "lp": "r", "dir": "西北" },
      { "kind": "chest", "at": [6, 19], "tr": [3], "lp": "b", "note": "旧钟楼入口旁爬梯子到上层（阳台）。" },
      { "kind": "npc", "at": [51, 56], "label": "入口的镇民", "npc": [0, 1, 7], "lp": "l", "note": "秃头老人（盗贼的宝石）、女孩、憔悴的男性（支线「可爱的凯瑟琳」）。" },
      { "kind": "chest", "at": [42, 49], "tr": [0], "lp": "l" },
      { "kind": "hidden", "at": [66, 49], "tr": [4], "label": "隐藏道具（多处）", "lp": "t", "note": "精神坚果（广场右侧空屋）等，情报分别来自广场右侧屋内少女、广场左侧警备兵、酒馆内工厂员工等。" },
      { "kind": "npc", "at": [64, 56], "label": "红发镇民", "npc": [3], "lp": "t", "note": "白天在右侧、夜晚在入口。" },
      { "kind": "save", "at": [72, 56], "label": "存档点", "lp": "b" },
      { "kind": "item", "at": [84, 55], "label": "道具店", "lp": "b" },
      { "kind": "npc", "at": [104, 34], "label": "送货员", "npc": [2], "lp": "l" },
      { "kind": "tavern", "at": [52, 29], "label": "酒馆", "npc": [4, 5], "lp": "t", "note": "二楼阳台老人有收割者之刃；夜晚可雇佣钟表匠。" },
      { "kind": "ship", "at": [31, 36], "label": "码头（往旧钟楼）", "lp": "b" },
      { "kind": "npc", "at": [30, 19], "label": "钟楼技师（断桥旁）", "npc": [6], "lp": "b" },
      { "kind": "chest", "at": [76, 65], "tr": [1], "lp": "b", "note": "乘船经过的水中小岛。" },
      { "kind": "chest", "at": [98, 72], "tr": [2], "lp": "l" }
    ]
  },
  "clockbank_industrial": {
    "theme": "city",
    "size": [100, 70],
    "note": "西南台阶上来即工厂街入口，旅店在入口附近、武具店在东侧；入口向左下楼梯穿过拱门建筑，三个木箱后的小门是盗贼公会（仅夜晚），拱门建筑左侧角落有全体 HP 葡萄。大道向北是洛克公司总部（右侧小屋有猛砍长柄刀），向西进入洛克公司工厂。",
    "zones": [
      { "kind": "building", "rect": [2, 4, 28, 20], "label": "洛克公司工厂" },
      { "kind": "building", "rect": [38, 4, 18, 10], "label": "洛克公司总部" },
      { "kind": "house", "rect": [58, 6, 7, 6] },
      { "kind": "building", "rect": [2, 30, 10, 7] },
      { "kind": "building", "rect": [8, 40, 14, 8], "label": "拱门建筑" },
      { "kind": "building", "rect": [30, 48, 12, 7] },
      { "kind": "building", "rect": [78, 36, 12, 8] },
      { "kind": "house", "rect": [54, 52, 10, 7] },
      { "kind": "house", "rect": [66, 22, 12, 8] },
      { "kind": "house", "rect": [84, 54, 10, 8] },
      { "kind": "rock", "rect": [12, 33, 5, 3] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [18, 60], [34, 58], [50, 50], [66, 44], [84, 46]], "label": "工厂街大道" },
      { "kind": "main", "pts": [[50, 50], [48, 34], [46, 18]], "label": "往总部" },
      { "kind": "main", "pts": [[48, 34], [34, 30], [20, 27], [8, 22], [2, 18]], "label": "往工厂" },
      { "kind": "minor", "pts": [[46, 18], [60, 16], [61, 11]], "label": "总部右侧小屋" },
      { "kind": "stairs", "pts": [[18, 60], [16, 52]], "label": "入口向左下楼梯" },
      { "kind": "minor", "pts": [[16, 52], [14, 44], [14, 38]], "label": "穿过拱门" },
      { "kind": "hidden", "pts": [[14, 38], [8, 34]], "label": "木箱后的小门" },
      { "kind": "minor", "pts": [[16, 52], [6, 50]], "label": "左侧角落" },
      { "kind": "minor", "pts": [[34, 58], [36, 56]] },
      { "kind": "minor", "pts": [[84, 46], [84, 44]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "clockbank", "label": "往轮敦", "lp": "t", "dir": "西南" },
      { "kind": "exit", "at": [2, 18], "to": "roque_factory", "label": "洛克公司-工厂", "lp": "b" },
      { "kind": "npc", "at": [12, 62], "label": "入口员工 / 律师（夜）", "npc": [3, 4, 6], "lp": "r" },
      { "kind": "inn", "at": [36, 56], "label": "旅店", "lp": "b" },
      { "kind": "npc", "at": [26, 56], "label": "孤单的猫", "npc": [8], "lp": "t" },
      { "kind": "stairs", "at": [16, 53], "label": "下楼梯", "lp": "l" },
      { "kind": "chest", "at": [6, 50], "tr": [0], "lp": "t" },
      { "kind": "guild", "at": [6, 33], "label": "盗贼公会（夜）", "npc": [0, 1, 2], "lp": "r", "note": "入口被三个木箱半掩，仅夜晚有人；会长给予盗贼职业证。" },
      { "kind": "landmark", "at": [13, 38], "label": "三个木箱", "lp": "r" },
      { "kind": "npc", "at": [34, 27], "label": "王族的后裔 / 恋人", "npc": [7], "lp": "r" },
      { "kind": "landmark", "at": [46, 16], "label": "总部入口", "lp": "l" },
      { "kind": "chest", "at": [61, 10], "tr": [1], "lp": "r", "note": "帕尔提提欧第2章期间（之后可进入总部）可取。" },
      { "kind": "weapon", "at": [84, 45], "label": "武具店", "npc": [5], "lp": "t" },
      { "kind": "hidden", "at": [58, 47], "tr": [2], "label": "隐藏道具（多处）", "lp": "b", "note": "暗之精灵石（特大）、破剑者、鼓鼓的钱包等，情报分别来自左下角屋外少年、武器店外男性、乞丐旁警卫兵、各处工厂员工与市民。" }
    ]
  },
  "roque_factory": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "东侧入口进入先遭遇两名警备员，1F 通道向西上楼到 2F，二层门右侧有荔枝；门后上屋顶沿路走拿 7000 叶，再下到深处与看门狗加耐特交战。繁盛的护身符需帕尔提提欧第2章通关后才能开启，位置为示意。",
    "zones": [
      { "kind": "room", "rect": [4, 46, 94, 20], "label": "1F" },
      { "kind": "room", "rect": [4, 26, 94, 16], "label": "2F" },
      { "kind": "room", "rect": [4, 2, 70, 20], "label": "屋顶" },
      { "kind": "room", "rect": [78, 2, 20, 20], "label": "深处" },
      { "kind": "room", "rect": [52, 60, 20, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 58], [80, 58], [50, 58], [20, 58]], "label": "1F 通道" },
      { "kind": "minor", "pts": [[50, 58], [50, 64], [66, 64]], "label": "上锁的房间" },
      { "kind": "stairs", "pts": [[20, 58], [14, 48], [14, 36]], "label": "上 2F" },
      { "kind": "main", "pts": [[14, 36], [40, 34], [56, 32]] },
      { "kind": "minor", "pts": [[56, 32], [64, 30]], "label": "二层门右侧" },
      { "kind": "stairs", "pts": [[56, 32], [50, 22], [44, 14]], "label": "上屋顶" },
      { "kind": "main", "pts": [[44, 14], [58, 8], [72, 10]], "label": "屋顶沿路走" },
      { "kind": "stairs", "pts": [[72, 10], [82, 12]], "label": "下到深处" },
      { "kind": "main", "pts": [[82, 12], [90, 12]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 58], "to": "clockbank_industrial", "label": "入口", "lp": "t" },
      { "kind": "danger", "at": [86, 58], "label": "警备员×2", "lp": "b" },
      { "kind": "gate", "at": [56, 64], "label": "上锁的门", "lp": "b" },
      { "kind": "chest", "at": [66, 64], "tr": [2], "lp": "r", "note": "帕尔提提欧第2章通关后才能开启。" },
      { "kind": "stairs", "at": [17, 52], "label": "楼梯", "lp": "r" },
      { "kind": "landmark", "at": [56, 32], "label": "二层门", "lp": "b" },
      { "kind": "chest", "at": [64, 30], "tr": [0], "lp": "r" },
      { "kind": "stairs", "at": [50, 22], "label": "往屋顶", "lp": "l" },
      { "kind": "chest", "at": [58, 8], "tr": [1], "lp": "t" },
      { "kind": "boss", "at": [90, 12], "label": "看门狗加耐特", "lp": "b" }
    ]
  },
  "old_clocktower": {
    "theme": "tower",
    "size": [100, 70],
    "note": "从东南码头进入，爬梯子上到大钟处，钟的左侧有火焰护符；钟右侧两段楼梯到存档点。先不爬存档点的梯子，走左侧楼梯下去再爬梯子到机关顶部，沿齿轮轴向南、穿过中央齿轮再向南到底是炽天使之枪；回存档点爬梯子到顶层挑战亚耶罗巴特。",
    "zones": [
      { "kind": "room", "rect": [54, 42, 44, 26], "label": "下层（入口 / 大钟）" },
      { "kind": "room", "rect": [58, 2, 40, 36], "label": "上层" },
      { "kind": "room", "rect": [4, 4, 46, 58], "label": "钟楼机关" },
      { "kind": "building", "rect": [64, 2, 30, 8], "label": "顶层" }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 66], [80, 62]] },
      { "kind": "ladder", "pts": [[80, 62], [80, 50]], "label": "入口梯子" },
      { "kind": "minor", "pts": [[80, 50], [70, 48], [60, 48]], "label": "钟的左侧" },
      { "kind": "stairs", "pts": [[80, 50], [90, 42], [86, 32], [80, 28]], "label": "钟右侧的两段楼梯" },
      { "kind": "ladder", "pts": [[80, 28], [80, 8]], "label": "存档点的梯子（往顶层）" },
      { "kind": "stairs", "pts": [[80, 28], [66, 32], [54, 36]], "label": "存档点左侧楼梯" },
      { "kind": "ladder", "pts": [[54, 36], [50, 24], [44, 14]], "label": "梯子到机关顶部" },
      { "kind": "bridge", "pts": [[44, 14], [44, 24]], "label": "齿轮轴（向南）" },
      { "kind": "bridge", "pts": [[44, 24], [34, 26]], "label": "穿过中央齿轮" },
      { "kind": "bridge", "pts": [[34, 26], [34, 52]], "label": "沿齿轮轴向南到底" }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 66], "to": "clockbank", "label": "入口（码头）", "lp": "l" },
      { "kind": "stairs", "at": [80, 56], "label": "梯子", "lp": "r" },
      { "kind": "landmark", "at": [70, 48], "label": "大钟", "lp": "b" },
      { "kind": "chest", "at": [60, 48], "tr": [0], "lp": "b" },
      { "kind": "save", "at": [80, 28], "label": "存档点", "lp": "r" },
      { "kind": "boss", "at": [80, 6], "label": "亚耶罗巴特", "lp": "l" },
      { "kind": "stairs", "at": [44, 14], "label": "机关顶部", "lp": "r" },
      { "kind": "landmark", "at": [38, 25], "label": "中央齿轮", "lp": "b" },
      { "kind": "chest", "at": [34, 54], "tr": [1], "lp": "r" }
    ]
  }
});

OT2.addDetail("brightlands", {
  "deserted_highroad": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "从北侧下水道上锁之门出来，上楼梯的必经之路上有还魂橄榄；看到存档点后下楼梯向左是龙之锁子甲。继续向南到缆车站（右下角有安眠草），乘缆车跨过深谷，下缆车后向下有 BP 石榴，向西即洛斯特席德。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [50, 0], [40, 14], [20, 24], [0, 28]] },
      { "kind": "pit", "poly": [[30, 50], [74, 48], [76, 70], [28, 70]] },
      { "kind": "building", "rect": [76, 46, 12, 8] },
      { "kind": "building", "rect": [14, 50, 10, 6], "label": "缆车站（下）" },
      { "kind": "rock", "rect": [86, 8, 12, 12], "label": "废墟" },
      { "kind": "rock", "rect": [40, 28, 14, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[70, 2], [72, 14]] },
      { "kind": "stairs", "pts": [[72, 14], [76, 20], [78, 26]], "label": "上楼梯（必经之路）" },
      { "kind": "main", "pts": [[78, 26], [70, 34]] },
      { "kind": "stairs", "pts": [[70, 34], [62, 42]], "label": "看到存档点后下楼梯" },
      { "kind": "minor", "pts": [[62, 42], [48, 42]], "label": "下楼梯后左侧" },
      { "kind": "main", "pts": [[70, 34], [78, 44], [82, 50]], "label": "往缆车站" },
      { "kind": "minor", "pts": [[82, 50], [88, 56], [90, 60]], "label": "缆车站右下角" },
      { "kind": "boat", "pts": [[82, 50], [54, 54], [24, 54]], "label": "缆车" },
      { "kind": "minor", "pts": [[24, 54], [22, 60], [22, 66]], "label": "下缆车后向下" },
      { "kind": "main", "pts": [[24, 54], [12, 50], [2, 50]], "label": "往洛斯特席德" }
    ],
    "pois": [
      { "kind": "exit", "at": [70, 2], "to": "underground_waterway", "label": "往下水道（上锁之门）", "lp": "r" },
      { "kind": "chest", "at": [76, 20], "tr": [3], "lp": "r" },
      { "kind": "save", "at": [70, 34], "label": "存档点", "lp": "r" },
      { "kind": "chest", "at": [48, 42], "tr": [0], "lp": "t" },
      { "kind": "danger", "at": [56, 42], "label": "凶猛的大鼠王", "lp": "b", "note": "一击可打掉七八成血，护盾仅3，优先破防。" },
      { "kind": "landmark", "at": [82, 50], "label": "缆车站", "lp": "r" },
      { "kind": "chest", "at": [90, 60], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [22, 66], "tr": [2], "lp": "r" },
      { "kind": "exit", "at": [2, 50], "to": "lostseed", "label": "往洛斯特席德", "lp": "t" }
    ]
  },
  "lostseed": {
    "theme": "town",
    "size": [100, 70],
    "note": "东侧缆车站进镇（入口有破败之器），主街向西到广场，北上经道具店直达洛斯特席德城门（古之器在城堡出口旁）；广场南侧是旅店与杂货/武具店。广场西南的小路被少女挡住，切换到夜晚再等到天明她会移开，尽头有诅咒的头盔。果酱宝箱位置为示意。",
    "zones": [
      { "kind": "building", "rect": [86, 34, 12, 10], "label": "缆车站" },
      { "kind": "plaza", "circle": [50, 40, 6], "label": "广场" },
      { "kind": "building", "rect": [30, 46, 12, 7] },
      { "kind": "building", "rect": [60, 48, 12, 7] },
      { "kind": "building", "rect": [56, 18, 10, 6] },
      { "kind": "building", "rect": [40, 2, 20, 6], "label": "城门" },
      { "kind": "house", "rect": [14, 38, 10, 7] },
      { "kind": "house", "rect": [70, 24, 10, 7] },
      { "kind": "house", "rect": [2, 62, 10, 6] },
      { "kind": "rock", "rect": [18, 14, 16, 10], "label": "废墟" },
      { "kind": "rock", "rect": [68, 58, 12, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 40], [80, 40], [56, 40], [50, 40]] },
      { "kind": "main", "pts": [[50, 40], [50, 24], [50, 10], [50, 2]], "label": "往洛斯特席德城" },
      { "kind": "minor", "pts": [[50, 40], [40, 43], [36, 45]] },
      { "kind": "minor", "pts": [[56, 40], [66, 47]] },
      { "kind": "minor", "pts": [[50, 24], [55, 24]] },
      { "kind": "minor", "pts": [[40, 43], [20, 50], [8, 60]], "label": "少女挡住的小路" },
      { "kind": "minor", "pts": [[80, 40], [82, 54], [88, 60]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 40], "to": "deserted_highroad", "label": "缆车站（往废弃街道）", "lp": "l" },
      { "kind": "npc", "at": [86, 42], "label": "破败之器", "npc": [0], "lp": "b", "note": "身上有月蚀短剑。" },
      { "kind": "inn", "at": [36, 45], "label": "旅店", "lp": "b" },
      { "kind": "shop", "at": [66, 47], "label": "杂货/武具店", "lp": "b" },
      { "kind": "item", "at": [55, 24], "label": "道具店", "lp": "r" },
      { "kind": "hidden", "at": [60, 40], "tr": [2], "label": "隐藏道具（多处）", "lp": "t", "note": "古代之杖、炫目的美术品、破布、双面之叶、苏醒药草，情报来自古之器、破碎之器等居民。" },
      { "kind": "npc", "at": [20, 50], "label": "挡路的少女", "lp": "t", "note": "切换到夜晚并等到天明后移开。" },
      { "kind": "chest", "at": [8, 60], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [88, 60], "tr": [1], "lp": "l", "note": "攻略只写「镇内宝箱」，位置为示意。" },
      { "kind": "npc", "at": [53, 8], "label": "古之器（城堡出口旁）", "npc": [1], "lp": "r" },
      { "kind": "exit", "at": [50, 2], "to": "lostseed_castle", "label": "往洛斯特席德城", "lp": "l" }
    ]
  },
  "lostseed_castle": {
    "theme": "castle",
    "size": [120, 70],
    "note": "左为下层、右为上层。下层：进城向左不远处有荔枝，三岔口向左到尽头是暗之精灵石，向上爬长梯是红箱破灭凶刃，梯子左侧隐蔽小路尽头有灵敏项链，向右到大楼梯（背后有万病药草）上到上层。上层：瓦砾附近有石榴，石榴南侧长路尽头小房间有 27500 叶，右侧木板区域右上角梯子上有完全恢复果酱，存档点最左侧有光之精灵石，存档点北侧是克洛德。",
    "zones": [
      { "kind": "room", "rect": [2, 6, 56, 62], "label": "下层" },
      { "kind": "room", "rect": [62, 4, 56, 64], "label": "上层" },
      { "kind": "rock", "rect": [82, 18, 8, 5], "label": "瓦砾" },
      { "kind": "deck", "rect": [96, 28, 20, 22], "label": "木板区域" },
      { "kind": "room", "rect": [78, 58, 12, 10] },
      { "kind": "building", "rect": [44, 30, 12, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[30, 68], [30, 58]] },
      { "kind": "minor", "pts": [[30, 58], [18, 58]], "label": "进城向左" },
      { "kind": "main", "pts": [[30, 58], [30, 40]] },
      { "kind": "minor", "pts": [[30, 40], [16, 40], [6, 40]], "label": "三岔口向左" },
      { "kind": "ladder", "pts": [[30, 40], [30, 18]], "label": "长梯" },
      { "kind": "hidden", "pts": [[30, 40], [22, 34], [10, 24]], "label": "梯子左侧隐蔽小路" },
      { "kind": "main", "pts": [[30, 40], [44, 40], [50, 36]], "label": "三岔口向右" },
      { "kind": "minor", "pts": [[44, 40], [48, 46], [52, 48]], "label": "大楼梯背后" },
      { "kind": "stairs", "pts": [[50, 36], [56, 30], [64, 28]], "label": "大楼梯（往上层）" },
      { "kind": "main", "pts": [[64, 28], [80, 30]] },
      { "kind": "minor", "pts": [[80, 30], [80, 24]], "label": "瓦砾附近" },
      { "kind": "minor", "pts": [[80, 30], [80, 50], [84, 62]], "label": "石榴南侧长路" },
      { "kind": "main", "pts": [[80, 30], [98, 36], [110, 34]], "label": "右侧木板区域" },
      { "kind": "ladder", "pts": [[110, 34], [114, 24]], "label": "右上角梯子" },
      { "kind": "main", "pts": [[80, 30], [86, 18], [90, 14]], "label": "往存档点" },
      { "kind": "minor", "pts": [[90, 14], [70, 12], [68, 12]], "label": "存档点最左侧" },
      { "kind": "main", "pts": [[90, 14], [90, 6]], "label": "存档点北侧" }
    ],
    "pois": [
      { "kind": "exit", "at": [30, 68], "to": "lostseed", "label": "城门", "lp": "r" },
      { "kind": "chest", "at": [18, 58], "tr": [0], "lp": "t" },
      { "kind": "landmark", "at": [30, 40], "label": "三岔口", "lp": "b" },
      { "kind": "chest", "at": [6, 40], "tr": [1], "lp": "t" },
      { "kind": "chest_red", "at": [30, 18], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [10, 24], "tr": [3], "lp": "r" },
      { "kind": "stairs", "at": [50, 36], "label": "大楼梯", "lp": "t" },
      { "kind": "chest", "at": [52, 48], "tr": [4], "lp": "b" },
      { "kind": "chest", "at": [80, 24], "tr": [5], "lp": "l" },
      { "kind": "chest", "at": [84, 63], "tr": [6], "lp": "r" },
      { "kind": "chest", "at": [114, 22], "tr": [7], "lp": "l" },
      { "kind": "save", "at": [90, 14], "label": "存档点", "lp": "r" },
      { "kind": "chest", "at": [68, 12], "tr": [8], "lp": "b" },
      { "kind": "boss", "at": [90, 6], "label": "克洛德", "lp": "r" }
    ]
  }
});

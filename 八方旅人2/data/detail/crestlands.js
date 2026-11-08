OT2.addDetail("crestlands", {
  "flamechurch": {
    "theme": "town",
    "size": [100, 70],
    "note": "山坡上的门前小镇：东口通往东弗拉姆教堂山道，主街向西延伸到酒馆；广场北侧上坡是礼拜堂，绕过礼拜堂东侧继续向北即巡礼路入口。旅馆东侧的梯子上方是士兵公寓（两个宝箱）。商店的具体排列为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [58, 0], [56, 6], [30, 8], [0, 6]] },
      { "kind": "cliff", "poly": [[76, 0], [100, 0], [100, 10], [80, 8]] },
      { "kind": "building", "rect": [40, 8, 20, 12], "label": "礼拜堂" },
      { "kind": "building", "rect": [24, 30, 12, 7] },
      { "kind": "house", "rect": [16, 16, 10, 7] },
      { "kind": "building", "rect": [70, 30, 12, 8] },
      { "kind": "house", "rect": [82, 14, 14, 9] },
      { "kind": "building", "rect": [6, 30, 12, 8] },
      { "kind": "building", "rect": [46, 52, 10, 7] },
      { "kind": "building", "rect": [60, 52, 10, 7] },
      { "kind": "house", "rect": [28, 54, 9, 6] },
      { "kind": "house", "rect": [84, 54, 8, 6] },
      { "kind": "plaza", "circle": [56, 44, 6], "label": "广场" }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 48], [84, 46], [70, 45], [56, 44], [40, 44], [24, 45], [8, 46]], "label": "主街" },
      { "kind": "stairs", "pts": [[56, 44], [54, 32], [50, 22]], "label": "上坡到礼拜堂" },
      { "kind": "minor", "pts": [[50, 22], [62, 20], [66, 10], [66, 2]], "label": "礼拜堂东侧→巡礼路" },
      { "kind": "minor", "pts": [[50, 22], [38, 22], [37, 14]], "label": "礼拜堂西侧" },
      { "kind": "minor", "pts": [[30, 44], [30, 37]] },
      { "kind": "minor", "pts": [[20, 45], [20, 26], [21, 23]], "label": "道具店北侧小屋" },
      { "kind": "ladder", "pts": [[84, 46], [86, 36], [87, 25]], "label": "旅馆旁梯子" },
      { "kind": "minor", "pts": [[84, 20], [87, 25], [93, 20]], "label": "士兵公寓内" },
      { "kind": "minor", "pts": [[50, 22], [50, 13]], "label": "礼拜堂内" },
      { "kind": "minor", "pts": [[21, 23], [28, 21]] },
      { "kind": "minor", "pts": [[8, 46], [6, 49]] },
      { "kind": "minor", "pts": [[70, 45], [76, 38]] },
      { "kind": "minor", "pts": [[14, 45], [12, 39]] },
      { "kind": "minor", "pts": [[51, 44], [51, 52]] },
      { "kind": "minor", "pts": [[65, 44], [65, 52]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 48], "to": "eastern_flamechurch_pass", "label": "东口", "lp": "t", "dir": "东" },
      { "kind": "exit", "at": [66, 2], "to": "flamechurch_pilgrims_way", "label": "往巡礼路", "lp": "r", "dir": "北" },
      { "kind": "npc", "at": [92, 46], "label": "老人（强力佣兵）", "npc": [0], "lp": "b" },
      { "kind": "inn", "at": [76, 37], "label": "旅馆", "lp": "l" },
      { "kind": "npc", "at": [86, 33], "label": "士兵", "npc": [1], "lp": "r" },
      { "kind": "chest", "at": [84, 19], "tr": [2], "lp": "l", "note": "士兵公寓内左侧宝箱，需先击倒梯子上的士兵。" },
      { "kind": "chest", "at": [93, 19], "tr": [1], "lp": "b", "note": "士兵公寓内右侧宝箱。" },
      { "kind": "save", "at": [62, 44], "label": "存档点", "lp": "b" },
      { "kind": "npc", "at": [46, 24], "label": "神官（门前）", "npc": [2], "lp": "l" },
      { "kind": "npc", "at": [60, 17], "label": "神官（右侧）", "npc": [3], "lp": "r" },
      { "kind": "npc", "at": [50, 12], "label": "弹琴的神官", "npc": [5], "lp": "r" },
      { "kind": "npc", "at": [34, 20], "label": "长老", "npc": [4], "lp": "l" },
      { "kind": "hidden", "at": [37, 13], "tr": [4], "lp": "l" },
      { "kind": "item", "at": [30, 37], "label": "道具店", "lp": "r" },
      { "kind": "chest", "at": [21, 20], "tr": [0], "lp": "l" },
      { "kind": "hidden", "at": [28, 20], "tr": [3], "lp": "r" },
      { "kind": "tavern", "at": [12, 39], "label": "酒馆", "npc": [6, 7], "lp": "t" },
      { "kind": "hidden", "at": [6, 50], "tr": [5], "lp": "b", "note": "酒馆外，需先向夜晚的饮料商探听。" },
      { "kind": "weapon", "at": [51, 52], "label": "商店（武器）", "lp": "b" },
      { "kind": "armor", "at": [65, 52], "label": "防具/饰品店", "lp": "b" }
    ]
  },
  "flamechurch_pilgrims_way": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "从小镇北口出发的山路：起点存档点左上有小坡，克里克入队处向右下有楼梯；中段穿过带水池的洞窟——左侧岔路出洞到小平台，水池可乘小舟到东北码头；出洞后向东北到大圣堂前。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 20], [8, 24], [10, 44], [0, 48]] },
      { "kind": "room", "rect": [34, 12, 42, 26], "label": "洞窟" },
      { "kind": "water", "poly": [[58, 16], [74, 14], [74, 34], [60, 34]] },
      { "kind": "grass", "rect": [4, 58, 18, 10] },
      { "kind": "cliff", "poly": [[70, 70], [78, 50], [100, 44], [100, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[30, 68], [30, 62], [36, 54], [44, 48], [48, 38]], "label": "巡礼路" },
      { "kind": "minor", "pts": [[30, 62], [22, 56], [18, 52]], "label": "存档点左上坡道" },
      { "kind": "stairs", "pts": [[44, 48], [54, 54], [60, 58]], "label": "克里克入队后右下楼梯" },
      { "kind": "main", "pts": [[48, 38], [50, 28], [56, 16], [60, 12], [72, 8], [84, 6], [96, 3]] },
      { "kind": "minor", "pts": [[50, 28], [40, 24], [34, 20], [24, 16], [16, 12]], "label": "洞窟左侧岔路（出洞小平台）" },
      { "kind": "minor", "pts": [[50, 28], [58, 30]], "label": "水池码头" },
      { "kind": "boat", "pts": [[58, 30], [64, 24], [70, 19]], "label": "乘小舟到东北码头" }
    ],
    "pois": [
      { "kind": "exit", "at": [30, 68], "to": "flamechurch", "label": "往弗拉姆教堂", "lp": "r", "dir": "南" },
      { "kind": "exit", "at": [96, 3], "to": "flamechurch_cathedral_entrance", "label": "往大圣堂前", "lp": "l", "dir": "东北" },
      { "kind": "save", "at": [30, 62], "label": "起点存档点", "lp": "r" },
      { "kind": "chest", "at": [18, 52], "tr": [0], "lp": "l" },
      { "kind": "landmark", "at": [44, 48], "label": "克里克入队", "lp": "l" },
      { "kind": "chest", "at": [60, 58], "tr": [1], "lp": "r" },
      { "kind": "landmark", "at": [48, 38], "label": "洞窟入口", "lp": "l" },
      { "kind": "chest", "at": [16, 12], "tr": [2], "lp": "b" },
      { "kind": "ship", "at": [58, 30], "label": "小舟", "lp": "b" },
      { "kind": "chest", "at": [71, 18], "tr": [3], "lp": "t" }
    ]
  },
  "flamechurch_cathedral_entrance": {
    "theme": "town",
    "size": [100, 70],
    "note": "西南从巡礼路进入，参道通到中央圣火广场；北侧阶梯上是大圣堂正门，西侧两栋房屋（右边那栋在瓦多斯身后），东侧是资料馆与墓地，东北角小屋下梯子进入大圣堂地下。",
    "zones": [
      { "kind": "building", "rect": [48, 0, 34, 9], "label": "大圣堂" },
      { "kind": "house", "rect": [88, 2, 10, 8] },
      { "kind": "house", "rect": [8, 18, 11, 8] },
      { "kind": "house", "rect": [22, 18, 11, 8] },
      { "kind": "building", "rect": [70, 32, 14, 9], "label": "资料馆" },
      { "kind": "plaza", "circle": [46, 40, 7] },
      { "kind": "grass", "rect": [78, 48, 20, 16], "label": "墓地" },
      { "kind": "cliff", "poly": [[30, 70], [40, 60], [60, 62], [70, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[3, 66], [16, 58], [30, 48], [46, 40]], "label": "参道" },
      { "kind": "stairs", "pts": [[46, 40], [56, 30], [64, 18], [65, 10]], "label": "大圣堂前阶梯" },
      { "kind": "main", "pts": [[65, 10], [65, 3]] },
      { "kind": "minor", "pts": [[30, 48], [26, 36], [20, 30]], "label": "往西侧房屋" },
      { "kind": "minor", "pts": [[26, 36], [27, 26]] },
      { "kind": "minor", "pts": [[20, 30], [13, 26]] },
      { "kind": "minor", "pts": [[46, 40], [60, 42], [76, 44]], "label": "往资料馆" },
      { "kind": "minor", "pts": [[76, 44], [84, 54], [90, 56]], "label": "墓地" },
      { "kind": "minor", "pts": [[64, 18], [78, 14], [88, 10], [96, 6]], "label": "往东北小屋（地下入口）" }
    ],
    "pois": [
      { "kind": "exit", "at": [3, 66], "to": "flamechurch_pilgrims_way", "label": "往巡礼路", "lp": "r", "dir": "西南" },
      { "kind": "exit", "at": [65, 3], "to": "flamechurch_cathedral", "label": "大圣堂正门", "lp": "l", "dir": "东北" },
      { "kind": "exit", "at": [96, 6], "to": "cathedral_cellars", "label": "地下入口小屋", "lp": "b", "dir": "东北" },
      { "kind": "npc", "at": [62, 10], "label": "圣堂骑士（昼/夜）", "npc": [3, 4], "lp": "l" },
      { "kind": "npc", "at": [58, 25], "label": "奥尔特（通关后）", "npc": [6], "lp": "l" },
      { "kind": "landmark", "at": [46, 40], "label": "圣火", "lp": "t" },
      { "kind": "hidden", "at": [40, 44], "tr": [1], "lp": "l" },
      { "kind": "shop", "at": [54, 41], "label": "杂货商", "lp": "b" },
      { "kind": "npc", "at": [60, 46], "label": "可疑青年（夜）", "npc": [5], "lp": "b" },
      { "kind": "chest", "at": [27, 23], "tr": [0], "lp": "r", "note": "西侧右边那栋房屋内，瓦多斯身后。" },
      { "kind": "npc", "at": [28, 32], "label": "建筑师瓦多斯", "npc": [0], "lp": "r" },
      { "kind": "npc", "at": [20, 33], "label": "学者", "npc": [1], "lp": "b" },
      { "kind": "hidden", "at": [13, 23], "tr": [3], "lp": "l" },
      { "kind": "npc", "at": [76, 44], "label": "历史学家（资料馆）", "npc": [2], "lp": "b" },
      { "kind": "hidden", "at": [90, 56], "tr": [2], "lp": "l", "note": "东侧墓碑上。" }
    ]
  },
  "flamechurch_cathedral": {
    "theme": "castle",
    "size": [100, 70],
    "note": "南侧正门进入大厅，中殿笔直通往北端祭坛（费尔瓦格）；西侧是从地下梯子上来的房间，东侧走廊连着各卧室与教皇房间。交汇篇中教皇房间书架暗门通往屋顶梁架，沿梁架向西，途中下楼梯取天使的戒指，再爬梯子到顶部房间。",
    "zones": [
      { "kind": "room", "rect": [30, 54, 40, 14], "label": "入口大厅" },
      { "kind": "room", "rect": [38, 20, 24, 34], "label": "中殿" },
      { "kind": "room", "rect": [40, 8, 20, 12] },
      { "kind": "room", "rect": [76, 14, 12, 46] },
      { "kind": "room", "rect": [88, 34, 10, 10] },
      { "kind": "room", "rect": [88, 12, 10, 10] },
      { "kind": "room", "rect": [70, 0, 16, 9] },
      { "kind": "room", "rect": [4, 32, 22, 14] },
      { "kind": "room", "rect": [4, 16, 16, 12] },
      { "kind": "wall", "rect": [8, 0, 60, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[20, 68], [30, 62], [50, 60], [50, 40], [50, 28], [50, 16], [50, 11]], "label": "正殿通道" },
      { "kind": "minor", "pts": [[50, 60], [70, 60], [82, 56]], "label": "往东侧" },
      { "kind": "minor", "pts": [[82, 56], [82, 40], [82, 20]], "label": "东侧走廊" },
      { "kind": "minor", "pts": [[82, 40], [92, 40]], "label": "东侧房间" },
      { "kind": "minor", "pts": [[82, 20], [92, 17]], "label": "最里面的卧室" },
      { "kind": "minor", "pts": [[82, 20], [78, 10], [78, 6]], "label": "教皇房间" },
      { "kind": "hidden", "pts": [[78, 6], [72, 3]], "label": "书架暗门" },
      { "kind": "bridge", "pts": [[72, 3], [40, 3], [22, 3]], "label": "屋顶梁架" },
      { "kind": "stairs", "pts": [[40, 3], [34, 10]], "label": "梁架途中下楼梯" },
      { "kind": "ladder", "pts": [[22, 3], [12, 3]], "label": "梯子→顶部房间" },
      { "kind": "minor", "pts": [[50, 40], [30, 40], [14, 40], [8, 40]], "label": "往西侧（地下梯子）" },
      { "kind": "minor", "pts": [[14, 40], [12, 22]], "label": "出口旁房间" },
      { "kind": "minor", "pts": [[50, 16], [42, 16]], "label": "祭坛左侧" },
      { "kind": "minor", "pts": [[50, 16], [58, 16]], "label": "祭坛右侧" },
      { "kind": "minor", "pts": [[50, 28], [44, 28]] }
    ],
    "pois": [
      { "kind": "exit", "at": [20, 68], "to": "flamechurch_cathedral_entrance", "label": "正门", "lp": "r", "dir": "西南" },
      { "kind": "stairs", "at": [8, 40], "to": "cathedral_cellars", "label": "地下梯子出口", "lp": "b" },
      { "kind": "chest", "at": [12, 22], "tr": [0], "lp": "r" },
      { "kind": "save", "at": [30, 40], "label": "存档点", "lp": "b", "note": "存档点位置为示意。" },
      { "kind": "hidden", "at": [40, 62], "tr": [3], "lp": "b" },
      { "kind": "chest", "at": [92, 17], "tr": [1], "lp": "b" },
      { "kind": "hidden", "at": [92, 40], "tr": [4], "lp": "b" },
      { "kind": "npc", "at": [86, 50], "label": "神官（东侧走廊）", "npc": [0], "lp": "b" },
      { "kind": "gate", "at": [75, 4], "label": "教皇房间书架暗门", "lp": "b" },
      { "kind": "chest", "at": [34, 10], "tr": [2], "lp": "l", "note": "仅在交汇篇「泰米诺斯&索洛奈 上篇」中可取。" },
      { "kind": "landmark", "at": [12, 3], "label": "顶部房间", "lp": "b" },
      { "kind": "boss", "at": [50, 11], "label": "费尔瓦格（祭坛）", "lp": "r" },
      { "kind": "npc", "at": [58, 16], "label": "神官长", "npc": [2], "lp": "r" },
      { "kind": "npc", "at": [42, 16], "label": "神官（圣窗支线）", "npc": [3, 4], "lp": "l" },
      { "kind": "npc", "at": [44, 28], "label": "猎人", "npc": [1], "lp": "l" }
    ]
  },
  "cathedral_cellars": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "从大圣堂前东北小屋下梯子进入：入口向左（北）上楼梯有宝箱并通往西侧雕像；沿水道到码头乘小舟，经中央小岛到对岸，上楼梯后大雕像背后有隐藏小路；东北角梯子上去即大圣堂，旁边有行商。",
    "zones": [
      { "kind": "room", "rect": [2, 56, 22, 13], "label": "入口" },
      { "kind": "water", "poly": [[30, 30], [72, 24], [76, 46], [36, 52]] },
      { "kind": "rock", "rect": [46, 35, 8, 7] },
      { "kind": "room", "rect": [44, 2, 40, 20], "label": "雕像平台" },
      { "kind": "room", "rect": [2, 14, 20, 14] },
      { "kind": "wall", "rect": [24, 0, 18, 10] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [14, 62], [26, 60], [36, 56]], "label": "水道沿岸" },
      { "kind": "stairs", "pts": [[14, 62], [10, 52], [10, 44]], "label": "入口向左（北）上楼梯" },
      { "kind": "minor", "pts": [[10, 44], [6, 40]] },
      { "kind": "minor", "pts": [[10, 44], [12, 30], [12, 22]], "label": "往西侧雕像" },
      { "kind": "boat", "pts": [[36, 56], [44, 46], [50, 40]], "label": "小舟→中央小岛" },
      { "kind": "boat", "pts": [[50, 40], [58, 32], [66, 24]], "label": "小舟→对岸" },
      { "kind": "stairs", "pts": [[66, 24], [70, 16]], "label": "对岸上楼梯" },
      { "kind": "main", "pts": [[70, 16], [82, 14], [94, 6]] },
      { "kind": "hidden", "pts": [[70, 16], [60, 8], [50, 6]], "label": "大雕像背后隐藏小路" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "flamechurch_cathedral_entrance", "label": "入口梯子", "lp": "r", "dir": "西南" },
      { "kind": "chest", "at": [6, 40], "tr": [0], "lp": "b" },
      { "kind": "landmark", "at": [12, 22], "label": "西侧雕像", "lp": "r", "note": "支线「奥尔特的新篇章」在此战斗。" },
      { "kind": "ship", "at": [36, 56], "label": "小舟码头", "lp": "b" },
      { "kind": "chest", "at": [50, 39], "tr": [1], "lp": "r" },
      { "kind": "landmark", "at": [65, 12], "label": "大雕像", "lp": "b" },
      { "kind": "stairs", "at": [70, 16], "label": "对岸楼梯", "lp": "r" },
      { "kind": "chest", "at": [50, 6], "tr": [2], "lp": "l" },
      { "kind": "stairs", "at": [94, 6], "to": "flamechurch_cathedral", "label": "出口梯子→大圣堂", "lp": "l" },
      { "kind": "peddler", "at": [84, 14], "label": "行商", "lp": "b" }
    ]
  }
});

OT2.addDetail("crestlands", {
  "eastern_flamechurch_pass": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "纹之地的交通枢纽：从西北的弗拉姆教堂南下，到存档点所在的三岔路口——向北上冬之地、向西南下明之地、向东通往国境大瀑布。南下途中路线转东前右侧有条窄路。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [40, 0], [36, 8], [20, 6], [0, 8]] },
      { "kind": "cliff", "poly": [[56, 0], [100, 0], [100, 30], [86, 22], [70, 18], [60, 10]] },
      { "kind": "cliff", "poly": [[60, 70], [66, 58], [84, 54], [100, 56], [100, 70]] },
      { "kind": "grass", "rect": [36, 52, 18, 10] },
      { "kind": "rock", "rect": [4, 50, 10, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 14], [14, 16], [22, 26], [26, 36], [30, 44]], "label": "从弗拉姆教堂南下" },
      { "kind": "minor", "pts": [[24, 32], [16, 36], [12, 40]], "label": "转东前右侧窄路" },
      { "kind": "main", "pts": [[30, 44], [50, 46], [70, 44], [86, 40], [98, 38]], "label": "往国境大瀑布" },
      { "kind": "stairs", "pts": [[86, 40], [88, 30]], "label": "路边台阶" },
      { "kind": "main", "pts": [[30, 44], [38, 32], [44, 20], [48, 2]], "label": "往北（冬之地）" },
      { "kind": "minor", "pts": [[44, 20], [52, 22]], "label": "北路右侧小空地" },
      { "kind": "main", "pts": [[30, 44], [24, 56], [14, 64], [4, 68]], "label": "往南（明之地）" },
      { "kind": "hidden", "pts": [[22, 58], [12, 55]], "label": "南路右侧隐蔽空地" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 14], "to": "flamechurch", "label": "往弗拉姆教堂", "lp": "b", "dir": "西" },
      { "kind": "exit", "at": [48, 2], "to": "winterlands/eastern_cape_cold_snows", "label": "往东科尔德凯普雪道", "lp": "r", "dir": "北" },
      { "kind": "exit", "at": [4, 68], "to": "brightlands/western_cb_highroad", "label": "往西轮敦街道", "lp": "r", "dir": "西南" },
      { "kind": "exit", "at": [98, 38], "to": "borderfall", "label": "往国境大瀑布", "lp": "t", "dir": "东" },
      { "kind": "save", "at": [30, 44], "label": "存档点（三岔路口）", "lp": "l" },
      { "kind": "chest", "at": [12, 40], "tr": [0], "lp": "b" },
      { "kind": "chest", "at": [88, 29], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [52, 22], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [12, 55], "tr": [3], "lp": "t" }
    ]
  },
  "borderfall": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "峡谷瀑布：西口上坡到存档点；存档点向北过南北向长吊桥到神官公会（教会内书架左侧门通圣火神祭坛），向东过吊桥继续往蒙特维斯方向。过吊桥后下梯子到瀑布水潭，可乘小舟向西取宝箱、或驶向瀑布后的洞窟（水灵之座）。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [28, 16], [14, 24], [0, 30]] },
      { "kind": "building", "rect": [36, 0, 20, 10], "label": "神官公会（教会）" },
      { "kind": "water", "poly": [[70, 0], [84, 0], [84, 18], [70, 18]] },
      { "kind": "water", "poly": [[52, 18], [98, 18], [98, 36], [52, 36]] },
      { "kind": "water", "poly": [[58, 36], [70, 36], [70, 70], [58, 70]] },
      { "kind": "rock", "rect": [30, 26, 8, 6] },
      { "kind": "cliff", "poly": [[78, 70], [82, 60], [100, 58], [100, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 58], [12, 58], [22, 54]], "label": "西口" },
      { "kind": "stairs", "pts": [[22, 54], [30, 50]], "label": "上坡台阶" },
      { "kind": "minor", "pts": [[24, 53], [22, 46]], "label": "台阶左侧" },
      { "kind": "main", "pts": [[30, 50], [44, 48]] },
      { "kind": "minor", "pts": [[44, 48], [36, 42]], "label": "存档点向西" },
      { "kind": "stairs", "pts": [[36, 42], [32, 34]] },
      { "kind": "hidden", "pts": [[32, 34], [39, 28]], "label": "上台阶后向右穿过岩石" },
      { "kind": "bridge", "pts": [[44, 48], [46, 40], [46, 12]], "label": "南北向长吊桥" },
      { "kind": "minor", "pts": [[46, 12], [36, 8], [4, 6]], "label": "书架左侧的门（教会内）" },
      { "kind": "minor", "pts": [[46, 12], [52, 7]] },
      { "kind": "main", "pts": [[44, 48], [58, 48]] },
      { "kind": "bridge", "pts": [[58, 48], [72, 48]], "label": "吊桥" },
      { "kind": "main", "pts": [[72, 48], [86, 50], [98, 50]] },
      { "kind": "minor", "pts": [[74, 49], [76, 58]], "label": "过吊桥后右侧" },
      { "kind": "ladder", "pts": [[74, 48], [74, 37]], "label": "过吊桥后下梯子" },
      { "kind": "boat", "pts": [[74, 37], [64, 32], [55, 28]], "label": "乘小舟向西" },
      { "kind": "boat", "pts": [[74, 37], [86, 28], [95, 8]], "label": "小舟→瀑布后的洞窟" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 58], "to": "eastern_flamechurch_pass", "label": "往东弗拉姆教堂山道", "lp": "t", "dir": "西" },
      { "kind": "exit", "at": [4, 6], "to": "altar_of_the_flamebringer", "label": "圣火神祭坛", "lp": "b", "dir": "西北" },
      { "kind": "exit", "at": [95, 8], "to": "seat_of_the_water_sprite", "label": "水灵之座", "lp": "l", "dir": "东北" },
      { "kind": "exit", "at": [98, 50], "to": "western_montwise_pass", "label": "往西蒙特维斯山道", "lp": "t", "dir": "东" },
      { "kind": "save", "at": [44, 48], "label": "存档点", "lp": "b" },
      { "kind": "guild", "at": [46, 12], "label": "神官公会（神官证）", "lp": "r" },
      { "kind": "npc", "at": [40, 8], "label": "神官", "npc": [0], "lp": "l" },
      { "kind": "npc", "at": [52, 7], "label": "神官", "npc": [1], "lp": "r" },
      { "kind": "chest", "at": [22, 45], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [39, 28], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [76, 59], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [55, 27], "tr": [3], "lp": "t" },
      { "kind": "ship", "at": [74, 37], "label": "小舟", "lp": "r" }
    ]
  },
  "altar_of_the_flamebringer": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "位于国境大瀑布神官公会教会内：从书架左侧的门进入，经火炬通道登上台阶即是圣火神艾尔弗里克神像；无宝箱、无守护者。",
    "zones": [
      { "kind": "room", "rect": [58, 44, 40, 24], "label": "公会教会" },
      { "kind": "room", "rect": [6, 4, 40, 26], "label": "祭坛" },
      { "kind": "cliff", "poly": [[52, 0], [100, 0], [100, 38], [70, 32], [56, 18]] },
      { "kind": "cliff", "poly": [[0, 40], [40, 46], [46, 70], [0, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 66], [82, 58], [68, 54]] },
      { "kind": "minor", "pts": [[68, 54], [60, 46]], "label": "书架左侧的门" },
      { "kind": "main", "pts": [[60, 46], [48, 36], [36, 26]], "label": "火炬通道" },
      { "kind": "stairs", "pts": [[36, 26], [26, 18]], "label": "祭坛台阶" }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 66], "to": "borderfall", "label": "回神官公会", "lp": "l", "dir": "东南" },
      { "kind": "guild", "at": [82, 58], "label": "神官公会会长", "lp": "b" },
      { "kind": "landmark", "at": [66, 50], "label": "书架", "lp": "t" },
      { "kind": "gate", "at": [60, 46], "label": "门", "lp": "l" },
      { "kind": "landmark", "at": [48, 36], "label": "火炬", "lp": "r" },
      { "kind": "landmark", "at": [36, 26], "label": "回廊尽头", "lp": "r" },
      { "kind": "shrine", "at": [24, 16], "label": "圣火神艾尔弗里克神像", "lp": "b", "note": "带泰米诺斯调查，习得EX技能「超过回复的祈祷」。" }
    ]
  },
  "seat_of_the_water_sprite": {
    "theme": "cave",
    "size": [100, 70],
    "note": "从国境大瀑布乘小舟进入：先向西可到另一码头；上主码头后存档点，向北（东侧）有宝箱，主路向西再北转（左侧楼梯下有隐藏通道），北端转东时左侧遗迹有小楼梯；东侧岔路下梯子是水底区域，两道瀑布间的梯子下去尽头是中央圆形平台。",
    "zones": [
      { "kind": "water", "poly": [[0, 54], [62, 54], [62, 70], [0, 70]] },
      { "kind": "deck", "rect": [30, 54, 10, 5] },
      { "kind": "deck", "rect": [2, 52, 10, 5] },
      { "kind": "rock", "rect": [22, 0, 16, 7] },
      { "kind": "cliff", "poly": [[0, 0], [12, 0], [10, 30], [0, 34]] },
      { "kind": "water", "poly": [[76, 0], [80, 0], [80, 30], [76, 30]] },
      { "kind": "water", "poly": [[88, 0], [92, 0], [92, 30], [88, 30]] },
      { "kind": "room", "rect": [52, 32, 20, 14], "label": "水底区域" },
      { "kind": "plaza", "circle": [80, 56, 6] }
    ],
    "paths": [
      { "kind": "boat", "pts": [[20, 68], [34, 58]], "label": "小舟→主码头" },
      { "kind": "boat", "pts": [[20, 68], [14, 62], [7, 57]], "label": "先不上码头，乘小舟向西" },
      { "kind": "stairs", "pts": [[34, 58], [36, 50]] },
      { "kind": "minor", "pts": [[36, 50], [46, 44], [48, 36]], "label": "存档点向北（东侧）" },
      { "kind": "main", "pts": [[36, 50], [22, 48], [16, 40], [16, 20], [22, 10], [48, 10], [70, 12], [84, 14]], "label": "主路" },
      { "kind": "hidden", "pts": [[16, 40], [6, 40]], "label": "北转处左侧楼梯下隐藏通道" },
      { "kind": "stairs", "pts": [[22, 10], [27, 4]], "label": "转东处左侧遗迹小楼梯" },
      { "kind": "minor", "pts": [[48, 10], [58, 18], [60, 30]], "label": "东侧岔路" },
      { "kind": "ladder", "pts": [[60, 30], [62, 39]], "label": "下梯子→水底" },
      { "kind": "minor", "pts": [[84, 14], [96, 16]], "label": "梯子旁再向东" },
      { "kind": "ladder", "pts": [[84, 14], [84, 34]], "label": "两道瀑布间的梯子" },
      { "kind": "minor", "pts": [[84, 34], [80, 44], [80, 54]], "label": "下梯子后路尽头" }
    ],
    "pois": [
      { "kind": "exit", "at": [20, 68], "to": "borderfall", "label": "入口（乘小舟）", "lp": "r", "dir": "西南" },
      { "kind": "chest", "at": [7, 56], "tr": [0], "lp": "r" },
      { "kind": "ship", "at": [34, 58], "label": "主码头", "lp": "r" },
      { "kind": "save", "at": [36, 50], "label": "存档点", "lp": "r" },
      { "kind": "chest", "at": [48, 36], "tr": [1], "lp": "r" },
      { "kind": "landmark", "at": [16, 40], "label": "北转处", "lp": "r" },
      { "kind": "chest", "at": [6, 40], "tr": [2], "lp": "b" },
      { "kind": "chest", "at": [27, 4], "tr": [3], "lp": "r" },
      { "kind": "chest", "at": [62, 40], "tr": [4], "lp": "r" },
      { "kind": "chest", "at": [96, 16], "tr": [5], "lp": "b" },
      { "kind": "chest", "at": [80, 55], "tr": [6], "lp": "r", "note": "中央圆形平台。" }
    ]
  },
  "western_montwise_pass": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "十字路口：西接国境大瀑布，存档点北上是被士兵把守的北蒙特维斯山道；存档点向右到路标，东面上楼梯到蒙特维斯，南面过桥往西梅里希尔斯山道，过桥后可沿坡道绕到桥下。",
    "zones": [
      { "kind": "water", "poly": [[0, 47], [100, 45], [100, 53], [0, 55]] },
      { "kind": "rock", "rect": [16, 18, 10, 8] },
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [28, 10], [12, 14], [0, 12]] },
      { "kind": "cliff", "poly": [[60, 0], [100, 0], [100, 18], [86, 20], [70, 14]] },
      { "kind": "grass", "rect": [70, 56, 20, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [16, 40], [30, 40]], "label": "往国境大瀑布" },
      { "kind": "main", "pts": [[30, 40], [32, 26], [36, 14], [40, 2]], "label": "往北蒙特维斯山道" },
      { "kind": "stairs", "pts": [[32, 26], [42, 22]], "label": "向右的台阶" },
      { "kind": "hidden", "pts": [[32, 26], [21, 22]], "label": "向左钻到岩石下" },
      { "kind": "main", "pts": [[30, 40], [50, 40]] },
      { "kind": "ladder", "pts": [[50, 40], [54, 30]], "label": "路标旁梯子" },
      { "kind": "main", "pts": [[50, 40], [66, 36]] },
      { "kind": "stairs", "pts": [[66, 36], [80, 30], [98, 28]], "label": "上楼梯往蒙特维斯" },
      { "kind": "main", "pts": [[50, 40], [50, 45]] },
      { "kind": "bridge", "pts": [[50, 45], [50, 56]], "label": "桥" },
      { "kind": "main", "pts": [[50, 56], [70, 62], [98, 66]], "label": "往西梅里希尔斯山道" },
      { "kind": "stairs", "pts": [[50, 56], [42, 63]], "label": "沿坡道绕到桥下" },
      { "kind": "minor", "pts": [[42, 63], [43, 57]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "borderfall", "label": "往国境大瀑布", "lp": "t", "dir": "西" },
      { "kind": "exit", "at": [40, 2], "to": "northern_montwise_pass", "label": "往北蒙特维斯山道", "lp": "r", "dir": "北" },
      { "kind": "exit", "at": [98, 28], "to": "montwise", "label": "往蒙特维斯", "lp": "t", "dir": "东" },
      { "kind": "exit", "at": [98, 66], "to": "western_merry_hills_pass", "label": "往西梅里希尔斯山道", "lp": "t", "dir": "东南" },
      { "kind": "npc", "at": [38, 8], "label": "守门士兵", "npc": [0], "lp": "l", "note": "需用挑战/偷袭等击倒才能通行。" },
      { "kind": "save", "at": [30, 40], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [21, 22], "tr": [0], "lp": "l" },
      { "kind": "landmark", "at": [50, 40], "label": "路标", "lp": "t" },
      { "kind": "chest", "at": [55, 29], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [43, 57], "tr": [2], "lp": "l" }
    ]
  },
  "northern_montwise_pass": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "穿过矿坑的错综山道：南口进入，四岔路口分出西侧、西南角与绕到矿坑右侧入口的路；向北坡道到存档点（南侧有长梯子），再经木坡北上冬之地。两个金砂、两个大银矿石分处两地。",
    "zones": [
      { "kind": "snow", "rect": [60, 0, 40, 8] },
      { "kind": "room", "rect": [56, 32, 26, 16], "label": "矿坑" },
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [26, 12], [10, 18], [0, 16]] },
      { "kind": "cliff", "poly": [[70, 70], [74, 58], [100, 54], [100, 70]] },
      { "kind": "rock", "rect": [20, 38, 8, 5] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 62], [46, 54], [40, 46]], "label": "入口" },
      { "kind": "minor", "pts": [[50, 63], [60, 63]], "label": "入口立即向右" },
      { "kind": "minor", "pts": [[40, 46], [28, 46]], "label": "四岔路口向左" },
      { "kind": "minor", "pts": [[40, 46], [24, 56], [8, 64]], "label": "往西南角" },
      { "kind": "minor", "pts": [[40, 46], [56, 50], [80, 50], [80, 40]], "label": "绕到矿坑右侧入口" },
      { "kind": "ladder", "pts": [[56, 50], [58, 42]], "label": "坡道上看到的梯子" },
      { "kind": "minor", "pts": [[80, 40], [64, 38]], "label": "右侧入口进入后左转" },
      { "kind": "main", "pts": [[40, 46], [32, 36], [30, 28], [36, 20]], "label": "向北坡道" },
      { "kind": "minor", "pts": [[32, 36], [18, 34]], "label": "坡道岔路向左" },
      { "kind": "minor", "pts": [[36, 20], [44, 26], [49, 28]], "label": "存档点向南右侧" },
      { "kind": "ladder", "pts": [[44, 26], [47, 40]], "label": "存档点南侧长梯子" },
      { "kind": "main", "pts": [[36, 20], [50, 14], [64, 12]] },
      { "kind": "minor", "pts": [[50, 14], [46, 6], [36, 4]], "label": "上木坡前向左到底" },
      { "kind": "stairs", "pts": [[64, 12], [76, 2]], "label": "木坡" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "western_montwise_pass", "label": "入口（往西蒙特维斯山道）", "lp": "l", "dir": "南" },
      { "kind": "exit", "at": [76, 2], "to": "winterlands/southern_stormhail_snows", "label": "往南斯托姆黑尔雪道", "lp": "r", "dir": "北" },
      { "kind": "chest", "at": [61, 63], "tr": [0], "lp": "r" },
      { "kind": "landmark", "at": [40, 46], "label": "四岔路口", "lp": "b" },
      { "kind": "chest", "at": [27, 46], "tr": [1], "label": "金砂（四岔路口左）", "lp": "t" },
      { "kind": "chest", "at": [63, 38], "tr": [1], "label": "金砂（梯子后方）", "lp": "t" },
      { "kind": "chest", "at": [8, 64], "tr": [2], "label": "大银矿石（西南角）", "lp": "t" },
      { "kind": "chest", "at": [47, 41], "tr": [2], "label": "大银矿石（长梯子下）", "lp": "l" },
      { "kind": "chest", "at": [17, 34], "tr": [3], "lp": "b" },
      { "kind": "save", "at": [36, 20], "label": "存档点", "lp": "l" },
      { "kind": "chest", "at": [49, 28], "tr": [4], "lp": "r" },
      { "kind": "chest", "at": [35, 4], "tr": [5], "lp": "b" }
    ]
  }
});

OT2.addDetail("crestlands", {
  "montwise": {
    "theme": "city",
    "size": [100, 70],
    "note": "学术都市：西口有强力守卫，主街东行过桥往荒凉山道；中央广场北侧楼梯上是图书馆（经图书馆西北出口可登上城墙）；酒馆旁是斗士把守的房屋；杂货店南侧楼梯下到水井，梯子通无缘墓地；城东螺旋楼梯下到地下竞技场。",
    "zones": [
      { "kind": "wall", "rect": [0, 0, 64, 3], "label": "城墙" },
      { "kind": "wall", "rect": [0, 0, 4, 34] },
      { "kind": "building", "rect": [66, 0, 32, 10], "label": "图书馆" },
      { "kind": "building", "rect": [16, 24, 12, 8] },
      { "kind": "building", "rect": [32, 22, 14, 8] },
      { "kind": "building", "rect": [62, 47, 12, 8] },
      { "kind": "building", "rect": [42, 48, 12, 8] },
      { "kind": "plaza", "circle": [50, 40, 5], "label": "中央广场" },
      { "kind": "water", "poly": [[82, 28], [86, 28], [86, 52], [82, 52]] },
      { "kind": "water", "circle": [50, 62, 2] },
      { "kind": "house", "rect": [8, 46, 10, 7] },
      { "kind": "house", "rect": [24, 50, 10, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [16, 40], [30, 40], [50, 40]], "label": "主街" },
      { "kind": "main", "pts": [[50, 40], [66, 40], [78, 40]] },
      { "kind": "bridge", "pts": [[78, 40], [90, 40]], "label": "城东桥" },
      { "kind": "main", "pts": [[90, 40], [98, 40]] },
      { "kind": "stairs", "pts": [[50, 40], [56, 26], [64, 16]], "label": "北侧楼梯" },
      { "kind": "main", "pts": [[64, 16], [80, 11], [96, 4]], "label": "图书馆入口" },
      { "kind": "minor", "pts": [[64, 16], [50, 8], [20, 6], [8, 8], [8, 27]], "label": "城墙上（经图书馆西北出口）" },
      { "kind": "minor", "pts": [[22, 40], [22, 33]] },
      { "kind": "minor", "pts": [[39, 40], [39, 30]], "label": "斗士把守的房屋" },
      { "kind": "minor", "pts": [[35, 27], [39, 30], [43, 27]], "label": "屋内" },
      { "kind": "minor", "pts": [[66, 40], [64, 47]] },
      { "kind": "minor", "pts": [[48, 40], [48, 48]] },
      { "kind": "stairs", "pts": [[56, 40], [56, 58], [50, 62]], "label": "南侧楼梯→水井" },
      { "kind": "ladder", "pts": [[50, 62], [50, 68]], "label": "水井旁梯子" },
      { "kind": "minor", "pts": [[72, 40], [74, 30], [76, 24]], "label": "城镇东侧" },
      { "kind": "stairs", "pts": [[78, 40], [76, 52], [80, 60], [96, 66]], "label": "城东螺旋楼梯→竞技场" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "western_montwise_pass", "label": "西口", "lp": "t", "dir": "西" },
      { "kind": "npc", "at": [8, 40], "label": "守卫（极强）", "npc": [0], "lp": "b" },
      { "kind": "exit", "at": [98, 40], "to": "abandoned_traverse", "label": "往荒凉山道", "lp": "t", "dir": "东" },
      { "kind": "exit", "at": [96, 4], "to": "montwise_library", "label": "图书馆", "lp": "b", "dir": "东北" },
      { "kind": "exit", "at": [96, 66], "to": "montwise_arena", "label": "地下竞技场", "lp": "l", "dir": "东南" },
      { "kind": "exit", "at": [50, 68], "to": "forsaken_graveyard", "label": "无缘墓地", "lp": "r", "dir": "南" },
      { "kind": "tavern", "at": [22, 33], "label": "酒馆", "npc": [6], "lp": "l" },
      { "kind": "npc", "at": [39, 34], "label": "前斗士/前冠军", "npc": [1, 2], "lp": "r" },
      { "kind": "chest", "at": [35, 26], "tr": [0], "lp": "l", "note": "需击倒门口前斗士与屋内前冠军（约Lv30）。" },
      { "kind": "hidden", "at": [43, 26], "tr": [4], "lp": "r" },
      { "kind": "inn", "at": [64, 48], "label": "旅馆", "lp": "l" },
      { "kind": "npc", "at": [72, 44], "label": "章鱼学者", "npc": [7], "lp": "r" },
      { "kind": "shop", "at": [48, 49], "label": "杂货店", "lp": "l" },
      { "kind": "npc", "at": [60, 56], "label": "园丁", "npc": [4], "lp": "r" },
      { "kind": "npc", "at": [74, 56], "label": "担心的女性", "npc": [5], "lp": "l" },
      { "kind": "npc", "at": [50, 30], "label": "商人", "npc": [3], "lp": "l" },
      { "kind": "hidden", "at": [72, 14], "tr": [2], "lp": "b", "note": "图书馆外。" },
      { "kind": "hidden", "at": [58, 20], "tr": [5], "lp": "r", "note": "两件隐藏物的确切位置以探听后显示为准。" },
      { "kind": "hidden", "at": [76, 24], "tr": [3], "lp": "r" },
      { "kind": "chest", "at": [8, 28], "tr": [1], "lp": "r", "note": "从图书馆西北出口登上城墙后沿城墙向南。" }
    ]
  },
  "montwise_library": {
    "theme": "manor",
    "size": [120, 70],
    "note": "多层图书馆，四个区块分别为一楼、上层、地下一层与最底层。一楼前台旁楼梯上到上层（东侧书架顶有宝箱、西北为自习室与城墙出口），东侧楼梯下到地下一层，再下到最底层，最底层左侧梯子处是通往地下研究室的暗门。",
    "zones": [
      { "kind": "room", "rect": [2, 2, 56, 32], "label": "上层" },
      { "kind": "room", "rect": [2, 38, 56, 30], "label": "一楼" },
      { "kind": "room", "rect": [62, 38, 56, 30], "label": "地下一层" },
      { "kind": "room", "rect": [62, 2, 56, 32], "label": "最底层" },
      { "kind": "house", "rect": [4, 5, 14, 9] },
      { "kind": "house", "rect": [38, 3, 12, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[20, 68], [22, 60], [30, 56]], "label": "入口" },
      { "kind": "minor", "pts": [[30, 56], [12, 52]], "label": "西侧书桌" },
      { "kind": "minor", "pts": [[12, 52], [8, 44]], "label": "西侧书架" },
      { "kind": "minor", "pts": [[12, 52], [8, 62]], "label": "一楼西南" },
      { "kind": "minor", "pts": [[30, 56], [52, 56]], "label": "一楼东侧" },
      { "kind": "minor", "pts": [[44, 56], [54, 64]] },
      { "kind": "minor", "pts": [[52, 56], [54, 51]] },
      { "kind": "stairs", "pts": [[30, 56], [30, 40], [30, 30]], "label": "楼梯↑上层" },
      { "kind": "minor", "pts": [[30, 30], [12, 22]], "label": "上层西侧" },
      { "kind": "minor", "pts": [[12, 22], [10, 10]], "label": "西北自习室" },
      { "kind": "minor", "pts": [[10, 10], [3, 4]], "label": "西北出口→城墙" },
      { "kind": "minor", "pts": [[30, 30], [48, 24]], "label": "上层东侧" },
      { "kind": "ladder", "pts": [[48, 24], [52, 14]], "label": "书架顶" },
      { "kind": "minor", "pts": [[48, 24], [44, 8]], "label": "东北研究室" },
      { "kind": "stairs", "pts": [[52, 56], [66, 56]], "label": "楼梯↓地下一层" },
      { "kind": "minor", "pts": [[66, 56], [74, 50]], "label": "地下一层西侧" },
      { "kind": "minor", "pts": [[66, 56], [90, 56], [110, 52]], "label": "地下一层东侧" },
      { "kind": "stairs", "pts": [[90, 56], [90, 30], [88, 22]], "label": "楼梯↓最底层" },
      { "kind": "minor", "pts": [[88, 22], [110, 20]], "label": "最底层东侧" },
      { "kind": "minor", "pts": [[88, 22], [68, 20]], "label": "最底层左侧梯子" },
      { "kind": "hidden", "pts": [[68, 20], [68, 10], [74, 2]], "label": "暗门→地下研究室" }
    ],
    "pois": [
      { "kind": "exit", "at": [20, 68], "to": "montwise", "label": "出口（往蒙特维斯）", "lp": "r", "dir": "西南" },
      { "kind": "landmark", "at": [30, 56], "label": "前台", "npc": [6], "lp": "b", "note": "夜晚有图书管理员。" },
      { "kind": "npc", "at": [12, 52], "label": "学者&市民（西侧桌子）", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [8, 44], "label": "兽人（夜）", "npc": [7], "lp": "r" },
      { "kind": "hidden", "at": [8, 62], "tr": [3], "lp": "r" },
      { "kind": "npc", "at": [44, 60], "label": "设计师", "npc": [3], "lp": "b" },
      { "kind": "hidden", "at": [54, 50], "tr": [1], "lp": "l" },
      { "kind": "npc", "at": [54, 64], "label": "阿尔（夜）", "npc": [8], "lp": "l" },
      { "kind": "npc", "at": [12, 22], "label": "学者（上层西侧·探查）", "lp": "r" },
      { "kind": "hidden", "at": [10, 10], "tr": [2], "lp": "r" },
      { "kind": "gate", "at": [3, 4], "label": "西北出口（城墙）", "npc": [4], "lp": "r" },
      { "kind": "chest", "at": [52, 13], "tr": [0], "lp": "b" },
      { "kind": "npc", "at": [44, 7], "label": "雷古鲁斯", "npc": [9], "lp": "l" },
      { "kind": "npc", "at": [74, 50], "label": "学者（地下一层西侧）", "npc": [2], "lp": "r" },
      { "kind": "npc", "at": [110, 52], "label": "学者（地下一层东侧）", "npc": [1], "lp": "l" },
      { "kind": "npc", "at": [110, 20], "label": "历史学家", "npc": [5], "lp": "l" },
      { "kind": "landmark", "at": [68, 20], "label": "左侧梯子（暗门）", "lp": "r" },
      { "kind": "exit", "at": [74, 2], "to": "underground_laboratory", "label": "地下研究室", "lp": "r", "dir": "东北" }
    ]
  },
  "montwise_arena": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "从蒙特维斯城东螺旋楼梯下来是上层通道（右侧为武器防具店），中央向下是登记处与斗场入口；斗场两侧分别是西侧观众席与东侧观战区。",
    "zones": [
      { "kind": "room", "rect": [2, 2, 96, 16], "label": "上层通道" },
      { "kind": "building", "rect": [80, 3, 16, 8] },
      { "kind": "plaza", "circle": [50, 46, 16] },
      { "kind": "deck", "rect": [4, 24, 20, 42], "label": "西侧观众席" },
      { "kind": "deck", "rect": [76, 24, 20, 42], "label": "东侧观战区" }
    ],
    "paths": [
      { "kind": "stairs", "pts": [[4, 4], [12, 10]], "label": "螺旋楼梯" },
      { "kind": "main", "pts": [[12, 10], [50, 12], [90, 12]], "label": "上层通道" },
      { "kind": "stairs", "pts": [[50, 12], [50, 24]], "label": "下到登记处" },
      { "kind": "minor", "pts": [[50, 24], [50, 32], [50, 46]], "label": "报名后进入斗场" },
      { "kind": "minor", "pts": [[50, 46], [38, 50]], "label": "斗场西侧" },
      { "kind": "minor", "pts": [[50, 46], [62, 50]], "label": "斗场东侧" },
      { "kind": "minor", "pts": [[12, 10], [14, 30], [14, 52]], "label": "西侧观众席" },
      { "kind": "minor", "pts": [[86, 12], [86, 30], [86, 52]], "label": "东侧观战区" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 4], "to": "montwise", "label": "往蒙特维斯", "lp": "r", "dir": "西北" },
      { "kind": "weapon", "at": [88, 9], "label": "武器防具店", "lp": "l" },
      { "kind": "npc", "at": [76, 14], "label": "观众（武器店旁）", "npc": [1], "lp": "b" },
      { "kind": "npc", "at": [88, 20], "label": "斗士×2（夜）", "npc": [2], "lp": "l" },
      { "kind": "npc", "at": [47, 24], "label": "士兵", "npc": [0], "lp": "l" },
      { "kind": "npc", "at": [53, 24], "label": "登记员", "lp": "r" },
      { "kind": "gate", "at": [50, 32], "label": "斗场入口", "lp": "r" },
      { "kind": "boss", "at": [50, 46], "label": "班德拉姆 / 尤莉娜斯", "lp": "r" },
      { "kind": "chest", "at": [38, 50], "tr": [0], "lp": "b", "note": "光第2章剧情中向登记员报名进入斗场后。" },
      { "kind": "hidden", "at": [14, 52], "tr": [1], "lp": "r" },
      { "kind": "hidden", "at": [86, 52], "tr": [2], "lp": "l" },
      { "kind": "npc", "at": [86, 36], "label": "懦弱的青年（夜）", "npc": [3], "lp": "l" },
      { "kind": "npc", "at": [14, 40], "label": "尤莉娜斯（支线后）", "npc": [4], "lp": "r" }
    ]
  },
  "forsaken_graveyard": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "从蒙特维斯水井梯子下来即存档点：南侧小桥向西到烛台雕像；沿烛光主路下楼梯到长椅区，东侧有宝箱、西侧北楼梯有宝箱，再往西南是废墟房屋（梯子上二楼）；主路南下是食梦者，最南端台阶上是禁忌之剑。",
    "zones": [
      { "kind": "room", "rect": [40, 0, 20, 12], "label": "入口" },
      { "kind": "water", "poly": [[36, 12], [42, 12], [44, 36], [38, 36]] },
      { "kind": "room", "rect": [36, 40, 32, 12] },
      { "kind": "house", "rect": [6, 50, 16, 12] },
      { "kind": "room", "rect": [40, 54, 24, 16], "label": "Boss 区" },
      { "kind": "rock", "rect": [62, 14, 16, 10], "label": "墓群" },
      { "kind": "rock", "rect": [8, 30, 18, 8] }
    ],
    "paths": [
      { "kind": "ladder", "pts": [[50, 2], [50, 8]], "label": "水井梯子" },
      { "kind": "main", "pts": [[50, 8], [50, 16], [50, 20]] },
      { "kind": "bridge", "pts": [[50, 20], [36, 22]], "label": "存档点南侧小桥" },
      { "kind": "minor", "pts": [[36, 22], [22, 22], [17, 19]], "label": "小桥向西" },
      { "kind": "main", "pts": [[50, 20], [58, 28], [56, 36]], "label": "烛光主路" },
      { "kind": "stairs", "pts": [[56, 36], [52, 44]] },
      { "kind": "minor", "pts": [[52, 44], [62, 46]], "label": "长椅东侧" },
      { "kind": "minor", "pts": [[52, 44], [42, 46]] },
      { "kind": "stairs", "pts": [[42, 46], [40, 40]], "label": "长椅西侧北楼梯" },
      { "kind": "minor", "pts": [[42, 46], [24, 54], [16, 60]], "label": "往西南废墟" },
      { "kind": "ladder", "pts": [[16, 60], [14, 54]], "label": "梯子上二楼" },
      { "kind": "main", "pts": [[52, 44], [52, 58]] },
      { "kind": "stairs", "pts": [[52, 58], [52, 67]], "label": "最南端台阶" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 2], "to": "montwise", "label": "出口梯子（往蒙特维斯）", "lp": "r", "dir": "北" },
      { "kind": "save", "at": [50, 16], "label": "存档点", "lp": "r" },
      { "kind": "chest", "at": [21, 22], "tr": [0], "lp": "b" },
      { "kind": "landmark", "at": [16, 18], "label": "烛台雕像", "lp": "l" },
      { "kind": "landmark", "at": [52, 44], "label": "长椅", "lp": "t" },
      { "kind": "chest", "at": [63, 46], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [40, 39], "tr": [2], "lp": "l" },
      { "kind": "chest", "at": [14, 53], "tr": [3], "lp": "r" },
      { "kind": "boss", "at": [52, 58], "label": "食梦者", "lp": "r" },
      { "kind": "chest", "at": [52, 67], "tr": [4], "lp": "r", "note": "需击败食梦者。" }
    ]
  },
  "underground_laboratory": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "图书馆暗门下来的研究室：入口一直向右是小房间；正路北上后向左依次两个房间各一宝箱；继续北上经存档点进入长房间（嵌合体战），尽头转向东北的最深处是悲叹魔像。",
    "zones": [
      { "kind": "room", "rect": [2, 56, 22, 13], "label": "入口" },
      { "kind": "room", "rect": [64, 56, 14, 10] },
      { "kind": "room", "rect": [4, 36, 14, 10] },
      { "kind": "room", "rect": [4, 20, 14, 10] },
      { "kind": "room", "rect": [24, 18, 44, 10], "label": "长房间" },
      { "kind": "room", "rect": [72, 2, 26, 16], "label": "最深处" },
      { "kind": "wall", "rect": [40, 34, 50, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [18, 62], [30, 60]], "label": "入口" },
      { "kind": "minor", "pts": [[30, 60], [52, 62], [70, 62]], "label": "进入后一直向右" },
      { "kind": "main", "pts": [[30, 60], [30, 44]] },
      { "kind": "minor", "pts": [[30, 44], [12, 42]], "label": "向左第1个房间" },
      { "kind": "minor", "pts": [[12, 42], [12, 26]], "label": "向左第2个房间" },
      { "kind": "main", "pts": [[30, 44], [30, 34], [30, 24]] },
      { "kind": "main", "pts": [[30, 24], [64, 24], [78, 14], [86, 10]], "label": "长房间→最深处" },
      { "kind": "minor", "pts": [[58, 24], [60, 20]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "montwise_library", "label": "入口（往图书馆）", "lp": "r", "dir": "西南" },
      { "kind": "chest", "at": [71, 61], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [11, 41], "tr": [1], "label": "噩梦瓶装", "lp": "b" },
      { "kind": "chest", "at": [11, 25], "tr": [1], "label": "噩梦瓶装", "lp": "r" },
      { "kind": "landmark", "at": [30, 44], "label": "岔路口（向左两个房间）", "lp": "r" },
      { "kind": "save", "at": [30, 34], "label": "存档点", "lp": "r" },
      { "kind": "danger", "at": [36, 24], "label": "嵌合体战", "lp": "b" },
      { "kind": "landmark", "at": [64, 24], "label": "长房间尽头（转向东北）", "lp": "b" },
      { "kind": "chest", "at": [60, 20], "tr": [2], "lp": "t" },
      { "kind": "boss", "at": [86, 10], "label": "悲叹魔像", "lp": "b" }
    ]
  }
});

OT2.addDetail("crestlands", {
  "abandoned_traverse": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "从蒙特维斯城东桥出来：第一个岔路向左有宝箱；过深谷上的桥（与父亲对话处）后，向北是小岔，向南下是支路（左侧小凹处金色宝箱、被迫右转后的小洞窟），主路向东北通往废教会。",
    "zones": [
      { "kind": "pit", "poly": [[36, 0], [48, 0], [46, 50], [38, 50]], "label": "深谷" },
      { "kind": "rock", "rect": [22, 58, 14, 10] },
      { "kind": "cliff", "poly": [[70, 40], [100, 34], [100, 70], [66, 70]] },
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [26, 6], [0, 8]] },
      { "kind": "grass", "rect": [4, 40, 20, 12] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 30], [16, 30], [34, 32]], "label": "入口" },
      { "kind": "minor", "pts": [[16, 30], [14, 18], [10, 12]], "label": "第一个岔路向左" },
      { "kind": "bridge", "pts": [[34, 32], [50, 32]], "label": "遇见父亲的桥" },
      { "kind": "minor", "pts": [[50, 32], [52, 20], [50, 12]], "label": "过桥后向北" },
      { "kind": "minor", "pts": [[50, 32], [52, 46], [54, 58]], "label": "过桥后南下" },
      { "kind": "minor", "pts": [[52, 46], [60, 46]], "label": "左侧小凹处" },
      { "kind": "minor", "pts": [[54, 58], [44, 64], [32, 63]], "label": "被迫右转→小洞窟" },
      { "kind": "main", "pts": [[50, 32], [70, 28], [86, 16], [96, 4]], "label": "往废教会" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 30], "to": "montwise", "label": "往蒙特维斯", "lp": "t", "dir": "西" },
      { "kind": "exit", "at": [96, 4], "to": "abandoned_church", "label": "废教会", "lp": "l", "dir": "东北" },
      { "kind": "chest", "at": [10, 12], "tr": [0], "lp": "r" },
      { "kind": "landmark", "at": [42, 32], "label": "与父亲对话处", "lp": "t" },
      { "kind": "chest", "at": [50, 12], "tr": [1], "lp": "r" },
      { "kind": "chest_red", "at": [61, 46], "tr": [2], "lp": "r", "note": "金色宝箱。" },
      { "kind": "chest", "at": [30, 63], "tr": [3], "lp": "b", "note": "小洞窟内。" }
    ]
  },
  "abandoned_church": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "西南入口右行越过第一道楼梯进入讲台区（南侧与讲台后方各一宝箱）；回到楼梯上行走上层回廊绕过讲台，下来后向左有宝箱；回廊东端是存档点，再向右有宝箱，北侧台阶上去是父亲所在的最深处。",
    "zones": [
      { "kind": "room", "rect": [2, 56, 22, 13], "label": "入口" },
      { "kind": "room", "rect": [36, 36, 30, 26] },
      { "kind": "room", "rect": [28, 22, 50, 8], "label": "上层回廊" },
      { "kind": "room", "rect": [70, 0, 28, 14], "label": "最深处" },
      { "kind": "wall", "rect": [2, 30, 20, 4] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [24, 62]], "label": "入口右行" },
      { "kind": "stairs", "pts": [[24, 62], [32, 56]], "label": "第一道楼梯" },
      { "kind": "main", "pts": [[32, 56], [46, 54]] },
      { "kind": "minor", "pts": [[46, 54], [48, 60]], "label": "讲台区南侧" },
      { "kind": "minor", "pts": [[46, 54], [42, 46], [50, 38]], "label": "讲台后方" },
      { "kind": "stairs", "pts": [[32, 56], [30, 40], [32, 26]], "label": "回到楼梯上行" },
      { "kind": "main", "pts": [[32, 26], [50, 26], [70, 26]], "label": "绕过讲台" },
      { "kind": "stairs", "pts": [[70, 26], [72, 40]], "label": "下楼" },
      { "kind": "minor", "pts": [[72, 40], [64, 48]], "label": "下来后向左" },
      { "kind": "main", "pts": [[70, 26], [82, 22]] },
      { "kind": "minor", "pts": [[82, 22], [94, 26]], "label": "存档点再向右" },
      { "kind": "stairs", "pts": [[82, 22], [84, 8]], "label": "往最深处" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "abandoned_traverse", "label": "入口", "lp": "r", "dir": "西南" },
      { "kind": "landmark", "at": [46, 44], "label": "讲台", "lp": "r" },
      { "kind": "stairs", "at": [32, 56], "label": "第一道楼梯", "lp": "t" },
      { "kind": "chest", "at": [48, 61], "tr": [0], "lp": "r" },
      { "kind": "chest_red", "at": [50, 38], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [63, 49], "tr": [2], "lp": "b" },
      { "kind": "landmark", "at": [50, 26], "label": "上层回廊", "lp": "t" },
      { "kind": "save", "at": [82, 22], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [94, 26], "tr": [3], "lp": "b" },
      { "kind": "boss", "at": [84, 8], "label": "父亲", "lp": "l" }
    ]
  },
  "western_merry_hills_pass": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "西北从西蒙特维斯山道进入后南行，过第1座桥上台阶，北侧洞窟有梯子与夜间刺客出没的死路；主路过第2座桥后经路边摊位向东进入梅里希尔斯。",
    "zones": [
      { "kind": "water", "poly": [[26, 18], [34, 18], [34, 70], [26, 70]] },
      { "kind": "water", "poly": [[60, 24], [68, 24], [68, 70], [60, 70]] },
      { "kind": "room", "rect": [38, 4, 22, 14] },
      { "kind": "cliff", "poly": [[64, 0], [100, 0], [100, 18], [80, 16], [68, 8]] },
      { "kind": "grass", "rect": [76, 50, 20, 14] }
    ],
    "paths": [
      { "kind": "main", "pts": [[3, 4], [10, 14], [14, 28], [24, 34]], "label": "入口南行" },
      { "kind": "minor", "pts": [[10, 15], [4, 22]], "label": "南行右侧" },
      { "kind": "bridge", "pts": [[24, 34], [36, 34]], "label": "第1座桥" },
      { "kind": "stairs", "pts": [[36, 34], [44, 28]], "label": "过桥上台阶" },
      { "kind": "minor", "pts": [[44, 28], [46, 16]], "label": "北侧洞窟" },
      { "kind": "ladder", "pts": [[46, 16], [46, 8]], "label": "洞窟梯子" },
      { "kind": "minor", "pts": [[46, 16], [55, 14]], "label": "梯子下方的死路" },
      { "kind": "main", "pts": [[44, 28], [58, 38]] },
      { "kind": "bridge", "pts": [[58, 38], [70, 38]], "label": "第2座桥" },
      { "kind": "minor", "pts": [[70, 38], [72, 48]], "label": "过桥南侧" },
      { "kind": "main", "pts": [[70, 38], [84, 34], [98, 32]] },
      { "kind": "minor", "pts": [[84, 34], [84, 24]], "label": "摊位北侧" }
    ],
    "pois": [
      { "kind": "exit", "at": [3, 4], "to": "western_montwise_pass", "label": "往西蒙特维斯山道", "lp": "r", "dir": "西北" },
      { "kind": "exit", "at": [98, 32], "to": "merry_hills", "label": "往梅里希尔斯", "lp": "b", "dir": "东" },
      { "kind": "chest", "at": [4, 23], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [46, 7], "tr": [1], "lp": "r" },
      { "kind": "boss", "at": [55, 14], "label": "异国刺客×4（夜）", "lp": "r" },
      { "kind": "chest", "at": [72, 49], "tr": [2], "lp": "r" },
      { "kind": "shop", "at": [86, 37], "label": "路边摊位", "lp": "b" },
      { "kind": "chest", "at": [84, 23], "tr": [3], "lp": "r" }
    ]
  },
  "merry_hills": {
    "theme": "town",
    "size": [100, 70],
    "note": "庆典之城：西口进入主街，入口附近是卖面包的少女与几位商贩，左侧楼梯上有隐藏物；主街在旅馆前向北，旅馆北侧楼梯上是酒馆，从酒馆向西过主街上方的桥到北侧房屋；主街北段尽头的北侧桥西端是前往祭殿入口的地图切换处。部分隐藏物的位置为示意。",
    "zones": [
      { "kind": "building", "rect": [54, 52, 12, 8] },
      { "kind": "building", "rect": [62, 24, 14, 8] },
      { "kind": "house", "rect": [26, 18, 12, 8] },
      { "kind": "building", "rect": [72, 52, 12, 8] },
      { "kind": "building", "rect": [86, 52, 12, 8] },
      { "kind": "house", "rect": [70, 8, 12, 8] },
      { "kind": "house", "rect": [4, 26, 8, 8] },
      { "kind": "plaza", "circle": [14, 50, 5] },
      { "kind": "garden", "rect": [80, 30, 16, 10], "label": "庆典装饰" },
      { "kind": "cliff", "poly": [[30, 0], [60, 0], [56, 6], [34, 5]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 50], [30, 50], [48, 48]], "label": "主街" },
      { "kind": "main", "pts": [[48, 48], [70, 48], [96, 46]], "label": "主街东段" },
      { "kind": "main", "pts": [[48, 48], [48, 34], [46, 20], [44, 10]], "label": "主街北段" },
      { "kind": "bridge", "pts": [[44, 10], [24, 8]], "label": "北侧桥" },
      { "kind": "minor", "pts": [[24, 8], [4, 4]], "label": "往祭殿入口" },
      { "kind": "minor", "pts": [[24, 8], [16, 12]] },
      { "kind": "stairs", "pts": [[24, 50], [18, 40], [14, 36]], "label": "左侧楼梯" },
      { "kind": "minor", "pts": [[60, 48], [60, 52]] },
      { "kind": "stairs", "pts": [[64, 48], [66, 34]], "label": "旅馆北上楼梯" },
      { "kind": "bridge", "pts": [[66, 34], [36, 30]], "label": "主街上方的桥" },
      { "kind": "minor", "pts": [[36, 30], [32, 26]], "label": "北侧房屋" },
      { "kind": "minor", "pts": [[46, 20], [58, 14]], "label": "北侧" },
      { "kind": "minor", "pts": [[48, 44], [38, 42]] },
      { "kind": "minor", "pts": [[66, 34], [74, 36]] },
      { "kind": "minor", "pts": [[78, 48], [78, 52]] },
      { "kind": "minor", "pts": [[92, 47], [92, 52]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 50], "to": "western_merry_hills_pass", "label": "西口", "lp": "t", "dir": "西" },
      { "kind": "exit", "at": [4, 4], "to": "merry_hills_shrine_entrance", "label": "往祭殿入口", "lp": "r", "dir": "西北" },
      { "kind": "npc", "at": [10, 47], "label": "卖面包的少女", "lp": "t" },
      { "kind": "npc", "at": [10, 53], "label": "商人（绿帽）", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [20, 53], "label": "女性（疾风斗篷）", "npc": [1], "lp": "b" },
      { "kind": "npc", "at": [28, 53], "label": "女性（暴风护符）", "npc": [2], "lp": "r" },
      { "kind": "hidden", "at": [14, 35], "tr": [3], "lp": "r" },
      { "kind": "hidden", "at": [38, 42], "tr": [2], "lp": "l", "note": "需向戴软呢帽男子北侧的老人探听，位置为示意。" },
      { "kind": "inn", "at": [60, 53], "label": "旅馆", "lp": "b" },
      { "kind": "tavern", "at": [68, 33], "label": "酒馆", "lp": "t" },
      { "kind": "npc", "at": [74, 36], "label": "酒馆外女性", "npc": [6], "lp": "r" },
      { "kind": "chest", "at": [32, 24], "tr": [0], "lp": "l" },
      { "kind": "npc", "at": [44, 25], "label": "男子（士兵前）", "npc": [4], "lp": "l" },
      { "kind": "npc", "at": [53, 31], "label": "诗人", "npc": [3], "lp": "r" },
      { "kind": "npc", "at": [50, 20], "label": "士兵", "npc": [5], "lp": "r" },
      { "kind": "npc", "at": [40, 11], "label": "莱拉（通关后）", "npc": [7], "lp": "l" },
      { "kind": "hidden", "at": [58, 14], "tr": [4], "lp": "r" },
      { "kind": "chest", "at": [15, 13], "tr": [1], "lp": "b" },
      { "kind": "weapon", "at": [78, 53], "label": "武器防具店", "lp": "b" },
      { "kind": "item", "at": [92, 53], "label": "道具店", "lp": "b" }
    ]
  },
  "merry_hills_shrine_entrance": {
    "theme": "town",
    "size": [100, 70],
    "note": "祭殿前的广场：东南从梅里希尔斯进入，中央是广场与钢琴，西侧有白天的女性（南北各一宝物），东北角是年轻收藏家与体力项链；北侧入口向东北进入乌尔斯特拉祭殿。",
    "zones": [
      { "kind": "plaza", "circle": [48, 38, 16] },
      { "kind": "building", "rect": [72, 0, 26, 7] },
      { "kind": "garden", "rect": [4, 4, 22, 16], "label": "花园" },
      { "kind": "cliff", "poly": [[0, 60], [30, 58], [50, 70], [0, 70]] },
      { "kind": "garden", "rect": [76, 26, 20, 10] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 66], [80, 56], [60, 48], [48, 38]], "label": "从梅里希尔斯" },
      { "kind": "main", "pts": [[48, 38], [54, 20], [66, 8], [94, 4]], "label": "北侧入口→祭殿" },
      { "kind": "minor", "pts": [[48, 38], [30, 40], [18, 42]], "label": "广场西侧" },
      { "kind": "minor", "pts": [[30, 40], [26, 32], [20, 31]], "label": "广场西北" },
      { "kind": "minor", "pts": [[22, 42], [22, 46]] },
      { "kind": "minor", "pts": [[56, 18], [70, 20], [84, 18]], "label": "往东北角" },
      { "kind": "minor", "pts": [[84, 18], [90, 12]] },
      { "kind": "minor", "pts": [[48, 38], [70, 40]], "label": "广场右侧" },
      { "kind": "minor", "pts": [[48, 38], [60, 30]], "label": "人体雕像" }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 66], "to": "merry_hills", "label": "往梅里希尔斯", "lp": "l", "dir": "东南" },
      { "kind": "exit", "at": [94, 4], "to": "shrine_of_ulsterra", "label": "乌尔斯特拉祭殿", "lp": "b", "dir": "东北" },
      { "kind": "npc", "at": [66, 52], "label": "入口NPC", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [22, 38], "label": "白天的女性", "lp": "l" },
      { "kind": "hidden", "at": [20, 31], "tr": [2], "lp": "l" },
      { "kind": "chest", "at": [22, 46], "tr": [0], "lp": "b" },
      { "kind": "npc", "at": [32, 37], "label": "歌手×2（夜）", "npc": [1], "lp": "b" },
      { "kind": "npc", "at": [26, 30], "label": "男子（夜）", "npc": [3], "lp": "t" },
      { "kind": "landmark", "at": [46, 41], "label": "钢琴", "lp": "b" },
      { "kind": "landmark", "at": [60, 30], "label": "人体雕像", "lp": "r" },
      { "kind": "npc", "at": [58, 27], "label": "观众（夜）", "npc": [2], "lp": "r" },
      { "kind": "npc", "at": [70, 40], "label": "舞者（夜）", "npc": [4], "lp": "r" },
      { "kind": "npc", "at": [60, 12], "label": "乐师", "npc": [5], "lp": "l" },
      { "kind": "npc", "at": [81, 16], "label": "年轻收藏家", "npc": [6], "lp": "l" },
      { "kind": "chest", "at": [84, 18], "tr": [1], "lp": "b" },
      { "kind": "hidden", "at": [90, 12], "tr": [3], "lp": "b" }
    ]
  },
  "shrine_of_ulsterra": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "入口大厅最左侧拱门下楼梯到地下通道（果酱宝箱右侧墙壁有隐藏通道向东）；正路北上到柱列：直行经存档点到出口楼梯（往舞台），右转沿小路南下到梯子，爬上观众席上方的桥取血染的匕首。",
    "zones": [
      { "kind": "room", "rect": [2, 52, 40, 17], "label": "入口大厅" },
      { "kind": "room", "rect": [2, 34, 46, 12], "label": "地下通道" },
      { "kind": "deck", "rect": [56, 34, 38, 22] },
      { "kind": "room", "rect": [36, 16, 30, 10] },
      { "kind": "room", "rect": [54, 0, 44, 14] }
    ],
    "paths": [
      { "kind": "main", "pts": [[6, 66], [20, 60], [40, 56]], "label": "入口" },
      { "kind": "stairs", "pts": [[12, 63], [8, 42]], "label": "最左侧拱门下楼梯" },
      { "kind": "hidden", "pts": [[8, 42], [42, 40]], "label": "右侧墙壁隐藏通道" },
      { "kind": "main", "pts": [[40, 56], [50, 46], [50, 22]], "label": "北上" },
      { "kind": "main", "pts": [[50, 22], [56, 12], [64, 10]] },
      { "kind": "stairs", "pts": [[64, 10], [80, 8], [98, 8]], "label": "出口楼梯" },
      { "kind": "minor", "pts": [[64, 10], [64, 4]] },
      { "kind": "minor", "pts": [[50, 22], [72, 22], [80, 30]], "label": "柱列处右转" },
      { "kind": "minor", "pts": [[80, 30], [94, 36], [92, 56]], "label": "沿小路南下" },
      { "kind": "ladder", "pts": [[92, 56], [88, 46]], "label": "梯子" },
      { "kind": "bridge", "pts": [[88, 46], [66, 44]], "label": "观众席上方的桥" }
    ],
    "pois": [
      { "kind": "exit", "at": [6, 66], "to": "merry_hills_shrine_entrance", "label": "入口", "lp": "r", "dir": "西南" },
      { "kind": "landmark", "at": [12, 63], "label": "最左侧拱门（下楼梯）", "lp": "r" },
      { "kind": "chest", "at": [5, 40], "tr": [0], "lp": "b" },
      { "kind": "chest", "at": [43, 40], "tr": [1], "lp": "r" },
      { "kind": "landmark", "at": [50, 22], "label": "北侧柱列", "lp": "l" },
      { "kind": "save", "at": [64, 10], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [64, 3], "tr": [2], "lp": "r" },
      { "kind": "exit", "at": [98, 8], "to": "stage_of_the_moon_and_sun", "label": "往月与太阳的舞台", "lp": "b", "dir": "东" },
      { "kind": "landmark", "at": [92, 56], "label": "梯子（往观众席上方的桥）", "lp": "l" },
      { "kind": "chest", "at": [65, 44], "tr": [3], "lp": "l" }
    ]
  },
  "stage_of_the_moon_and_sun": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "西侧从祭殿进入，存档点后上台即与多尔西妮娅两连战；上台前先从舞台南侧绕到地图右侧，柱子后方有 24000 叶。",
    "zones": [
      { "kind": "room", "rect": [2, 30, 26, 20], "label": "后台通道" },
      { "kind": "deck", "rect": [44, 18, 30, 32], "label": "舞台" },
      { "kind": "rock", "rect": [84, 36, 6, 6] },
      { "kind": "rock", "rect": [84, 10, 6, 6] },
      { "kind": "rock", "rect": [84, 56, 6, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [18, 40]], "label": "入口通道" },
      { "kind": "main", "pts": [[18, 40], [30, 40]], "label": "后台通道" },
      { "kind": "stairs", "pts": [[30, 40], [44, 36]], "label": "上台" },
      { "kind": "main", "pts": [[44, 36], [58, 34]] },
      { "kind": "minor", "pts": [[58, 34], [58, 42]] },
      { "kind": "minor", "pts": [[30, 40], [36, 58], [70, 62]], "label": "先别上台，从舞台南侧绕行" },
      { "kind": "minor", "pts": [[70, 62], [86, 52]], "label": "绕到地图右侧" },
      { "kind": "minor", "pts": [[86, 52], [94, 46], [94, 40]], "label": "柱子后方" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "shrine_of_ulsterra", "label": "回乌尔斯特拉祭殿", "lp": "t", "dir": "西" },
      { "kind": "save", "at": [22, 40], "label": "存档点", "lp": "b" },
      { "kind": "landmark", "at": [37, 38], "label": "舞台台阶", "lp": "t" },
      { "kind": "boss", "at": [58, 30], "label": "多尔西妮娅（第一战）", "lp": "r" },
      { "kind": "boss", "at": [58, 42], "label": "巨星 多尔西妮娅（第二战）", "lp": "r" },
      { "kind": "landmark", "at": [92, 42], "label": "右侧柱子", "lp": "l" },
      { "kind": "landmark", "at": [30, 40], "label": "上台前岔路", "lp": "b" },
      { "kind": "landmark", "at": [70, 62], "label": "舞台南侧", "lp": "t" },
      { "kind": "landmark", "at": [86, 52], "label": "地图右侧", "lp": "t" },
      { "kind": "chest", "at": [94, 40], "tr": [0], "lp": "b" }
    ]
  }
});

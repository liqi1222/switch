OT2.addDetail("wildlands", {
  "oresrush": {
    "theme": "town",
    "size": [100, 70],
    "note": "银矿小镇：南口通往南欧兹拉修荒道，中央广场向东北是通往银矿遗址的东侧大路，向西北是通往铸造厂的路（哈里在路边）；帕尔提提欧家在西南，旅店与道具店在广场东侧，牧场在西。速度增强果实宝箱在武器店内，需从旅店后方的楼梯上去。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [36, 0], [30, 6], [18, 4], [0, 2]] },
      { "kind": "cliff", "poly": [[60, 0], [100, 0], [100, 4], [84, 8], [70, 6]] },
      { "kind": "plaza", "circle": [50, 38, 5] },
      { "kind": "building", "rect": [14, 41, 14, 8], "label": "帕尔提提欧家" },
      { "kind": "building", "rect": [38, 15, 12, 8], "label": "酒馆" },
      { "kind": "building", "rect": [58, 19, 12, 8], "label": "道具店" },
      { "kind": "building", "rect": [78, 32, 12, 8], "label": "武器店" },
      { "kind": "building", "rect": [58, 45, 12, 7], "label": "旅店" },
      { "kind": "grass", "rect": [3, 22, 22, 16], "label": "牧场" },
      { "kind": "house", "rect": [30, 44, 8, 6] },
      { "kind": "house", "rect": [56, 58, 8, 6] },
      { "kind": "house", "rect": [74, 46, 8, 6] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 62], [50, 56], [50, 44], [50, 38]], "label": "南口大街" },
      { "kind": "main", "pts": [[50, 38], [62, 34], [76, 26], [88, 16], [98, 8]], "label": "东侧大路（往银矿遗址）" },
      { "kind": "main", "pts": [[50, 38], [42, 32], [32, 24], [24, 16], [14, 10], [2, 6]], "label": "通往铸造厂的路" },
      { "kind": "minor", "pts": [[50, 56], [38, 54], [28, 52], [22, 50]], "label": "往帕尔提提欧家" },
      { "kind": "minor", "pts": [[22, 50], [14, 56], [8, 60]] },
      { "kind": "minor", "pts": [[50, 56], [58, 55], [64, 54], [72, 57]], "label": "旅店前" },
      { "kind": "stairs", "pts": [[64, 54], [67, 48]], "label": "旅店阳台" },
      { "kind": "minor", "pts": [[62, 34], [63, 29]] },
      { "kind": "minor", "pts": [[76, 26], [80, 31]] },
      { "kind": "stairs", "pts": [[72, 57], [76, 48], [80, 40]], "label": "旅店后方楼梯（通往武器店）" },
      { "kind": "minor", "pts": [[80, 40], [84, 37]], "label": "武器店内" },
      { "kind": "minor", "pts": [[42, 32], [40, 27]] },
      { "kind": "minor", "pts": [[50, 38], [42, 39], [34, 38], [26, 36], [19, 34], [12, 30]], "label": "往牧场" },
      { "kind": "minor", "pts": [[50, 38], [52, 26], [56, 14]], "label": "北侧小路" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "south_oresrush_wilds", "label": "南口", "lp": "r" },
      { "kind": "exit", "at": [98, 8], "to": "silver_mine", "label": "东口（往银矿遗址）", "lp": "l" },
      { "kind": "exit", "at": [2, 6], "to": "oresrush_foundry", "label": "往铸造厂", "lp": "r" },
      { "kind": "chest", "at": [21, 48], "tr": [0], "label": "轻钱袋（帕尔提提欧家一楼里间）", "lp": "t" },
      { "kind": "npc", "at": [28, 52], "label": "帕普", "npc": [0], "lp": "b" },
      { "kind": "chest", "at": [84, 37], "tr": [1], "label": "速度增强果实（武器店内）", "lp": "r", "note": "宿屋（旅店）后方楼梯上去，进入武器店内。" },
      { "kind": "landmark", "at": [48, 62], "label": "入口大水桶", "lp": "l", "note": "大水桶下的NPC探听后，北侧出现隐藏物品还魂橄榄。" },
      { "kind": "hidden", "at": [56, 14], "tr": [2], "label": "还魂橄榄（北侧）", "lp": "r", "note": "探听入口大水桶下的NPC后出现；具体位置为示意。" },
      { "kind": "inn", "at": [64, 54], "label": "旅店", "lp": "b" },
      { "kind": "npc", "at": [67, 48], "label": "妮基（阳台）", "npc": [5], "lp": "r" },
      { "kind": "hidden", "at": [72, 57], "tr": [3], "label": "糖果（旅店外）", "lp": "r", "note": "探听北侧小孩后出现。" },
      { "kind": "tavern", "at": [40, 27], "label": "酒馆", "npc": [3, 5], "lp": "l", "note": "酒馆内女子（白天可偷）与内德在此。" },
      { "kind": "hidden", "at": [34, 38], "tr": [4], "label": "活力戒指", "lp": "b", "note": "夜晚收买酒馆外的男子，位于其南侧。" },
      { "kind": "item", "at": [63, 29], "label": "道具店", "lp": "t" },
      { "kind": "npc", "at": [56, 33], "label": "乔（征求好笑话）", "lp": "l" },
      { "kind": "npc", "at": [64, 36], "label": "道具店南侧的女子", "npc": [1], "lp": "b" },
      { "kind": "weapon", "at": [80, 31], "label": "武器店（退休矿工）", "npc": [4], "lp": "b" },
      { "kind": "npc", "at": [90, 14], "label": "小贩（被盗的货物）", "lp": "b" },
      { "kind": "npc", "at": [12, 30], "label": "牧场主（栅栏另一侧）", "npc": [2], "lp": "t" },
      { "kind": "npc", "at": [24, 16], "label": "哈里（路边）", "npc": [5], "lp": "r" },
      { "kind": "npc", "at": [62, 56], "label": "老人（昼）", "npc": [6], "lp": "b", "note": "探听可得铸造厂的隐藏重钱袋。" },
      { "kind": "npc", "at": [42, 39], "label": "男子（昼）", "npc": [7], "lp": "t", "note": "探听可得铸造厂的隐藏短弓。" }
    ]
  },
  "oresrush_foundry": {
    "theme": "town",
    "size": [100, 70],
    "note": "镇北的旧铸造厂：从东南的欧兹拉修进入，铸造厂前空地向北是举行「死亡之桌」的铸造厂主楼，向左是被粗鲁商人挡住的藏赃物房屋。索洛奈第2章前与通关后入口关闭。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [26, 10], [10, 16], [0, 14]] },
      { "kind": "cliff", "poly": [[76, 0], [100, 0], [100, 40], [92, 30], [86, 12]] },
      { "kind": "building", "rect": [38, 4, 32, 16], "label": "旧铸造厂" },
      { "kind": "house", "rect": [8, 30, 14, 10], "label": "藏赃物的房屋" },
      { "kind": "house", "rect": [70, 30, 12, 8] },
      { "kind": "plaza", "circle": [52, 40, 7], "label": "铸造厂前空地" },
      { "kind": "rock", "poly": [[0, 54], [30, 50], [56, 58], [70, 70], [0, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 64], [82, 56], [66, 48], [52, 40]], "label": "从欧兹拉修进入" },
      { "kind": "main", "pts": [[52, 40], [52, 30], [52, 22]] },
      { "kind": "stairs", "pts": [[52, 22], [52, 14], [60, 12]], "label": "铸造厂内部" },
      { "kind": "minor", "pts": [[52, 40], [38, 38], [26, 36], [16, 36]], "label": "左侧房屋" },
      { "kind": "minor", "pts": [[66, 48], [74, 40], [76, 38]] },
      { "kind": "minor", "pts": [[26, 36], [20, 44], [14, 50]], "label": "西侧后巷" },
      { "kind": "minor", "pts": [[82, 56], [88, 60], [92, 54]], "label": "东南小巷" }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 64], "to": "oresrush", "label": "往欧兹拉修", "lp": "t" },
      { "kind": "hidden", "at": [14, 50], "tr": [1], "label": "重钱袋（隐藏）", "lp": "r", "note": "探听欧兹拉修镇内白天的老人后出现。" },
      { "kind": "hidden", "at": [92, 54], "tr": [2], "label": "短弓（隐藏）", "lp": "l", "note": "探听欧兹拉修镇内白天的男子后出现。" },
      { "kind": "gate", "at": [52, 22], "label": "铸造厂入口", "lp": "r", "note": "索洛奈第2章前封闭，剧情后到索洛奈全篇完成前再次关闭。" },
      { "kind": "landmark", "at": [52, 14], "label": "死亡之桌", "lp": "l" },
      { "kind": "npc", "at": [60, 12], "label": "奴隶商人（剧情对决）", "lp": "r" },
      { "kind": "npc", "at": [26, 36], "label": "粗鲁商人（挑战打昏）", "npc": [0], "lp": "b" },
      { "kind": "chest", "at": [16, 36], "tr": [0], "label": "被偷的货物（屋内）", "lp": "t" },
      { "kind": "house", "at": [76, 38], "label": "民宅", "lp": "t" }
    ]
  },
  "silver_mine": {
    "theme": "cave",
    "size": [100, 70],
    "note": "从西南的欧兹拉修进入矿坑，一路向上走到可当桥用的铁轨，跨过峡谷后经隧道抵达东北的吉夫宅邸。回忆时期（夜晚）的「银矿」只有入口一带；现代「银矿遗址」结构扩大，4个宝箱分布在各条支坑道，具体位置为示意。",
    "zones": [
      { "kind": "room", "rect": [2, 42, 34, 26], "label": "矿坑入口" },
      { "kind": "room", "rect": [16, 18, 42, 26], "label": "上层坑道" },
      { "kind": "pit", "poly": [[58, 0], [70, 0], [72, 30], [68, 70], [58, 70], [62, 34]], "label": "峡谷" },
      { "kind": "room", "rect": [72, 2, 26, 30], "label": "隧道" }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 64], [16, 58], [28, 54], [36, 46], [44, 38], [54, 32], [60, 30]], "label": "向上的主坑道" },
      { "kind": "bridge", "pts": [[60, 30], [72, 26]], "label": "铁轨桥" },
      { "kind": "main", "pts": [[72, 26], [80, 18], [88, 12], [96, 6]], "label": "隧道（往吉夫宅邸）" },
      { "kind": "minor", "pts": [[16, 58], [18, 50], [14, 46]], "label": "入口左侧坑道" },
      { "kind": "minor", "pts": [[28, 54], [40, 60], [48, 62]], "label": "入口右侧坑道" },
      { "kind": "minor", "pts": [[36, 46], [26, 36], [20, 30]], "label": "上层左岔" },
      { "kind": "ladder", "pts": [[44, 38], [46, 28], [50, 22]], "label": "上层右岔（梯子）" },
      { "kind": "minor", "pts": [[80, 18], [84, 26], [86, 28]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 64], "to": "oresrush", "label": "往欧兹拉修", "lp": "t" },
      { "kind": "exit", "at": [96, 6], "to": "giffs_manse", "label": "往吉夫宅邸", "lp": "l" },
      { "kind": "chest", "at": [14, 46], "tr": [0], "lp": "t", "note": "仅回忆时期的银矿；位置为示意。" },
      { "kind": "chest", "at": [48, 62], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [20, 30], "tr": [2], "lp": "t" },
      { "kind": "chest", "at": [50, 22], "tr": [3], "lp": "l" },
      { "kind": "chest", "at": [86, 28], "tr": [4], "lp": "l" },
      { "kind": "landmark", "at": [66, 28], "label": "铁轨当桥", "lp": "b" }
    ]
  },
  "giffs_manse": {
    "theme": "manor",
    "size": [100, 70],
    "note": "帕尔提提欧第1章迷宫：西南的前庭进入宅邸1F，经楼梯上2F走廊，Boss房前有存档点与商人。4个宝箱按攻略站方位分布：玄关右手房间、喷水广场左侧靠前、广场深处房间与2楼中央房间，具体坐标为示意。",
    "zones": [
      { "kind": "garden", "rect": [2, 34, 30, 34], "label": "前庭" },
      { "kind": "room", "rect": [34, 40, 34, 28], "label": "宅邸1F" },
      { "kind": "room", "rect": [68, 2, 30, 38], "label": "宅邸2F" },
      { "kind": "room", "rect": [34, 2, 32, 20], "label": "Boss 房" },
      { "kind": "wall", "rect": [32, 40, 2, 28] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [14, 58], [24, 52], [36, 50]], "label": "前庭小路" },
      { "kind": "main", "pts": [[36, 50], [50, 50], [60, 46], [66, 40]], "label": "1F大厅" },
      { "kind": "stairs", "pts": [[66, 40], [74, 34]], "label": "上二楼" },
      { "kind": "main", "pts": [[74, 34], [84, 28], [84, 18], [76, 12], [66, 12], [44, 12]], "label": "2F走廊" },
      { "kind": "minor", "pts": [[24, 52], [18, 44], [12, 40]], "label": "前庭左侧" },
      { "kind": "minor", "pts": [[50, 50], [50, 60], [56, 64]], "label": "1F侧室" },
      { "kind": "minor", "pts": [[84, 28], [94, 32]], "label": "2F右侧房间" },
      { "kind": "minor", "pts": [[84, 18], [94, 10]], "label": "2F里间" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "silver_mine", "label": "往银矿遗址", "lp": "t" },
      { "kind": "chest", "at": [12, 40], "tr": [2], "label": "青铜盾（喷水广场左手靠前）", "lp": "t" },
      { "kind": "chest", "at": [56, 64], "tr": [0], "label": "治愈葡萄（玄关右手房间）", "lp": "r" },
      { "kind": "chest", "at": [94, 32], "tr": [3], "label": "皮盔（2楼中央房间）", "lp": "l" },
      { "kind": "chest", "at": [94, 10], "tr": [1], "label": "小块银矿（广场深处房间）", "lp": "l" },
      { "kind": "landmark", "at": [24, 52], "label": "喷水广场", "lp": "b" },
      { "kind": "danger", "at": [43, 50], "label": "冰之哨兵出没", "lp": "b", "note": "掉落冰之精灵石（约4%），可补足吉夫的冰弱点。" },
      { "kind": "peddler", "at": [72, 12], "label": "商人", "lp": "b" },
      { "kind": "save", "at": [62, 12], "label": "存档点", "lp": "b" },
      { "kind": "boss", "at": [44, 10], "label": "吉夫＋手下I/II", "lp": "b" }
    ]
  },
  "south_oresrush_wilds": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "欧兹拉修南侧荒道：北口下来后主路一分为二，向西北往叶之地南库罗普提尔森道，向西南往日之野北琉砂原；东侧有数条通往宝箱的岔路。宝箱位置资料只写「宝箱」，为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[60, 0], [100, 0], [100, 30], [88, 24], [78, 8]] },
      { "kind": "cliff", "poly": [[76, 62], [100, 48], [100, 70], [70, 70]] },
      { "kind": "rock", "poly": [[0, 22], [14, 26], [20, 34], [8, 42], [0, 40]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 2], [50, 14], [44, 26], [36, 36], [24, 46], [12, 56], [4, 66]], "label": "往北琉砂原" },
      { "kind": "main", "pts": [[44, 26], [30, 20], [16, 12], [2, 8]], "label": "往南库罗普提尔森道" },
      { "kind": "minor", "pts": [[50, 14], [64, 18], [76, 16]], "label": "入口右岔" },
      { "kind": "minor", "pts": [[36, 36], [50, 44], [62, 50], [72, 52]], "label": "中段东岔路" },
      { "kind": "minor", "pts": [[62, 50], [64, 60], [60, 64]] },
      { "kind": "minor", "pts": [[24, 46], [30, 58], [34, 62]] }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 2], "to": "oresrush", "label": "往欧兹拉修", "lp": "r" },
      { "kind": "exit", "at": [2, 8], "to": "leaflands/south_cropdale_trail", "label": "往南库罗普提尔森道", "lp": "b" },
      { "kind": "exit", "at": [4, 66], "to": "hinoeuma/northern_ryu_sands", "label": "往北琉砂原", "lp": "r" },
      { "kind": "chest", "at": [76, 16], "tr": [0], "lp": "b" },
      { "kind": "chest", "at": [72, 52], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [60, 64], "tr": [2], "lp": "l" },
      { "kind": "chest", "at": [34, 62], "tr": [3], "lp": "r" },
      { "kind": "npc", "at": [40, 31], "label": "阿尔（仅帕尔提提欧为主角时）", "npc": [0], "lp": "r" }
    ]
  }
});

OT2.addDetail("wildlands", {
  "crackridge_anchorage": {
    "theme": "port",
    "size": [100, 70],
    "note": "荒野之地的港口：西口接叶之地东库罗普提尔森道，入口处向北的坡路通往南克拉克里奇荒道；港口大路向东南延伸到栈桥与船只（出海点）。3个宝箱位置资料只写「宝箱」，为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[20, 0], [100, 0], [100, 22], [80, 26], [60, 18], [46, 14], [28, 8]] },
      { "kind": "water", "poly": [[56, 70], [70, 60], [86, 52], [100, 46], [100, 70]] },
      { "kind": "deck", "rect": [70, 52, 22, 8], "label": "栈桥" },
      { "kind": "building", "rect": [36, 50, 12, 8], "label": "仓库" },
      { "kind": "house", "rect": [22, 26, 10, 7] },
      { "kind": "house", "rect": [54, 32, 10, 7] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 36], [18, 38], [26, 39], [34, 40], [50, 44], [56, 47], [62, 50], [72, 54]], "label": "港口大路" },
      { "kind": "main", "pts": [[18, 38], [14, 24], [10, 12], [6, 4]], "label": "北上往南克拉克里奇荒道" },
      { "kind": "minor", "pts": [[72, 54], [78, 56], [88, 60]], "label": "栈桥" },
      { "kind": "minor", "pts": [[34, 40], [38, 28], [44, 22]], "label": "北侧坡道" },
      { "kind": "minor", "pts": [[50, 44], [46, 56], [40, 62]], "label": "仓库后" },
      { "kind": "minor", "pts": [[62, 50], [66, 40], [72, 36]] },
      { "kind": "boat", "pts": [[88, 60], [98, 68]], "label": "出航航线" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 36], "to": "leaflands/east_cropdale_trail", "label": "往东库罗普提尔森道", "lp": "t" },
      { "kind": "exit", "at": [6, 4], "to": "south_crackridge_wilds", "label": "往南克拉克里奇荒道", "lp": "r" },
      { "kind": "ship", "at": [88, 60], "to": "sundering_sea/anchorage_crackridge", "label": "船（出海）", "lp": "t" },
      { "kind": "chest", "at": [44, 22], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [40, 62], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [72, 36], "tr": [2], "lp": "r" },
      { "kind": "npc", "at": [56, 47], "label": "可疑的男子（凤凰扇）", "npc": [0], "lp": "b" },
      { "kind": "npc", "at": [78, 56], "label": "巴雷", "npc": [1], "lp": "t", "note": "奥斯瓦尔德第1、2章完成后出现。" },
      { "kind": "npc", "at": [26, 39], "label": "夜晚：私奔的贵族女子", "lp": "b" }
    ]
  },
  "south_crackridge_wilds": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "从东南的港口北上，主路折向东北通往西克拉克里奇荒道；中段向西北的岔路尽头是未完成隧道（监工挡路）。西荒道入口以南有一条矿道，其中的隐藏通道（内有6400叶宝箱）向东通往绅商伯祭坛。其余宝箱位置为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [26, 8], [10, 14], [0, 12]] },
      { "kind": "cliff", "poly": [[0, 60], [14, 62], [30, 70], [0, 70]] },
      { "kind": "rock", "rect": [76, 22, 16, 16], "label": "矿道" },
      { "kind": "cliff", "poly": [[86, 40], [100, 42], [100, 58], [90, 52]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 66], [80, 58], [71, 55], [62, 52], [48, 44], [50, 30], [62, 20], [78, 12], [96, 4]], "label": "主路" },
      { "kind": "main", "pts": [[48, 44], [34, 36], [20, 26], [10, 24], [2, 22]], "label": "往未完成隧道（西北）" },
      { "kind": "minor", "pts": [[78, 12], [80, 22], [82, 30]], "label": "西荒道入口以南的矿道" },
      { "kind": "hidden", "pts": [[82, 30], [90, 34], [98, 36]], "label": "矿道内隐藏通道（往祭坛）" },
      { "kind": "minor", "pts": [[62, 52], [60, 62], [54, 66]] },
      { "kind": "minor", "pts": [[34, 36], [30, 46], [24, 52]] },
      { "kind": "minor", "pts": [[50, 30], [38, 18], [34, 10]] }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 66], "to": "crackridge_anchorage", "label": "往港口停泊所", "lp": "l" },
      { "kind": "exit", "at": [96, 4], "to": "west_crackridge_wilds", "label": "往西克拉克里奇荒道", "lp": "l" },
      { "kind": "exit", "at": [2, 22], "to": "unfinished_tunnel", "label": "未完成隧道入口", "lp": "t" },
      { "kind": "exit", "at": [98, 36], "to": "altar_of_trader", "label": "往绅商伯祭坛", "lp": "b" },
      { "kind": "npc", "at": [10, 24], "label": "监工（需打昏）", "npc": [0], "lp": "b" },
      { "kind": "gate", "at": [82, 30], "label": "矿道", "lp": "l" },
      { "kind": "chest", "at": [90, 34], "tr": [2], "label": "6400叶（隐藏通道内）", "lp": "t" },
      { "kind": "chest", "at": [54, 66], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [24, 52], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [34, 10], "tr": [3], "lp": "r" },
      { "kind": "danger", "at": [71, 55], "label": "奶油咩咩出没", "lp": "b" }
    ]
  },
  "unfinished_tunnel": {
    "theme": "cave",
    "size": [100, 70],
    "note": "入口在东侧。天然磁石路线：沿铁轨向南→走右侧木板下去→再向南下木板→往左走到梯子爬上（无需击败Boss）。主坑道向西绕到西南深处的万口怪，削弱护符宝箱在其身后。其余宝箱位置为示意。",
    "zones": [
      { "kind": "room", "rect": [64, 4, 34, 18], "label": "入口坑道" },
      { "kind": "room", "rect": [2, 2, 58, 24], "label": "西侧坑道" },
      { "kind": "room", "rect": [56, 28, 42, 40], "label": "下层（木板下）" },
      { "kind": "room", "rect": [4, 44, 44, 24], "label": "深处" },
      { "kind": "pit", "poly": [[20, 28], [40, 26], [50, 40], [30, 42]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 12], [90, 12], [80, 12], [74, 18], [74, 30]], "label": "铁轨（向南）" },
      { "kind": "stairs", "pts": [[74, 30], [84, 36], [86, 42]], "label": "右侧木板下去" },
      { "kind": "stairs", "pts": [[86, 42], [86, 50], [84, 56]], "label": "再向南下木板" },
      { "kind": "minor", "pts": [[84, 56], [70, 58], [62, 58]], "label": "往左走" },
      { "kind": "ladder", "pts": [[62, 58], [60, 50]], "label": "梯子爬上" },
      { "kind": "minor", "pts": [[84, 56], [90, 64]] },
      { "kind": "minor", "pts": [[74, 30], [66, 36], [58, 40]] },
      { "kind": "main", "pts": [[74, 18], [58, 18], [42, 16], [26, 14], [14, 18], [10, 30], [12, 42]], "label": "主坑道" },
      { "kind": "main", "pts": [[12, 42], [20, 50], [28, 56]], "label": "往万口怪" },
      { "kind": "minor", "pts": [[28, 56], [38, 62]], "label": "Boss身后" },
      { "kind": "minor", "pts": [[42, 16], [44, 6]] },
      { "kind": "minor", "pts": [[26, 14], [28, 28], [34, 34]] },
      { "kind": "minor", "pts": [[10, 30], [4, 28]] },
      { "kind": "minor", "pts": [[14, 18], [6, 10]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 12], "to": "south_crackridge_wilds", "label": "隧道入口", "lp": "t" },
      { "kind": "npc", "at": [90, 12], "label": "工头（自动接取支线）", "npc": [0], "lp": "b" },
      { "kind": "chest", "at": [60, 50], "tr": [0], "label": "天然磁石（梯子上）", "lp": "l" },
      { "kind": "chest", "at": [90, 64], "tr": [6], "label": "2100叶/13500叶之一", "lp": "l" },
      { "kind": "chest", "at": [58, 40], "tr": [5], "lp": "l" },
      { "kind": "chest", "at": [44, 6], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [34, 34], "tr": [3], "lp": "r" },
      { "kind": "chest", "at": [4, 28], "tr": [4], "lp": "r" },
      { "kind": "chest", "at": [6, 10], "tr": [6], "label": "2100叶/13500叶之一", "lp": "r" },
      { "kind": "save", "at": [12, 42], "label": "存档点（示意）", "lp": "r" },
      { "kind": "boss", "at": [28, 56], "label": "万口怪", "lp": "r" },
      { "kind": "chest", "at": [38, 62], "tr": [1], "label": "削弱护符", "lp": "r" }
    ]
  },
  "altar_of_trader": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "入口在西侧：从南克拉克里奇荒道的矿道走隐藏通道进入，沿通道东行登上台阶即是供奉绅商伯比菲尔冈的祭坛。帕尔提提欧在队时调查神像可解锁EX技能。本地点没有宝箱（6400叶宝箱在荒道一侧的隐藏通道内）。",
    "zones": [
      { "kind": "rock", "poly": [[0, 0], [100, 0], [100, 18], [60, 22], [30, 28], [0, 26]] },
      { "kind": "rock", "poly": [[0, 48], [30, 50], [60, 46], [100, 44], [100, 70], [0, 70]] },
      { "kind": "room", "rect": [70, 22, 26, 20], "label": "祭坛" }
    ],
    "paths": [
      { "kind": "hidden", "pts": [[2, 36], [16, 36], [28, 40]], "label": "隐藏通道（来自矿道）" },
      { "kind": "main", "pts": [[28, 40], [44, 40], [56, 36]] },
      { "kind": "stairs", "pts": [[56, 36], [66, 32], [74, 32]], "label": "祭坛前台阶" },
      { "kind": "main", "pts": [[74, 32], [80, 32], [88, 32]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 36], "to": "south_crackridge_wilds", "label": "往南克拉克里奇荒道", "lp": "t" },
      { "kind": "gate", "at": [16, 36], "label": "隐藏入口", "lp": "b" },
      { "kind": "landmark", "at": [44, 40], "label": "通道", "lp": "b" },
      { "kind": "stairs", "at": [66, 32], "label": "台阶", "lp": "t" },
      { "kind": "landmark", "at": [80, 32], "label": "调查神像解锁EX技能", "lp": "b" },
      { "kind": "shrine", "at": [88, 32], "label": "绅商伯神像", "lp": "l" }
    ]
  },
  "west_crackridge_wilds": {
    "theme": "mountain",
    "size": [
      100,
      70
    ],
    "note": "东侧镇口与存档点相邻，主路向西南接南克拉克里奇荒道，中段北行接西格拉维尔荒道；西北台阶上是商人公会。公会南侧下梯取8500叶、公会左侧取雷之精灵石；存档点北侧另有梯子，梯旁隐藏路取头巾，下梯取骨铠。镇口楼梯旁还有李子篮隐藏路和橄榄小隧道。位置按攻略相对关系示意，未作实机像素校准。",
    "zones": [
      {
        "kind": "cliff",
        "poly": [
          [
            0,
            16
          ],
          [
            20,
            18
          ],
          [
            30,
            26
          ],
          [
            40,
            36
          ],
          [
            30,
            40
          ],
          [
            10,
            34
          ],
          [
            0,
            30
          ]
        ],
        "label": "北侧悬崖"
      },
      {
        "kind": "building",
        "rect": [
          4,
          2,
          22,
          8
        ],
        "label": "商人公会"
      },
      {
        "kind": "cliff",
        "poly": [
          [
            84,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            30
          ],
          [
            92,
            20
          ]
        ]
      },
      {
        "kind": "rock",
        "poly": [
          [
            60,
            58
          ],
          [
            80,
            64
          ],
          [
            84,
            70
          ],
          [
            56,
            70
          ]
        ]
      }
    ],
    "paths": [
      {
        "kind": "main",
        "pts": [
          [
            98,
            40
          ],
          [
            90,
            40
          ],
          [
            84,
            40
          ],
          [
            78,
            36
          ],
          [
            68,
            36
          ],
          [
            56,
            42
          ],
          [
            42,
            48
          ],
          [
            20,
            56
          ],
          [
            2,
            64
          ]
        ],
        "label": "镇口楼梯至西南主路",
        "route": {
          "from": "克拉克里奇镇口／存档点",
          "to": "南克拉克里奇荒道出口",
          "steps": [
            "从镇口附近存档点辨认上下楼梯",
            "沿主路向西南；中段可分往北侧荒道或西北公会"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ]
        }
      },
      {
        "kind": "main",
        "pts": [
          [
            68,
            36
          ],
          [
            70,
            28
          ],
          [
            74,
            14
          ],
          [
            72,
            2
          ]
        ],
        "label": "主路北行去格拉维尔",
        "route": {
          "from": "主路岔路 A",
          "to": "西格拉维尔荒道出口",
          "steps": [
            "在主路中段转向北侧道路",
            "继续到西格拉维尔荒道；梯子宝箱路线在途中分出"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ]
        }
      },
      {
        "kind": "stairs",
        "pts": [
          [
            42,
            48
          ],
          [
            36,
            34
          ],
          [
            24,
            18
          ],
          [
            16,
            12
          ]
        ],
        "label": "上台阶去商人公会",
        "route": {
          "from": "主路岔路 A 西侧",
          "to": "西北商人公会 B",
          "steps": [
            "离开主路，沿台阶上到西北悬崖",
            "在营地与会长交谈领取商人职业证"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            16,
            12
          ],
          [
            8,
            14
          ]
        ],
        "label": "公会帐篷旁昼夜商人",
        "route": {
          "from": "商人公会 B",
          "to": "帐篷左侧商人",
          "steps": [
            "在会长旁寻找左侧帐篷",
            "白天和夜晚由不同商人站在这里出售商品"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ],
          "caution": "商人昼夜替换；不能据此把公会本身筛掉"
        }
      },
      {
        "kind": "hidden",
        "pts": [
          [
            84,
            40
          ],
          [
            86,
            48
          ],
          [
            92,
            52
          ]
        ],
        "label": "镇口第一段楼梯旁隐藏路",
        "route": {
          "from": "镇口楼梯上段",
          "to": "醒神李子篮",
          "steps": [
            "沿通往镇口的楼梯下第一段",
            "检查左侧隐藏通道，进去取箱"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ],
          "caution": "这里不是楼梯最下方的小隧道"
        }
      },
      {
        "kind": "hidden",
        "pts": [
          [
            90,
            40
          ],
          [
            94,
            46
          ],
          [
            94,
            60
          ]
        ],
        "label": "镇口楼梯底部的小隧道",
        "route": {
          "from": "镇口楼梯底部",
          "to": "还魂橄榄",
          "steps": [
            "到通往克拉克里奇楼梯的底部",
            "检查左侧小隧道，穿过后取箱"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ],
          "caution": "与楼梯上段的李子篮隐藏路分开寻找"
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            70,
            28
          ],
          [
            82,
            28
          ]
        ],
        "label": "北行道路至梯口",
        "route": {
          "from": "北行道路",
          "to": "北侧梯口 C",
          "steps": [
            "从存档点附近向北寻找梯子",
            "在梯口选择右侧岩壁隐藏路或向下的梯子"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ],
          "caution": "梯右隐藏路取头巾；下梯是另一件骨铠"
        }
      },
      {
        "kind": "ladder",
        "pts": [
          [
            82,
            28
          ],
          [
            82,
            40
          ],
          [
            76,
            54
          ]
        ],
        "label": "北侧梯子下到骨铠",
        "route": {
          "from": "北侧梯口 C",
          "to": "梯底骨铠宝箱",
          "steps": [
            "回到存档点北侧梯子",
            "沿梯子下到底部取骨铠"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ],
          "caution": "与上层道路在图上交叉处不能直接换层"
        }
      },
      {
        "kind": "ladder",
        "pts": [
          [
            16,
            12
          ],
          [
            16,
            26
          ],
          [
            10,
            36
          ],
          [
            10,
            44
          ]
        ],
        "label": "公会南侧平台下梯",
        "route": {
          "from": "商人公会 B",
          "to": "8500叶宝箱",
          "steps": [
            "检查公会营地南面的崖边木平台",
            "沿平台梯子下行到宝箱"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ],
          "caution": "这是公会南侧梯子，与存档点北侧梯子不同"
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            16,
            12
          ],
          [
            8,
            10
          ],
          [
            4,
            8
          ]
        ],
        "label": "公会营地向左取精灵石",
        "route": {
          "from": "商人公会 B",
          "to": "雷之精灵石M宝箱",
          "steps": [
            "到商人公会营地",
            "检查营地左边的宝箱，取箱后返回会长处"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ]
        }
      },
      {
        "kind": "hidden",
        "pts": [
          [
            82,
            28
          ],
          [
            86,
            26
          ],
          [
            90,
            24
          ]
        ],
        "label": "梯口右侧岩壁隐藏路",
        "route": {
          "from": "北侧梯口 C",
          "to": "头巾宝箱",
          "steps": [
            "在梯口检查右侧岩壁中的隐蔽开口",
            "沿隐藏通道到头巾宝箱，取完回到梯口"
          ],
          "caution": "头巾在上层隐藏通道；骨铠需要另从梯口下梯。",
          "sources": [
            {
              "label": "ArrPeeGeeZ · 六处宝箱与梯子",
              "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
            },
            {
              "label": "Neoseeker · 隐藏入口及下梯交叉核对",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
            }
          ]
        }
      }
    ],
    "pois": [
      {
        "kind": "exit",
        "at": [
          98,
          40
        ],
        "to": "crackridge",
        "label": "东口（往克拉克里奇）",
        "lp": "l"
      },
      {
        "kind": "exit",
        "at": [
          72,
          2
        ],
        "to": "west_gravell_wilds",
        "label": "往西格拉维尔荒道",
        "lp": "r",
        "dir": "东北"
      },
      {
        "kind": "exit",
        "at": [
          2,
          64
        ],
        "to": "south_crackridge_wilds",
        "label": "往南克拉克里奇荒道",
        "lp": "r"
      },
      {
        "kind": "guild",
        "at": [
          16,
          12
        ],
        "label": "商人公会（会长）",
        "npc": [
          0
        ],
        "lp": "r"
      },
      {
        "kind": "peddler",
        "at": [
          8,
          14
        ],
        "label": "昼/夜商人",
        "npc": [
          1,
          2
        ],
        "lp": "b"
      },
      {
        "kind": "chest",
        "at": [
          92,
          52
        ],
        "tr": [
          0
        ],
        "lp": "l",
        "note": "检查左侧隐藏通道，进去取箱；图上为攻略相对位置。"
      },
      {
        "kind": "chest",
        "at": [
          94,
          60
        ],
        "tr": [
          1
        ],
        "lp": "r",
        "note": "检查左侧小隧道，穿过后取箱；图上为攻略相对位置。"
      },
      {
        "kind": "chest",
        "at": [
          90,
          24
        ],
        "tr": [
          2
        ],
        "lp": "l",
        "note": "从北侧梯口右侧岩壁隐藏入口取头巾；图上为攻略相对位置。"
      },
      {
        "kind": "chest",
        "at": [
          76,
          54
        ],
        "tr": [
          3
        ],
        "lp": "l",
        "note": "沿梯子下到底部取骨铠；图上为攻略相对位置。"
      },
      {
        "kind": "chest",
        "at": [
          10,
          44
        ],
        "tr": [
          4
        ],
        "lp": "b",
        "note": "沿平台梯子下行到宝箱；图上为攻略相对位置。"
      },
      {
        "kind": "chest",
        "at": [
          4,
          8
        ],
        "tr": [
          5
        ],
        "lp": "l",
        "note": "检查营地左边的宝箱，取箱后返回会长处；图上为攻略相对位置。"
      },
      {
        "kind": "save",
        "at": [
          90,
          38
        ],
        "label": "镇口附近存档点",
        "lp": "t"
      },
      {
        "kind": "stairs",
        "at": [
          82,
          28
        ],
        "label": "存档点北侧梯口",
        "lp": "t"
      }
    ],
    "junctions": [
      {
        "label": "A",
        "at": [
          68,
          36
        ],
        "roads": [
          0,
          1
        ],
        "note": "北行去西格拉维尔荒道，西南继续沿主路；公会在主路更西侧另分台阶。"
      },
      {
        "label": "B",
        "at": [
          16,
          12
        ],
        "labelAt": [
          22,
          10
        ],
        "roads": [
          2,
          3,
          8,
          9
        ],
        "note": "商人公会营地：南侧平台下梯取8500叶，左侧取雷之精灵石，帐篷旁为昼夜商人。"
      },
      {
        "label": "C",
        "at": [
          82,
          28
        ],
        "labelAt": [
          78,
          22
        ],
        "roads": [
          6,
          7,
          10
        ],
        "note": "存档点北侧梯口：右侧隐藏入口取头巾，下梯到骨铠。"
      }
    ],
    "crossings": [
      {
        "at": [
          82,
          38.67
        ],
        "labelAt": [
          58,
          60
        ],
        "over": 0,
        "under": 7,
        "note": "上层主路／下梯不在交叉处换层"
      }
    ],
    "sources": [
      {
        "label": "ArrPeeGeeZ · 六处宝箱与梯子",
        "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html"
      },
      {
        "label": "Neoseeker · 隐藏入口及下梯交叉核对",
        "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds"
      }
    ]
  }
});

OT2.addDetail("wildlands", {
  "crackridge": {
    "theme": "town",
    "size": [100, 70],
    "note": "建在峡谷边的小镇：西口（往西克拉克里奇荒道）进来是旅店与入口楼梯，镇内大道向东经过中段广场、武器防具店、道具店后出东口通往废弃道路。中段向南的梯子下是学者把守的房屋，再沿梯子下到谷底即通往地神寝床之路；坡下民宅与舞者在东南峡谷边。",
    "zones": [
      { "kind": "pit", "poly": [[0, 60], [30, 56], [52, 60], [70, 54], [100, 52], [100, 70], [0, 70]], "label": "峡谷" },
      { "kind": "cliff", "poly": [[0, 0], [6, 0], [4, 12], [0, 14]] },
      { "kind": "building", "rect": [6, 3, 14, 9], "label": "旅店" },
      { "kind": "building", "rect": [32, 4, 12, 8], "label": "酒馆" },
      { "kind": "building", "rect": [55, 9, 14, 9], "label": "武器防具店" },
      { "kind": "building", "rect": [76, 9, 12, 9], "label": "道具店" },
      { "kind": "plaza", "circle": [50, 28, 5] },
      { "kind": "house", "rect": [30, 46, 10, 8], "label": "学者守的房屋" },
      { "kind": "house", "rect": [68, 38, 10, 7], "label": "坡下民宅" },
      { "kind": "house", "rect": [84, 36, 10, 7] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 18], [8, 18], [14, 18], [26, 18], [32, 20], [38, 22], [46, 26], [50, 28], [56, 29], [62, 30], [74, 29], [76, 28], [82, 28], [88, 28], [98, 28]], "label": "镇内大道" },
      { "kind": "minor", "pts": [[14, 18], [14, 14]] },
      { "kind": "minor", "pts": [[14, 18], [20, 24]] },
      { "kind": "stairs", "pts": [[26, 18], [28, 26], [30, 32]], "label": "入口附近楼梯" },
      { "kind": "minor", "pts": [[38, 22], [38, 14]] },
      { "kind": "minor", "pts": [[62, 30], [62, 20], [68, 20]] },
      { "kind": "minor", "pts": [[82, 28], [82, 20]] },
      { "kind": "ladder", "pts": [[50, 28], [50, 38]], "label": "南侧梯子" },
      { "kind": "minor", "pts": [[50, 38], [44, 46], [38, 50]], "label": "梯下的房屋" },
      { "kind": "ladder", "pts": [[50, 38], [58, 46], [58, 60], [56, 68]], "label": "下到谷底的梯子" },
      { "kind": "minor", "pts": [[76, 28], [78, 40], [80, 48]], "label": "往峡谷边" },
      { "kind": "minor", "pts": [[78, 40], [74, 42]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 18], "to": "west_crackridge_wilds", "label": "西口", "lp": "t" },
      { "kind": "exit", "at": [98, 28], "to": "abandoned_road", "label": "东口（往废弃道路）", "lp": "b" },
      { "kind": "exit", "at": [56, 68], "to": "path_to_bed_of_titan", "label": "往地神寝床之路", "lp": "r" },
      { "kind": "npc", "at": [8, 18], "label": "吉他手", "npc": [0], "lp": "b" },
      { "kind": "inn", "at": [14, 14], "label": "旅店", "lp": "l" },
      { "kind": "npc", "at": [20, 16], "label": "旅店外的女子", "npc": [7], "lp": "t" },
      { "kind": "npc", "at": [20, 24], "label": "年轻男子（夜晚）", "npc": [8], "lp": "l" },
      { "kind": "chest", "at": [26, 28], "tr": [0], "label": "还魂橄榄M（楼梯下）", "lp": "b" },
      { "kind": "npc", "at": [32, 20], "label": "老人", "npc": [1], "lp": "t" },
      { "kind": "tavern", "at": [38, 14], "label": "酒馆", "lp": "r" },
      { "kind": "npc", "at": [46, 26], "label": "中段的男子（夜）", "npc": [2], "lp": "t" },
      { "kind": "npc", "at": [56, 29], "label": "中段的女子（夜）", "npc": [3], "lp": "b" },
      { "kind": "weapon", "at": [62, 20], "label": "武器防具店（士兵）", "npc": [4], "lp": "t" },
      { "kind": "hidden", "at": [68, 20], "tr": [3], "label": "钢之弓（武器店外）", "lp": "b", "note": "夜晚探听中段三位老人中右边的女子后出现。" },
      { "kind": "item", "at": [82, 20], "label": "道具店", "lp": "t" },
      { "kind": "npc", "at": [88, 26], "label": "石匠", "npc": [6], "lp": "t" },
      { "kind": "npc", "at": [74, 29], "label": "可疑商人", "npc": [5], "lp": "b" },
      { "kind": "hidden", "at": [74, 42], "tr": [2], "label": "物攻增强果实L（东侧空房子）", "lp": "l", "note": "探听石匠后出现。" },
      { "kind": "save", "at": [18, 18], "label": "存档点", "lp": "t" },
      { "kind": "npc", "at": [22, 18], "label": "学者（存档点旁）", "npc": [11], "lp": "b" },
      { "kind": "hidden", "at": [17, 21], "tr": [4], "label": "银盾（入口东北小路，大致位置）", "lp": "b", "note": "探听入口的吉他手后出现。" },
      { "kind": "hidden", "at": [11, 16], "tr": [5], "label": "薄暗之花（旅店内）", "lp": "r", "note": "探听存档点旁的学者后出现。" },
      { "kind": "npc", "at": [38, 22], "label": "酒馆内的商人（昼）", "npc": [12], "lp": "b" },
      { "kind": "hidden", "at": [85, 28], "tr": [6], "label": "睡眠粉瓶（北侧空房子旁，大致位置）", "lp": "t", "note": "探听存档点东侧树旁的老人后出现。" },
      { "kind": "hidden", "at": [62, 24], "tr": [7], "label": "石头（道具店与旅店之间，大致位置）", "lp": "r", "note": "探听右边的男孩后出现。" },
      { "kind": "hidden", "at": [78, 40], "tr": [8], "label": "火之精灵石L（东南角房屋外）", "lp": "r", "note": "探听酒馆内的商人后出现。" },
      { "kind": "npc", "at": [78, 46], "label": "男孩（昼）", "npc": [13], "lp": "l" },
      { "kind": "npc", "at": [80, 48], "label": "峡谷边的舞者", "npc": [9], "lp": "r" },
      { "kind": "npc", "at": [44, 46], "label": "学者（需打昏）", "npc": [10], "lp": "r" },
      { "kind": "chest", "at": [38, 50], "tr": [1], "label": "来自地狱尽头（屋内）", "lp": "l" }
    ]
  },
  "path_to_bed_of_titan": {
    "theme": "mountain",
    "size": [70, 100],
    "note": "从克拉克里奇沿梯子下到峡谷，沿峭壁上的木架小路左右折返下行，尽头是沉睡着泰拉的地神寝床（无遇敌、无宝箱）。存档点在梯子下来后不远处，火之护符就在存档点旁；4个宝箱的具体坐标为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [24, 0], [8, 14], [4, 40], [0, 50]] },
      { "kind": "cliff", "poly": [[48, 0], [70, 0], [70, 40], [64, 30], [58, 22]] },
      { "kind": "pit", "poly": [[22, 26], [42, 24], [44, 38], [30, 40]] },
      { "kind": "room", "rect": [6, 84, 58, 14] }
    ],
    "paths": [
      { "kind": "ladder", "pts": [[35, 2], [35, 10]], "label": "从克拉克里奇下来的梯子" },
      { "kind": "bridge", "pts": [[35, 10], [20, 18], [14, 28]], "label": "峭壁木架" },
      { "kind": "ladder", "pts": [[14, 28], [14, 38]] },
      { "kind": "bridge", "pts": [[14, 38], [30, 44], [48, 48]], "label": "峭壁木架" },
      { "kind": "ladder", "pts": [[48, 48], [50, 58]] },
      { "kind": "main", "pts": [[50, 58], [40, 66], [28, 72], [24, 80]] },
      { "kind": "main", "pts": [[24, 80], [34, 88], [35, 94]], "label": "地神寝床" },
      { "kind": "minor", "pts": [[35, 10], [54, 14], [62, 18]] },
      { "kind": "minor", "pts": [[14, 28], [6, 22]] },
      { "kind": "minor", "pts": [[30, 44], [28, 54], [20, 58]] },
      { "kind": "minor", "pts": [[14, 38], [8, 41]], "label": "存档点旁" }
    ],
    "pois": [
      { "kind": "exit", "at": [35, 2], "to": "crackridge", "label": "往克拉克里奇", "lp": "r" },
      { "kind": "chest", "at": [62, 18], "tr": [0], "label": "活力石榴M（下来后一直向东）", "lp": "l" },
      { "kind": "chest", "at": [6, 22], "tr": [1], "label": "骑士巨弓（存档点西侧梯子上）", "lp": "r" },
      { "kind": "chest", "at": [20, 58], "tr": [2], "label": "守护手镯（存档点下方）", "lp": "l" },
      { "kind": "save", "at": [14, 38], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [8, 41], "tr": [3], "label": "火之护符（存档点旁）", "lp": "b", "note": "泰拉后期多火属性攻击，务必装备。" },
      { "kind": "danger", "at": [30, 44], "label": "毛蜘蛛出没（弱短剑/斧/杖/冰）", "lp": "r" },
      { "kind": "danger", "at": [50, 58], "label": "吸血蝙蝠、王秃鹫出没", "lp": "r" },
      { "kind": "landmark", "at": [24, 80], "label": "地神寝床入口", "lp": "l" },
      { "kind": "boss", "at": [35, 94], "label": "地神泰拉", "lp": "r" }
    ]
  },
  "abandoned_road": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "克拉克里奇东口通往落日遗迹的荒废道路，一条主路东西贯通，沿途三条岔路尽头各有宝箱（位置为示意）。泰米诺斯第3章在此揭穿蕾萨的身份。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [100, 0], [100, 12], [70, 16], [50, 8], [28, 6], [0, 14]] },
      { "kind": "rock", "poly": [[0, 54], [20, 50], [36, 62], [40, 70], [0, 70]] },
      { "kind": "rock", "poly": [[66, 62], [100, 62], [100, 70], [70, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 34], [16, 36], [30, 30], [46, 32], [60, 40], [76, 38], [88, 32], [98, 30]], "label": "废弃道路" },
      { "kind": "minor", "pts": [[30, 30], [34, 18], [40, 10]] },
      { "kind": "minor", "pts": [[60, 40], [56, 52], [50, 60]] },
      { "kind": "minor", "pts": [[76, 38], [82, 50], [88, 56]] },
      { "kind": "minor", "pts": [[46, 32], [52, 22]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 34], "to": "crackridge", "label": "往克拉克里奇", "lp": "t" },
      { "kind": "exit", "at": [98, 30], "to": "fellsun_ruins", "label": "往落日遗迹", "lp": "t" },
      { "kind": "chest", "at": [40, 10], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [50, 60], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [88, 56], "tr": [2], "lp": "l" },
      { "kind": "landmark", "at": [16, 36], "label": "小女孩消失处（剧情）", "lp": "b" },
      { "kind": "npc", "at": [60, 40], "label": "蕾萨（泰米诺斯第3章）", "lp": "b" }
    ]
  },
  "fellsun_ruins": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "卡尔族的古老圣地，遍地白骨：西侧入口沿主通道东进，经神殿内部到最深处的壁画；最终章开始后壁画被破坏，露出背后的圣火。本地点无Boss；活力石榴L在存档点东侧，翡翠之杖在东北窄路，元素长袍在下层西南，具体坐标为示意。",
    "zones": [
      { "kind": "room", "rect": [2, 26, 34, 24], "label": "外围" },
      { "kind": "room", "rect": [36, 26, 34, 36], "label": "神殿内部" },
      { "kind": "room", "rect": [72, 2, 26, 30], "label": "壁画之间" },
      { "kind": "room", "rect": [12, 4, 20, 18] },
      { "kind": "wall", "rect": [70, 32, 28, 4] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [16, 40], [28, 34], [40, 34], [52, 40], [64, 36], [76, 30], [86, 22]], "label": "主通道" },
      { "kind": "main", "pts": [[86, 22], [92, 12]], "label": "壁画背后" },
      { "kind": "minor", "pts": [[28, 34], [24, 22], [20, 14]] },
      { "kind": "minor", "pts": [[52, 40], [54, 52], [46, 58]] },
      { "kind": "stairs", "pts": [[64, 36], [70, 48], [80, 54]], "label": "下层" },
      { "kind": "minor", "pts": [[76, 30], [78, 18], [84, 8]], "label": "东北窄路" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "abandoned_road", "label": "往废弃道路", "lp": "t" },
      { "kind": "save", "at": [16, 40], "label": "存档点", "lp": "t" },
      { "kind": "chest", "at": [22, 37], "tr": [0], "label": "活力石榴L（存档点东侧）", "lp": "t" },
      { "kind": "chest", "at": [46, 58], "tr": [1], "label": "元素长袍（下层西南）", "lp": "l" },
      { "kind": "chest", "at": [84, 8], "tr": [2], "label": "翡翠之杖（东北窄路）", "lp": "r" },
      { "kind": "danger", "at": [64, 36], "label": "古代遗物（光兽）、吸血蝙蝠出没", "lp": "b" },
      { "kind": "danger", "at": [40, 34], "label": "傀儡骷髅等", "lp": "b" },
      { "kind": "landmark", "at": [86, 22], "label": "壁画", "lp": "l" },
      { "kind": "shrine", "at": [92, 12], "label": "圣火（最终章后）", "lp": "l" }
    ]
  }
});

OT2.addDetail("wildlands", {
  "west_gravell_wilds": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "格拉维尔西口出来（东侧）先过第一座吊桥，主路一路向西南通往西克拉克里奇荒道。过桥后向南再沿南边的桥折回，在桥下找到梯子一路下行即进入白色幽谷。村口外是影之少年隐藏事件的地点。6个普通宝箱位置资料只写「宝箱」，为示意。",
    "zones": [
      { "kind": "pit", "poly": [[62, 28], [76, 26], [92, 38], [90, 70], [66, 70], [62, 46]], "label": "深谷" },
      { "kind": "cliff", "poly": [[0, 0], [24, 0], [20, 8], [6, 16], [0, 14]] },
      { "kind": "cliff", "poly": [[0, 66], [20, 62], [44, 66], [48, 70], [0, 70]] },
      { "kind": "rock", "poly": [[56, 0], [72, 0], [74, 14], [60, 16]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 24], [90, 24], [86, 24], [84, 24]], "label": "往格拉维尔" },
      { "kind": "bridge", "pts": [[84, 24], [70, 24]], "label": "第一座吊桥" },
      { "kind": "main", "pts": [[70, 24], [60, 22], [50, 22], [42, 26], [34, 30], [26, 36], [20, 44], [10, 54], [2, 62]], "label": "主路" },
      { "kind": "minor", "pts": [[90, 24], [92, 16], [84, 10]], "label": "村口外" },
      { "kind": "minor", "pts": [[70, 24], [66, 32], [66, 38]], "label": "过桥后向南" },
      { "kind": "bridge", "pts": [[66, 38], [80, 44]], "label": "南边的桥（折回）" },
      { "kind": "minor", "pts": [[80, 44], [84, 50]] },
      { "kind": "ladder", "pts": [[84, 50], [78, 58], [74, 68]], "label": "桥下的梯子（一路下行）" },
      { "kind": "minor", "pts": [[84, 50], [94, 56]] },
      { "kind": "minor", "pts": [[66, 38], [58, 40]] },
      { "kind": "minor", "pts": [[50, 22], [48, 8]] },
      { "kind": "minor", "pts": [[34, 30], [30, 14]] },
      { "kind": "minor", "pts": [[20, 44], [10, 32]] },
      { "kind": "minor", "pts": [[20, 44], [32, 54], [40, 56]] }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 24], "to": "gravell", "label": "往格拉维尔", "lp": "b" },
      { "kind": "exit", "at": [74, 68], "to": "ivory_ravine", "label": "往白色幽谷", "lp": "l" },
      { "kind": "exit", "at": [2, 62], "to": "west_crackridge_wilds", "label": "往西克拉克里奇荒道", "lp": "t" },
      { "kind": "npc", "at": [86, 24], "label": "桥边商人（狩猎委托）", "npc": [0], "lp": "b" },
      { "kind": "boss", "at": [92, 16], "label": "影之少年（隐藏）", "lp": "l", "note": "夜晚在格拉维尔村口外等到黎明，对出现的少年用泰米诺斯「胁迫」触发。" },
      { "kind": "hidden", "at": [84, 10], "tr": [6], "label": "日影之杖", "lp": "t", "note": "击败影之少年后出现。" },
      { "kind": "chest", "at": [48, 8], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [30, 14], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [10, 32], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [40, 56], "tr": [3], "lp": "r" },
      { "kind": "chest", "at": [58, 40], "tr": [4], "lp": "l" },
      { "kind": "chest", "at": [94, 56], "tr": [5], "lp": "l" }
    ]
  },
  "ivory_ravine": {
    "theme": "cave",
    "size": [100, 70],
    "note": "极其黑暗的峡谷迷宫：入口南侧不过吊桥沿左侧楼梯与梯子下去有失落部族之斧；过第一座桥，在第二座桥前沿梯子下去有混乱粉瓶；过第二座桥北侧是暮霭。之后梯子下行到存档点，右侧楼梯到底左侧是巨人之棍，再从码头乘小舟驶向小岛时触发深渊之物战。",
    "zones": [
      { "kind": "pit", "poly": [[44, 0], [56, 0], [58, 30], [46, 34]] },
      { "kind": "pit", "poly": [[66, 0], [80, 0], [80, 38], [68, 38]] },
      { "kind": "water", "poly": [[0, 40], [30, 38], [56, 50], [70, 58], [72, 70], [0, 70]], "label": "谷底水域" },
      { "kind": "rock", "circle": [26, 52, 5] },
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [16, 12], [6, 36], [0, 38]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[40, 2], [40, 14]], "label": "入口" },
      { "kind": "stairs", "pts": [[40, 14], [28, 18]], "label": "左侧楼梯（不过桥）" },
      { "kind": "ladder", "pts": [[28, 18], [22, 30]], "label": "梯子下行" },
      { "kind": "bridge", "pts": [[40, 14], [58, 16]], "label": "第一座吊桥" },
      { "kind": "main", "pts": [[58, 16], [64, 22]] },
      { "kind": "ladder", "pts": [[64, 22], [60, 34]], "label": "第二座桥前的梯子" },
      { "kind": "bridge", "pts": [[64, 22], [82, 22]], "label": "第二座吊桥" },
      { "kind": "minor", "pts": [[82, 22], [84, 10]], "label": "过桥后北侧" },
      { "kind": "ladder", "pts": [[82, 22], [88, 32], [86, 42]], "label": "梯子下行" },
      { "kind": "main", "pts": [[86, 42], [74, 50]] },
      { "kind": "stairs", "pts": [[74, 50], [86, 54], [88, 62]], "label": "存档点右侧楼梯" },
      { "kind": "minor", "pts": [[88, 62], [80, 64]] },
      { "kind": "minor", "pts": [[80, 64], [68, 62]], "label": "码头" },
      { "kind": "boat", "pts": [[68, 62], [50, 60], [44, 57], [36, 54], [28, 51]], "label": "乘小舟驶向小岛" }
    ],
    "pois": [
      { "kind": "exit", "at": [40, 2], "to": "west_gravell_wilds", "label": "往西格拉维尔荒道", "lp": "r" },
      { "kind": "chest", "at": [22, 30], "tr": [0], "lp": "l" },
      { "kind": "chest", "at": [60, 34], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [84, 10], "tr": [2], "lp": "l" },
      { "kind": "save", "at": [74, 50], "label": "存档点", "lp": "l" },
      { "kind": "danger", "at": [58, 16], "label": "古代遗物·黑兵、大鼹鼠、古之大鸟人出没", "lp": "t" },
      { "kind": "chest", "at": [80, 64], "tr": [3], "lp": "t" },
      { "kind": "ship", "at": [68, 62], "label": "小舟", "lp": "b" },
      { "kind": "boss", "at": [44, 57], "label": "深渊之物", "lp": "b" },
      { "kind": "npc", "at": [28, 51], "label": "迷路的少女（小岛）", "npc": [0], "lp": "t" }
    ]
  },
  "gravell": {
    "theme": "village",
    "size": [100, 70],
    "note": "偏远小村：西口进村是存档点，其右侧是讨债人把守的波尔塔家（武器大师）；村道东行经过武器防具店、道具店与旅店，旅店旁的梯子上方平台是志向远大的青年与石英盾宝箱，酒馆在南侧，东口通往达斯克鲁因灵殿之路。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [70, 0], [62, 10], [40, 14], [16, 12], [0, 18]] },
      { "kind": "cliff", "poly": [[0, 60], [30, 62], [50, 66], [54, 70], [0, 70]] },
      { "kind": "building", "rect": [22, 22, 12, 8] },
      { "kind": "building", "rect": [40, 22, 12, 9], "label": "武器防具店" },
      { "kind": "building", "rect": [40, 47, 12, 8], "label": "道具店" },
      { "kind": "building", "rect": [64, 20, 14, 9], "label": "旅店" },
      { "kind": "building", "rect": [60, 49, 14, 9] },
      { "kind": "deck", "rect": [76, 8, 16, 10] },
      { "kind": "house", "rect": [86, 42, 9, 7] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [10, 40], [20, 40], [26, 40], [40, 38], [46, 38], [54, 38], [68, 36], [76, 35], [82, 34], [98, 32]], "label": "村道" },
      { "kind": "minor", "pts": [[26, 40], [28, 36], [28, 30]], "label": "存档点右侧房屋" },
      { "kind": "minor", "pts": [[26, 40], [28, 46]] },
      { "kind": "minor", "pts": [[46, 38], [46, 33]] },
      { "kind": "minor", "pts": [[54, 38], [54, 30]] },
      { "kind": "minor", "pts": [[46, 38], [46, 44], [52, 44]] },
      { "kind": "minor", "pts": [[68, 36], [70, 31]] },
      { "kind": "ladder", "pts": [[82, 34], [80, 24], [80, 16]], "label": "旅店旁梯子（上坡）" },
      { "kind": "minor", "pts": [[80, 16], [86, 12]] },
      { "kind": "minor", "pts": [[68, 36], [68, 44], [66, 48], [70, 54]], "label": "往南侧酒馆" },
      { "kind": "minor", "pts": [[82, 34], [88, 42]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "west_gravell_wilds", "label": "西口", "lp": "t" },
      { "kind": "exit", "at": [98, 32], "to": "path_to_duskruin", "label": "东口", "lp": "t" },
      { "kind": "npc", "at": [10, 40], "label": "入口老人/夜晚士兵", "npc": [2, 3], "lp": "b" },
      { "kind": "save", "at": [20, 40], "label": "存档点", "lp": "t" },
      { "kind": "guild", "at": [28, 30], "label": "波尔塔家（武器大师）", "npc": [0], "lp": "l" },
      { "kind": "npc", "at": [28, 36], "label": "讨债人（需打昏）", "npc": [1], "lp": "r" },
      { "kind": "npc", "at": [28, 46], "label": "担忧的母亲（失踪的少女）", "lp": "b" },
      { "kind": "weapon", "at": [46, 33], "label": "武器防具店", "npc": [4], "lp": "l" },
      { "kind": "hidden", "at": [54, 30], "tr": [1], "label": "活力荔枝L（武器店旁）", "lp": "r", "note": "探听入口处穿蓝衣的人后出现。" },
      { "kind": "item", "at": [46, 44], "label": "道具店", "lp": "l" },
      { "kind": "npc", "at": [52, 44], "label": "商店外的男子", "npc": [5], "lp": "r" },
      { "kind": "inn", "at": [70, 31], "label": "旅店", "lp": "l" },
      { "kind": "npc", "at": [76, 35], "label": "阿尔皮欧涅", "npc": [6], "lp": "b" },
      { "kind": "npc", "at": [80, 16], "label": "志向远大的青年", "lp": "l" },
      { "kind": "chest", "at": [86, 12], "tr": [0], "label": "石英盾（青年身后）", "lp": "r" },
      { "kind": "tavern", "at": [66, 48], "label": "酒馆", "lp": "l" },
      { "kind": "hidden", "at": [70, 54], "tr": [2], "label": "魔力果实M（酒馆内）", "lp": "r", "note": "探听右侧最右边的小孩后出现。" },
      { "kind": "npc", "at": [88, 42], "label": "抱玩偶的少年", "npc": [7], "lp": "l" }
    ]
  },
  "path_to_duskruin": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "格拉维尔东口通往达斯克鲁因灵殿的道路，主路东西贯通，三条岔路尽头各有宝箱（位置为示意）。奥斯瓦尔德第5章被黑雾笼罩，需夜晚强夺失神村民手中的黑水晶。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [100, 0], [100, 14], [74, 20], [50, 6], [24, 10], [0, 18]] },
      { "kind": "rock", "poly": [[0, 54], [24, 52], [30, 70], [0, 70]] },
      { "kind": "rock", "poly": [[60, 60], [100, 52], [100, 70], [56, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [16, 38], [30, 42], [46, 36], [60, 30], [74, 34], [88, 30], [98, 28]], "label": "灵殿之路" },
      { "kind": "minor", "pts": [[30, 42], [34, 54], [42, 60]] },
      { "kind": "minor", "pts": [[60, 30], [56, 18], [62, 10]] },
      { "kind": "minor", "pts": [[74, 34], [80, 46]] },
      { "kind": "minor", "pts": [[16, 38], [12, 26]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "gravell", "label": "往格拉维尔", "lp": "t" },
      { "kind": "exit", "at": [98, 28], "to": "duskruin_shrine", "label": "往达斯克鲁因灵殿", "lp": "t" },
      { "kind": "chest", "at": [42, 60], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [62, 10], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [12, 26], "tr": [2], "lp": "r" },
      { "kind": "npc", "at": [46, 36], "label": "失神的村民（夜晚强夺）", "lp": "b" },
      { "kind": "npc", "at": [80, 46], "label": "失神的村民", "lp": "l" },
      { "kind": "danger", "at": [88, 30], "label": "黑雾（第5章）", "lp": "b" }
    ]
  },
  "duskruin_shrine": {
    "theme": "ruins",
    "size": [120, 70],
    "note": "左半为灵殿：西侧入口沿主通道上行，四条支路尽头各有宝箱；尽头楼梯下到右半的最深处，绕行一圈后抵达祭坛与哈维教授。各宝箱位置为示意，Boss前存档点按惯例标注。",
    "zones": [
      { "kind": "room", "rect": [2, 4, 56, 62], "label": "灵殿" },
      { "kind": "room", "rect": [62, 4, 56, 62], "label": "最深处" },
      { "kind": "plaza", "circle": [106, 14, 5] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 50], [14, 50], [26, 44], [30, 32], [40, 22], [50, 16]], "label": "灵殿主通道" },
      { "kind": "minor", "pts": [[14, 50], [16, 62], [24, 64]] },
      { "kind": "minor", "pts": [[26, 44], [40, 50], [48, 56]] },
      { "kind": "minor", "pts": [[30, 32], [14, 26], [10, 16]] },
      { "kind": "minor", "pts": [[40, 22], [36, 10], [44, 8]] },
      { "kind": "stairs", "pts": [[50, 16], [58, 16], [66, 16]], "label": "下往最深处" },
      { "kind": "main", "pts": [[66, 16], [76, 22], [80, 34], [88, 44], [98, 46], [108, 40], [110, 30], [106, 16]], "label": "最深处通道" },
      { "kind": "minor", "pts": [[76, 22], [90, 14], [96, 10]] },
      { "kind": "minor", "pts": [[80, 34], [68, 40], [66, 50]] },
      { "kind": "minor", "pts": [[88, 44], [84, 56], [90, 62]] },
      { "kind": "minor", "pts": [[98, 46], [104, 58], [112, 62]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 50], "to": "path_to_duskruin", "label": "灵殿入口", "lp": "t" },
      { "kind": "chest", "at": [24, 64], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [48, 56], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [10, 16], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [44, 8], "tr": [3], "lp": "r" },
      { "kind": "danger", "at": [40, 22], "label": "火/冰残骸等", "lp": "r" },
      { "kind": "stairs", "at": [58, 16], "label": "楼梯", "lp": "b" },
      { "kind": "chest", "at": [96, 10], "tr": [4], "lp": "r" },
      { "kind": "chest", "at": [66, 50], "tr": [5], "lp": "r" },
      { "kind": "chest", "at": [90, 62], "tr": [6], "lp": "r" },
      { "kind": "chest", "at": [112, 62], "tr": [7], "lp": "l" },
      { "kind": "save", "at": [110, 30], "label": "存档点（示意）", "lp": "l" },
      { "kind": "boss", "at": [106, 16], "label": "哈维教授（祭坛）", "lp": "l" }
    ]
  }
});

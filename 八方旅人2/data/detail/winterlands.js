OT2.addDetail("winterlands", {
  "frigit_isle": {
    "theme": "castle",
    "size": [100, 70],
    "note": "孤岛监狱：南端监狱桥通往入口/停泊所；广场居中，西为食堂与图书室、西端建筑是越狱路线（通往地下道），东为采掘场与东门；北面大监狱分1F/2F/3F（右侧并排示意2F、3F）。",
    "zones": [
      { "kind": "water", "poly": [[0, 56], [30, 60], [45, 62], [45, 70], [0, 70]] },
      { "kind": "water", "poly": [[55, 62], [70, 60], [100, 56], [100, 70], [55, 70]] },
      { "kind": "building", "rect": [28, 4, 26, 14], "label": "大监狱（1F）" },
      { "kind": "room", "rect": [60, 2, 18, 12], "label": "2F" },
      { "kind": "room", "rect": [80, 2, 18, 10], "label": "3F" },
      { "kind": "plaza", "circle": [50, 38, 7], "label": "广场" },
      { "kind": "building", "rect": [6, 42, 18, 9], "label": "食堂" },
      { "kind": "building", "rect": [18, 22, 12, 8], "label": "图书室" },
      { "kind": "building", "rect": [1, 30, 7, 6] },
      { "kind": "rock", "rect": [76, 28, 22, 10], "label": "采掘场" },
      { "kind": "wall", "rect": [74, 50, 3, 10] },
      { "kind": "snow", "rect": [60, 44, 12, 10] }
    ],
    "paths": [
      { "kind": "bridge", "pts": [[50, 68], [50, 58]], "label": "监狱桥" },
      { "kind": "main", "pts": [[50, 58], [50, 45], [50, 38], [50, 26], [48, 18]], "label": "广场—大监狱正路" },
      { "kind": "main", "pts": [[50, 38], [34, 38], [16, 38], [6, 38]], "label": "往食堂/西端建筑", "smooth": false },
      { "kind": "minor", "pts": [[34, 38], [26, 31]], "label": "图书室" },
      { "kind": "main", "pts": [[50, 38], [68, 38], [84, 40]], "label": "往采掘场" },
      { "kind": "minor", "pts": [[68, 38], [70, 50], [80, 54]], "label": "东门" },
      { "kind": "minor", "pts": [[48, 18], [42, 16]], "label": "1F牢房" },
      { "kind": "stairs", "pts": [[48, 18], [54, 12], [62, 10]], "label": "楼梯上2F" },
      { "kind": "minor", "pts": [[62, 10], [76, 10]], "label": "2F走廊" },
      { "kind": "minor", "pts": [[62, 10], [62, 5]], "label": "2F西北牢房" },
      { "kind": "stairs", "pts": [[76, 10], [84, 10]], "label": "楼梯上3F" },
      { "kind": "minor", "pts": [[84, 10], [92, 12], [95, 14]], "label": "3F东侧阳台" },
      { "kind": "minor", "pts": [[50, 58], [58, 58]], "label": "正门（通关后开放）" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "frigit_isle_anchorage", "label": "往入口/停泊所", "lp": "r", "dir": "南" },
      { "kind": "exit", "at": [6, 38], "to": "prison_underground_passage", "label": "逃生路线", "lp": "t", "dir": "西", "note": "第四天夜晚调查广场西端建筑打开逃生路线，进入监狱地下道。" },
      { "kind": "npc", "at": [48, 62], "label": "186666号囚犯（通关后夜晚）", "npc": [5], "lp": "l" },
      { "kind": "hidden", "at": [58, 58], "label": "铁壁坚果（通关后）", "lp": "r", "note": "奥斯瓦尔德全章通关后乘船重返，正门开放后可拿到的隐藏道具；具体位置以正门附近示意。" },
      { "kind": "npc", "at": [56, 41], "label": "广场中央的囚犯们/贝尔", "npc": [2], "lp": "r", "note": "与贝尔交涉拿防寒衣；先观察食堂门外的囚犯得知贝尔的弱点。" },
      { "kind": "npc", "at": [16, 38], "label": "食堂的囚犯们", "npc": [1], "lp": "b", "note": "食堂右上角观察艾美拉德拉入伙；食堂门外的囚犯知道贝尔的弱点。" },
      { "kind": "npc", "at": [26, 31], "label": "图书室的狱卒", "npc": [3], "lp": "l", "note": "图书室北侧第一个书架取「劳动报告」；左上角躲着带火之精灵石的囚犯。" },
      { "kind": "npc", "at": [80, 54], "label": "东门狱卒", "npc": [4], "lp": "r" },
      { "kind": "npc", "at": [42, 16], "label": "开场的囚犯", "npc": [0], "lp": "l", "note": "第1章开场夜晚强夺夺回笔记；2楼楼梯口另有可观察的囚犯（知道劳动报告位置）。" },
      { "kind": "chest", "at": [62, 5], "tr": [0], "label": "黑暗之瓶", "lp": "l" },
      { "kind": "chest", "at": [95, 14], "tr": [1], "label": "醒神李子", "lp": "l" }
    ]
  },
  "prison_underground_passage": {
    "theme": "dungeon",
    "size": [100, 90],
    "note": "自大监狱西端建筑下到地下道，共四层由上到下排列：弧形楼梯→中层→梯子→下层→最底层断头台，西端尽头是典狱长战场，打赢后从西侧出口走到停泊所。",
    "zones": [
      { "kind": "room", "rect": [4, 2, 92, 14], "label": "上层" },
      { "kind": "room", "rect": [4, 20, 92, 16], "label": "中层" },
      { "kind": "room", "rect": [4, 40, 92, 18], "label": "下层" },
      { "kind": "room", "rect": [4, 62, 92, 26], "label": "最底层" },
      { "kind": "room", "rect": [84, 26, 10, 8] },
      { "kind": "room", "rect": [6, 41, 8, 6] },
      { "kind": "room", "rect": [22, 50, 10, 7] },
      { "kind": "room", "rect": [8, 63, 12, 5] },
      { "kind": "room", "rect": [60, 79, 12, 7] },
      { "kind": "wall", "rect": [42, 50, 8, 2] }
    ],
    "paths": [
      { "kind": "main", "pts": [[6, 3], [6, 10], [40, 10], [78, 10]], "label": "入口通道" },
      { "kind": "stairs", "pts": [[78, 10], [88, 14], [74, 24]], "label": "弧形楼梯" },
      { "kind": "minor", "pts": [[74, 24], [86, 27], [90, 31]], "label": "楼梯下右手边牢房" },
      { "kind": "main", "pts": [[74, 24], [56, 28], [34, 28], [18, 28]] },
      { "kind": "ladder", "pts": [[18, 28], [18, 44]], "label": "梯子" },
      { "kind": "minor", "pts": [[18, 44], [10, 44]], "label": "梯子后方牢房" },
      { "kind": "main", "pts": [[18, 44], [36, 48], [52, 48], [78, 48]] },
      { "kind": "hidden", "pts": [[52, 48], [46, 54], [28, 54]], "label": "断楼梯后的隐藏通路（向西）" },
      { "kind": "stairs", "pts": [[78, 48], [86, 56], [86, 66]], "label": "下到最底层" },
      { "kind": "main", "pts": [[86, 66], [60, 70], [46, 70]] },
      { "kind": "hidden", "pts": [[46, 70], [40, 64], [14, 64]], "label": "断头台北侧墙壁隐藏通路" },
      { "kind": "main", "pts": [[46, 70], [40, 78], [34, 80], [10, 80], [4, 76], [2, 72]], "label": "往典狱长与出口" },
      { "kind": "minor", "pts": [[40, 78], [54, 84], [66, 82]], "label": "返回后向东的牢房" }
    ],
    "pois": [
      { "kind": "exit", "at": [6, 3], "to": "frigit_isle", "label": "入口（大监狱西端建筑）", "lp": "r", "dir": "北" },
      { "kind": "danger", "at": [40, 10], "label": "霜冻鼹鼠·冰之精灵", "lp": "b", "note": "敌人都怕火/光，适合先练到4级左右。" },
      { "kind": "stairs", "at": [74, 24], "label": "弧形楼梯下", "lp": "b" },
      { "kind": "chest", "at": [90, 31], "tr": [0], "label": "治愈葡萄", "lp": "l" },
      { "kind": "stairs", "at": [18, 34], "label": "梯子", "lp": "r" },
      { "kind": "chest", "at": [10, 44], "tr": [1], "label": "醒神李子", "lp": "b" },
      { "kind": "landmark", "at": [46, 56], "label": "前景断楼梯", "lp": "r", "note": "画面前景断掉的楼梯挡住了视线，沿它下方向西有隐藏通路。" },
      { "kind": "chest", "at": [28, 54], "tr": [2], "label": "罪人之杖", "lp": "b" },
      { "kind": "landmark", "at": [46, 70], "label": "断头台", "lp": "t" },
      { "kind": "chest", "at": [14, 64], "tr": [3], "label": "古旧的项链", "lp": "r" },
      { "kind": "chest", "at": [66, 82], "tr": [4], "label": "还魂橄榄", "lp": "r" },
      { "kind": "peddler", "at": [34, 77], "label": "神秘的囚犯（商店）", "npc": [0], "lp": "t" },
      { "kind": "save", "at": [22, 80], "label": "存档点", "lp": "t" },
      { "kind": "boss", "at": [10, 80], "label": "典狱长戴维斯", "lp": "b" },
      { "kind": "exit", "at": [2, 72], "to": "frigit_isle_anchorage", "label": "往停泊所", "lp": "r", "dir": "西" }
    ]
  },
  "frigit_isle_anchorage": {
    "theme": "port",
    "size": [100, 70],
    "note": "从地下道出来是东侧入口区，沿悬崖西行到监狱正门，再南下停泊所；两段楼梯、存档点、强制战斗后到小屋，冰舟向西分上下两个码头。南侧码头是通关后自己的船停靠处。",
    "zones": [
      { "kind": "water", "poly": [[0, 38], [8, 42], [12, 62], [30, 64], [44, 60], [60, 64], [100, 62], [100, 70], [0, 70]] },
      { "kind": "cliff", "poly": [[0, 0], [34, 0], [32, 4], [18, 6], [0, 8]] },
      { "kind": "cliff", "poly": [[60, 0], [100, 0], [100, 8], [80, 10], [64, 6]] },
      { "kind": "cliff", "poly": [[14, 22], [32, 22], [34, 34], [16, 36]] },
      { "kind": "snow", "rect": [60, 18, 38, 10], "label": "入口区" },
      { "kind": "snow", "rect": [64, 36, 30, 16], "label": "停泊所" },
      { "kind": "rock", "rect": [54, 46, 8, 4] },
      { "kind": "house", "rect": [12, 47, 8, 6], "label": "小屋" },
      { "kind": "deck", "rect": [12, 57, 6, 3] },
      { "kind": "deck", "rect": [0, 46, 6, 4] },
      { "kind": "deck", "rect": [0, 62, 6, 4] },
      { "kind": "deck", "rect": [46, 62, 8, 4] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 14], [76, 16], [54, 14], [42, 8], [40, 3]], "label": "沿悬崖西行" },
      { "kind": "minor", "pts": [[42, 8], [30, 8]], "label": "监狱正门附近" },
      { "kind": "stairs", "pts": [[54, 14], [62, 24], [66, 32]], "label": "往南进入停泊所" },
      { "kind": "main", "pts": [[66, 32], [56, 34], [50, 36]] },
      { "kind": "stairs", "pts": [[50, 36], [46, 44]], "label": "第一段楼梯" },
      { "kind": "minor", "pts": [[46, 44], [54, 50], [58, 52]], "label": "楼梯南下后靠右（岩石后）" },
      { "kind": "main", "pts": [[46, 44], [34, 46], [26, 52], [20, 56], [16, 58]] },
      { "kind": "stairs", "pts": [[34, 46], [30, 38], [26, 30]], "label": "向北的第二段楼梯" },
      { "kind": "boat", "pts": [[16, 58], [8, 56]], "label": "冰舟航线（西行）" },
      { "kind": "boat", "pts": [[8, 56], [4, 48]], "label": "上方码头" },
      { "kind": "boat", "pts": [[8, 56], [4, 64]], "label": "下方码头" },
      { "kind": "minor", "pts": [[26, 52], [40, 58], [50, 64]], "label": "停泊所码头" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 14], "to": "prison_underground_passage", "label": "监狱地下道出口", "lp": "l", "dir": "东" },
      { "kind": "exit", "at": [40, 3], "to": "frigit_isle", "label": "监狱正门（往大监狱）", "lp": "r", "dir": "北" },
      { "kind": "chest", "at": [30, 8], "tr": [0], "label": "治愈葡萄", "lp": "b" },
      { "kind": "chest", "at": [26, 30], "tr": [1], "label": "魔导坚果", "lp": "l" },
      { "kind": "chest", "at": [58, 52], "tr": [2], "label": "醒神李子", "lp": "r" },
      { "kind": "save", "at": [40, 45], "label": "存档点", "lp": "t" },
      { "kind": "danger", "at": [27, 51], "label": "增援狱卒强制战斗", "lp": "t", "note": "狱卒弱短剑/冰/雷。战后在小屋避难，剧情造出冰舟。" },
      { "kind": "chest", "at": [4, 48], "tr": [3], "label": "冰之精灵石", "lp": "r" },
      { "kind": "landmark", "at": [4, 64], "label": "下方码头（触发剧情）", "lp": "r", "note": "先去上方码头拿冰之精灵石，再来这里，之后无法返回。" },
      { "kind": "ship", "at": [50, 66], "to": "sundering_sea/anchorage_new_delsta", "label": "自己的船（通关后）", "lp": "r", "dir": "南", "note": "奥斯瓦尔德全章通关后，乘自己的船经分隔之海抵达此处。" }
    ]
  },
  "cape_cold": {
    "theme": "village",
    "size": [100, 70],
    "note": "海边小渔村：西南口通往南科尔德凯普雪道，主街向东延伸；广场向北的路通到北侧海滩（晒鱼架在海滩西边）。旅店在入口附近，酒馆在北路西侧，杂货店在主街东段南侧。具体建筑位置为示意。",
    "zones": [
      { "kind": "water", "poly": [[0, 0], [100, 0], [100, 12], [70, 14], [40, 13], [0, 11]] },
      { "kind": "sand", "rect": [4, 13, 92, 10], "label": "北侧海滩" },
      { "kind": "deck", "rect": [8, 13, 8, 3] },
      { "kind": "building", "rect": [26, 31, 12, 7] },
      { "kind": "house", "rect": [48, 29, 9, 7] },
      { "kind": "building", "rect": [12, 43, 12, 7] },
      { "kind": "house", "rect": [2, 27, 11, 7] },
      { "kind": "building", "rect": [62, 53, 12, 7] },
      { "kind": "house", "rect": [80, 23, 10, 7] },
      { "kind": "house", "rect": [70, 34, 9, 7] },
      { "kind": "house", "rect": [84, 34, 10, 7] },
      { "kind": "house", "rect": [48, 56, 10, 6] },
      { "kind": "house", "rect": [30, 58, 9, 6] },
      { "kind": "house", "rect": [86, 51, 10, 6] },
      { "kind": "plaza", "circle": [42, 50, 4] }
    ],
    "paths": [
      { "kind": "main", "pts": [[3, 67], [16, 60], [30, 54], [42, 50], [58, 48], [80, 46], [92, 44]], "label": "主街" },
      { "kind": "main", "pts": [[42, 50], [44, 40], [45, 34], [45, 30], [46, 24]], "label": "往北去海边的路" },
      { "kind": "main", "pts": [[46, 24], [30, 20], [14, 18]], "label": "海滩西侧" },
      { "kind": "main", "pts": [[46, 24], [64, 20], [84, 20]], "label": "海滩东侧" },
      { "kind": "minor", "pts": [[45, 34], [53, 34]], "label": "路右侧民房" },
      { "kind": "minor", "pts": [[44, 40], [38, 38], [30, 40]], "label": "酒馆门口" },
      { "kind": "minor", "pts": [[30, 54], [24, 50]] },
      { "kind": "minor", "pts": [[16, 60], [8, 54], [6, 44], [8, 36]], "label": "西侧民房小路" },
      { "kind": "minor", "pts": [[58, 48], [66, 52]] },
      { "kind": "minor", "pts": [[80, 46], [80, 53]] }
    ],
    "pois": [
      { "kind": "exit", "at": [3, 67], "to": "southern_cape_cold_snows", "label": "往南科尔德凯普雪道", "lp": "r", "dir": "西南" },
      { "kind": "npc", "at": [12, 62], "label": "入口处的男人（夜）", "npc": [0], "lp": "r", "note": "HP低、带重钱袋/金怀表；探听可知杂货店附近木桶上的战争长柄刀。" },
      { "kind": "npc", "at": [22, 56], "label": "旅店南侧的孩子", "npc": [4], "lp": "l" },
      { "kind": "inn", "at": [24, 50], "label": "旅店", "lp": "l" },
      { "kind": "tavern", "at": [38, 38], "label": "酒馆", "lp": "l" },
      { "kind": "npc", "at": [44, 44], "label": "酒馆门口的粗暴村民", "npc": [2], "lp": "r" },
      { "kind": "hidden", "at": [30, 40], "label": "活力石榴（酒馆外·隐藏）", "lp": "b", "note": "海边民房的老妇人透露。" },
      { "kind": "chest", "at": [53, 34], "tr": [0], "label": "2000叶（民房内）", "lp": "r" },
      { "kind": "hidden", "at": [45, 28], "label": "隐藏道具（去海滩路上）", "lp": "l", "note": "旅店南侧的男孩透露。" },
      { "kind": "chest", "at": [14, 18], "tr": [1], "label": "活力石榴", "lp": "b", "note": "北侧海滩西边、晒鱼架后面。" },
      { "kind": "npc", "at": [32, 21], "label": "海滩的渔夫们（日）", "npc": [6], "lp": "b" },
      { "kind": "hidden", "at": [64, 17], "label": "魔导坚果（小船里）", "lp": "t", "note": "退休学者透露海边小船里藏着。" },
      { "kind": "npc", "at": [84, 20], "label": "海边民房的老妇人", "npc": [5], "lp": "t" },
      { "kind": "npc", "at": [8, 36], "label": "退休学者（西侧民房）", "npc": [1], "lp": "r" },
      { "kind": "shop", "at": [66, 52], "label": "杂货店", "npc": [3, 7], "lp": "r" },
      { "kind": "hidden", "at": [80, 53], "label": "战争长柄刀（隐藏）", "lp": "b", "note": "杂货店附近木桶上。" },
      { "kind": "npc", "at": [70, 47], "label": "光的挑战对象", "npc": [8], "lp": "t", "note": "初为人父者、村民、老渔夫可用「挑战」学习技能；初为人父者也是支线「婴儿要出生了」委托人（位置示意）。" }
    ]
  }
});

OT2.addDetail("winterlands", {
  "southern_cape_cold_snows": {
    "theme": "snow",
    "size": [
      100,
      70
    ],
    "note": "从科尔德凯普沿北段道路南下，北段岔路向东通往东科尔德凯普雪道；到中央存档点后继续南行过两座桥去新德尔斯塔平原。第一座桥南端可分去独木舟码头，北航取橄榄，西航穿桥下取长袍。",
    "zones": [
      {
        "kind": "cliff",
        "poly": [
          [
            0,
            0
          ],
          [
            50,
            0
          ],
          [
            44,
            8
          ],
          [
            24,
            14
          ],
          [
            0,
            18
          ]
        ]
      },
      {
        "kind": "water",
        "poly": [
          [
            14,
            45
          ],
          [
            64,
            44
          ],
          [
            64,
            53
          ],
          [
            14,
            52
          ]
        ]
      },
      {
        "kind": "water",
        "poly": [
          [
            62,
            34
          ],
          [
            100,
            32
          ],
          [
            100,
            70
          ],
          [
            60,
            70
          ],
          [
            58,
            56
          ],
          [
            64,
            53
          ],
          [
            64,
            44
          ]
        ]
      },
      {
        "kind": "water",
        "poly": [
          [
            30,
            52
          ],
          [
            35,
            52
          ],
          [
            36,
            70
          ],
          [
            29,
            70
          ]
        ]
      },
      {
        "kind": "forest",
        "rect": [
          2,
          56,
          22,
          12
        ]
      },
      {
        "kind": "deck",
        "rect": [
          59,
          56,
          5,
          3
        ]
      },
      {
        "kind": "deck",
        "rect": [
          74,
          40,
          5,
          3
        ]
      },
      {
        "kind": "deck",
        "rect": [
          23,
          45,
          6,
          2
        ]
      }
    ],
    "paths": [
      {
        "kind": "main",
        "pts": [
          [
            94,
            4
          ],
          [
            82,
            10
          ],
          [
            70,
            18
          ],
          [
            58,
            26
          ],
          [
            52,
            30
          ]
        ],
        "label": "村口至中央存档点",
        "route": {
          "from": "科尔德凯普村口",
          "to": "中央存档点",
          "steps": [
            "从村口沿北段主路离开",
            "经过奥斯瓦尔德所在一带",
            "到中央存档点确认方向"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ]
        }
      },
      {
        "kind": "main",
        "pts": [
          [
            70,
            18
          ],
          [
            84,
            22
          ],
          [
            98,
            26
          ]
        ],
        "label": "东科尔德凯普雪道支路",
        "route": {
          "from": "北段岔路 A",
          "to": "东科尔德凯普雪道出口",
          "steps": [
            "在北段道路的分岔向东",
            "沿支路进入东科尔德凯普雪道"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ],
          "caution": "不要把东行陆路出口与下方独木舟水路混淆"
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            52,
            30
          ],
          [
            44,
            30
          ]
        ],
        "label": "存档点往西取荔枝",
        "route": {
          "from": "中央存档点",
          "to": "底力回复荔枝宝箱",
          "steps": [
            "以存档点为起点向西走一小段",
            "取箱后回到存档点"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ]
        }
      },
      {
        "kind": "main",
        "pts": [
          [
            52,
            30
          ],
          [
            48,
            38
          ],
          [
            46,
            44
          ]
        ],
        "label": "存档点至第一座桥",
        "route": {
          "from": "中央存档点",
          "to": "第一座桥北端",
          "steps": [
            "从存档点沿南下主路走",
            "到第一座桥前确认仍在陆路上"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ]
        }
      },
      {
        "kind": "bridge",
        "pts": [
          [
            46,
            44
          ],
          [
            46,
            54
          ]
        ],
        "label": "步行过第一座桥",
        "route": {
          "from": "第一座桥北端",
          "to": "桥南端岔路 B",
          "steps": [
            "从桥面向南通过第一座桥",
            "到桥南端分岔处"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ],
          "caution": "桥面与西行独木舟航线分层，交叉处不能换层"
        }
      },
      {
        "kind": "main",
        "pts": [
          [
            46,
            54
          ],
          [
            42,
            56
          ],
          [
            37,
            58
          ]
        ],
        "label": "两桥之间的连接路",
        "route": {
          "from": "岔路 B",
          "to": "第二座桥东端",
          "steps": [
            "沿两座桥之间的短路向西南走",
            "途中另有向南取李子的分支"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ]
        }
      },
      {
        "kind": "bridge",
        "pts": [
          [
            37,
            58
          ],
          [
            28,
            61
          ]
        ],
        "label": "步行过第二座桥",
        "route": {
          "from": "第二座桥东端",
          "to": "第二座桥西端",
          "steps": [
            "沿桥面通过第二座桥",
            "向新德尔斯塔平原方向继续"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ]
        }
      },
      {
        "kind": "main",
        "pts": [
          [
            28,
            61
          ],
          [
            22,
            68
          ]
        ],
        "label": "第二座桥至平原出口",
        "route": {
          "from": "第二座桥西端",
          "to": "新德尔斯塔平原出口",
          "steps": [
            "离开第二座桥后沿主路继续",
            "从南侧出口进入新德尔斯塔平原"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            42,
            56
          ],
          [
            44,
            64
          ]
        ],
        "label": "两桥间向南取李子",
        "route": {
          "from": "两桥之间的短路",
          "to": "醒神李子（大）宝箱",
          "steps": [
            "在两座桥之间转向南边小空地",
            "取箱后返回两桥之间的路"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            46,
            54
          ],
          [
            54,
            57
          ],
          [
            62,
            58
          ]
        ],
        "label": "陆路至独木舟码头",
        "route": {
          "from": "岔路 B",
          "to": "独木舟码头 C",
          "steps": [
            "从第一座桥南端分出的小路走向水边",
            "到码头后才能切换为独木舟"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ],
          "caution": "若只去平原，不需要走这段码头支路"
        }
      },
      {
        "kind": "boat",
        "pts": [
          [
            62,
            58
          ],
          [
            70,
            50
          ],
          [
            76,
            41
          ]
        ],
        "label": "码头北行取橄榄",
        "route": {
          "from": "独木舟码头 C",
          "to": "北侧码头／还魂橄榄宝箱",
          "steps": [
            "从码头乘独木舟向北",
            "在另一处码头上岸",
            "取还魂橄榄（大）"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ],
          "mode": "乘独木舟"
        }
      },
      {
        "kind": "boat",
        "pts": [
          [
            62,
            58
          ],
          [
            56,
            49
          ],
          [
            46,
            49
          ],
          [
            28,
            48
          ]
        ],
        "label": "码头西行穿桥取长袍",
        "route": {
          "from": "独木舟码头 C",
          "to": "桥西侧第三个码头",
          "steps": [
            "从同一码头乘舟向西绕行",
            "沿水面穿过桥下",
            "在第三个码头上岸取朝圣者长袍"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
            },
            {
              "label": "NightlyGamingBinge · 雪道宝箱参照",
              "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
            }
          ],
          "mode": "乘独木舟",
          "caution": "桥下航线不与桥面相接，需要从码头上下船"
        }
      }
    ],
    "pois": [
      {
        "kind": "exit",
        "at": [
          94,
          4
        ],
        "to": "cape_cold",
        "label": "往科尔德凯普",
        "lp": "l",
        "dir": "东北"
      },
      {
        "kind": "exit",
        "at": [
          98,
          26
        ],
        "to": "eastern_cape_cold_snows",
        "label": "往东科尔德凯普雪道",
        "lp": "l",
        "dir": "东"
      },
      {
        "kind": "exit",
        "at": [
          22,
          68
        ],
        "to": "brightlands/nd_flats",
        "label": "往新德尔斯塔平原",
        "lp": "r",
        "dir": "南"
      },
      {
        "kind": "npc",
        "at": [
          74,
          15
        ],
        "label": "奥斯瓦尔德（非开局时）",
        "npc": [
          0
        ],
        "lp": "r"
      },
      {
        "kind": "npc",
        "at": [
          60,
          25
        ],
        "label": "阿尔（奥斯瓦尔德开局）",
        "npc": [
          1
        ],
        "lp": "t",
        "note": "支线「旅人的行囊」；夜晚雪道上还有面色阴沉的男人。"
      },
      {
        "kind": "save",
        "at": [
          52,
          30
        ],
        "label": "存档点",
        "lp": "r"
      },
      {
        "kind": "chest",
        "at": [
          44,
          30
        ],
        "tr": [
          0
        ],
        "label": "底力回复荔枝",
        "lp": "l"
      },
      {
        "kind": "chest",
        "at": [
          44,
          64
        ],
        "tr": [
          1
        ],
        "label": "醒神李子（大）",
        "lp": "r"
      },
      {
        "kind": "landmark",
        "at": [
          62,
          58
        ],
        "label": "独木舟码头",
        "lp": "b"
      },
      {
        "kind": "chest",
        "at": [
          76,
          41
        ],
        "tr": [
          2
        ],
        "label": "还魂橄榄（大）",
        "lp": "r",
        "note": "乘独木舟向北，在另一处码头上岸。"
      },
      {
        "kind": "chest",
        "at": [
          26,
          48
        ],
        "tr": [
          3
        ],
        "label": "朝圣者长袍",
        "lp": "t",
        "note": "同一水域向西，绕到桥下的第三个码头。"
      }
    ],
    "sources": [
      {
        "label": "ArrPeeGeeZ · 南科尔德凯普雪道",
        "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_24.html"
      },
      {
        "label": "NightlyGamingBinge · 雪道宝箱参照",
        "url": "https://nightlygamingbinge.com/octopath-traveler-ii-winterlands-southern-cape-cold-snows/"
      }
    ],
    "junctions": [
      {
        "label": "A",
        "at": [
          70,
          18
        ],
        "roads": [
          0,
          1
        ],
        "note": "村口与存档点之间的陆路分岔：东去相邻雪道，另一边仍通中央存档点。"
      },
      {
        "label": "B",
        "at": [
          46,
          54
        ],
        "roads": [
          4,
          5,
          9
        ],
        "note": "第一座桥南端：沿陆路去第二座桥，或走支路到独木舟码头。"
      },
      {
        "label": "C",
        "at": [
          62,
          58
        ],
        "roads": [
          9,
          10,
          11
        ],
        "note": "独木舟码头：北行取橄榄，西行绕桥下取长袍。",
        "labelAt": [
          65,
          62
        ]
      }
    ],
    "crossings": [
      {
        "at": [
          46,
          49
        ],
        "labelAt": [
          33,
          39
        ],
        "over": 4,
        "under": 11,
        "note": "桥面／桥下不相通"
      }
    ]
  },
  "eastern_cape_cold_snows": {
    "theme": "snow",
    "size": [
      100,
      70
    ],
    "note": "四通八达的中继雪道：西接南科尔德凯普雪道，西北上山到西温特布鲁姆雪道，过桥后东去无赖据点、南下纹之地。存档点居中，西北路标旁有行商；桥东有码头可乘船直达无赖据点，西南水域可划独木舟。尖锋匕首的具体位置攻略未写明，图中为示意。",
    "zones": [
      {
        "kind": "water",
        "poly": [
          [
            62,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            24
          ],
          [
            82,
            30
          ],
          [
            71,
            28
          ],
          [
            70,
            70
          ],
          [
            62,
            70
          ],
          [
            63,
            30
          ]
        ]
      },
      {
        "kind": "water",
        "poly": [
          [
            16,
            52
          ],
          [
            56,
            50
          ],
          [
            63,
            54
          ],
          [
            63,
            62
          ],
          [
            18,
            66
          ]
        ]
      },
      {
        "kind": "cliff",
        "poly": [
          [
            0,
            0
          ],
          [
            4,
            0
          ],
          [
            12,
            10
          ],
          [
            22,
            20
          ],
          [
            12,
            26
          ],
          [
            0,
            22
          ]
        ]
      },
      {
        "kind": "wall",
        "rect": [
          36,
          43,
          9,
          6
        ]
      },
      {
        "kind": "forest",
        "rect": [
          84,
          44,
          14,
          16
        ]
      },
      {
        "kind": "deck",
        "rect": [
          74,
          29,
          5,
          3
        ]
      },
      {
        "kind": "deck",
        "rect": [
          57,
          51,
          5,
          3
        ]
      }
    ],
    "paths": [
      {
        "kind": "main",
        "pts": [
          [
            2,
            44
          ],
          [
            20,
            42
          ],
          [
            36,
            40
          ],
          [
            44,
            39
          ],
          [
            50,
            38
          ],
          [
            62,
            36
          ]
        ],
        "label": "往南科尔德凯普雪道"
      },
      {
        "kind": "bridge",
        "pts": [
          [
            62,
            36
          ],
          [
            71,
            36
          ]
        ],
        "label": "桥"
      },
      {
        "kind": "main",
        "pts": [
          [
            71,
            36
          ],
          [
            78,
            36
          ],
          [
            86,
            36
          ],
          [
            98,
            36
          ]
        ],
        "label": "往无赖据点（门口有无赖挡路）"
      },
      {
        "kind": "main",
        "pts": [
          [
            36,
            40
          ],
          [
            28,
            26
          ],
          [
            16,
            14
          ],
          [
            6,
            4
          ]
        ],
        "label": "往西温特布鲁姆雪道"
      },
      {
        "kind": "main",
        "pts": [
          [
            78,
            36
          ],
          [
            80,
            52
          ],
          [
            80,
            68
          ]
        ],
        "label": "往东弗雷姆丘奇山道"
      },
      {
        "kind": "minor",
        "pts": [
          [
            44,
            39
          ],
          [
            42,
            33
          ]
        ],
        "label": "路标"
      },
      {
        "kind": "minor",
        "pts": [
          [
            44,
            39
          ],
          [
            40,
            45
          ]
        ],
        "label": "存档点西侧小围栏"
      },
      {
        "kind": "minor",
        "pts": [
          [
            50,
            38
          ],
          [
            54,
            30
          ],
          [
            56,
            22
          ]
        ],
        "label": "存档点东北小路"
      },
      {
        "kind": "minor",
        "pts": [
          [
            28,
            26
          ],
          [
            38,
            20
          ]
        ]
      },
      {
        "kind": "minor",
        "pts": [
          [
            71,
            36
          ],
          [
            76,
            29
          ]
        ],
        "label": "过桥向东的码头"
      },
      {
        "kind": "boat",
        "pts": [
          [
            76,
            29
          ],
          [
            88,
            20
          ],
          [
            98,
            16
          ]
        ],
        "label": "乘船直达无赖据点"
      },
      {
        "kind": "minor",
        "pts": [
          [
            50,
            38
          ],
          [
            56,
            46
          ],
          [
            60,
            52
          ]
        ],
        "label": "独木舟码头"
      },
      {
        "kind": "boat",
        "pts": [
          [
            60,
            53
          ],
          [
            40,
            58
          ],
          [
            20,
            58
          ]
        ],
        "label": "乘独木舟向西"
      }
    ],
    "pois": [
      {
        "kind": "exit",
        "at": [
          2,
          44
        ],
        "to": "southern_cape_cold_snows",
        "label": "往南科尔德凯普雪道",
        "lp": "r",
        "dir": "西"
      },
      {
        "kind": "exit",
        "at": [
          6,
          4
        ],
        "to": "western_winterbloom_snows",
        "label": "往西温特布鲁姆雪道",
        "lp": "r",
        "dir": "西北"
      },
      {
        "kind": "exit",
        "at": [
          98,
          36
        ],
        "to": "ruffians_hideout",
        "label": "无赖据点",
        "lp": "l",
        "dir": "东"
      },
      {
        "kind": "exit",
        "at": [
          80,
          68
        ],
        "to": "crestlands/eastern_flamechurch_pass",
        "label": "往东弗雷姆丘奇山道",
        "lp": "l",
        "dir": "南"
      },
      {
        "kind": "ship",
        "at": [
          98,
          16
        ],
        "to": "ruffians_hideout",
        "label": "乘船直达无赖据点",
        "lp": "l",
        "dir": "东"
      },
      {
        "kind": "danger",
        "at": [
          82,
          36
        ],
        "label": "门口的无赖",
        "lp": "b",
        "note": "从存档点往东会被他挡路，可挑战/偷袭；或改走码头乘船进入。"
      },
      {
        "kind": "landmark",
        "at": [
          76,
          29
        ],
        "label": "码头",
        "lp": "b"
      },
      {
        "kind": "save",
        "at": [
          50,
          38
        ],
        "label": "存档点",
        "lp": "b"
      },
      {
        "kind": "peddler",
        "at": [
          42,
          33
        ],
        "label": "行商（路标旁）",
        "npc": [
          0
        ],
        "lp": "t",
        "note": "支线「无赖的据点」委托人。"
      },
      {
        "kind": "chest",
        "at": [
          40,
          45
        ],
        "tr": [
          2
        ],
        "label": "600叶",
        "lp": "b"
      },
      {
        "kind": "chest",
        "at": [
          56,
          22
        ],
        "tr": [
          1
        ],
        "label": "冰之精灵石",
        "lp": "r"
      },
      {
        "kind": "chest",
        "at": [
          38,
          20
        ],
        "tr": [
          3
        ],
        "label": "尖锋匕首",
        "lp": "r",
        "note": "攻略只写「雪道内宝箱」，具体位置未确认，此处为示意。"
      },
      {
        "kind": "landmark",
        "at": [
          60,
          53
        ],
        "label": "独木舟",
        "lp": "r"
      },
      {
        "kind": "chest",
        "at": [
          20,
          58
        ],
        "tr": [
          0
        ],
        "label": "毛皮帽子",
        "lp": "t"
      },
      {
        "kind": "landmark",
        "navigation": "signpost",
        "at": [
          44,
          35
        ],
        "label": "路标（存档点西北）",
        "lp": "l",
        "note": "存档点西北的实体路牌，旁边是行商；去无赖据点应从存档点向东。相对位置示意。"
      }
    ],
    "sources": [
      {
        "label": "ArrPeeGeeZ · 路牌旁行商",
        "url": "https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-side_14.html"
      }
    ]
  },
  "ruffians_hideout": {
    "theme": "cave",
    "size": [100, 70],
    "note": "西口进入（门口无赖挡路），中央是一片水域：南岸码头乘船到北岸，北岸往西是冰隧道，往北是无赖头目三人组；南岸向东进冰洞，存档点向东南一路走到区域另一端。也可从雪道码头乘船由西北水道直接进入。",
    "zones": [
      { "kind": "water", "poly": [[36, 26], [66, 22], [74, 34], [70, 54], [50, 58], [38, 50]] },
      { "kind": "water", "poly": [[0, 2], [30, 4], [48, 10], [54, 20], [50, 22], [44, 16], [28, 10], [0, 10]] },
      { "kind": "room", "rect": [16, 13, 30, 7] },
      { "kind": "room", "rect": [54, 2, 26, 13] },
      { "kind": "room", "rect": [80, 30, 18, 16] },
      { "kind": "ice", "rect": [6, 30, 26, 22] },
      { "kind": "rock", "rect": [0, 52, 26, 18] },
      { "kind": "deck", "rect": [42, 57, 8, 3] },
      { "kind": "deck", "rect": [49, 20, 6, 3] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [13, 41], [20, 42], [34, 50], [46, 58]], "label": "入口→南岸码头" },
      { "kind": "boat", "pts": [[46, 58], [50, 40], [52, 23]], "label": "乘船到北侧" },
      { "kind": "main", "pts": [[52, 22], [58, 14], [62, 10]], "label": "往无赖头目" },
      { "kind": "minor", "pts": [[62, 10], [72, 8]], "label": "击败三人组后开启" },
      { "kind": "minor", "pts": [[52, 22], [38, 18], [22, 16]], "label": "码头往西的冰隧道" },
      { "kind": "main", "pts": [[46, 58], [70, 56], [84, 48], [90, 40]], "label": "往东侧冰洞" },
      { "kind": "minor", "pts": [[20, 42], [30, 58], [56, 66], [92, 66]], "label": "存档点向东南走到另一端" },
      { "kind": "minor", "pts": [[20, 42], [14, 50]], "label": "存档点西南" },
      { "kind": "boat", "pts": [[2, 6], [14, 7], [30, 8], [46, 14], [52, 22]], "label": "雪道码头直达的水路" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "eastern_cape_cold_snows", "label": "雪道入口", "lp": "r", "dir": "西" },
      { "kind": "ship", "at": [2, 6], "to": "eastern_cape_cold_snows", "label": "乘船入口（雪道码头）", "lp": "r", "dir": "西" },
      { "kind": "npc", "at": [13, 41], "label": "门口的无赖", "npc": [0], "lp": "b" },
      { "kind": "save", "at": [20, 42], "label": "存档点", "lp": "t" },
      { "kind": "chest", "at": [14, 50], "tr": [0], "label": "黑暗之瓶", "lp": "b", "note": "存档点西南近处（另一说在东侧）。" },
      { "kind": "chest", "at": [92, 66], "tr": [1], "label": "1000叶", "lp": "l" },
      { "kind": "chest", "at": [90, 40], "tr": [2], "label": "异端大剑（冰洞内）", "lp": "l" },
      { "kind": "landmark", "at": [46, 58], "label": "码头", "lp": "b" },
      { "kind": "landmark", "at": [52, 22], "label": "北岸码头", "lp": "r" },
      { "kind": "chest", "at": [22, 16], "tr": [3], "label": "还魂橄榄（大）", "lp": "b" },
      { "kind": "boss", "at": [62, 10], "label": "无赖头目＋无赖×2", "lp": "l" },
      { "kind": "chest", "at": [72, 8], "tr": [4], "label": "风之装束", "lp": "r" }
    ]
  },
  "western_winterbloom_snows": {
    "theme": "snow",
    "size": [100, 70],
    "note": "东南口进入后主路向北，在石桥东端分岔：东去温特布鲁姆，西过石桥上山到西北的学者公会。从右侧斜坡可下到结冰湖面：沿桥下往东是宝箱，钻进左侧桥下一路向北，桥北视觉死角就是学者王祭坛入口。",
    "zones": [
      { "kind": "ice", "poly": [[30, 16], [70, 14], [76, 30], [72, 56], [50, 62], [30, 58], [26, 36]], "label": "结冰的湖面" },
      { "kind": "cliff", "poly": [[0, 0], [34, 0], [30, 10], [18, 24], [0, 26]] },
      { "kind": "building", "rect": [4, 4, 12, 8] },
      { "kind": "rock", "rect": [26, 3, 6, 6] },
      { "kind": "cliff", "poly": [[84, 0], [100, 0], [100, 18], [90, 14]] },
      { "kind": "forest", "rect": [0, 46, 22, 22] }
    ],
    "paths": [
      { "kind": "main", "pts": [[92, 68], [86, 58], [80, 46], [78, 40]], "label": "入口（往东科尔德凯普）" },
      { "kind": "bridge", "pts": [[78, 40], [30, 40]], "label": "石桥" },
      { "kind": "main", "pts": [[30, 40], [20, 36], [14, 26], [10, 14]], "label": "上山往学者公会" },
      { "kind": "main", "pts": [[78, 40], [84, 30], [98, 24]], "label": "往温特布鲁姆" },
      { "kind": "stairs", "pts": [[86, 58], [76, 58], [68, 54]], "label": "右侧斜坡下到湖面" },
      { "kind": "minor", "pts": [[68, 54], [58, 48], [52, 44]], "label": "湖面向北" },
      { "kind": "minor", "pts": [[58, 48], [66, 44], [72, 44]], "label": "沿桥下一直往东" },
      { "kind": "hidden", "pts": [[52, 44], [44, 42], [42, 34], [44, 24]], "label": "钻进左侧桥下继续向北" },
      { "kind": "minor", "pts": [[44, 24], [48, 12], [50, 4]], "label": "祭坛入口" },
      { "kind": "stairs", "pts": [[48, 12], [40, 10], [34, 8]], "label": "离开祭坛往左爬坡绕到岩石后" },
      { "kind": "stairs", "pts": [[14, 26], [22, 26], [24, 19]], "label": "公会下来后往右爬楼梯" }
    ],
    "pois": [
      { "kind": "exit", "at": [92, 68], "to": "eastern_cape_cold_snows", "label": "往东科尔德凯普雪道", "lp": "l", "dir": "东南" },
      { "kind": "exit", "at": [98, 24], "to": "winterbloom", "label": "往温特布鲁姆", "lp": "l", "dir": "东" },
      { "kind": "exit", "at": [50, 4], "to": "altar_of_the_scholarking", "label": "学者王祭坛入口", "lp": "r", "dir": "北" },
      { "kind": "guild", "at": [10, 14], "label": "学者公会（会长）", "npc": [0], "lp": "r", "note": "熔炉旁头顶盾牌图标的男人，对话即得学者职业证。" },
      { "kind": "chest", "at": [24, 19], "tr": [2], "label": "扩散剂", "lp": "r" },
      { "kind": "chest", "at": [33, 8], "tr": [1], "label": "游隼戒指", "lp": "b", "note": "不走上坡，继续向左爬坡绕到岩石后；从入口北望能看到。" },
      { "kind": "chest", "at": [72, 44], "tr": [0], "label": "冰之精灵石（大）", "lp": "r" },
      { "kind": "landmark", "at": [44, 24], "label": "桥北视觉死角", "lp": "r", "note": "湖面上向北走时不要从斜坡上岸，钻进左侧桥下继续向北即到。" }
    ]
  },
  "altar_of_the_scholarking": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "藏在西温特布鲁姆雪道桥下的小祭坛：入口向北一条直道，登上石阶进入大厅，中央是学者王雕像。内部细节为示意。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [30, 70], [0, 70]] },
      { "kind": "cliff", "poly": [[70, 0], [100, 0], [100, 70], [70, 70]] },
      { "kind": "room", "rect": [32, 4, 36, 24] },
      { "kind": "room", "rect": [44, 28, 12, 40] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 56]], "label": "桥下入口通道" },
      { "kind": "stairs", "pts": [[50, 56], [50, 44]], "label": "石阶" },
      { "kind": "main", "pts": [[50, 44], [50, 26]] },
      { "kind": "main", "pts": [[50, 26], [50, 20], [50, 14]], "label": "祭坛大厅" },
      { "kind": "minor", "pts": [[50, 20], [38, 18]] },
      { "kind": "minor", "pts": [[50, 20], [62, 18]] }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "western_winterbloom_snows", "label": "往西温特布鲁姆雪道", "lp": "r", "dir": "南" },
      { "kind": "landmark", "at": [50, 60], "label": "桥北死角的入口", "lp": "l" },
      { "kind": "stairs", "at": [50, 50], "label": "石阶", "lp": "r" },
      { "kind": "landmark", "at": [38, 18], "label": "火盆", "lp": "l" },
      { "kind": "landmark", "at": [62, 18], "label": "火盆", "lp": "r" },
      { "kind": "shrine", "at": [50, 12], "label": "学者王像（传授 Teach）", "lp": "t", "note": "带奥斯瓦尔德调查中央雕像，学会EX技能「传授」。" }
    ]
  }
});

OT2.addDetail("winterlands", {
  "winterbloom": {
    "theme": "town",
    "size": [100, 70],
    "note": "西口进镇，镇口酒馆在路北；主街东西贯穿，中段岔路口向北登台阶，经旅店到北口（往盗贼区），岔路向西北是罗莎宅邸与药草园。东侧有道具店、插着剑的田地、东北的「给儿子的礼物」民房（3个宝箱，需放倒门口的父亲）和发明家奥德利家；具体坐标为示意。",
    "zones": [
      { "kind": "building", "rect": [2, 2, 20, 10], "label": "罗莎宅邸" },
      { "kind": "garden", "rect": [24, 2, 16, 9], "label": "药草园" },
      { "kind": "building", "rect": [6, 32, 12, 8] },
      { "kind": "building", "rect": [44, 20, 12, 8] },
      { "kind": "building", "rect": [56, 50, 12, 7] },
      { "kind": "farm", "rect": [72, 50, 12, 10] },
      { "kind": "house", "rect": [66, 18, 16, 8] },
      { "kind": "house", "rect": [84, 32, 12, 8] },
      { "kind": "house", "rect": [19, 54, 10, 7] },
      { "kind": "house", "rect": [32, 58, 8, 6] },
      { "kind": "house", "rect": [88, 56, 8, 6] },
      { "kind": "house", "rect": [24, 30, 8, 6] },
      { "kind": "snow", "rect": [76, 2, 22, 12] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 52], [12, 48], [20, 46], [40, 44], [60, 44], [80, 46], [86, 47], [92, 48]], "label": "主街" },
      { "kind": "stairs", "pts": [[40, 44], [40, 32]], "label": "岔路口北侧台阶" },
      { "kind": "main", "pts": [[40, 32], [40, 22], [58, 14], [70, 3]], "label": "北口（往盗贼区）" },
      { "kind": "minor", "pts": [[40, 22], [26, 15], [14, 13]], "label": "往罗莎宅邸/药草园" },
      { "kind": "minor", "pts": [[14, 13], [8, 13]] },
      { "kind": "minor", "pts": [[12, 48], [12, 42]], "label": "镇口酒馆" },
      { "kind": "minor", "pts": [[60, 44], [64, 34], [72, 29], [80, 29]], "label": "东北民房（给儿子的礼物）" },
      { "kind": "minor", "pts": [[60, 44], [62, 49]] },
      { "kind": "minor", "pts": [[86, 47], [88, 41]], "label": "奥德利家" },
      { "kind": "hidden", "pts": [[92, 48], [97, 40], [96, 30], [91, 28]], "label": "绕到奥德利家后方" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 52], "to": "western_winterbloom_snows", "label": "西口", "lp": "r", "dir": "西" },
      { "kind": "exit", "at": [70, 3], "to": "winterbloom_thieves_quarter", "label": "往盗贼区（北口）", "lp": "r", "dir": "东北" },
      { "kind": "tavern", "at": [12, 42], "label": "镇口酒馆", "npc": [6], "lp": "t", "note": "卡丝蒂、索洛奈第2章都在这里「听故事」触发。" },
      { "kind": "hidden", "at": [20, 43], "label": "石榴叶（酒馆外·隐藏）", "lp": "r", "note": "酒馆的老人透露。" },
      { "kind": "chest", "at": [8, 13], "tr": [0], "label": "增强剂", "lp": "b", "note": "罗莎宅邸2楼左侧。" },
      { "kind": "npc", "at": [62, 10], "label": "持枪男子（日）", "npc": [0], "lp": "l" },
      { "kind": "inn", "at": [43, 27], "label": "旅店", "lp": "r" },
      { "kind": "npc", "at": [43, 36], "label": "旅店下方台阶的NPC", "npc": [4], "lp": "r" },
      { "kind": "npc", "at": [37, 38], "label": "台阶前的男人（日）", "npc": [3], "lp": "l" },
      { "kind": "npc", "at": [44, 47], "label": "岔路口的士兵（夜）", "npc": [1], "lp": "b" },
      { "kind": "npc", "at": [50, 44], "label": "岔路口的男子（夜）", "npc": [2], "lp": "t" },
      { "kind": "hidden", "at": [56, 45], "label": "银剑（隐藏）", "lp": "r", "note": "探听/收买岔路口的士兵（夜）可知，在其右侧。" },      { "kind": "npc", "at": [65, 32], "label": "门口的父亲", "npc": [7], "lp": "l", "note": "支线「给儿子的礼物」委托人；夜间让他气绝/睡着才能进屋开宝箱。" },
      { "kind": "chest", "at": [72, 29], "tr": [1], "label": "150叶", "lp": "b" },
      { "kind": "chest", "at": [80, 29], "tr": [2], "label": "老旧的盔甲", "lp": "t" },
      { "kind": "chest", "at": [76, 31], "tr": [3], "label": "治愈葡萄", "lp": "b", "note": "与上面两个宝箱同在这间屋内。" },
      { "kind": "item", "at": [62, 49], "label": "道具店", "npc": [5], "lp": "b" },
      { "kind": "landmark", "at": [76, 48], "label": "剑与石（田里的剑）", "lp": "b", "note": "道具店旁困扰的女子，支线「剑与石」。" },
      { "kind": "house", "at": [88, 41], "label": "奥德利家（留声机）", "lp": "l", "note": "帕尔提提欧带队来镇东侧触发「商机的气息：温特布鲁姆篇」。" },
      { "kind": "chest", "at": [91, 28], "tr": [4], "label": "冰之精灵石（大）", "lp": "b" }
    ]
  },
  "winterbloom_thieves_quarter": {
    "theme": "town",
    "size": [100, 70],
    "note": "西南口连温特布鲁姆，主街向东北延伸到雪兔帮总部（后屋通雪兔巢穴）。广场向西北是破旧酒馆（Boss普拉克一伙），向北是盗贼聚集的北侧建筑；武具店在主街南侧。宝箱的具体位置攻略未写明，为示意。",
    "zones": [
      { "kind": "building", "rect": [4, 10, 16, 11] },
      { "kind": "building", "rect": [36, 12, 18, 12] },
      { "kind": "building", "rect": [54, 52, 14, 8] },
      { "kind": "building", "rect": [78, 18, 18, 14] },
      { "kind": "plaza", "circle": [38, 50, 5], "label": "广场" },
      { "kind": "house", "rect": [6, 30, 8, 6] },
      { "kind": "house", "rect": [24, 58, 10, 6] },
      { "kind": "house", "rect": [84, 46, 10, 7] },
      { "kind": "house", "rect": [58, 26, 6, 6] },
      { "kind": "snow", "rect": [0, 40, 16, 10] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [18, 58], [38, 50], [58, 46], [72, 42], [84, 38]], "label": "主街" },
      { "kind": "minor", "pts": [[38, 50], [28, 36], [18, 24]], "label": "往西北的破旧酒馆" },
      { "kind": "minor", "pts": [[18, 24], [12, 21]] },
      { "kind": "minor", "pts": [[38, 50], [44, 38], [45, 26]], "label": "北侧建筑" },
      { "kind": "minor", "pts": [[45, 26], [52, 28]] },
      { "kind": "minor", "pts": [[58, 46], [64, 34], [66, 22]], "label": "小巷" },
      { "kind": "minor", "pts": [[58, 46], [60, 51], [72, 52]], "label": "武具店前" },
      { "kind": "hidden", "pts": [[84, 38], [90, 32], [98, 30]], "label": "总部1楼后屋→雪兔巢穴" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "winterbloom", "label": "往温特布鲁姆", "lp": "r", "dir": "西南" },
      { "kind": "npc", "at": [18, 56], "label": "入口的盗贼二人组（夜）", "npc": [5], "lp": "t" },
      { "kind": "tavern", "at": [18, 24], "label": "破旧酒馆", "lp": "b", "note": "卡丝蒂第2章、索洛奈第2章的剧情地点；进门前存档。" },
      { "kind": "boss", "at": [12, 21], "label": "普拉克、米克、马克", "npc": [7], "lp": "t" },
      { "kind": "npc", "at": [45, 25], "label": "北侧建筑里的盗贼/女人（夜）", "npc": [3, 4], "lp": "t" },
      { "kind": "npc", "at": [52, 28], "label": "右边的盗贼（夜）", "npc": [1], "lp": "r", "note": "北侧建筑外右边，带小鸦剑。" },
      { "kind": "npc", "at": [42, 36], "label": "左侧盗贼（夜）", "npc": [2], "lp": "l", "note": "带毒刃。" },
      { "kind": "chest", "at": [66, 22], "tr": [0], "label": "底力回复荔枝（大）", "lp": "r", "note": "攻略只写「盗贼区内宝箱」，位置为示意。" },
      { "kind": "weapon", "at": [60, 51], "label": "武具店", "npc": [0, 6], "lp": "b" },
      { "kind": "hidden", "at": [72, 52], "label": "尖刺盾（隐藏）", "lp": "r", "note": "右边的盗贼透露，在武具店外。" },
      { "kind": "landmark", "at": [84, 38], "label": "雪兔帮总部", "lp": "b", "note": "夜晚偷袭门口看守后进入，调查1楼后屋。" },
      { "kind": "exit", "at": [98, 30], "to": "snowhares_den", "label": "雪兔巢穴（总部后屋）", "lp": "l", "dir": "东" }
    ]
  },
  "snowhares_den": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "从西北角进入，疲惫女子处分两条路：南线陆路一直走可速通到东端存档点；东侧下梯子乘船走水路可拿全部宝箱（向南的拱门、东侧码头北边的隐藏水道、最东南角）。Boss在东端存档点后。",
    "zones": [
      { "kind": "room", "rect": [2, 2, 28, 14] },
      { "kind": "water", "poly": [[30, 17], [78, 17], [78, 26], [30, 26]] },
      { "kind": "water", "poly": [[39, 17], [47, 17], [47, 58], [39, 58]] },
      { "kind": "water", "poly": [[39, 51], [90, 51], [99, 58], [99, 68], [86, 68], [86, 58], [39, 58]] },
      { "kind": "water", "poly": [[63, 3], [71, 3], [74, 17], [66, 17]] },
      { "kind": "room", "rect": [48, 27, 8, 6] },
      { "kind": "room", "rect": [52, 1, 10, 6] },
      { "kind": "room", "rect": [76, 4, 12, 10] },
      { "kind": "room", "rect": [84, 28, 15, 14] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 4], [8, 10], [16, 12]] },
      { "kind": "minor", "pts": [[16, 12], [14, 22]], "label": "疲惫女子南侧" },
      { "kind": "main", "pts": [[16, 12], [20, 30], [22, 46], [28, 62], [56, 66], [76, 64]], "label": "南线（速通）" },
      { "kind": "bridge", "pts": [[76, 64], [78, 50]] },
      { "kind": "main", "pts": [[78, 50], [84, 42], [92, 36]], "label": "往贝尔戈米" },
      { "kind": "minor", "pts": [[16, 12], [30, 12]], "label": "疲惫女子东侧" },
      { "kind": "ladder", "pts": [[30, 12], [34, 18]], "label": "下梯子乘船" },
      { "kind": "boat", "pts": [[34, 18], [42, 22], [43, 30], [43, 52]], "label": "向南的水道" },
      { "kind": "boat", "pts": [[43, 30], [52, 30]], "label": "向南第一个右侧拱门" },
      { "kind": "boat", "pts": [[42, 22], [60, 21], [74, 22]], "label": "往东侧码头" },
      { "kind": "ladder", "pts": [[74, 22], [78, 16]], "label": "东侧码头上梯子" },
      { "kind": "minor", "pts": [[78, 16], [80, 9]], "label": "稍北" },
      { "kind": "hidden", "pts": [[70, 21], [68, 12], [64, 7]], "label": "东侧码头北边的隐藏水道" },
      { "kind": "ladder", "pts": [[64, 7], [58, 4]], "label": "爬梯子" },
      { "kind": "minor", "pts": [[78, 16], [90, 22], [88, 36], [84, 42]], "label": "东侧水路→存档点" },
      { "kind": "boat", "pts": [[43, 52], [60, 55], [80, 55], [92, 62]], "label": "乘船到最东南角" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 4], "to": "winterbloom_thieves_quarter", "label": "往盗贼区（总部后屋）", "lp": "r", "dir": "西" },
      { "kind": "npc", "at": [16, 12], "label": "疲惫的女子", "lp": "t" },
      { "kind": "chest", "at": [14, 22], "tr": [0], "label": "治愈葡萄（大）", "lp": "r" },
      { "kind": "landmark", "at": [34, 18], "label": "码头", "lp": "b" },
      { "kind": "chest", "at": [53, 30], "tr": [1], "label": "暗之精灵石（大）", "lp": "r" },
      { "kind": "landmark", "at": [74, 22], "label": "东侧码头", "lp": "b" },
      { "kind": "chest", "at": [80, 9], "tr": [3], "label": "醒神李子（大）", "lp": "r" },
      { "kind": "chest", "at": [57, 4], "tr": [2], "label": "体力手环", "lp": "l" },
      { "kind": "save", "at": [84, 42], "label": "存档点", "lp": "l" },
      { "kind": "boss", "at": [92, 36], "label": "贝尔戈米", "lp": "t" },
      { "kind": "chest", "at": [94, 64], "tr": [4], "label": "石英匕首", "lp": "l" }
    ]
  },
  "southern_stormhail_snows": {
    "theme": "snow",
    "size": [100, 70],
    "note": "从南口（北蒙特怀斯山道）进入，存档点向左下楼梯，转向右时北墙有大裂缝；继续下到最底层向右再上楼梯是猛兽之弓。由最底层上到城墙脚下：西端是巨壁地下洞入口（右边梯子爬到顶有宝箱），中段圣堂骑士旁有梯子，东端最后的楼梯穿过城墙北上斯托姆黑尔。",
    "zones": [
      { "kind": "wall", "rect": [0, 10, 68, 10] },
      { "kind": "wall", "rect": [76, 10, 24, 10], "label": "巨壁" },
      { "kind": "rock", "rect": [2, 22, 10, 7] },
      { "kind": "room", "rect": [10, 42, 12, 8] },
      { "kind": "cliff", "poly": [[0, 34], [46, 34], [50, 38], [24, 40], [0, 40]] },
      { "kind": "cliff", "poly": [[60, 46], [100, 46], [100, 56], [70, 58], [62, 52]] },
      { "kind": "snow", "rect": [76, 22, 22, 14] },
      { "kind": "cliff", "poly": [[0, 56], [30, 58], [40, 70], [0, 70]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [52, 60]], "label": "往北蒙特怀斯山道" },
      { "kind": "minor", "pts": [[52, 60], [60, 60]], "label": "存档点右侧" },
      { "kind": "stairs", "pts": [[52, 60], [40, 56], [30, 52]], "label": "存档点向左下楼梯" },
      { "kind": "hidden", "pts": [[30, 52], [28, 46], [18, 46]], "label": "北侧墙上的大裂缝，进去往左" },
      { "kind": "stairs", "pts": [[30, 52], [42, 47], [54, 42]], "label": "楼梯转向右，下到最底层" },
      { "kind": "main", "pts": [[54, 42], [72, 40], [86, 40]], "label": "最底层一直往右" },
      { "kind": "stairs", "pts": [[86, 40], [90, 33], [90, 28]], "label": "再上楼梯" },
      { "kind": "stairs", "pts": [[54, 42], [50, 36], [48, 30]], "label": "上到城墙脚下" },
      { "kind": "main", "pts": [[2, 30], [20, 30], [40, 30], [48, 30], [72, 30]], "label": "城墙脚下" },
      { "kind": "ladder", "pts": [[20, 30], [20, 15]], "label": "地下洞入口右边的梯子" },
      { "kind": "ladder", "pts": [[40, 30], [40, 19]], "label": "圣堂骑士旁的梯子" },
      { "kind": "stairs", "pts": [[72, 30], [72, 24], [72, 14], [72, 3]], "label": "最后向北的楼梯（穿过城墙）" },
      { "kind": "minor", "pts": [[72, 24], [62, 24]], "label": "楼梯处先往左" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "crestlands/northern_montwise_pass", "label": "往北蒙特怀斯山道", "lp": "r", "dir": "南" },
      { "kind": "save", "at": [52, 60], "label": "存档点", "lp": "l" },
      { "kind": "npc", "at": [60, 60], "label": "考古学家（日）", "npc": [0], "lp": "r", "note": "身上有《巨壁的奇妙传说》，隐藏Boss支线链必需。" },
      { "kind": "chest", "at": [18, 46], "tr": [0], "label": "15000叶", "lp": "b" },
      { "kind": "chest", "at": [90, 28], "tr": [1], "label": "猛兽之弓", "lp": "l" },
      { "kind": "exit", "at": [2, 30], "to": "beneath_the_wall", "label": "巨壁地下洞", "lp": "r", "dir": "西", "note": "城墙下左侧的洞口；奈落之城的入口。" },
      { "kind": "chest", "at": [20, 14], "tr": [3], "label": "闪电盔甲", "lp": "r" },
      { "kind": "chest", "at": [40, 18], "tr": [2], "label": "冰之精灵石（特大）", "lp": "r" },
      { "kind": "npc", "at": [36, 32], "label": "杂技斗篷的NPC", "npc": [1], "lp": "b", "note": "梯子旁左侧。" },
      { "kind": "landmark", "at": [44, 32], "label": "圣堂骑士", "lp": "r" },
      { "kind": "chest", "at": [62, 24], "tr": [4], "label": "复活草", "lp": "l" },
      { "kind": "exit", "at": [72, 3], "to": "stormhail", "label": "往斯托姆黑尔", "lp": "r", "dir": "北" }
    ]
  },
  "beneath_the_wall": {
    "theme": "cave",
    "size": [100, 70],
    "note": "城墙下的小洞窟：东口进来有存档点，向西是横跨深渊的吊桥，对岸只有一个宝箱。带满7人以上走上吊桥会断裂，坠入下方的奈落之城；奈落之城可沿断桥残骸爬回。",
    "zones": [
      { "kind": "rock", "rect": [0, 0, 100, 14] },
      { "kind": "pit", "poly": [[26, 18], [60, 18], [62, 70], [24, 70]], "label": "深渊" },
      { "kind": "room", "rect": [62, 20, 36, 22] },
      { "kind": "room", "rect": [4, 24, 22, 20] },
      { "kind": "rock", "rect": [0, 48, 22, 22] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 30], [84, 30], [72, 32], [60, 34]], "label": "洞口通道" },
      { "kind": "bridge", "pts": [[60, 34], [26, 34]], "label": "吊桥" },
      { "kind": "minor", "pts": [[26, 34], [16, 34]], "label": "桥对面" },
      { "kind": "hidden", "pts": [[43, 34], [44, 58], [70, 64], [96, 66]], "label": "桥断坠落（7人以上同行）" },
      { "kind": "ladder", "pts": [[60, 36], [64, 50], [70, 64]], "label": "沿断桥残骸爬回" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 30], "to": "southern_stormhail_snows", "label": "往南斯托姆黑尔雪道", "lp": "l", "dir": "东" },
      { "kind": "save", "at": [74, 32], "label": "存档点", "lp": "b" },
      { "kind": "landmark", "at": [43, 34], "label": "吊桥（7人同行会断）", "lp": "t", "note": "4名队员＋用雇佣/引导/诱惑/结交等带上NPC，凑满7人以上一起上桥。" },
      { "kind": "chest", "at": [16, 34], "tr": [0], "label": "石头", "lp": "b", "note": "桥塌后无法再拿，可先单独过桥取走。" },
      { "kind": "landmark", "at": [64, 50], "label": "断桥残骸", "lp": "r" },
      { "kind": "exit", "at": [96, 66], "to": "infernal_castle", "label": "坠入奈落之城", "lp": "l", "dir": "东南" }
    ]
  },
  "infernal_castle": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "从断桥坠落到西北角的落地点：左侧有宝箱，南侧入口大厅右边楼梯下另有宝箱；主路向东接长楼梯（左侧半隐藏小房间、下方右侧各一宝箱），下到十字路口后左侧楼梯下的梯子上是蚺斩巨剑，向东是恐狼。",
    "zones": [
      { "kind": "room", "rect": [4, 2, 30, 16] },
      { "kind": "room", "rect": [16, 18, 48, 8] },
      { "kind": "room", "rect": [26, 28, 12, 14] },
      { "kind": "room", "rect": [44, 32, 10, 8] },
      { "kind": "room", "rect": [56, 24, 8, 26] },
      { "kind": "room", "rect": [64, 44, 12, 8] },
      { "kind": "room", "rect": [36, 54, 34, 12] },
      { "kind": "room", "rect": [36, 46, 8, 10] },
      { "kind": "room", "rect": [78, 44, 20, 22] },
      { "kind": "pit", "poly": [[2, 30], [20, 30], [22, 68], [2, 68]] }
    ],
    "paths": [
      { "kind": "ladder", "pts": [[4, 4], [14, 8], [20, 10]], "label": "断桥残骸（爬回巨壁地下洞）" },
      { "kind": "minor", "pts": [[20, 10], [10, 14]], "label": "落地点左侧" },
      { "kind": "main", "pts": [[20, 10], [22, 22]] },
      { "kind": "stairs", "pts": [[22, 22], [30, 30], [32, 38]], "label": "入口南侧右边楼梯" },
      { "kind": "main", "pts": [[22, 22], [44, 20], [60, 24]] },
      { "kind": "stairs", "pts": [[60, 24], [60, 36], [60, 48]], "label": "长楼梯" },
      { "kind": "hidden", "pts": [[60, 36], [50, 36]], "label": "长楼梯左侧半隐藏小房间" },
      { "kind": "minor", "pts": [[60, 48], [70, 48]], "label": "长楼梯下右侧" },
      { "kind": "main", "pts": [[60, 48], [60, 58]] },
      { "kind": "stairs", "pts": [[60, 58], [48, 62], [40, 62]], "label": "十字路口左侧楼梯下" },
      { "kind": "ladder", "pts": [[40, 62], [40, 51]], "label": "梯子" },
      { "kind": "main", "pts": [[60, 58], [78, 58], [88, 56]], "label": "往恐狼" },
      { "kind": "minor", "pts": [[88, 56], [94, 50]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 4], "to": "beneath_the_wall", "label": "爬回巨壁地下洞", "lp": "r", "dir": "西北" },
      { "kind": "landmark", "at": [20, 10], "label": "落地点", "lp": "r" },
      { "kind": "chest", "at": [10, 14], "tr": [0], "label": "醒神李子篮", "lp": "b" },
      { "kind": "chest", "at": [32, 39], "tr": [1], "label": "冰冻避邪符", "lp": "r" },
      { "kind": "chest", "at": [48, 36], "tr": [3], "label": "落幕种族之杖", "lp": "t" },
      { "kind": "chest", "at": [72, 48], "tr": [2], "label": "活力石榴（大）", "lp": "b" },
      { "kind": "landmark", "at": [60, 58], "label": "十字路口", "lp": "b" },
      { "kind": "chest", "at": [40, 51], "tr": [4], "label": "蚺斩巨剑", "lp": "t" },
      { "kind": "boss", "at": [88, 56], "label": "恐狼（卡尼斯·迪鲁斯）", "lp": "b" },
      { "kind": "chest", "at": [94, 50], "tr": [5], "label": "真理之秘石", "lp": "t", "note": "击败恐狼后开启。" }
    ]
  }
});

OT2.addDetail("winterlands", {
  "stormhail": {
    "theme": "city",
    "size": [100, 70],
    "note": "南口进城，南北主街直通北端大桥前广场：右侧大桥东去梅城，桥头北侧楼梯西北上灵峰阿尔塔赫（白天有圣堂骑士看守）。东西大街西段有道具店、酒馆，西北是旅店；东段有武具店，东侧是墓地；东南路通往圣堂机关总部。存档点位置为示意。",
    "zones": [
      { "kind": "water", "poly": [[58, 2], [100, 0], [100, 16], [62, 18]] },
      { "kind": "cliff", "poly": [[0, 0], [30, 0], [22, 6], [0, 10]] },
      { "kind": "plaza", "circle": [50, 14, 5] },
      { "kind": "building", "rect": [14, 17, 12, 8] },
      { "kind": "building", "rect": [18, 29, 14, 7] },
      { "kind": "building", "rect": [3, 31, 12, 7] },
      { "kind": "house", "rect": [12, 46, 12, 8] },
      { "kind": "house", "rect": [28, 46, 10, 7] },
      { "kind": "building", "rect": [60, 29, 12, 8] },
      { "kind": "house", "rect": [78, 28, 10, 8] },
      { "kind": "garden", "rect": [80, 44, 16, 10] },
      { "kind": "house", "rect": [62, 60, 8, 6] },
      { "kind": "house", "rect": [34, 56, 8, 6] },
      { "kind": "house", "rect": [56, 46, 8, 5] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 60], [50, 52], [50, 40], [50, 28], [50, 16]], "label": "南北主街", "smooth": false },
      { "kind": "main", "pts": [[4, 40], [9, 40], [26, 40], [50, 40], [66, 40], [80, 40], [92, 40]], "label": "东西大街", "smooth": false },
      { "kind": "bridge", "pts": [[50, 16], [60, 12], [98, 8]], "label": "右侧大桥（往梅城）" },
      { "kind": "stairs", "pts": [[50, 16], [36, 9], [4, 4]], "label": "大桥入口北侧楼梯（往灵峰）" },
      { "kind": "main", "pts": [[50, 52], [72, 56], [98, 62]], "label": "往圣堂机关总部" },
      { "kind": "minor", "pts": [[50, 28], [22, 26]], "label": "往西北的旅店" },
      { "kind": "minor", "pts": [[26, 40], [26, 37]] },
      { "kind": "minor", "pts": [[4, 40], [6, 60], [26, 60]], "label": "西侧房屋后面" },
      { "kind": "minor", "pts": [[80, 40], [90, 37]], "label": "武具店东边房屋旁" },
      { "kind": "minor", "pts": [[92, 40], [92, 52]], "label": "东侧墓地" },
      { "kind": "minor", "pts": [[92, 46], [82, 46]] },
      { "kind": "minor", "pts": [[50, 60], [44, 62]], "label": "南侧（隐藏物）" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "southern_stormhail_snows", "label": "往南斯托姆黑尔雪道", "lp": "r", "dir": "南" },
      { "kind": "exit", "at": [4, 4], "to": "sacred_peak_altahe", "label": "往灵峰阿尔塔赫", "lp": "r", "dir": "西北" },
      { "kind": "exit", "at": [98, 8], "to": "castle_mei", "label": "往梅城（右侧大桥）", "lp": "l", "dir": "东" },
      { "kind": "exit", "at": [98, 62], "to": "stormhail_sacred_guard_hq", "label": "往圣堂机关总部", "lp": "l", "dir": "东南" },
      { "kind": "landmark", "at": [36, 9], "label": "看守的圣堂骑士", "lp": "b", "note": "奥修特白天用「挑衅」打败后才能进入灵峰阿尔塔赫。" },
      { "kind": "hidden", "at": [44, 62], "label": "达人之弓（隐藏）", "lp": "r", "note": "总部外的武器商人透露在南侧，位置为示意。" },
      { "kind": "npc", "at": [84, 59], "label": "圣堂骑士二人组", "npc": [0], "lp": "t" },
      { "kind": "npc", "at": [72, 53], "label": "武器商人与骑士", "npc": [1], "lp": "t" },
      { "kind": "save", "at": [47, 44], "label": "存档点", "lp": "b" },
      { "kind": "npc", "at": [39, 43], "label": "梅家士兵二人（夜）", "npc": [4], "lp": "t" },
      { "kind": "inn", "at": [22, 26], "label": "旅店", "lp": "r" },
      { "kind": "tavern", "at": [26, 37], "label": "酒馆（西侧中央路旁）", "npc": [3, 5], "lp": "t", "note": "光、泰米诺斯、奥修特的章节都在这里「听故事」触发。" },
      { "kind": "item", "at": [9, 39], "label": "道具店", "lp": "t", "note": "可直接购买增强剂/扩散剂；支线「令人不安的商店」。" },
      { "kind": "hidden", "at": [14, 43], "label": "还魂橄榄（特大）（隐藏）", "lp": "b", "note": "总部外的圣堂骑士透露在西侧道具店附近。" },
      { "kind": "chest", "at": [26, 60], "tr": [0], "label": "骑士盔甲", "lp": "r" },
      { "kind": "weapon", "at": [66, 38], "label": "武具店", "npc": [2], "lp": "t" },
      { "kind": "npc", "at": [53, 30], "label": "精英圣堂骑士（挑战）", "npc": [6], "lp": "r" },
      { "kind": "chest", "at": [90, 37], "tr": [1], "label": "醒神李子篮", "lp": "t" },
      { "kind": "hidden", "at": [82, 46], "label": "骑士盔甲（隐藏）", "lp": "l", "note": "夜间梅家士兵透露，东侧墓地另有一件。" },
      { "kind": "npc", "at": [92, 52], "label": "奥尔特（墓地）", "npc": [7], "lp": "l" }
    ]
  },
  "stormhail_sacred_guard_hq": {
    "theme": "castle",
    "size": [100, 76],
    "note": "上半为1F：西北正门进入，大厅西侧走廊尽头是被骑士看守的房间；剧情中调查横梁支架后，大厅东北出现通往禁忌圣堂的新通道。下半为2F：西翼书库、东侧房间，以及爬梯子上的横梁（最高处，右侧单独示意）。",
    "zones": [
      { "kind": "room", "rect": [2, 2, 96, 34], "label": "1F" },
      { "kind": "room", "rect": [6, 24, 20, 10] },
      { "kind": "room", "rect": [2, 40, 70, 34], "label": "2F" },
      { "kind": "room", "rect": [60, 56, 12, 14] },
      { "kind": "room", "rect": [76, 40, 22, 34], "label": "横梁（最高处）" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 8], [14, 12], [30, 18], [50, 22], [70, 18]], "label": "1F大厅" },
      { "kind": "minor", "pts": [[14, 12], [16, 22], [16, 30]], "label": "1F西侧走廊（被看守的房间）" },
      { "kind": "minor", "pts": [[16, 30], [6, 28]], "label": "西侧房间" },
      { "kind": "hidden", "pts": [[70, 18], [86, 10], [98, 6]], "label": "新通道（调查支架后出现）" },
      { "kind": "stairs", "pts": [[50, 22], [50, 44]], "label": "楼梯（上2F）" },
      { "kind": "main", "pts": [[8, 52], [30, 48], [50, 44], [68, 50]], "label": "2F走廊" },
      { "kind": "minor", "pts": [[68, 50], [68, 66]], "label": "2F东侧房间" },
      { "kind": "ladder", "pts": [[68, 50], [78, 44]], "label": "爬梯子上横梁" },
      { "kind": "main", "pts": [[78, 44], [80, 44], [90, 44]], "label": "横梁向东" },
      { "kind": "minor", "pts": [[80, 44], [84, 66]], "label": "大彩绘玻璃旁的支架" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 8], "to": "stormhail", "label": "正门（往斯托姆黑尔）", "lp": "r", "dir": "西北" },
      { "kind": "exit", "at": [98, 6], "to": "forbidden_shrine", "label": "往禁忌圣堂", "lp": "l", "dir": "东北" },
      { "kind": "npc", "at": [22, 15], "label": "登记处女职员", "npc": [2], "lp": "t", "note": "知道1楼西侧房间隐藏的增强剂。" },
      { "kind": "landmark", "at": [16, 22], "label": "门口的圣堂骑士（先打倒）", "lp": "r", "note": "持白金盾，需先让他气绝/打倒才能进房间。" },
      { "kind": "chest", "at": [12, 31], "tr": [0], "label": "剥皮斧·戒", "lp": "b" },
      { "kind": "npc", "at": [19, 30], "label": "被看守房间的圣堂骑士", "npc": [0], "lp": "r", "note": "光用「挑战」可学 Limb from Limb（四连斩）。" },
      { "kind": "hidden", "at": [6, 28], "label": "增强剂（隐藏）", "lp": "t" },
      { "kind": "npc", "at": [36, 19], "label": "圣堂骑士（挑战）", "npc": [1], "lp": "t" },
      { "kind": "npc", "at": [62, 20], "label": "1楼东侧神官（夜）", "npc": [5], "lp": "b" },
      { "kind": "landmark", "at": [8, 52], "label": "西翼书库", "lp": "t", "note": "剧情中跟随人影来此调查。" },
      { "kind": "npc", "at": [24, 49], "label": "2楼西侧圣堂骑士", "npc": [4], "lp": "b" },
      { "kind": "npc", "at": [60, 47], "label": "2楼东侧精英骑士", "npc": [3], "lp": "b" },
      { "kind": "npc", "at": [68, 58], "label": "2楼东侧骑士二人（夜）", "npc": [6], "lp": "l" },
      { "kind": "chest", "at": [68, 66], "tr": [1], "label": "活力石榴", "lp": "l", "note": "2楼东侧房间；夜间西侧第一间房的商人透露这里还有隐藏的古代硬币，2楼另有隐藏的雷之护符（位置未确认）。" },
      { "kind": "chest", "at": [90, 44], "tr": [2], "label": "光之精灵石（特大）", "lp": "b" },
      { "kind": "landmark", "at": [84, 66], "label": "彩绘玻璃旁的支架", "lp": "t", "note": "调查后回到楼下会出现通往禁忌圣堂的新通道。" }
    ]
  },
  "forbidden_shrine": {
    "theme": "dungeon",
    "size": [100, 70],
    "note": "西南入口沿火把小路北上再向东，过桥前南侧楼梯下有宝箱；过桥后到烛光雕像台座（左侧宝箱、右侧下楼梯到北边小房间）。台座北上是存档点（西墙有隐藏通路），再往北是禁书库Boss。",
    "zones": [
      { "kind": "room", "rect": [2, 40, 24, 30] },
      { "kind": "room", "rect": [10, 28, 30, 12] },
      { "kind": "pit", "poly": [[40, 20], [56, 20], [56, 50], [40, 50]] },
      { "kind": "room", "rect": [28, 40, 14, 16] },
      { "kind": "room", "rect": [58, 10, 30, 36] },
      { "kind": "room", "rect": [80, 26, 16, 18] },
      { "kind": "room", "rect": [22, 10, 26, 8] },
      { "kind": "room", "rect": [40, 0, 44, 8] }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [12, 56], [14, 46], [14, 36]], "label": "火把小路（向北）" },
      { "kind": "main", "pts": [[14, 36], [34, 32], [40, 32]], "label": "向东" },
      { "kind": "stairs", "pts": [[34, 32], [36, 42], [36, 51]], "label": "过桥前先下南侧楼梯" },
      { "kind": "bridge", "pts": [[40, 32], [56, 32]], "label": "桥" },
      { "kind": "main", "pts": [[56, 32], [62, 32], [70, 26], [74, 22]] },
      { "kind": "minor", "pts": [[62, 32], [64, 40]], "label": "桥对面" },
      { "kind": "minor", "pts": [[74, 22], [68, 21]], "label": "台座左侧" },
      { "kind": "stairs", "pts": [[74, 22], [84, 30], [84, 40]], "label": "台座右侧下楼梯" },
      { "kind": "minor", "pts": [[84, 40], [92, 36], [92, 28]], "label": "楼梯下北边的小房间" },
      { "kind": "main", "pts": [[74, 22], [70, 14], [62, 12], [62, 4]], "label": "往禁书库" },
      { "kind": "hidden", "pts": [[62, 12], [44, 14], [30, 14]], "label": "存档点西侧墙壁隐藏通路" }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "stormhail_sacred_guard_hq", "label": "往圣堂机关总部", "lp": "r", "dir": "西南" },
      { "kind": "landmark", "at": [14, 46], "label": "火把小路", "lp": "r", "note": "雷之精灵会掉万能精灵石（学者第3张职业证材料）。" },
      { "kind": "chest", "at": [36, 51], "tr": [0], "label": "闪光避邪符", "lp": "r" },
      { "kind": "chest", "at": [64, 40], "tr": [1], "label": "还魂橄榄（大）", "lp": "r" },
      { "kind": "landmark", "at": [74, 22], "label": "烛光雕像台座", "lp": "r" },
      { "kind": "chest", "at": [68, 21], "tr": [2], "label": "治愈葡萄（大）", "lp": "l" },
      { "kind": "chest", "at": [92, 28], "tr": [3], "label": "15000叶", "lp": "b" },
      { "kind": "save", "at": [62, 12], "label": "存档点", "lp": "r" },
      { "kind": "chest", "at": [30, 14], "tr": [4], "label": "碎魔者权杖", "lp": "b" },
      { "kind": "boss", "at": [62, 4], "label": "库巴莉副官（禁书库）", "lp": "r" }
    ]
  },
  "castle_mei": {
    "theme": "castle",
    "size": [100, 70],
    "note": "西侧大桥（右侧那座桥，昆藏战）通入城门与入口大厅；大厅北侧一排房间，东端上层栏杆边有宝箱，存档点后的东侧楼梯北上东塔。地牢在大厅下方（光被关押后从这里上楼）。",
    "zones": [
      { "kind": "water", "poly": [[0, 32], [28, 32], [28, 50], [0, 50]] },
      { "kind": "wall", "rect": [26, 34, 4, 12] },
      { "kind": "room", "rect": [32, 26, 56, 22] },
      { "kind": "room", "rect": [34, 12, 10, 10] },
      { "kind": "room", "rect": [46, 12, 10, 10] },
      { "kind": "room", "rect": [58, 12, 10, 10] },
      { "kind": "room", "rect": [70, 12, 10, 10] },
      { "kind": "deck", "rect": [70, 26, 12, 5] },
      { "kind": "room", "rect": [44, 54, 32, 14] },
      { "kind": "room", "rect": [86, 2, 12, 26] }
    ],
    "paths": [
      { "kind": "bridge", "pts": [[2, 40], [26, 40]], "label": "大桥（右侧桥）" },
      { "kind": "main", "pts": [[26, 40], [40, 40], [52, 40], [60, 40], [64, 40], [80, 40], [84, 40]], "label": "入口大厅", "smooth": false },
      { "kind": "minor", "pts": [[40, 40], [39, 22]], "label": "西北房间" },
      { "kind": "minor", "pts": [[52, 40], [51, 22]], "label": "北侧一排房间" },
      { "kind": "minor", "pts": [[64, 40], [63, 22]] },
      { "kind": "stairs", "pts": [[60, 40], [60, 56]], "label": "下到地牢" },
      { "kind": "stairs", "pts": [[80, 40], [78, 30]], "label": "上层" },
      { "kind": "minor", "pts": [[78, 30], [74, 28]], "label": "存档点西北的栏杆边" },
      { "kind": "stairs", "pts": [[84, 40], [92, 30], [92, 3]], "label": "东侧楼梯（往东塔）" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "stormhail", "label": "西侧大桥", "lp": "r", "dir": "西" },
      { "kind": "boss", "at": [18, 40], "label": "昆藏＋梅家枪兵", "lp": "b" },
      { "kind": "npc", "at": [30, 43], "label": "城门口的梅家士兵", "npc": [0], "lp": "t" },
      { "kind": "npc", "at": [44, 43], "label": "佣兵与家臣", "npc": [2], "lp": "b" },
      { "kind": "npc", "at": [58, 43], "label": "梅家士兵（挑战）", "npc": [3], "lp": "b" },
      { "kind": "npc", "at": [70, 43], "label": "大厅东侧的梅家士兵", "npc": [1], "lp": "t", "note": "知道西北房间隐藏的混乱之瓶。" },
      { "kind": "npc", "at": [78, 43], "label": "雷梅/昆藏（光通关后）", "npc": [4, 5], "lp": "b", "note": "雷梅身上有雷鸣之枪，昆藏有守护者之盾。" },
      { "kind": "save", "at": [84, 40], "label": "存档点", "lp": "t" },
      { "kind": "chest", "at": [74, 28], "tr": [1], "label": "16000叶", "lp": "l" },
      { "kind": "chest", "at": [51, 22], "tr": [0], "label": "雷之精灵石（大）", "lp": "t" },
      { "kind": "hidden", "at": [39, 22], "label": "混乱之瓶（隐藏）", "lp": "l" },
      { "kind": "landmark", "at": [60, 56], "label": "地牢（光醒来处）", "lp": "b" },
      { "kind": "exit", "at": [92, 3], "to": "castle_mei_east_tower", "label": "往东塔", "lp": "l", "dir": "北" }
    ]
  },
  "castle_mei_east_tower": {
    "theme": "tower",
    "size": [100, 80],
    "note": "左为第一座塔（1F→2F平台→顶层），1F东侧楼梯可出到城墙走道；顶层过桥进入右侧第二座塔：东南梯子下去过小桥是空房间，存档点西侧的桥通孤立小塔，东侧楼梯上到右上角处刑塔。",
    "zones": [
      { "kind": "room", "rect": [4, 58, 28, 20], "label": "1F" },
      { "kind": "room", "rect": [4, 36, 30, 18], "label": "2F" },
      { "kind": "room", "rect": [4, 8, 30, 24], "label": "顶层" },
      { "kind": "wall", "rect": [32, 62, 32, 8], "label": "城墙走道" },
      { "kind": "pit", "poly": [[34, 30], [58, 30], [58, 58], [34, 58]] },
      { "kind": "room", "rect": [58, 20, 30, 30], "label": "第二座塔" },
      { "kind": "room", "rect": [86, 40, 12, 10] },
      { "kind": "room", "rect": [42, 4, 12, 12] },
      { "kind": "room", "rect": [78, 0, 20, 12] }
    ],
    "paths": [
      { "kind": "main", "pts": [[20, 78], [20, 68]], "label": "入口（自梅城东侧楼梯）" },
      { "kind": "stairs", "pts": [[20, 68], [32, 64]], "label": "东侧楼梯" },
      { "kind": "minor", "pts": [[32, 64], [48, 66], [62, 66]], "label": "一直向东出到城墙走道" },
      { "kind": "stairs", "pts": [[20, 68], [14, 58], [14, 48]], "label": "上2F" },
      { "kind": "main", "pts": [[14, 48], [28, 44]], "label": "2F平台" },
      { "kind": "hidden", "pts": [[28, 44], [20, 40], [8, 42]], "label": "北上楼梯左侧半隐藏的侧阶" },
      { "kind": "stairs", "pts": [[28, 44], [28, 30], [28, 22]], "label": "2F平台北上楼梯" },
      { "kind": "minor", "pts": [[28, 22], [16, 18], [8, 14]], "label": "顶层左侧小房间" },
      { "kind": "bridge", "pts": [[28, 22], [44, 24], [60, 26]], "label": "过桥进入第二座塔" },
      { "kind": "main", "pts": [[60, 26], [66, 26], [72, 26]] },
      { "kind": "ladder", "pts": [[66, 26], [74, 36], [76, 46]], "label": "东南梯子下去" },
      { "kind": "bridge", "pts": [[76, 46], [88, 46]], "label": "小桥" },
      { "kind": "bridge", "pts": [[72, 26], [60, 14], [50, 10]], "label": "存档点西侧的桥（往孤立小塔）" },
      { "kind": "stairs", "pts": [[72, 26], [82, 18], [88, 8]], "label": "存档点东侧楼梯→处刑塔" }
    ],
    "pois": [
      { "kind": "exit", "at": [20, 78], "to": "castle_mei", "label": "往梅城", "lp": "r", "dir": "南" },
      { "kind": "stairs", "at": [32, 64], "label": "东侧楼梯", "lp": "t" },
      { "kind": "chest", "at": [62, 66], "tr": [0], "label": "熟睡草", "lp": "r" },
      { "kind": "landmark", "at": [28, 44], "label": "2F平台", "lp": "r" },
      { "kind": "chest", "at": [8, 42], "tr": [1], "label": "雷之精灵石（特大）", "lp": "t" },
      { "kind": "chest", "at": [8, 14], "tr": [2], "label": "治愈葡萄（大）", "lp": "b" },
      { "kind": "chest", "at": [88, 46], "tr": [3], "label": "恶梦之枪", "lp": "t" },
      { "kind": "chest", "at": [50, 10], "tr": [4], "label": "雷电避邪符", "lp": "b", "note": "孤立小塔内。" },
      { "kind": "save", "at": [72, 26], "label": "存档点", "lp": "b" },
      { "kind": "boss", "at": [88, 8], "label": "雷梅（处刑塔）", "lp": "l" }
    ]
  },
  "sacred_peak_altahe": {
    "theme": "mountain",
    "size": [100, 70],
    "note": "东南口（斯托姆黑尔大桥北侧楼梯）进山，与海格交谈后沿火把山路上行，向西到梯子处连爬两段到顶，再向东过吊桥，对岸存档点后是格拉切斯。",
    "zones": [
      { "kind": "cliff", "poly": [[0, 52], [40, 50], [60, 60], [70, 70], [0, 70]] },
      { "kind": "cliff", "poly": [[0, 0], [40, 0], [34, 6], [18, 10], [0, 12]] },
      { "kind": "pit", "poly": [[64, 4], [80, 4], [80, 24], [64, 24]] },
      { "kind": "room", "rect": [82, 2, 16, 18] },
      { "kind": "snow", "rect": [30, 24, 30, 18] },
      { "kind": "rock", "rect": [0, 22, 10, 26] }
    ],
    "paths": [
      { "kind": "main", "pts": [[96, 66], [86, 60], [80, 58], [66, 50]], "label": "火把山路（上行）" },
      { "kind": "minor", "pts": [[86, 60], [94, 52]], "label": "东侧小路" },
      { "kind": "minor", "pts": [[66, 50], [74, 44]], "label": "山路右侧" },
      { "kind": "main", "pts": [[66, 50], [40, 48], [24, 46]], "label": "西行到梯子处" },
      { "kind": "ladder", "pts": [[24, 46], [22, 34]], "label": "第一段梯子" },
      { "kind": "ladder", "pts": [[22, 34], [12, 40]], "label": "左侧往下的梯子" },
      { "kind": "ladder", "pts": [[22, 34], [22, 20]], "label": "继续爬到顶" },
      { "kind": "main", "pts": [[22, 20], [50, 16], [60, 14], [64, 14]], "label": "爬到顶向东" },
      { "kind": "hidden", "pts": [[60, 14], [56, 6]], "label": "吊桥前稍往北左侧的隐藏小路" },
      { "kind": "bridge", "pts": [[64, 14], [80, 14]], "label": "吊桥" },
      { "kind": "main", "pts": [[80, 14], [82, 14], [92, 10]] }
    ],
    "pois": [
      { "kind": "exit", "at": [96, 66], "to": "stormhail", "label": "往斯托姆黑尔", "lp": "l", "dir": "东南" },
      { "kind": "gate", "at": [92, 64], "label": "看守的圣堂骑士", "lp": "t", "note": "白天用奥修特「挑衅」打倒后才能进山。" },
      { "kind": "npc", "at": [84, 59], "label": "海格", "lp": "l", "note": "与他交谈后绕远路上山。" },
      { "kind": "chest", "at": [94, 52], "tr": [0], "label": "强化果酱", "lp": "l" },
      { "kind": "chest", "at": [74, 44], "tr": [1], "label": "冰之避邪符", "lp": "r" },
      { "kind": "stairs", "at": [24, 46], "label": "梯子处", "lp": "r" },
      { "kind": "chest", "at": [12, 40], "tr": [2], "label": "冰之精灵石（特大）", "lp": "b" },
      { "kind": "chest", "at": [56, 6], "tr": [3], "label": "绝对零度之弓", "lp": "l" },
      { "kind": "save", "at": [82, 14], "label": "存档点", "lp": "b" },
      { "kind": "boss", "at": [92, 10], "label": "格拉切斯", "lp": "t" }
    ]
  }
});

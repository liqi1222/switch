OT2.addDetail("harborlands", {
  "canalbrine": {
    "theme": "port",
    "size": [100, 70],
    "note": "被水道切分的港町：西口通西卡纳尔布莱恩海道，主街经中央桥向东南到渡船码头；南口通往水源之路。西北道具店旁码头可划独木舟，北上到武器防具店门口与灯塔、南下到西侧独立小屋；东北教堂的东侧出口通往圣堂机关之船。",
    "zones": [
      { "kind": "water", "poly": [[0, 0], [100, 0], [100, 9], [0, 9]] },
      { "kind": "water", "poly": [[13, 9], [19, 9], [19, 64], [13, 64]] },
      { "kind": "water", "poly": [[46, 9], [52, 9], [52, 70], [46, 70]] },
      { "kind": "water", "poly": [[88, 9], [100, 9], [100, 70], [80, 70], [84, 58], [88, 40]] },
      { "kind": "rock", "rect": [60, 0, 14, 8], "label": "灯塔" },
      { "kind": "building", "rect": [20, 13, 10, 8], "label": "道具店" },
      { "kind": "building", "rect": [54, 11, 10, 7], "label": "武器防具店" },
      { "kind": "building", "rect": [70, 13, 14, 10], "label": "教堂" },
      { "kind": "building", "rect": [56, 25, 12, 8], "label": "酒馆" },
      { "kind": "plaza", "rect": [54, 34, 7, 4], "label": "户外桌" },
      { "kind": "building", "rect": [32, 26, 10, 8], "label": "旅店" },
      { "kind": "house", "rect": [1, 52, 9, 7], "label": "独立小屋" },
      { "kind": "house", "rect": [22, 46, 8, 6] },
      { "kind": "house", "rect": [28, 55, 8, 6], "label": "卧床镇民家" },
      { "kind": "house", "rect": [56, 47, 10, 7] },
      { "kind": "house", "rect": [66, 55, 8, 6] },
      { "kind": "plaza", "circle": [36, 40, 4] },
      { "kind": "deck", "rect": [80, 50, 8, 8], "label": "东南码头" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 40], [12, 40]], "smooth": false },
      { "kind": "bridge", "pts": [[12, 40], [20, 40]] },
      { "kind": "main", "pts": [[20, 40], [30, 40], [36, 40], [46, 40]], "smooth": false },
      { "kind": "bridge", "pts": [[46, 40], [52, 40]], "label": "中央桥" },
      { "kind": "main", "pts": [[52, 40], [64, 40], [76, 46], [84, 54]] },
      { "kind": "main", "pts": [[36, 40], [38, 52], [40, 68]], "label": "南口大道" },
      { "kind": "minor", "pts": [[30, 40], [26, 30], [25, 21]], "label": "往道具店" },
      { "kind": "minor", "pts": [[26, 30], [19, 28]], "label": "道具店旁码头" },
      { "kind": "boat", "pts": [[19, 28], [16, 20], [17, 6], [34, 4], [52, 5], [62, 6]], "label": "独木舟北线（灯塔）" },
      { "kind": "boat", "pts": [[52, 5], [57, 11]], "label": "划到武器店门口" },
      { "kind": "stairs", "pts": [[62, 6], [70, 3]], "label": "登上灯塔" },
      { "kind": "boat", "pts": [[19, 28], [16, 44], [16, 56], [13, 60]], "label": "独木舟南线" },
      { "kind": "minor", "pts": [[13, 60], [7, 63]] },
      { "kind": "minor", "pts": [[36, 40], [37, 34]] },
      { "kind": "minor", "pts": [[42, 40], [44, 32]], "label": "旅店东侧" },
      { "kind": "minor", "pts": [[64, 40], [62, 33]] },
      { "kind": "minor", "pts": [[62, 33], [57, 36]], "label": "酒馆西侧户外座位", "smooth": false },
      { "kind": "minor", "pts": [[64, 40], [70, 32], [66, 22]], "label": "酒馆北侧" },
      { "kind": "minor", "pts": [[70, 32], [76, 23]] },
      { "kind": "minor", "pts": [[76, 23], [77, 18], [84, 18], [98, 18]], "label": "教堂内→东侧出口" },
      { "kind": "minor", "pts": [[84, 18], [84, 14]], "label": "右侧小办公室" },
      { "kind": "boat", "pts": [[84, 54], [96, 62]], "label": "渡船航线" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 40], "to": "western_canalbrine_coast", "label": "西口", "lp": "t" },
      { "kind": "exit", "at": [40, 68], "to": "path_to_water_source", "label": "南口（往水源之路）", "lp": "r" },
      { "kind": "exit", "at": [98, 18], "to": "sacred_guard_ship", "label": "圣堂机关之船", "lp": "b", "note": "泰米诺斯第2章：从教堂东侧出口登船。" },
      { "kind": "ship", "at": [96, 62], "to": "sundering_sea/anchorage_canalbrine", "label": "渡船（往兽人海滩）", "lp": "l", "note": "前往托托哈哈岛兽人海滩停泊所的渡船；买船后自有船也停在这里。" },
      { "kind": "landmark", "at": [84, 54], "label": "东南码头", "lp": "l" },
      { "kind": "npc", "at": [77, 50], "label": "贸易商/可疑的小贩", "npc": [5, 6], "lp": "l" },
      { "kind": "item", "at": [25, 21], "label": "道具店", "npc": [1], "lp": "t" },
      { "kind": "landmark", "at": [19, 28], "label": "码头", "lp": "r" },
      { "kind": "hidden", "at": [14, 18], "label": "隐藏安眠草", "note": "道具店女性的情报：店外划船可拿到。", "lp": "l" },
      { "kind": "weapon", "at": [57, 12], "label": "武器防具店（需划船）", "lp": "r" },
      { "kind": "npc", "at": [62, 6], "label": "灯塔守", "npc": [11], "lp": "b" },
      { "kind": "chest", "at": [70, 3], "tr": [2], "lp": "r", "note": "让灯塔守昏睡/击倒后登顶。" },
      { "kind": "chest", "at": [7, 63], "tr": [0], "lp": "r" },
      { "kind": "inn", "at": [37, 33], "label": "旅店", "npc": [0], "lp": "l" },
      { "kind": "hidden", "at": [44, 31], "label": "隐藏铁斧（木桶上）", "lp": "r" },
      { "kind": "save", "at": [36, 40], "label": "存档点", "lp": "b" },
      { "kind": "npc", "at": [29, 43], "label": "塞斯克", "npc": [3], "lp": "l" },
      { "kind": "npc", "at": [42, 43], "label": "年轻旅人/作家(夜)", "npc": [2, 12], "lp": "b" },
      { "kind": "npc", "at": [56, 43], "label": "老人与商人", "npc": [4], "lp": "b" },
      { "kind": "tavern", "at": [62, 33], "label": "酒馆", "npc": [7, 8, 13, 14, 15], "lp": "t" },
      { "kind": "npc", "at": [57, 36], "label": "等待的青年（昼夜不同）", "npc": [16, 17], "lp": "l", "note": "酒馆西侧户外桌旁，座位为相对位置示意。带走一位青年后切换昼夜，与另一位对话；任务完成后两人移到酒馆前。" },
      { "kind": "hidden", "at": [66, 22], "label": "隐藏薄暮之花（马车）", "lp": "l" },
      { "kind": "church", "at": [76, 23], "label": "教堂", "lp": "b" },
      { "kind": "npc", "at": [75, 16], "label": "主祭神官/少年之父", "npc": [10, 9], "lp": "l" },
      { "kind": "chest", "at": [84, 14], "tr": [1], "lp": "r", "note": "泰米诺斯第2章开始后才能进入教堂。" }
    ],
    "sources": [
      { "label": "等待青年 · Game8 地图与昼夜NPC表", "url": "https://game8.jp/octopathtraveler2/515151" },
      { "label": "等待青年 · NightlyGamingBinge 位置与任务", "url": "https://nightlygamingbinge.com/octopath-traveler-ii-harborlands-side-stories/" }
    ]
  },
  "sacred_guard_ship": {
    "theme": "sea",
    "size": [100, 70],
    "note": "船头朝西靠在卡纳尔布莱恩教堂东侧：上甲板中段有主桅与船侧梯子；入口旁梯子下到下层船舱；餐厅兼船舱的西南出口外、船体西侧甲板有底力荔枝（大）箱（拿完后一路向东）；经下层通道向东，再从楼梯回到船尾甲板，存档后迎战瓦多斯。船尾甲板与前甲板的连通方式为示意。",
    "zones": [
      { "kind": "water", "rect": [0, 0, 100, 70] },
      { "kind": "deck", "poly": [[2, 20], [14, 8], [66, 8], [66, 32], [14, 32]], "label": "上甲板" },
      { "kind": "deck", "rect": [66, 8, 26, 24], "label": "船尾甲板" },
      { "kind": "room", "rect": [12, 40, 78, 26], "label": "下层船舱" },
      { "kind": "room", "rect": [30, 41, 26, 10], "label": "餐厅兼船舱" },
      { "kind": "room", "rect": [14, 56, 14, 9] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 20], [20, 20], [40, 20], [60, 20], [64, 20]], "smooth": false },
      { "kind": "ladder", "pts": [[40, 20], [40, 4]], "label": "攀上主桅" },
      { "kind": "ladder", "pts": [[60, 20], [60, 33], [62, 36]], "label": "船侧梯子" },
      { "kind": "ladder", "pts": [[20, 20], [22, 52]], "label": "入口旁梯子" },
      { "kind": "main", "pts": [[22, 52], [40, 52], [60, 52], [82, 52]], "smooth": false },
      { "kind": "minor", "pts": [[22, 52], [22, 62]], "label": "最近的下层门" },
      { "kind": "minor", "pts": [[40, 52], [40, 46], [32, 43]], "label": "左侧门（餐厅）" },
      { "kind": "stairs", "pts": [[82, 52], [82, 40], [80, 30]], "label": "上船尾甲板" },
      { "kind": "main", "pts": [[80, 30], [76, 22], [72, 14]] },
      { "kind": "minor", "pts": [[32, 43], [24, 45], [16, 47]], "label": "餐厅西南出口→船体西侧" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 20], "to": "canalbrine", "label": "往卡纳尔布莱恩", "lp": "b" },
      { "kind": "landmark", "at": [40, 20], "label": "主桅", "lp": "b" },
      { "kind": "chest", "at": [40, 4], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [62, 36], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [22, 62], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [32, 43], "tr": [3], "lp": "b", "note": "餐厅兼船舱西北角双层床之间。" },
      { "kind": "gate", "at": [64, 20], "label": "通往船尾", "lp": "t" },
      { "kind": "save", "at": [80, 30], "label": "存档点", "lp": "r" },
      { "kind": "chest", "at": [16, 47], "tr": [4], "lp": "b", "note": "餐厅兼船舱西南出口外的船体西侧甲板；拿完后一路向东即可到存档点。" },
      { "kind": "boss", "at": [72, 14], "label": "建筑师瓦多斯", "lp": "l" }
    ]
  },
  "path_to_water_source": {
    "theme": "field",
    "size": [100, 70],
    "note": "从卡纳尔布莱恩南口出城：入口岔路右转有宝箱；主路向西再向南下坡，途中贴右侧有隐藏小路；南侧岔路右转、西侧梯子南边各有一箱；之后登上城墙，城墙上往北一箱，城墙南端存档点可乘船向西，主路向东南进入水源。",
    "zones": [
      { "kind": "grass", "rect": [2, 2, 40, 40] },
      { "kind": "wall", "rect": [28, 47, 56, 6], "label": "城墙" },
      { "kind": "water", "poly": [[14, 57], [86, 57], [86, 68], [14, 68]] },
      { "kind": "sand", "rect": [36, 59, 9, 6] },
      { "kind": "cliff", "poly": [[54, 14], [96, 14], [96, 44], [70, 44], [54, 30]] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 2], [50, 10], [34, 14], [24, 20], [22, 32], [24, 40]] },
      { "kind": "minor", "pts": [[50, 10], [64, 12], [72, 10]], "label": "入口岔路右转" },
      { "kind": "hidden", "pts": [[22, 28], [30, 28], [34, 32]], "label": "贴右侧的隐藏小路" },
      { "kind": "minor", "pts": [[24, 40], [34, 42], [40, 40]], "label": "南侧岔路右转" },
      { "kind": "minor", "pts": [[24, 40], [12, 40]] },
      { "kind": "ladder", "pts": [[12, 40], [10, 50]], "label": "西侧梯子" },
      { "kind": "minor", "pts": [[10, 50], [8, 62]], "label": "梯子南边小路" },
      { "kind": "stairs", "pts": [[24, 40], [28, 46], [32, 50]], "label": "登上城墙" },
      { "kind": "main", "pts": [[32, 50], [56, 50], [80, 50]], "smooth": false },
      { "kind": "minor", "pts": [[56, 50], [58, 40], [62, 34]], "label": "城墙上往北" },
      { "kind": "stairs", "pts": [[80, 50], [84, 58]], "label": "城墙南边" },
      { "kind": "main", "pts": [[84, 58], [96, 64]] },
      { "kind": "boat", "pts": [[84, 58], [70, 63], [44, 62]], "label": "乘船向西" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 2], "to": "canalbrine", "label": "往卡纳尔布莱恩", "lp": "r" },
      { "kind": "exit", "at": [96, 64], "to": "water_source", "label": "往水源", "lp": "l" },
      { "kind": "chest", "at": [72, 10], "tr": [0], "lp": "r" },
      { "kind": "chest", "at": [34, 32], "tr": [1], "lp": "r" },
      { "kind": "chest", "at": [40, 40], "tr": [2], "lp": "r" },
      { "kind": "chest", "at": [8, 62], "tr": [3], "lp": "r" },
      { "kind": "chest", "at": [62, 34], "tr": [4], "lp": "r" },
      { "kind": "save", "at": [84, 58], "label": "存档点", "lp": "t" },
      { "kind": "chest", "at": [44, 62], "tr": [5], "lp": "b" }
    ]
  },
  "water_source": {
    "theme": "cave",
    "size": [100, 70],
    "note": "西北入口进入，一直向右（岔路也向右）走到尽头有扩散剂；主路先南下再向东，转向北后过火把小桥（西端旁有小路），桥东是存档点与行商，码头可划船去西北，存档点东侧一箱，向东南进入 Boss 房。",
    "zones": [
      { "kind": "room", "rect": [2, 2, 24, 14], "label": "入口" },
      { "kind": "water", "poly": [[62, 2], [90, 2], [88, 18], [76, 22], [64, 16]] },
      { "kind": "water", "poly": [[54, 28], [70, 28], [70, 22], [54, 22]] },
      { "kind": "rock", "rect": [28, 26, 18, 10] },
      { "kind": "room", "rect": [80, 46, 18, 22], "label": "Boss 房" }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 8], [18, 10], [22, 24], [24, 40], [36, 50], [50, 50]] },
      { "kind": "main", "pts": [[50, 50], [54, 36], [52, 26]], "label": "向北转弯" },
      { "kind": "minor", "pts": [[18, 10], [30, 6], [44, 5]], "label": "进入后一直向右（岔路也向右）" },
      { "kind": "bridge", "pts": [[52, 26], [68, 24]], "label": "火把小桥" },
      { "kind": "minor", "pts": [[52, 26], [44, 20], [38, 16]], "label": "桥西端旁小路" },
      { "kind": "main", "pts": [[68, 24], [78, 30]] },
      { "kind": "boat", "pts": [[78, 30], [74, 18], [70, 8]], "label": "码头乘船向西北" },
      { "kind": "minor", "pts": [[78, 30], [92, 32]], "label": "存档点东侧" },
      { "kind": "main", "pts": [[78, 30], [84, 40], [90, 56]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 8], "to": "path_to_water_source", "label": "入口", "lp": "b" },
      { "kind": "chest", "at": [44, 5], "tr": [0], "lp": "b", "note": "进入后一直向右走，遇到岔路也向右，尽头是扩散剂。" },
      { "kind": "landmark", "at": [60, 25], "label": "火把", "lp": "t" },
      { "kind": "ship", "at": [73, 27], "label": "码头", "lp": "l" },
      { "kind": "chest", "at": [38, 16], "tr": [1], "lp": "l" },
      { "kind": "save", "at": [78, 30], "label": "存档点", "lp": "b" },
      { "kind": "peddler", "at": [84, 28], "label": "行商", "npc": [0], "lp": "t" },
      { "kind": "chest", "at": [70, 8], "tr": [2], "lp": "l" },
      { "kind": "chest", "at": [92, 32], "tr": [3], "lp": "l" },
      { "kind": "boss", "at": [90, 56], "label": "维隆与多隆", "lp": "l" }
    ]
  },
  "western_canalbrine_coast": {
    "theme": "field",
    "size": [
      100,
      70
    ],
    "note": "沿北侧海岸东西走向：出城口有存档点，其左侧几步一箱；第一个岔路北行穿过小洞窟到码头，可划船去两座小岛；中段岔路楼梯上方再左下台阶一箱；西端分南北两岔，主路向西通往大桥。",
    "zones": [
      {
        "kind": "water",
        "poly": [
          [
            0,
            0
          ],
          [
            100,
            0
          ],
          [
            100,
            14
          ],
          [
            76,
            16
          ],
          [
            66,
            17
          ],
          [
            40,
            13
          ],
          [
            24,
            15
          ],
          [
            0,
            12
          ]
        ]
      },
      {
        "kind": "grass",
        "circle": [
          52,
          5,
          3
        ]
      },
      {
        "kind": "grass",
        "circle": [
          88,
          10,
          3
        ]
      },
      {
        "kind": "rock",
        "rect": [
          64,
          21,
          10,
          8
        ],
        "label": "小洞窟"
      },
      {
        "kind": "cliff",
        "poly": [
          [
            36,
            24
          ],
          [
            56,
            22
          ],
          [
            56,
            30
          ],
          [
            36,
            30
          ]
        ]
      },
      {
        "kind": "grass",
        "rect": [
          4,
          48,
          30,
          18
        ]
      }
    ],
    "paths": [
      {
        "kind": "main",
        "pts": [
          [
            98,
            42
          ],
          [
            86,
            42
          ],
          [
            72,
            40
          ],
          [
            50,
            42
          ],
          [
            30,
            44
          ],
          [
            16,
            40
          ],
          [
            2,
            36
          ]
        ],
        "label": "城镇至大桥主路",
        "route": {
          "from": "卡纳尔布莱恩西口／存档点",
          "to": "卡纳尔布莱恩大桥出口",
          "steps": [
            "从城镇口沿主路向西",
            "先经过北上洞窟的岔路 A，再经过中段台阶",
            "到西端岔路 C 后继续向西去大桥"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            86,
            42
          ],
          [
            84,
            50
          ]
        ],
        "label": "出城口旁的宝箱支路",
        "route": {
          "from": "出城口附近主路",
          "to": "治愈葡萄（大）宝箱",
          "steps": [
            "从城镇口出来，在存档点左侧不远查看路旁",
            "取箱后返回主路"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            72,
            40
          ],
          [
            70,
            28
          ],
          [
            68,
            18
          ]
        ],
        "label": "北行穿洞到码头",
        "route": {
          "from": "岔路 A",
          "to": "海岸码头",
          "steps": [
            "在出城后的第一处岔路转向北",
            "穿过小洞窟",
            "从另一侧走到码头"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            }
          ],
          "caution": "码头后续路线需要独木舟"
        }
      },
      {
        "kind": "boat",
        "pts": [
          [
            68,
            18
          ],
          [
            60,
            10
          ],
          [
            53,
            6
          ]
        ],
        "label": "码头北行至第一座岛",
        "route": {
          "from": "海岸码头",
          "to": "熟睡草小岛",
          "steps": [
            "从码头乘独木舟向北",
            "在第一座小岛找到熟睡草宝箱"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            }
          ],
          "mode": "乘独木舟"
        }
      },
      {
        "kind": "boat",
        "pts": [
          [
            53,
            6
          ],
          [
            76,
            6
          ],
          [
            87,
            9
          ]
        ],
        "label": "第一座岛往东再往南",
        "route": {
          "from": "熟睡草小岛",
          "to": "旅人之弓小岛",
          "steps": [
            "从第一座小岛继续向东划",
            "随后向南绕至第二座小岛",
            "取旅人之弓"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            }
          ],
          "mode": "乘独木舟"
        }
      },
      {
        "kind": "stairs",
        "pts": [
          [
            50,
            42
          ],
          [
            48,
            32
          ]
        ],
        "label": "主路上台阶",
        "route": {
          "from": "中段主路",
          "to": "台阶上方岔路 B",
          "steps": [
            "返回主路",
            "从中段的楼梯上行到另一处岔路"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            }
          ],
          "caution": "这里是通往李子宝箱的台阶，不是北侧洞窟"
        }
      },
      {
        "kind": "stairs",
        "pts": [
          [
            48,
            32
          ],
          [
            38,
            35
          ]
        ],
        "label": "台阶上方转左下行",
        "route": {
          "from": "岔路 B",
          "to": "醒神李子（大）宝箱",
          "steps": [
            "在台阶上方岔路转向左",
            "沿下行台阶到宝箱",
            "取完原路回到主路"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            16,
            40
          ],
          [
            16,
            56
          ],
          [
            12,
            60
          ]
        ],
        "label": "西端分岔向南",
        "route": {
          "from": "岔路 C",
          "to": "1500叶宝箱",
          "steps": [
            "到达主路西端的最后一处分岔",
            "转向南走到尽头",
            "取箱后返回岔路 C"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            16,
            40
          ],
          [
            20,
            30
          ],
          [
            26,
            26
          ]
        ],
        "label": "西端分岔向北",
        "route": {
          "from": "岔路 C",
          "to": "黏着之花宝箱",
          "steps": [
            "在西端岔路向北",
            "查看前往大桥方向右侧的宝箱",
            "取完回到主路去大桥"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
            },
            {
              "label": "Game8 · 海道地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
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
          42
        ],
        "to": "canalbrine",
        "label": "往卡纳尔布莱恩",
        "lp": "t"
      },
      {
        "kind": "save",
        "at": [
          92,
          42
        ],
        "label": "存档点",
        "lp": "t",
        "note": "靠近卡纳尔布莱恩出口；治愈葡萄（大）箱在其左侧不远。"
      },
      {
        "kind": "exit",
        "at": [
          2,
          36
        ],
        "to": "canalbrine_bridge",
        "label": "往大桥",
        "lp": "b"
      },
      {
        "kind": "chest",
        "at": [
          84,
          50
        ],
        "tr": [
          0
        ],
        "lp": "r"
      },
      {
        "kind": "landmark",
        "at": [
          68,
          18
        ],
        "label": "码头",
        "lp": "r"
      },
      {
        "kind": "chest",
        "at": [
          53,
          6
        ],
        "tr": [
          1
        ],
        "lp": "l"
      },
      {
        "kind": "chest",
        "at": [
          87,
          9
        ],
        "tr": [
          2
        ],
        "lp": "l"
      },
      {
        "kind": "chest",
        "at": [
          38,
          35
        ],
        "tr": [
          3
        ],
        "lp": "l"
      },
      {
        "kind": "chest",
        "at": [
          12,
          60
        ],
        "tr": [
          4
        ],
        "lp": "r"
      },
      {
        "kind": "chest",
        "at": [
          26,
          26
        ],
        "tr": [
          5
        ],
        "lp": "r",
        "note": "西端岔路向北，往大桥方向的右侧。"
      },
      {
        "kind": "npc",
        "at": [
          31,
          46
        ],
        "label": "阴沉的男人（支线·夜）",
        "note": "卡丝蒂开局完成第1章后的支线「旅人的行囊」。",
        "lp": "r"
      }
    ],
    "sources": [
      {
        "label": "ArrPeeGeeZ · 西卡纳尔布莱恩海道",
        "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_99.html"
      },
      {
        "label": "Game8 · 海道地图",
        "url": "https://game8.jp/octopathtraveler2/515151"
      }
    ],
    "junctions": [
      {
        "label": "A",
        "at": [
          72,
          40
        ],
        "roads": [
          0,
          2
        ],
        "note": "由城镇向西遇到的第一处主要岔路：北行穿洞到码头，西行仍是主路。"
      },
      {
        "label": "B",
        "at": [
          48,
          32
        ],
        "roads": [
          5,
          6
        ],
        "note": "先从主路上台阶，再转左下另一段台阶取李子；不是向北去海岸码头。"
      },
      {
        "label": "C",
        "at": [
          16,
          40
        ],
        "roads": [
          0,
          7,
          8
        ],
        "note": "西端分岔：南边1500叶、北边黏着之花；主路西行去大桥。"
      }
    ]
  }
});

OT2.addDetail("harborlands", {
  "canalbrine_bridge": {
    "theme": "field",
    "size": [
      100,
      70
    ],
    "note": "东西向跨海大桥：东端接西卡纳尔布莱恩海道（右端有存档点），西端接北琉砂道并有南下道路往北康宁湾海道（南侧出口附近路旁有治愈葡萄串）。桥左侧梯子下到水面码头，可划独木舟：向右到平台、向南到小岛、穿过桥墩缺口北上到废灯塔与半截塔所在的小岛（篡夺者潜窟入口）。",
    "zones": [
      {
        "kind": "water",
        "rect": [
          14,
          0,
          86,
          70
        ]
      },
      {
        "kind": "sand",
        "rect": [
          0,
          0,
          14,
          70
        ]
      },
      {
        "kind": "sand",
        "rect": [
          88,
          30,
          12,
          18
        ]
      },
      {
        "kind": "sand",
        "poly": [
          [
            60,
            4
          ],
          [
            90,
            2
          ],
          [
            99,
            6
          ],
          [
            99,
            18
          ],
          [
            66,
            20
          ]
        ]
      },
      {
        "kind": "rock",
        "rect": [
          66,
          3,
          10,
          9
        ],
        "label": "废灯塔"
      },
      {
        "kind": "rock",
        "rect": [
          86,
          6,
          11,
          9
        ],
        "label": "半截塔"
      },
      {
        "kind": "sand",
        "circle": [
          58,
          60,
          4
        ],
        "label": "南侧小岛"
      },
      {
        "kind": "deck",
        "rect": [
          35,
          50,
          8,
          5
        ],
        "label": "平台"
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
            86,
            38
          ]
        ],
        "label": "东端存档点至桥头",
        "route": {
          "from": "东口／存档点",
          "to": "大桥东侧桥头",
          "steps": [
            "从西卡纳尔布莱恩海道进入",
            "经过存档点与附近免疫之叶宝箱，向西上桥"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ]
        }
      },
      {
        "kind": "bridge",
        "pts": [
          [
            86,
            38
          ],
          [
            50,
            38
          ],
          [
            16,
            38
          ]
        ],
        "label": "桥面东西通行",
        "route": {
          "from": "大桥东侧桥头",
          "to": "大桥西端",
          "steps": [
            "沿桥面向西穿过大桥",
            "寻找西侧通往桥底的梯子"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ],
          "caution": "桥下航线与桥面分层；图上交叉处不能直接上下桥"
        }
      },
      {
        "kind": "main",
        "pts": [
          [
            16,
            38
          ],
          [
            8,
            36
          ],
          [
            2,
            34
          ]
        ],
        "label": "西端陆路出口",
        "route": {
          "from": "大桥西端",
          "to": "北琉砂道出口",
          "steps": [
            "到西端岔路 A",
            "继续向西去北琉砂道，向南则是另一条道路"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ]
        }
      },
      {
        "kind": "main",
        "pts": [
          [
            8,
            36
          ],
          [
            10,
            52
          ],
          [
            10,
            68
          ]
        ],
        "label": "西端南下陆路",
        "route": {
          "from": "岔路 A",
          "to": "北康宁湾海道出口",
          "steps": [
            "从西端岔路向南走",
            "沿路可取治愈葡萄串",
            "继续南下离开本区"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ],
          "caution": "这条陆路不需要乘船，不要误走桥底航线"
        }
      },
      {
        "kind": "ladder",
        "pts": [
          [
            20,
            38
          ],
          [
            20,
            47
          ]
        ],
        "label": "下梯至桥底码头",
        "route": {
          "from": "桥面西侧梯子",
          "to": "桥底码头 B",
          "steps": [
            "找到桥西侧梯子并下到桥底",
            "梯子脚下附近可取冰之精灵石",
            "在码头换乘独木舟"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ],
          "caution": "从桥面到水面的换层点是梯子"
        }
      },
      {
        "kind": "boat",
        "pts": [
          [
            20,
            47
          ],
          [
            30,
            52
          ],
          [
            38,
            52
          ]
        ],
        "label": "码头向东到平台",
        "route": {
          "from": "桥底码头 B",
          "to": "桥下东侧平台",
          "steps": [
            "在码头乘独木舟",
            "沿水面向右划",
            "到平台处取骑枪"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ],
          "mode": "乘独木舟"
        }
      },
      {
        "kind": "boat",
        "pts": [
          [
            30,
            52
          ],
          [
            48,
            58
          ],
          [
            56,
            60
          ]
        ],
        "label": "水路转向南侧小岛",
        "route": {
          "from": "东行航线分叉",
          "to": "南侧小岛",
          "steps": [
            "从桥底东行水路的分叉向南划",
            "到南侧小岛取回春果酱"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ],
          "mode": "乘独木舟"
        }
      },
      {
        "kind": "boat",
        "pts": [
          [
            20,
            47
          ],
          [
            30,
            42
          ],
          [
            36,
            38
          ],
          [
            44,
            28
          ],
          [
            56,
            18
          ],
          [
            64,
            16
          ]
        ],
        "label": "桥下穿行至北岛",
        "route": {
          "from": "桥底码头 B",
          "to": "北侧小岛上岸处 C",
          "steps": [
            "在码头乘独木舟向北",
            "从桥墩缺口穿过桥下",
            "继续北上，在废灯塔所在小岛靠岸"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ],
          "mode": "乘独木舟",
          "caution": "经过的是桥下水路；不能在桥墩缺口直接登上桥面"
        }
      },
      {
        "kind": "ladder",
        "pts": [
          [
            64,
            16
          ],
          [
            70,
            9
          ],
          [
            72,
            4
          ]
        ],
        "label": "上梯取灯塔顶宝箱",
        "route": {
          "from": "北侧小岛上岸处 C",
          "to": "废灯塔顶部",
          "steps": [
            "上岸后寻找废灯塔的梯子",
            "爬到顶部取银制剑",
            "取完回到岛上分岔处"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            64,
            16
          ],
          [
            80,
            14
          ],
          [
            96,
            12
          ]
        ],
        "label": "半截塔与潜窟入口",
        "route": {
          "from": "北侧小岛上岸处 C",
          "to": "篡夺者潜窟入口",
          "steps": [
            "从上岸处向东走到半截塔",
            "进入塔内，沿入口下到篡夺者潜窟"
          ],
          "sources": [
            {
              "label": "Neoseeker · 港湾之地路线",
              "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
            },
            {
              "label": "Game8 · 大桥地图",
              "url": "https://game8.jp/octopathtraveler2/515151"
            },
            {
              "label": "AppMedia · 桥下北行至潜窟",
              "url": "https://appmedia.jp/octopathtraveler2/76519139"
            }
          ],
          "caution": "不要把取银制剑的灯塔顶当成潜窟入口"
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
        "to": "western_canalbrine_coast",
        "label": "往西卡纳尔布莱恩海道",
        "lp": "b"
      },
      {
        "kind": "exit",
        "at": [
          2,
          34
        ],
        "to": "hinoeuma/northern_ryu_sands",
        "label": "往北琉砂道",
        "lp": "t"
      },
      {
        "kind": "exit",
        "at": [
          10,
          68
        ],
        "to": "northern_conning_creek_coast",
        "label": "往北康宁湾海道",
        "lp": "r"
      },
      {
        "kind": "exit",
        "at": [
          96,
          12
        ],
        "to": "lair_of_the_usurper",
        "label": "篡夺者潜窟（半截塔内）",
        "lp": "b"
      },
      {
        "kind": "chest",
        "at": [
          84,
          38
        ],
        "tr": [
          3
        ],
        "lp": "t",
        "note": "大桥右端。"
      },
      {
        "kind": "chest",
        "at": [
          20,
          47
        ],
        "tr": [
          4
        ],
        "lp": "l"
      },
      {
        "kind": "chest",
        "at": [
          38,
          52
        ],
        "tr": [
          2
        ],
        "lp": "b"
      },
      {
        "kind": "chest",
        "at": [
          56,
          60
        ],
        "tr": [
          1
        ],
        "lp": "r"
      },
      {
        "kind": "chest",
        "at": [
          10,
          61
        ],
        "tr": [
          5
        ],
        "lp": "r",
        "note": "南侧出口（往北康宁湾海道）附近的路旁，不需乘船。"
      },
      {
        "kind": "save",
        "at": [
          91,
          39
        ],
        "label": "存档点",
        "lp": "b",
        "note": "桥右端；免疫之叶宝箱在其附近。"
      },
      {
        "kind": "chest_red",
        "at": [
          72,
          4
        ],
        "tr": [
          0
        ],
        "lp": "l",
        "note": "废灯塔顶部，前期强力剑。"
      },
      {
        "kind": "landmark",
        "at": [
          36,
          40
        ],
        "label": "桥墩缺口",
        "lp": "b"
      },
      {
        "kind": "npc",
        "at": [
          28,
          36
        ],
        "label": "造桥工",
        "npc": [
          1
        ],
        "lp": "t"
      },
      {
        "kind": "npc",
        "at": [
          44,
          36
        ],
        "label": "工头",
        "npc": [
          2
        ],
        "lp": "t"
      },
      {
        "kind": "npc",
        "at": [
          56,
          36
        ],
        "label": "新手造桥工",
        "npc": [
          0
        ],
        "lp": "t"
      }
    ],
    "sources": [
      {
        "label": "Neoseeker · 港湾之地路线",
        "url": "https://www.neoseeker.com/octopath-traveler-ii/walkthrough/WE_Castti"
      },
      {
        "label": "Game8 · 大桥地图",
        "url": "https://game8.jp/octopathtraveler2/515151"
      },
      {
        "label": "AppMedia · 桥下北行至潜窟",
        "url": "https://appmedia.jp/octopathtraveler2/76519139"
      }
    ],
    "junctions": [
      {
        "label": "A",
        "at": [
          8,
          36
        ],
        "roads": [
          2,
          3
        ],
        "note": "桥西端陆路分岔：西去北琉砂道，南去北康宁湾海道。"
      },
      {
        "label": "B",
        "at": [
          20,
          47
        ],
        "roads": [
          4,
          5,
          7
        ],
        "note": "梯子脚下的桥底码头：从这里换乘独木舟，分走东侧平台或北侧灯塔岛。",
        "labelAt": [
          25,
          45
        ]
      },
      {
        "label": "C",
        "at": [
          64,
          16
        ],
        "roads": [
          7,
          8,
          9
        ],
        "note": "北岛上岸后的分岔：向上爬灯塔取剑，向东进入半截塔找潜窟入口。"
      }
    ],
    "crossings": [
      {
        "at": [
          36,
          38
        ],
        "labelAt": [
          42,
          46
        ],
        "over": 1,
        "under": 7,
        "note": "桥面／桥下不相通"
      }
    ]
  },
  "lair_of_the_usurper": {
    "theme": "ruins",
    "size": [100, 70],
    "note": "从半截塔西侧入口进入后到存档点：存档点东侧小路可绕上上方平台；主路连下两段楼梯，第二段下的火把左侧有隐藏西向通道，下一个火把处有易忽略的西侧楼梯；之后进入东侧空地，东南三连宝箱，东北码头划船过第二个码头到西北角。无 Boss。",
    "zones": [
      { "kind": "room", "rect": [2, 2, 40, 18], "label": "入口层" },
      { "kind": "room", "rect": [4, 34, 36, 10] },
      { "kind": "room", "rect": [14, 54, 18, 12] },
      { "kind": "room", "rect": [58, 46, 38, 22], "label": "东侧空地" },
      { "kind": "water", "poly": [[48, 14], [94, 14], [94, 42], [62, 42], [48, 30]] },
      { "kind": "rock", "circle": [54, 21, 3] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 10], [16, 10], [26, 12]] },
      { "kind": "minor", "pts": [[26, 12], [36, 12], [38, 4], [28, 3]], "label": "存档点东侧右边小路绕上" },
      { "kind": "stairs", "pts": [[26, 12], [24, 22]], "label": "第一段楼梯" },
      { "kind": "main", "pts": [[24, 22], [30, 28]] },
      { "kind": "stairs", "pts": [[30, 28], [32, 38]], "label": "第二段楼梯" },
      { "kind": "hidden", "pts": [[32, 38], [20, 38], [8, 40]], "label": "火把左侧隐藏西向通道" },
      { "kind": "main", "pts": [[32, 38], [36, 48]] },
      { "kind": "stairs", "pts": [[36, 48], [28, 54], [22, 60]], "label": "火把处西侧楼梯（易忽略）" },
      { "kind": "main", "pts": [[36, 48], [50, 54], [62, 54]] },
      { "kind": "minor", "pts": [[62, 54], [72, 58], [78, 60], [85, 64], [92, 60]], "label": "往东南" },
      { "kind": "minor", "pts": [[62, 54], [74, 48], [80, 44]], "label": "东北码头" },
      { "kind": "boat", "pts": [[80, 44], [74, 34], [66, 28], [56, 22]], "label": "向西北划过第二个码头" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 10], "to": "canalbrine_bridge", "label": "入口", "lp": "b" },
      { "kind": "save", "at": [26, 12], "label": "存档点", "lp": "b" },
      { "kind": "chest", "at": [28, 3], "tr": [0], "lp": "l", "note": "存档点上方平台。" },
      { "kind": "landmark", "at": [32, 38], "label": "火把", "lp": "r" },
      { "kind": "chest", "at": [8, 40], "tr": [1], "lp": "t" },
      { "kind": "landmark", "at": [36, 48], "label": "火把", "lp": "r" },
      { "kind": "chest", "at": [22, 60], "tr": [2], "lp": "l" },
      { "kind": "chest", "at": [78, 60], "tr": [3], "lp": "l" },
      { "kind": "chest", "at": [85, 64], "tr": [4], "lp": "b" },
      { "kind": "chest", "at": [92, 60], "tr": [5], "lp": "t" },
      { "kind": "landmark", "at": [80, 44], "label": "码头", "lp": "r" },
      { "kind": "landmark", "at": [66, 28], "label": "第二个码头", "lp": "r" },
      { "kind": "chest", "at": [54, 21], "tr": [6], "lp": "l" }
    ]
  },
  "northern_conning_creek_coast": {
    "theme": "field",
    "size": [
      100,
      70
    ],
    "note": "北端接大桥南下道路，主路斜向西南通往西康宁湾海道。西北角有水池，西侧沙洲被等待中的女人挡住；中段向东伸出通往灵药公祭坛的长沙洲，途中北侧小岛与南侧小支路各有一箱。",
    "zones": [
      {
        "kind": "water",
        "poly": [
          [
            50,
            0
          ],
          [
            100,
            0
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
            54,
            50
          ],
          [
            46,
            30
          ]
        ]
      },
      {
        "kind": "water",
        "circle": [
          12,
          12,
          6
        ],
        "label": "水池"
      },
      {
        "kind": "sand",
        "rect": [
          2,
          36,
          22,
          8
        ],
        "label": "西侧沙洲"
      },
      {
        "kind": "sand",
        "poly": [
          [
            44,
            30
          ],
          [
            98,
            30
          ],
          [
            98,
            38
          ],
          [
            44,
            38
          ]
        ]
      },
      {
        "kind": "sand",
        "circle": [
          66,
          22,
          4
        ],
        "label": "小岛"
      },
      {
        "kind": "sand",
        "circle": [
          78,
          44,
          3
        ]
      }
    ],
    "paths": [
      {
        "kind": "main",
        "pts": [
          [
            40,
            2
          ],
          [
            40,
            18
          ],
          [
            36,
            30
          ],
          [
            30,
            44
          ],
          [
            20,
            56
          ],
          [
            4,
            66
          ]
        ],
        "label": "大桥至康宁湾方向主路",
        "route": {
          "from": "北口（来自大桥）",
          "to": "西康宁湾海道出口",
          "steps": [
            "从大桥南下进入",
            "沿主路走到岔路 A",
            "不去祭坛时继续向西南走到西康宁湾海道"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 北康宁湾海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_31.html"
            },
            {
              "label": "Game8 · 康宁湾周边地图",
              "url": "https://game8.jp/octopathtraveler2/515156"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            40,
            18
          ],
          [
            24,
            14
          ],
          [
            14,
            12
          ]
        ],
        "label": "北段往西北水池",
        "route": {
          "from": "北段主路",
          "to": "西北角水池宝箱",
          "steps": [
            "从北段主路向西北绕",
            "查看水池中的宝箱，取得活力石榴"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 北康宁湾海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_31.html"
            },
            {
              "label": "Game8 · 康宁湾周边地图",
              "url": "https://game8.jp/octopathtraveler2/515156"
            }
          ],
          "caution": "攻略明确了水池位置，池边细部通行仍待截图校准"
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            36,
            30
          ],
          [
            22,
            40
          ],
          [
            6,
            40
          ]
        ],
        "label": "西侧沙洲与挡路人",
        "route": {
          "from": "岔路 A",
          "to": "等待中的女人后方宝箱",
          "steps": [
            "从主路向西走上细长沙洲",
            "先处理挡路的等待中的女人",
            "越过她后取三叉戟"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 北康宁湾海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_31.html"
            },
            {
              "label": "Game8 · 康宁湾周边地图",
              "url": "https://game8.jp/octopathtraveler2/515156"
            }
          ],
          "caution": "需要清除挡路 NPC，不能只沿着主路直接走到宝箱"
        }
      },
      {
        "kind": "main",
        "pts": [
          [
            36,
            30
          ],
          [
            50,
            34
          ],
          [
            62,
            34
          ],
          [
            74,
            34
          ],
          [
            86,
            34
          ],
          [
            98,
            34
          ]
        ],
        "label": "向东走长沙洲去祭坛",
        "route": {
          "from": "岔路 A",
          "to": "灵药公祭坛入口",
          "steps": [
            "在主路中段转向东",
            "沿长沙洲前进",
            "经过两个宝箱分支后继续到祭坛"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 北康宁湾海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_31.html"
            },
            {
              "label": "Game8 · 康宁湾周边地图",
              "url": "https://game8.jp/octopathtraveler2/515156"
            }
          ],
          "caution": "这是沙洲步行路线，不是桥下独木舟航线"
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            62,
            34
          ],
          [
            66,
            26
          ],
          [
            66,
            22
          ]
        ],
        "label": "祭坛路北侧小岛",
        "route": {
          "from": "岔路 B",
          "to": "风之精灵石（大）宝箱",
          "steps": [
            "沿祭坛沙洲到岔路 B",
            "转往北侧伸出的小岛支路",
            "取箱后返回同一条沙洲"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 北康宁湾海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_31.html"
            },
            {
              "label": "Game8 · 康宁湾周边地图",
              "url": "https://game8.jp/octopathtraveler2/515156"
            }
          ]
        }
      },
      {
        "kind": "minor",
        "pts": [
          [
            74,
            34
          ],
          [
            78,
            44
          ]
        ],
        "label": "祭坛路南侧支路",
        "route": {
          "from": "岔路 C",
          "to": "破盔之斧宝箱",
          "steps": [
            "继续沿祭坛沙洲向东",
            "在小岛南面另一条分支向南走",
            "取箱后返回沙洲"
          ],
          "sources": [
            {
              "label": "ArrPeeGeeZ · 北康宁湾海道",
              "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_31.html"
            },
            {
              "label": "Game8 · 康宁湾周边地图",
              "url": "https://game8.jp/octopathtraveler2/515156"
            }
          ]
        }
      }
    ],
    "pois": [
      {
        "kind": "exit",
        "at": [
          40,
          2
        ],
        "to": "canalbrine_bridge",
        "label": "往卡纳尔布莱恩大桥",
        "lp": "r"
      },
      {
        "kind": "exit",
        "at": [
          4,
          66
        ],
        "to": "western_conning_creek_coast",
        "label": "往西康宁湾海道",
        "lp": "r"
      },
      {
        "kind": "exit",
        "at": [
          98,
          34
        ],
        "to": "altar_of_the_charitable",
        "label": "灵药公祭坛",
        "lp": "b"
      },
      {
        "kind": "chest",
        "at": [
          12,
          12
        ],
        "tr": [
          0
        ],
        "lp": "b"
      },
      {
        "kind": "npc",
        "at": [
          16,
          40
        ],
        "label": "等待中的女人",
        "npc": [
          0
        ],
        "lp": "t"
      },
      {
        "kind": "chest",
        "at": [
          6,
          40
        ],
        "tr": [
          3
        ],
        "lp": "b",
        "note": "需击倒挡路的等待中的女人。"
      },
      {
        "kind": "chest",
        "at": [
          66,
          22
        ],
        "tr": [
          1
        ],
        "lp": "r"
      },
      {
        "kind": "chest",
        "at": [
          78,
          44
        ],
        "tr": [
          2
        ],
        "lp": "r"
      }
    ],
    "sources": [
      {
        "label": "ArrPeeGeeZ · 北康宁湾海道",
        "url": "https://www.arrpeegeez.com/2023/02/octopath-traveler-ii-walkthrough-area_31.html"
      },
      {
        "label": "Game8 · 康宁湾周边地图",
        "url": "https://game8.jp/octopathtraveler2/515156"
      }
    ],
    "junctions": [
      {
        "label": "A",
        "at": [
          36,
          30
        ],
        "roads": [
          0,
          2,
          3
        ],
        "note": "主路中段分岔：西侧沙洲有挡路女人，东侧长沙洲去祭坛；主路继续往西南。"
      },
      {
        "label": "B",
        "at": [
          62,
          34
        ],
        "roads": [
          3,
          4
        ],
        "note": "祭坛路第一处分支，向北取风之精灵石（大）。"
      },
      {
        "label": "C",
        "at": [
          74,
          34
        ],
        "roads": [
          3,
          5
        ],
        "note": "祭坛路另一处分支，向南取破盔之斧；直行向东仍去祭坛。"
      }
    ]
  },
  "altar_of_the_charitable": {
    "theme": "shrine",
    "size": [100, 70],
    "note": "北康宁湾海道向东伸入海中的长沙洲尽头，一本道通往祭坛，无守护者；带卡丝蒂前来习得EX技能。",
    "zones": [
      { "kind": "water", "rect": [0, 0, 100, 70] },
      { "kind": "sand", "poly": [[0, 30], [40, 30], [60, 27], [72, 22], [96, 22], [96, 50], [72, 50], [60, 42], [40, 40], [0, 40]] },
      { "kind": "room", "rect": [72, 24, 24, 24], "label": "祭坛" },
      { "kind": "rock", "circle": [78, 28, 2] },
      { "kind": "rock", "circle": [78, 44, 2] }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 35], [20, 35], [40, 35]] },
      { "kind": "main", "pts": [[40, 35], [58, 34], [72, 36]] },
      { "kind": "stairs", "pts": [[72, 36], [80, 36]], "label": "祭坛阶梯" },
      { "kind": "main", "pts": [[80, 36], [88, 36]] }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 35], "to": "northern_conning_creek_coast", "label": "往北康宁湾海道", "lp": "b" },
      { "kind": "landmark", "at": [28, 35], "label": "长沙洲", "lp": "t" },
      { "kind": "landmark", "at": [58, 34], "label": "沙洲尽头", "lp": "b" },
      { "kind": "gate", "at": [72, 36], "label": "祭坛入口", "lp": "t" },
      { "kind": "stairs", "at": [80, 36], "label": "阶梯", "lp": "b" },
      { "kind": "shrine", "at": [88, 36], "label": "灵药公祭坛", "lp": "t", "note": "卡丝蒂习得EX技能「Drastic Measures」。" }
    ]
  },
  "western_conning_creek_coast": {
    "theme": "field",
    "size": [100, 70],
    "note": "东口接康宁湾，入口西侧有民房与阶梯下的葡萄园；主路向西南通往东赛砂道。中段北上的道路通往东北的北康宁湾海道，途中有上下两片海滩（下方海滩码头可划船到东侧小岛），北部海滩左侧有隐藏通路通往月与太阳洞窟。",
    "zones": [
      { "kind": "water", "poly": [[72, 18], [100, 18], [100, 44], [76, 40], [68, 32]] },
      { "kind": "sand", "rect": [72, 8, 18, 9], "label": "上方海滩" },
      { "kind": "sand", "rect": [56, 22, 14, 10], "label": "下方海滩" },
      { "kind": "sand", "rect": [36, 12, 16, 10], "label": "北部海滩" },
      { "kind": "grass", "circle": [92, 30, 3] },
      { "kind": "farm", "rect": [70, 58, 24, 10], "label": "葡萄园" },
      { "kind": "house", "rect": [84, 43, 8, 6] },
      { "kind": "grass", "rect": [4, 30, 30, 18] }
    ],
    "paths": [
      { "kind": "main", "pts": [[98, 56], [84, 52], [66, 50], [44, 46], [24, 52], [14, 58], [2, 62]] },
      { "kind": "stairs", "pts": [[78, 51], [78, 58]], "label": "葡萄园阶梯" },
      { "kind": "minor", "pts": [[78, 58], [90, 66]], "label": "最下一排" },
      { "kind": "minor", "pts": [[14, 58], [8, 54]] },
      { "kind": "main", "pts": [[44, 46], [48, 32], [56, 20], [70, 10], [94, 3]] },
      { "kind": "minor", "pts": [[70, 10], [82, 13]], "label": "东北上方海滩" },
      { "kind": "minor", "pts": [[56, 20], [64, 26], [70, 29]], "label": "东北下方海滩" },
      { "kind": "boat", "pts": [[70, 29], [82, 33], [91, 30]], "label": "划船向东" },
      { "kind": "minor", "pts": [[56, 20], [46, 17]], "label": "北部海滩" },
      { "kind": "hidden", "pts": [[46, 17], [40, 10], [40, 2]], "label": "海滩左边的隐藏通路" }
    ],
    "pois": [
      { "kind": "exit", "at": [98, 56], "to": "conning_creek", "label": "往康宁湾", "lp": "t" },
      { "kind": "exit", "at": [2, 62], "to": "hinoeuma/eastern_sai_sands", "label": "往东赛砂道", "lp": "t" },
      { "kind": "exit", "at": [94, 3], "to": "northern_conning_creek_coast", "label": "往北康宁湾海道", "lp": "l" },
      { "kind": "exit", "at": [40, 2], "to": "cavern_of_the_moon_and_sun", "label": "月与太阳洞窟", "lp": "r" },
      { "kind": "npc", "at": [86, 50], "label": "商人", "npc": [1], "lp": "t" },
      { "kind": "npc", "at": [78, 58], "label": "葡萄农", "npc": [0], "lp": "l" },
      { "kind": "chest", "at": [90, 66], "tr": [0], "lp": "l", "note": "葡萄园最下一排的右端。" },
      { "kind": "chest", "at": [8, 54], "tr": [1], "lp": "t" },
      { "kind": "chest", "at": [82, 13], "tr": [2], "lp": "r" },
      { "kind": "landmark", "at": [70, 29], "label": "码头", "lp": "l" },
      { "kind": "chest", "at": [91, 30], "tr": [3], "lp": "l" }
    ]
  },
  "cavern_of_the_moon_and_sun": {
    "theme": "cave",
    "size": [100, 70],
    "note": "南侧入口处有存档点，两条路向北：左（西北）路是空的死胡同，走右路北上到路口：右转沿蜡烛路到宝箱死胡同；回路口向北进入黑暗区，左侧两段楼梯中较隐蔽的南向楼梯下有一个红色宝箱，西向楼梯向北途中左侧有小支路，最终到达最深处平台（昼夜切换出现蓝色光点）。",
    "zones": [
      { "kind": "room", "rect": [36, 52, 28, 16], "label": "入口" },
      { "kind": "room", "rect": [24, 24, 40, 22], "label": "黑暗区" },
      { "kind": "room", "rect": [16, 2, 36, 14], "label": "最深处平台" },
      { "kind": "room", "rect": [66, 34, 24, 18], "label": "蜡烛路" },
      { "kind": "room", "rect": [6, 18, 14, 10] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 50]] },
      { "kind": "minor", "pts": [[50, 50], [70, 48], [84, 40]], "label": "沿蜡烛路右转" },
      { "kind": "main", "pts": [[50, 50], [50, 36]], "label": "向北进入黑暗区" },
      { "kind": "stairs", "pts": [[50, 36], [36, 32]], "label": "西向楼梯" },
      { "kind": "main", "pts": [[36, 32], [26, 24], [24, 14], [32, 8]] },
      { "kind": "minor", "pts": [[25, 22], [12, 23]], "label": "向北途中左侧小支路" },
      { "kind": "stairs", "pts": [[50, 36], [42, 40], [34, 48]], "label": "较隐蔽的南向楼梯" },
      { "kind": "minor", "pts": [[50, 58], [46, 57], [40, 57]], "label": "左（西北）路：空的死胡同" }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "western_conning_creek_coast", "label": "入口", "lp": "r" },
      { "kind": "landmark", "at": [50, 50], "label": "路口", "lp": "r" },
      { "kind": "chest", "at": [84, 40], "tr": [0], "lp": "l" },
      { "kind": "save", "at": [50, 62], "label": "存档点", "lp": "r", "note": "入口处存档点；从这里起有两条路向北，左（西北）路是空的死胡同，右（东北）路才是正路。" },
      { "kind": "chest_red", "at": [34, 48], "tr": [1], "lp": "l", "note": "红色宝箱（强力腰带）。" },
      { "kind": "chest", "at": [12, 23], "tr": [2], "lp": "b" },
      { "kind": "danger", "at": [53, 37], "label": "胖凯特等出没", "lp": "r" },
      { "kind": "stairs", "at": [36, 32], "label": "西向楼梯", "lp": "t" },
      { "kind": "landmark", "at": [26, 24], "label": "倒塌的石柱", "lp": "r" },
      { "kind": "landmark", "at": [32, 8], "label": "蓝色光点（昼夜切换）", "lp": "r" }
    ]
  }
});

OT2.addDetail("harborlands", {
  "conning_creek": {
    "theme": "town",
    "size": [100, 70],
    "note": "分城镇、港口、郊外三部分：西口接西康宁湾海道，中央广场（存档点）北面楼梯上到卫兵队基地；城镇北路通往东北的港口海滩（北侧海滩西北端有彩虹玻璃瓶，东侧码头划船去海神洞窟小岛）；东南为郊外，有墓地与奥斯瓦尔德烧毁的旧居及后方书房洞窟。",
    "zones": [
      { "kind": "water", "poly": [[64, 0], [100, 0], [100, 28], [88, 24], [76, 22], [66, 10]] },
      { "kind": "sand", "poly": [[54, 2], [64, 0], [66, 10], [76, 22], [88, 24], [100, 28], [100, 34], [70, 32], [56, 22]], "label": "港口海滩" },
      { "kind": "rock", "circle": [95, 8, 4], "label": "小岛" },
      { "kind": "deck", "rect": [64, 26, 14, 6], "label": "港口" },
      { "kind": "building", "rect": [36, 2, 16, 8], "label": "卫兵队基地" },
      { "kind": "house", "rect": [48, 14, 8, 6] },
      { "kind": "building", "rect": [22, 28, 10, 7], "label": "杂货店" },
      { "kind": "deck", "rect": [13, 22, 6, 5] },
      { "kind": "building", "rect": [12, 48, 10, 7], "label": "旅店" },
      { "kind": "building", "rect": [12, 58, 10, 8], "label": "药师公会" },
      { "kind": "building", "rect": [36, 50, 12, 8], "label": "酒馆" },
      { "kind": "house", "rect": [26, 52, 8, 6] },
      { "kind": "plaza", "circle": [38, 40, 5], "label": "广场" },
      { "kind": "plaza", "circle": [44, 64, 4], "label": "市场" },
      { "kind": "grass", "rect": [62, 40, 38, 30], "label": "郊外" },
      { "kind": "field", "rect": [74, 42, 12, 8], "label": "墓地" },
      { "kind": "house", "rect": [80, 56, 10, 8], "label": "烧毁的旧居" },
      { "kind": "rock", "rect": [93, 56, 7, 12], "label": "书房" }
    ],
    "paths": [
      { "kind": "main", "pts": [[2, 44], [20, 42], [30, 41], [38, 40], [48, 42], [56, 40]], "smooth": false },
      { "kind": "stairs", "pts": [[38, 40], [41, 22], [44, 10]], "label": "通往卫兵队基地的楼梯" },
      { "kind": "minor", "pts": [[41, 22], [52, 19]], "label": "楼梯右侧民居" },
      { "kind": "minor", "pts": [[20, 42], [26, 35]] },
      { "kind": "minor", "pts": [[26, 35], [18, 32], [16, 25]], "label": "杂货店后方左侧小平台" },
      { "kind": "minor", "pts": [[20, 42], [10, 46], [8, 56], [12, 60]], "label": "旅店南侧" },
      { "kind": "minor", "pts": [[20, 42], [23, 46]] },
      { "kind": "minor", "pts": [[30, 41], [30, 52]] },
      { "kind": "minor", "pts": [[38, 40], [42, 49]] },
      { "kind": "minor", "pts": [[48, 42], [50, 58], [44, 64]], "label": "酒馆南侧市场" },
      { "kind": "main", "pts": [[56, 40], [60, 32], [66, 28]], "label": "城镇北路（往港口）" },
      { "kind": "minor", "pts": [[66, 28], [60, 16], [56, 5]], "label": "北侧海滩向西北到尽头" },
      { "kind": "main", "pts": [[66, 28], [80, 28], [92, 30]], "label": "沿海滩向东" },
      { "kind": "boat", "pts": [[92, 30], [96, 20], [96, 12]], "label": "划船到小岛" },
      { "kind": "main", "pts": [[56, 40], [66, 46], [78, 52], [84, 56]], "label": "往郊外" },
      { "kind": "minor", "pts": [[78, 52], [82, 47], [89, 46]], "label": "墓地右侧" },
      { "kind": "minor", "pts": [[84, 56], [86, 53], [92, 53]], "label": "绕到屋后" },
      { "kind": "minor", "pts": [[92, 53], [96, 63]], "label": "右侧洞窟书房" }
    ],
    "pois": [
      { "kind": "exit", "at": [2, 44], "to": "western_conning_creek_coast", "label": "西口", "lp": "t" },
      { "kind": "exit", "at": [44, 9], "to": "guard_outpost", "label": "卫兵队基地", "dir": "东北", "lp": "r" },
      { "kind": "exit", "at": [96, 11], "to": "cavern_of_the_sea_god", "label": "海神洞窟", "lp": "l" },
      { "kind": "save", "at": [38, 40], "label": "存档点", "lp": "b" },
      { "kind": "npc", "at": [45, 43], "label": "镇民（夜·摊位）", "npc": [3], "lp": "r" },
      { "kind": "chest", "at": [52, 19], "tr": [0], "lp": "r" },
      { "kind": "shop", "at": [27, 35], "label": "杂货店（兼卖装备）", "lp": "t" },
      { "kind": "npc", "at": [21, 39], "label": "杂货店旁卫兵", "npc": [1], "lp": "l" },
      { "kind": "chest", "at": [16, 25], "tr": [1], "lp": "l", "note": "需先击倒杂货店旁的卫兵。" },
      { "kind": "inn", "at": [16, 46], "label": "旅店", "npc": [8], "lp": "l" },
      { "kind": "hidden", "at": [23, 46], "label": "隐藏暴击戒指", "note": "郊外路上卫兵的情报：旅店旁木桶之间。", "lp": "b" },
      { "kind": "guild", "at": [12, 60], "label": "药师公会", "npc": [7], "lp": "r" },
      { "kind": "house", "at": [30, 52], "label": "克拉丽莎宅（通关后）", "npc": [10], "lp": "b" },
      { "kind": "tavern", "at": [42, 49], "label": "酒馆", "npc": [4, 5, 6, 11], "lp": "r" },
      { "kind": "npc", "at": [58, 34], "label": "渔夫", "npc": [0], "lp": "l" },
      { "kind": "npc", "at": [74, 31], "label": "港口镇民", "npc": [9], "lp": "b" },
      { "kind": "chest", "at": [56, 5], "tr": [4], "lp": "r" },
      { "kind": "boss", "at": [82, 28], "label": "阿尔皮翁（挑衅）", "lp": "t" },
      { "kind": "landmark", "at": [92, 30], "label": "东侧码头", "lp": "b" },
      { "kind": "npc", "at": [64, 45], "label": "郊外路上卫兵", "npc": [2], "lp": "b" },
      { "kind": "npc", "at": [82, 44], "label": "冷漠少女（墓地）", "lp": "t" },
      { "kind": "chest", "at": [89, 46], "tr": [2], "lp": "b" },
      { "kind": "chest", "at": [92, 53], "tr": [3], "lp": "t" },
      { "kind": "boss", "at": [96, 63], "label": "克拉丽莎夫人", "lp": "l" }
    ]
  },
  "guard_outpost": {
    "theme": "castle",
    "size": [120, 70],
    "note": "三层并排：1F 进门壁炉右侧一箱，走廊楼梯下方向北是小客厅；2F 走廊一路向东，第二个房间与东端房间各一箱；顶层存档点右侧墙壁有隐藏通路向南绕出，北端为队长所在。楼层间位置为示意。",
    "zones": [
      { "kind": "room", "rect": [2, 4, 36, 62], "label": "1F" },
      { "kind": "room", "rect": [4, 6, 14, 12], "label": "小客厅" },
      { "kind": "room", "rect": [42, 4, 36, 62], "label": "2F" },
      { "kind": "room", "rect": [56, 26, 14, 10], "label": "第二个房间" },
      { "kind": "room", "rect": [70, 40, 7, 14] },
      { "kind": "room", "rect": [82, 4, 36, 62], "label": "顶层" },
      { "kind": "room", "rect": [88, 2, 24, 14], "label": "队长室" }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 66], [20, 58], [20, 40], [34, 30]] },
      { "kind": "minor", "pts": [[20, 58], [32, 60]], "label": "壁炉右侧" },
      { "kind": "minor", "pts": [[20, 40], [14, 28], [10, 13]], "label": "楼梯下方往北" },
      { "kind": "stairs", "pts": [[34, 30], [40, 46], [46, 60]], "label": "上2F" },
      { "kind": "main", "pts": [[46, 60], [48, 48], [60, 48], [66, 48], [75, 48]], "label": "二楼走廊（一路往东）", "smooth": false },
      { "kind": "minor", "pts": [[52, 48], [50, 40]], "label": "第一个房间" },
      { "kind": "minor", "pts": [[60, 48], [62, 33]], "label": "第二个房间" },
      { "kind": "main", "pts": [[66, 48], [68, 26], [76, 16]] },
      { "kind": "stairs", "pts": [[76, 16], [80, 40], [86, 62]], "label": "上顶层" },
      { "kind": "main", "pts": [[86, 62], [96, 50], [98, 34]] },
      { "kind": "hidden", "pts": [[98, 34], [110, 34], [114, 48], [108, 60]], "label": "存档点右侧隐藏通路（向南绕出）" },
      { "kind": "main", "pts": [[98, 34], [100, 10]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 66], "to": "conning_creek", "label": "入口", "dir": "西南", "lp": "r" },
      { "kind": "chest", "at": [32, 60], "tr": [0], "lp": "t" },
      { "kind": "chest", "at": [10, 13], "tr": [3], "lp": "r", "note": "小客厅壁炉前。" },
      { "kind": "stairs", "at": [34, 30], "label": "楼梯", "lp": "r" },
      { "kind": "stairs", "at": [46, 60], "label": "2F", "lp": "r" },
      { "kind": "chest", "at": [62, 33], "tr": [1], "lp": "r", "note": "桌子与武器架旁。" },
      { "kind": "chest", "at": [75, 48], "tr": [2], "lp": "t" },
      { "kind": "stairs", "at": [76, 16], "label": "楼梯", "lp": "l" },
      { "kind": "stairs", "at": [86, 62], "label": "顶层", "lp": "r" },
      { "kind": "save", "at": [98, 34], "label": "存档点", "lp": "l" },
      { "kind": "chest", "at": [108, 60], "tr": [4], "lp": "l" },
      { "kind": "boss", "at": [100, 10], "label": "斯坦瓦队长", "lp": "r" }
    ]
  },
  "cavern_of_the_sea_god": {
    "theme": "cave",
    "size": [100, 70],
    "note": "从西南的岛岸入口进洞：存档点前右转有旁路；存档点后斜坡上到吊桥，斜坡右侧有北向隐藏通道；过桥后火把路向西可绕石柱上高台，向东经南下楼梯到最深处取得卵。无 Boss。",
    "zones": [
      { "kind": "water", "rect": [0, 58, 14, 12] },
      { "kind": "room", "rect": [2, 46, 26, 20], "label": "入口" },
      { "kind": "room", "rect": [30, 34, 26, 20] },
      { "kind": "pit", "rect": [50, 18, 12, 12] },
      { "kind": "room", "rect": [22, 2, 72, 14], "label": "火把路" },
      { "kind": "rock", "circle": [36, 8, 3], "label": "石柱" },
      { "kind": "room", "rect": [78, 40, 20, 26], "label": "最深处" }
    ],
    "paths": [
      { "kind": "main", "pts": [[4, 64], [20, 54], [36, 48]] },
      { "kind": "minor", "pts": [[36, 48], [42, 60], [52, 64]], "label": "存档点前右转旁路" },
      { "kind": "main", "pts": [[36, 48], [44, 44]] },
      { "kind": "main", "pts": [[44, 44], [50, 40], [56, 32]], "label": "通往吊桥的斜坡" },
      { "kind": "hidden", "pts": [[52, 38], [64, 34], [70, 24]], "label": "斜坡右侧北向隐藏通道" },
      { "kind": "bridge", "pts": [[56, 32], [56, 16]], "label": "吊桥" },
      { "kind": "minor", "pts": [[56, 16], [44, 12], [38, 4], [28, 12]], "label": "火把路西侧绕石柱上高台" },
      { "kind": "main", "pts": [[56, 16], [70, 8], [86, 10], [90, 24]] },
      { "kind": "stairs", "pts": [[90, 24], [90, 46]], "label": "南下楼梯" },
      { "kind": "minor", "pts": [[90, 46], [82, 50]], "label": "楼梯底部左侧" },
      { "kind": "main", "pts": [[90, 46], [94, 60]] }
    ],
    "pois": [
      { "kind": "exit", "at": [4, 64], "to": "conning_creek", "label": "洞口（往康宁湾）", "dir": "西南", "lp": "t" },
      { "kind": "chest", "at": [52, 64], "tr": [0], "lp": "r" },
      { "kind": "save", "at": [44, 44], "label": "存档点", "lp": "l" },
      { "kind": "chest", "at": [70, 23], "tr": [1], "lp": "r" },
      { "kind": "landmark", "at": [56, 24], "label": "吊桥", "lp": "l" },
      { "kind": "chest", "at": [28, 12], "tr": [2], "lp": "b" },
      { "kind": "landmark", "at": [70, 8], "label": "火把路", "lp": "t" },
      { "kind": "stairs", "at": [90, 24], "label": "南下楼梯", "lp": "l" },
      { "kind": "chest", "at": [82, 50], "tr": [3], "lp": "l" },
      { "kind": "landmark", "at": [94, 60], "label": "卵（最深处）", "lp": "l" }
    ]
  }
});

OT2.addDetail("harborlands", {
  "roque_island_anchorage": {
    "theme": "port",
    "size": [100, 70],
    "note": "西北码头靠岸后沿砖石路经存档点与办公室向东，进城前的岔路北上入城；岔路向东可下到码头，沿东侧海湾向北划船，继续向北再向西在第三个码头上岸。办公室后的崖边有隐藏物；进城前岔路向左上楼梯到方形空地，围栏缺口内有治愈葡萄串。",
    "zones": [
      { "kind": "water", "poly": [[0, 0], [24, 0], [18, 30], [0, 36]] },
      { "kind": "water", "poly": [[74, 0], [100, 0], [100, 50], [80, 46], [72, 30]] },
      { "kind": "deck", "rect": [6, 1, 14, 8], "label": "停泊码头" },
      { "kind": "cliff", "rect": [30, 4, 16, 8] },
      { "kind": "building", "rect": [30, 13, 12, 8], "label": "办公室" },
      { "kind": "deck", "rect": [70, 35, 8, 6] },
      { "kind": "deck", "rect": [87, 11, 7, 6] },
      { "kind": "deck", "rect": [75, 5, 7, 6] },
      { "kind": "grass", "rect": [20, 40, 46, 26] }
    ],
    "paths": [
      { "kind": "main", "pts": [[12, 6], [24, 18], [30, 26], [44, 30], [56, 28]], "label": "砖石路" },
      { "kind": "main", "pts": [[56, 28], [58, 14], [56, 2]], "label": "进城" },
      { "kind": "minor", "pts": [[36, 27], [36, 21]] },
      { "kind": "hidden", "pts": [[44, 30], [42, 24], [46, 16], [40, 10]], "label": "办公室后崖边" },
      { "kind": "minor", "pts": [[58, 14], [52, 13]], "label": "左侧缺口的围栏" },
      { "kind": "minor", "pts": [[56, 28], [66, 34], [74, 38]], "label": "北侧岔路往东下到码头" },
      { "kind": "boat", "pts": [[74, 38], [86, 34], [90, 26], [90, 14]], "label": "向北划船" },
      { "kind": "boat", "pts": [[90, 14], [84, 9], [78, 8]], "label": "继续向北再向西" },
      { "kind": "minor", "pts": [[78, 8], [70, 6]] }
    ],
    "pois": [
      { "kind": "ship", "at": [10, 4], "to": "sundering_sea/anchorage_canalbrine", "label": "停泊所（出航）", "lp": "r" },
      { "kind": "exit", "at": [56, 2], "to": "roque_island", "label": "往洛克岛城镇", "lp": "r" },
      { "kind": "save", "at": [30, 26], "label": "存档点", "lp": "b" },
      { "kind": "npc", "at": [24, 22], "label": "卫兵", "npc": [0], "lp": "l" },
      { "kind": "hidden", "at": [40, 10], "label": "隐藏衰弱花", "note": "职员的情报：办公室后崖边。", "lp": "l" },
      { "kind": "npc", "at": [44, 32], "label": "职员", "npc": [1], "lp": "b" },
      { "kind": "npc", "at": [58, 31], "label": "商人与老人/女工(夜)", "npc": [2, 3], "lp": "r" },
      { "kind": "landmark", "at": [74, 38], "label": "码头", "lp": "b" },
      { "kind": "chest", "at": [90, 26], "tr": [0], "lp": "l" },
      { "kind": "landmark", "at": [90, 14], "label": "第二个码头", "lp": "l" },
      { "kind": "landmark", "at": [78, 8], "label": "第三个码头", "lp": "b" },
      { "kind": "chest", "at": [70, 6], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [52, 13], "tr": [2], "lp": "l", "note": "进城楼梯西侧：从岔路向左上楼梯到方形空地，左侧围栏有缺口，钻进去开箱。" },
      { "kind": "danger", "at": [84, 37], "label": "噬船鲨", "lp": "l" }
    ]
  },
  "roque_island": {
    "theme": "city",
    "size": [100, 70],
    "note": "南口接停泊所，主街北上经广场存档点到北端洛克公司总部大门。存档点西侧卫兵挡住西北仓库（6宝箱）；西侧阳台俯瞰西南的酒馆，酒馆暗门可绕到总部侧街；东侧武器店与楼梯之间一箱，楼梯上到总部大门东侧。",
    "zones": [
      { "kind": "building", "rect": [36, 2, 28, 9], "label": "洛克公司总部" },
      { "kind": "building", "rect": [4, 8, 18, 10], "label": "仓库" },
      { "kind": "deck", "rect": [2, 39, 9, 7], "label": "阳台" },
      { "kind": "building", "rect": [6, 50, 14, 10], "label": "酒馆" },
      { "kind": "house", "rect": [22, 60, 8, 6] },
      { "kind": "building", "rect": [34, 58, 10, 7], "label": "道具店" },
      { "kind": "building", "rect": [62, 28, 12, 8], "label": "武器店" },
      { "kind": "building", "rect": [62, 52, 12, 7], "label": "旅店" },
      { "kind": "plaza", "circle": [50, 40, 5], "label": "广场" },
      { "kind": "wall", "rect": [80, 14, 4, 30] }
    ],
    "paths": [
      { "kind": "main", "pts": [[50, 68], [50, 56], [50, 40], [50, 24], [50, 12]], "label": "主街", "smooth": false },
      { "kind": "main", "pts": [[50, 12], [50, 4]] },
      { "kind": "minor", "pts": [[50, 40], [38, 38], [24, 30], [14, 22], [12, 16]], "label": "存档点西侧→仓库" },
      { "kind": "minor", "pts": [[24, 30], [10, 40], [6, 43]], "label": "西侧阳台" },
      { "kind": "minor", "pts": [[50, 56], [34, 56], [20, 56]] },
      { "kind": "minor", "pts": [[34, 56], [39, 58]] },
      { "kind": "minor", "pts": [[30, 56], [26, 61]] },
      { "kind": "hidden", "pts": [[12, 50], [2, 36], [2, 4], [34, 4]], "label": "酒馆暗门→总部侧街" },
      { "kind": "minor", "pts": [[50, 40], [66, 40], [78, 40]] },
      { "kind": "minor", "pts": [[66, 40], [68, 36]] },
      { "kind": "stairs", "pts": [[78, 40], [86, 30], [76, 20], [60, 12]], "label": "楼梯→总部大门东侧" },
      { "kind": "minor", "pts": [[50, 56], [66, 54]] },
      { "kind": "minor", "pts": [[50, 62], [56, 62]] }
    ],
    "pois": [
      { "kind": "exit", "at": [50, 68], "to": "roque_island_anchorage", "label": "南口（往停泊所）", "lp": "r" },
      { "kind": "exit", "at": [50, 4], "to": "roque_company", "label": "总部（西栋/东栋）", "lp": "r" },
      { "kind": "gate", "at": [50, 12], "label": "总部大门", "lp": "r" },
      { "kind": "npc", "at": [47, 18], "label": "总部门卫", "npc": [2], "lp": "l" },
      { "kind": "chest", "at": [60, 12], "tr": [3], "lp": "b" },
      { "kind": "save", "at": [50, 40], "label": "存档点", "lp": "t" },
      { "kind": "hidden", "at": [50, 47], "label": "雕像上的隐藏体力项链", "lp": "r" },
      { "kind": "npc", "at": [38, 38], "label": "仓库卫兵（强敌）", "npc": [0], "lp": "t" },
      { "kind": "chest", "at": [12, 15], "tr": [2], "label": "仓库6宝箱", "note": "魔导坚果（特大）、复苏果酱×3、39800叶、底力荔枝（特大）；需击倒挡路的卫兵（建议突袭）。", "lp": "r" },
      { "kind": "chest", "at": [6, 43], "tr": [0], "lp": "r" },
      { "kind": "tavern", "at": [20, 56], "label": "酒馆（暗门）", "npc": [4, 8], "lp": "t" },
      { "kind": "house", "at": [26, 61], "label": "女工民居", "npc": [3], "lp": "b" },
      { "kind": "item", "at": [39, 58], "label": "道具店", "npc": [6], "lp": "b" },
      { "kind": "npc", "at": [47, 61], "label": "夜间工人", "npc": [5], "lp": "r" },
      { "kind": "npc", "at": [56, 62], "label": "瑟斯顿（通关后）", "npc": [7], "lp": "r" },
      { "kind": "weapon", "at": [68, 36], "label": "武器防具店", "npc": [1], "lp": "t" },
      { "kind": "chest", "at": [76, 40], "tr": [1], "lp": "b" },
      { "kind": "inn", "at": [66, 54], "label": "旅店", "lp": "r" },
      { "kind": "landmark", "at": [34, 4], "label": "总部侧街", "lp": "b" }
    ]
  },
  "roque_company": {
    "theme": "dungeon",
    "size": [120, 70],
    "note": "左为西栋（工厂）、右为东栋（办公楼）。西栋：入口存档点→东侧楼梯下杂物区；猫道向东、南到交叉口，东侧梯子下厂房熔炉；北侧油池楼梯后码头划船；从猫道走出天桥进入东栋上层。东栋：下楼前向南支路，下层北侧一排办公室，偏西办公室外有隐藏楼梯；一楼右侧最后一间办公室，存档后出门迎战黑曜号。",
    "zones": [
      { "kind": "room", "rect": [2, 4, 56, 62], "label": "西栋" },
      { "kind": "swamp", "rect": [26, 5, 24, 10], "label": "油池" },
      { "kind": "room", "rect": [36, 46, 20, 18], "label": "厂房" },
      { "kind": "lava", "rect": [50, 57, 5, 5] },
      { "kind": "room", "rect": [62, 4, 56, 18], "label": "东栋 上层" },
      { "kind": "room", "rect": [62, 24, 56, 24], "label": "东栋 下层" },
      { "kind": "house", "rect": [64, 22, 6, 7] },
      { "kind": "room", "rect": [62, 50, 56, 16], "label": "东栋 1F" }
    ],
    "paths": [
      { "kind": "main", "pts": [[14, 68], [14, 58]] },
      { "kind": "stairs", "pts": [[14, 58], [24, 60], [30, 64]], "label": "入口东侧楼梯下（杂物区）" },
      { "kind": "main", "pts": [[14, 58], [14, 40], [34, 36], [44, 36], [44, 44]], "label": "猫道" },
      { "kind": "minor", "pts": [[44, 44], [44, 56]], "label": "交叉口继续往南" },
      { "kind": "ladder", "pts": [[44, 44], [52, 46], [52, 55]], "label": "交叉口东侧梯子" },
      { "kind": "main", "pts": [[14, 40], [14, 24]] },
      { "kind": "stairs", "pts": [[14, 24], [22, 18]], "label": "油池楼梯" },
      { "kind": "boat", "pts": [[22, 18], [34, 10], [48, 10]], "label": "划过油池" },
      { "kind": "bridge", "pts": [[44, 36], [56, 26], [64, 14]], "label": "天桥" },
      { "kind": "main", "pts": [[64, 14], [80, 14], [96, 14]], "smooth": false },
      { "kind": "minor", "pts": [[86, 14], [86, 20]], "label": "下楼前向南的支路" },
      { "kind": "stairs", "pts": [[96, 14], [110, 20], [112, 36]], "label": "下楼" },
      { "kind": "main", "pts": [[112, 36], [104, 36], [96, 36], [88, 36], [80, 36], [70, 36]], "smooth": false },
      { "kind": "minor", "pts": [[104, 36], [104, 30]] },
      { "kind": "minor", "pts": [[96, 36], [96, 30]], "label": "北侧第二间" },
      { "kind": "minor", "pts": [[88, 36], [88, 30]] },
      { "kind": "minor", "pts": [[80, 36], [80, 30]], "label": "北侧第四间" },
      { "kind": "minor", "pts": [[72, 36], [74, 44]], "label": "偏西的办公室" },
      { "kind": "hidden", "pts": [[70, 36], [67, 30], [67, 27]], "label": "左侧墙壁隐藏楼梯" },
      { "kind": "stairs", "pts": [[70, 36], [68, 46], [70, 56]], "label": "下到 1F" },
      { "kind": "main", "pts": [[70, 56], [90, 58], [100, 58], [112, 58]] },
      { "kind": "minor", "pts": [[112, 58], [114, 52]], "label": "右侧最后一间办公室" },
      { "kind": "main", "pts": [[100, 58], [104, 66]], "label": "出门" }
    ],
    "pois": [
      { "kind": "exit", "at": [14, 68], "to": "roque_island", "label": "入口（总部侧街）", "lp": "r" },
      { "kind": "save", "at": [14, 58], "label": "西栋存档点", "lp": "l" },
      { "kind": "chest", "at": [30, 64], "tr": [0], "lp": "r" },
      { "kind": "landmark", "at": [44, 44], "label": "交叉口", "lp": "l" },
      { "kind": "chest", "at": [44, 56], "tr": [1], "lp": "l" },
      { "kind": "chest", "at": [52, 55], "tr": [2], "lp": "t", "note": "厂房地面熔炉旁。" },
      { "kind": "landmark", "at": [22, 18], "label": "码头", "lp": "b" },
      { "kind": "chest", "at": [48, 10], "tr": [3], "lp": "b" },
      { "kind": "landmark", "at": [64, 14], "label": "天桥入口", "lp": "b" },
      { "kind": "chest", "at": [86, 20], "tr": [6], "lp": "r" },
      { "kind": "stairs", "at": [96, 14], "label": "下楼", "lp": "t" },
      { "kind": "chest", "at": [96, 29], "tr": [4], "lp": "t" },
      { "kind": "chest", "at": [80, 29], "tr": [5], "lp": "t" },
      { "kind": "chest", "at": [74, 44], "tr": [7], "lp": "r" },
      { "kind": "chest", "at": [67, 27], "tr": [8], "lp": "t", "note": "偏西办公室外左侧墙壁的隐藏楼梯通往储藏室。" },
      { "kind": "chest", "at": [114, 52], "tr": [9], "lp": "l" },
      { "kind": "save", "at": [100, 58], "label": "东栋存档点", "lp": "t" },
      { "kind": "boss", "at": [104, 66], "label": "蒸汽战车 黑曜号", "lp": "l", "note": "存档后出门触发长剧情，期间进行关键「购买」。" }
    ]
  }
});

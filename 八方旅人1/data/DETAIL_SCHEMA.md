# 地点细节地图数据规范（data/detail/<regionId>.js）

每个地区一个文件，为该地区 `locations` 中的**每个地点**绘制一张「细节示意图」：城镇画街道、广场、建筑与出入口；迷宫画洞窟通道、岔路、楼层、Boss 房；野外道路画主路、上下坡、岔路、死胡同与小山洞。
示意图不追求游戏内等比例，但**道路走向、岔路、宝箱与设施的相对位置必须与攻略文字一致**（来源：本地区数据文件里 `treasures[].how`、`npcs[].note`、`shops`、`tips`、`story` 的描述，以及可靠攻略站的地图）。

```js
OT2.addDetail("highlands", {
  "cobbleston": { ...地点细节对象... },
  "mountain_pass": { ... }
});
```

文件内容用合法 JSON 风格书写（键名双引号、无尾逗号、无注释）。

## 地点细节对象

```json
{
  "theme": "village",
  "size": [100, 70],
  "note": "1~2 句布局概述：例如「村子沿山坡分上下两层，北侧上坡是村长家与山贼大本营方向的出口，东侧出口通往南山道。」",
  "zones": [ ... ],
  "paths": [ ... ],
  "pois": [ ... ]
}
```

- `theme`：底色主题。town 城镇 / village 村庄 / city 大城市 / port 港口 / castle 城堡 / manor 宅邸 / field 平原野外 / forest 森林 / mountain 山道 / snow 雪地 / desert 沙漠 / swamp 沼泽 / cave 洞窟 / dungeon 地下设施 / ruins 遗迹 / tower 塔 / volcano 火山 / shrine 祠堂 / sea 海域。
- `size`：画布宽高（坐标单位），默认 `[100, 70]`；纵长地图可用 `[70, 100]`，横长 `[120, 60]`。原点在左上，**上北下南**，x 向右，y 向下。所有坐标必须在 `0 ~ 宽/高` 内。
- 多层迷宫（如塔、地下多层）可以把各层并排画在同一张图中，用 `zones` 的 `room` 区块加 `label`（「1F」「B1」「顶层」）区分，层间用 `stairs` 路径或 `stairs` 要点连接。

### zones 背景区块（可选，但城镇必须有）
```json
{ "kind": "building", "rect": [x, y, w, h], "label": "酒馆" }
{ "kind": "water", "poly": [[x,y], [x,y], [x,y]] }
{ "kind": "plaza", "circle": [cx, cy, r], "label": "中央广场" }
```
kind：building 主要建筑 / house 民宅 / plaza 广场 / water 水域 / cliff 悬崖岩壁 / grass 草地 / forest 树林 / sand 沙地 / snow 雪地 / ice 冰面 / lava 熔岩 / room 迷宫房间或楼层范围 / wall 墙体 / farm 农田 / field 田野 / pit 深渊 / deck 甲板木台 / rock 岩石 / garden 庭园 / swamp 沼泽。
`label` 会显示在区块中央；城镇的街区名（上街/下街/港区）、建筑名（教会/领主宅邸）、迷宫的楼层名写在这里。

### paths 道路（必填）
```json
{ "kind": "main", "pts": [[2, 40], [30, 38], [55, 30], [98, 28]] }
{ "kind": "minor", "pts": [[55, 30], [60, 12]], "label": "右上方岔路" }
{ "kind": "hidden", "pts": [[80, 50], [92, 58]], "label": "隐藏小路" }
```
kind：main 主路/大街 / minor 小路、岔路、支道 / hidden 隐藏通道（不易发现的路、需绕到建筑后方的路）/ stairs 台阶、坡道、楼梯 / bridge 桥 / ladder 梯子、藤蔓 / water 河流、水渠 / boat 航线、渡船路线。
- 道路之间要**首尾相接**（岔路的起点要落在主路的某个折点上），形成连通的路网。
- 带 `label` 的岔路会在侧栏列出，攻略里有名字或有特征的岔路请写上 label（如「上坡后左岔路」「通往小山洞」）。
- `"smooth": false` 可关闭圆滑处理（适合城镇里的直角街道）。

### pois 要点（必填）
```json
{ "kind": "exit", "at": [2, 40], "to": "south_cobbleston_gap", "label": "东口" }
{ "kind": "exit", "at": [98, 28], "to": "sunlands/eastern_sunshade_sands" }
{ "kind": "chest_red", "at": [60, 12], "tr": [2] }
{ "kind": "inn", "at": [40, 45], "label": "旅店" }
{ "kind": "npc", "at": [30, 50], "label": "村长", "npc": [0] }
{ "kind": "boss", "at": [50, 8], "label": "卡斯顿" }
{ "kind": "save", "at": [45, 36] }
```
kind：exit 出入口 / save 存档点 / inn 旅店 / tavern 酒馆 / shop 杂货店 / weapon 武器店 / armor 防具店 / item 道具店 / church 教会 / guild 公会、职业祠 / npc 关键 NPC / boss Boss / chest 普通（木）宝箱 / chest_red 红宝箱 / chest_purple 紫宝箱（需开锁）/ hidden 隐藏物、闪光点 / stairs 楼梯 / gate 门、机关、封印 / ship 船、渡口 / peddler 行商 / danger 强敌、危险区域 / landmark 地标 / camp 营地 / shrine 祠堂、祭坛 / house 民宅。

字段：
- `at`：坐标（必须落在某条道路上或道路旁 1~3 单位内）。
- `label`：显示名（可省略：宝箱自动用道具名，出口自动显示「往 xx」）。
- `lp`：标签方位 `r`/`l`/`t`/`b`，默认右侧；避免标签相互重叠时调整。
- `note`：补充说明（显示在悬停信息框）。
- `tr`：关联本地点 `treasures` 的**下标数组**（从 0 开始）。**本地点 treasures 里的每一项都必须被某个 poi 的 tr 引用**；一条 treasures 写了多个道具的，可拆成多个 poi 共用同一下标。位置描述模糊时放在最合理的位置并在 note 说明。
- `npc`：关联本地点 `npcs` 的下标数组（可选，重要 NPC 标出即可）。
- `to`：出口目标。同地区写地点 id，跨地区写 `"regionId/locId"`。**本地点在 roads / links 中的每个相邻地点都必须有一个对应的 exit**，且出口方位要与世界地图上的方向一致（见 `reference/work/detail_neighbors.json` 里的 `dir`）。
- `dir`：出口箭头朝向（东/南/西/北/东北/东南/西北/西南），省略时按出口相对画布中心的方位自动计算。

## 如何前往（data/access.js）

隐藏 / 特殊地点、入口隐蔽或有进入条件的地点，在 `data/access.js` 里补一条「如何前往」：

```json
OT2.addAccess("highlands", {
  "ruins_of_hornburg": { "via": "fast", "from": ["everhold"], "unlock": "解锁条件", "how": "具体走法" }
});
```

- `via`：hidden 隐蔽入口 / boat 乘小舟、水路 / sea 乘自有船只 / fast 仅快速旅行 / story 剧情开放 / gate 需解除阻拦（守卫、门） / solo 限单人 / crowd 特殊人数等条件 / final 最终章限定 / road 唯一通路。
- `from`：入口所在的地点（同地区写 id，跨地区写 `regionId/locId`）；大地图上会从这些地点画出对应样式的虚线。
- `unlock`：解锁条件（可选）；`how`：具体走法（必填）。
- 所有 `type: "secret"` 的地点都必须有一条，`node build.js` 会检查。

## 绘制要求
1. 城镇：画出主街、支巷、广场、各出入口；标出旅店、酒馆、武器店/防具店/杂货店（本作有的）、教会/领主宅邸等主要建筑（`zones` building + `pois` 设施图标），以及宝箱、隐藏物、关键 NPC。
2. 迷宫：从入口到 Boss 房画出主线通道，所有岔路、死胡同、回环、隐藏通道都要画出，宝箱放在攻略描述的岔路尽头；存档点、行商、Boss 位置要标。
3. 野外道路：画出贯穿两端出口的主路，以及通往宝箱、小山洞、悬崖边、旁路的岔路；有小山洞的画一个 `cliff`/`room` 区块表示。
4. 祠堂：入口 → 通道（多为一本道带几个小岔）→ 祭坛（`shrine` poi），守护者 Boss 用 `boss`。
5. 每张图至少 4 段路径、6 个要点；城镇和迷宫一般 8~25 段路径、10~30 个要点。
6. 不要编造攻略里没有的宝箱；可以补充攻略站里确认存在、但本地区数据未列出的设施（如旅店、酒馆）。

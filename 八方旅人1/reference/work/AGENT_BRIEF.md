# 《歧路旅人》(Octopath Traveler, 一代) 地区数据任务说明

项目目录 `f:\switch\八方旅人1`，正在制作交互式 HTML 地图攻略（与 `f:\switch\八方旅人2` 同框架）。

## 必读
1. `data/SCHEMA.md`：数据格式规范（严格遵守；本作地点坐标用 `wpos` 世界坐标，不用 `pos`）。
2. 世界原图 `reference/maps/world_orsterra.png`，带标注的中央部分地图 `reference/maps/world_labeled_toragame.jpg`（标出了 8 位主角起始城镇），总览网格图 `reference/work/g_overview.png`。
3. 用 `python reference/work/grid.py 名称 x0 y0 x1 y1 步长` 生成带世界坐标网格的局部图（参数为世界坐标），再用 Read 查看，以定位每个地点的 `wpos`。地点图标在原图上是小插画/道路节点，可对照 3DM「全中文标注地图」(https://www.3dmgame.com/gl/3778169.html)、game8.jp、h1g.jp、toragame.com 的地区地图辨认。

## 统一术语（必须使用）
- 主角：欧贝利克（Olberic，剑士）、塞拉斯（Cyrus，学者）、特蕾莎（Tressa，商人）、奥菲莉亚（Ophilia，神官）、普里姆萝洁（Primrose，舞娘）、阿芬（Alfyn，药师）、提里昂（Therion，盗贼）、汉伊特（H'aanit，猎人）。
- 地区（name / 官方名 / regionId）：雪原地区/弗洛斯特兰多 `frostlands`；平原地区/芙拉特兰多 `flatlands`；海岸地区/寇斯特兰多 `coastlands`；高原地区/哈伊兰多 `highlands`；沙漠地区/桑兰多 `sunlands`；河川地区/利维兰多 `riverlands`；断崖地区/克里夫兰多 `cliftlands`；森林地区/伍多兰多 `woodlands`。
- 城镇（官方简中）：希·沃尔基、维克塔霍洛、达斯克瓦罗（森林）；弗雷姆葛雷斯、史迪尔斯诺、诺斯利奇（雪原）；阿特拉斯达姆、诺布尔寇德、维斯帕米尔（平原）；利布尔泰德、葛鲁德修亚、格兰波特（海岸）；鹅卵石村、斯托冈德、艾巴霍多（高原）；桑谢德、威尔斯宾克、马尔沙利姆（沙漠）；库利亚布鲁克、圣特布里吉、利维福德（河川）；柏达弗尔、库欧利克雷斯特、欧亚威尔（断崖）。
- 祠堂（副职业）：狩猎女王、圣火神、硕学王、绅商伯、雷剑将、舞姬、灵药公、盗公子（基础 8 职）；魔大公、占星师、魔剑士、豪武匠（隐藏 4 职，名称以官方简中为准）。
- 其他专有名词用官方简中（可参考游民星空/3DM/巴哈姆特攻略），`en` 字段给英文。

## 各地区在世界坐标中的大致范围（仅供查找，以原图为准）
森林 x230-640,y0-340（含西北长半岛）｜雪原 x520-950,y0-330｜平原 x830-1220,y140-420｜海岸 x900-1500,y330-560（内海东岸及东部群岛）｜高原 x900-1600,y480-800｜沙漠 x440-930,y480-800｜河川 x130-560,y480-780｜断崖 x130-620,y330-520。

## 交付
- 写出 `data/<regionId>.js`：`OT2.addRegion({...});`（对象名沿用框架的 OT2 全局变量，不要改），包含 locations（每个都有 `wpos`）、story、sidequests、items、jobs、tips、`roads`、`links`；地区对象额外加 `"official": "官方地区名"`。
- 自检：`node build.js --check` 0 错误；roads/links 引用的 id 都存在；每个地点至少出现在一条 road 或 link 中。
- 只写自己的文件，不改其它文件。

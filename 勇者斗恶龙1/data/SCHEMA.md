# 攻略数据接口

`data/guide.js` 设置 `window.DQ_GUIDE`，不得依赖联网API。

- `meta`：作品/版本/平台、核对日、跨作入口与单文件名。`meta.id` 决定独立进度键。
- `regions`：地区稳定ID与中文名。
- `locations`：地点、原名、类型、地区、进入条件、地图、收集、NPC、设施图、商店、区域怪物、Boss、相关攻略和来源。
- `maps`：稳定ID、图名、日文原名、可包含的`floorNames`、本地`image`、实际宽高与来源。一个图可合并多个楼层；不能只用首个楼层名推断覆盖范围。
- `treasures`：稳定拾取点ID、名称/原名、楼层、有效`mapId`、获取方式、条件、具体位置图`detailImage`及来源。同名不同拾取点分别记录。
- `npcs`、`shops`：稳定ID供搜索卡片定位；NPC文字位置与事件条件、商店商品/价格/剧情追加备注、可选截图均保留来源。
- `enemies`：仅使用来源明确写出的出现区域和条件；随机遇敌不得有固定坐标。`bosses`单独记录策略。
- `chapters`：章节、前置、中文步骤、有效地点引用、Boss与解锁事项。`guides`提供装备、成长、关键道具和特殊事件专题。
- `world`：GameWith世界图、同一地图坐标体系中的世界探索点、定位截图和来源。百分比坐标是核实的世界位置，不得从其他底图直接挪用。
- `coverage`：完整基线和来源限制。详细逐地点状态由`reference/audit.py`生成。

图片路径必须是攻略目录内的相对路径。构建拒绝缺失、越界图片、重复ID、无效地区/地点引用、未定位世界点及随机遇敌伪固定点。

单文件`window.DQ_ASSETS`将相对路径映射到内嵌data URL；运行时用同一份数据。`reference/portable-assets.json`仅替换单文件里的位置截图副本，含源文件与副本SHA256；原图和总览地图不变。构建校验哈希，拒绝过期缓存。正常阅读无需Python或Node。

进度键为`dragon-quest-guide:${meta.id}:v1`。只保存已完成稳定ID；两作不得共用meta.id。位置图/来源URL变更会影响基于来源签名生成的拾取ID，维护时应复核是否需要迁移旧勾选。


中文标注：`data/annotations.js` 设置 `window.DQ_ANNOTATIONS`，`version:1`。`images`以原图相对路径为键，保存实际`width/height`、`sourceSha256`、`labels`与未覆盖的`untranslated`。标签含原文、中文工作译名、原图文字框`box:[x,y,w,h]`、匹配方式及可选`treasures` ID；文字框不是宝物坐标。只有唯一有效拾取ID可以点选。`terms`供本图中日对照；未识别文字不能据此生成地图点。构建拒绝过期图片哈希、越界文字框与无效拾取关联。原图不改写，常规与单文件共用SVG文字层。

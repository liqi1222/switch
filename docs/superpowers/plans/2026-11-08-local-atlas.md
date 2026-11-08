# 小区域地图 Implementation Plan

> **For agentic workers:** Use executing-plans inline. User has authorized implementation; independent read-only review performed under requesting-code-review. Steps use checkbox syntax for tracking.

**Goal:** 将两作329张已有地点地图升级为可检索、可定位、可分区浏览的攻略地图，并加入有出处的区域遇敌资料。

**Architecture:** 两作各有同一份 assets/atlas.js，负责目录模型、筛选、边界计算与遇敌详情；assets/detail.js接入浏览器与高亮。data/encounters.js保存独立来源数据。各自index和build加载后继续生成离线单文件。

**Tech Stack:** 原生JavaScript、SVG、CSS、Node内置test/vm、Python requests/BeautifulSoup用于资料整理。

### Task 1: 建立行为测试与资料采集
- [x] 在tests/atlas.test.js使用node:test，通过vm加载两作数据及atlas.js；断言329图的道路与POI均可访问、混合NPC时间不会被误删、无坐标怪物不生成固定点、局部放大合法。
- [x] 运行`node --test tests/atlas.test.js`，确认缺少atlas模块导致失败；新增回归用例也已先确认失败再修复。
- [x] 从两作对应攻略主页发现区域链接，提取结构化怪物列表，记录条件和来源，不把0或手游数据混入。

### Task 2: 地图目录与交互
- [x] 新建两作assets/atlas.js，实现entries/filter/bounds及怪物信息HTML，所有外部文字转义。
- [x] 修改两作assets/detail.js：新增目录、分类、搜索、分区选择；定位POI及道路，显示商店与完整NPC详情；保留宝箱进度及出口跳转。
- [x] 新增两作assets/atlas.css：桌面地图与目录并列，窄屏上下排列；使搜索框、选择器及目录可键盘操作。

### Task 3: 数据与入口集成
- [x] 生成两作data/encounters.js，将核实到的地点怪物资料与引用打包；未覆盖处使用明确空态。
- [x] 修改index.html脚本顺序，先载遇敌数据与atlas再载detail；全局搜索增加NPC名称与怪物。
- [x] 对照攻略修正有明确证据的现有细节遗漏，保持宝箱数组及图标引用一致。

### Task 4: 验证与交付
- [x] 运行`node --test tests/atlas.test.js`。
- [x] 分别运行两作`node build.js --check`和`node build.js`，检查错误和警告。
- [x] 浏览器检查城镇设施、NPC、道路、分区、野外怪物、昼夜筛选、宝箱进度、相邻出口、窄屏及单文件打开。
- [x] 完成docs地图覆盖与来源说明，报告准确覆盖范围与待校准信息。本目录没有git仓库，直接交付文件，不执行提交。

验证备注：浏览器策略不允许 file:// 导航；两份实际生成的单文件通过本地 HTTP 服务完成交互检查，静态检查确认脚本和样式均已内嵌。未声称实测双击本地文件。

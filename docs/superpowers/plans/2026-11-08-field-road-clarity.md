# 野外道路标注细化 Implementation Plan

> 使用executing-plans在当前会话执行；用户已授权按攻略细化。独立审查遵循requesting-code-review。

**Goal:** 消除野外地图长路名叠字和泛化路名，补充可对照攻略逐段走的道路说明。

**Architecture:** 两作atlas.js提供编号、路线卡片和徽标定位；detail.js提供SVG可点击编号与文字切换；atlas.css负责可读布局。既有detail数据paths新增route字段（from/to/steps/caution/sources），复杂上下层交叉使用crossings明确表示不连通。无逐步来源的道路不自动生成走法。

**Tech Stack:** 原生JS/SVG/CSS、Node测试及构建、缓存公开攻略文字。

- [x] 先写失败测试：道路备注可见可搜、分步详情转义、徽标坐标与避让、逐段资料/来源、分层交叉引用。
- [x] 对照攻略补七张地图的逐段资料，保存出处，修正明确的连线遗漏和水路连续性。
- [x] 实现两作105张野外地图的道路编号、可点选定位、完整文字切换、分步路线详情；保持城镇默认文字显示。
- [x] 运行Node与Python现有测试、两作build.js --check及生成HTML。
- [x] 浏览器检查编号/文字、步行/独木舟、桥下不连通、道路详情与出处、出口/宝箱、手机与单文件。
- [x] 独立复核、更新覆盖说明并交付两作文件。

验证结果：22项Node测试、4项Python测试通过；两作构建及校验0错误、0警告。生成的单文件通过本地HTTP验证，未实测系统双击file://。桌面与390×844手机预览保存在docs/verification/field-road-navigation-*.png。存档点点击、道路筛选保留参照、编号/文字切换、桥下水路及关联道路跳转均已检查。全部野外地图得到共享导航行为，其中仅上述七张完成本次逐段资料核对。

# 勇者斗恶龙 HD-2D 两作攻略实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** 为用户照片中的 Nintendo Switch HD-2D 版生成两份独立、可离线查阅的中文交互攻略，满足设计文档 R01 至 R20。

**Architecture:** 资料按作品存放，界面与验证器保持相同接口，各自带完整离线资产与独立进度键。先建立有出处的全地点和流程清单，再整合真实地图、NPC、收集物和区域遇敌，避免以程序生成的假地图替代资料核实。

**Tech Stack:** 原生 HTML、CSS、SVG、JavaScript；Node.js 内置测试和构建；Python requests 和 BeautifulSoup 仅用于资料整理。

## Task 1 资料基线与覆盖清单

- [x] 分作品核对 Game8 与 GameWith 的 HD-2D 全流程、地点索引、通关后及关键机制；保存原文链接、原名、核对日期和来源适用版本至各作 `reference/`。
- [x] 建立逐地点覆盖清单，记录地图、楼层、设施、NPC、宝箱、遇敌的独立状态，不能将缺口从基准清单删除。
- [x] 整理简体中文流程与名称；未核实官方译名保留日文原名和译名状态。

## Task 2 数据与构建边界

- [x] 在新游戏目录建立 `tests/guide.test.js`，先验证重复 ID、错误地点引用、跨作来源与进度键隔离会失败，再实现 `assets/model.js` 和 `build.js`。
- [x] 数据对象包含 `game`、`version`、`regions`、`locations`、`chapters`、`guides`、`sources` 和 `coverage`；每个地点含来源与相对位置或真实地图。
- [x] `node build.js --check` 拒绝错误数据并非零退出；构建将 CSS、JS 和地图资产全部内嵌为单文件 HTML。

## Task 3 页面与地图

- [x] 创建两份 `index.html`，共享相同的交互实现但各自离线复制资产；首页显示适用版本与来源状态，提供作品切换链接。
- [x] 世界地图、地点目录、分类、搜索、章节、Boss、队伍、装备及路线资料联动；地点地图支持缩放平移、楼层、图例、资料与标记定位。
- [x] 搜索处理中文、原文和英文名称；键盘 `/` 聚焦，`Esc` 返回；空结果有说明。
- [x] 稳定 ID 记录章节和收集物完成状态，按 `dq1-hd2d` 与 `dq2-hd2d` 独立保存；储存不可用时给出可见提示。

## Task 4 内容整合与核对

- [x] 将两作资料基线分别转为 `data/guide.js`，逐项核对新增地点、剧情前置、船与钥匙等条件，加入实际存在的通关后内容。
- [x] 道路、设施、宝箱和 NPC 位置使用所选版本的攻略地图为依据；怪物按区域展示，固定战斗单列，未定位资料不能产生伪造坐标。
- [x] 核对地图与文字收集物一一对应，并核对楼层、出口和出处。

## Task 5 验收与交付

- [x] 运行两作 `node build.js --check`、`node --test tests/guide.test.js` 和构建；运行原 `node --test tests/atlas.test.js` 与两份八方旅人构建校验回归。
- [x] 浏览器分别打开常规与单文件入口，验证搜索、地图、进度持久化与跨作隔离，检查桌面和窄屏布局。
- [x] 更新 `.gitignore` 与根 README，使两作入口、构建命令和覆盖范围可查；记录 R01 至 R20 的证据和缺口。
- [x] 先做范围符合性审查，再做代码质量审查，修复后重新验证。只有实际内容及交互全部符合原范围才标记目标完成。

完成记录：见 `docs/verification/dragon-quest-hd2d.md`。两作常规入口与内嵌成品已在浏览器验证；file协议受工具限制，采用本地预览并验证资源全部内嵌。

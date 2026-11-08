# 数据文件规范（所有数据 agent 必须遵守）

每个地区一个文件：`data/<regionId>.js`，UTF-8 编码，内容是**纯 JS**（不是 JSON 文件，但对象字面量请写成合法 JSON 风格：键名加双引号、字符串用双引号、不要尾逗号，方便校验）：

```js
OT2.addRegion({ ...见下方结构... });
```

全局数据（角色/职业/最终章等）文件 `data/global.js`：`OT2.setGlobal({ ... });`

## 语言约定
- 全部用**简体中文**撰写。
- 专有名词优先使用 Switch/Steam 简体中文版官方译名；不确定官方译名时用常见社区译名，并在 `en` 字段给出英文原名。
- 名称字段写法：`"name": "中文名"`, `"en": "English Name"`。
- 只写有把握的信息；不确定的数值（HP、精确掉落率等）宁可省略，不要编造。可写"约""建议"等措辞。

## 地区对象结构

```json
{
  "id": "winterlands",
  "name": "冬之地",
  "en": "Winterlands",
  "continent": "east",            // "west" | "east" | "sea"
  "levelRange": "2-55",
  "starter": "奥斯瓦德（学者）",     // 本地区出身主角，海域可为空字符串
  "intro": "地区概述 2~4 句",
  "highlights": ["本区最值得做的事 3~6 条，例如 隐藏职业、强力装备、守护神祭坛"],

  "locations": [
    {
      "id": "stormhail",                  // 小写英文+下划线，地区内唯一
      "name": "斯托姆黑尔",
      "en": "Stormhail",
      "type": "town",                     // town | dungeon | field | shrine | port | secret
      "pos": [62, 40],                    // 在本地区内的相对坐标 [x%, y%]，0~100，左上为原点，按地名方位（东西南北路）合理估计，各地点不要重叠（间距≥8）
      "level": "35",                      // 推荐等级/敌人等级，可为空字符串
      "desc": "一句话介绍",
      "story": ["奥斯瓦德 第3章", "..."], // 在此发生的主线章节，可为空数组
      "boss": [
        { "name": "Boss 名", "en": "Boss", "level": "推荐等级", "weakness": ["剑", "火"], "tips": "打法要点" }
      ],
      "treasures": [ { "item": "道具名", "how": "位置/开启方式（普通宝箱/紫色宝箱需盗贼或商人开锁等）" } ],
      "npcs": [ { "name": "NPC", "item": "可获得物品或效果", "method": "偷窃/购买/挑战/引导/探听/收买/诱惑", "note": "条件、成功率、白天/夜晚" } ],
      "shops": ["值得购买的物品或商店说明"],
      "tips": "探索提示，可为空字符串"
    }
  ],

  "story": [
    {
      "title": "奥斯瓦德 第1章：……",
      "character": "奥斯瓦德",
      "location": "location id",           // 对应上面的 locations[].id
      "level": "1",
      "summary": "流程概要（2~5 句，适度剧透，侧重攻略步骤）",
      "steps": ["步骤1", "步骤2"],
      "boss": "Boss 名（弱点：…）",
      "tips": "打法/注意事项"
    }
  ],

  "sidequests": [
    {
      "name": "支线名",
      "en": "Side Story English Name",
      "location": "location id",
      "trigger": "触发方式（在哪找谁、时间段、前置）",
      "steps": ["完成步骤1", "步骤2"],
      "reward": "奖励",
      "difficulty": "易/中/难"
    }
  ],

  "items": [
    {
      "name": "物品名",
      "en": "Item",
      "type": "武器|防具|饰品|道具|职业证|其他",
      "location": "location id",
      "how": "获取方式（宝箱/偷窃谁/购买价格/支线奖励/Boss掉落），写清楚条件",
      "effect": "效果（可选）"
    }
  ],

  "jobs": [
    { "name": "职业名", "en": "Job", "location": "location id", "how": "获得职业证的方式" }
  ],

  "tips": ["地区通用提示/隐藏要素/练级点"]
}
```

## 数量建议
- locations：覆盖该地区**所有城镇**、主要迷宫、道路/田野、守护神祭坛、港口停泊点；每个城镇/迷宫尽量给出宝箱与 NPC 物品。
- story：所有在本地区发生的主线章节与交汇篇（Crossed Paths）。
- sidequests：本地区所有可查到的支线（Side Stories）。
- items：重点装备、稀有道具、职业证、终盘装备（10~40 条）。

## 完成后自检
用 `node -e "global.window=global;require('./data/core.js');require('./data/<id>.js');console.log(Object.keys(OT2.regions))"` 在 `f:\switch\八方旅人2` 目录下验证能被加载、无语法错误；并检查 story/sidequests/items/jobs 中的 `location` 都能在 locations 里找到对应 id。

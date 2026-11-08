// 用法：node build.js        校验数据并生成单文件攻略
//       node build.js --check 只校验数据
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = __dirname;
const OUT = path.join(ROOT, "歧路旅人1-地图攻略.html");
const REGION_IDS = ["woodlands", "frostlands", "flatlands", "coastlands", "highlands", "sunlands", "riverlands", "cliftlands"];
const TYPES = new Set(["town", "dungeon", "field", "shrine", "port", "secret"]);

function loadData() {
  const sandbox = { console };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  const run = (rel) => {
    const file = path.join(ROOT, rel);
    if (!fs.existsSync(file)) return false;
    vm.runInContext(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""), sandbox, { filename: rel });
    return true;
  };
  run("data/core.js");
  const loaded = {};
  ["global", ...REGION_IDS].forEach((id) => {
    try { loaded[id] = run(`data/${id}.js`); }
    catch (e) { loaded[id] = "ERROR: " + e.message; }
  });
  return { OT2: sandbox.OT2, loaded };
}

function validate() {
  const { OT2, loaded } = loadData();
  const errors = [], warns = [];
  const stats = [];
  REGION_IDS.forEach((id) => {
    if (loaded[id] !== true) { (loaded[id] ? errors : warns).push(`${id}: ${loaded[id] || "文件缺失"}`); return; }
    const r = OT2.regions[id];
    if (!r) { errors.push(`${id}: 文件已加载但未调用 OT2.addRegion 或 id 不匹配`); return; }
    const locs = r.locations || [];
    const ids = new Set();
    locs.forEach((l) => {
      if (!l.id) errors.push(`${id}: 地点缺少 id (${l.name})`);
      if (ids.has(l.id)) errors.push(`${id}: 地点 id 重复 ${l.id}`);
      ids.add(l.id);
      if (!TYPES.has(l.type)) warns.push(`${id}/${l.id}: 未知 type ${l.type}`);
      const okPos = Array.isArray(l.pos) && l.pos.length === 2 && l.pos.every((v) => typeof v === "number" && v >= 0 && v <= 100);
      const okW = Array.isArray(l.wpos) && l.wpos.length === 2 && typeof l.wpos[0] === "number" && typeof l.wpos[1] === "number" && l.wpos[0] >= 0 && l.wpos[0] <= 1600 && l.wpos[1] >= 0 && l.wpos[1] <= 800;
      if (!okPos && !okW) warns.push(`${id}/${l.id}: 缺少有效的 wpos/pos ${JSON.stringify(l.wpos || l.pos)}`);
    });
    const checkRef = (kind, list) => (list || []).forEach((x) => {
      if (x.location && !ids.has(x.location)) warns.push(`${id}: ${kind}「${x.name || x.title}」引用了不存在的地点 ${x.location}`);
    });
    checkRef("主线", r.story); checkRef("支线", r.sidequests); checkRef("道具", r.items); checkRef("职业", r.jobs);
    const treasures = locs.reduce((n, l) => n + (l.treasures || []).length, 0);
    const npcs = locs.reduce((n, l) => n + (l.npcs || []).length, 0);
    const bosses = locs.reduce((n, l) => n + (l.boss || []).length, 0);
    stats.push({ id, locations: locs.length, story: (r.story || []).length, sidequests: (r.sidequests || []).length, items: (r.items || []).length, jobs: (r.jobs || []).length, treasures, npcs, bosses });
  });
  REGION_IDS.forEach((id) => {
    const r = OT2.regions[id];
    if (!r) return;
    const has = (rid, lid) => OT2.regions[rid] && (OT2.regions[rid].locations || []).some((l) => l.id === lid);
    (r.roads || []).forEach((e) => {
      if (!Array.isArray(e) || e.length !== 2 || !has(id, e[0]) || !has(id, e[1])) warns.push(`${id}: 无效道路 ${JSON.stringify(e)}`);
    });
    (r.links || []).forEach((l) => {
      if (!has(id, l.from) || !has(l.region, l.to)) warns.push(`${id}: 无效跨区连接 ${JSON.stringify(l)}`);
    });
    const s = stats.find((x) => x.id === id);
    if (s) { s.roads = (r.roads || []).length; s.links = (r.links || []).length; }
  });
  if (loaded.global !== true) (loaded.global ? errors : warns).push(`global: ${loaded.global || "文件缺失"}`);
  else if (OT2.global) {
    const g = OT2.global;
    stats.push({ id: "global", characters: (g.characters || []).length, jobs: (g.jobs || []).length, crossedPaths: (g.crossedPaths || []).length, exBosses: (g.exBosses || []).length, routes: (g.routes || []).length });
  }
  console.table(stats);
  warns.forEach((w) => console.warn("WARN ", w));
  errors.forEach((e) => console.error("ERROR", e));
  console.log(`\n校验完成：${errors.length} 个错误，${warns.length} 个警告`);
  return errors.length === 0;
}

function inline() {
  let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (m, href) => {
    const css = fs.readFileSync(path.join(ROOT, href), "utf8");
    return `<style>\n${css}\n</style>`;
  });
  html = html.replace(/<script src="([^"]+)"[^>]*><\/script>/g, (m, src) => {
    const file = path.join(ROOT, src);
    if (!fs.existsSync(file)) return `<!-- 缺失 ${src} -->`;
    const js = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "").replace(/<\/script/gi, "<\\/script");
    return `<script>/* ${src} */\n${js}\n</script>`;
  });
  fs.writeFileSync(OUT, html, "utf8");
  console.log(`已生成 ${path.basename(OUT)}（${(fs.statSync(OUT).size / 1024).toFixed(1)} KB）`);
}


// ---------------- 细节地图校验 ----------------
const ZONE_KINDS = new Set(["building", "house", "plaza", "water", "cliff", "grass", "forest", "sand", "snow", "ice", "lava", "room", "wall", "farm", "field", "pit", "deck", "rock", "garden", "swamp"]);
const PATH_KINDS = new Set(["main", "minor", "hidden", "stairs", "bridge", "ladder", "water", "boat"]);
const POI_KINDS = new Set(["exit", "save", "inn", "tavern", "shop", "weapon", "armor", "item", "church", "guild", "npc", "boss", "chest", "chest_red", "chest_purple", "hidden", "stairs", "gate", "ship", "peddler", "danger", "landmark", "camp", "shrine", "house"]);
const THEME_KINDS = new Set(["town", "village", "city", "port", "castle", "manor", "field", "forest", "mountain", "snow", "desert", "swamp", "cave", "dungeon", "ruins", "tower", "volcano", "shrine", "sea"]);
function validateDetails() {
  const sandbox = { console };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/core.js"), "utf8"), sandbox);
  const errors = [], warns = [], stats = [];
  REGION_IDS.forEach((id) => {
    try { vm.runInContext(fs.readFileSync(path.join(ROOT, `data/${id}.js`), "utf8").replace(/^\uFEFF/, ""), sandbox); } catch (e) { /* 已在主校验中报告 */ }
  });
  const OT2 = sandbox.OT2;
  REGION_IDS.forEach((id) => {
    const rel = `data/detail/${id}.js`;
    if (!fs.existsSync(path.join(ROOT, rel))) return;
    try { vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8").replace(/^\uFEFF/, ""), sandbox, { filename: rel }); }
    catch (e) { errors.push(`${rel}: ${e.message}`); }
  });
  const locOf = (rid, lid) => OT2.regions[rid] && (OT2.regions[rid].locations || []).find((l) => l.id === lid);
  REGION_IDS.forEach((id) => {
    const r = OT2.regions[id];
    if (!r) return;
    const det = (OT2.details || {})[id] || {};
    const locs = r.locations || [];
    let trTotal = 0, trLinked = 0, nPaths = 0, nPois = 0, missingExit = 0;
    Object.keys(det).forEach((lid) => { if (!locOf(id, lid)) errors.push(`detail/${id}: 未知地点 ${lid}`); });
    const nb = {};
    const addNb = (a, b) => { (nb[a] = nb[a] || new Set()).add(b); };
    (r.roads || []).forEach(([a, b]) => { addNb(a, b); addNb(b, a); });
    REGION_IDS.forEach((rid) => ((OT2.regions[rid] || {}).links || []).forEach((k) => {
      if (rid === id) addNb(k.from, k.region + "/" + k.to);
      if (k.region === id) addNb(k.to, rid + "/" + k.from);
    }));
    locs.forEach((l) => {
      trTotal += (l.treasures || []).length;
      const d = det[l.id];
      if (!d) { warns.push(`detail/${id}/${l.id}: 缺少细节地图`); return; }
      const where = `detail/${id}/${l.id}`;
      const [w, h] = Array.isArray(d.size) ? d.size : [100, 70];
      if (!(w > 0 && h > 0)) errors.push(`${where}: size 无效`);
      if (d.theme && !THEME_KINDS.has(d.theme)) warns.push(`${where}: 未知 theme ${d.theme}`);
      const inB = (p) => Array.isArray(p) && p.length === 2 && typeof p[0] === "number" && typeof p[1] === "number" && p[0] >= -2 && p[0] <= w + 2 && p[1] >= -2 && p[1] <= h + 2;
      (d.zones || []).forEach((z, i) => {
        if (!ZONE_KINDS.has(z.kind)) warns.push(`${where}: zones[${i}] 未知 kind ${z.kind}`);
        const pts = z.rect ? [[z.rect[0], z.rect[1]], [z.rect[0] + z.rect[2], z.rect[1] + z.rect[3]]] : z.circle ? [[z.circle[0], z.circle[1]]] : z.poly;
        if (!Array.isArray(pts) || !pts.length || !pts.every(inB)) errors.push(`${where}: zones[${i}] 形状缺失或越界`);
      });
      (d.paths || []).forEach((p, i) => {
        if (!PATH_KINDS.has(p.kind)) warns.push(`${where}: paths[${i}] 未知 kind ${p.kind}`);
        if (!Array.isArray(p.pts) || p.pts.length < 2 || !p.pts.every(inB)) errors.push(`${where}: paths[${i}] 点数不足或越界`);
      });
      nPaths += (d.paths || []).length;
      nPois += (d.pois || []).length;
      const linked = new Set();
      const exits = new Set();
      (d.pois || []).forEach((p, i) => {
        if (!POI_KINDS.has(p.kind)) errors.push(`${where}: pois[${i}] 未知 kind ${p.kind}`);
        if (!inB(p.at)) errors.push(`${where}: pois[${i}] 坐标缺失或越界 ${JSON.stringify(p.at)}`);
        (Array.isArray(p.tr) ? p.tr : p.tr == null ? [] : [p.tr]).forEach((t) => {
          if (!Number.isInteger(t) || !(l.treasures || [])[t]) errors.push(`${where}: pois[${i}] tr 索引无效 ${t}`); else linked.add(t);
        });
        (Array.isArray(p.npc) ? p.npc : p.npc == null ? [] : [p.npc]).forEach((t) => {
          if (!Number.isInteger(t) || !(l.npcs || [])[t]) errors.push(`${where}: pois[${i}] npc 索引无效 ${t}`);
        });
        if (p.to) {
          const s = String(p.to), k = s.indexOf("/");
          const [rr, ll] = k > 0 ? [s.slice(0, k), s.slice(k + 1)] : [id, s];
          if (!locOf(rr, ll)) errors.push(`${where}: pois[${i}] to 指向不存在的地点 ${s}`);
          else exits.add(rr === id ? ll : rr + "/" + ll);
        }
      });
      trLinked += linked.size;
      const lost = (l.treasures || []).length - linked.size;
      if (lost > 0) warns.push(`${where}: ${lost} 个宝箱未在图上标注`);
      const lackNb = [...(nb[l.id] || [])].filter((n) => !exits.has(n) && !exits.has(n.replace(id + "/", "")));
      if (lackNb.length) { missingExit += lackNb.length; warns.push(`${where}: 缺少通往 ${lackNb.join(", ")} 的出口`); }
    });
    stats.push({ id, detail: `${Object.keys(det).filter((k) => locOf(id, k)).length}/${locs.length}`, paths: nPaths, pois: nPois, treasures: `${trLinked}/${trTotal}`, missingExit });
  });
  console.table(stats);
  const verbose = process.argv.includes("--detail-verbose");
  warns.slice(0, verbose ? Infinity : 40).forEach((w) => console.warn("WARN ", w));
  if (!verbose && warns.length > 40) console.warn(`…… 另有 ${warns.length - 40} 条细节地图警告（加 --detail-verbose 查看全部）`);
  errors.forEach((e) => console.error("ERROR", e));
  console.log(`细节地图校验：${errors.length} 个错误，${warns.length} 个警告`);
  return errors.length === 0;
}

// ---------------- 如何前往（隐藏 / 特殊地点）校验 ----------------
const VIA_KINDS = new Set(["hidden", "boat", "sea", "fast", "story", "gate", "solo", "crowd", "final", "road"]);
function validateAccess() {
  const rel = "data/access.js";
  if (!fs.existsSync(path.join(ROOT, rel))) return true;
  const sandbox = { console };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "data/core.js"), "utf8"), sandbox);
  REGION_IDS.forEach((id) => { try { vm.runInContext(fs.readFileSync(path.join(ROOT, `data/${id}.js`), "utf8").replace(/^\uFEFF/, ""), sandbox); } catch (e) { /* 已在主校验中报告 */ } });
  const errors = [];
  try { vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8").replace(/^\uFEFF/, ""), sandbox, { filename: rel }); }
  catch (e) { errors.push(`${rel}: ${e.message}`); }
  const OT2 = sandbox.OT2;
  const locOf = (rid, lid) => OT2.regions[rid] && (OT2.regions[rid].locations || []).find((l) => l.id === lid);
  let n = 0;
  Object.entries(OT2.access || {}).forEach(([rid, map]) => Object.entries(map).forEach(([lid, a]) => {
    n++;
    const where = `access/${rid}/${lid}`;
    if (!locOf(rid, lid)) errors.push(`${where}: 未知地点`);
    if (!VIA_KINDS.has(a.via)) errors.push(`${where}: 未知 via ${a.via}`);
    if (!a.how) errors.push(`${where}: 缺少 how`);
    (Array.isArray(a.from) ? a.from : []).forEach((s) => {
      const k = String(s).indexOf("/");
      const [rr, ll] = k > 0 ? [s.slice(0, k), s.slice(k + 1)] : [rid, s];
      if (!locOf(rr, ll)) errors.push(`${where}: from 指向不存在的地点 ${s}`);
    });
  }));
  const secrets = REGION_IDS.flatMap((rid) => ((OT2.regions[rid] || {}).locations || []).filter((l) => l.type === "secret" && !((OT2.access || {})[rid] || {})[l.id]).map((l) => `${rid}/${l.id}`));
  secrets.forEach((s) => console.warn(`WARN  access/${s}: 隐藏/特殊地点缺少「如何前往」`));
  errors.forEach((e) => console.error("ERROR", e));
  console.log(`如何前往校验：${n} 条，${errors.length} 个错误，${secrets.length} 个警告`);
  return errors.length === 0;
}
const ok = validate() & validateDetails() & validateAccess();
if (!process.argv.includes("--check")) {
  if (!ok) console.warn("存在错误，仍生成文件以便预览。");
  inline();
}
process.exitCode = ok ? 0 : 1;

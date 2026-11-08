// 地点细节地图：城镇街道 / 迷宫岔路 / 野外小路示意图（两作共用，数据见 data/DETAIL_SCHEMA.md）
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const DETAILS = (window.OT2 && window.OT2.details) || {};
  const ACCESS = (window.OT2 && window.OT2.access) || {};
  const VIA = {
    hidden: { label: "隐蔽入口", badge: "隐", color: "#c0392b", dash: "1.5 3" },
    boat: { label: "乘小舟 / 水路", badge: "舟", color: "#2b8fd0", dash: "5 3" },
    sea: { label: "乘自有船只出海", badge: "船", color: "#1d6fa5", dash: "7 4" },
    fast: { label: "仅限快速旅行", badge: "传", color: "#8e44ad", dash: "1 4" },
    story: { label: "剧情开放", badge: "剧", color: "#d35400", dash: "6 2 1.5 2" },
    gate: { label: "需解除阻拦", badge: "锁", color: "#a0522d", dash: "5 2" },
    solo: { label: "限单人进入", badge: "单", color: "#138d75", dash: "3 2" },
    crowd: { label: "特殊进入条件", badge: "特", color: "#b7950b", dash: "3 2" },
    final: { label: "最终章限定", badge: "终", color: "#7d3c98", dash: "8 3" },
    road: { label: "唯一通路", badge: "路", color: "#7a5a2a", dash: "5 3" }
  };
  const PREF_KEY = "ot-detail-open";
  const MINI_ZOOM = 240;

  const THEMES = {
    town: { bg: "#e7d7ae", road: "#fbf2d6", casing: "#8b6b3a", minor: "#f4e6c2", ink: "#2e210f", halo: "rgba(255,248,228,.92)" },
    village: { bg: "#d9d3a0", road: "#f7eccb", casing: "#7f6a3a", minor: "#efe2bb", ink: "#2e210f", halo: "rgba(255,248,228,.92)" },
    city: { bg: "#ddd2b8", road: "#f8f1df", casing: "#776347", minor: "#ece2c9", ink: "#2a1f10", halo: "rgba(255,250,235,.92)" },
    port: { bg: "#e3d6b2", road: "#fbf2d6", casing: "#86693a", minor: "#f1e3bd", ink: "#2e210f", halo: "rgba(255,248,228,.92)" },
    castle: { bg: "#cfc6b4", road: "#efe8d8", casing: "#5e5444", minor: "#e2d9c6", ink: "#241c10", halo: "rgba(250,246,236,.92)" },
    manor: { bg: "#d8cfb2", road: "#f4ecd5", casing: "#6c5b3c", minor: "#e8dec2", ink: "#281e10", halo: "rgba(255,250,235,.92)" },
    field: { bg: "#bccb8c", road: "#f5e9c3", casing: "#7d6a3a", minor: "#ece0b4", ink: "#253013", halo: "rgba(250,248,225,.9)" },
    forest: { bg: "#7fa364", road: "#eadcac", casing: "#4b5f2c", minor: "#dccd98", ink: "#1d2a10", halo: "rgba(245,245,220,.9)" },
    mountain: { bg: "#bba684", road: "#f1e5c4", casing: "#6e5838", minor: "#e4d5ae", ink: "#2b2010", halo: "rgba(252,246,228,.9)" },
    snow: { bg: "#e4edf2", road: "#ffffff", casing: "#7f97a8", minor: "#f4f8fa", ink: "#1f2c38", halo: "rgba(255,255,255,.92)" },
    desert: { bg: "#e4c98c", road: "#f8ecca", casing: "#9c7438", minor: "#f0dfb0", ink: "#3a2810", halo: "rgba(255,248,228,.92)" },
    swamp: { bg: "#7f8a5f", road: "#dcd3a6", casing: "#4c5332", minor: "#cfc697", ink: "#1e2410", halo: "rgba(240,240,215,.9)" },
    cave: { bg: "#3d3630", road: "#b09f82", casing: "#17120e", minor: "#8f8068", ink: "#f4e8cc", halo: "rgba(20,15,10,.9)", dark: true },
    dungeon: { bg: "#38343a", road: "#a9a1a6", casing: "#151216", minor: "#857d83", ink: "#f2eadf", halo: "rgba(18,14,20,.9)", dark: true },
    ruins: { bg: "#4b463d", road: "#bdb096", casing: "#1d1a15", minor: "#968a73", ink: "#f4ead2", halo: "rgba(22,20,15,.9)", dark: true },
    tower: { bg: "#3f3c48", road: "#b9b2c6", casing: "#18161d", minor: "#918aa0", ink: "#f1ecf7", halo: "rgba(20,18,26,.9)", dark: true },
    volcano: { bg: "#4e3226", road: "#d7a679", casing: "#1e110b", minor: "#ad8159", ink: "#fbe9d6", halo: "rgba(30,15,8,.9)", dark: true },
    shrine: { bg: "#3a3346", road: "#cfc3e0", casing: "#16121e", minor: "#a294b9", ink: "#f4eeff", halo: "rgba(20,15,30,.9)", dark: true },
    sea: { bg: "#3f7fae", road: "#eef7ff", casing: "#1d4a6c", minor: "#cfe6f7", ink: "#f2fbff", halo: "rgba(12,40,66,.9)", dark: true }
  };
  const ZONES = {
    building: { fill: "#b48e5c", stroke: "#5e4425" },
    house: { fill: "#c39a66", stroke: "#634828" },
    plaza: { fill: "#f1e5c4", stroke: "rgba(110,85,45,.45)" },
    water: { fill: "#79b4d8", stroke: "#3f7aa0" },
    cliff: { fill: "#8b7558", stroke: "#4d3d29" },
    grass: { fill: "#a3c27a", stroke: "none" },
    forest: { fill: "#4f7f43", stroke: "#2f5428" },
    sand: { fill: "#e9d29b", stroke: "none" },
    snow: { fill: "#f6fafc", stroke: "#b9cad6" },
    ice: { fill: "#cfe7f3", stroke: "#86b3cc" },
    lava: { fill: "#d1552e", stroke: "#7d2b12" },
    room: { fill: "rgba(255,240,210,.13)", stroke: "rgba(255,240,210,.35)" },
    wall: { fill: "#221d19", stroke: "#000" },
    farm: { fill: "#c9b86c", stroke: "#8e7d3b" },
    field: { fill: "#c3d18f", stroke: "none" },
    pit: { fill: "#110d0a", stroke: "#000" },
    deck: { fill: "#a77d4f", stroke: "#5b3f20" },
    rock: { fill: "#9a8a76", stroke: "#5c4f40" },
    garden: { fill: "#8fbb6c", stroke: "#557a3a" },
    swamp: { fill: "#6f7b4c", stroke: "#434b2a" }
  };
  const BADGE = {
    inn: ["宿", "#3d6fb0"], tavern: ["酒", "#9c5a1c"], shop: ["店", "#2f8a5a"], weapon: ["武", "#8c3a2c"],
    armor: ["防", "#5a5f8c"], item: ["道", "#2f8a5a"], church: ["教", "#7a5ab0"], guild: ["会", "#6a4a2a"],
    npc: ["人", "#5d4c36"], stairs: ["梯", "#6a5a44"], gate: ["门", "#6a5a44"], ship: ["船", "#1f6f9a"],
    peddler: ["商", "#2f8a5a"], danger: ["!", "#c0392b"], landmark: ["◆", "#8a6a24"], camp: ["营", "#6a5a44"],
    shrine: ["祠", "#7a3fa0"], house: ["家", "#7a5a34"], save: ["存", "#2a8fc9"], boss: ["王", "#b3261e"]
  };
  const KIND_LABEL = {
    exit: "出入口", save: "存档点", inn: "旅店", tavern: "酒馆", shop: "商店/杂货", weapon: "武器店", armor: "防具店",
    item: "道具店", church: "教会", guild: "公会", npc: "关键 NPC", boss: "Boss", chest: "宝箱", chest_red: "红宝箱",
    chest_purple: "紫宝箱（需开锁）", hidden: "隐藏物/闪光点", stairs: "楼梯/升降", gate: "门/机关", ship: "船只/渡口",
    peddler: "行商", danger: "危险/强敌", landmark: "地标", camp: "营地", shrine: "祠堂", house: "民宅"
  };
  const PATH_LABEL = { main: "主路", minor: "小路/岔路", hidden: "隐藏通道", stairs: "台阶/楼梯", bridge: "桥", ladder: "梯子/藤蔓", water: "水路/河流", boat: "航线/渡船" };
  const DIR8 = ["东", "东南", "南", "西南", "西", "西北", "北", "东北"];

  let api = null;
  let pane, svg, info, legendBox, titleEl, subEl, toggleBtn;
  let cur = null; // {rid, lid, d, theme, vb, home}
  const miniEls = [];
  let miniLayer = null;

  const esc = (v) => String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const arr = (v) => (Array.isArray(v) ? v : v == null ? [] : [v]);
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) if (attrs[k] != null) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  const P = (pts) => pts.map((p) => (+p[0]).toFixed(2) + "," + (+p[1]).toFixed(2));
  function lineD(pts, smooth) {
    if (!pts || pts.length < 2) return "";
    if (!smooth || pts.length < 3) return "M" + P(pts).join("L");
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length - 1; i++) {
      const m = [(pts[i][0] + pts[i + 1][0]) / 2, (pts[i][1] + pts[i + 1][1]) / 2];
      d += `Q${pts[i][0]},${pts[i][1]} ${m[0].toFixed(2)},${m[1].toFixed(2)}`;
    }
    const L = pts[pts.length - 1];
    return d + `L${L[0]},${L[1]}`;
  }
  const polyD = (pts) => "M" + P(pts).join("L") + "Z";

  function get(rid, lid) { return DETAILS[rid] && DETAILS[rid][lid]; }
  function accessOf(rid, lid) {
    const a = ACCESS[rid] && ACCESS[rid][lid];
    return a ? Object.assign({ via: "hidden" }, a, { v: VIA[a.via] || VIA.hidden }) : null;
  }
  const firstSentence = (s) => { const t = String(s || ""); const m = t.match(/^.{8,}?[。；]/); return (m ? m[0].slice(0, -1) : t).slice(0, 70); };
  function sizeOf(d) { return Array.isArray(d.size) && d.size.length === 2 ? d.size : [100, 70]; }
  function themeOf(d, loc) {
    if (d.theme && THEMES[d.theme]) return THEMES[d.theme];
    return THEMES[{ town: "town", dungeon: "cave", field: "field", shrine: "shrine", port: "port", secret: "ruins" }[loc && loc.type] || "field"];
  }
  function parseTo(rid, to) {
    if (!to) return null;
    const s = String(to);
    const i = s.indexOf("/");
    const [r2, l2] = i > 0 ? [s.slice(0, i), s.slice(i + 1)] : [rid, s];
    const R = api.regions[r2];
    return R && R.locById[l2] ? { rid: r2, lid: l2, loc: R.locById[l2], region: R } : null;
  }
  function dir8(dx, dy) {
    const a = Math.atan2(dy, dx);
    return DIR8[(Math.round(a / (Math.PI / 4)) + 8) % 8];
  }

  // 相邻地点：来自地区 roads 与跨区 links（双向）
  function neighbors(rid, lid) {
    const out = [];
    const seen = new Set();
    const r = api.regions[rid];
    const A = r && r.locById[lid];
    if (!A) return out;
    const push = (r2, l2, kind) => {
      const R = api.regions[r2];
      const B = R && R.locById[l2];
      if (!B || seen.has(r2 + "/" + l2)) return;
      seen.add(r2 + "/" + l2);
      out.push({ rid: r2, lid: l2, loc: B, region: R, kind, dir: dir8(B._x - A._x, B._y - A._y), key: r2 === rid ? l2 : r2 + "/" + l2 });
    };
    Object.values(api.regions).forEach((R) => {
      R.roads.forEach(([a, b]) => {
        if (R.id === rid && a === lid) push(rid, b, "road");
        if (R.id === rid && b === lid) push(rid, a, "road");
      });
      R.links.forEach((k) => {
        if (R.id === rid && k.from === lid) push(k.region, k.to, R.geo.isSea || (api.regions[k.region] && api.regions[k.region].geo.isSea) ? "sea" : "link");
        if (k.region === rid && k.to === lid) push(R.id, k.from, R.geo.isSea || r.geo.isSea ? "sea" : "link");
      });
    });
    return out;
  }

  function trKey(rid, loc, i) {
    const t = loc.treasures[i];
    return t ? api.pkey(rid, "tr", loc.id + "#" + i + ":" + t.item) : null;
  }
  const shortItem = (s) => String(s || "").replace(/^隐藏物[:：]\s*/, "").replace(/[（(].*?[)）]/g, "").split(/[、，,]/)[0].trim().slice(0, 12);

  // ---------------- 绘制 ----------------
  function drawZones(g, d, th, mini) {
    arr(d.zones).forEach((z) => {
      const st = ZONES[z.kind] || ZONES.room;
      const attrs = { class: "dz dz-" + (z.kind || "room"), fill: st.fill, stroke: mini ? "none" : st.stroke, "stroke-width": 0.35 };
      let shape;
      if (Array.isArray(z.rect)) {
        const [x, y, w, h] = z.rect;
        shape = el("rect", Object.assign({ x, y, width: w, height: h, rx: z.kind === "plaza" ? 1.6 : z.kind === "building" || z.kind === "house" ? 0.5 : 1.2 }, attrs), g);
      } else if (Array.isArray(z.poly) && z.poly.length > 2) {
        shape = el("path", Object.assign({ d: polyD(z.poly), "stroke-linejoin": "round" }, attrs), g);
      } else if (Array.isArray(z.circle)) {
        shape = el("circle", Object.assign({ cx: z.circle[0], cy: z.circle[1], r: z.circle[2] }, attrs), g);
      }
      if (!shape || mini) return;
      if (z.kind === "building" || z.kind === "house") shape.setAttribute("filter", "url(#dpShadow)");
      if (z.label) {
        const onB = z.kind === "building" || z.kind === "house";
        const corner = !onB && Array.isArray(z.rect) && !z.labelAt;
        const top = onB && Array.isArray(z.rect) && !z.labelAt;
        const c = corner ? [z.rect[0] + 1, z.rect[1] + 2.4] : top ? [z.rect[0] + z.rect[2] / 2, z.rect[1] + 1.75] : zoneCenter(z);
        const t = el("text", { x: c[0], y: c[1], class: "dz-label" + (onB ? " on-building" : ""), "text-anchor": corner ? "start" : "middle", fill: th.dark ? "rgba(255,245,225,.62)" : "rgba(50,35,15,.6)" }, g);
        t.textContent = z.label;
      }
    });
  }
  function zoneCenter(z) {
    if (Array.isArray(z.labelAt)) return z.labelAt;
    if (Array.isArray(z.rect)) return [z.rect[0] + z.rect[2] / 2, z.rect[1] + z.rect[3] / 2 + 0.6];
    if (Array.isArray(z.circle)) return [z.circle[0], z.circle[1] + 0.7];
    const p = z.poly;
    return [p.reduce((a, q) => a + q[0], 0) / p.length, p.reduce((a, q) => a + q[1], 0) / p.length + 0.7];
  }
  const PATH_W = { main: [5.4, 3.7], minor: [3.3, 2.1], stairs: [4.4, 3.2], bridge: [5, 3.4], ladder: [2.8, 1.8], water: [0, 3], boat: [0, 0.8], hidden: [0, 1.1] };
  function drawPaths(g, d, th, mini) {
    const paths = arr(d.paths).filter((p) => Array.isArray(p.pts) && p.pts.length >= 2);
    const order = ["water", "main", "bridge", "stairs", "minor", "ladder", "hidden", "boat"];
    const k = mini ? 1.25 : 1;
    const casing = el("g", { class: "dp-casing" }, g), fillG = el("g", { class: "dp-fill" }, g), top = el("g", {}, g);
    order.forEach((kind) => paths.filter((p) => (PATH_W[p.kind] ? p.kind : "minor") === kind).forEach((p) => {
      const dd = lineD(p.pts, p.smooth !== false && kind !== "stairs" && kind !== "ladder");
      const [cw, fw] = PATH_W[kind];
      const base = { d: dd, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" };
      if (kind === "water") { el("path", Object.assign({}, base, { stroke: "#6fb0d8", "stroke-width": fw * k }), casing); return; }
      if (kind === "boat") { el("path", Object.assign({}, base, { stroke: th.dark ? "#eaf6ff" : "#2f6f9a", "stroke-width": fw * k, "stroke-dasharray": "2 1.6" }), top); return; }
      if (kind === "hidden") { el("path", Object.assign({}, base, { stroke: "#c0392b", "stroke-width": fw * k, "stroke-dasharray": "0.2 1.6", "stroke-linecap": "round" }), top); return; }
      if (kind === "bridge") {
        el("path", Object.assign({}, base, { stroke: "#5d3f1c", "stroke-width": cw * k, "stroke-linecap": "butt" }), casing);
        el("path", Object.assign({}, base, { stroke: "#b88a50", "stroke-width": fw * k, "stroke-linecap": "butt" }), fillG);
        if (!mini) el("path", Object.assign({}, base, { stroke: "#7a5a30", "stroke-width": fw, "stroke-dasharray": "0.25 0.9", "stroke-linecap": "butt" }), top);
        return;
      }
      if (kind === "stairs" || kind === "ladder") {
        el("path", Object.assign({}, base, { stroke: th.casing, "stroke-width": cw * k }), casing);
        el("path", Object.assign({}, base, { stroke: kind === "ladder" ? "#9b7a46" : th.road, "stroke-width": fw * k }), fillG);
        if (!mini) el("path", Object.assign({}, base, { stroke: th.casing, "stroke-width": fw, "stroke-dasharray": "0.3 0.75", "stroke-linecap": "butt", opacity: 0.75 }), top);
        return;
      }
      el("path", Object.assign({}, base, { stroke: th.casing, "stroke-width": cw * k, opacity: kind === "minor" ? 0.85 : 1 }), casing);
      el("path", Object.assign({}, base, { stroke: kind === "minor" ? th.minor : th.road, "stroke-width": fw * k }), fillG);
      if (kind === "minor" && !mini) el("path", Object.assign({}, base, { stroke: th.casing, "stroke-width": 0.22, "stroke-dasharray": "1 1.2", opacity: 0.45 }), top);
    }));
    if (!mini) paths.forEach((p) => {
      if (!p.label) return;
      const [x, y, ang] = midAlong(p.pts);
      const up = ang > 90 || ang < -90 ? ang + 180 : ang;
      const r = (up * Math.PI) / 180, off = (PATH_W[p.kind] || PATH_W.minor)[0] / 2 + 1;
      const t = el("text", { x: 0, y: 0, transform: `translate(${(x + Math.sin(r) * off).toFixed(2)},${(y - Math.cos(r) * off).toFixed(2)}) rotate(${up.toFixed(1)})`, class: "dp-plabel", fill: th.ink, stroke: th.halo }, g);
      t.textContent = p.label;
    });
  }
  // 沿折线一半长度处的点与切线角度
  function midAlong(pts) {
    const seg = [];
    let total = 0;
    for (let i = 1; i < pts.length; i++) { const l = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(l); total += l; }
    let acc = 0;
    for (let i = 0; i < seg.length; i++) {
      if (acc + seg[i] >= total / 2 || i === seg.length - 1) {
        const t = seg[i] ? (total / 2 - acc) / seg[i] : 0, a = pts[i], b = pts[i + 1];
        return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI];
      }
      acc += seg[i];
    }
    return [pts[0][0], pts[0][1], 0];
  }
  function chestShape(g, color, lid) {
    el("rect", { x: -1.6, y: -1.15, width: 3.2, height: 2.3, rx: 0.35, fill: color, stroke: "#1b1206", "stroke-width": 0.28 }, g);
    el("path", { d: "M-1.6,-0.2H1.6", stroke: lid, "stroke-width": 0.3 }, g);
    el("rect", { x: -0.35, y: -0.45, width: 0.7, height: 0.6, fill: "#f3d36b", stroke: "none" }, g);
  }
  function drawPoi(g, p, ctx) {
    const [x, y] = p.at;
    const gp = el("g", { class: "dp-poi kind-" + p.kind, transform: `translate(${x},${y})`, tabindex: 0, role: "button", "aria-label": poiLabel(p, ctx) || KIND_LABEL[p.kind], "data-atlas-poi": "poi-" + ctx.d.pois.indexOf(p) }, g);
    const th = ctx.th;
    switch (p.kind) {
      case "exit": {
        const target = parseTo(ctx.rid, p.to);
        const [w, h] = ctx.size;
        const dx = x - w / 2, dy = y - h / 2;
        const ang = p.dir ? { 东: 0, 东南: 45, 南: 90, 西南: 135, 西: 180, 西北: 225, 北: 270, 东北: 315 }[p.dir] : Math.atan2(dy * (w / h), dx) * 180 / Math.PI;
        el("circle", { r: 2.3, fill: target ? "#2f8a4f" : "#6d6d6d", stroke: "#0f2a17", "stroke-width": 0.35 }, gp);
        el("path", { d: "M-0.9,-1.1L0.9,0L-0.9,1.1", fill: "none", stroke: "#fff", "stroke-width": 0.55, "stroke-linecap": "round", "stroke-linejoin": "round", transform: `rotate(${(ang || 0).toFixed(1)})` }, gp);
        if (target) gp.classList.add("link");
        break;
      }
      case "chest": chestShape(gp, "#a8743a", "#5b3a14"); break;
      case "chest_red": chestShape(gp, "#c0392b", "#6e1a12"); break;
      case "chest_purple": chestShape(gp, "#8e44ad", "#4a1d63"); break;
      case "hidden":
        el("path", { d: "M0,-2L0.55,-0.55L2,0L0.55,0.55L0,2L-0.55,0.55L-2,0L-0.55,-0.55Z", fill: "#ffe27a", stroke: "#8a6a14", "stroke-width": 0.25 }, gp);
        break;
      case "boss":
        el("circle", { r: 2.4, fill: "#b3261e", stroke: "#3b0a06", "stroke-width": 0.4 }, gp);
        el("path", { d: "M-1.3,0.9L-1.3,-0.7L-0.65,0L0,-1.2L0.65,0L1.3,-0.7L1.3,0.9Z", fill: "#ffd76a" }, gp);
        break;
      case "save":
        el("path", { d: "M0,-2.3L1.5,0L0,2.3L-1.5,0Z", fill: "#56b4f0", stroke: "#0d3f63", "stroke-width": 0.35 }, gp);
        el("path", { d: "M0,-1.3L0.7,0L0,1.3", fill: "none", stroke: "#e6f6ff", "stroke-width": 0.3 }, gp);
        break;
      default: {
        const b = BADGE[p.kind] || BADGE.landmark;
        el("rect", { x: -1.85, y: -1.85, width: 3.7, height: 3.7, rx: 0.9, fill: b[1], stroke: "rgba(0,0,0,.55)", "stroke-width": 0.3 }, gp);
        const t = el("text", { y: 0.95, class: "dp-badge" }, gp);
        t.textContent = b[0];
      }
    }
    const label = poiLabel(p, ctx);
    if (label) {
      const lp = p.lp || (p.kind === "exit" ? exitLabelSide(p, ctx.size) : "r");
      const off = { r: [3, 0.75, "start"], l: [-3, 0.75, "end"], t: [0, -2.9, "middle"], b: [0, 4.3, "middle"] }[lp] || [3, 0.75, "start"];
      const t = el("text", { x: off[0], y: off[1], "text-anchor": off[2], class: "dp-label" + (p.kind === "exit" ? " exit" : ""), fill: p.kind === "exit" ? (th.dark ? "#bff0c9" : "#1f5c32") : th.ink, stroke: th.halo }, gp);
      t.textContent = label;
    }
    gp.addEventListener("mouseenter", () => showInfo(p, ctx, false));
    gp.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); gp.dispatchEvent(new MouseEvent("click", { bubbles: true })); } });
    gp.addEventListener("mouseleave", () => { if (!ctx.pinned) hideInfo(); });
    gp.addEventListener("click", (e) => {
      e.stopPropagation();
      if (p.kind === "exit") { const t = parseTo(ctx.rid, p.to); if (t) { api.openLocation(t.rid, t.lid); return; } }
      ctx.pinned = p; showInfo(p, ctx, true);
    });
    ctx.poiEls.push({ p, g: gp });
    return gp;
  }
  function exitLabelSide(p, size) {
    const [w, h] = size, [x, y] = p.at;
    if (x < w * 0.18) return "r";
    if (x > w * 0.82) return "l";
    if (y < h * 0.2) return "b";
    if (y > h * 0.8) return "t";
    return "r";
  }
  function poiLabel(p, ctx) {
    if (p.label) return p.label;
    if (p.kind === "exit") { const t = parseTo(ctx.rid, p.to); return t ? "往 " + t.loc.name : "出口"; }
    const trs = arr(p.tr).map((i) => ctx.loc.treasures[i]).filter(Boolean);
    if (trs.length) return shortItem(trs[0].item) + (trs.length > 1 ? " 等" : "");
    return "";
  }
  function refreshChestStates(ctx) {
    ctx.poiEls.forEach(({ p, g }) => {
      const keys = arr(p.tr).map((i) => trKey(ctx.rid, ctx.loc, i)).filter(Boolean);
      g.classList.toggle("done", keys.length > 0 && keys.every((k) => api.getProgress(k)));
    });
  }

  function infoHtml(p, ctx) {
    let h = `<div class="dpi-title"><b>${esc(poiLabel(p, ctx) || KIND_LABEL[p.kind] || "")}</b><span>${esc(KIND_LABEL[p.kind] || p.kind)}</span></div>`;
    if (p.kind === "exit") {
      const t = parseTo(ctx.rid, p.to);
      if (t) h += `<div>通往 <a data-dp-go="${esc(t.rid)}/${esc(t.lid)}">${esc(t.loc.name)}</a>${t.rid !== ctx.rid ? `（${esc(t.region.name)}）` : ""} · 点击图标前往</div>`;
    }
    if (p.note) h += `<div>${esc(p.note)}</div>`;
    const trs = arr(p.tr).filter((i) => ctx.loc.treasures[i]);
    if (trs.length) {
      h += `<ul class="dpi-tr">` + trs.map((i) => {
        const t = ctx.loc.treasures[i], k = trKey(ctx.rid, ctx.loc, i);
        return `<li><label><input type="checkbox" class="check" data-dp-key="${esc(k)}" ${api.getProgress(k) ? "checked" : ""}> <b>${esc(t.item)}</b></label>${t.how ? `<div class="muted">${esc(t.how)}</div>` : ""}</li>`;
      }).join("") + `</ul>`;
    }
    const npcs = arr(p.npc).map((i) => ctx.loc.npcs[i]).filter(Boolean);
    if (npcs.length) h += `<ul class="dpi-tr">` + npcs.map((n) => `<li><b>${esc(n.name)}</b>：${esc(n.item || "")}${n.method ? ` <span class="muted">（${esc(n.method)}）</span>` : ""}${n.note ? `<div class="muted">${esc(n.note)}</div>` : ""}</li>`).join("") + `</ul>`;
    if (["shop", "weapon", "armor", "item", "peddler"].includes(p.kind) && ctx.loc.shops.length) h += `<b>本地点商店推荐</b><ul>${ctx.loc.shops.map(s => `<li>${esc(s)}</li>`).join("")}</ul>`;
    if (p.kind === "boss" && ctx.loc.boss.length) h += ctx.loc.boss.map((b) => `<div>⚔ <b>${esc(typeof b === "string" ? b : b.name)}</b>${b.weakness ? ` · 弱点：${esc(arr(b.weakness).join("、"))}` : ""}</div>`).join("");
    if (ctx.pinned === p) h += `<div class="muted" style="margin-top:4px">点击空白处取消固定</div>`;
    return h;
  }
  function showInfo(p, ctx, pin) {
    if (ctx.pinned && ctx.pinned !== p && !pin) return;
    info.innerHTML = infoHtml(p, ctx);
    info.hidden = false;
    ctx.poiEls.forEach(({ p: q, g }) => g.classList.toggle("sel", q === ctx.pinned));
  }
  function hideInfo() { info.hidden = true; }

  function buildDetailSvg(rid, loc, d) {
    const th = themeOf(d, loc);
    const size = sizeOf(d);
    const [w, h] = size;
    svg.innerHTML = "";
    const defs = el("defs", {}, svg);
    const f = el("filter", { id: "dpShadow", x: "-20%", y: "-20%", width: "140%", height: "140%" }, defs);
    el("feDropShadow", { dx: 0.35, dy: 0.5, stdDeviation: 0.35, "flood-color": "#000", "flood-opacity": 0.35 }, f);
    const pat = el("pattern", { id: "dpGrain", width: 4, height: 4, patternUnits: "userSpaceOnUse" }, defs);
    el("circle", { cx: 1, cy: 1, r: 0.18, fill: th.dark ? "rgba(255,255,255,.07)" : "rgba(60,40,10,.12)" }, pat);
    el("circle", { cx: 3, cy: 2.6, r: 0.14, fill: th.dark ? "rgba(0,0,0,.25)" : "rgba(255,255,255,.18)" }, pat);
    el("rect", { x: -400, y: -400, width: w + 800, height: h + 800, fill: th.dark ? "#14110e" : "#5b4a33", opacity: 0.0 }, svg);
    el("rect", { x: 0, y: 0, width: w, height: h, rx: 2.5, fill: th.bg, stroke: th.dark ? "#000" : "#6b5434", "stroke-width": 0.5 }, svg);
    el("rect", { x: 0, y: 0, width: w, height: h, rx: 2.5, fill: "url(#dpGrain)" }, svg);
    const ctx = { rid, loc, d, th, size, poiEls: [], pinned: null };
    const g = el("g", {}, svg);
    drawZones(el("g", { class: "dp-zones" }, g), d, th, false);
    drawPaths(el("g", { class: "dp-paths" }, g), d, th, false);
    const pg = el("g", { class: "dp-pois" }, g);
    const order = { exit: 0, save: 1, boss: 9 };
    arr(d.pois).filter((p) => Array.isArray(p.at)).sort((a, b) => (order[a.kind] || 5) - (order[b.kind] || 5)).forEach((p) => drawPoi(pg, p, ctx));
    // 指北针
    const cg = el("g", { transform: `translate(${w + 5},5)`, class: "dp-compass" }, svg);
    el("circle", { r: 2.9, fill: "rgba(10,25,45,.6)", stroke: "#c9a24a", "stroke-width": 0.3 }, cg);
    el("path", { d: "M0,-2.4L0.75,0L0,2.4L-0.75,0Z", fill: "#c9a24a" }, cg);
    const n = el("text", { y: -3.4, class: "dp-n" }, cg);
    n.textContent = "N";
    refreshChestStates(ctx);
    return ctx;
  }

  // ---------------- 面板 ----------------
  function ensurePane() {
    if (pane) return;
    const stage = document.getElementById("mapStage");
    pane = document.createElement("div");
    pane.className = "detail-pane";
    pane.hidden = true;
    pane.innerHTML = `<div class="dp-head"><div class="dp-titles"><b class="dp-title"></b><span class="dp-sub"></span></div>
      <div class="dp-tools"><button class="btn icon" data-dp="in" title="放大">＋</button><button class="btn icon" data-dp="out" title="缩小">－</button>
      <button class="btn icon" data-dp="reset" title="复位">⟲</button><button class="btn" data-dp="expand" aria-pressed="false">展开</button><button class="btn" data-dp="legend">图例</button><button class="btn" data-dp="close" title="收起细节图（Esc）">收起 ✕</button></div></div>
      <div class="dp-access" hidden></div>
      <div class="dp-body"><div class="dp-canvas"><svg class="dp-svg" xmlns="${NS}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="地点道路和要点地图"></svg><div class="dp-info" hidden></div><div class="dp-legend" hidden></div>
      <div class="dp-foot">攻略示意图 · 道路及要点为相对位置 · 滚轮缩放／拖动平移</div></div><aside class="dp-browser" aria-label="小区域地图目录"></aside></div>`;
    stage.appendChild(pane);
    svg = pane.querySelector(".dp-svg");
    info = pane.querySelector(".dp-info");
    legendBox = pane.querySelector(".dp-legend");
    titleEl = pane.querySelector(".dp-title");
    subEl = pane.querySelector(".dp-sub");
    ["mousedown", "wheel", "touchstart", "touchmove", "dblclick", "click"].forEach((ev) => pane.addEventListener(ev, (e) => e.stopPropagation(), { passive: ev !== "wheel" && ev !== "touchmove" }));
    pane.addEventListener("click", (e) => {
      const b = e.target.closest("[data-dp]");
      if (b) {
        const a = b.dataset.dp;
        if (a === "close") { setPref(false); hide(); }
        if (a === "in") zoomDp(1 / 1.3);
        if (a === "out") zoomDp(1.3);
        if (a === "reset") resetAtlasView();
        if (a === "legend") legendBox.hidden = !legendBox.hidden;
        if (a === "expand") { const expanded=pane.classList.toggle("expanded");b.setAttribute("aria-pressed",String(expanded));b.textContent=expanded ? "还原" : "展开"; }
        return;
      }
      const go = e.target.closest("[data-dp-go]");
      if (go) { const [r, l] = go.dataset.dpGo.split("/"); api.openLocation(r, l); return; }
      if (e.target.closest(".dp-browser")) return;
      if (e.target.closest(".dp-info")) return;
      if (cur && cur.ctx && cur.ctx.pinned && !e.target.closest(".dp-poi")) resetAtlasSelection();
    });
    pane.addEventListener("change", (e) => {
      const k = e.target.dataset.dpKey;
      if (!k) return;
      api.setProgress(k, e.target.checked);
      if (cur && cur.ctx) refreshChestStates(cur.ctx);
    });
    svg.addEventListener("wheel", (e) => {
      e.preventDefault();
      const [mx, my] = toSvg(e.clientX, e.clientY);
      zoomDp(e.deltaY > 0 ? 1.15 : 1 / 1.15, mx, my);
    }, { passive: false });
    let drag = null;
    svg.addEventListener("mousedown", (e) => { if (e.button === 0 && cur) drag = { x: e.clientX, y: e.clientY, vb: cur.vb.slice() }; });
    window.addEventListener("mousemove", (e) => {
      if (!drag) return;
      const s = cur.vb[2] / (svg.clientWidth || 1), sy = cur.vb[3] / (svg.clientHeight || 1);
      const k = Math.max(s, sy);
      cur.vb = [drag.vb[0] - (e.clientX - drag.x) * k, drag.vb[1] - (e.clientY - drag.y) * k, drag.vb[2], drag.vb[3]];
      applyVb();
    });
    window.addEventListener("mouseup", () => (drag = null));
    let tp = null;
    svg.addEventListener("touchstart", (e) => {
      if (!cur) return;
      if (e.touches.length === 1) tp = { x: e.touches[0].clientX, y: e.touches[0].clientY, vb: cur.vb.slice() };
      else if (e.touches.length === 2) { const [a, b] = e.touches; tp = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), vb: cur.vb.slice() }; }
    }, { passive: true });
    svg.addEventListener("touchmove", (e) => {
      if (!tp || !cur) return;
      e.preventDefault();
      if (e.touches.length === 1 && tp.x != null) {
        const k = Math.max(cur.vb[2] / (svg.clientWidth || 1), cur.vb[3] / (svg.clientHeight || 1));
        cur.vb = [tp.vb[0] - (e.touches[0].clientX - tp.x) * k, tp.vb[1] - (e.touches[0].clientY - tp.y) * k, tp.vb[2], tp.vb[3]];
        applyVb();
      } else if (e.touches.length === 2 && tp.d) {
        const [a, b] = e.touches;
        cur.vb = tp.vb.slice();
        zoomDp(tp.d / Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY));
      }
    }, { passive: false });
    svg.addEventListener("touchend", () => (tp = null));
  }
  function toSvg(cx, cy) {
    const pt = svg.createSVGPoint();
    pt.x = cx; pt.y = cy;
    const m = svg.getScreenCTM();
    if (!m) return [0, 0];
    const p = pt.matrixTransform(m.inverse());
    return [p.x, p.y];
  }
  function zoomDp(f, cx, cy) {
    if (!cur) return;
    const v = cur.vb;
    const nw = Math.max(cur.home[2] / 6, Math.min(cur.home[2] * 2, v[2] * f));
    const k = nw / v[2];
    if (cx == null) { cx = v[0] + v[2] / 2; cy = v[1] + v[3] / 2; }
    cur.vb = [cx - (cx - v[0]) * k, cy - (cy - v[1]) * k, nw, v[3] * k];
    applyVb();
  }
  function applyVb() { if (cur) svg.setAttribute("viewBox", cur.vb.map((n) => n.toFixed(2)).join(" ")); }

  function resetAtlasSelection() {
    if (!cur) return;
    cur.ctx.pinned = null; hideInfo();
    cur.ctx.poiEls.forEach(({g})=>g.classList.remove("sel"));
    svg.querySelector(".dp-selection")?.remove();
  }
  function resetAtlasView() { if (cur) { resetAtlasSelection(); cur.vb=cur.home.slice(); applyVb(); } }
  function atlasSelect(entry) {
    resetAtlasSelection();
    const A=window.OTAtlas, ctx=cur.ctx;
    if (entry.type === "poi") {
      cur.vb=A.bounds(entry,ctx.size);applyVb();ctx.pinned=entry.data;showInfo(entry.data,ctx,true);return;
    }
    ctx.pinned=entry;
    if (entry.type === "path") {
      cur.vb=A.bounds(entry,ctx.size);applyVb();
      info.innerHTML=`<div class="dpi-title"><b>${esc(entry.label)}</b><span>${esc(entry.note)}</span></div><p>${esc(entry.data.note || "高亮显示这段道路；沿线设施、宝箱与出口可点击查看。")}</p>`;
    } else if (entry.type === "enemy") {
      cur.vb=cur.home.slice();applyVb();
      info.innerHTML=A.enemyHtml(entry.data,A.area(cur.rid,ctx.loc.id));
    } else {
      const n=entry.data;
      info.innerHTML=`<div class="dpi-title"><b>${esc(n.name)}</b><span>NPC · 具体坐标尚未核实</span></div><p>${esc(n.note || "")}</p><div>${esc(n.item || "")}</div><div>${esc(n.method || "")}</div>`;
    }
    if (entry.type === "path" || entry.type === "enemy") {
      const g=el("g",{class:"dp-selection","pointer-events":"none"},svg);
      const routes=entry.type === "path" ? [entry.data] : arr(ctx.d.paths).filter(p=>entry.data.terrain === "water" ? ["water","boat"].includes(p.kind) : entry.data.terrain === "land" ? !["water","boat"].includes(p.kind) : true);
      routes.forEach(p=>el("path",{d:lineD(p.pts,false),fill:"none",stroke:"#ec4061","stroke-width":1.3,"stroke-dasharray":"2 1","stroke-linecap":"round"},g));
    }
    info.hidden=false;
  }

  function buildLegend(ctx) {
    const kinds = [...new Set(arr(ctx.d.pois).map((p) => p.kind))];
    const pk = [...new Set(arr(ctx.d.paths).map((p) => (PATH_W[p.kind] ? p.kind : "minor")))];
    legendBox.innerHTML = `<b>本图图例</b>` +
      pk.map((k) => `<div><i class="lg-path lg-${k}"></i>${PATH_LABEL[k]}</div>`).join("") +
      kinds.map((k) => `<div><i class="lg-poi">${k === "exit" ? "➜" : k.startsWith("chest") ? "▣" : k === "hidden" ? "✦" : k === "save" ? "◆" : k === "boss" ? "♛" : (BADGE[k] || BADGE.landmark)[0]}</i>${KIND_LABEL[k] || k}</div>`).join("");
  }

  function open(rid, lid) {
    const r = api.regions[rid];
    const loc = r && r.locById[lid];
    const d = get(rid, lid);
    if (!loc || !d) { hide(); return false; }
    ensurePane();
    const [w, h] = sizeOf(d);
    const pad = 3;
    cur = { rid, lid, d, home: [-pad, -pad, w + pad * 2 + 8, h + pad * 2] };
    cur.vb = cur.home.slice();
    cur.ctx = buildDetailSvg(rid, loc, d);
    applyVb();
    titleEl.textContent = loc.name;
    const nPaths = arr(d.paths).length, nPoi = arr(d.pois).length;
    subEl.textContent = `${r.name} · 细节示意图 · ${nPaths} 段道路 · ${nPoi} 处要点`;
    buildLegend(cur.ctx);
    const acc = accessOf(rid, lid), accEl = pane.querySelector(".dp-access");
    accEl.hidden = !acc;
    if (acc) {
      const from = arr(acc.from).map((s) => parseTo(rid, s)).filter(Boolean).map((t) => `<a data-dp-go="${esc(t.rid)}/${esc(t.lid)}">${esc(t.loc.name)}</a>`);
      accEl.style.borderLeftColor = acc.v.color;
      accEl.innerHTML = `<span class="ab-badge" style="background:${acc.v.color}">${acc.v.badge}</span><b>如何前往 · ${esc(acc.v.label)}</b>　${esc(acc.how || "")}` +
        (acc.unlock ? `　<span class="dpa-unlock">条件：${esc(acc.unlock)}</span>` : "") + (from.length ? `　入口：${from.join("、")}` : "");
    }
    hideInfo();
    pane.hidden = false;
    if (window.OTAtlas) {
      cur.atlas=window.OTAtlas.mount({host:pane.querySelector(".dp-browser"),svg,rid,loc,d,
        onSelect:atlasSelect,onReset:resetAtlasView,
        onZone(z){resetAtlasSelection();cur.vb=window.OTAtlas.bounds(z,[w,h]);applyVb();},
        onFilter:resetAtlasSelection});
    }
    if (toggleBtn) toggleBtn.classList.add("active");
    return true;
  }
  function hide() {
    if (pane) pane.hidden = true;
    if (toggleBtn) toggleBtn.classList.toggle("active", false);
  }
  const getPref = () => { try { return localStorage.getItem(PREF_KEY) !== "0"; } catch (e) { return true; } };
  const setPref = (v) => { try { localStorage.setItem(PREF_KEY, v ? "1" : "0"); } catch (e) { /* 忽略 */ } };

  // ---------------- 大地图上的缩略路网 ----------------
  function buildMinis() {
    const svgMap = document.getElementById("worldMap");
    const defs = svgMap.querySelector("defs");
    const grad = el("radialGradient", { id: "miniFadeGrad", cx: "50%", cy: "50%", r: "50%" }, defs);
    el("stop", { offset: "55%", "stop-color": "#fff", "stop-opacity": 1 }, grad);
    el("stop", { offset: "100%", "stop-color": "#fff", "stop-opacity": 0 }, grad);
    const mask = el("mask", { id: "miniFade", maskContentUnits: "objectBoundingBox" }, defs);
    el("rect", { x: 0, y: 0, width: 1, height: 1, fill: "url(#miniFadeGrad)" }, mask);
    miniLayer = el("g", { id: "layerDetailMini", "pointer-events": "none" });
    svgMap.insertBefore(miniLayer, document.getElementById("layerLabels"));
    Object.values(api.regions).forEach((r) => {
      const locs = r.locations;
      locs.forEach((loc) => {
        const d = get(r.id, loc.id);
        if (!d || !arr(d.paths).length) return;
        let near = Infinity;
        Object.values(api.regions).forEach((R2) => R2.locations.forEach((o) => { if (o !== loc) near = Math.min(near, Math.hypot(o._x - loc._x, o._y - loc._y)); }));
        const R = Math.max(4, Math.min(13, near * 0.46));
        const [w, h] = sizeOf(d);
        miniEls.push({ r, loc, d, R, w, h, g: null });
      });
    });
  }
  function renderMini(m) {
    const s = (m.R * 2) / Math.max(m.w, m.h);
    m.g = el("g", { class: "mini-detail", transform: `translate(${(m.loc._x - (m.w * s) / 2).toFixed(2)},${(m.loc._y - (m.h * s) / 2).toFixed(2)}) scale(${s.toFixed(4)})` }, miniLayer);
    const inner = el("g", { mask: "url(#miniFade)" }, m.g);
    const th = themeOf(m.d, m.loc);
    el("rect", { x: -2, y: -2, width: m.w + 4, height: m.h + 4, fill: th.bg, opacity: 0.55 }, inner);
    drawZones(el("g", { opacity: 0.8 }, inner), m.d, th, true);
    drawPaths(inner, m.d, th, true);
    arr(m.d.pois).forEach((p) => {
      if (!Array.isArray(p.at)) return;
      const c = p.kind === "chest_red" ? "#c0392b" : p.kind === "chest_purple" ? "#8e44ad" : p.kind === "chest" ? "#a8743a" : p.kind === "boss" ? "#b3261e" : p.kind === "exit" ? "#2f8a4f" : p.kind === "hidden" ? "#ffe27a" : null;
      if (c) el("circle", { cx: p.at[0], cy: p.at[1], r: p.kind === "exit" ? 1.6 : 1.3, fill: c, stroke: "#1b1206", "stroke-width": 0.3 }, inner);
    });
  }
  function onView() {
    if (accessRoutes.length) updateAccessRoutes();
    if (!miniLayer) return;
    const st = api.state;
    const deep = st.view[2] < MINI_ZOOM;
    miniLayer.style.display = deep ? "" : "none";
    if (!deep) return;
    const v = st.view, pad = 20;
    miniEls.forEach((m) => {
      const inView = m.loc._x > v[0] - pad && m.loc._x < v[0] + v[2] + pad && m.loc._y > v[1] - pad && m.loc._y < v[1] + v[3] + pad;
      const mk = api.markerEls[m.r.id + "/" + m.loc.id];
      const show = inView && (!mk || mk.style.display !== "none");
      if (show && !m.g) renderMini(m);
      if (m.g) m.g.style.display = show ? "" : "none";
    });
  }

  // ---------------- 对外接口 ----------------
  function panelHtml(r, l) {
    const d = get(r.id, l.id);
    const nb = neighbors(r.id, l.id);
    let h = accessHtml(r, l);
    if (d) {
      const kinds = {};
      arr(d.paths).forEach((p) => (kinds[PATH_W[p.kind] ? p.kind : "minor"] = (kinds[PATH_W[p.kind] ? p.kind : "minor"] || 0) + 1));
      const linked = new Set(arr(d.pois).flatMap((p) => arr(p.tr)));
      h += `<h3>细节地图</h3>`;
      if (d.note) h += `<p>${esc(d.note)}</p>`;
      h += `<p class="muted">${Object.entries(kinds).map(([k, n]) => PATH_LABEL[k] + " " + n).join(" · ")}${l.treasures.length ? ` · 宝箱标注 ${[...linked].filter((i) => l.treasures[i]).length}/${l.treasures.length}` : ""}</p>`;
      h += `<button class="btn detail-open" data-detail-open="1">🗺 打开细节示意图</button>`;
      const exits = arr(d.pois).filter((p) => p.kind === "exit");
      if (exits.length) {
        h += `<table class="kv"><tr><th>出入口</th><th>通往</th></tr>` + exits.map((p) => {
          const t = parseTo(r.id, p.to);
          const name = t ? `<a href="javascript:void 0" data-open-loc="${esc(t.rid)}/${esc(t.lid)}">📍${esc(t.loc.name)}</a>${t.rid !== r.id ? ` <span class="muted">${esc(t.region.name)}</span>` : ""}` : esc(p.note || "—");
          return `<tr><td>${esc(p.label || p.dir || "出口")}</td><td>${name}</td></tr>`;
        }).join("") + `</table>`;
      }
      const branches = arr(d.paths).filter((p) => p.label && p.kind !== "main");
      if (branches.length) h += `<div class="row muted" style="margin-top:6px">岔路 / 小路：${branches.map((p) => esc(p.label)).join("、")}</div>`;
    }
    if (nb.length && !(d && arr(d.pois).some((p) => p.kind === "exit"))) {
      h += `<h3>相邻地点</h3><table class="kv"><tr><th>方向</th><th>地点</th></tr>` + nb.map((n) =>
        `<tr><td>${n.dir}${n.kind === "sea" ? "（航线）" : ""}</td><td><a href="javascript:void 0" data-open-loc="${esc(n.rid)}/${esc(n.lid)}">📍${esc(n.loc.name)}</a>${n.rid !== r.id ? ` <span class="muted">${esc(n.region.name)}</span>` : ""}</td></tr>`).join("") + `</table>`;
    }
    return h;
  }

  function locRef(rid, s) {
    const t = parseTo(rid, s);
    return t ? `<a href="javascript:void 0" data-open-loc="${esc(t.rid)}/${esc(t.lid)}">📍${esc(t.loc.name)}</a>${t.rid !== rid ? ` <span class="muted">${esc(t.region.name)}</span>` : ""}` : "";
  }
  function accessHtml(r, l) {
    const a = accessOf(r.id, l.id);
    if (!a) return "";
    const from = arr(a.from).map((s) => locRef(r.id, s)).filter(Boolean);
    return `<div class="access-box" style="border-color:${a.v.color}"><div class="ab-head"><span class="ab-badge" style="background:${a.v.color}">${a.v.badge}</span><b>如何前往</b><span class="chip" style="color:${a.v.color};border-color:${a.v.color}">${esc(a.v.label)}</span></div>` +
      (a.unlock ? `<div class="row"><b>解锁条件：</b>${esc(a.unlock)}</div>` : "") +
      (a.how ? `<div class="row"><b>路线：</b>${esc(a.how)}</div>` : "") +
      (from.length ? `<div class="row"><b>入口所在：</b>${from.join("、")}</div>` : "") + `</div>`;
  }
  function tipHtml(r, l) {
    const a = accessOf(r.id, l.id);
    return a ? `<div class="tip-access"><span style="background:${a.v.color}">${a.v.badge}</span>${esc(a.v.label)}：${esc(firstSentence(a.how))}</div>` : "";
  }

  // 大地图上的隐藏路线（隐蔽入口 / 水路 / 航线 / 快速旅行）与地点角标
  const accessRoutes = [];
  function buildAccessLayer() {
    const svgMap = document.getElementById("worldMap");
    const layer = el("g", { id: "layerAccess", "pointer-events": "none" });
    svgMap.insertBefore(layer, document.getElementById("layerLabels"));
    const used = new Set();
    Object.keys(ACCESS).forEach((rid) => {
      const r = api.regions[rid];
      if (!r) return;
      Object.keys(ACCESS[rid]).forEach((lid) => {
        const loc = r.locById[lid];
        const a = accessOf(rid, lid);
        if (!loc || !a) return;
        used.add(a.via);
        arr(a.from).forEach((s, i) => {
          const t = parseTo(rid, s);
          if (!t || t.loc === loc) return;
          const x1 = t.loc._x, y1 = t.loc._y, x2 = loc._x, y2 = loc._y;
          const len = Math.hypot(x2 - x1, y2 - y1) || 1;
          const bend = (i % 2 ? -1 : 1) * Math.min(len * 0.18, 18);
          const cx = (x1 + x2) / 2 - ((y2 - y1) / len) * bend, cy = (y1 + y2) / 2 + ((x2 - x1) / len) * bend;
          const d = `M${x1.toFixed(1)},${y1.toFixed(1)}Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
          const g = el("g", { class: "access-route" }, layer);
          el("path", { d, class: "ar-casing" }, g);
          el("path", { d, class: "ar-line", stroke: a.v.color, "stroke-dasharray": a.v.dash }, g);
          accessRoutes.push({ g, regions: [rid, t.rid], keys: [rid + "/" + lid, t.rid + "/" + t.lid] });
        });
        const mk = api.markerEls[rid + "/" + lid];
        if (mk) {
          const b = el("g", { class: "access-badge", transform: "translate(-9,-9)" }, mk);
          el("circle", { r: 5.4, fill: a.v.color, stroke: "#fff", "stroke-width": 1.1 }, b);
          const tx = el("text", { y: 2.6, "text-anchor": "middle", "font-size": 7, "font-weight": 700, fill: "#fff", "pointer-events": "none" }, b);
          tx.textContent = a.v.badge;
        }
      });
    });
    const lg = document.getElementById("legend");
    if (lg && used.size) {
      let html = `<label class="lg-route-title">隐藏路线 / 进入方式</label>`;
      Object.keys(VIA).filter((k) => used.has(k)).forEach((k) => {
        html += `<label class="lg-route"><svg width="22" height="10"><path d="M1,5H21" stroke="${VIA[k].color}" stroke-width="2.4" stroke-dasharray="${VIA[k].dash}" fill="none"/></svg><span class="ab-badge sm" style="background:${VIA[k].color}">${VIA[k].badge}</span>${VIA[k].label}</label>`;
      });
      lg.insertAdjacentHTML("beforeend", html);
    }
  }
  function updateAccessRoutes() {
    const st = api.state;
    accessRoutes.forEach((rt) => {
      const visible = rt.keys.every((k) => { const m = api.markerEls[k]; return !m || m.style.display !== "none"; });
      rt.g.style.display = visible ? "" : "none";
      rt.g.classList.toggle("dim", !!st.region && !rt.regions.includes(st.region));
    });
  }

  function onRefresh() {
    const st = api.state;
    updateAccessRoutes();
    if (toggleBtn) toggleBtn.disabled = !(st.region && st.location && get(st.region, st.location));
    if (st.region && st.location && getPref() && !st.globalTab) {
      if (!cur || cur.rid !== st.region || cur.lid !== st.location || (pane && pane.hidden)) open(st.region, st.location);
    } else hide();
    if (!st.location) cur = null;
  }

  function init(a) {
    api = a;
    const zc = document.querySelector(".map-toolbar .zoom-ctrl");
    if (zc) {
      toggleBtn = document.createElement("button");
      toggleBtn.className = "btn";
      toggleBtn.textContent = "🗺 细节图";
      toggleBtn.title = "显示 / 收起当前地点的细节示意图";
      toggleBtn.disabled = true;
      zc.parentNode.insertBefore(toggleBtn, zc);
      toggleBtn.addEventListener("click", () => {
        const st = api.state;
        if (pane && !pane.hidden) { setPref(false); hide(); return; }
        if (st.region && st.location) { setPref(true); open(st.region, st.location); }
      });
    }
    buildMinis();
    buildAccessLayer();
  }

  window.OTDetail = {
    init, onView, onRefresh, panelHtml, tipHtml, neighbors, has: (rid, lid) => !!get(rid, lid),
    openCurrent() { const st = api.state; if (st.region && st.location) { setPref(true); open(st.region, st.location); } },
    onProgress() { if (cur && cur.ctx) refreshChestStates(cur.ctx); },
    handleEscape() { if (pane && !pane.hidden) { setPref(false); hide(); return true; } return false; },
    dump() {
      const out = {};
      Object.values(api.regions).forEach((r) => {
        out[r.id] = r.locations.map((l) => ({ id: l.id, name: l.name, type: l.type, world: [+l._x.toFixed(1), +l._y.toFixed(1)], neighbors: neighbors(r.id, l.id).map((n) => ({ to: n.key, name: n.loc.name, dir: n.dir, kind: n.kind })), treasures: l.treasures.length, npcs: l.npcs.length, hasDetail: !!get(r.id, l.id) }));
      });
      return out;
    }
  };
})();

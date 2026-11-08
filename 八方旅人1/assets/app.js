(function () {
  "use strict";

  const GEO = window.OT2_GEO;
  const DATA = window.OT2 || { regions: {}, global: null };
  const SVGNS = "http://www.w3.org/2000/svg";
  const REGION_ORDER = Object.keys(GEO.regions);
  const CONTINENT_NAME = GEO.continentNames || {};
  const WORLD = GEO.world || { name: "世界", en: "", intro: "" };

  const TYPE_META = {
    town: { label: "城镇", color: "#f2c94c" },
    dungeon: { label: "迷宫", color: "#e0564a" },
    field: { label: "野外道路", color: "#6fcf97" },
    shrine: { label: "祭坛", color: "#bb6bd9" },
    port: { label: "港口/停泊处", color: "#56ccf2" },
    secret: { label: "隐藏/特殊", color: "#ffffff" }
  };
  const TYPE_ORDER = ["town", "dungeon", "shrine", "field", "port", "secret"];

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function svgEl(tag, attrs = {}, parent) {
    const el = document.createElementNS(SVGNS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(el);
    return el;
  }
  const arr = (v) => (Array.isArray(v) ? v : v ? [v] : []);
  const ptsToD = (pts) => "M" + pts.map((p) => p.join(",")).join("L") + "Z";

  // ---------------- 数据归一化 ----------------
  const regions = {};
  REGION_ORDER.forEach((id) => {
    const geo = GEO.regions[id];
    const d = DATA.regions[id] || {};
    const r = Object.assign({ id, name: geo.name, en: geo.en, continent: geo.continent, levelRange: "", starter: "", intro: "", missing: !DATA.regions[id] }, d);
    ["highlights", "locations", "story", "sidequests", "items", "jobs", "tips"].forEach((k) => (r[k] = arr(r[k])));
    r.locations.forEach((loc, i) => {
      loc.id = loc.id || "loc" + i;
      loc.type = TYPE_META[loc.type] ? loc.type : "field";
      ["story", "boss", "treasures", "npcs", "shops"].forEach((k) => (loc[k] = arr(loc[k])));
    });
    r.locById = Object.fromEntries(r.locations.map((l) => [l.id, l]));
    r.roads = arr(d.roads).filter((e) => Array.isArray(e) && e.length === 2);
    r.links = arr(d.links).filter((e) => e && e.from && e.region && e.to);
    r.geo = geo;
    regions[id] = r;
  });
  const G = DATA.global || null;

  function bboxOf(shapes) {
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    shapes.forEach((s) => s.forEach(([x, y]) => { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }));
    return { x: x0, y: y0, w: x1 - x0, h: y1 - y0 };
  }

  // ---------------- 进度存储 ----------------
  const PROGRESS_KEY = "ot2-guide-progress-v1";
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); } catch (e) { progress = {}; }
  const saveProgress = () => { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (e) { /* 隐私模式下忽略 */ } };
  const pkey = (rid, kind, name) => rid + "|" + kind + "|" + name;

  function regionTrackables(r) {
    const keys = [];
    r.story.forEach((s) => keys.push(pkey(r.id, "story", s.title)));
    r.sidequests.forEach((s) => keys.push(pkey(r.id, "sq", s.name)));
    r.items.forEach((s) => keys.push(pkey(r.id, "item", s.name + "@" + (s.location || ""))));
    r.locations.forEach((l) => l.treasures.forEach((t, i) => keys.push(pkey(r.id, "tr", l.id + "#" + i + ":" + t.item))));
    return keys;
  }
  function regionProgress(r) {
    const keys = regionTrackables(r);
    const done = keys.filter((k) => progress[k]).length;
    return { done, total: keys.length };
  }

  // ---------------- 几何工具 ----------------
  function pointInPoly(x, y, poly) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  const LAND = GEO.land;
  const HOLES = GEO.landHoles || {};
  const allIslands = REGION_ORDER.flatMap((id) => GEO.regions[id].islands || []);
  function inLand(name, x, y) {
    return pointInPoly(x, y, LAND[name]) && !(HOLES[name] || []).some((h) => pointInPoly(x, y, h));
  }
  function inAnyLand(x, y) {
    return Object.keys(LAND).some((name) => inLand(name, x, y)) || allIslands.some((s) => pointInPoly(x, y, s));
  }
  function insideRegion(r, x, y) {
    const g = r.geo;
    if (g.isSea) return g.shapes.some((s) => pointInPoly(x, y, s)) && !inAnyLand(x, y);
    if (g.fills) return g.fills.some((s) => pointInPoly(x, y, s));
    if ((g.islands || []).some((s) => pointInPoly(x, y, s))) return true;
    return !!g.part && !!LAND[g.continent] && inLand(g.continent, x, y) && pointInPoly(x, y, g.part);
  }
  function centroid(poly) {
    let x = 0, y = 0;
    poly.forEach((p) => { x += p[0]; y += p[1]; });
    return [x / poly.length, y / poly.length];
  }
  // 通过采样求出地区实际陆地（分界多边形 ∩ 大陆 + 岛屿）的外接矩形与内部锚点
  function measureRegion(r) {
    const g = r.geo;
    const cand = [].concat(g.isSea ? g.shapes : [], g.part ? [LAND[g.continent]] : [], g.islands || [], g.fills || []);
    const b = bboxOf(cand);
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, sx = 0, sy = 0, n = 0;
    const step = 4;
    for (let x = b.x; x <= b.x + b.w; x += step) {
      for (let y = b.y; y <= b.y + b.h; y += step) {
        if (!insideRegion(r, x, y)) continue;
        x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y);
        if (!(g.islands || []).some((s) => pointInPoly(x, y, s))) { sx += x; sy += y; n++; }
      }
    }
    r.bbox = isFinite(x0) ? { x: x0, y: y0, w: x1 - x0, h: y1 - y0 } : b;
    r.anchors = [g.label].concat(n ? [[sx / n, sy / n]] : [], (g.islands || []).map(centroid), (g.fills || []).map(centroid));
  }
  function snapInside(r, x, y) {
    if (insideRegion(r, x, y)) return [x, y];
    let best = null, bestD = Infinity;
    r.anchors.forEach(([cx, cy]) => {
      for (let t = 0.04; t <= 1.0001; t += 0.04) {
        const nx = x + (cx - x) * Math.min(1, t + 0.06), ny = y + (cy - y) * Math.min(1, t + 0.06);
        if (insideRegion(r, nx, ny)) {
          const d = Math.hypot(nx - x, ny - y);
          if (d < bestD) { bestD = d; best = [nx, ny]; }
          break;
        }
      }
    });
    return best || [x, y];
  }
  // 由锚点（已知世界坐标的城镇）按坐标轴分别做最小二乘，得到 pos 百分比 → 世界坐标的线性映射
  function fitAnchors(r) {
    const pairs = Object.entries(r.geo.anchors || {})
      .map(([id, w]) => [r.locById[id], w]).filter(([l]) => l && Array.isArray(l.pos));
    if (pairs.length < 2) return null;
    const axis = (k) => {
      const ps = pairs.map(([l]) => +l.pos[k]), ws = pairs.map(([, w]) => w[k]);
      const mp = ps.reduce((a, b) => a + b, 0) / ps.length, mw = ws.reduce((a, b) => a + b, 0) / ws.length;
      let num = 0, den = 0;
      ps.forEach((p, i) => { num += (p - mp) * (ws[i] - mw); den += (p - mp) * (p - mp); });
      const b = den ? num / den : 0;
      return [mw - b * mp, b];
    };
    return { x: axis(0), y: axis(1) };
  }
  function layoutMarkers(r) {
    const { x: bx, y: by, w: bw, h: bh } = r.bbox;
    const fixed = r.geo.fixedPos || {};
    const calib = fitAnchors(r);
    const pts = r.locations.map((loc, i) => {
      if (fixed[loc.id]) return fixed[loc.id].slice();
      if (Array.isArray(loc.wpos) && loc.wpos.length === 2) return snapInside(r, +loc.wpos[0], +loc.wpos[1]);
      let px = 50, py = 50;
      if (Array.isArray(loc.pos) && loc.pos.length === 2) { px = +loc.pos[0]; py = +loc.pos[1]; }
      else { const a = i * 2.4; px = 50 + Math.cos(a) * (10 + i * 2); py = 50 + Math.sin(a) * (10 + i * 2); }
      if (calib) return snapInside(r, calib.x[0] + calib.x[1] * px, calib.y[0] + calib.y[1] * py);
      px = Math.max(3, Math.min(97, px)); py = Math.max(3, Math.min(97, py));
      return snapInside(r, bx + (px / 100) * bw, by + (py / 100) * bh);
    });
    const isFixed = r.locations.map((l) => !!fixed[l.id] || Array.isArray(l.wpos));
    const minD = Math.max(6, Math.min(bw, bh) / 24);
    for (let iter = 0; iter < 80; iter++) {
      let moved = false;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[j][0] - pts[i][0], dy = pts[j][1] - pts[i][1];
          const d = Math.hypot(dx, dy) || 0.01;
          if (d < minD) {
            const push = (minD - d) / 2, ux = dx / d, uy = dy / d;
            const ni = [pts[i][0] - ux * push, pts[i][1] - uy * push];
            const nj = [pts[j][0] + ux * push, pts[j][1] + uy * push];
            if (!isFixed[i] && insideRegion(r, ni[0], ni[1])) pts[i] = ni;
            if (!isFixed[j] && insideRegion(r, nj[0], nj[1])) pts[j] = nj;
            moved = true;
          }
        }
      }
      if (!moved) break;
    }
    r.locations.forEach((loc, i) => { loc._x = pts[i][0]; loc._y = pts[i][1]; });
  }
  REGION_ORDER.forEach((id) => { measureRegion(regions[id]); layoutMarkers(regions[id]); });

  // 闭合 Catmull-Rom 样条，让海岸线与边界更圆润
  function smoothD(pts, closed = true) {
    const n = pts.length;
    if (n < 3) return ptsToD(pts);
    const P = (i) => pts[closed ? (i + n) % n : Math.max(0, Math.min(n - 1, i))];
    let d = `M${P(0)[0]},${P(0)[1]}`;
    const last = closed ? n : n - 1;
    for (let i = 0; i < last; i++) {
      const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += `C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
    }
    return d + (closed ? "Z" : "");
  }

  // 给海岸线加上确定性的细碎起伏，避免平滑后过于圆润
  function roughen(pts, seed, amp = 2.4, seg = 7) {
    const out = [];
    let s = seed >>> 0;
    const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296) * 2 - 1;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i], q = pts[(i + 1) % pts.length];
      const dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len, ny = dx / len;
      const n = Math.max(1, Math.round(len / seg));
      out.push(p);
      for (let k = 1; k < n; k++) {
        const t = k / n, o = rnd() * amp * Math.sin(Math.PI * t);
        out.push([+(p[0] + dx * t + nx * o).toFixed(1), +(p[1] + dy * t + ny * o).toFixed(1)]);
      }
    }
    return out;
  }
  const coastCache = new Map();
  const coastD = (pts) => {
    const amp = GEO.coastRough == null ? 2.4 : GEO.coastRough;
    if (!coastCache.has(pts)) coastCache.set(pts, smoothD(amp > 0 ? roughen(pts, pts.length * 7919 + Math.round(pts[0][0] * 31 + pts[0][1]), amp) : pts));
    return coastCache.get(pts);
  };

  // ---------------- 地图渲染 ----------------
  const svg = $("#worldMap");
  const stage = $("#mapStage");
  const tooltip = $("#mapTooltip");
  const layers = {
    ocean: $("#layerOcean"), sea: $("#layerSea"), shallow: $("#layerShallow"), land: $("#layerLand"),
    water: $("#layerWater"), coast: $("#layerCoast"), decor: $("#layerDecor"), roads: $("#layerRoads"),
    labels: $("#layerLabels"), markers: $("#layerMarkers")
  };
  const scalables = []; // 需要保持屏幕尺寸恒定的元素 {el, x, y, k}
  const regionEls = {};
  const labelEls = {};
  const markerEls = {}; // `${rid}/${lid}` -> g

  const state = {
    view: GEO.viewBox.slice(),
    region: null,
    location: null,
    tab: "overview",
    globalTab: null,
    filters: {},
    hiddenTypes: new Set(),
    anim: null
  };

  function buildMap() {
    const [vx, vy, vw, vh] = GEO.viewBox;
    svgEl("rect", { x: vx - 2000, y: vy - 2000, width: vw + 4000, height: vh + 4000, fill: "url(#oceanGrad)" }, layers.ocean);
    svgEl("rect", { x: vx - 2000, y: vy - 2000, width: vw + 4000, height: vh + 4000, fill: "url(#wavePattern)" }, layers.ocean);

    const defs = svg.querySelector("defs");
    (GEO.unknown || []).forEach((s) => svgEl("path", { d: smoothD(s), class: "unknown-land" }, layers.sea));
    const landD = (name) => [coastD(LAND[name])].concat((HOLES[name] || []).map(coastD)).join(" ");
    const coastPaths = Object.keys(LAND).map(landD).concat(allIslands.map(coastD));
    Object.keys(LAND).forEach((name) => {
      const cp = svgEl("clipPath", { id: "clip-" + name }, defs);
      svgEl("path", { d: landD(name), "clip-rule": "evenodd" }, cp);
    });
    const cpAll = svgEl("clipPath", { id: "clip-allland" }, defs);
    Object.keys(LAND).forEach((name) => svgEl("path", { d: landD(name), "clip-rule": "evenodd" }, cpAll));
    coastPaths.forEach((d) => {
      svgEl("path", { d, class: "shallow outer" }, layers.shallow);
      svgEl("path", { d, class: "shallow" }, layers.shallow);
      svgEl("path", { d, class: "land-base" }, layers.shallow);
      svgEl("path", { d, class: "coastline" }, layers.coast);
    });

    REGION_ORDER.forEach((id) => {
      const r = regions[id];
      const geo = r.geo;
      const groups = [];
      const bind = (g) => {
        g.addEventListener("click", (e) => { if (dragMoved) return; e.stopPropagation(); focusRegion(id); });
        g.addEventListener("mousemove", (e) => showRegionTip(e, r));
        g.addEventListener("mouseleave", hideTip);
        groups.push(g);
      };
      if (geo.isSea) {
        const g = svgEl("g", { class: "region sea", "data-region": id }, layers.sea);
        geo.shapes.forEach((s) => svgEl("path", { d: smoothD(s), class: "land", fill: geo.color }, g));
        bind(g);
        if (geo.islands) {
          const gi = svgEl("g", { class: "region sea-isles", "data-region": id }, layers.land);
          geo.islands.forEach((s) => svgEl("path", { d: coastD(s), class: "land isle", fill: "#d8c79c" }, gi));
          bind(gi);
        }
      } else {
        const g = svgEl("g", { class: "region", "data-region": id }, layers.land);
        if (geo.fills) {
          const cg = svgEl("g", { "clip-path": "url(#clip-allland)" }, g);
          geo.fills.forEach((s) => {
            svgEl("path", { d: smoothD(s), class: "land", fill: geo.color }, cg);
            svgEl("path", { d: smoothD(s), class: "grain", fill: "url(#landGrain)" }, cg);
          });
        }
        if (geo.part) {
          const cg = svgEl("g", { "clip-path": `url(#clip-${geo.continent})` }, g);
          svgEl("path", { d: smoothD(geo.part), class: "land", fill: geo.color }, cg);
          svgEl("path", { d: smoothD(geo.part), class: "grain", fill: "url(#landGrain)" }, cg);
        }
        (geo.islands || []).forEach((s) => {
          svgEl("path", { d: coastD(s), class: "land isle", fill: geo.color }, g);
          svgEl("path", { d: coastD(s), class: "grain", fill: "url(#landGrain)" }, g);
        });
        addTerrain(r, g);
        bind(g);
      }
      regionEls[id] = groups;

      const lg = svgEl("g", { class: "region-label" + (geo.isSea ? " sea" : "") }, layers.labels);
      const t1 = svgEl("text", { class: "rl-name", y: 0 }, lg);
      t1.textContent = r.name;
      const lv = (String(r.levelRange).match(/^[\d\s\-~～—]+/) || [""])[0].trim();
      const starter = String(r.starter).replace(/[（(].*$/, "");
      const sub = [r.en, starter ? "★ " + starter : "", lv ? "Lv " + lv : ""].filter(Boolean).join(" · ");
      const t2 = svgEl("text", { class: "rl-sub", y: 17 }, lg);
      t2.textContent = sub;
      labelEls[id] = lg;
      scalables.push({ el: lg, x: geo.label[0], y: geo.label[1], k: 1 });
    });

    (GEO.rivers || []).forEach((pts) => {
      const d = smoothD(pts, false);
      svgEl("path", { d, class: "river-bank" }, layers.water);
      svgEl("path", { d, class: "river" }, layers.water);
    });
    (GEO.lakes || []).forEach((l) => svgEl("ellipse", { cx: l.c[0], cy: l.c[1], rx: l.rx, ry: l.ry, class: "lake" }, layers.water));

    GEO.continents.forEach((c) => {
      const t = svgEl("text", { class: "continent-label" }, layers.decor);
      t.textContent = c.name;
      scalables.push({ el: t, x: c.x, y: c.y, k: 1 });
    });
    buildCompass();

    REGION_ORDER.forEach((id) => {
      const r = regions[id];
      r.locations.forEach((loc) => {
        const meta = TYPE_META[loc.type];
        const g = svgEl("g", { class: "marker type-" + loc.type, "data-region": id, "data-loc": loc.id }, layers.markers);
        svgEl("circle", { class: "m-halo", r: 10 }, g);
        markerShape(loc.type, meta.color, g);
        const label = svgEl("text", { class: "m-label", x: 11, y: 4 }, g);
        label.textContent = loc.name;
        g.addEventListener("click", (e) => { if (dragMoved) return; e.stopPropagation(); openLocation(id, loc.id); });
        g.addEventListener("mousemove", (e) => showLocTip(e, r, loc));
        g.addEventListener("mouseleave", hideTip);
        markerEls[id + "/" + loc.id] = g;
        scalables.push({ el: g, x: loc._x, y: loc._y, k: 1, marker: true });
      });
    });
    buildRoads();
    buildLegend();
  }

  // 道路：地区内 roads + 跨地区 links；连接海域停泊处的视为航线
  const roadEls = [];
  function buildRoads() {
    const seen = new Set();
    const edges = [];
    const add = (ra, a, rb, b) => {
      const A = regions[ra] && regions[ra].locById[a], B = regions[rb] && regions[rb].locById[b];
      if (!A || !B || A === B) return;
      const key = [ra + "/" + a, rb + "/" + b].sort().join("|");
      if (seen.has(key)) return;
      seen.add(key);
      edges.push({ ra, rb, A, B, sea: regions[ra].geo.isSea || regions[rb].geo.isSea });
    };
    REGION_ORDER.forEach((id) => {
      const r = regions[id];
      r.roads.forEach(([a, b]) => add(id, a, id, b));
      r.links.forEach((l) => add(id, l.from, l.region, l.to));
    });
    const casing = svgEl("g", { class: "roads-casing" }, layers.roads);
    const inner = svgEl("g", { class: "roads-inner" }, layers.roads);
    edges.forEach((e, i) => {
      const x1 = e.A._x, y1 = e.A._y, x2 = e.B._x, y2 = e.B._y;
      const len = Math.hypot(x2 - x1, y2 - y1) || 1;
      const bend = (((i * 2654435761) >>> 0) % 2 ? 1 : -1) * Math.min(len * 0.12, 14);
      const cx = (x1 + x2) / 2 - ((y2 - y1) / len) * bend, cy = (y1 + y2) / 2 + ((x2 - x1) / len) * bend;
      const d = `M${x1.toFixed(1)},${y1.toFixed(1)}Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
      const cls = e.sea ? "sea-route" : "road";
      const c = e.sea ? null : svgEl("path", { d, class: cls + "-casing" }, casing);
      const p = svgEl("path", { d, class: cls }, inner);
      roadEls.push({ els: [c, p].filter(Boolean), regions: [e.ra, e.rb] });
    });
  }

  const TERRAIN = {
    crestlands: { glyph: "mountain", fill: "#8f7aa8", stroke: "#5d4a78" },
    winterlands: { glyph: "snowpeak", fill: "#a9c4d6", stroke: "#6d8ca3" },
    wildlands: { glyph: "volcano", fill: "#a8744c", stroke: "#6e4527" },
    leaflands: { glyph: "tree", fill: "#5f9a52", stroke: "#3c6a33" },
    brightlands: { glyph: "grass", fill: "#b6a95c", stroke: "#8a7e3a" },
    harborlands: { glyph: "hill", fill: "#73ab95", stroke: "#4d8270" },
    hinoeuma: { glyph: "dune", fill: "#c99f55", stroke: "#a37a35" },
    totohaha: { glyph: "palm", fill: "#4f9e69", stroke: "#2f6e45" }
  };
  const GLYPHS = {
    mountain: (c) => `<path d="M-10,6L-3,-7L1,-1L4,-5L11,6Z" fill="${c.fill}" stroke="${c.stroke}" stroke-width="0.8"/>`,
    snowpeak: (c) => `<path d="M-10,6L-2,-8L6,6Z" fill="${c.fill}" stroke="${c.stroke}" stroke-width="0.8"/><path d="M-5,-2L-2,-8L1,-2L-1,-3L-3,-1Z" fill="#fff"/>`,
    volcano: (c) => `<path d="M-11,6L-4,-5L3,-5L10,6Z" fill="${c.fill}" stroke="${c.stroke}" stroke-width="0.8"/><path d="M-3,-5L-1,-8L2,-5Z" fill="#d9583b"/>`,
    tree: (c) => `<rect x="-1" y="2" width="2" height="5" fill="${c.stroke}"/><circle r="5" cy="-1" fill="${c.fill}" stroke="${c.stroke}" stroke-width="0.8"/>`,
    grass: (c) => `<path d="M-6,4Q-5,-2-3,-4M-2,4Q-1,-3 1,-6M2,4Q3,-1 6,-3" fill="none" stroke="${c.stroke}" stroke-width="1.1" stroke-linecap="round"/>`,
    hill: (c) => `<path d="M-10,4Q-3,-6 4,4Z" fill="${c.fill}" stroke="${c.stroke}" stroke-width="0.8"/><path d="M-2,4Q4,-3 10,4Z" fill="${c.fill}" stroke="${c.stroke}" stroke-width="0.8"/>`,
    dune: (c) => `<path d="M-11,4Q-4,-4 3,4M-2,0Q4,-6 11,1" fill="none" stroke="${c.stroke}" stroke-width="1.2" stroke-linecap="round"/>`,
    palm: (c) => `<path d="M0,7Q1,1 0,-3" stroke="#7a5a2a" stroke-width="1.4" fill="none"/><path d="M0,-3Q-6,-6-8,-1M0,-3Q6,-6 8,-1M0,-3Q-3,-8-6,-8M0,-3Q3,-8 6,-8" stroke="${c.fill}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`
  };
  function addTerrain(r, g) {
    const t = r.geo.terrain || TERRAIN[r.id];
    if (!t || !GLYPHS[t.glyph]) return;
    let seed = r.id.split("").reduce((a, ch) => a * 31 + ch.charCodeAt(0), 7) >>> 0;
    const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
    const grp = svgEl("g", { class: "terrain", "pointer-events": "none", opacity: 0.55 }, g);
    const { x, y, w, h } = r.bbox;
    const target = Math.round((w * h) / 1500);
    let html = "", placed = [];
    for (let tries = 0; tries < target * 10 && placed.length < target; tries++) {
      const px = x + rand() * w, py = y + rand() * h;
      if (!insideRegion(r, px, py)) continue;
      if (Math.hypot(px - r.geo.label[0], (py - r.geo.label[1]) * 1.6) < 55) continue;
      if (placed.some(([qx, qy]) => Math.hypot(px - qx, py - qy) < 17)) continue;
      if (!(insideRegion(r, px + 8, py) && insideRegion(r, px - 8, py) && insideRegion(r, px, py + 6))) continue;
      placed.push([px, py]);
      const sc = (0.55 + rand() * 0.3).toFixed(2);
      html += `<g transform="translate(${px.toFixed(1)},${py.toFixed(1)}) scale(${sc})">${GLYPHS[t.glyph](t)}</g>`;
    }
    grp.innerHTML = html;
  }

  function markerShape(type, color, g) {
    const common = { class: "m-shape", fill: color };
    switch (type) {
      case "town": svgEl("circle", Object.assign({ r: 7 }, common), g); svgEl("circle", { r: 2.4, fill: "#5a3c0a", "pointer-events": "none" }, g); break;
      case "dungeon": svgEl("path", Object.assign({ d: "M0,-8.5L7.5,0L0,8.5L-7.5,0Z" }, common), g); break;
      case "shrine": svgEl("path", Object.assign({ d: starPath(9, 4) }, common), g); break;
      case "port": svgEl("rect", Object.assign({ x: -5.5, y: -5.5, width: 11, height: 11, rx: 2.5 }, common), g); break;
      case "secret": {
        svgEl("circle", Object.assign({ r: 7 }, common), g);
        const q = svgEl("text", { "text-anchor": "middle", y: 4, "font-size": 10, "font-weight": 700, fill: "#333", "pointer-events": "none" }, g);
        q.textContent = "?";
        break;
      }
      default: svgEl("circle", Object.assign({ r: 4.5 }, common), g);
    }
  }
  function starPath(ro, ri) {
    const p = [];
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? ri : ro;
      p.push([Math.cos(a) * rr, Math.sin(a) * rr].map((v) => v.toFixed(2)).join(","));
    }
    return "M" + p.join("L") + "Z";
  }
  function buildCompass() {
    const g = svgEl("g", { "pointer-events": "none", opacity: 0.8 }, layers.decor);
    svgEl("circle", { r: 26, fill: "rgba(10,25,45,.55)", stroke: "#c9a24a", "stroke-width": 1.2 }, g);
    svgEl("path", { d: "M0,-24L5,0L0,24L-5,0Z", fill: "#c9a24a" }, g);
    svgEl("path", { d: "M-24,0L0,4L24,0L0,-4Z", fill: "rgba(201,162,74,.55)" }, g);
    const n = svgEl("text", { y: -30, "text-anchor": "middle", "font-size": 12, fill: "#f3dc9a", "font-family": "serif" }, g);
    n.textContent = "N";
    scalables.push({ el: g, x: 1550, y: 930, k: 1 });
  }
  function buildLegend() {
    const lg = $("#legend");
    let html = '<div class="lg-title" data-legend-toggle="1">图例 · 点击切换显示 ▾</div>';
    TYPE_ORDER.forEach((t) => {
      const m = TYPE_META[t];
      html += `<label><input type="checkbox" data-type="${t}" ${state.hiddenTypes.has(t) ? "" : "checked"}>` +
        `<span class="type-dot" style="background:${m.color}"></span>${m.label}</label>`;
    });
    lg.innerHTML = html;
    if (window.innerWidth < 900) lg.classList.add("collapsed");
    lg.addEventListener("click", (e) => { if (e.target.dataset.legendToggle) lg.classList.toggle("collapsed"); });
    lg.addEventListener("mousedown", (e) => e.stopPropagation());
    lg.addEventListener("change", (e) => {
      const t = e.target.dataset.type;
      if (!t) return;
      if (e.target.checked) state.hiddenTypes.delete(t); else state.hiddenTypes.add(t);
      updateMarkerVisibility();
    });
  }

  // ---------------- 视图 / 缩放 ----------------
  function ppu(view = state.view) {
    const w = svg.clientWidth || 1, h = svg.clientHeight || 1;
    return Math.min(w / view[2], h / view[3]);
  }
  function applyView() {
    const v = state.view;
    svg.setAttribute("viewBox", v.map((n) => n.toFixed(2)).join(" "));
    const s = 1 / ppu();
    scalables.forEach((it) => it.el.setAttribute("transform", `translate(${it.x.toFixed(2)},${it.y.toFixed(2)}) scale(${(s * it.k).toFixed(4)})`));
    updateMarkerVisibility();
    if (window.OTDetail) window.OTDetail.onView();
  }
  function fitView(b, padRatio = 0.12) {
    const pad = Math.max(b.w, b.h) * padRatio;
    const w = b.w + pad * 2, h = b.h + pad * 2;
    const sw = svg.clientWidth || 1, sh = svg.clientHeight || 1;
    const aspect = sw / sh;
    let vw = w, vh = h;
    if (vw / vh < aspect) vw = vh * aspect; else vh = vw / aspect;
    return [b.x + b.w / 2 - vw / 2, b.y + b.h / 2 - vh / 2, vw, vh];
  }
  function worldView() { return fitView(GEO.worldFit, 0.01); }
  function animateView(target, dur = 650) {
    if (state.anim) cancelAnimationFrame(state.anim);
    const from = state.view.slice();
    const t0 = performance.now();
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const step = (now) => {
      const t = Math.min(1, (now - t0) / dur), e = ease(t);
      state.view = from.map((f, i) => f + (target[i] - f) * e);
      applyView();
      if (t < 1) state.anim = requestAnimationFrame(step); else state.anim = null;
    };
    state.anim = requestAnimationFrame(step);
  }
  function zoomBy(factor, cx, cy) {
    const v = state.view;
    const nw = Math.max(90, Math.min(2600, v[2] * factor));
    const k = nw / v[2];
    const nh = v[3] * k;
    if (cx == null) { cx = v[0] + v[2] / 2; cy = v[1] + v[3] / 2; }
    state.view = [cx - (cx - v[0]) * k, cy - (cy - v[1]) * k, nw, nh];
    applyView();
  }
  function clientToMap(clientX, clientY) {
    const pt = svg.createSVGPoint();
    pt.x = clientX; pt.y = clientY;
    const m = svg.getScreenCTM();
    if (!m) return [0, 0];
    const p = pt.matrixTransform(m.inverse());
    return [p.x, p.y];
  }

  function updateMarkerVisibility() {
    const zoomedIn = state.view[2] < 760;
    Object.entries(markerEls).forEach(([key, g]) => {
      const [rid] = key.split("/");
      const type = g.classList[1].replace("type-", "");
      let show;
      if (state.region) show = rid === state.region || zoomedIn;
      else show = zoomedIn || type === "town" || type === "port";
      if (state.hiddenTypes.has(type) && !(state.location && key === state.region + "/" + state.location)) show = false;
      g.style.display = show ? "" : "none";
      const label = g.querySelector(".m-label");
      label.style.display = (state.region || zoomedIn) ? "" : "none";
    });
    REGION_ORDER.forEach((id) => {
      labelEls[id].style.opacity = state.region === id ? 0.12 : state.region ? 0.5 : 1;
    });
  }

  // 拖拽平移
  let dragging = false, dragMoved = false, dragStart = null;
  stage.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    dragging = true; dragMoved = false;
    dragStart = { x: e.clientX, y: e.clientY, view: state.view.slice() };
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.x, dy = e.clientY - dragStart.y;
    if (!dragMoved && Math.hypot(dx, dy) > 4) { dragMoved = true; stage.classList.add("dragging"); hideTip(); }
    if (dragMoved) {
      const s = 1 / ppu(dragStart.view);
      state.view = [dragStart.view[0] - dx * s, dragStart.view[1] - dy * s, dragStart.view[2], dragStart.view[3]];
      applyView();
    }
  });
  window.addEventListener("mouseup", () => {
    if (!dragging) return;
    dragging = false; stage.classList.remove("dragging");
    setTimeout(() => (dragMoved = false), 0);
  });
  stage.addEventListener("wheel", (e) => {
    e.preventDefault();
    const [mx, my] = clientToMap(e.clientX, e.clientY);
    zoomBy(e.deltaY > 0 ? 1.15 : 1 / 1.15, mx, my);
  }, { passive: false });
  // 触屏：单指拖动、双指缩放
  let touch = null;
  stage.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) touch = { mode: "pan", x: e.touches[0].clientX, y: e.touches[0].clientY, view: state.view.slice(), moved: false };
    else if (e.touches.length === 2) {
      const [a, b] = e.touches;
      touch = { mode: "pinch", d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), view: state.view.slice(), c: clientToMap((a.clientX + b.clientX) / 2, (a.clientY + b.clientY) / 2) };
    }
  }, { passive: true });
  stage.addEventListener("touchmove", (e) => {
    if (!touch) return;
    e.preventDefault();
    if (touch.mode === "pan" && e.touches.length === 1) {
      const dx = e.touches[0].clientX - touch.x, dy = e.touches[0].clientY - touch.y;
      if (Math.hypot(dx, dy) > 6) { touch.moved = true; dragMoved = true; }
      const s = 1 / ppu(touch.view);
      state.view = [touch.view[0] - dx * s, touch.view[1] - dy * s, touch.view[2], touch.view[3]];
      applyView();
    } else if (touch.mode === "pinch" && e.touches.length === 2) {
      const [a, b] = e.touches;
      const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      state.view = touch.view.slice();
      zoomBy(touch.d / d, touch.c[0], touch.c[1]);
      dragMoved = true;
    }
  }, { passive: false });
  stage.addEventListener("touchend", () => { touch = null; setTimeout(() => (dragMoved = false), 50); });

  $("#zoomIn").addEventListener("click", () => zoomBy(1 / 1.35));
  $("#zoomOut").addEventListener("click", () => zoomBy(1.35));
  $("#btnWorld").addEventListener("click", goWorld);
  let lastSize = "";
  const refit = () => {
    const size = svg.clientWidth + "x" + svg.clientHeight;
    if (size === lastSize || !svg.clientWidth) return;
    lastSize = size;
    if (state.region) animateView(state.location ? locationView(state.region, state.location) : fitView(regions[state.region].bbox), 1);
    else animateView(worldView(), 1);
  };
  if (window.ResizeObserver) new ResizeObserver(refit).observe(stage);
  else window.addEventListener("resize", refit);

  // ---------------- Tooltip ----------------
  function placeTip(e) {
    const rect = stage.getBoundingClientRect();
    let x = e.clientX - rect.left + 14, y = e.clientY - rect.top + 14;
    tooltip.hidden = false;
    const tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
    if (x + tw > rect.width - 8) x = e.clientX - rect.left - tw - 14;
    if (y + th > rect.height - 8) y = e.clientY - rect.top - th - 14;
    tooltip.style.left = x + "px"; tooltip.style.top = y + "px";
  }
  function showRegionTip(e, r) {
    if (dragging && dragMoved) return;
    if (state.region === r.id) { hideTip(); return; }
    tooltip.innerHTML = `<b>${esc(r.name)}</b> <span style="opacity:.7">${esc(r.en)}</span><br>` +
      (r.levelRange ? `敌人等级 Lv ${esc(r.levelRange)}<br>` : "") +
      (r.starter ? `出身主角：${esc(r.starter)}<br>` : "") +
      `地点 ${r.locations.length} · 支线 ${r.sidequests.length} · 道具 ${r.items.length}<br><span style="opacity:.7">点击放大查看</span>`;
    placeTip(e);
  }
  function showLocTip(e, r, loc) {
    if (dragging && dragMoved) return;
    tooltip.innerHTML = `<b>${esc(loc.name)}</b> <span style="opacity:.7">${esc(loc.en || "")}</span><br>` +
      `${TYPE_META[loc.type].label}${loc.level ? " · 推荐 Lv " + esc(loc.level) : ""}<br>` +
      (loc.desc ? `<span style="opacity:.85">${esc(loc.desc)}</span>` : "") +
      (window.OTDetail ? window.OTDetail.tipHtml(r, loc) : "");
    placeTip(e);
  }
  function hideTip() { tooltip.hidden = true; }

  // ---------------- 导航 ----------------
  function setHash() {
    const h = state.globalTab ? "#g/" + state.globalTab : state.region ? "#" + state.region + (state.location ? "/" + state.location : "") + (!state.location && state.tab !== "overview" ? "?" + state.tab : "") : "";
    if (location.hash !== h) history.replaceState(null, "", h || location.pathname + location.search);
  }
  function highlightRegions() {
    REGION_ORDER.forEach((id) => {
      regionEls[id].forEach((g) => {
        g.classList.toggle("focus", state.region === id);
        g.classList.toggle("dim", !!state.region && state.region !== id);
      });
    });
    roadEls.forEach((rd) => {
      const dim = !!state.region && !rd.regions.includes(state.region);
      rd.els.forEach((el) => el.classList.toggle("dim", dim));
    });
    $$(".marker.active").forEach((m) => m.classList.remove("active"));
    if (state.region && state.location) {
      const m = markerEls[state.region + "/" + state.location];
      if (m) { m.classList.add("active"); m.parentNode.appendChild(m); }
    }
  }
  function updateBreadcrumb() {
    const bc = $("#breadcrumb");
    let html = `<a data-nav="world">${esc(WORLD.name)}</a>`;
    if (state.region) {
      const r = regions[state.region];
      html += ` › <span style="opacity:.75">${CONTINENT_NAME[r.continent] || ""}</span> › <a data-nav="region">${esc(r.name)}</a>`;
      if (state.location && r.locById[state.location]) html += " › " + esc(r.locById[state.location].name);
    }
    bc.innerHTML = html;
    $("#mapHint").style.display = state.region ? "none" : "";
  }
  $("#breadcrumb").addEventListener("click", (e) => {
    const nav = e.target.dataset.nav;
    if (nav === "world") goWorld();
    if (nav === "region" && state.region) focusRegion(state.region);
  });

  function goWorld() {
    state.region = null; state.location = null; state.globalTab = null;
    animateView(worldView());
    refresh();
  }
  function focusRegion(id, tab) {
    state.globalTab = null;
    const changed = state.region !== id;
    state.region = id; state.location = null;
    if (tab) state.tab = tab; else if (changed) state.tab = "overview";
    animateView(fitView(regions[id].bbox));
    refresh();
    $("#sidePane").scrollTop = 0;
  }
  function locationView(rid, lid) {
    const r = regions[rid], loc = r.locById[lid];
    const base = fitView(r.bbox);
    const w = Math.min(base[2], Math.max(260, base[2] * 0.75)), h = w * (base[3] / base[2]);
    return [loc._x - w / 2, loc._y - h / 2, w, h];
  }
  function openLocation(rid, lid) {
    const r = regions[rid];
    if (!r || !r.locById[lid]) return;
    state.globalTab = null; state.region = rid; state.location = lid;
    animateView(locationView(rid, lid));
    refresh();
    $("#sidePane").scrollTop = 0;
  }
  function openGlobal(tab) {
    state.globalTab = tab;
    refresh();
    $("#sidePane").scrollTop = 0;
  }
  $$("[data-global-tab]").forEach((b) => b.addEventListener("click", () => openGlobal(b.dataset.globalTab)));

  function refresh() {
    highlightRegions();
    updateBreadcrumb();
    updateMarkerVisibility();
    renderPanel();
    $$("[data-global-tab]").forEach((b) => b.classList.toggle("active", b.dataset.globalTab === state.globalTab));
    setHash();
    if (window.OTDetail) window.OTDetail.onRefresh();
  }

  // ---------------- 面板渲染 ----------------
  const panel = $("#panel");

  function renderPanel() {
    if (state.globalTab) return renderGlobal();
    if (!state.region) return renderHome();
    if (state.location) return renderLocation();
    return renderRegion();
  }

  function locLink(r, lid) {
    const loc = r.locById[lid];
    if (!loc) return lid ? esc(lid) : "";
    return `<a class="loc-link" href="javascript:void 0" data-open-loc="${esc(r.id)}/${esc(lid)}">📍${esc(loc.name)}</a>`;
  }
  function regionLink(rid, text) {
    if (!regions[rid]) return esc(text || rid || "");
    return `<a href="javascript:void 0" data-open-region="${esc(rid)}">${esc(text || regions[rid].name)}</a>`;
  }
  function chips(list) { return list.filter(Boolean).map(([t, cls]) => `<span class="chip ${cls || ""}">${t}</span>`).join(""); }
  function checkbox(key) { return `<input type="checkbox" class="check" data-pkey="${esc(key)}" ${progress[key] ? "checked" : ""} title="标记为已完成">`; }
  function list(items) { const a = arr(items).filter(Boolean); return a.length ? "<ul>" + a.map((x) => `<li>${esc(x)}</li>`).join("") + "</ul>" : ""; }
  function olist(items) { const a = arr(items).filter(Boolean); return a.length ? "<ol>" + a.map((x) => `<li>${esc(x)}</li>`).join("") + "</ol>" : ""; }
  function row(label, val, raw) { if (!val || (Array.isArray(val) && !val.length)) return ""; return `<div class="row"><b>${label}</b>${raw ? val : esc(val)}</div>`; }
  function bossBox(b) {
    if (!b) return "";
    if (typeof b === "string") return `<div class="boss-box"><span class="bn">⚔ ${esc(b)}</span></div>`;
    return `<div class="boss-box"><span class="bn">⚔ ${esc(b.name)}</span>${b.en ? ` <span class="muted">${esc(b.en)}</span>` : ""}` +
      (b.level ? ` <span class="chip">推荐 Lv ${esc(b.level)}</span>` : "") +
      (arr(b.weakness).length ? `<div><b>弱点：</b>${arr(b.weakness).map(esc).join("、")}</div>` : "") +
      (b.tips ? `<div><b>打法：</b>${esc(b.tips)}</div>` : "") + "</div>";
  }
  function progressBar(p) {
    const pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
    return `<div class="progress" title="已完成 ${p.done}/${p.total}"><i style="width:${pct}%"></i></div><div class="muted" style="margin-top:3px">完成进度 ${p.done}/${p.total}（${pct}%）· 勾选记录保存在本机浏览器</div>`;
  }
  function filterBox(key, ph) {
    return `<input class="filter-input" data-filter="${key}" placeholder="${ph}" value="${esc(state.filters[key] || "")}">`;
  }
  function matchFilter(key, obj) {
    const f = (state.filters[key] || "").trim().toLowerCase();
    if (!f) return true;
    return JSON.stringify(obj).toLowerCase().includes(f);
  }

  function renderHome() {
    const totals = REGION_ORDER.reduce((a, id) => {
      const r = regions[id];
      a.loc += r.locations.length; a.sq += r.sidequests.length; a.item += r.items.length; a.story += r.story.length;
      return a;
    }, { loc: 0, sq: 0, item: 0, story: 0 });
    let html = `<div class="p-head"><h2>${esc(WORLD.name)}<small>${esc(WORLD.en)}</small></h2><div class="p-meta">` +
      chips([[REGION_ORDER.length + " 个区域", ""], [totals.loc + " 个地点", "blue"], [totals.story + " 段主线", "red"], [totals.sq + " 个支线", "green"], [totals.item + " 件道具", "purple"]]) +
      `</div></div><div class="p-body">`;
    html += `<p>${esc(G && G.intro ? G.intro : WORLD.intro)}</p>`;
    html += `<h3>选择地区</h3><div class="region-grid">`;
    REGION_ORDER.forEach((id) => {
      const r = regions[id];
      const p = regionProgress(r);
      html += `<div class="region-tile" data-open-region="${id}" style="background:${r.geo.color}${r.geo.isSea ? ";color:#eaf6ff" : ""}">` +
        `<b>${esc(r.name)}</b><span>${esc(r.en)}${r.levelRange ? " · Lv " + esc(r.levelRange) : ""}</span><br>` +
        `<span>${r.starter ? "★ " + esc(r.starter) : CONTINENT_NAME[r.continent]}</span>` +
        `<span style="float:right">${p.total ? Math.round((p.done / p.total) * 100) + "%" : r.missing ? "整理中" : ""}</span></div>`;
    });
    html += `</div>`;
    if (G && arr(G.characters).length) {
      html += `<h3>八位旅人</h3><table class="kv"><tr><th>主角</th><th>职业</th><th>出身地</th></tr>` +
        G.characters.map((c) => `<tr><td>${esc(c.name)} <span class="muted">${esc(c.en)}</span></td><td>${esc(c.job)}</td><td>${regionLink(c.region, c.start || (regions[c.region] && regions[c.region].name))}</td></tr>`).join("") +
        `</table>`;
    }
    html += `<h3>使用说明</h3><ul>
      <li>点击地图上的地区：地图放大到该地区，右侧显示攻略、主线、支线、道具与地点。</li>
      <li>放大后点击地点图标（城镇 / 迷宫 / 祭坛…）查看宝箱、可偷窃 / 购买的 NPC 道具、Boss 打法。</li>
      <li>米色线条为陆路、蓝色虚线为航线；左下角图例可切换各类地点的显示。</li>
      <li>打开地点后会弹出「细节示意图」：城镇街道、迷宫岔路、野外小路、宝箱 / 商店 / 出口位置一目了然，点击出口可直接前往相邻地点；工具栏「🗺 细节图」可随时收起或展开。</li>
      <li>在大地图上放大到很近时，各地点周围会浮现缩略路网，方便看清小路与分支走向。</li>
      <li>隐藏 / 特殊地点带有彩色角标（隐 / 舟 / 船 / 传 / 剧 …），大地图上用彩色虚线标出隐蔽入口、水路、航线或快速旅行路线；打开地点可在顶部「如何前往」看到解锁条件与具体走法。</li>
      <li>顶部搜索框可跨地区搜索地点、支线、道具、Boss、职业。</li>
      <li>勾选框记录完成情况（保存在本机浏览器），地区卡片显示完成百分比。</li></ul>`;
    html += `</div>`;
    panel.innerHTML = html;
  }

  function renderRegion() {
    const r = regions[state.region];
    const p = regionProgress(r);
    const tabs = [
      ["overview", "概览", ""],
      ["locations", "地点", r.locations.length],
      ["story", "主线", r.story.length],
      ["sidequests", "支线", r.sidequests.length],
      ["items", "道具", r.items.length]
    ];
    let html = `<div class="p-head"><h2>${esc(r.name)}<small>${esc(r.en)}</small></h2><div class="p-meta">` +
      chips([[CONTINENT_NAME[r.continent] || "", ""], r.official && ["官方名：" + esc(r.official), ""], r.levelRange && ["敌人 Lv " + esc(r.levelRange), "red"], r.starter && ["★ " + esc(r.starter), "blue"]]) +
      `</div>${progressBar(p)}<div class="tabs">` +
      tabs.map(([k, t, n]) => `<button class="tab ${state.tab === k ? "active" : ""}" data-tab="${k}">${t}${n !== "" ? `<span class="count">${n}</span>` : ""}</button>`).join("") +
      `</div></div><div class="p-body">`;
    if (r.missing) html += `<p class="empty">该地区的数据仍在整理中。</p>`;
    html += ({ overview: regionOverview, locations: regionLocations, story: regionStory, sidequests: regionSidequests, items: regionItems }[state.tab] || regionOverview)(r);
    html += `</div>`;
    panel.innerHTML = html;
  }

  function regionOverview(r) {
    let h = "";
    if (r.intro) h += `<h3>地区概述</h3><p>${esc(r.intro)}</p>`;
    if (r.highlights.length) h += `<h3>必做要点</h3>${list(r.highlights)}`;
    const counts = TYPE_ORDER.map((t) => [t, r.locations.filter((l) => l.type === t).length]).filter(([, n]) => n);
    if (counts.length) h += `<h3>地点构成</h3><div class="p-meta" style="display:flex;flex-wrap:wrap;gap:6px">` +
      counts.map(([t, n]) => `<span class="chip"><span class="type-dot" style="background:${TYPE_META[t].color}"></span>${TYPE_META[t].label} ${n}</span>`).join("") + `</div>`;
    const towns = r.locations.filter((l) => l.type === "town");
    if (towns.length) h += `<h3>城镇</h3>` + towns.map((l) => locationCardMini(r, l)).join("");
    const bosses = r.locations.flatMap((l) => l.boss.map((b) => ({ b, l })));
    if (bosses.length) h += `<h3>本区 Boss 一览</h3>` + bosses.map(({ b, l }) => bossBox(b).replace("</div>", ` <span class="muted">— ${locLink(r, l.id)}</span></div>`)).join("");
    if (r.jobs.length) h += `<h3>职业证</h3><table class="kv"><tr><th>职业</th><th>地点</th><th>获得方式</th></tr>` +
      r.jobs.map((j) => `<tr><td><b>${esc(j.name)}</b><br><span class="muted">${esc(j.en || "")}</span></td><td>${locLink(r, j.location)}</td><td>${esc(j.how)}</td></tr>`).join("") + `</table>`;
    if (r.tips.length) h += `<h3>探索提示</h3>${list(r.tips)}`;
    if (G) {
      const chars = arr(G.characters).filter((c) => arr(c.chapters).some((ch) => ch.region === r.id));
      if (chars.length) {
        h += `<h3>在本区发生的角色章节</h3><table class="kv"><tr><th>角色</th><th>章节</th><th>地点</th><th>Lv</th></tr>`;
        chars.forEach((c) => arr(c.chapters).filter((ch) => ch.region === r.id).forEach((ch) => {
          h += `<tr><td>${esc(c.name)}</td><td>第${esc(ch.no)}章 ${esc(ch.title || "")}</td><td>${esc(ch.location || "")}</td><td>${esc(ch.level || "")}</td></tr>`;
        }));
        h += `</table>`;
      }
    }
    return h || `<p class="empty">暂无概览数据</p>`;
  }

  function locationCardMini(r, l) {
    const extra = [];
    if (l.boss.length) extra.push("Boss " + l.boss.length);
    if (l.treasures.length) extra.push("宝箱 " + l.treasures.length);
    if (l.npcs.length) extra.push("NPC " + l.npcs.length);
    return `<div class="card clickable" data-open-loc="${r.id}/${esc(l.id)}"><div class="card-title">` +
      `<span class="type-dot" style="background:${TYPE_META[l.type].color}"></span><span class="ttl">${esc(l.name)}</span><span class="en">${esc(l.en || "")}</span><span class="spacer"></span>` +
      (l.level ? `<span class="chip">Lv ${esc(l.level)}</span>` : "") + `</div>` +
      (l.desc ? `<div class="row">${esc(l.desc)}</div>` : "") +
      (extra.length ? `<div class="row muted">${extra.join(" · ")}</div>` : "") + `</div>`;
  }

  function regionLocations(r) {
    let h = filterBox("loc-" + r.id, "筛选地点（名称、Boss、宝箱内容…）");
    let any = false;
    TYPE_ORDER.forEach((t) => {
      const ls = r.locations.filter((l) => l.type === t && matchFilter("loc-" + r.id, l));
      if (!ls.length) return;
      any = true;
      h += `<h3>${TYPE_META[t].label}（${ls.length}）</h3>` + ls.map((l) => locationCardMini(r, l)).join("");
    });
    return any ? h : h + `<p class="empty">没有匹配的地点</p>`;
  }

  function storyCard(r, s) {
    const key = pkey(r.id, "story", s.title);
    return `<div class="card ${progress[key] ? "done" : ""}"><div class="card-title">${checkbox(key)}<span class="ttl">${esc(s.title)}</span></div>` +
      `<div class="row">${chips([s.character && ["👤 " + esc(s.character), "blue"], s.level && ["推荐 Lv " + esc(s.level), "red"]])} ${locLink(r, s.location)}</div>` +
      row("概要：", s.summary) + (arr(s.steps).length ? `<div class="row"><b>流程：</b></div>${olist(s.steps)}` : "") +
      (s.boss ? bossBox(s.boss) : "") + row("要点：", s.tips) + `</div>`;
  }
  function regionStory(r) {
    const ls = r.story.filter((s) => matchFilter("story-" + r.id, s));
    return filterBox("story-" + r.id, "筛选主线（角色名、章节、Boss…）") + (ls.length ? ls.map((s) => storyCard(r, s)).join("") : `<p class="empty">暂无主线数据</p>`);
  }

  function sqCard(r, q) {
    const key = pkey(r.id, "sq", q.name);
    const diffCls = { 易: "green", 中: "blue", 难: "red" }[q.difficulty] || "";
    return `<div class="card ${progress[key] ? "done" : ""}" data-anchor="sq-${esc(q.name)}"><div class="card-title">${checkbox(key)}<span class="ttl">${esc(q.name)}</span><span class="en">${esc(q.en || "")}</span><span class="spacer"></span>` +
      (q.difficulty ? `<span class="chip ${diffCls}">${esc(q.difficulty)}</span>` : "") + `</div>` +
      `<div class="row">${locLink(r, q.location)}</div>` +
      row("触发：", q.trigger) + (arr(q.steps).length ? `<div class="row"><b>完成方式：</b></div>${olist(q.steps)}` : "") +
      row("奖励：", q.reward) + `</div>`;
  }
  function regionSidequests(r) {
    const ls = r.sidequests.filter((q) => matchFilter("sq-" + r.id, q));
    return filterBox("sq-" + r.id, "筛选支线（名称、NPC、奖励…）") + (ls.length ? ls.map((q) => sqCard(r, q)).join("") : `<p class="empty">暂无支线数据</p>`);
  }

  function itemCard(r, it) {
    const key = pkey(r.id, "item", it.name + "@" + (it.location || ""));
    return `<div class="card ${progress[key] ? "done" : ""}" data-anchor="item-${esc(it.name)}"><div class="card-title">${checkbox(key)}<span class="ttl">${esc(it.name)}</span><span class="en">${esc(it.en || "")}</span><span class="spacer"></span>` +
      (it.type ? `<span class="chip purple">${esc(it.type)}</span>` : "") + `</div>` +
      `<div class="row">${locLink(r, it.location)}</div>` + row("获取：", it.how) + row("效果：", it.effect) + `</div>`;
  }
  function regionItems(r) {
    const ls = r.items.filter((it) => matchFilter("item-" + r.id, it));
    const types = [...new Set(ls.map((i) => i.type || "其他"))];
    let h = filterBox("item-" + r.id, "筛选道具（名称、类型、获取方式…）");
    if (!ls.length) return h + `<p class="empty">暂无道具数据</p>`;
    types.forEach((t) => { h += `<h3>${esc(t)}</h3>` + ls.filter((i) => (i.type || "其他") === t).map((it) => itemCard(r, it)).join(""); });
    return h;
  }

  function renderLocation() {
    const r = regions[state.region];
    const l = r.locById[state.location];
    if (!l) { state.location = null; return renderRegion(); }
    const relStory = r.story.filter((s) => s.location === l.id);
    const relSq = r.sidequests.filter((q) => q.location === l.id);
    const relItems = r.items.filter((it) => it.location === l.id);
    const relJobs = r.jobs.filter((j) => j.location === l.id);
    let html = `<div class="p-head"><span class="back-link" data-open-region="${r.id}">← 返回 ${esc(r.name)}</span>` +
      `<h2>${esc(l.name)}<small>${esc(l.en || "")}</small></h2><div class="p-meta">` +
      chips([[`<span class="type-dot" style="background:${TYPE_META[l.type].color}"></span>${TYPE_META[l.type].label}`, ""], l.level && ["推荐 Lv " + esc(l.level), "red"], [esc(r.name), "blue"]]) +
      `</div></div><div class="p-body">`;
    if (l.desc) html += `<p>${esc(l.desc)}</p>`;
    if (window.OTDetail) html += window.OTDetail.panelHtml(r, l);
    if (l.story.length) html += `<h3>主线章节</h3>${list(l.story)}`;
    if (l.boss.length) html += `<h3>Boss</h3>` + l.boss.map(bossBox).join("");
    if (l.treasures.length) {
      html += `<h3>宝箱 / 拾取（${l.treasures.length}）</h3><table class="kv"><tr><th style="width:24px"></th><th>道具</th><th>位置 / 开启方式</th></tr>` +
        l.treasures.map((t, i) => { const k = pkey(r.id, "tr", l.id + "#" + i + ":" + t.item); return `<tr><td>${checkbox(k)}</td><td><b>${esc(t.item)}</b></td><td>${esc(t.how || "")}</td></tr>`; }).join("") + `</table>`;
    }
    if (l.npcs.length) {
      html += `<h3>NPC 道具 / 地图指令</h3><table class="kv"><tr><th>NPC</th><th>物品 / 效果</th><th>方式</th></tr>` +
        l.npcs.map((n) => `<tr><td>${esc(n.name)}</td><td><b>${esc(n.item || "")}</b>${n.note ? `<div class="muted">${esc(n.note)}</div>` : ""}</td><td>${esc(n.method || "")}</td></tr>`).join("") + `</table>`;
    }
    if (l.shops.length) html += `<h3>商店推荐</h3>${list(l.shops)}`;
    if (l.tips) html += `<h3>探索提示</h3><p>${esc(l.tips)}</p>`;
    if (relJobs.length) html += `<h3>职业证</h3>` + relJobs.map((j) => `<div class="card"><div class="card-title">🎓 ${esc(j.name)} <span class="en">${esc(j.en || "")}</span></div>${row("获得方式：", j.how)}</div>`).join("");
    if (relStory.length) html += `<h3>相关主线攻略</h3>` + relStory.map((s) => storyCard(r, s)).join("");
    if (relSq.length) html += `<h3>在此触发的支线</h3>` + relSq.map((q) => sqCard(r, q)).join("");
    if (relItems.length) html += `<h3>在此获得的重点道具</h3>` + relItems.map((it) => itemCard(r, it)).join("");
    if (!l.desc && !l.boss.length && !l.treasures.length && !l.npcs.length && !relStory.length && !relSq.length) html += `<p class="empty">暂无该地点的详细数据</p>`;
    html += `</div>`;
    panel.innerHTML = html;
  }

  // ---------------- 全局面板 ----------------
  const GLOBAL_TABS = [["characters", "角色"], ["jobs", "职业"], ["finale", "终章 / EX"], ["routes", "路线 / 技巧"]]
    .concat(G && arr(G.crossedPaths).length ? [["crossed", "交汇篇"]] : []);
  function renderGlobal() {
    const tab = state.globalTab;
    let html = `<div class="p-head"><span class="back-link" data-nav-back="1">← 返回${state.region ? " " + esc(regions[state.region].name) : "世界地图"}</span>` +
      `<h2>${esc((GLOBAL_TABS.find((t) => t[0] === tab) || [, ""])[1])}<small>全局攻略</small></h2><div class="tabs">` +
      GLOBAL_TABS.map(([k, t]) => `<button class="tab ${tab === k ? "active" : ""}" data-gtab="${k}">${t}</button>`).join("") +
      `</div></div><div class="p-body">`;
    if (!G) html += `<p class="empty">全局数据仍在整理中。</p>`;
    else html += ({ characters: gCharacters, jobs: gJobs, crossed: gCrossed, finale: gFinale, routes: gRoutes }[tab] || gCharacters)();
    html += `</div>`;
    panel.innerHTML = html;
  }
  function gCharacters() {
    return arr(G.characters).map((c) => `<div class="card"><div class="card-title"><span class="ttl">${esc(c.name)}</span><span class="en">${esc(c.en || "")}</span><span class="spacer"></span><span class="chip blue">${esc(c.job || "")}</span></div>` +
      `<div class="row"><b>出身：</b>${regionLink(c.region, c.start)}</div>` +
      row("固有能力：", c.talent) +
      (c.pathDay ? row("昼·地图指令：", `<b style="color:#8a6a24">${esc(c.pathDay.name)}</b> ${esc(c.pathDay.desc)}`, true) : "") +
      (c.pathNight ? row("夜·地图指令：", `<b style="color:#3b4a7a">${esc(c.pathNight.name)}</b> ${esc(c.pathNight.desc)}`, true) : "") +
      row("潜力能力：", c.latent) +
      (arr(c.exSkills).length ? `<div class="row"><b>EX 技能：</b></div>${list(c.exSkills)}` : "") +
      (arr(c.chapters).length ? `<table class="kv"><tr><th>章</th><th>标题</th><th>地点</th><th>Lv</th></tr>` +
        c.chapters.map((ch) => `<tr><td>${esc(ch.no)}</td><td>${esc(ch.title || "")}</td><td>${regionLink(ch.region, ch.location)}</td><td>${esc(ch.level || "")}</td></tr>`).join("") + `</table>` : "") +
      row("建议：", c.tips) + `</div>`).join("") || `<p class="empty">暂无</p>`;
  }
  function gJobs() {
    const kinds = [...new Set(arr(G.jobs).map((j) => j.kind || "其他"))];
    return kinds.map((k) => `<h3>${esc(k)}职业</h3>` + arr(G.jobs).filter((j) => (j.kind || "其他") === k).map((j) =>
      `<div class="card"><div class="card-title"><span class="ttl">${esc(j.name)}</span><span class="en">${esc(j.en || "")}</span><span class="spacer"></span>${j.region ? regionLink(j.region) : ""}</div>` +
      row("公会 / 地点：", j.where) + row("获得方式：", j.how) + row("武器：", j.weapons) + row("特色：", j.features) + `</div>`).join("")).join("") || `<p class="empty">暂无</p>`;
  }
  function gCrossed() {
    return arr(G.crossedPaths).map((c) => `<div class="card"><div class="card-title"><span class="ttl">${esc(c.name)}</span><span class="spacer"></span><span class="chip blue">${esc(c.characters || "")}</span></div>` +
      (arr(c.parts).length ? `<table class="kv"><tr><th>部</th><th>地点</th><th>Lv</th></tr>` + c.parts.map((p) => `<tr><td>${esc(p.part)}</td><td>${regionLink(p.region, p.location)}</td><td>${esc(p.level || "")}</td></tr>`).join("") + `</table>` : "") +
      row("奖励：", c.reward) + `</div>`).join("") || `<p class="empty">暂无</p>`;
  }
  function gFinale() {
    let h = "";
    const f = G.finale;
    if (f) {
      h += `<h3>${esc(f.title || "最终章")}</h3>` + row("解锁条件：", f.unlock) + (arr(f.steps).length ? `<div class="row"><b>流程：</b></div>${olist(f.steps)}` : "") +
        arr(f.bosses).map(bossBox).join("") + row("奖励：", f.rewards);
    }
    if (arr(G.exBosses).length) h += `<h3>EX / 隐藏 Boss</h3>` + G.exBosses.map((b) => `<div class="card"><div class="card-title"><span class="ttl">⚔ ${esc(b.name)}</span><span class="spacer"></span>${b.level ? `<span class="chip red">Lv ${esc(b.level)}</span>` : ""}</div>` +
      `<div class="row"><b>地点：</b>${regionLink(b.region, b.location || "")}</div>` + row("触发：", b.how) + row("打法：", b.tips) + `</div>`).join("");
    return h || `<p class="empty">暂无</p>`;
  }
  function gRoutes() {
    let h = "";
    if (arr(G.routes).length) h += `<h3>推荐攻略路线</h3>` + G.routes.map((r) => `<div class="card"><div class="card-title">🧭 ${esc(r.stage)}</div><div class="row">${esc(r.plan)}</div></div>`).join("");
    if (arr(G.systems).length) h += `<h3>系统说明</h3>${list(G.systems)}`;
    if (arr(G.tips).length) h += `<h3>实用技巧</h3>${list(G.tips)}`;
    return h || `<p class="empty">暂无</p>`;
  }

  // ---------------- 面板事件 ----------------
  panel.addEventListener("click", (e) => {
    if (e.target.closest("[data-detail-open]")) { if (window.OTDetail) window.OTDetail.openCurrent(); return; }
    const t = e.target.closest("[data-tab],[data-gtab],[data-open-loc],[data-open-region],[data-nav-back]");
    if (!t || e.target.classList.contains("check")) return;
    if (t.dataset.tab) { state.tab = t.dataset.tab; renderPanel(); setHash(); return; }
    if (t.dataset.gtab) { openGlobal(t.dataset.gtab); return; }
    if (t.dataset.openLoc) { const [rid, lid] = t.dataset.openLoc.split("/"); openLocation(rid, lid); return; }
    if (t.dataset.openRegion) { focusRegion(t.dataset.openRegion); return; }
    if (t.dataset.navBack) { state.globalTab = null; refresh(); }
  });
  panel.addEventListener("change", (e) => {
    const k = e.target.dataset.pkey;
    if (!k) return;
    if (e.target.checked) progress[k] = 1; else delete progress[k];
    saveProgress();
    if (window.OTDetail) window.OTDetail.onProgress();
    const card = e.target.closest(".card");
    if (card) card.classList.toggle("done", e.target.checked);
    const head = $(".p-head .progress", panel);
    if (head && state.region) {
      const p = regionProgress(regions[state.region]);
      const pct = p.total ? Math.round((p.done / p.total) * 100) : 0;
      head.firstElementChild.style.width = pct + "%";
      head.nextElementSibling.textContent = `完成进度 ${p.done}/${p.total}（${pct}%）· 勾选记录保存在本机浏览器`;
    }
  });
  panel.addEventListener("input", (e) => {
    const k = e.target.dataset.filter;
    if (!k) return;
    state.filters[k] = e.target.value;
    const pos = e.target.selectionStart;
    renderPanel();
    const inp = $(`[data-filter="${k}"]`, panel);
    if (inp) { inp.focus(); inp.setSelectionRange(pos, pos); }
  });

  // ---------------- 全局搜索 ----------------
  const searchIndex = [];
  function addIdx(title, meta, text, action) { searchIndex.push({ title, meta, text: (title + " " + text).toLowerCase(), t: title.toLowerCase(), action }); }
  REGION_ORDER.forEach((id) => {
    const r = regions[id];
    addIdx(r.name, "地区 · " + r.en, [r.en, r.intro, r.starter].join(" "), { region: id });
    r.locations.forEach((l) => {
      addIdx(l.name, `${TYPE_META[l.type].label} · ${r.name}`, [l.en, l.desc].join(" "), { region: id, loc: l.id });
      l.boss.forEach((b) => addIdx(typeof b === "string" ? b : b.name, `Boss · ${l.name}（${r.name}）`, typeof b === "string" ? "" : [b.en, b.tips].join(" "), { region: id, loc: l.id }));
      l.treasures.forEach((t) => addIdx(t.item, `宝箱 · ${l.name}（${r.name}）`, t.how || "", { region: id, loc: l.id }));
      l.npcs.forEach((n) => addIdx(n.name, `NPC · ${l.name}（${r.name}）`, [n.item, n.method, n.note].join(" "), { region: id, loc: l.id }));
      l.npcs.forEach((n) => n.item && addIdx(n.item, `NPC ${n.name}（${n.method || ""}）· ${l.name}`, [n.name, n.note].join(" "), { region: id, loc: l.id }));
      if (window.OTAtlas) (window.OTAtlas.area(id, l.id)?.enemies || []).forEach((e) => addIdx(e.name, `区域怪物 · ${l.name}`, [e.weakness.join(" "), e.condition].join(" "), { region: id, loc: l.id }));
    });
    r.story.forEach((s) => addIdx(s.title, `主线 · ${r.name}`, [s.character, s.summary, typeof s.boss === "string" ? s.boss : ""].join(" "), { region: id, tab: "story" }));
    r.sidequests.forEach((q) => addIdx(q.name, `支线 · ${r.name}`, [q.en, q.trigger, q.reward].join(" "), { region: id, tab: "sidequests", anchor: "sq-" + q.name }));
    r.items.forEach((it) => addIdx(it.name, `${it.type || "道具"} · ${r.name}`, [it.en, it.how, it.effect].join(" "), { region: id, tab: "items", anchor: "item-" + it.name }));
    r.jobs.forEach((j) => addIdx(j.name, `职业证 · ${r.name}`, [j.en, j.how].join(" "), j.location && r.locById[j.location] ? { region: id, loc: j.location } : { region: id }));
  });
  if (G) {
    arr(G.characters).forEach((c) => addIdx(c.name, "角色 · " + (c.job || ""), [c.en, c.talent].join(" "), { global: "characters" }));
    arr(G.jobs).forEach((j) => addIdx(j.name, "职业 · " + (j.kind || ""), [j.en, j.how, j.where].join(" "), { global: "jobs" }));
    arr(G.crossedPaths).forEach((c) => addIdx(c.name, "交汇篇 · " + (c.characters || ""), "", { global: "crossed" }));
    arr(G.exBosses).forEach((b) => addIdx(b.name, "EX Boss · " + (b.location || ""), b.how || "", { global: "finale" }));
  }

  const sInput = $("#globalSearch"), sBox = $("#searchResults");
  let sResults = [], sActive = -1;
  function runSearch() {
    const q = sInput.value.trim().toLowerCase();
    if (!q) { sBox.hidden = true; return; }
    sResults = searchIndex.filter((e) => e.text.includes(q))
      .sort((a, b) => (b.t.startsWith(q) - a.t.startsWith(q)) || (b.t.includes(q) - a.t.includes(q)) || a.title.length - b.title.length)
      .slice(0, 60);
    sActive = -1;
    const hl = (s) => esc(s).replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), (m) => `<mark>${m}</mark>`);
    sBox.innerHTML = sResults.length ? sResults.map((r, i) => `<div class="sr-item" data-i="${i}"><div class="sr-title">${hl(r.title)}</div><div class="sr-meta">${esc(r.meta)}</div></div>`).join("") : `<div class="sr-empty">没有找到“${esc(sInput.value)}”</div>`;
    sBox.hidden = false;
  }
  function pickResult(i) {
    const r = sResults[i];
    if (!r) return;
    sBox.hidden = true;
    const a = r.action;
    if (a.global) return openGlobal(a.global);
    if (a.loc) return openLocation(a.region, a.loc);
    focusRegion(a.region, a.tab);
    if (a.anchor) {
      setTimeout(() => {
        const el = $$("[data-anchor]", panel).find((x) => x.dataset.anchor === a.anchor);
        if (el) { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.style.outline = "3px solid #c9a24a"; setTimeout(() => (el.style.outline = ""), 1800); }
      }, 60);
    }
  }
  sInput.addEventListener("input", runSearch);
  sInput.addEventListener("focus", runSearch);
  sInput.addEventListener("keydown", (e) => {
    const items = $$(".sr-item", sBox);
    if (e.key === "ArrowDown") { sActive = Math.min(items.length - 1, sActive + 1); e.preventDefault(); }
    else if (e.key === "ArrowUp") { sActive = Math.max(0, sActive - 1); e.preventDefault(); }
    else if (e.key === "Enter") { pickResult(sActive >= 0 ? sActive : 0); return; }
    else if (e.key === "Escape") { sBox.hidden = true; return; }
    items.forEach((it, i) => it.classList.toggle("active", i === sActive));
    if (items[sActive]) items[sActive].scrollIntoView({ block: "nearest" });
  });
  sBox.addEventListener("mousedown", (e) => { const it = e.target.closest(".sr-item"); if (it) { e.preventDefault(); pickResult(+it.dataset.i); } });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search-wrap")) sBox.hidden = true; });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.activeElement !== sInput) {
      if (window.OTDetail && window.OTDetail.handleEscape()) return;
      if (state.globalTab) { state.globalTab = null; refresh(); }
      else if (state.location) focusRegion(state.region);
      else if (state.region) goWorld();
    }
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); sInput.focus(); }
  });

  // ---------------- 导航 ----------------
  buildMap();
  if (window.OTDetail) {
    window.OTDetail.init({
      regions, state, markerEls, pkey, openLocation, focusRegion,
      getProgress: (k) => !!progress[k],
      setProgress(k, v) {
        if (v) progress[k] = 1; else delete progress[k];
        saveProgress();
        $$("[data-pkey]", panel).filter((x) => x.dataset.pkey === k).forEach((x) => {
          x.checked = !!v;
          const card = x.closest(".card");
          if (card) card.classList.toggle("done", !!v);
        });
      }
    });
  }
  state.view = worldView();
  applyView();

  function fromHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (!h) return refresh();
    if (h.startsWith("g/")) { openGlobal(h.slice(2)); return; }
    const [path, tab] = h.split("?");
    const [rid, lid] = path.split("/");
    if (!regions[rid]) return refresh();
    if (lid) openLocation(rid, lid); else focusRegion(rid, tab);
  }
  requestAnimationFrame(fromHash);
})();

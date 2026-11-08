// 小区域地图目录与资料模型：不推断未知坐标，不跨作共享遇敌资料。
(function () {
  "use strict";
  const arr = v => Array.isArray(v) ? v : [];
  const esc = v => String(v == null ? "" : v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  const facility = new Set(["inn","tavern","shop","weapon","armor","item","church","guild","peddler","ship","shrine","house","camp"]);
  const labels = {exit:"出入口",save:"存档点",inn:"旅店",tavern:"酒馆",shop:"商店",weapon:"武器店",armor:"防具店",item:"道具店",church:"教会",guild:"公会",npc:"NPC",boss:"Boss",chest:"宝箱",chest_red:"红宝箱",chest_purple:"紫宝箱",hidden:"隐藏物",stairs:"楼梯",gate:"门／机关",ship:"船只／渡口",peddler:"行商",danger:"危险区域",landmark:"地标",camp:"营地",shrine:"祠堂",house:"民宅"};
  const pathLabels = {main:"主路",minor:"岔路",hidden:"隐藏通道",stairs:"台阶／楼梯",bridge:"桥",ladder:"梯子／藤蔓",water:"水路",boat:"航线／渡船"};
  const categories = [["all","全部"],["facility","设施"],["npc","NPC"],["treasure","宝箱"],["exit","出口"],["path","道路"],["enemy","怪物"]];
  function area(rid, lid) { return window.OT2?.encounters?.regions?.[rid]?.[lid] || null; }
  function timeOf(note, name = "") {
    const explicit = String(name).match(/[（(][^（）()]*?(白天|夜晚|日间|夜间|昼|夜)[）)]/);
    if (explicit) return /夜/.test(explicit[1]) ? "night" : "day";
    const t = String(note || "").trim();
    // Only leading appearance conditions qualify. A note can mention another NPC or route at night.
    if (!/^(?:仅)?(?:白天|日间|昼间|夜晚|夜间|晚上)(?:[，,；;：:、\s]|在|出现|可见|限定|才(?:出现|在))|^(?:day|night) only/i.test(t)) return "all";
    const day = /白天|日间|昼间|day only/i.test(t), night = /夜晚|夜间|晚上|night only/i.test(t);
    return day && !night ? "day" : night && !day ? "night" : "all";
  }
  function entries(rid, loc, d) {
    const result = [], npcs = arr(loc.npcs), treasures = arr(loc.treasures), linked = new Set();
    arr(d.pois).forEach((p,i) => {
      const ns = arr(p.npc).map(n => npcs[n]).filter(Boolean);
      arr(p.npc).forEach(n => linked.add(n));
      const ts = arr(p.tr).map(n => treasures[n]).filter(Boolean);
      const times = ns.map(n => timeOf(n.note,n.name));
      const time = times.length && times.every(t => t === times[0]) ? times[0] : "all";
      const ownTime = /[/／]/.test(p.label || "") || (p.kind === "npc" && ns.length > 1 && time === "all") ? "all" : timeOf(/^(?:仅)?(?:白天|夜晚|日间|夜间)|仅(?:白天|夜晚)/.test(p.note || "") ? p.note : "", p.label);
      const category = p.kind === "exit" ? "exit" : p.kind.startsWith("chest") || p.kind === "hidden" ? "treasure" : p.kind === "npc" ? "npc" : facility.has(p.kind) ? "facility" : "landmark";
      const label = p.label || ts.map(t => t.item).join("、") || ns.map(n => n.name).join("、") || labels[p.kind] || "要点";
      result.push({id:"poi-"+i,type:"poi",index:i,category,categories:ns.length ? [category,"npc"]:[category],label,kind:p.kind,at:p.at,time:ownTime !== "all" ? ownTime : p.kind === "npc" ? time : "all",npcTime:ownTime !== "all" ? ownTime : time,
        text:[label,p.note,p.to,...ns.flatMap(n => [n.name,n.item,n.method,n.note]),...ts.flatMap(t => [t.item,t.how])].filter(Boolean).join(" "),
        note:p.note || ns.map(n => n.note).filter(Boolean).join("；") || (ts[0] && ts[0].how) || labels[p.kind] || "", data:p});
    });
    npcs.forEach((n,i) => {
      if (linked.has(i)) return;
      result.push({id:"npc-"+i,type:"npc",index:i,category:"npc",categories:["npc"],label:n.name,kind:"npc",time:timeOf(n.note,n.name),unplaced:true,
        text:[n.name,n.item,n.method,n.note].filter(Boolean).join(" "),note:n.note || "具体位置尚未核实",data:n});
    });
    arr(d.paths).forEach((p,i) => result.push({id:"path-"+i,type:"path",index:i,category:"path",categories:["path"],label:p.label || (pathLabels[p.kind] || "道路")+" "+(i+1),kind:p.kind,
      pts:p.pts,time:"all",text:[p.label,pathLabels[p.kind],p.note].filter(Boolean).join(" "),note:pathLabels[p.kind] || "道路",data:p}));
    arr(area(rid,loc.id)?.enemies).forEach((e,i) => result.push({id:"enemy-"+i,type:"enemy",index:i,category:"enemy",categories:["enemy"],label:e.name,kind:"enemy",time:e.time || "all",
      text:[e.name,e.en,arr(e.weakness).join(" "),e.condition,e.drop].filter(Boolean).join(" "),note:enemyCondition(e),data:e}));
    return result;
  }
  function filter(list, opts) {
    const {query="",category="all",time="all"} = opts || {};
    const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    return list.filter(e => {
      const activeTime=category === "npc" && e.npcTime ? e.npcTime : e.time;
      return (category === "all" || e.categories.includes(category)) && (time === "all" || activeTime === "all" || activeTime === time) && words.every(w => (e.text+" "+e.label).toLowerCase().includes(w));
    });
  }
  function pointsOf(e) {
    if (e.at) return [e.at];
    if (e.pts) return e.pts;
    if (e.rect) { const [x,y,w,h]=e.rect;return [[x,y],[x+w,y+h]]; }
    if (e.poly) return e.poly;
    if (e.circle) {const [x,y,r]=e.circle;return [[x-r,y-r],[x+r,y+r]];}
    return [];
  }
  function bounds(entry, size) {
    const [w,h] = size || [100,70], points = pointsOf(entry);
    if (!points.length) return [-3,-3,w+14,h+6];
    const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
    const x0=Math.min(...xs),y0=Math.min(...ys),x1=Math.max(...xs),y1=Math.max(...ys);
    const bw=Math.max(24,x1-x0+14),bh=Math.max(20,y1-y0+14);
    return [(x0+x1-bw)/2,(y0+y1-bh)/2,bw,bh];
  }
  function enemyCondition(e) {
    return [e.time === "day" ? "白天" : e.time === "night" ? "夜晚" : "时段未限定", e.terrain === "water" ? "水上" : e.terrain === "land" ? "陆地" : "水陆未限定", e.condition].filter(Boolean).join(" · ");
  }
  function sourcesHtml(sources) {
    return arr(sources).filter(s=>/^https:\/\//.test(s.url)).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label || "攻略来源")}</a>`).join(" · ");
  }
  function enemyHtml(e, a) {
    return `<div class="atlas-enemy"><b>${esc(e.name)}</b><div>${esc(enemyCondition(e))}</div><div>弱点：${e.weaknessStatus === "conflict" ? "来源有差异，尚待核实（可能涉及章节版本）" : arr(e.weakness).map(w=>`<span class="atlas-weak">${esc(w)}</span>`).join(" ")}</div>`+
      (e.drop ? `<div>掉落／偷取：${esc(e.drop)}</div>` : "")+
      `<p class="muted">区域随机遇敌，图中高亮为对应通行路线，并非固定刷新点。${esc(a?.note || "")}</p>`+
      `<div class="atlas-sources">${e.weaknessChecked ? "弱点已交叉核对 · " : "攻略条目 · "}${sourcesHtml(e.sources || a?.sources)}</div></div>`;
  }
  function encounterHtml(rid, loc) {
    const a = area(rid,loc.id);
    if (!a || !arr(a.enemies).length) return `<p class="muted atlas-empty">本区域普通怪物资料尚未核实。现有 Boss 信息仍可在攻略中查看。</p>`;
    return `<div class="atlas-encounters"><p class="muted">本区域已收录 ${a.enemies.length} 种怪物。${esc(a.note || "")} 核对日期：${esc(a.checked || "")}</p>`+
      arr(a.enemies).map(e=>enemyHtml(e,a)).join("")+`</div>`;
  }
  function listHtml(list) {
    if (!list.length) return `<p class="atlas-empty">没有匹配的道路或要点。可清空搜索或切换分类／时段。</p>`;
    return list.map(e=>`<button type="button" class="atlas-entry" data-atlas-entry="${esc(e.id)}"><span class="atlas-entry-kind">${esc(e.type === "path" ? pathLabels[e.kind] || "道路" : e.type === "enemy" ? "区域遇敌" : labels[e.kind] || "要点")}</span><b>${esc(e.label)}</b><small>${esc(e.unplaced ? "未定位 · "+e.note : e.note)}</small></button>`).join("");
  }
  function mount(options) {
    const {host,svg,rid,loc,d,onSelect,onZone,onReset} = options;
    const all = entries(rid,loc,d), state = {query:"",category:"all",time:"all"};
    const second = window.OT2?.encounters?.edition === 2;
    const zones = arr(d.zones).map((z,i)=>({z,i})).filter(({z})=>z.label && pointsOf(z).length);
    host.innerHTML = `<div class="atlas-browser-head"><b>小区域探索</b><button type="button" class="atlas-reset">重置</button></div>`+
      `<label class="atlas-search-label">查找道路、设施、NPC、怪物<input class="atlas-find" type="search" placeholder="名称、道具或弱点…" autocomplete="off"></label>`+
      `<div class="atlas-options"><label>街区／建筑／楼层<select class="atlas-zone"><option value="">全图</option>${zones.map(({z,i})=>`<option value="${i}">${esc(z.label)}</option>`).join("")}</select></label>`+
      (second ? `<label>资料时段<select class="atlas-time"><option value="all">全部时段</option><option value="day">白天</option><option value="night">夜晚</option></select></label>` : "")+`</div>`+
      `<div class="atlas-categories" role="group" aria-label="地图要点分类">${categories.map(([id,label])=>`<button type="button" data-atlas-category="${id}" aria-pressed="${id==='all'}">${label}</button>`).join("")}</div>`+
      `<div class="atlas-count" role="status" aria-live="polite"></div><div class="atlas-results"></div><div class="atlas-coverage"></div>`;
    const results=host.querySelector('.atlas-results'), count=host.querySelector('.atlas-count');
    function update() {
      const shown = filter(all,state), ids=new Set(shown.map(e=>e.id));
      count.textContent = `显示 ${shown.length} / ${all.length} 项 · 点击定位并查看详情`;
      results.innerHTML=listHtml(shown);
      host.querySelectorAll('[data-atlas-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.atlasCategory===state.category)));
      svg.querySelectorAll('[data-atlas-poi]').forEach(g=>{g.style.display=ids.has(g.dataset.atlasPoi)?"":"none";});
      // 道路保留作方向参照，只过滤要点；怪物以区域资料呈现。
      const a=area(rid,loc.id), cov=host.querySelector('.atlas-coverage');
      cov.innerHTML=state.category==='enemy' ? (!a ? encounterHtml(rid,loc) : `<p>随机遇敌以区域表示。${esc(a.note || "")}</p>${sourcesHtml(a.sources)}`) :
        `<p>未标坐标的 NPC 可查攻略；其具体位置尚未核实。道路与设施为攻略相对位置示意。</p>${sourcesHtml(d.sources)}`;
      if (options.onFilter) options.onFilter();
    }
    host.querySelector('.atlas-find').addEventListener('input',e=>{state.query=e.target.value;update();});
    host.querySelector('.atlas-time')?.addEventListener('change',e=>{state.time=e.target.value;update();});
    host.querySelector('.atlas-zone').addEventListener('change',e=>{const z=d.zones[+e.target.value];if(e.target.value!=='' && z)onZone(z);else onReset();});
    host.onclick=e=>{
      const button=e.target.closest('[data-atlas-category]');
      if(button){state.category=button.dataset.atlasCategory;update();return;}
      const target=e.target.closest('[data-atlas-entry]');
      if(target){const item=all.find(x=>x.id===target.dataset.atlasEntry);if(item){onSelect(item);results.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===target));}return;}
      if(e.target.closest('.atlas-reset')){state.query='';state.category='all';state.time='all';host.querySelector('.atlas-find').value='';host.querySelector('.atlas-zone').value='';const t=host.querySelector('.atlas-time');if(t)t.value='all';onReset();update();}
    };
    update();
    return {refresh:update};
  }
  window.OTAtlas = {entries,filter,bounds,pointsOf,area,categories,labels,pathLabels,esc,enemyHtml,encounterHtml,listHtml,sourcesHtml,timeOf,mount};
})();

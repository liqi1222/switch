(function (root) {
  'use strict';
  const list = x => Array.isArray(x) ? x : [];
  const escape = x => String(x ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const normalize = x => String(x ?? '').normalize('NFKC').toLocaleLowerCase().replace(/\s+/g,' ').trim();
  const safeUrl = x => /^https:\/\/[^\s<>"']+$/.test(String(x)) ? String(x) : '';
  const progressKey = d => `dragon-quest-guide:${d.meta.id}:v1`;
  function parseProgress(raw) {
    try {
      const p=JSON.parse(raw || '{}');
      if (!p || typeof p!=='object' || Array.isArray(p)) return {};
      return Object.fromEntries(Object.entries(p).filter(([k,v])=>v===true && !['__proto__','constructor','prototype'].includes(k)));
    } catch { return {}; }
  }
  function index(d) {
    const result=[];
    const push=(kind,id,name,text,location,extra={})=>result.push({kind,id,name,location,text:normalize([name,text].join(' ')),...extra});
    list(d.regions).forEach(r=>push('region',r.id,r.name,[r.original,r.description].join(' '),null));
    list(d.locations).forEach(l=>{
      push('location',l.id,l.name,[l.original,l.description,l.access,...list(l.tips)].join(' '),l.id);
      list(l.treasures).forEach(t=>push('treasure',t.id,t.name,[t.original,t.how,t.floor,t.mapLabel].join(' '),l.id,{floor:t.floor,treasure:t.id}));
      list(l.npcs).forEach((n,i)=>{const id=n.id||`${l.id}-npc-${i}`;push('npc',id,n.name,[n.original,n.how,n.condition,n.role].join(' '),l.id,{targetId:id});});
      list(l.facilityImages).forEach((f,i)=>push('facility',f.id||`${l.id}-facility-${i}`,f.name||'设施图',[f.original,f.how].join(' '),l.id,{facilityIndex:i}));
      list(l.shops).forEach((s,i)=>{const id=s.id||`${l.id}-shop-${i}`;push('shop',id,s.name || '商店',[s.how,...list(s.items).map(it=>[it.name,it.original,it.price,it.note].join(' '))].join(' '),l.id,{targetId:id});});
      list(l.enemies).forEach((e,i)=>push('enemy',`${l.id}-enemy-${i}`,e.name,[e.original,e.condition,e.tip].join(' '),l.id));
      list(l.bosses).forEach((b,i)=>push('boss',`${l.id}-boss-${i}`,b.name,[b.original,b.tip].join(' '),l.id));
    });
    list(d.chapters).forEach(c=>push('chapter',c.id,c.title,[c.summary,...list(c.steps).map(s=>s.text)].join(' '),null));
    list(d.guides).forEach(g=>push('guide',g.id,g.title,list(g.paragraphs).join(' '),null));
    list(d.world?.points).forEach(p=>push('point',p.id,p.name,[p.original,p.description].join(' '),null));
    return result;
  }
  function search(d,q,entries) {
    const terms=normalize(q).split(' ').filter(Boolean);
    if(!terms.length) return [];
    return (entries || index(d)).filter(e=>terms.every(t=>e.text.includes(t))).sort((a,b)=>Number(normalize(b.name).startsWith(terms[0]))-Number(normalize(a.name).startsWith(terms[0]))).slice(0,100);
  }
  function validate(d) {
    const errors=[];
    if(!d?.meta?.id || !/HD-2D/.test(d?.meta?.version)) errors.push('缺少作品或 HD-2D 版本标识');
    const regionIds=new Set(list(d.regions).map(r=>r.id));
    const locIds=new Set(); const allIds=new Set();
    const unique=(id,kind)=>{if(!id || allIds.has(id))errors.push(`${kind} ID 缺失或重复：${id}`);allIds.add(id);};
    const sources=(a,label)=>{if(!list(a).length)errors.push(`${label}缺少来源`);list(a).forEach(s=>{if(!safeUrl(typeof s==='string'?s:s?.url))errors.push(`${label}来源不是有效 HTTPS 地址`);});};
    const position=(p,label)=>{if(p!=null && (!Array.isArray(p)||p.length!==2||p.some(n=>!Number.isFinite(n)||n<0||n>100)))errors.push(`${label}坐标无效`);};
    list(d.locations).forEach(l=>{
      unique(l.id,'地点');locIds.add(l.id);
      if(!l.name)errors.push(`${l.id}缺少名称`);
      if(!regionIds.has(l.region))errors.push(`${l.id}地区引用无效：${l.region}`);
      sources(l.sources,l.id);position(l.position,l.id);
      list(l.treasures).forEach(t=>{unique(t.id,'收集物');sources(t.sources,t.id);position(t.position,t.id);});
      list(l.maps).forEach(m=>{if(!m.image || !m.name)errors.push(`${l.id}地图缺少图片或楼层名`);sources(m.sources,`${l.id}/${m.name}`);});
      list(l.enemies).forEach(e=>{if(e.position && !e.fixed)errors.push(`${l.id}随机遇敌不可指定固定坐标`);});
      list(l.exits).forEach(e=>{if(!list(d.locations).some(x=>x.id===e.to))errors.push(`${l.id}出口引用无效：${e.to}`);});
    });
    list(d.chapters).forEach(c=>{
      unique(c.id,'章节');sources(c.sources,c.id);
      list(c.steps).forEach(s=>{if(s.location && !locIds.has(s.location))errors.push(`${c.id}步骤引用无效：${s.location}`);});
    });
    list(d.guides).forEach(g=>{unique(g.id,'专题');sources(g.sources,g.id);});
    list(d.world?.points).forEach(p=>{unique(p.id,'世界要点');if(p.position==null)errors.push(`${p.id}世界要点缺少坐标`);else position(p.position,p.id);sources(p.sources,p.id);});
    list(d.coverage?.baseline).forEach(id=>{if(!locIds.has(typeof id==='string'?id:id.id))errors.push(`地点清单缺少：${typeof id==='string'?id:id.id}`);});
    return errors;
  }
  function stats(d) {
    const ls=list(d.locations),sum=k=>ls.reduce((n,l)=>n+list(l[k]).length,0);
    return {locations:ls.length,maps:new Set(ls.flatMap(l=>list(l.maps).map(m=>m.image).filter(Boolean))).size,treasures:sum('treasures'),npcs:sum('npcs'),shops:sum('shops'),enemies:sum('enemies'),bosses:sum('bosses'),chapters:list(d.chapters).length,guides:list(d.guides).length,unplaced:ls.filter(l=>!l.position).length};
  }
  function floorFor(t,l) {
    const maps=list(l?.maps);
    if(t?.mapId!=null){const explicit=maps.findIndex(m=>String(m.id)===String(t.mapId));if(explicit>=0)return explicit;}
    if(maps.length===1)return 0;
    const clean=x=>normalize(String(x??'').replace(/[①-⑳]/g,'')).split('_').pop().trim();
    const floor=clean(t?.floor);
    if(!floor)return -1;
    const labels=m=>[m.name,m.original,...list(m.floorNames)].filter(Boolean).map(clean);
    const exact=maps.map((m,i)=>labels(m).includes(floor)?i:-1).filter(i=>i>=0);
    if(exact.length)return exact.length===1?exact[0]:-1;
    const tokens=x=>[...x.matchAll(/地下\s*(\d+)\s*(?:层|階|楼)?|b\s*(\d+)f?|地上\s*(\d+)\s*(?:层|階|楼)?|(\d+)\s*(?:层|階|楼|f)/gi)].map(m=>(m[1]||m[2]?'B':'F')+Number(m[1]||m[2]||m[3]||m[4]));
    const wanted=tokens(floor);
    if(!wanted.length)return -1;
    const matches=maps.map((m,i)=>{const available=labels(m).flatMap(tokens);return wanted.every(f=>available.includes(f))?i:-1;}).filter(i=>i>=0);
    return matches.length===1?matches[0]:-1;
  }
  const api={list,escape,normalize,safeUrl,progressKey,parseProgress,index,search,validate,stats,floorFor};
  if(typeof module!=='undefined' && module.exports)module.exports=api;
  else root.DQModel=api;
})(typeof window==='undefined'?globalThis:window);

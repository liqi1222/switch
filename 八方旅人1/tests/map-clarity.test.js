const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../..');

function load(game) {
  const box = {console}; box.window = box; vm.createContext(box);
  const run = file => vm.runInContext(fs.readFileSync(path.join(root, game, file), 'utf8'), box, {filename:file});
  run('data/core.js');
  for (const f of fs.readdirSync(path.join(root, game, 'data'))) {
    if (f.endsWith('.js') && !['core.js', 'access.js', 'global.js', 'encounters.js'].includes(f)) run('data/' + f);
  }
  for (const f of fs.readdirSync(path.join(root, game, 'data/detail'))) run('data/detail/' + f);
  run('assets/atlas.js');
  return box;
}
const overlap = (a,b) => a[0] < b[0]+b[2] && a[0]+a[2] > b[0] && a[1] < b[1]+b[3] && a[1]+a[3] > b[1];

for (const game of ['八方旅人1', '八方旅人2']) {
  test(game + ': 出口完整目的地与编号可从目录搜索', () => {
    const {OT2, OTAtlas:A} = load(game);
    const r = Object.values(OT2.regions)[0], loc = r.locations[0];
    const d = {paths:[{kind:'minor',pts:[[10,10],[15,10]]}],pois:[{kind:'exit',at:[10,10],label:'南口',to:loc.id}]};
    const entries = A.entries(r.id, loc, d);
    assert.ok(entries[0].label.includes(loc.name), entries[0].label);
    assert.equal(A.filter(entries,{query:'01', category:'path'})[0]?.id, 'path-0');
    assert.match(entries.find(e=>e.id==='path-0').label,/南口/);
    // 导航编号同时出现在搜索文本中；不是依赖 DOM 按钮中偶然含有数字。
    assert.equal(A.filter(entries,{query:'道路 01', category:'path'}).length,1);
  });
  test(game + ': 密集要点的短标签不覆盖图标、不越界', () => {
    const {OTAtlas:A} = load(game);
    const items = [
      {id:'west',at:[2,3],text:'西口 · 往西克拉克里奇荒道',side:'l',priority:0},
      {id:'save',at:[18,18],text:'存档点',side:'t',priority:0},
      {id:'npc',at:[20,16],text:'旅店外的女子（白天）',side:'t',priority:2},
      {id:'chest',at:[17,21],text:'银盾（入口东北小路，大致位置）',side:'b',priority:3},
      {id:'edge',at:[98,68],text:'物攻增强果实（大）及其他宝箱',side:'r',priority:3}
    ];
    const obstacles = items.map(p=>[p.at[0]-2.5,p.at[1]-2.5,5,5]);
    const layout = A.layoutLabels(items,[100,70],obstacles);
    assert.equal(layout.length,items.length);
    for (const l of layout) {
      assert.ok(l.box.every(Number.isFinite));
      assert.ok(l.box[0]>=0 && l.box[1]>=0 && l.box[0]+l.box[2]<=100 && l.box[1]+l.box[3]<=70, l.id);
      assert.ok(l.lines.length<=2 && l.lines.length>0);
      assert.ok(obstacles.every(b=>!overlap(l.box,b)),l.id+' 遮住图标');
      assert.equal(l.fullText,items.find(p=>p.id===l.id).text);
    }
    layout.forEach((a,i)=>layout.slice(i+1).forEach(b=>assert.ok(!overlap(a.box,b.box),a.id+' / '+b.id)));
    assert.equal(JSON.stringify(layout),JSON.stringify(A.layoutLabels(items,[100,70],obstacles)));
  });
  test(game + ': 329图使用有效出口名称及独立道路名称', () => {
    const {OT2,OTAtlas:A}=load(game);
    for(const r of Object.values(OT2.regions)) for(const loc of r.locations) {
      const d=OT2.details[r.id][loc.id],entries=A.entries(r.id,loc,d);
      for(const e of entries.filter(e=>e.kind==='exit')) {
        const bits=String(e.data.to).split('/'), targetRid=bits.length===2?bits[0]:r.id, targetId=bits.at(-1);
        const target=OT2.regions[targetRid]?.locations.find(l=>l.id===targetId);
        if(target)assert.ok(e.label.includes(target.name),r.id+'/'+loc.id+': '+e.label);
      }
      for(const e of entries.filter(e=>e.type==='path')) {
        assert.ok(A.filter(entries,{query:'道路 '+e.number,category:'path'}).some(q=>q.id===e.id));
      }
    }
  });
}

test('西克拉克里奇荒道：六箱有具体走法，北侧梯子与公会下梯分开',()=>{
  const {OT2}=load('八方旅人2'),r=OT2.regions.wildlands,loc=r.locations.find(l=>l.id==='west_crackridge_wilds'),d=OT2.details.wildlands.west_crackridge_wilds;
  assert.ok(loc.treasures.every(t=>t.how.length>8 && t.how!=='宝箱'));
  assert.equal(d.paths[7].kind,'ladder');assert.equal(d.paths[8].kind,'ladder');
  assert.equal(d.paths[4].kind,'hidden');assert.equal(d.paths[5].kind,'hidden');
  assert.ok(d.paths.some(p=>p.kind==='hidden' && /头巾/.test(p.route?.to)),'头巾岩壁隐藏入口应显示为隐藏通道');
  assert.ok(d.pois.some(p=>p.kind==='save'));
  assert.ok(d.paths.every(p=>p.route?.steps?.length && p.route.sources?.length));
  const guild=d.pois.find(p=>p.kind==='guild');
  const thunder=d.pois.find(p=>p.tr?.includes(5)), money=d.pois.find(p=>p.tr?.includes(4));
  assert.ok(thunder.at[0]<guild.at[0]);assert.ok(money.at[1]>guild.at[1]);
  const bone=d.pois.find(p=>p.tr?.includes(3));
  assert.equal(JSON.stringify(d.paths[7].pts.at(-1)),JSON.stringify(bone.at));
});

test('两作17地区全部生产SVG：图点标签不重叠、不遮挡图标、不越界',()=>{
  const {audit}=require('../reference/audit_detail_labels.js');
  const result=audit();
  assert.equal(result.rows.length,17);
  assert.equal(result.rows.reduce((n,r)=>n+r.maps,0),329);
  assert.equal(result.rows.reduce((n,r)=>n+r.unlabelled,0),0);
  assert.equal(result.issues.length,0,JSON.stringify(result.issues.slice(0,10)));
});

test('简短图签保留出口目的地、大小、时段与位置未核实提示',()=>{
  const {OTAtlas:A}=load('八方旅人2');
  for(const [text,expected] of [
    ['东口（往废弃道路）','废弃道路'],
    ['银盾（入口东北小路，大致位置）','示意'],
    ['还魂橄榄（大）（Olive of Life (L)）','（大）'],
    ['商人（夜）','（夜）'],
    ['商人（夜晚，帐篷旁）','（夜晚）'],
    ['营地（第5章期间）','第5章'],
    ['还魂橄榄 Olive of Life (L)','（L）']
  ]){
    const l=A.layoutLabels([{id:'poi-0',at:[10,10],text}],[100,70])[0];
    assert.ok(l.lines.join('').includes(expected),l.lines.join(''));
    assert.equal(l.fullText,text);
    if(/Olive of Life/.test(text))assert.ok(!l.lines.join('').includes('Olive'));
  }
});

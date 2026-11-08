'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),B=require('../build.js'),M=require('../assets/model.js');
const D=B.load(root),g=D.meta.id.startsWith('dq1-')?1:2;
const R=JSON.parse(fs.readFileSync(path.join(root,'reference',g===1?'dq1-hd2d-research.json':'dq2_guide.json'),'utf8'));

test('最终资料保留来源基线的每个地点、拾取点、流程和攻略专题',()=>{
  const locations=new Map(D.locations.map(l=>[l.id,l]));
  for(const raw of R.locations){
    const l=locations.get(raw.id);assert.ok(l,`来源地点遗漏 ${raw.nameJa}`);
    assert.ok(l.maps.length,`地点缺图 ${l.name}`);
    assert.equal(l.treasures.length,raw.treasures.length,`拾取点数量不一致 ${l.name}`);
    for(const t of l.treasures){
      assert.ok(t.detailImage,`拾取点缺位置图 ${l.name}/${t.name}`);
      assert.ok(l.maps.some(m=>m.id===t.mapId),`拾取点地图引用无效 ${l.name}/${t.floor}`);
      assert.ok(M.floorFor(t,l,0)>=0,`无法切换区域图 ${l.name}/${t.floor}`);
    }
  }
  assert.equal(D.chapters.length,R.chapters.length);
  for(const c of R.chapters){
    const chapter=D.chapters.find(x=>x.id===c.id);assert.ok(chapter);
    assert.equal(chapter.steps.length,c.steps.length);
    assert.ok(chapter.steps.every(s=>s.text.trim().length>10),`流程步骤不完整 ${c.id}`);
  }
  for(const topic of R.guideTopics)assert.ok(D.guides.some(t=>t.title===topic.titleZh),`专题遗漏 ${topic.titleZh}`);
  assert.deepEqual(B.check(root,D),[]);
});

test('首领策略、作品来源和版本关键差异保留',()=>{
  const bosses=D.locations.flatMap(l=>l.bosses);
  assert.ok(bosses.length>=(g===1?R.bosses.length:R.chapters.reduce((n,c)=>n+c.bosses.length,0)));
  assert.ok(bosses.every(b=>b.tip.length>10&&b.sources.length),'首领缺策略或来源');
  const strings=JSON.stringify(D);
  assert.ok(!strings.includes(g===1?'game8.jp/dq2/':'game8.jp/dq1remake/'),'混入另一作 Game8 数据');
  if(g===1){
    const maira=D.locations.find(l=>l.original==='マイラ');
    for(const original of ['どうのつるぎ','キメラのつばさ']){
      const item=maira.shops.flatMap(s=>s.items).find(i=>i.original===original);
      assert.equal(item.price,'来源有分歧');assert.match(item.note,/Game8.*GameWith/);
    }
    const castle=D.locations.find(l=>l.original==='ラダトーム');
    assert.match(castle.treasures.find(t=>t.original==='3300ゴールド').condition,/魔法钥匙/);
    assert.ok(D.guides.some(x=>x.paragraphs.some(p=>/没有.*通关后迷宫/.test(p))));
  }else{
    assert.equal(R.memories.length,7);
    assert.ok(D.guides.some(x=>x.title.includes('真正结局')));
    const start=D.locations.find(l=>l.original==='ローレシアの城周辺');
    assert.ok(start&&start.enemies.length);
    assert.ok(!start.enemies.some(e=>['キラーマシン2','ダークトロル','あくましんかん(ボス)'].includes(e.original)),'南岛/地下首领被归入初始城外');
    assert.ok(D.locations.find(l=>l.original==='ローレシア南の島')?.enemies.some(e=>e.original==='キラーマシン2'));
    const corridor=D.locations.find(l=>l.original==='無限の回廊');
    assert.ok(R.infiniteCorridorAreas.filter(a=>a.sourceMapImageUrl).every(a=>corridor.maps.some(m=>m.id===a.id+'-map')));
  }
  assert.ok(D.locations.every(l=>l.enemies.every(e=>!e.position)),'随机遇敌含伪固定坐标');
});

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const modelPath = path.join(__dirname, '../assets/model.js');

test('攻略模型支持作品隔离、资料检索和引用校验', () => {
  assert.ok(fs.existsSync(modelPath), '缺少攻略模型');
  const M = require(modelPath);
  const d = {meta:{id:'dq1-hd2d',version:'HD-2D 2025'},regions:[{id:'ale',name:'阿雷夫加尔德'}],
    locations:[{id:'town',name:'拉达托姆',original:'ラダトーム',type:'town',region:'ale',sources:['https://example.com/town'],maps:[],
      treasures:[{id:'town-medal',name:'小徽章',original:'ちいさなメダル',how:'地下室',sources:['https://example.com/town']}],
      npcs:[{name:'国王',how:'王座厅'}],enemies:[{name:'史莱姆',condition:'周边野外'}]}],
    chapters:[{id:'start',title:'启程',steps:[{text:'与国王交谈',location:'town'}],sources:['https://example.com/story']}],guides:[],coverage:{baseline:['town']}};
  assert.deepEqual(M.validate(d), []);
  for (const q of ['拉达','ﾗﾀﾞﾄｰﾑ','小徽章','ちいさなメダル','国王','史莱姆','启程']) assert.ok(M.search(d,q).length, q);
  assert.equal(M.search(d,'不存在的内容').length,0);
  assert.equal(M.search(d,'').length,0);
  assert.notEqual(M.progressKey(d),M.progressKey({...d,meta:{id:'dq2-hd2d',version:'HD-2D 2025'}}));
  assert.equal(M.escape('<img onerror="x">'),'&lt;img onerror=&quot;x&quot;&gt;');
  assert.equal(M.safeUrl('javascript:alert(1)'), '');
  const bad = structuredClone(d);bad.locations.push(structuredClone(bad.locations[0]));
  assert.ok(M.validate(bad).some(x=>x.includes('重复')));
  const broken = structuredClone(d);broken.chapters[0].steps[0].location='missing';
  assert.ok(M.validate(broken).some(x=>x.includes('missing')));
  const fake=structuredClone(d);fake.locations[0].enemies[0].position=[1,2];
  assert.ok(M.validate(fake).some(x=>x.includes('随机遇敌')));
  const missing=structuredClone(d);missing.coverage.baseline.push('forgotten');
  assert.ok(M.validate(missing).some(x=>x.includes('forgotten')));
  assert.deepEqual(M.parseProgress('{"a":true,"b":"false","__proto__":true}'),{a:true});
  assert.deepEqual(M.parseProgress('[]'),{});
  assert.deepEqual(M.parseProgress('null'),{});
  assert.deepEqual(M.parseProgress('broken'),{});
});

test('世界收集点可按名称检索，引用错误会阻止构建', () => {
  const M=require(modelPath);
  const data={meta:{id:'dq1-hd2d',version:'HD-2D 2025'},regions:[],locations:[],chapters:[],guides:[],
    world:{points:[{id:'sparkle-1',name:'闪光点 1',description:'草药与圣水',position:[20,30],sources:['https://example.com/map']}]}};
  assert.equal(M.search(data,'圣水')[0]?.kind,'point');
  assert.deepEqual(M.validate(data),[]);
  data.world.points[0].position=[200,30];
  assert.ok(M.validate(data).some(e=>e.includes('坐标')));
});

test('构建器拒绝缺失资产并生成真正内嵌的离线页面', () => {
  const buildPath=path.join(__dirname,'../build.js');
  assert.ok(fs.existsSync(buildPath),'缺少构建器');
  const B=require(buildPath),os=require('node:os');
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'dq-build-'));
  try {
    fs.mkdirSync(path.join(tmp,'assets'));fs.mkdirSync(path.join(tmp,'data'));
    fs.writeFileSync(path.join(tmp,'assets/x.css'),'body{color:red}');
    fs.writeFileSync(path.join(tmp,'assets/x.js'),'window.ok=true;');
    fs.writeFileSync(path.join(tmp,'map.png'),Buffer.from([137,80,78,71]));
    const html='<link rel="stylesheet" href="assets/x.css"><script src="assets/x.js"></script>';
    const result=B.inline(tmp,html,{world:{image:'map.png'}});
    assert.ok(result.includes('data:image/png;base64,'));
    assert.ok(!result.includes('src="assets/'));
    assert.ok(!result.includes('href="assets/'));
    assert.ok(result.includes('window.DQ_ASSETS='));
    assert.throws(()=>B.inline(tmp,html,{world:{image:'missing.png'}}),/missing/);
    assert.throws(()=>B.inline(tmp,html,{world:{image:'../outside.png'}}),/路径/);
  } finally {fs.rmSync(tmp,{recursive:true,force:true});}
});

test('收集物优先按地图 ID 定位，楼层兼容合并图和拾取分区标签', () => {
  const M=require(modelPath);
  const l={maps:[
    {id:'upper',name:'加莱之墓_地下1层・地下2层'},
    {id:'lower',name:'加莱之墓_地下3层・地下4层'}
  ]};
  assert.equal(typeof M.floorFor,'function');
  assert.equal(M.floorFor({mapId:'lower',floor:'地下1层'},l,0),1);
  assert.equal(M.floorFor({floor:'加莱之墓_地下3层①②'},l,0),1);
  assert.equal(M.floorFor({floor:'地下2階'},l,1),0);
  assert.equal(M.floorFor({floor:'未核实区域'},l,1),-1);
  assert.equal(M.floorFor({floor:''},l,1),-1);
  assert.equal(M.floorFor({floor:'地下3层'}, {maps:[{name:'楼层总览'}]},0),0);
  assert.equal(M.floorFor({floor:'地下3层'}, {maps:[{name:'地下3层左部'},{name:'地下3层右部'}]},0),-1);
  assert.equal(M.floorFor({floor:'城堡_后院'}, {maps:[{name:'内部',floorNames:['王座厅']},{name:'外部',floorNames:['后院']}]},0),1);
});

test('楼层匹配不会把地上 1 层误认为地下 1 层', () => {
  const M=require(modelPath),l={maps:[{name:'地下1层・地下2层'},{name:'1层・2层'},{name:'3层・4层・5层'}]};
  assert.equal(M.floorFor({floor:'雨之祠_1层・裏門'},l,2),1);
  assert.equal(M.floorFor({floor:'B2F'},l,1),0);
  assert.equal(M.floorFor({floor:'3F'},l,0),2);
  assert.equal(M.floorFor({mapId:7}, {maps:[{id:'7',name:'入口'}]},0),0);
});

test('设施图和商店商品备注可由全局检索找到', () => {
  const M=require(modelPath),d={locations:[{id:'town',name:'城镇',facilityImages:[{id:'inn-plan',name:'旅店设施图'}],shops:[{name:'道具店',items:[{name:'钥匙',note:'剧情完成后出售'}]}]}]};
  assert.equal(M.search(d,'旅店设施')[0]?.kind,'facility');
  assert.equal(M.search(d,'剧情完成后出售')[0]?.kind,'shop');
});

test('构建拒绝缺少坐标的世界收集点，地点目录仍允许未定位地点', () => {
  const M=require(modelPath),d={meta:{id:'probe',version:'HD-2D 2025'},regions:[{id:'r'}],locations:[{id:'town',name:'地点',region:'r',sources:['https://example.com/town']}],world:{points:[{id:'unlocated',name:'未定位点',sources:['https://example.com/world']}]}};
  assert.ok(M.validate(d).some(e=>e.includes('unlocated')&&e.includes('坐标')));
  d.world.points[0].position=[0,100];
  assert.deepEqual(M.validate(d),[]);
});

test('地区可检索，NPC 和商店搜索保留稳定的来源条目 ID', () => {
  const M=require(modelPath),d={regions:[{id:'coast',name:'海岸地区'}],locations:[{id:'town',name:'城镇',npcs:[{id:'king-source',name:'国王'}],shops:[{id:'shop-source',name:'武器店'}]}]};
  assert.equal(M.search(d,'海岸')[0]?.kind,'region');
  assert.equal(M.search(d,'国王')[0]?.id,'king-source');
  assert.equal(M.search(d,'国王')[0]?.targetId,'king-source');
  assert.equal(M.search(d,'武器店')[0]?.targetId,'shop-source');
});

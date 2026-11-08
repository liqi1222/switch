const test=require('node:test');
const assert=require('node:assert/strict');
let H;try{H=require('../assets/annotations.js');}catch{H={};}
test('annotation bounds reject nonfinite, empty, and outside boxes',()=>{
 assert.equal(typeof H.validateAnnotation,'function');
 assert.equal(H.validateAnnotation({text:'药草',box:[2,3,20,8]},100,80),true);
 for(const box of [[0,0,0,4],[0,0,4,-1],[-1,0,2,2],[99,1,2,2],[1,79,2,2],[NaN,0,2,2],[Infinity,0,2,2]])assert.equal(H.validateAnnotation({text:'药草',box},100,80),false);
 assert.equal(H.validateAnnotation({text:'',box:[1,1,2,2]},100,80),false);
});
test('label layout stays inside the verified source rectangle',()=>{
 const label={text:'金属史莱姆铠甲',box:[96,77,4,3]};
 const p=H.layoutLabel(label,100,80);
 assert.ok(p.x>=96&&p.y>=77&&p.x+p.width<=100&&p.y+p.height<=80);
 assert.ok(p.textX>=p.x&&p.textY<=p.y+p.height&&p.fontSize>0&&p.textWidth<=p.width);
 assert.equal(H.layoutLabel({text:'无',box:[100,0,10,10]},100,80),null);
});
test('translation uses working names and explicitly labels unknown Japanese',()=>{
 assert.equal(H.translate('メタル斬り',{'メタル斬り':'金属斩'}),'金属斩');
 assert.equal(H.translate('测试道具',{}),'测试道具');
 assert.equal(H.translate('なぞの品',{}),'待译：なぞの品');
});
test('only an unambiguous existing treasure becomes a clickable target',()=>{
 const ts=[{id:'a',mapId:'m1'},{id:'b',mapId:'m2'}];
 assert.equal(H.treasureTarget({treasures:['a']},ts),'a');
 assert.equal(H.treasureTarget({treasures:['a','b']},ts),null);
 assert.equal(H.treasureTarget({treasures:['missing']},ts),null);
 assert.equal(H.treasureTarget({original:'药草'},ts),null);
 assert.deepEqual(H.mapTreasures('m1',ts).map(x=>x.id),['a']);
});
test('world reference labels use only verified positions on the shared raster',()=>{
 const ls=[{id:'ok',name:'拉达托姆',position:[25,40]},{id:'none',name:'无坐标'},{id:'bad',position:[101,2]}];
 assert.deepEqual(H.worldReferenceMarkers({image:'world.webp'},{image:'world.webp'},ls),[{id:'ok',name:'拉达托姆',position:[25,40]}]);
 assert.deepEqual(H.worldReferenceMarkers({image:'floor.webp'},{image:'world.webp'},ls),[]);
});

const testBuild=require('../build.js');
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto');
test('annotation validation rejects changed sources, outside boxes, and unrelated treasure links',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'dq-annotations-'));
 try {
  fs.mkdirSync(path.join(root,'data'));fs.writeFileSync(path.join(root,'map.webp'),'source');
  const data={locations:[{maps:[{id:'m',image:'map.webp'}],treasures:[{id:'t',mapId:'m'}]}]};
  const r={width:100,height:80,sourceSha256:crypto.createHash('sha256').update('source').digest('hex'),labels:[{text:'药草',box:[1,1,20,8],treasures:['t']}]};
  const save=()=>fs.writeFileSync(path.join(root,'data/annotations.js'),'window.DQ_ANNOTATIONS='+JSON.stringify({version:1,images:{'map.webp':r}}));
  save();assert.deepEqual(testBuild.annotationErrors(root,data),[]);
  r.labels[0].box=[99,1,20,8];save();assert.ok(testBuild.annotationErrors(root,data).some(x=>x.includes('文字框')));
  r.labels[0].box=[1,1,20,8];r.labels[0].treasures=['missing'];save();assert.ok(testBuild.annotationErrors(root,data).some(x=>x.includes('关联')));
  r.labels[0].treasures=[];r.sourceSha256='changed';save();assert.ok(testBuild.annotationErrors(root,data).some(x=>x.includes('原图')));
 } finally {fs.rmSync(root,{recursive:true,force:true});}
});

'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto');
const B=require('../build.js');
test('单文件内嵌截图副本并拒绝过期或越界的截图缓存',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'dq-portable-'));
 try{
  fs.mkdirSync(path.join(root,'reference'));
  fs.writeFileSync(path.join(root,'source.png'),'original-image');fs.writeFileSync(path.join(root,'copy.webp'),'portable-image');
  const manifest={'source.png':{file:'copy.webp',sourceSha256:crypto.createHash('sha256').update('original-image').digest('hex'),copySha256:crypto.createHash('sha256').update('portable-image').digest('hex')}};
  const file=path.join(root,'reference/portable-assets.json');fs.writeFileSync(file,JSON.stringify(manifest));
  const html=B.inline(root,'<body></body>',{world:{image:'source.png'}});
  assert.ok(html.includes('data:image/webp;base64,'+Buffer.from('portable-image').toString('base64')));
  assert.equal((html.match(/window.DQ_ASSETS=/g)||[]).length,1);
  fs.writeFileSync(path.join(root,'source.png'),'new-source');
  assert.throws(()=>B.inline(root,'<body></body>',{world:{image:'source.png'}}),/过期/);
  assert.ok(B.check(root,{meta:{id:'test',version:'HD-2D'},world:{image:'source.png'}}).some(x=>x.includes('过期')));
  manifest['source.png'].sourceSha256=crypto.createHash('sha256').update('new-source').digest('hex');manifest['source.png'].file='../outside.webp';fs.writeFileSync(file,JSON.stringify(manifest));
  assert.throws(()=>B.inline(root,'<body></body>',{world:{image:'source.png'}}),/路径/);
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});

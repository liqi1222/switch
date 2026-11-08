// node build.js --check 校验；node build.js 校验并生成单文件离线攻略。
'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const M=require('./assets/model.js');
function resolveFile(root,rel){
  if(typeof rel!=='string' || path.isAbsolute(rel) || /^\w+:/.test(rel))throw new Error('仅允许攻略目录内的相对资产路径：'+rel);
  const file=path.resolve(root,rel),base=path.resolve(root)+path.sep;
  if(!file.startsWith(base))throw new Error('资产路径越出攻略目录：'+rel);
  if(!fs.existsSync(file))throw new Error('资产缺失：'+rel);
  return file;
}
function assetsOf(data){
  const assets=new Set();
  function walk(x){if(Array.isArray(x))x.forEach(walk);else if(x&&typeof x==='object')Object.entries(x).forEach(([key,value])=>{
    if(['image','detailImage'].includes(key) && typeof value==='string' && value)assets.add(value);else walk(value);
  });}
  walk(data);return [...assets];
}
function load(root){const sandbox={window:{}};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(path.join(root,'data/guide.js'),'utf8'),sandbox,{filename:'data/guide.js',timeout:5000});return sandbox.window.DQ_GUIDE;}
function portableOf(root,data){
  const manifestFile=path.join(root,'reference/portable-assets.json');
  const portable=fs.existsSync(manifestFile)?JSON.parse(fs.readFileSync(manifestFile,'utf8')):{};
  const hash=rel=>require('node:crypto').createHash('sha256').update(fs.readFileSync(resolveFile(root,rel))).digest('hex');
  for(const rel of assetsOf(data))if(portable[rel]){
    if(hash(rel)!==portable[rel].sourceSha256 || hash(portable[rel].file)!==portable[rel].copySha256)throw new Error('单文件截图缓存已过期或损坏，请从仓库根目录运行 python 勇者斗恶龙1/reference/prepare_portable.py：'+rel);
  }
  return portable;
}
function inline(root,html,data){
  const types={'.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml'};
  const portable=portableOf(root,data);
  const assets=Object.fromEntries(assetsOf(data).map(rel=>{
    let chosen=rel;
    if(portable[rel])chosen=portable[rel].file;
    const mime=types[path.extname(chosen).toLowerCase()];if(!mime)throw new Error('不支持的图片格式：'+chosen);
    return [rel,'data:'+mime+';base64,'+fs.readFileSync(resolveFile(root,chosen)).toString('base64')];
  }));
  html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_,rel)=>'<style>\n'+fs.readFileSync(resolveFile(root,rel),'utf8')+'\n</style>');
  html=html.replace(/<script src="([^"]+)"><\/script>/g,(_,rel)=>'<script>\n'+fs.readFileSync(resolveFile(root,rel),'utf8').replace(/<\/script/gi,'<\\/script')+'\n</script>');
  const registry='<script>window.DQ_ASSETS='+JSON.stringify(assets).replace(/</g,'\\u003c')+';</script>';
  return html.includes('<body>')?html.replace('<body>','<body>\n'+registry):registry+html;
}
function annotationErrors(root,data){
  const file=path.join(root,'data/annotations.js');if(!fs.existsSync(file))return ['缺少中文标注数据'];
  const sandbox={window:{}};vm.createContext(sandbox);vm.runInContext(fs.readFileSync(file,'utf8'),sandbox,{timeout:5000});
  const annotations=sandbox.window.DQ_ANNOTATIONS,errors=[],assets=new Set(assetsOf(data));
  const H=require('./assets/annotations.js');
  const treasures=new Map((data.locations||[]).flatMap(l=>(l.treasures||[]).map(t=>[t.id,{t,l}])));
  if(!annotations||annotations.version!==1||!annotations.images)return ['中文标注数据格式无效'];
  for(const [rel,record] of Object.entries(annotations.images)){
    if(!assets.has(rel)){errors.push('中文标注引用未知图片：'+rel);continue;}
    const hash=require('node:crypto').createHash('sha256').update(fs.readFileSync(resolveFile(root,rel))).digest('hex');
    if(hash!==record.sourceSha256)errors.push('中文标注原图已变化：'+rel);
    for(const label of record.labels||[]){
      if(!H.validateAnnotation(label,record.width,record.height))errors.push('中文标注文字框无效：'+rel);
      for(const id of label.treasures||[]){
        const entry=treasures.get(id);
        if(!entry||!entry.l.maps?.some(m=>m.image===rel&&m.id===entry.t.mapId))errors.push('中文标注收集物关联无效：'+id);
      }
    }
  }
  return errors;
}
function check(root,data){const errors=M.validate(data);for(const rel of assetsOf(data))try{resolveFile(root,rel);}catch(e){errors.push(e.message);}try{portableOf(root,data);errors.push(...annotationErrors(root,data));}catch(e){errors.push(e.message);}return errors;}
function main(){const root=__dirname;try{const data=load(root),errors=check(root,data);console.table(M.stats(data));if(errors.length){errors.forEach(e=>console.error('ERROR',e));process.exitCode=1;return;}console.log('校验通过：0 错误。来源与内容覆盖详见页面“资料与来源”。');if(process.argv.includes('--check'))return;const out=path.join(root,data.meta.outputName);fs.writeFileSync(out,inline(root,fs.readFileSync(path.join(root,'index.html'),'utf8'),data),'utf8');console.log('生成 '+out+' ('+(fs.statSync(out).size/1024/1024).toFixed(1)+' MiB)');}catch(e){console.error(e.stack);process.exitCode=1;}}
if(require.main===module)main();
module.exports={assetsOf,resolveFile,load,inline,check,annotationErrors};

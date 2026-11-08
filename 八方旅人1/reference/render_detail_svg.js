// Render the production SVG functions against a tiny SVG DOM for offline visual QA.
// No browser automation, network, application state, or user progress is involved.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../..');
const escape=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
class SvgNode {
  constructor(tag){this.tag=tag;this.attrs={};this.children=[];this.textContent='';this.classList={
    add:(name)=>{this.attrs.class=[...new Set((this.attrs.class||'').split(' ').filter(Boolean).concat(name))].join(' ');},
    toggle:(name,value)=>{const set=new Set((this.attrs.class||'').split(' ').filter(Boolean));value?set.add(name):set.delete(name);this.attrs.class=[...set].join(' ');}
  };}
  setAttribute(k,v){this.attrs[k]=String(v);}
  appendChild(child){this.children.push(child);return child;}
  addEventListener(){}
  set innerHTML(value){if(value!=='')throw Error('Unexpected HTML in SVG renderer');this.children=[];}
  toString(){return '<'+this.tag+Object.entries(this.attrs).map(([k,v])=>' '+k+'="'+escape(v)+'"').join('')+'>'+escape(this.textContent)+this.children.join('')+'</'+this.tag+'>';}
}
function load(game){
  const box={console,document:{createElementNS:(_ns,tag)=>new SvgNode(tag)}};box.window=box;vm.createContext(box);
  const run=file=>vm.runInContext(fs.readFileSync(path.join(root,game,file),'utf8'),box,{filename:file});
  run('data/core.js');
  for(const file of fs.readdirSync(path.join(root,game,'data')))if(file.endsWith('.js')&&!['core.js','global.js'].includes(file))run('data/'+file);
  for(const file of fs.readdirSync(path.join(root,game,'data/detail')))run('data/detail/'+file);
  run('assets/atlas.js');
  for(const r of Object.values(box.OT2.regions))r.locById=Object.fromEntries(r.locations.map(l=>[l.id,l]));
  const source=fs.readFileSync(path.join(root,game,'assets/detail.js'),'utf8');
  const marker='  window.OTDetail = {';
  if(!source.includes(marker))throw Error('Detail renderer entry changed');
  // Expose the existing private function only in this isolated test VM.
  vm.runInContext(source.replace(marker,`  window.renderTestSvg=(rid,loc,d,target)=>{api={regions:OT2.regions,getProgress:()=>false,pkey:()=>''};svg=target;return buildDetailSvg(rid,loc,d);};\n${marker}`),box);
  return box;
}
function render(box,game,rid,lid){
  const loc=box.OT2.regions[rid].locById[lid],d=box.OT2.details[rid][lid],svg=new SvgNode('svg');
  const ctx=box.renderTestSvg(rid,loc,d,svg),[w,h]=d.size||[100,70];
  Object.assign(svg.attrs,{xmlns:'http://www.w3.org/2000/svg',width:1100,height:Math.round(1100*(h+6)/(w+14)),viewBox:`-3 -3 ${w+14} ${h+6}`,class:'road-numbered'});
  const style=new SvgNode('style');
  style.textContent='.dp-label{font:600 1.85px "Microsoft YaHei";paint-order:stroke;stroke-width:.5px;text-anchor:start}.dp-label-leader{fill:none;stroke-width:.3;opacity:.65}.dp-badge{font:700 2.2px "Microsoft YaHei";fill:#fff;text-anchor:middle}.dp-plabel{display:none}.dp-n{font:2px sans-serif;fill:#fff;text-anchor:middle}'+
    fs.readFileSync(path.join(root,game,'assets/atlas.css'),'utf8').slice(fs.readFileSync(path.join(root,game,'assets/atlas.css'),'utf8').indexOf('/* 道路编号'));
  svg.children.unshift(style);
  return {svg:String(svg),ctx};
}
if(require.main===module){
  const [game,rid,lid,out]=process.argv.slice(2),box=load(game);
  fs.writeFileSync(out,render(box,game,rid,lid).svg,'utf8');console.log(out);
}
module.exports={load,render,SvgNode};

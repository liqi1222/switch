const fs=require('node:fs'),path=require('node:path');
const {load,render}=require('./render_detail_svg.js');
const root=path.resolve(__dirname,'../..');
const overlap=(a,b)=>a[2]>0&&b[2]>0&&a[0]<b[0]+b[2]&&a[0]+a[2]>b[0]&&a[1]<b[1]+b[3]&&a[1]+a[3]>b[1];
function audit(write=false){
  const rows=[],issues=[];
  for(const game of ['八方旅人1','八方旅人2']){
    const box=load(game),A=box.OTAtlas;
    for(const r of Object.values(box.OT2.regions)){
      let densest=null;
      const stats={game,region:r.id,name:r.name,maps:0,pois:0,roads:0,exitsExpanded:0,roadsClarified:0,compact:0,unlabelled:0};
      for(const loc of r.locations){
        const d=box.OT2.details[r.id][loc.id],{ctx}=render(box,game,r.id,loc.id),ls=ctx.labelLayout;
        stats.maps++;stats.pois+=d.pois.length;stats.roads+=d.paths.length;
        stats.exitsExpanded+=d.pois.filter(p=>p.kind==='exit'&&A.poiName(r.id,loc,p)!==p.label).length;
        stats.roadsClarified+=d.paths.filter((p,i)=>A.roadName(d,i,r.id,loc)!==p.label).length;
        stats.compact+=ls.filter(l=>l.id.startsWith('poi-')&&l.compact&&l.lines.length).length;
        stats.unlabelled+=ls.filter(l=>l.id.startsWith('poi-')&&!l.lines.length).length;
        const obstacles=d.pois.map(p=>[p.at[0]-2.6,p.at[1]-2.6,5.2,5.2]).concat(ctx.labelObstacles),[w,h]=ctx.size;
        for(const [i,l] of ls.entries()){
          if(!l.lines.length)continue;
          if(l.box[0]<0||l.box[1]<0||l.box[0]+l.box[2]>w||l.box[1]+l.box[3]>h)issues.push([game,r.id,loc.id,l.id,'边界']);
          if(obstacles.some(b=>overlap(l.box,b)))issues.push([game,r.id,loc.id,l.id,'遮住图标']);
          for(const q of ls.slice(i+1))if(q.lines.length&&overlap(l.box,q.box))issues.push([game,r.id,loc.id,l.id,q.id,'叠字']);
        }
        if(!densest||d.pois.length>densest.pois)densest={lid:loc.id,name:loc.name,pois:d.pois.length};
      }
      stats.representative=densest;rows.push(stats);
      if(write){
        const out=path.join(root,'docs/verification/regional-maps');fs.mkdirSync(out,{recursive:true});
        fs.writeFileSync(path.join(out,(game.endsWith('1')?'ot1-':'ot2-')+r.id+'.svg'),render(box,game,r.id,densest.lid).svg);
      }
    }
  }
  const result={checked:'2026-11-08',method:'Production SVG functions in isolated Node VM; not browser interaction or pixel calibration',rows,issues};
  if(write)fs.writeFileSync(path.join(root,'docs/verification/regional-map-label-audit.json'),JSON.stringify(result,null,2)+'\n');
  return result;
}
if(require.main===module){const result=audit(process.argv.includes('--write'));console.table(result.rows.map(({representative,...r})=>r));console.log('Layout issues:',result.issues.length,JSON.stringify(result.issues.slice(0,10)));process.exitCode=result.issues.length?1:0;}
module.exports={audit};

(function(root,factory){
  if(typeof module==='object'&&module.exports)module.exports=factory();
  else root.DQAnnotations=factory();
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  function validateAnnotation(label,width,height){
    if(!Number.isFinite(width)||!Number.isFinite(height)||width<=0||height<=0||typeof label?.text!=='string'||!label.text.trim())return false;
    const b=label.box;
    return Array.isArray(b)&&b.length===4&&b.every(Number.isFinite)&&b[0]>=0&&b[1]>=0&&b[2]>0&&b[3]>0&&b[0]+b[2]<=width&&b[1]+b[3]<=height;
  }
  function layoutLabel(label,width,height){
    if(!validateAnnotation(label,width,height))return null;
    const [x,y,w,h]=label.box,pad=Math.min(h*.1,w*.04),textWidth=w-2*pad;
    const fontSize=Math.min(h*.76,textWidth/Math.max(1,Array.from(label.text).length));
    return {x,y,width:w,height:h,textX:x+pad,textY:y+(h+fontSize*.72)/2,textWidth,fontSize};
  }
  function translate(original,terms){
    const name=String(original||''),found=terms?.[name];
    return typeof found==='string'&&found?found:/[ぁ-ゖァ-ヶー]/.test(name)?'待译：'+name:name;
  }
  function treasureTarget(label,treasures){
    const ids=[...new Set(Array.isArray(label?.treasures)?label.treasures:[])];
    return ids.length===1&&treasures.some(t=>t.id===ids[0])?ids[0]:null;
  }
  function mapTreasures(mapId,treasures){return mapId?treasures.filter(t=>t.mapId===mapId):[];}
  function worldReferenceMarkers(map,world,locations){
    if(!map?.image||map.image!==world?.image)return [];
    return locations.filter(l=>Array.isArray(l.position)&&l.position.length===2&&l.position.every(n=>Number.isFinite(n)&&n>=0&&n<=100)).map(l=>({id:l.id,name:l.name,position:l.position.slice()}));
  }
  return {validateAnnotation,layoutLabel,translate,treasureTarget,mapTreasures,worldReferenceMarkers};
});

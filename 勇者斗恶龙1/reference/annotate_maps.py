"""识别来源图上的文字框，将可对应的标签转换为可开关中文SVG层；不改地图像素或物品位置。"""
from pathlib import Path
import argparse,difflib,hashlib,json,re,unicodedata,urllib.request

ROOT=Path(__file__).resolve().parents[2]
CACHE=Path.home()/'.cache/dq-map-ocr'
def normalize(text):
 text=unicodedata.normalize('NFKC',str(text)).lower().replace('ゴールド','g')
 return re.sub(r'[\s・_。:：]','',text)
def match_label(text,terms,fuzzy_terms=None):
 n=normalize(text)
 if not n:return None
 floor=re.fullmatch(r'(地下|地上)?\s*(\d+)(?:階|f|层)([①-⑳]*)',n)
 if floor:return {'original':text,'text':('地下' if floor[1]=='地下' else '')+floor[2]+'层'+floor[3],'match':'floor'}
 bynorm={normalize(k):k for k in terms}
 if n in bynorm:
  key=bynorm[n];return {'original':key,'text':terms[key],'match':'exact'}
 for ending in ['に戻る','に行く','へ','ヘ']:
  if str(text).endswith(ending):
   base=match_label(str(text)[:-len(ending)],terms,{})
   if base:return {**base,'text':('返回' if ending=='に戻る' else '前往')+base['text']}
 required=re.fullmatch(r'要[：:]?(.+)',str(text))
 if required:
  base=match_label(required[1],terms,{})
  if base:return {**base,'text':'需要：'+base['text']}
 money=re.fullmatch(r'[c〇○]?(\d+)g',n)
 if money:
  key=bynorm.get(money[1]+'g')
  return {'original':key or money[1]+'G','text':terms[key] if key else money[1]+'金币','match':'amount'}
 qty=re.fullmatch(r'(.+?)[×x](\d+)',n)
 if qty:
  found=match_label(qty[1],terms,fuzzy_terms)
  if found:return {**found,'original':found['original']+'×'+qty[2],'text':found['text']+'×'+qty[2]}
 # 数额不可用近似匹配纠正，短标签也不能推断为物品名。
 if len(n)<4 or re.search(r'\d',n):return None
 candidates=bynorm if fuzzy_terms is None else {normalize(k):k for k in fuzzy_terms}
 scores=sorted(((difflib.SequenceMatcher(None,n,k).ratio(),original) for k,original in candidates.items() if len(k)>=4),reverse=True)
 if scores and scores[0][0]>=.80 and (len(scores)==1 or scores[0][0]-scores[1][0]>=.075):
  score,key=scores[0]
  return {'original':key,'text':terms[key],'match':'source-match','similarity':round(score,3)}
 return None
def clamp_box(points,width,height):
 xs=[float(p[0]) for p in points];ys=[float(p[1]) for p in points]
 left=max(0,min(width,min(xs)));top=max(0,min(height,min(ys)))
 right=max(0,min(width,max(xs)));bottom=max(0,min(height,max(ys)))
 if right-left<2 or bottom-top<2:return None
 return [round(left,2),round(top,2),round(right-left,2),round(bottom-top,2)]
def read_guide(root):return json.loads((root/'data/guide.js').read_text('utf-8').removeprefix('window.DQ_GUIDE=').removesuffix(';\n'))
def make_engine():
 import rapidocr_onnxruntime,yaml
 from rapidocr_onnxruntime import RapidOCR
 from rapidocr_onnxruntime.ch_ppocr_v3_rec.text_recognize import TextRecognizer
 CACHE.mkdir(parents=True,exist_ok=True)
 downloads={'japan.onnx':'https://huggingface.co/cycloneboy/japan_PP-OCRv3_rec_infer/resolve/main/model.onnx','japan_dict.txt':'https://raw.githubusercontent.com/PaddlePaddle/PaddleOCR/release/2.7/ppocr/utils/dict/japan_dict.txt'}
 for name,url in downloads.items():
  if not (CACHE/name).exists():urllib.request.urlretrieve(url,CACHE/name)
 package=Path(rapidocr_onnxruntime.__file__).parent
 engine=RapidOCR(det_model_path=str(package/'models/ch_PP-OCRv3_det_infer.onnx'),det_limit_side_len=1280,det_limit_type='max',use_angle_cls=False,text_score=.45)
 config=yaml.safe_load((package/'config.yaml').read_text('utf-8'))['Rec']
 config.update(model_path=str(CACHE/'japan.onnx'),keys_path=str(CACHE/'japan_dict.txt'))
 engine.text_recognizer=TextRecognizer(config)
 return engine
def run(games):
 from PIL import Image
 import numpy as np
 terms_doc=json.loads((ROOT/'勇者斗恶龙1/reference/chinese-map-terms.json').read_text('utf-8'));terms=terms_doc['terms']
 engine=None
 for g in games:
  root=ROOT/f'勇者斗恶龙{g}';data=read_guide(root)
  file=root/'reference/map-ocr-cache.json';cache=json.loads(file.read_text('utf-8')) if file.exists() else {}
  images={};jobs={}
  all_places={l['original']:terms.get(l['original'],l['name']) for l in data['locations']}
  common={k:v for k,v in terms.items() if k in ['入口','出口','出入口','階段','宿屋','教会','武器屋','防具屋','道具屋','武器と防具の店','宿','井戸','旅の扉','毒の沼','鍵','宝箱','ツボ','タル','タンス','本棚','扉','上へ','下へ','次へ','前へ','裏庭','隠し部屋','外観','王座','店','階段へ']}
  common.update({'ひみつの場所':'秘密地点','からっぽ':'空箱','からつぽ':'空箱','盗賊の鍵':'盗贼钥匙','魔法の鍵':'魔法钥匙','最後の鍵':'最终钥匙','地上出口':'地面出口','地上':'地面','預かり所':'寄存处','ふくびき所':'抽奖处','せかいの地図':'世界地图','アイコン非表示':'隐藏图标','拡大表示':'放大显示','目的一覧表示':'显示目标列表','表示':'显示','非表示':'隐藏','アイコン':'图标','ルーラ':'鲁拉（传送）','ハーゴンを倒そう。':'打倒哈贡。','番人撃破で解錠':'击败守卫后解锁','マップ間のつながり':'地图之间的连接','ガライの町':'加莱镇','ラダトーム城':'拉达托姆城'})
  for l in data['locations']:
   for m in l['maps']:
    if m['image']==data['world']['image']:continue
    j=jobs.setdefault(m['image'],{'width':m['width'],'height':m['height'],'terms':{**terms,**all_places,**common},'treasures':{}})
    for t in l['treasures']:
     if t.get('mapId')==m['id']:
      j['terms'][t['original']]=terms.get(t['original'],t['name']);j['treasures'].setdefault(normalize(t['original']),[]).append(t['id'])
    for f in m.get('floorNames',[]):
     if f in terms:j['terms'][f]=terms[f]
   for f in l.get('facilityImages',[]):
    with Image.open(root/f['image']) as im:w,h=im.size
    jobs.setdefault(f['image'],{'width':w,'height':h,'terms':{**terms,**all_places,**common},'treasures':{}})
  for index,(rel,job) in enumerate(jobs.items()):
   source=root/rel;sha=hashlib.sha256(source.read_bytes()).hexdigest()
   entry=cache.get(rel)
   if not entry or entry.get('sourceSha256')!=sha:
    if engine is None:engine=make_engine()
    with Image.open(source) as im:
     scale=min(2,1600/max(im.size));scaled=im.convert('RGB').resize((round(im.width*scale),round(im.height*scale)))
     result,_=engine(np.asarray(scaled))
    rows=[{'box':[[float(p[0])/scale,float(p[1])/scale] for p in points],'text':text,'score':float(score)} for points,text,score in (result or [])]
    entry={'sourceSha256':sha,'rows':rows};cache[rel]=entry
    file.write_text(json.dumps(cache,ensure_ascii=False,indent=2),'utf-8',newline='\n')
   labels=[];untranslated=[]
   for row in entry['rows']:
    # 地点名只接受精确对应；避免把「ガライの町」误认作「ガライの墓」。
    fuzzy={k:v for k,v in job['terms'].items() if normalize(k) in job['treasures']}
    found=match_label(row['text'],job['terms'],fuzzy)
    # 标签中已有确定的相邻地点名及箭头，允许保留文字方向。
    if not found:
     for ending in ['へ','に戻る','に行く']:
      if row['text'].endswith(ending):
       base=match_label(row['text'][:-len(ending)],all_places,{})
       if base:found={**base,'text':('前往' if ending=='へ' else '返回' if ending=='に戻る' else '前往')+base['text']};break
    box=clamp_box(row['box'],job['width'],job['height'])
    if found and box:
     key=normalize(found['original']);targets=job['treasures'].get(key,[])
     if not targets:
      base=re.sub(r'[×x]\d+$','',key);targets=job['treasures'].get(base,[])
     labels.append({**found,'box':box,'kind':'item' if targets else 'floor' if found['match']=='floor' else 'place' if found['original'] in all_places else 'facility','treasures':list(dict.fromkeys(targets)),'recognized':row['text']})
    elif re.search(r'[ぁ-んァ-ヶ一-龥]',row['text']):untranslated.append(row['text'])
   images[rel]={'width':job['width'],'height':job['height'],'labels':labels,'untranslated':untranslated,'sourceSha256':sha}
   if index%15==0:print(f'DQ{g}: {index+1}/{len(jobs)} maps and facility images',flush=True)
  output={'version':1,'meta':{'translationStatus':'工作暂译，非官方本地化','note':'中文层仅替换来源图上可对应的文字框，不改变道路、指示线、入口及物品坐标。未核实的原图注记保留日文，可用中文对照清单查阅。','recognizer':'PP-OCRv3 Japanese; labels matched against own-game source terms','verifiedDate':'2026-11-08'},'terms':terms,'images':images}
  (root/'data/annotations.js').write_text('window.DQ_ANNOTATIONS='+json.dumps(output,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')+';\n','utf-8',newline='\n')
  stats={'images':len(images),'labels':sum(len(x['labels']) for x in images.values()),'withLabels':sum(bool(x['labels']) for x in images.values()),'untranslated':sum(len(x['untranslated']) for x in images.values())}
  (root/'reference/chinese-annotation-coverage.json').write_text(json.dumps(stats,ensure_ascii=False,indent=2),'utf-8',newline='\n')
  print(f'DQ{g}: {stats}',flush=True)

if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--game',choices=['1','2','all'],default='all');args=parser.parse_args();run([1,2] if args.game=='all' else [int(args.game)])

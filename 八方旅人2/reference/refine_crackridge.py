"""Reapply the sourced Western Crackridge Wilds correction without changing item IDs."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCES = [
    {'label': 'ArrPeeGeeZ · 六处宝箱与梯子', 'url': 'https://www.arrpeegeez.com/2023/03/octopath-traveler-ii-walkthrough-area_3.html'},
    {'label': 'Neoseeker · 隐藏入口及下梯交叉核对', 'url': 'https://www.neoseeker.com/octopath-traveler-ii/walkthrough/Western_Crackridge_Wilds'},
]

def replace_object(file, marker, callback):
    text = file.read_text(encoding='utf-8')
    start = text.index('{', text.index(marker))
    obj, length = json.JSONDecoder().raw_decode(text[start:])
    callback(obj)
    file.write_text(text[:start] + json.dumps(obj, ensure_ascii=False, indent=2).replace('\n', '\n  ') + text[start+length:], encoding='utf-8', newline='\n')

def detail(d):
    d['note'] = '东侧镇口与存档点相邻，主路向西南接南克拉克里奇荒道，中段北行接西格拉维尔荒道；西北台阶上是商人公会。公会南侧下梯取8500叶、公会左侧取雷之精灵石；存档点北侧另有梯子，梯旁隐藏路取头巾，下梯取骨铠。镇口楼梯旁还有李子篮隐藏路和橄榄小隧道。位置按攻略相对关系示意，未作实机像素校准。'
    points = [
        [[98,40],[90,40],[84,40],[78,36],[68,36],[56,42],[42,48],[20,56],[2,64]],
        [[68,36],[70,28],[74,14],[72,2]],
        [[42,48],[36,34],[24,18],[16,12]],
        [[16,12],[8,14]],
        [[84,40],[86,48],[92,52]],
        [[90,40],[94,46],[94,60]],
        [[70,28],[82,28]],
        [[82,28],[82,40],[76,54]],
        [[16,12],[16,26],[10,36],[10,44]],
        [[16,12],[8,10],[4,8]],
    ]
    rows = [
        ('镇口楼梯至西南主路','克拉克里奇镇口／存档点','南克拉克里奇荒道出口',['从镇口附近存档点辨认上下楼梯','沿主路向西南；中段可分往北侧荒道或西北公会'],''),
        ('主路北行去格拉维尔','主路岔路 A','西格拉维尔荒道出口',['在主路中段转向北侧道路','继续到西格拉维尔荒道；梯子宝箱路线在途中分出'],''),
        ('上台阶去商人公会','主路岔路 A 西侧','西北商人公会 B',['离开主路，沿台阶上到西北悬崖','在营地与会长交谈领取商人职业证'],''),
        ('公会帐篷旁昼夜商人','商人公会 B','帐篷左侧商人',['在会长旁寻找左侧帐篷','白天和夜晚由不同商人站在这里出售商品'],'商人昼夜替换；不能据此把公会本身筛掉'),
        ('镇口第一段楼梯旁隐藏路','镇口楼梯上段','醒神李子篮',['沿通往镇口的楼梯下第一段','检查左侧隐藏通道，进去取箱'],'这里不是楼梯最下方的小隧道'),
        ('镇口楼梯底部的小隧道','镇口楼梯底部','还魂橄榄',['到通往克拉克里奇楼梯的底部','检查左侧小隧道，穿过后取箱'],'与楼梯上段的李子篮隐藏路分开寻找'),
        ('北行道路至梯口','北行道路','北侧梯口 C',['从存档点附近向北寻找梯子','在梯口选择右侧岩壁隐藏路或向下的梯子'],'梯右隐藏路取头巾；下梯是另一件骨铠'),
        ('北侧梯子下到骨铠','北侧梯口 C','梯底骨铠宝箱',['回到存档点北侧梯子','沿梯子下到底部取骨铠'],'与上层道路在图上交叉处不能直接换层'),
        ('公会南侧平台下梯','商人公会 B','8500叶宝箱',['检查公会营地南面的崖边木平台','沿平台梯子下行到宝箱'],'这是公会南侧梯子，与存档点北侧梯子不同'),
        ('公会营地向左取精灵石','商人公会 B','雷之精灵石M宝箱',['到商人公会营地','检查营地左边的宝箱，取箱后返回会长处'],''),
    ]
    d['paths']=d['paths'][:10]
    for i,(p,pts,row) in enumerate(zip(d['paths'],points,rows)):
        label,start,end,steps,caution = row
        p.update(pts=pts,label=label,kind='hidden' if i in (4,5) else 'ladder' if i in (7,8) else 'main' if i in (0,1) else 'stairs' if i==2 else 'minor')
        p['route']={'from':start,'to':end,'steps':steps,'sources':SOURCES}
        if caution:p['route']['caution']=caution
    d['paths'].append({'kind':'hidden','pts':[[82,28],[86,26],[90,24]],'label':'梯口右侧岩壁隐藏路',
        'route':{'from':'北侧梯口 C','to':'头巾宝箱','steps':['在梯口检查右侧岩壁中的隐蔽开口','沿隐藏通道到头巾宝箱，取完回到梯口'],
                 'caution':'头巾在上层隐藏通道；骨铠需要另从梯口下梯。','sources':SOURCES}})
    chest_at={0:[92,52],1:[94,60],2:[90,24],3:[76,54],4:[10,44],5:[4,8]}
    for p in d['pois']:
        if p.get('tr'):
            p['at']=chest_at[p['tr'][0]]
            p['note']=('从北侧梯口右侧岩壁隐藏入口取头巾' if p['tr'][0]==2 else rows[[4,5,6,7,8,9][p['tr'][0]]][3][-1])+'；图上为攻略相对位置。'
        if p.get('to')=='crackridge':p['label']='东口（往克拉克里奇）'
    for p in [{'kind':'save','at':[90,38],'label':'镇口附近存档点','lp':'t'},
              {'kind':'stairs','at':[82,28],'label':'存档点北侧梯口','lp':'t'}]:
        if not any(q.get('label')==p['label'] for q in d['pois']):d['pois'].append(p)
    d['junctions']=[
        {'label':'A','at':[68,36],'roads':[0,1],'note':'北行去西格拉维尔荒道，西南继续沿主路；公会在主路更西侧另分台阶。'},
        {'label':'B','at':[16,12],'labelAt':[22,10],'roads':[2,3,8,9],'note':'商人公会营地：南侧平台下梯取8500叶，左侧取雷之精灵石，帐篷旁为昼夜商人。'},
        {'label':'C','at':[82,28],'labelAt':[78,22],'roads':[6,7,10],'note':'存档点北侧梯口：右侧隐藏入口取头巾，下梯到骨铠。'},
    ]
    d['crossings']=[{'at':[82,38.67],'labelAt':[58,60],'over':0,'under':7,'note':'上层主路／下梯不在交叉处换层'}]
    d['sources']=SOURCES

replace_object(ROOT/'data/detail/wildlands.js','"west_crackridge_wilds":',detail)

def region(r):
    loc=next(l for l in r['locations'] if l['id']=='west_crackridge_wilds')
    how=[
        '沿通往克拉克里奇的楼梯下第一段，检查左侧隐藏通道；不是楼梯最底部的小隧道。',
        '通往克拉克里奇的楼梯最下方，检查左侧小隧道，穿过后开箱。',
        '镇口附近存档点北侧有梯子；不下梯，先走梯子右侧岩壁中的隐藏通道。',
        '沿镇口附近存档点北侧的梯子一直下到最底部；与梯旁头巾宝箱分开。',
        '商人公会营地南侧的崖边平台，沿梯子下行到宝箱。',
        '商人公会营地左侧的宝箱。',
    ]
    for t,h in zip(loc['treasures'],how):t['how']=h

# Only replace this location object, retaining formatting elsewhere in the region.
file=ROOT/'data/wildlands.js'; text=file.read_text(encoding='utf-8')
marker='"id": "west_crackridge_wilds"'; start=text.rfind('{',0,text.index(marker))
obj,length=json.JSONDecoder().raw_decode(text[start:]); region({'locations':[obj]})
file.write_text(text[:start]+json.dumps(obj,ensure_ascii=False,indent=2).replace('\n','\n    ')+text[start+length:],encoding='utf-8')

"""Rasterize code-generated SVG QA sheets; requires Pillow and resvg-py."""
import json
from io import BytesIO
from pathlib import Path
import resvg_py
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parents[2] / 'docs/verification'
report = json.loads((OUT/'regional-map-label-audit.json').read_text(encoding='utf-8'))
font = ImageFont.truetype('C:/Windows/Fonts/msyh.ttc', 23)
for start in range(0,len(report['rows']),4):
    rows=report['rows'][start:start+4]
    sheet=Image.new('RGB',(1520,1240),'#172435'); draw=ImageDraw.Draw(sheet)
    for i,row in enumerate(rows):
        x=(i%2)*760;y=(i//2)*620
        file=OUT/'regional-maps'/('ot1-' if row['game'].endswith('1') else 'ot2-')
        file=file.with_name(file.name+row['region']+'.svg')
        image=Image.open(BytesIO(resvg_py.svg_to_bytes(svg_path=str(file),font_family='Microsoft YaHei'))).convert('RGBA')
        image.thumbnail((760,570))
        sheet.paste(image,(x+(760-image.width)//2,y+45),image)
        draw.text((x+15,y+8),row['game']+' · '+row['name']+' · '+row['representative']['name'],font=font,fill='#f8e7bd')
    sheet.save(OUT/f'regional-labels-{start//4+1}.png')
    print(OUT/f'regional-labels-{start//4+1}.png')
print({key:sum(r[key] for r in report['rows']) for key in ['maps','pois','roads','exitsExpanded','roadsClarified','compact','unlabelled']})

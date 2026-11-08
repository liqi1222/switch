import json,pathlib,re
out=pathlib.Path(__file__).parent
field=json.loads((out/'dq2_field_regions.json').read_text(encoding='utf-8'))
primary=[r for r in field['regions'] if r['scope']=='individual-monster-exact-field-label'];sea=[r for r in field['regions'] if r['scope']=='undersea-field'];merged={}
for r in primary:
 raw=r['sectionJa'];label=raw.lstrip('▼').strip()
 if label not in merged:
  r['sectionJa']=label;r['sourceLabelJa']=raw;merged[label]=r
 else:
  dst=merged[label]
  for e in r['enemies']:
   if e['nameJa'] not in [x['nameJa'] for x in dst['enemies']]:dst['enemies'].append(e)
  dst['sourceUrls']=list(dict.fromkeys(dst['sourceUrls']+r['sourceUrls']))
aliases={'ルプガナ＆アレフガルド周辺（海底）':'海底・ルプガナ&アレフガルド周辺','テパ東周辺（海底）':'海底・テパ東','ローレシア南西周辺（海底）':'海底・ローレシア南西','その他海底・深海（海底）':'海底','深海':'深海'}
for r in sea:
 label=aliases[r['subsectionJa']];dst=merged.get(label)
 if dst:
  dst['sourceAliasesJa']=list(dict.fromkeys(dst.get('sourceAliasesJa',[])+[r['subsectionJa']]))
  dst['sourceUrls']=list(dict.fromkeys(dst['sourceUrls']+[r['sourceUrl']]))
  for e in r['enemies']:
   existing=next((x for x in dst['enemies'] if x['nameJa']==e['nameJa']),None)
   if existing:existing['additionalSources']=[r['sourceUrl']]
   else:dst['enemies'].append(e)
 else:merged[label]=r
field['regions']=list(merged.values())
for i,r in enumerate(field['regions'],1):r['id']='dq2-field-verified-'+str(i).zfill(2)
field['meta']['coverageSummary'].update(groups=len(field['regions']),enemyAppearanceFacts=sum(len(r['enemies']) for r in field['regions']))
(out/'dq2_field_regions.json').write_text(json.dumps(field,ensure_ascii=False,indent=2),encoding='utf-8')
for fn in ['dq2_guide.json','dq2_enrichment.json']:
 g=json.loads((out/fn).read_text(encoding='utf-8'));g['fieldRegions']=field['regions'];g['meta']['coverageSummary'].update(fieldGroups=len(field['regions']),fieldEnemyFacts=sum(len(r['enemies']) for r in field['regions']))
 for loc in g['locations']:
  # A source article list is not a precise map relationship. Link only exact location-scope labels.
  loc['fieldEncounterRefs']=[r['id'] for r in field['regions'] if re.fullmatch(re.escape(loc['nameJa'])+'(?:の城|の町)?周辺',r['sectionJa'])]
 (out/fn).write_text(json.dumps(g,ensure_ascii=False,indent=2),encoding='utf-8')
assert all(e['nameJa'] not in ['キラーマシン2','ダークトロル','海のまもりガメ','あくましんかん(ボス)'] for r in field['regions'] if r['sectionJa']=='ローレシアの城周辺' for e in r['enemies'])
assert any(r['sectionJa']=='ローレシア南の島' and any(e['nameJa']=='キラーマシン2' for e in r['enemies']) for r in field['regions'])
print(field['meta']['coverageSummary'])

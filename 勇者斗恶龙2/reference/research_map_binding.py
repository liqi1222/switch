"""Audit overview composites against source headings and visible map panels.

This updates only research data. It never infers treasure pixel coordinates.
"""
import collections
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent

# Exact panel names, including separate same-floor map sections. The source
# overview images were visually inspected where their alt text was incomplete.
GROUPS = {
    '風の塔': [['1階', '2階', '3階'], ['4階', '5階', '6階', '7階']],
    'ドラゴンの角・南': [['1階', '2階', '3階'], ['4階', '5階', '6階']],
    'ドラゴンの角・北': [['1階', '2階', '3階'], ['4階', '5階', '6階']],
    '雨のほこら': [['1階', '2階'], ['3階', '4階', '5階①', '5階②']],
    'ガライの墓': [['地下1階', '地下2階'], ['地下3階①', '地下3階②', '地下4階']],
    '満月の塔': [['1階', '2階', '3階'], ['4階', '5階', '6階']],
    '海底火山の洞窟': [
        ['地下1階', '地下2階', '地下3階①', '地下3階②', '地下3階③'],
        ['地下3階④', '地下3階⑤', '地下3階⑥', '地下4階', '地下5階①'],
        ['地下5階②'],
    ],
    'ロンダルキアへの洞窟': [
        ['地下1階', '1階', '2階①', '2階②', '3階②'],
        ['2階③', '3階①', '3階③', '4階', '5階①', '5階②', '5階③', '5階④', '6階'],
    ],
    'ハーゴンの神殿': [['1階', '2階', '3階', '4階'], ['5階', '6階', '7階①', '7階②', 'ハーゴンの部屋']],
    '無限の回廊': [[f'{i}マップ目' for i in range(a, b + 1)] for a, b in [(1, 8), (9, 17), (18, 26)]],
}

CITY_GROUPS = {
    'ローレシア': [['ローレシア'], ['ローレシア城_1階', 'ローレシア城_2階', 'ローレシア城_地下1階']],
    'サマルトリア': [['サマルトリア'], ['サマルトリア城_1階', 'サマルトリア城_2階', 'サマルトリア城_地下1階']],
    'ラダトーム': [
        ['ラダトーム'],
        ['ラダトーム城_1階', 'ラダトーム城_裏庭', 'ラダトーム城_2階①', 'ラダトーム城_2階・隠し部屋'],
        ['ラダトーム城_2階②', 'ラダトーム城_2階・外観', 'ラダトーム城_地下1階'],
    ],
    'デルコンダル': [['デルコンダル'], ['デルコンダル城', 'デルコンダル城_城壁通路']],
}

LABELS = {
    'ガライの墓': ['地下1階・地下2階', '地下3階①②・地下4階'],
    '満月の塔': ['満月の塔1階〜3階', '満月の塔4階〜6階'],
    '海底火山の洞窟': ['地下1階・地下2階・地下3階①②③', '地下3階④⑤⑥・地下4階・地下5階①', '地下5階②'],
    'ロンダルキアへの洞窟': ['前半：地下1階・1階・2階①②・3階②', '後半：2階③・3階①③・4階・5階①②③④・6階'],
    'ハーゴンの神殿': ['1階・2階・3階・4階', '5階・6階・7階①②・ハーゴンの部屋'],
    '無限の回廊': ['無限の回廊_1マップ目～8マップ目', '無限の回廊_9マップ目～17マップ目', '無限の回廊_18マップ目～26マップ目'],
    'ラダトーム': ['ラダトーム城下町', '城1階・裏庭・2階①・隠し部屋', '城2階②・2階外観・地下1階'],
}


def main():
    baseline = json.loads((ROOT / 'dq2_guide.json').read_text(encoding='utf-8'))
    treasure_floors = {loc['id']: list(dict.fromkeys(t['floor'] for t in loc['treasures'])) for loc in baseline['locations']}
    for filename in ['dq2_guide.json', 'dq2_source_facts.json', 'dq2_enrichment.json']:
        path = ROOT / filename
        data = json.loads(path.read_text(encoding='utf-8'))
        counts = collections.Counter()
        for loc in data['locations']:
            name, maps = loc['nameJa'], loc['mapImages']
            if name in GROUPS:
                groups = [[f'{name}_{floor}' for floor in group] for group in GROUPS[name]]
            elif name in CITY_GROUPS:
                groups = CITY_GROUPS[name]
            else:
                assert len(maps) == 1, (name, len(maps))
                groups = [treasure_floors[loc['id']]]
            assert len(groups) == len(maps), name
            for index, (m, floors) in enumerate(zip(maps, groups), 1):
                m.setdefault('id', f"{loc['id']}-map-{index}")
                m['floorNamesJa'] = floors
                if name in LABELS:
                    m['originalFloorLabel'] = m.get('originalFloorLabel', m['floorLabel'])
                    m['floorLabel'] = LABELS[name][index - 1]
                m['floorGroupingEvidence'] = (
                    'source-heading' if name in ['満月の塔', '無限の回廊'] else
                    'source-composite-visible-panels' if len(maps) > 1 else
                    'sole-source-location-overview'
                )
            for treasure in loc.get('treasures', []):
                matches = [m for m in maps if treasure['floor'] in m['floorNamesJa']]
                assert len(matches) == 1, (filename, name, treasure['floor'], len(matches))
                m = matches[0]
                treasure['mapId'] = m['id']
                treasure['overviewMapUrls'] = [m['url']]
                treasure['overviewMapBinding'] = 'explicit-source-floor-group' if len(maps) > 1 else 'sole-location-overview'
                counts[treasure['overviewMapBinding']] += 1
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        print(filename, dict(counts))


if __name__ == '__main__':
    main()

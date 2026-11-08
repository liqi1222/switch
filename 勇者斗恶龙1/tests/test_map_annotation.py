import sys,unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'reference'))
from annotate_maps import normalize,match_label,clamp_box

class MapAnnotationTests(unittest.TestCase):
 def test_match_source_label_without_guessing_short_ambiguous_text(self):
  terms={'皮の盾':'皮盾','皮のぼうし':'皮帽','竜のうろこ':'龙鳞','314ゴールド':'314金币'}
  self.assertEqual(match_label('皮の盾',terms)['text'],'皮盾')
  self.assertEqual(match_label('電のうろこ',terms)['original'],'竜のうろこ')
  self.assertIsNone(match_label('皮',terms))
  self.assertIsNone(match_label('未確認の注記',terms))
  self.assertIsNone(match_label('ガライの町',{'ガライの墓':'加莱之墓'},{}))
  self.assertEqual(match_label('ラダトーム城へ',{'ラダトーム城':'拉达托姆城'}, {})['text'],'前往拉达托姆城')
  self.assertEqual(match_label('要：最後の鍵',{'最後の鍵':'最终钥匙'}, {})['text'],'需要：最终钥匙')
 def test_floor_and_coin_labels_preserve_numbers(self):
  self.assertEqual(match_label('地下２階',{})['text'],'地下2层')
  self.assertEqual(match_label('C314G',{'314ゴールド':'314金币'})['text'],'314金币')
  self.assertEqual(match_label('314G',{'315ゴールド':'315金币'})['text'],'314金币')
  self.assertIsNone(match_label('31AG',{'314ゴールド':'314金币'}))
 def test_bounds_never_create_outside_image_label(self):
  self.assertEqual(clamp_box([[-2,3],[100,2],[101,30],[0,31]],100,50),[0,2,100,29])
  self.assertIsNone(clamp_box([[1,1],[1,1],[1,1],[1,1]],100,100))
  self.assertEqual(normalize('３１４ゴールド ×２'),'314g×2')

if __name__=='__main__':unittest.main()

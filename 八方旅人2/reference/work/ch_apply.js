const fs = require("fs");
const ROOT = "f:/switch/八方旅人2/data/";

const DATA = {
  crestlands: {
    // 外接矩形（img_03592 1440x810 像素）：x 185~1295，y 10~870
    rect: [185, 10, 1295, 870],
    px: {
      flamechurch: [295, 445],
      flamechurch_pilgrims_way: [290, 368],
      flamechurch_cathedral_entrance: [318, 305],
      flamechurch_cathedral: [350, 255],
      cathedral_cellars: [415, 200],
      eastern_flamechurch_pass: [475, 420],
      borderfall: [688, 377],
      altar_of_the_flamebringer: [628, 315],
      seat_of_the_water_sprite: [772, 328],
      western_montwise_pass: [863, 340],
      northern_montwise_pass: [865, 180],
      montwise: [975, 285],
      montwise_library: [1010, 240],
      montwise_arena: [1015, 310],
      forsaken_graveyard: [1000, 410],
      underground_laboratory: [1043, 198],
      abandoned_traverse: [1090, 292],
      abandoned_church: [1163, 255],
      western_merry_hills_pass: [942, 557],
      merry_hills: [1090, 600],
      merry_hills_shrine_entrance: [1050, 560],
      shrine_of_ulsterra: [1067, 512],
      stage_of_the_moon_and_sun: [1105, 505]
    },
    roads: [
      ["flamechurch", "flamechurch_pilgrims_way"],
      ["flamechurch_pilgrims_way", "flamechurch_cathedral_entrance"],
      ["flamechurch_cathedral_entrance", "flamechurch_cathedral"],
      ["flamechurch_cathedral_entrance", "cathedral_cellars"],
      ["flamechurch", "eastern_flamechurch_pass"],
      ["eastern_flamechurch_pass", "borderfall"],
      ["borderfall", "altar_of_the_flamebringer"],
      ["borderfall", "seat_of_the_water_sprite"],
      ["borderfall", "western_montwise_pass"],
      ["western_montwise_pass", "northern_montwise_pass"],
      ["western_montwise_pass", "montwise"],
      ["western_montwise_pass", "western_merry_hills_pass"],
      ["montwise", "montwise_library"],
      ["montwise_library", "underground_laboratory"],
      ["montwise", "montwise_arena"],
      ["montwise", "forsaken_graveyard"],
      ["montwise", "abandoned_traverse"],
      ["abandoned_traverse", "abandoned_church"],
      ["western_merry_hills_pass", "merry_hills"],
      ["merry_hills", "merry_hills_shrine_entrance"],
      ["merry_hills_shrine_entrance", "shrine_of_ulsterra"],
      ["shrine_of_ulsterra", "stage_of_the_moon_and_sun"]
    ],
    links: [
      { from: "eastern_flamechurch_pass", region: "winterlands", to: "eastern_cape_cold_snows" },
      { from: "eastern_flamechurch_pass", region: "brightlands", to: "western_cb_highroad" },
      { from: "northern_montwise_pass", region: "winterlands", to: "southern_stormhail_snows" }
    ]
  },
  hinoeuma: {
    // 外接矩形（img_03611 1440x810 像素）：x 48~1100，y -50~1290（北端与南部沙漠超出截图，按世界地图估计）
    rect: [48, -50, 1100, 1290],
    px: {
      northern_ryu_sands: [1028, 72],
      ryu: [1005, 165],
      sai: [785, 413],
      sai_east: [825, 428],
      dragonridge: [885, 440],
      sandflow_pass: [713, 420],
      old_campsite: [713, 367],
      sand_lions_den: [737, 312],
      southern_sai_sands: [797, 468],
      eastern_sai_sands: [970, 485],
      decaying_temple: [982, 425],
      altar_thunderblade: [942, 550],
      western_sai_sands: [593, 430],
      quicksand_gaol: [540, 380],
      eastern_ku_sands: [558, 683],
      tranquil_grotto: [685, 683],
      southern_ku_sands: [380, 693],
      ku_castle_town: [380, 600],
      castle_ku: [400, 562],
      five_tiered_tower: [440, 540]
    },
    roads: [
      ["northern_ryu_sands", "ryu"],
      ["sai", "sai_east"],
      ["sai_east", "dragonridge"],
      ["sai", "sandflow_pass"],
      ["sandflow_pass", "old_campsite"],
      ["old_campsite", "sand_lions_den"],
      ["sai", "southern_sai_sands"],
      ["southern_sai_sands", "eastern_sai_sands"],
      ["southern_sai_sands", "western_sai_sands"],
      ["eastern_sai_sands", "decaying_temple"],
      ["eastern_sai_sands", "altar_thunderblade"],
      ["western_sai_sands", "quicksand_gaol"],
      ["western_sai_sands", "eastern_ku_sands"],
      ["eastern_ku_sands", "tranquil_grotto"],
      ["eastern_ku_sands", "southern_ku_sands"],
      ["southern_ku_sands", "ku_castle_town"],
      ["ku_castle_town", "castle_ku"],
      ["castle_ku", "five_tiered_tower"]
    ],
    links: [
      { from: "northern_ryu_sands", region: "wildlands", to: "south_oresrush_wilds" },
      { from: "northern_ryu_sands", region: "harborlands", to: "canalbrine_bridge" },
      { from: "eastern_sai_sands", region: "harborlands", to: "western_conning_creek_coast" },
      { from: "western_sai_sands", region: "leaflands", to: "east_wellgrove_trail" }
    ]
  }
};

const r1 = (v) => Math.round(v * 10) / 10;
for (const [id, d] of Object.entries(DATA)) {
  const file = ROOT + id + ".js";
  let s = fs.readFileSync(file, "utf8");
  const [x0, y0, x1, y1] = d.rect;
  let changed = 0;
  for (const [loc, [px, py]] of Object.entries(d.px)) {
    const x = r1(((px - x0) / (x1 - x0)) * 100), y = r1(((py - y0) / (y1 - y0)) * 100);
    const idIdx = s.indexOf(`"id": "${loc}"`);
    if (idIdx < 0) throw new Error("missing " + loc);
    const re = /"pos": \[[^\]]*\]/g;
    re.lastIndex = idIdx;
    const m = re.exec(s);
    s = s.slice(0, m.index) + `"pos": [${x}, ${y}]` + s.slice(m.index + m[0].length);
    changed++;
  }
  if (!/^  "roads": /m.test(s)) {
    const roads = d.roads.map((r) => `    ${JSON.stringify(r).replace(",", ", ")}`).join(",\n");
    const links = d.links.map((l) => `    ${JSON.stringify(l).replace(/,"/g, ', "').replace(/":/g, '": ')}`).join(",\n");
    const block = `  "roads": [\n${roads}\n  ],\n\n  "links": [\n${links}\n  ],\n\n`;
    const at = s.search(/^  "story": \[/m);
    s = s.slice(0, at) + block + s.slice(at);
  }
  fs.writeFileSync(file, s, "utf8");
  console.log(id, "pos changed:", changed, "roads:", d.roads.length, "links:", d.links.length);
}

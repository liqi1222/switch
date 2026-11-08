const fs = require("fs");
const path = require("path");
const ROOT = "f:\\switch\\八方旅人2\\data";

const plans = {
  leaflands: {
    pos: {
      cropdale: [78.0, 36.4],
      festival_grounds: [81.9, 15.1],
      forest_path: [81.9, 21.1],
      veil_of_trees: [72.8, 21.7],
      animal_trail: [91.4, 23.1],
      east_cropdale_trail: [87.9, 36.6],
      south_cropdale_trail: [83.4, 46.9],
      starfall_spring: [82.7, 58.4],
      north_wellgrove_trail: [63.6, 51.4],
      altar_lady_of_grace: [60.4, 42.4],
      east_wellgrove_trail: [59.7, 67.7],
      wellgrove: [47.3, 69.4],
      alrond_estate: [50.5, 66.0],
      secret_forest: [35.3, 67.3],
      road_to_mothers_garden: [46.1, 80.8],
      mothers_garden_orphanage: [39.5, 92.5],
      mothers_garden: [37.8, 81.7],
      south_timberain_trail: [45.6, 52.3],
      house_wellows_manor: [38.6, 54.0],
      timberain: [42.2, 40.5],
      timberain_castle_square: [45.6, 37.0],
      timberain_castle: [44.5, 32.9]
    },
    roads: [
      ["timberain", "timberain_castle_square"],
      ["timberain", "timberain_castle"],
      ["timberain", "south_timberain_trail"],
      ["south_timberain_trail", "house_wellows_manor"],
      ["south_timberain_trail", "north_wellgrove_trail"],
      ["north_wellgrove_trail", "altar_lady_of_grace"],
      ["north_wellgrove_trail", "south_cropdale_trail"],
      ["north_wellgrove_trail", "east_wellgrove_trail"],
      ["east_wellgrove_trail", "wellgrove"],
      ["wellgrove", "alrond_estate"],
      ["wellgrove", "secret_forest"],
      ["wellgrove", "road_to_mothers_garden"],
      ["road_to_mothers_garden", "mothers_garden_orphanage"],
      ["mothers_garden_orphanage", "mothers_garden"],
      ["south_cropdale_trail", "starfall_spring"],
      ["south_cropdale_trail", "east_cropdale_trail"],
      ["east_cropdale_trail", "cropdale"],
      ["cropdale", "forest_path"],
      ["forest_path", "festival_grounds"],
      ["forest_path", "veil_of_trees"],
      ["forest_path", "animal_trail"]
    ],
    links: [
      { from: "east_cropdale_trail", region: "wildlands", to: "crackridge_anchorage" },
      { from: "south_cropdale_trail", region: "wildlands", to: "south_oresrush_wilds" },
      { from: "east_wellgrove_trail", region: "hinoeuma", to: "western_sai_sands" }
    ]
  },
  wildlands: {
    pos: {
      oresrush: [18.6, 79.6],
      oresrush_foundry: [15.5, 77.5],
      silver_mine: [25.8, 80.7],
      giffs_manse: [27.3, 74.5],
      south_oresrush_wilds: [18.3, 85.0],
      crackridge_anchorage: [21.9, 61.0],
      south_crackridge_wilds: [17.5, 52.6],
      unfinished_tunnel: [11.6, 50.7],
      altar_of_trader: [27.5, 51.2],
      west_crackridge_wilds: [24.6, 41.9],
      crackridge: [34.9, 40.6],
      path_to_bed_of_titan: [36.3, 48.5],
      abandoned_road: [43.7, 40.7],
      fellsun_ruins: [51.9, 40.4],
      west_gravell_wilds: [45.4, 13.2],
      ivory_ravine: [46.2, 19.5],
      gravell: [64.7, 12.2],
      path_to_duskruin: [80.5, 10.9],
      duskruin_shrine: [88.9, 12.6]
    },
    roads: [
      ["west_gravell_wilds", "gravell"],
      ["west_gravell_wilds", "ivory_ravine"],
      ["west_gravell_wilds", "west_crackridge_wilds"],
      ["gravell", "path_to_duskruin"],
      ["path_to_duskruin", "duskruin_shrine"],
      ["west_crackridge_wilds", "crackridge"],
      ["west_crackridge_wilds", "south_crackridge_wilds"],
      ["crackridge", "abandoned_road"],
      ["abandoned_road", "fellsun_ruins"],
      ["crackridge", "path_to_bed_of_titan"],
      ["south_crackridge_wilds", "unfinished_tunnel"],
      ["south_crackridge_wilds", "altar_of_trader"],
      ["south_crackridge_wilds", "crackridge_anchorage"],
      ["oresrush", "oresrush_foundry"],
      ["oresrush", "silver_mine"],
      ["silver_mine", "giffs_manse"],
      ["oresrush", "south_oresrush_wilds"]
    ],
    links: [
      { from: "crackridge_anchorage", region: "leaflands", to: "east_cropdale_trail" },
      { from: "crackridge_anchorage", region: "sundering_sea", to: "anchorage_crackridge" },
      { from: "south_oresrush_wilds", region: "leaflands", to: "south_cropdale_trail" },
      { from: "south_oresrush_wilds", region: "hinoeuma", to: "northern_ryu_sands" }
    ]
  }
};

for (const [rid, plan] of Object.entries(plans)) {
  const file = path.join(ROOT, rid + ".js");
  let src = fs.readFileSync(file, "utf8");
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  let n = 0;
  for (const [id, p] of Object.entries(plan.pos)) {
    const re = new RegExp('("id":\\s*"' + id + '"[\\s\\S]*?"pos":\\s*)\\[[^\\]]*\\]');
    if (!re.test(src)) throw new Error(rid + ": pos not found for " + id);
    src = src.replace(re, (m, pre) => pre + JSON.stringify(p).replace(",", ", "));
    n++;
  }
  if (/^  "roads":/m.test(src) || /^  "links":/m.test(src)) throw new Error(rid + ": roads/links already present");
  const roads = "  \"roads\": [" + eol + plan.roads.map((r) => "    " + JSON.stringify(r).replace(",", ", ")).join("," + eol) + eol + "  ],";
  const links = "  \"links\": [" + eol + plan.links.map((l) => "    " + JSON.stringify(l).replace(/,"/g, ", \"").replace(/":/g, "\": ")).join("," + eol) + eol + "  ],";
  const anchor = eol + "  \"story\": [";
  const idx = src.indexOf(anchor);
  if (idx < 0) throw new Error(rid + ": story anchor not found");
  src = src.slice(0, idx) + eol + roads + eol + links + src.slice(idx);
  fs.writeFileSync(file, src, "utf8");
  console.log(rid, "pos updated:", n, "roads:", plan.roads.length, "links:", plan.links.length);
}

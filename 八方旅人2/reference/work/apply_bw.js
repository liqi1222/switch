const fs = require("fs");
const ROOT = "f:/switch/八方旅人2/data/";

const data = {
  brightlands: {
    pos: {
      new_delsta: [32.1, 59.7],
      underground_waterway: [30.1, 74.3],
      diamante_estate: [36.6, 46.9],
      theater_backstage: [28.1, 52.7],
      eastern_nd_highroad: [45.7, 53.1],
      nd_flats: [36.4, 14.9],
      nd_harbor: [8.1, 17.1],
      abandoned_waterway: [27.5, 6.8],
      abandoned_village: [47.0, 14.5],
      path_to_liphia: [53.4, 11.3],
      mount_liphia: [60.6, 9.7],
      western_cb_highroad: [76.0, 49.2],
      ships_maw: [76.0, 56.5],
      southern_cb_highroad: [88.7, 50.9],
      altar_thief: [93.8, 50.0],
      clockbank: [88.3, 43.1],
      clockbank_industrial: [90.9, 39.6],
      roque_factory: [88.6, 36.0],
      old_clocktower: [97.3, 37.3],
      deserted_highroad: [34.4, 89.0],
      lostseed: [20.6, 92.2],
      lostseed_castle: [12.6, 94.4]
    },
    roads: [
      ["new_delsta", "eastern_nd_highroad"],
      ["new_delsta", "underground_waterway"],
      ["new_delsta", "theater_backstage"],
      ["new_delsta", "diamante_estate"],
      ["eastern_nd_highroad", "nd_flats"],
      ["eastern_nd_highroad", "western_cb_highroad"],
      ["nd_flats", "nd_harbor"],
      ["nd_flats", "abandoned_waterway"],
      ["nd_flats", "abandoned_village"],
      ["abandoned_village", "path_to_liphia"],
      ["path_to_liphia", "mount_liphia"],
      ["western_cb_highroad", "ships_maw"],
      ["western_cb_highroad", "southern_cb_highroad"],
      ["southern_cb_highroad", "clockbank"],
      ["southern_cb_highroad", "altar_thief"],
      ["clockbank", "clockbank_industrial"],
      ["clockbank_industrial", "roque_factory"],
      ["clockbank", "old_clocktower"],
      ["underground_waterway", "deserted_highroad"],
      ["deserted_highroad", "lostseed"],
      ["lostseed", "lostseed_castle"]
    ],
    links: [
      { from: "nd_flats", region: "winterlands", to: "southern_cape_cold_snows" },
      { from: "western_cb_highroad", region: "crestlands", to: "eastern_flamechurch_pass" }
    ]
  },
  winterlands: {
    pos: {
      frigit_isle: [4.5, 20.6],
      prison_underground_passage: [11.3, 30.1],
      frigit_isle_anchorage: [4.9, 40.4],
      cape_cold: [22.2, 67.1],
      southern_cape_cold_snows: [18.5, 86.1],
      eastern_cape_cold_snows: [45.6, 78.6],
      ruffians_hideout: [53.4, 78.2],
      western_winterbloom_snows: [44.0, 61.1],
      altar_of_the_scholarking: [44.7, 51.6],
      winterbloom: [52.1, 60.4],
      winterbloom_thieves_quarter: [53.5, 55.0],
      snowhares_den: [60.4, 60.7],
      southern_stormhail_snows: [81.6, 65.7],
      beneath_the_wall: [68.6, 68.1],
      infernal_castle: [70.5, 71.2],
      stormhail: [79.9, 51.1],
      stormhail_sacred_guard_hq: [83.3, 57.4],
      forbidden_shrine: [85.3, 54.6],
      castle_mei: [97.0, 48.8],
      castle_mei_east_tower: [97.6, 42.8],
      sacred_peak_altahe: [70.3, 30.6]
    },
    roads: [
      ["frigit_isle", "frigit_isle_anchorage"],
      ["frigit_isle_anchorage", "prison_underground_passage"],
      ["cape_cold", "southern_cape_cold_snows"],
      ["southern_cape_cold_snows", "eastern_cape_cold_snows"],
      ["eastern_cape_cold_snows", "ruffians_hideout"],
      ["eastern_cape_cold_snows", "western_winterbloom_snows"],
      ["western_winterbloom_snows", "altar_of_the_scholarking"],
      ["western_winterbloom_snows", "winterbloom"],
      ["winterbloom", "winterbloom_thieves_quarter"],
      ["winterbloom_thieves_quarter", "snowhares_den"],
      ["southern_stormhail_snows", "stormhail"],
      ["southern_stormhail_snows", "beneath_the_wall"],
      ["beneath_the_wall", "infernal_castle"],
      ["stormhail", "stormhail_sacred_guard_hq"],
      ["stormhail_sacred_guard_hq", "forbidden_shrine"],
      ["stormhail", "sacred_peak_altahe"],
      ["stormhail", "castle_mei"],
      ["castle_mei", "castle_mei_east_tower"]
    ],
    links: [
      { from: "southern_cape_cold_snows", region: "brightlands", to: "nd_flats" },
      { from: "eastern_cape_cold_snows", region: "crestlands", to: "eastern_flamechurch_pass" },
      { from: "southern_stormhail_snows", region: "crestlands", to: "northern_montwise_pass" }
    ]
  }
};

for (const [region, d] of Object.entries(data)) {
  const file = ROOT + region + ".js";
  let text = fs.readFileSync(file, "utf8");
  let count = 0;
  for (const [id, p] of Object.entries(d.pos)) {
    const re = new RegExp(`("id": "${id}",[\\s\\S]*?"pos": )\\[[^\\]]*\\]`);
    if (!re.test(text)) throw new Error(`${region}: 找不到 ${id} 的 pos`);
    text = text.replace(re, `$1[${p.join(", ")}]`);
    count++;
  }
  if (/\n  "roads": /.test(text)) throw new Error(`${region}: 已存在 roads`);
  const roads = d.roads.map((r) => `    ${JSON.stringify(r).replace(",", ", ")}`).join(",\n");
  const links = d.links.map((l) => `    { "from": "${l.from}", "region": "${l.region}", "to": "${l.to}" }`).join(",\n");
  const block = `  "roads": [\n${roads}\n  ],\n\n  "links": [\n${links}\n  ],\n\n  "story": [`;
  if (!text.includes('\n  "story": [')) throw new Error(`${region}: 找不到 story`);
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  text = text.replace(/\n  "story": \[/, "\n" + block.replace(/\n/g, eol));
  fs.writeFileSync(file, text, "utf8");
  console.log(region, "pos", count, "roads", d.roads.length, "links", d.links.length);
}

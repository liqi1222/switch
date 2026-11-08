const fs = require("fs");
const path = require("path");
const ROOT = "f:/switch/八方旅人2/data";

const cfg = {
  harborlands: {
    pos: {
      canalbrine: [70.2, 17.1],
      sacred_guard_ship: [79.9, 5.6],
      path_to_water_source: [69.9, 26.2],
      water_source: [79.1, 32.1],
      western_canalbrine_coast: [49.4, 17.9],
      canalbrine_bridge: [31.0, 17.1],
      lair_of_the_usurper: [38.2, 8.1],
      northern_conning_creek_coast: [26.0, 52.6],
      altar_of_the_charitable: [41.7, 49.6],
      western_conning_creek_coast: [14.5, 81.4],
      cavern_of_the_moon_and_sun: [10.7, 71.9],
      conning_creek: [25.5, 86.0],
      guard_outpost: [33.0, 77.9],
      cavern_of_the_sea_god: [40.7, 76.0],
      curious_nest: [49.0, 38.6],
      roque_island_anchorage: [92.7, 93.8],
      roque_island: [91.4, 81.9],
      roque_company: [91.4, 71.2]
    },
    roads: [
      ["canalbrine_bridge", "western_canalbrine_coast"],
      ["western_canalbrine_coast", "canalbrine"],
      ["canalbrine_bridge", "lair_of_the_usurper"],
      ["canalbrine_bridge", "northern_conning_creek_coast"],
      ["canalbrine", "path_to_water_source"],
      ["path_to_water_source", "water_source"],
      ["canalbrine", "sacred_guard_ship"],
      ["northern_conning_creek_coast", "altar_of_the_charitable"],
      ["northern_conning_creek_coast", "western_conning_creek_coast"],
      ["western_conning_creek_coast", "cavern_of_the_moon_and_sun"],
      ["western_conning_creek_coast", "conning_creek"],
      ["conning_creek", "guard_outpost"],
      ["conning_creek", "cavern_of_the_sea_god"],
      ["roque_island_anchorage", "roque_island"],
      ["roque_island", "roque_company"]
    ],
    links: [
      { from: "canalbrine_bridge", region: "hinoeuma", to: "northern_ryu_sands" },
      { from: "western_conning_creek_coast", region: "hinoeuma", to: "eastern_sai_sands" }
    ]
  },
  totohaha: {
    pos: {
      wandering_wood: [61.4, 16.1],
      rifted_rock: [65.4, 16.1],
      nameless_village: [58.7, 27.2],
      sinking_ruins: [53.3, 40.7],
      southern_nameless_traverse: [61.5, 48.5],
      cavern_of_waves: [32.3, 46.4],
      beasting_bay_anchorage: [26.2, 57.5],
      western_tropuhopu_traverse: [53.3, 61.5],
      tropuhopu: [83.9, 56.7],
      altar_of_the_huntress: [66.4, 72.0],
      north_beasting_traverse: [29.5, 73.4],
      beasting_village: [22.6, 81.6],
      tombs_of_the_wardenbeasts: [41.3, 89.2],
      path_to_the_tombs: [23.2, 91.5],
      summit_of_strife: [6.6, 94.2],
      verdant_wood: [10.6, 94.2],
      stormy_cape: [6.6, 98.2],
      moonview_cliff: [10.6, 98.2]
    },
    roads: [
      ["beasting_bay_anchorage", "north_beasting_traverse"],
      ["north_beasting_traverse", "beasting_village"],
      ["beasting_village", "path_to_the_tombs"],
      ["path_to_the_tombs", "tombs_of_the_wardenbeasts"],
      ["path_to_the_tombs", "summit_of_strife"],
      ["summit_of_strife", "verdant_wood"],
      ["verdant_wood", "stormy_cape"],
      ["stormy_cape", "moonview_cliff"],
      ["beasting_bay_anchorage", "cavern_of_waves"],
      ["beasting_bay_anchorage", "western_tropuhopu_traverse"],
      ["western_tropuhopu_traverse", "tropuhopu"],
      ["western_tropuhopu_traverse", "altar_of_the_huntress"],
      ["western_tropuhopu_traverse", "southern_nameless_traverse"],
      ["southern_nameless_traverse", "sinking_ruins"],
      ["southern_nameless_traverse", "nameless_village"],
      ["nameless_village", "wandering_wood"],
      ["wandering_wood", "rifted_rock"]
    ],
    links: []
  }
};

for (const [rid, c] of Object.entries(cfg)) {
  const file = path.join(ROOT, rid + ".js");
  let s = fs.readFileSync(file, "utf8");
  let n = 0;
  for (const [id, p] of Object.entries(c.pos)) {
    const re = new RegExp(`("id": "${id}",[\\s\\S]*?"pos": )\\[[^\\]]*\\]`);
    if (!re.test(s)) throw new Error(`${rid}: 找不到 ${id} 的 pos`);
    s = s.replace(re, `$1[${p.join(", ")}]`);
    n++;
  }
  if (/\n  "roads": /.test(s)) throw new Error(`${rid}: 已存在 roads`);
  const roads = c.roads.map((r) => `    ${JSON.stringify(r).replace(",", ", ")}`).join(",\n");
  const links = c.links.map((l) => `    ${JSON.stringify(l).replace(/,"/g, ', "').replace(/":/g, '": ')}`).join(",\n");
  let block = `  "roads": [\n${roads}\n  ],\n  "links": [${links ? "\n" + links + "\n  " : ""}],\n`;
  if (s.includes("\r\n")) block = block.replace(/\n/g, "\r\n");
  const idx = s.indexOf('\n  "story": [');
  if (idx < 0) throw new Error(`${rid}: 找不到 story`);
  s = s.slice(0, idx + 1) + block + s.slice(idx + 1);
  fs.writeFileSync(file, s, "utf8");
  console.log(rid, "pos:", n, "roads:", c.roads.length, "links:", c.links.length);
}

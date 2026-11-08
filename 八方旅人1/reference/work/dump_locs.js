// 读取 data/*.js，输出各地区地点世界坐标 JSON（供 make_geo.py 划分地区使用）
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
const run = (f) => vm.runInContext(fs.readFileSync(path.join(ROOT, "data", f), "utf8").replace(/^\uFEFF/, ""), ctx, { filename: f });
run("core.js");
fs.readdirSync(path.join(ROOT, "data"))
  .filter((f) => f.endsWith(".js") && f !== "core.js" && f !== "global.js")
  .forEach((f) => { try { run(f); } catch (e) { console.error(f, e.message); } });

const out = {};
for (const [id, r] of Object.entries(ctx.window.OT2.regions)) {
  out[id] = (r.locations || [])
    .filter((l) => Array.isArray(l.wpos) && l.wpos.length === 2)
    .map((l) => ({ id: l.id, name: l.name, type: l.type, w: l.wpos.map(Number) }));
}
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(out), "utf8");
else process.stdout.write(JSON.stringify(out));

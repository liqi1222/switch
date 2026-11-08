window.OT2 = window.OT2 || {
  regions: {},
  details: {},
  access: {},
  global: null,
  addRegion(region) {
    if (!region || !region.id) throw new Error("addRegion: missing id");
    this.regions[region.id] = region;
  },
  addDetail(regionId, map) {
    if (!regionId || !map) throw new Error("addDetail: missing regionId or data");
    this.details[regionId] = Object.assign(this.details[regionId] || {}, map);
  },
  addAccess(regionId, map) {
    if (!regionId || !map) throw new Error("addAccess: missing regionId or data");
    this.access[regionId] = Object.assign(this.access[regionId] || {}, map);
  },
  setGlobal(data) {
    this.global = data;
  }
};

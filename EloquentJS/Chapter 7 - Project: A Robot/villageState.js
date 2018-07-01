const roadGraph = require('./roadGraph');

module.exports = class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) return this;
    const parcels = this.parcels.map((p) => {
      if (this.place !== p.place) return p;
      return {
        place: destination,
        address: p.address,
      };
    }).filter(p => p.place !== p.address);
    return new VillageState(destination, parcels);
  }
};

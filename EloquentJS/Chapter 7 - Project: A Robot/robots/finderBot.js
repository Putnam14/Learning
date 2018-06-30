const findRoute = require('../pathFind');
const roadGraph = require('../roadGraph');

module.exports = function goalOrientedRobot({ place, parcels }, route) {
  let rt = route;
  if (rt.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) {
      rt = findRoute(roadGraph, place, parcel.place);
    } else {
      rt = findRoute(roadGraph, place, parcel.address);
    }
  }

  return { direction: rt[0], memory: rt.slice(1) };
};

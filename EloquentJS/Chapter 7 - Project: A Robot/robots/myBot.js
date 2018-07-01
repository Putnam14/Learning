const findRoute = require('../pathFind');
const roadGraph = require('../roadGraph');

module.exports = function goalOrientedRobot({ place, parcels }, route) {
  let rt = route;
  let rt2 = (parcels.length > 1);
  if (rt.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) {
      rt = findRoute(roadGraph, place, parcel.place); // Pick up the next parcel
    } else {
      rt = findRoute(roadGraph, place, parcel.address);
      if (rt2) {
        if (parcels[1].place !== place) {
          rt2 = findRoute(roadGraph, place, parcels[1].place);
          if (rt2.length < rt.length) rt = rt2; // Can I pick up a package in fewer moves?
        }
      }
    }
  }

  return { direction: rt[0], memory: rt.slice(1) };
};

const VillageState = require('./villageState');
const randomPick = require('./randomPick');
const roadGraph = require('./roadGraph');
const runRobot = require('./runRobot');
// const randomBot = require('./robots/randomRobot');
const routeBot = require('./robots/routeRobot');

VillageState.random = function randomVillageState(parcelCount = 5) {
  const parcels = [];
  for (let i = 0; i < parcelCount; i += 1) {
    const address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address);
    parcels.push({ place, address });
  }
  return new VillageState('Post Office', parcels);
};

// runRobot(VillageState.random(), randomBot);
runRobot(VillageState.random(), routeBot, []);

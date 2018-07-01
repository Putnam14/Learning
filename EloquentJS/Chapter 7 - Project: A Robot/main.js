const VillageState = require('./villageState');
const randomPick = require('./randomPick');
const roadGraph = require('./roadGraph');
const runRobot = require('./runRobot');
// const randomBot = require('./robots/randomRobot');
const routeBot = require('./robots/routeRobot');
const finderBot = require('./robots/finderBot');
const myBot = require('./robots/myBot');
// const findRoute = require('./pathFind');

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
// runRobot(VillageState.random(), routeBot, []);
runRobot(VillageState.random(), finderBot, []);

function compareBots(robot1, memory1, robot2, memory2, turns) {
  let r1 = 0;
  let r2 = 0;
  for (let i = 0; i < turns; i += 1) {
    const randState = VillageState.random();
    r1 += runRobot(randState, robot1, memory1);
    r2 += runRobot(randState, robot2, memory2);
  }
  const r1s = r1 / turns;
  const r2s = r2 / turns;
  const best = Math.min(r1s, r2s);
  const slow = Math.max(r1s, r2s);
  const perc = Math.floor((1 - best / slow) * 100);
  console.log(`Robot number one took ${r1s} turns on average.`);
  console.log(`Robot two took ${r2s} turns on average`);
  console.log(`Fastest was ${perc}% faster.`);

}

compareBots(finderBot, [], myBot, [], 5000);

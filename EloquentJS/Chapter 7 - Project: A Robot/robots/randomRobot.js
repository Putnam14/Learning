const randomPick = require('../randomPick');
const roadGraph = require('../roadGraph');

module.exports = function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
};

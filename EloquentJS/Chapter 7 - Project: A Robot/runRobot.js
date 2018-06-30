module.exports = function runRobot(state, robot, memory) {
  let curr = state;
  let mem = memory;
  let turn = 0;
  do {
    const action = robot(curr, mem);
    curr = curr.move(action.direction);
    mem = action.memory;
    // console.log(`Moved to ${action.direction}`);
    turn += 1;
  } while (curr.parcels.length !== 0);
  return turn;
};

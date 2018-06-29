const mailRoute = require('../routes/mailRoute');

module.exports = function routeBot(state, memory) {
  let mem = memory;
  if (mem.length === 0) mem = mailRoute;
  return { direction: mem[0], memory: mem.slice(1) };
};

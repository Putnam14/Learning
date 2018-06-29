const buildGraph = require('./buildGraph');
const roads = require('./roads');

const roadGraph = buildGraph(roads);

module.exports = roadGraph;

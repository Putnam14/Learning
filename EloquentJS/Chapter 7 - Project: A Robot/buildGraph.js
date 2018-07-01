module.exports = function buildGraph(edges) {
  const graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  edges.map(r => r.split('-')).forEach(([from, to]) => {
    addEdge(from, to);
    addEdge(to, from);
  });
  return graph;
};

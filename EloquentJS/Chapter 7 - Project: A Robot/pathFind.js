module.exports = function findRoute(graph, from, to) {
  const work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i += 1) {
    const { at, route } = work[i];
    graph[at].forEach((p) => {
      if (!(p === to)) {
        if (!work.some(w => w.at === p)) {
          work.push({ at: p, route: route.concat(p) });
        }
      }
      return route.concat(p);
    });
  }
};

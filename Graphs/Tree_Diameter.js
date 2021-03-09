// O(N) TIME DFS
var treeDiameter = function (edges) {
  const store = {};
  edges.forEach(([a, b]) => {
    if (store[a]) store[a].push(b);
    else store[a] = [b];
    if (store[b]) store[b].push(a);
    else store[b] = [a];
  });

  let res = 0;
  const seen = new Set();

  const dfs = (node) => {
    seen.add(node);
    let [first, second] = [0, 0];
    for (let child of store[node]) {
      if (seen.has(child)) continue;
      const pathLength = dfs(child);
      if (pathLength > first) {
        second = first;
        first = pathLength;
      } else if (pathLength <= first && pathLength > second)
        second = pathLength;
    }
    res = Math.max(res, first + second + 1);
    return 1 + first;
  };

  dfs(0);
  return res - 1;
};

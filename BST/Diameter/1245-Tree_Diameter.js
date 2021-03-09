/////// Subtree of Another Tree//////

/* Given an undirected tree, return its diameter: the number of edges in a longest path in that tree.

The tree is given as an array of edges where edges[i] = [u, v] is a bidirectional edge between nodes u and v.  
Each node has labels in the set {0, 1, ..., edges.length}.
*/

let edges = [
  [0, 1],
  [0, 2],
]; // 2

var treeDiameter = function (edges) {
  const store = {};
  edges.forEach(([a, b]) => {
    if (store[a]) {
      store[a].push(b);
    } else {
      store[a] = [b];
    }
    if (store[b]) {
      store[b].push(a);
    } else {
      store[b] = [a];
    }
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

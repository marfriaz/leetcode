//////// Cycle in Grapj ///////
/* 
Given a list of EDGES representing an unweighted, directed graph with at least one node.
Write a function taht returns a boolean representing whether the given graph contains a cycle. 

A cycle = Any number of vertices, including just one vertex, that are connected in a closed chain.
A chain of at least one vertex in which the first vertex is the same as the last. 

- Vertex: a node
- Edge: connection between nodes/ vertices; 
*/

// THIS PROBLEM HAS TO DO WITH VERTEXES
// Time Complexity: O(N^2) | Space Complexity: O(N)
function cycleInGraph(edges) {
  const numberOfNodes = edges.length;
  const visited = {};
  // Whether node has been visited

  const currentlyInStack = new Array(numberOfNodes).fill(false);
  // In recursion stack, if in stack and we reached it from a different node
  // that tells us that we have a cycle edge as node must be ancestor of current node

  for (let node = 0; node < numberOfNodes; node++) {
    if (visited[node]) continue;
    const containsCycle = isNodeInCycle(node, edges, visited, currentlyInStack);

    if (containsCycle) return true;
  }

  return false;
}

// DFS
function isNodeInCycle(node, edges, visited, currentlyInStack) {
  visited[node] = true;
  currentlyInStack[node] = true;

  const neighbors = edges[node];

  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      const containsCycle = isNodeInCycle(
        neighbor,
        edges,
        visited,
        currentlyInStack
      );
      if (containsCycle) return true;
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }
  currentlyInStack[node] = false;
  return false;
}

let edges = [[1, 3], [2, 3, 4], [0], [], [2, 5], []];

console.log(cycleInGraph(edges));

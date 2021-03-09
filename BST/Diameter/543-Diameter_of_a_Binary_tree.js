// DFS O(N), O(N)

// Any path can be written as two arrows (in different directions) from some node, where an
// arrow is a path that starts at some node and only travels down to child nodes.
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    // update diameter at every node
    diameter = Math.max(diameter, left + right);

    // Usual way for calculating depth
    return 1 + Math.max(left, right);
  };

  dfs(root);

  return diameter;
};

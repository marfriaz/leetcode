//////// Lowest Common Ancestor of a Binary Tree ///////
/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // p and q are in the right subtree
  if (!left) {
    return right;
  }

  // p and q are in the left subtree
  if (!right) {
    return left;
  }

  // p is in one side and q is in the other
  return root;
};

console.log(
  lowestCommonAncestor(
    [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4],
    (p = 5),
    (q = 1)
  )
); // 3

// Input: (root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), (p = 5), (q = 4);
// Output: 5;

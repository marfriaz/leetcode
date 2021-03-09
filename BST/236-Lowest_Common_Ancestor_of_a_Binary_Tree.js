//////// Lowest Common Ancestor of a Binary Tree ///////
/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes p and q as the lowest node in 
T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
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

//////// Symmetric Tree ///////
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
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var isSymmetric = function (root) {
  if (root == null) return true;

  return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
  // If both sub trees are empty
  if (left == null && right == null) {
    return true;
  }
  // If only one of the sub trees are empty
  if (left == null || right == null) {
    return false;
  }
  // If the values dont match up
  if (left.val !== right.val) {
    return false;
  }

  // Check both subtrees but travelled in a mirrored/symmetric fashion
  // (one goes left, other goes right)  and make sure they're both symmetric
  return (
    symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left)
  );
}

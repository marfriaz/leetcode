//////// Subtree of Another Tree//////

/* Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. 
A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var isSubtree = function (s, t) {
  if (!s) {
    return !t;
  }
  return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isEqual(root1, root2) {
  if (!root1 || !root2) {
    return !root1 && !root2;
  }
  if (root1.val !== root2.val) {
    return false;
  }
  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}

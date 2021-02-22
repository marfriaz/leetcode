//////// 98-Validate_Binary_Search_Tree ///////
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
var isValidBST = function (root, min = null, max = null) {
  // base case
  if (!root) {
    return true;
  }
  // BST = left subtree < root
  if (min && root.val <= min.val) {
    return false;
  }
  // BST = right subtree > root
  if (max && root.val >= max.val) {
    return false;
  }
  // until no more root
  // Checking left < root (max) and right > root (min)
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

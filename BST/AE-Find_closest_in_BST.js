// O(log(n)) time | O(1) space
function findClosestValueInBst(tree, target) {
  let currentNode = tree;

  let closest = tree.value;

  while (currentNode !== null) {
    // Closest = least difference
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

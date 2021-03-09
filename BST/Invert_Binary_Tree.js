// O(n) time  | O(n) space
function invertBinaryTree(tree) {
  let queue = [tree];

  while (queue.length) {
    const current = queue.shift();

    if (!current) {
      continue;
    }
    swapLeftAndRight(current);
    invertBinaryTree(current.left);
    invertBinaryTree(current.right);
  }
}

function swapLeftAndRight(tree) {
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

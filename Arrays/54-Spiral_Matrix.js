//////// Spiral Matrix ///////

/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

// O(n) time | O(n) space (because of output array)

var spiralOrder = function (matrix) {
  // Function needs to know which direction to traverse
  // Traverse through columns, when length is met, traverse down
  // Traverse through rows, when length is met, traverse left

  // columns
  let left = 0;
  let right = matrix[0].length - 1;

  // rows
  let top = 0;
  let bottom = matrix.length - 1;

  let pos = 0;
  let spiral = [];

  while (left <= right && top <= bottom) {
    if (pos === 0) {
      for (let i = left; i <= right; i++) {
        spiral.push(matrix[top][i]);
      }
      top++;
    } else if (pos === 1) {
      for (let i = top; i <= bottom; i++) {
        spiral.push(matrix[i][right]);
      }
      right--;
    } else if (pos === 2) {
      for (let i = right; i >= left; i--) {
        spiral.push(matrix[bottom][i]);
      }
      bottom--;
    } else {
      for (let i = bottom; i >= top; i--) {
        spiral.push(matrix[i][left]);
      }
      left++;
    }

    pos = (pos + 1) % 4;
  }
  return spiral;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder(matrix));

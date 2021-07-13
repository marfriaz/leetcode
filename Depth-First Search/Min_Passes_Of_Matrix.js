//////// Minimum Passes of Matrix ///////
/* 
Return minimum number of passes required to convert all negative integers in the
Matrix to positive integers.
- A negative can only be converted to a positive if 1+ adjacent elements are positive
- Up, down, left or right
*/

// Time Complexity: O(N^2) | Space Complexity: O(N)
// NOT COMPLETE
function minimumPassesOfMatrix(matrix, passes = 1) {
  // DFS and check if integer is negative
  // Check neighbors and convert
  //   console.log("YO", matrix);
  //   console.log("PASSES", passes);
  let repeat = false;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] < 0) {
        if (oneNeighborPositive(matrix, row, col)) {
          matrix[row][col] = Math.abs(matrix[row][col]);
        } else {
          repeat = true;
        }
      }
    }
  }

  if (repeat === true) {
    passes++;
    minimumPassesOfMatrix(matrix, passes);
  }

  return passes + 1;
}

function oneNeighborPositive(matrix, row, col) {
  if (
    isPositive(matrix, row - 1, col) ||
    isPositive(matrix, row + 1, col) ||
    isPositive(matrix, row, col - 1) ||
    isPositive(matrix, row, col + 1)
  ) {
    return true;
  }

  return false;
}

function isPositive(matrix, row, col) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    matrix[row][col] === 0
  ) {
    return false;
  }

  if (matrix[row][col] > 0) {
    return true;
  }

  return false;
}

let matrix = [
  [0, -1, -3, 2, 0],
  [1, -2, -5, -1, -3],
  [3, 0, 0, -4, -1],
]; // 3

console.log(minimumPassesOfMatrix(matrix));

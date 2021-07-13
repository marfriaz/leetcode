//////// Remove Islands ///////
/* 
 Given a 2-D array (matrix), where 1's = islands and 0's = water,
 Remove 1's that are connected and NOT touching the border

- You can think of islands as patches of black that don't touch the border of the matrix.
*/

//  O(wh) time (width and height of matrix) | O(N) space
// Plan: Find ones connected to border, and convert to twos.
// Get their neighbors and and do the same^
// At the end, convert remaining 1's to 0's and 2's to 1's

function removeIslands(matrix) {
  let rows = matrix.length;

  // DFS- find all 1's connected to border
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let rowIsBorder = row === 0 || row === rows - 1;
      let colIsBorder = col === 0 || col === matrix[row].length - 1;
      let isOnBorder = rowIsBorder || colIsBorder;

      if (!isOnBorder) continue;
      if (matrix[row][col] !== 1) continue;

      // During DFS, find all 1's that are connected to original position on border,
      // and change from 1 to 2
      changeOnesConnectedToBordertoTwos(matrix, row, col);
    }
  }

  // Remove 1's that are guaranteed to be islands
  // Change 2's back to 1's, since they're non-islands
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        matrix[row][col] = 0;
      } else if (matrix[row][col] === 2) {
        matrix[row][col] = 1;
      }
    }
  }

  return matrix;
}

function changeOnesConnectedToBordertoTwos(matrix, startRow, startCol) {
  let stack = [[startRow, startCol]];

  while (stack.length > 0) {
    const currentPosition = stack.pop();
    const [currentRow, currentCol] = currentPosition;

    matrix[currentRow][currentCol] = 2;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);
    // Get all neighbors in bounds

    for (const neighbor of neighbors) {
      // Only add neighbors that = 1 or 2
      const [row, col] = neighbor;

      if (matrix[row][col] != 1) continue;
      stack.push(neighbor);
    }
  }
}

function getNeighbors(matrix, row, col) {
  const neighbors = [];
  const numRows = matrix.length;
  const numCols = matrix[row].length;

  // CHECK IN BOUNDS
  if (row - 1 >= 0) neighbors.push([row - 1, col]); // UP
  if (row + 1 < numRows) neighbors.push([row + 1, col]); // DOWN
  if (col - 1 >= 0) neighbors.push([row, col - 1]); // LEFT
  if (col + 1 < numCols) neighbors.push([row, col + 1]); // RIGHT

  return neighbors;
}

let matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

console.log(removeIslands(matrix));

//////// River Sizes ///////
/* 
 Given a 2-D array (matrix), where 1's = rivers and 0's = lands,
 Return an array of sizes of all rivers

*/

//  O(wh) time (width and height of matrix) | O(N) space
function riverSizes(matrix) {
  let rivers = [];

  // DFS- find all 1's
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        // During DFS, find all neighbors of that 1, and return count

        let riverSize = checkNeighbors(matrix, row, col);
        rivers.push(riverSize);
      }
    }
  }

  return rivers;
}

function checkNeighbors(matrix, row, col) {
  if (
    // if went above grid
    row < 0 ||
    // if went below grid
    row >= matrix.length ||
    // if went to left of grid
    col < 0 ||
    // if went right of grid
    col >= matrix[row].length ||
    // since water, stop traversing
    matrix[row][col] === 0
  ) {
    return 0;
  }
  let count = 1;

  matrix[row][col] = 0;

  count += checkNeighbors(matrix, row - 1, col);
  count += checkNeighbors(matrix, row + 1, col);
  count += checkNeighbors(matrix, row, col - 1);
  count += checkNeighbors(matrix, row, col + 1);

  return count;
}

let matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]; // [ 2, 1, 5, 2, 2 ]

console.log(riverSizes(matrix));

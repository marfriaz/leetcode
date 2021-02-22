//////// Number of Islands ///////
/* Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water. 
*/

const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]; // Output = 1

// recursion with DFS
// Time complexity : O(M x N) where M is the number of rows and N is the number of columns.

var numIslands = function (grid) {
  // Edge cases: error checking at the beginning
  if (grid === null || grid.length === 0) {
    return 0;
  }

  let count = 0;

  function dfs(grid, column, row) {
    if (
      // if went above grid
      row < 0 ||
      // if went below grid
      row >= grid.length ||
      // if went to left of grid
      column < 0 ||
      // if went right of grid
      column >= grid[row].length ||
      // since water, stop traversing
      grid[row][column] === "0"
    ) {
      return 0;
    }
    // otherwise, if index we're at is = '1', set it to 0
    // sink it so that we dont revisit it
    // and then visit all adjacent neighbors
    // mark as a visited node with 0
    grid[row][column] = "0";
    // down
    dfs(grid, row + 1, column);
    // up
    dfs(grid, row - 1, column);
    // to the right
    dfs(grid, row, column + 1);
    // neighbor to the left
    dfs(grid, row, column - 1);
    // after successfully sinking all neighbors, return 1
    // otherwise, if index we're at is = '1', set it to 0
    // sink it so that we dont revisit it
    // and then visit all adjacent neighbors
    // mark as a visited node with 0
    if (grid[column][row] === "1") {
      grid[column][row] = "0";
    } else {
      // else stop traversing, move onto next one
      return 0;
    }

    dfs(grid, column + 1, row);
    dfs(grid, column - 1, row);
    dfs(grid, column, row + 1);
    dfs(grid, column, row - 1);
  }
  // traverse entire matrix

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // DFS = make sure we're not double counting 1's as individual islands
      // want to visit all their neighbors, sink that individual island, so that we don't double count 1's
      // access things in grid, and indices of grid
      // pass grid, and indices we're on in grid
      if (grid[i][j] === "1") {
        count++;
        // dfs that particular node
        dfs(grid, i, j);
      }
    }
  }

  return count;
};

console.log(numIslands2(grid));

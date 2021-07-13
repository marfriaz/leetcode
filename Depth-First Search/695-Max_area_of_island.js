//////// Max Area of Island ///////
/* 
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's 
(representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)
*/

// Time Complexity: O(m*n), we possibly visit all nodes
// Space Complexity: O(m*n), call stack can go as deep as the # of nodes
var maxAreaOfIsland = function (grid) {
  if (grid.length == 0) {
    return 0;
  }

  let max = 0;
  let height = grid.length;
  let width = grid[0].length;

  const dfs = (r, c) => {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] === 0
    ) {
      return 0;
    }

    let count = 1;

    // in the process, change the 1 to a zero
    grid[r][c] = 0;

    count += dfs(r - 1, c);
    count += dfs(r + 1, c);
    count += dfs(r, c - 1);
    count += dfs(r, c + 1);

    return count;
  };

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] == 1) {
        max = Math.max(max, dfs(row, col, grid));
      }
    }
  }

  return max;
};

// Helper function

let grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]; // 6

console.log(maxAreaOfIsland(grid));

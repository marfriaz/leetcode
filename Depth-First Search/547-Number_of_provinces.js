//////// Number of Provinces ///////
/* There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected directly with city c, 
then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the 
ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.
*/

// THIS PROBLEM HAS TO DO WITH VERTEXES
// Time Complexity: O(N^2) | Space Complexity: O(N)
var findCircleNum = function (isConnected) {
  // https://www.coursera.org/learn/algorithms-part2/lecture/Dzl65/connected-components
  // please see how BFS and connected component algorithms are explained

  let count = 0; // conected component
  var visited = {};

  let height = isConnected.length;

  const dfs = (col) => {
    let width = isConnected[col].length; // row

    for (let row = 0; row < width; row++) {
      if (isConnected[col][row] == 1 && !visited[row]) {
        visited[row] = true;
        dfs(row); // check rest or row
      }
    }
  };

  // iterate over
  for (let col = 0; col < height; col++) {
    // if vertex not visited we do dfs for this vertex
    // after we are done, we up count by 1, because we are done with count
    // and new count will have another count number, up by 1
    if (!visited[col]) {
      dfs(col);
      count++;
    }
  }

  return count;
};

let isConnected = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]; // 3

console.log(findCircleNum(isConnected));

////////////
////////////
////////////
///// INCORRECT, just needed to check rows ////////////
////////////

var findCircleNum2 = function (isConnected) {
  let height = isConnected[0].length;
  let width = isConnected.length;

  let count = width;

  const dfs = (r, c) => {
    if (r < 0 || r >= width || c < 0 || c >= height) {
      return 0;
    }

    if (isConnected[r][c] === 0) {
      return 0;
    } else {
      isConnected[r][c] = 0;
      dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r + 1, c - 1);
    }
  };

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (isConnected[r][c] === 1) {
        count -= dfs(r, c);
      }
    }
  }
  return count;
};

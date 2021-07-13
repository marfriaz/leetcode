//////// Number of Provinces ///////
/* There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected directly with city c, 
then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the 
ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

GRAPHS
let isConnected = [
    a  b  c
  a[1, 0, 0],
  b[0, 1, 0],
  c[0, 0, 1],

]; // 3


*/
// DFS
// Time O (N^2) | Space O(N)

// TO FIND THE NUMBER OF CONNECTED COMPONENTS IN AN UNDIRECTED GRAPH, 
//WE CAN USE A DFS ON EACH NODE
// WE KEEP TRACK OF WHICH NODE HAS ALREADY BEEN VISITED
  // IF NOT ALREADY VISITED, WE DO A DFS ON THAT NODE AND MARK IT'S 
  //NEIGHBORS AS VISITED
// ESSENTIALLY, WE ARE DIGGING AS DEEP AS POSSIBLE IN THE LEVELS OF THE GRAPH, 
//FOR THE STARTING NODE 
// LEAVING IT'S OTHER DIRECT NEIGHBORS TO BE VISITED LATER
var findCircleNum = function (isConnected) {
  let count = 0; // conected component
  var visited = {};

  // ALTERNATIVELY COULD USE
  // let visited = new Array(isConnected.length).fill(0)

  let rows = isConnected.length;

  const dfs = (row) => {
    let cols = isConnected[row].length; // row

    // ITERATE OVER NEIGHBOR'S NEIGHBORS
    for (let col = 0; col < cols; col++) {
      // if potent province = 1 and it hasnt been visited, mark column as visited
      // Visited = verified that it is a province (visited column of row)
      // VISIT NEIGHBORS, RATHER THAN SIBLINGS
      if (isConnected[row][col] == 1 && !visited[col]) {
        visited[col] = true;
        console.log(visited);
        // Graph (nxn) => col = row
        console.log(col);
        dfs(col); // check rest of neighbors of this neighbor, rather than siblings
      }
    }
  };

  // iterate over rows (max count provinces = rows = grid.length )
  // ITERATE OVER MATRIX
  for (let row = 0; row < rows; row++) {
    // if vertex not visited we do dfs for this vertex
    // after we are done, we up count by 1, because we are done with count
    // and new count will have another count number, up by 1
    // visit a neigbor, then their neighbors, rather than siblings
    if (!visited[row]) {
      dfs(row);
      // WE INCREMENT THE COUNT OF CONNECTED COMPONENTS FOR EVERY NEW STARTING NODE
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

//////////////////
//// BFS /////
var findCircleNum7 = function (isConnected) {
  let visited = {};
  let count = 0;
  let queue = [];

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      queue.push(i);
      while (queue.length) {
        let s = queue.shift();
        visited[s] = true;
        for (let j = 0; j < isConnected.length; j++) {
          if (isConnected[s][j] && !visited[j]) {
            queue.push(j);
          }
        }
      }
      count++;
    }
  }
  return count;
};

console.log(findCircleNum7(isConnected));

// Switched rows and cols

var findCircleNum3 = function (isConnected) {
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
        // Graph (nxn) => row = col
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

///// INCORRECT, just needed to check rows

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

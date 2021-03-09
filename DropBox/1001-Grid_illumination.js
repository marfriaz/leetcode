//////// Grid Illumination ///////

/*

You are given a grid of size N x N, and each cell of this grid has a lamp that is initially turned off.

You are also given an array of lamp positions lamps, where lamps[i] = [rowi, coli] 
indicates that the lamp at grid[rowi][coli] is turned on. When a lamp is turned on, 
it illuminates its cell and all other cells in the same row, column, or diagonal.

Finally, you are given a query array queries, where queries[i] = [rowi, coli]. 
For the ith query, determine whether grid[rowi][coli] is illuminated or not. 
After answering the ith query, turn off the lamp at grid[rowi][coli] and 
its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a 
side or corner with grid[rowi][coli].

Return an array of integers ans, where ans[i] should be 1 if the lamp in the ith 
query was illuminated, or 0 if the lamp was not.

*/

// O(L + Q) Time and the space complexity is O(L)

var gridIllumination = function (N, lamps, queries) {
  const rowMap = new Map();
  const colMap = new Map();
  const hillMap = new Map();
  const daleMap = new Map();
  const litMap = new Map();

  const direction = [
    [0, 0],
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [1, 1],
  ];

  //map what areas are lit
  for (let [x, y] of lamps) {
    insert(rowMap, x);
    insert(colMap, y);
    insert(hillMap, x + y);
    insert(daleMap, x - y);
    litMap.set(N * x + y, true);
  }

  const result = new Array(queries.length).fill(0);
  let count = 0; // prob could've iterated with queries
  for (let [x, y] of queries) {
    if (
      rowMap.get(x) > 0 ||
      colMap.get(y) > 0 ||
      hillMap.get(x + y) > 0 ||
      daleMap.get(x - y) > 0
    ) {
      result[count] = 1;
    }
    for (let [i, j] of direction) {
      let newX = x + i;
      let newY = y + j;
      if (litMap.has(N * newX + newY)) {
        decrease(rowMap, newX);
        decrease(colMap, newY);
        decrease(hillMap, newX + newY);
        decrease(daleMap, N * newX + newY);
        litMap.delete(N * newX + newY);
      }
    }
    count++;
  }
  return result;
};

const insert = (map, value) => {
  if (map.has(value)) {
    map.set(value, map.get(value) + 1);
  } else {
    map.set(value, 1);
  }
};

const decrease = (map, value) => {
  if (map.has(value)) {
    map.set(value, map.get(value) - 1);
  }
};

let N = 5;
let lamps = [
  [0, 0],
  [4, 4],
];
let queries = [
  [1, 1],
  [1, 0],
];
console.log(gridIllumination(N, lamps, queries)); // Output: [1, 0];

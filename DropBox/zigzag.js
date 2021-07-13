//////// Zigzag ///////
/* 
The string "PAYPALISHIRING" is written on a given number of rows likes this

[[P A H N]
 [APLSIIG]
 [Y I R  ]]
 
 And then read line by line: "PAHNAPLSSIGYIR"

 Write the code that will make a string and make this conversion given a number of rows
*/

var convert = function (s, numRows) {
  if (numRows < 2) {
    return s;
  }
  let matrix = [];
  // set matrix with empty arrays for filling
  for (let i = 0; i < numRows; i++) {
    matrix.push([]);
  }

  let letterIndex = 0; // letter of string
  let row = 0; // Row that we're on: height = rows
  let res = ""; // new String from new matrix

  // fill matrix
  while (letterIndex < s.length) {
    while (row < matrix.length && letterIndex < s.length) {
      matrix[row].push(s[letterIndex]); // down
      // console.log("down", matrix);
      row++;
      letterIndex++;
    }
    row = row - 2;
    while (row >= 0 && letterIndex < s.length) {
      matrix[row].push(s[letterIndex]); // up
      // console.log("up", matrix);
      row--;
      letterIndex++;
    }
    row = row + 2;
  }

  // Create result string from new matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      res += matrix[i][k];
    }
  }
  return res;
};

console.log(convert("PAYPALISHIRING", 3));

//////////////////// MINE IS INCORRECT RIGHT NOW ////////////////////////////////////
const zigzag = (s, numRows) => {
  let graph = [];

  for (let i = 0; i < numRows; i++) {
    graph.push([]);
  }

  let column = 0;
  let row = 0;

  let upDirection = false;

  for (let i = 0; i <= s.length + 1; i++) {
    graph[row][column] = s[i];

    if (i === numRows) {
      column++;
      upDirection = !upDirection;
    }

    if (row)
      if (row < numRows - 1) {
        row++;
      } else {
        row = 0;
      }
  }
  //   console.table(graph);
};

console.log(zigzag("PAYPALISHIRING", 3));

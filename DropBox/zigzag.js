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
  var matrix = [];
  // set matric with empty arrays for filling
  for (var i = 0; i < numRows; i++) {
    matrix.push([]);
  }

  var k = 0; // letter of string
  var i = 0; // Row that we're on: height = rows
  var res = ""; // new String from new matrix

  // fill matrix
  while (k < s.length) {
    while (i < matrix.length && k < s.length) {
      matrix[i].push(s[k]); // down
      console.log("down", matrix);
      i++;
      k++;
    }
    i = i - 2;
    while (i >= 0 && k < s.length) {
      matrix[i].push(s[k]); // up
      console.log("up", matrix);
      i--;
      k++;
    }
    i = i + 2;
  }

  // Create result string from new matrix
  for (var i = 0; i < matrix.length; i++) {
    for (var k = 0; k < matrix[i].length; k++) {
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

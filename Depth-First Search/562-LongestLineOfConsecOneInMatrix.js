////////  Longest Line of Consecutive One in Matrix ///////

/* Given an m x n binary matrix mat, return the length of the longest line of consecutive one in the matrix.

The line could be horizontal, vertical, diagonal, or anti-diagonal.

*/

// MINE IS WRONG- CORRECT DOWN BELOW
var longestLine = function (mat) {
  // search for 1
  // dfs

  let longest = 0;

  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[row].length; col++) {
      if (mat[row][col] === 1) {
        let currCount = Math.max(
          dfsDiagnol(mat, row, col),
          dfsHorizontal(mat, row, col),
          dfsVertical(mat, row, col)
        );
        longest = longest > currCount ? longest : currCount;
      }
    }
  }
  return longest;
};

function dfsDiagnol(mat, row, col) {
  if (
    row < 0 ||
    row > mat.length ||
    col < 0 ||
    col > mat[row].length ||
    mat[row][col] !== 1
  ) {
    return 0;
  }

  let count = 1;

  count += dfsDiagnol(mat, row - 1, col + 1);
  count += dfsDiagnol(mat, row + 1, col - 1);

  return count;
}

function dfsHorizontal(mat, row, col) {
  if (
    row < 0 ||
    row > mat.length ||
    col < 0 ||
    col > mat[row].length ||
    mat[row][col] !== 1
  ) {
    return 0;
  }

  let count = 1;

  count += dfsHorizontal(mat, row, col - 1);
  count += dfsHorizontal(mat, row, col + 1);

  return count;
}

function dfsVertical(mat, row, col) {
  if (
    row < 0 ||
    row > mat.length ||
    col < 0 ||
    col > mat[row].length ||
    mat[row][col] !== 1
  ) {
    return 0;
  }

  let count = 1;

  count += dfsVertical(mat, row - 1, col);
  count += dfsVertical(mat, row + 1, col);

  return count;
}

let mat = [
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 1],
]; // 3

// console.log(longestLine(mat));

// LEETCODE CORRECT
// THis solution doesn't repeat itself, mine does as it dfs's for every cell
var longestLine2 = function (mat) {
  //check if M is empty
  if (mat.length == 0) return 0;
  // get dimensions
  let row = mat.length,
    col = mat[0].length;
  let ones = 0;

  // go horizontal to count ones
  for (let i = 0; i < row; i++) {
    //count the ones here
    let count = 0;
    for (let j = 0; j < col; j++) {
      if (mat[i][j] == 1) {
        count++;
        ones = Math.max(ones, count);
      } else count = 0;
    }
  }

  //go vertical
  for (let i = 0; i < col; i++) {
    //count the ones here
    let count = 0;
    for (let j = 0; j < row; j++) {
      if (mat[j][i] == 1) {
        count++;
        ones = Math.max(ones, count);
      } else count = 0;
    }
  }

  //go upper diagonal
  for (let i = 0; i < row || i < col; i++) {
    //count the ones here
    let count = 0;
    for (let x = 0, y = i; x < row && y < col; x++, y++) {
      if (mat[x][y] == 1) {
        count++;
        ones = Math.max(ones, count);
      } else count = 0;
    }
  }
  //lower diagonal
  for (let i = 0; i < row || i < col; i++) {
    //count the ones here
    let count = 0;
    for (let x = i, y = 0; x < row && y < col; x++, y++) {
      if (mat[x][y] == 1) {
        count++;
        ones = Math.max(ones, count);
      } else count = 0;
    }
  }
  // upper anti diagonal
  for (let i = 0; i < row || i < col; i++) {
    //count the ones here
    let count = 0;
    for (let x = 0, y = col - i - 1; x < row && y >= 0; x++, y--) {
      if (mat[x][y] == 1) {
        count++;
        ones = Math.max(ones, count);
      } else count = 0;
    }
  }
  // lower anti diagonal
  for (let i = 0; i < row || i < col; i++) {
    //count the ones here
    let count = 0;
    for (let x = i, y = col - 1; x < row && y >= 0; x++, y--) {
      if (mat[x][y] == 1) {
        count++;
        ones = Math.max(ones, count);
      } else count = 0;
    }
  }
  return ones;
};

console.log(longestLine2(mat));

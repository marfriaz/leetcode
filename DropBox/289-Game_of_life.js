//////// Game of Life ///////

/*
The board is made up of an m x n grid of cells, where each cell has an initial state: 
live (represented by a 1) or dead (represented by a 0). Each cell interacts with 
its eight neighbors (horizontal, vertical, diagonal) using the following four rules 
(taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell 
in the current state, where births and deaths occur simultaneously. 
Given the current state of the m x n grid board, return the next state.
*/

//// Differemce in checking up, down, left, right etc
var gameOfLife5 = function (board) {
  // Neighbors array to find 8 neighboring cells for a given cell

  let rows = board.length;
  let cols = board[0].length;

  let dirs = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, 1],
    [0, -1],
    [-1, 1],
  ];

  // Create a copy of the original board
  let copyBoard = [...board];

  // Iterate through board cell by cell.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // For each cell count the number of live neighbors.
      let liveNeighbors = 0;

      // checking all dirs for neighbors
      for (let dir of dirs) {
        let r = dir[0] + row;
        let c = dir[1] + col;

        // if in correct range, and = 1
        if (r < rows && r >= 0 && c < cols && c >= 0 && copyBoard[r][c] == 1) {
          liveNeighbors += 1;
        }
      }

      // Rule 1 or Rule 3
      if (
        copyBoard[row][col] == 1 &&
        (liveNeighbors < 2 || liveNeighbors > 3)
      ) {
        board[row][col] = 0;
      }
      // Rule 4
      if (copyBoard[row][col] == 0 && liveNeighbors == 3) {
        board[row][col] = 1;
      }
    }
  }
  return board;
};

////////////////////////////////////////////////
var gameOfLife = function (board) {
  // Neighbors array to find 8 neighboring cells for a given cell
  let neighbors = [0, 1, -1];

  let rows = board.length;
  let cols = board[0].length;

  // Create a copy of the original board
  let copyBoard = [...board];

  // Iterate through board cell by cell.
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // For each cell count the number of live neighbors.
      let liveNeighbors = 0;

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (!(neighbors[i] == 0 && neighbors[j] == 0)) {
            let r = row + neighbors[i];
            let c = col + neighbors[j];

            // Check the validity of the neighboring cell.
            // and whether it was originally a live cell.
            // The evaluation is done against the copy, since that is never updated.
            if (
              r < rows &&
              r >= 0 &&
              c < cols &&
              c >= 0 &&
              copyBoard[r][c] == 1
            ) {
              liveNeighbors += 1;
            }
          }
        }
      }

      // Rule 1 or Rule 3
      if (
        copyBoard[row][col] == 1 &&
        (liveNeighbors < 2 || liveNeighbors > 3)
      ) {
        board[row][col] = 0;
      }
      // Rule 4
      if (copyBoard[row][col] == 0 && liveNeighbors == 3) {
        board[row][col] = 1;
      }
    }
  }
  return board;
};

////////////////////////////////////////////////
var gameOfLife3 = function (board) {
  if (board.length === 0) {
    return board;
  }

  var checkNeighbors = function (row, col) {
    var score = -board[row][col];

    for (var r = row - 1; r <= row + 1; r++) {
      for (var c = col - 1; c <= col + 1; c++) {
        if (
          typeof board[r] !== "undefined" &&
          typeof board[r][c] !== "undefined"
        ) {
          score += Math.abs(Math.floor(board[r][c]));
        }
      }
    }
    return score;
  };

  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[0].length; c++) {
      var score = checkNeighbors(r, c);
      if (board[r][c] === 1) {
        if (score < 2 || score > 3) {
          board[r][c] = -0.5;
        }
      } else if (board[r][c] === 0) {
        if (score === 3) {
          board[r][c] = 0.5;
        }
      }
    }
  }

  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[0].length; c++) {
      board[r][c] = Math.ceil(board[r][c]);
    }
  }
};

var input = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
]; // [[1,1],[1,1]]
//  [ [ 0, 0, 0 ], [ 0, 0, 1 ], [ 0, 1, 1 ], [ 0, 0, 0 ] ]

console.log(gameOfLife5(input));

//// didnt work
var gameOfLife2 = function (board) {
  let newBoard = [];

  for (let i = 0; i < board.length; i++) {
    let boardRow = board[i];
    let newBoardRow = [];

    for (let j = 0; j < boardRow.length; j++) {
      let cell = boardRow[j];

      let upCell = board[i - 1][j] || 0;
      let downCell = board[i + 1][j] || null;
      let leftCell = boardRow[j - 1] || null;
      let rightCell = boardRow[j + 1] || null;

      let totalCell = upCell + downCell + leftCell + rightCell;
      if ((cell = 1)) {
        if (totalCell < 2 || totalCell > 3) {
          cell = 0;
        } else if (totalCell >= 2) {
          return;
        } else if (totalCell > 3) {
        }
      } else if (totalCell === 3) {
        cell = 1;
      } else {
        return;
      }
      newBoardRow.push(cell);
    }
    newBoard.push(newBoardRow);
  }

  return newBoard;

  // create a return board

  // iterate over each cell in board

  // create new boardrow
  // if conditions are met, kill or populate cell, push to new board row

  // when length of board row is met, push new board row to board

  // when all cells are iterated over, return new board
};

////////  Design Tic-Tac-Toe ///////
/* 
Assume the following rules are for the tic-tac-toe game on an n x n board between two players:

A move is guaranteed to be valid and is placed on an empty block.
Once a winning condition is reached, no more moves are allowed.
A player who succeeds in placing n of their marks in a horizontal, vertical, or diagonal row wins the game.
Implement the TicTacToe class:

TicTacToe(int n) Initializes the object the size of the board n.
int move(int row, int col, int player) Indicates that player with id player plays at the cell (row, col) of the board. The move is guaranteed to be a valid move.
Follow up:
Could you do better than O(n^2) per move() operation?
*/

// Time: O(1) | Space O(N)
/* In order to win Tic-Tac-Toe you must have the entire row or column or diagnols. 
Thus, we don't need to keep track of an entire n^2 board. We only need to keep a count for each row and column. 
If at any time a row or column matches the size of the board then that player has won.

To keep track of which player, I add one for Player1 and -1 for Player2. 
There are two additional variables to keep track of the count of the diagonals. 
Each time a player places a piece we just need to check the count of that row, column, diagonal and anti-diagonal.
*/

class TicTacToe {
  constructor(n) {
    this.len = n;

    this.rows = new Array(n).fill(0);
    this.cols = new Array(n).fill(0);
    this.dia = 0;
    this.antiDia = 0;
  }

  move(row, col, player) {
    const i = player === 1 ? 1 : -1;

    this.rows[row] += i;
    this.cols[col] += i;
    if (row === col) this.dia += i;
    if (col === this.len - row - 1) this.antiDia += i;

    if (
      Math.abs(this.rows[row]) === this.len ||
      Math.abs(this.cols[col]) === this.len ||
      Math.abs(this.dia) === this.len ||
      Math.abs(this.antiDia) === this.len
    )
      return player;

    return 0;
  }
}

let tic = new TicTacToe(3);
console.log(tic);

//// COULDNT GET IT

class TicTacToe2 {
  constructor(n) {
    this.len = n;
    this.vertical = new Array(n).fill(0).map((x) => new Array(2).fill(0));
    this.horizontal = new Array(n).fill(0).map((x) => new Array(2).fill(0));
    this.diagOne = new Array(2).fill(0);
    this.diagTwo = new Array(2).fill(0);
  }

  move(row, col, player) {}

  hasWon() {}
}

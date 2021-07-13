//////// Valid Square ///////

/* Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

A valid square has four equal sides with positive length and four equal angles (90-degree angles).

*/

var validSquare = function (p1, p2, p3, p4) {
  // Equal length of sides

  let x1, x2, x3, x4;
};

// LEETCODE CORRECT ANSWER
// Time: O(1) | Space O(1) - A fixed number of comparisons are done
// Brute force
var validSquare2 = function (p1, p2, p3, p4) {
  // Distance formula: d(P, Q) = √ (x2 − x1)2 + (y2 − y1)2
  function dist(a, b) {
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
  }

  // Compute the 6 pt-pt distances (squared, since we don't care about actual distance value)
  const distances = [
    dist(p1, p2),
    dist(p1, p3),
    dist(p1, p4),
    dist(p2, p3),
    dist(p2, p4),
    dist(p3, p4),
  ];

  // The input is not given in any order, so we sort for diagnols
  // Sort & check for non-zero (points must be distinct), check for four equal sides, check for two equal diagonals.
  distances.sort((a, b) => a - b);

  return (
    distances[0] &&
    distances[0] === distances[1] &&
    distances[0] === distances[2] &&
    distances[0] === distances[3] &&
    distances[4] === distances[5]
  );
};

let p1 = [0, 0],
  p2 = [1, 1],
  p3 = [1, 0],
  p4 = [0, 1];

console.log(validSquare2(p1, p2, p3, p4));

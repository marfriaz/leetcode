//////// Maximum Points You Can Obtain from Cards ///////

/*
There are several cards arranged in a row, and each card has an associated number of points The points are given in the integer array cardPoints.

In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.

Your score is the sum of the points of the cards you have taken.

Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
*/
var maxScore = function (cardPoints, k) {
  let left = k - 1;
  let right = cardPoints.length - 1;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += cardPoints[i];
  }
  let max = sum;
  for (let i = 0; i < k; i++) {
    sum += cardPoints[right--] - cardPoints[left--];
    max = Math.max(max, sum);
  }
  return max;
};

let cardPoints = [11, 49, 100, 20, 86, 29, 72]; // 232
let k = 4;

console.log(maxScore(cardPoints, k));

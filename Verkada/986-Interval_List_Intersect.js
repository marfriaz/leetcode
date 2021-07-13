//////// Interval List Intersections ///////
/* 
You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. 
Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a < b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. 
For example, the intersection of [1, 3] and [2, 4] is [2, 3].
*/

// Between two intervals, get the latest start time as maxStart and the earliest end time as minEnd. If maxStart <= minEnd, this means there is an overlap.

// Time O(M+N)
var intervalIntersection = function (firstList, secondList) {
  // maxStart and minEnd
  let result = [];

  let a = 0;
  let b = 0;

  while (a < firstList.length && b < secondList.length) {
    let maxStart = Math.max(firstList[a][0], secondList[b][0]);

    let minEnd = Math.min(firstList[a][1], secondList[b][1]);

    if (maxStart <= minEnd) {
      result.push([maxStart, minEnd]);
    } // overlap found

    if (firstList[a][1] < secondList[b][1]) {
      // if end1, is less then end2
      // index 1++
      // because we already took their end
      a++;
    } else {
      // else index 2++
      b++;
    }
  }
  return result;
};

let firstList = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25],
];
let secondList = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26],
];
// Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
console.log(intervalIntersection(firstList, secondList));

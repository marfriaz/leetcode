//////// Shortest Subarray to be Removed to Make Array Sorted ///////

/*
Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.

A subarray is a contiguous subsequence of the array.

Return the length of the shortest subarray to remove.
*/
var findLengthOfShortestSubarray = function (arr) {
  let left = 0;
  let pos = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      if (pos.length == 2) {
        pos.pop();
      }
      pos.push([left, i - 1]);
      left = i;
    }
  }
  if (pos.length == 2) pos.pop();
  pos.push([left, arr.length - 1]);

  if (pos.length < 2) return 0;

  let res = arr.length;
  let i = 0,
    j = pos[1][0];

  while (i <= pos[0][1] && j <= pos[1][1]) {
    console.log(arr[i], arr[j], res);
    if (arr[i] > arr[j]) {
      res = Math.min(res, j - pos[1][0] + pos[0][1] - i + 1);
      j++;
    } else {
      i++;
    }
  }

  res = Math.min(res, j - pos[1][0]);

  return res + (pos[1][0] - 1) - (pos[0][1] + 1) + 1;
};

let arr = [1, 2, 3, 10, 4, 2, 3, 5]; // The shortest subarray we can remove is [10,4,2] of length 3.
console.log(findLengthOfShortestSubarray(arr)); //3

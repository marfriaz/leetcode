//////// Trapping Rain Water ///////
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.
*/

// time O(n)
// space O(n)

function trap(height) {
  if (height == null || height.length === 0) {
    return 0;
  }

  let result = 0;
  let heightArrLength = height.length;
  let leftMax = {};
  let rightMax = {};

  // initialize beginning of leftMax as left most height
  leftMax[0] = height[0];

  // Find maximum height of bar from the left end upto an index i in the array left_max.
  for (let i = 1; i < heightArrLength; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }

  // initialize end of rightMax as right most height
  rightMax[heightArrLength - 1] = height[heightArrLength - 1];

  // Find maximum height of bar from the right end upto an index i in the array right_max.
  for (let i = heightArrLength - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }

  // find overlapping leftmax and rightmax, getting the min
  // Iterate over the height array and update result
  for (let i = 0; i < height.length; i++) {
    // substract bar = height[i]
    result += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return result;
}

let height = [4, 2, 0, 3, 2, 5];

// let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; //9
console.log(trap(height)); // 9

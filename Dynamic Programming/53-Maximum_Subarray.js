//////// Maximum Subarray///////
/* 
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

// Dynamic Programming/ Greedy

var maxSubArray = function (nums) {
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    maxSum = Math.max(nums[i], maxSum);
  }
  return maxSum;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(nums)) / 6;

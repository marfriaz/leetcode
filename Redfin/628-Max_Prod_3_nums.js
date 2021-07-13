//////// Maximum Product of Three Numbers ///////
/*
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
*/

// O(N) time | O(1) Space

var maximumProduct = function (nums) {
  // Max from either:
  // 1. 3 Maxes (Positives, or lowest Negatives)
  // 2. 2 Negatives and 1 positive

  let max1, max2, max3, min1, min2;
  max1 = max2 = max3 = -Infinity;
  min1 = min2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      [max1, max2, max3] = [nums[i], max1, max2];
      // Want to slide over past maxes
    } else if (nums[i] > max2) {
      [max2, max3] = [nums[i], max2];
    } else if (nums[i] > max3) {
      max3 = nums[i];
    }
    if (nums[i] < min1) {
      [min2, min1] = [min1, nums[i]];
      // Want to slide over past mins
    } else if (nums[i] < min2) {
      min2 = nums[i];
    }
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};

let nums = [1, 2, 3, 4]; //24

console.log(maximumProduct(nums));

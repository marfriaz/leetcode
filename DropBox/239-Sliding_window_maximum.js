//////// Sliding Window Maximum ///////

/*
You are given an array of integers nums, there is a sliding window of size k which 
is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.

Return the max sliding window.

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

//////// Dynamic Programming: Compare right and left maxes
// O(N)
var maxSlidingWindow = function (nums, k) {
  let numsLength = nums.length;

  let left = new Array(numsLength);
  let right = new Array(numsLength);

  let ans = new Array(numsLength - k + 1);

  for (let i = 0; i < numsLength; i++) {
    for (let j = numsLength - 1; j >= 0; j--) {
      // want to reset if i % k, since window has reset
      if (i % k === 0) {
        left[i] = nums[i];
      } else {
        // otherwise take left max
        left[i] = Math.max(left[i - 1], nums[i]);
      }

      if (j === numsLength - 1 || (j + 1) % k === 0) {
        // want to reset if j % k
        right[j] = nums[j];
      } else {
        // otherwise take right max
        right[j] = Math.max(right[j + 1], nums[j]);
      }
    }
  }

  console.log(left);
  console.log(right);

  // iterate over windows and attain Max of left and right
  for (let i = 0; i < numsLength - k + 1; i++) {
    // left--, right++
    ans[i] = Math.max(left[i + k - 1], right[i]);
  }

  return ans;
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

console.log(maxSlidingWindow(nums, k));

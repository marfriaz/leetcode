//////// Product of Array Except Self ///////
/* Dynamics Programming

A message containing letters from A-Z can be encoded into numbers using the following mapping:
Given a string s containing only digits, return the number of ways to decode it.
*/

let input = [1, 2, 3, 4]; // [24,12,8,6]
var productExceptSelf = function (nums) {
  let output = [];
  let leftMult = 1;
  let rightMult = 1;

  // iterate backwards
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  // iterate forwards
  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
};

console.log(productExceptSelf(input));

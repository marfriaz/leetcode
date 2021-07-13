//////// Two Sum ///////
/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

// Time O(N); Space(O(N))
// Using Hash Map
var twoSum = function (nums, target) {
  let complimentMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];

    if (complimentMap.has(compliment)) {
      return [i, complimentMap.get(compliment)];
    } else {
      complimentMap.set(nums[i], i);
    }
  }
  return [];
};

let nums = [2, 7, 11, 15],
  target = 9;

console.log(twoSum(nums, target));

//////////////////////////////////////////
//////////////////////////////////////////
/// SORT won't work because returing indices!!!!
// Doesnt work!!!!
//////////////////////////////////////////
var twoSum2 = function (nums, target) {
  // What if nums is empty?
  if (nums.length === 0) {
    return [];
  }
  nums.sort((a, b) => a - b);

  let left = 0;

  let right = nums.length - 1;

  while (right > left) {
    let sum = nums[left] + nums[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left, right];
    }
  }
  return [];
};

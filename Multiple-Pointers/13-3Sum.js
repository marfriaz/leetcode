//////// 3Sum ///////

/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

*/

// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  let triplets = [];

  array.sort((a, b) => a - b);

  for (let left = 0; left < array.length - 2; left++) {
    let middle = left + 1;
    let right = array.length - 1;

    while (middle < right) {
      let sum = array[left] + array[middle] + array[right];

      if (sum === targetSum) {
        triplets.push([array[left], array[middle], array[right]]);
        middle++;
        right--;
      } else if (sum > targetSum) {
        right--;
      } else {
        middle++;
      }
    }
  }

  return triplets;
}

////// MORE IN DEPTH - No Duplicates///////

var threeSum = function (nums) {
  const results = [];

  // obviously irrelevant if we don't have at least 3 numbers to play with!
  if (nums.length < 3) {
    return results;
  }

  // having the numbers in ascending order will make this problem much easier.
  // also, knowing the overall problem  will take at least O(N^2) time, we can
  // afford the O(NlogN) sort operation
  nums = nums.sort((a, b) => a - b);

  // if the question asks us for a custom target, we can control it here
  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    // `i` represents the "left" most number in our sorted set.
    // once this number hits 0, there's no need to go further since
    // positive numbers cannot sum to a negative number
    if (nums[i] > target) {
      break;
    }

    // we don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // `j` represents the "middle" element between `i` and `k`.
    // we will increment this up through the array while `i` and `k`
    // are anchored to their positions. we will decrement `k` for
    // for each pass through the array, and finally increment `i`
    // once `j` and `k` meet.
    let j = i + 1;

    // `k` represents the "right" most element
    let k = nums.length - 1;

    // to summarize our setup, we have `i` that starts at the beginning,
    // `k` that starts at the end, and `j` that races in between the two.
    //
    // note that `i` is controlled by our outer for-loop and will move the slowest.
    // in the meantime, `j` and `k` will take turns inching towards each other depending
    // on some logic we'll set up below. once they collide, `i` will be incremented up
    // and we'll repeat the process.

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      // if we find the target sum, increment `j` and decrement `k` for
      // other potential combos where `i` is the anchor
      if (sum === target) {
        // store the valid threesum
        results.push([nums[i], nums[j], nums[k]]);

        // this is important! we need to continue to increment `j` and decrement `k`
        // as long as those values are duplicated. in other words, we wanna skip values
        // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
        // [[-2,0,2], [-2,0,2]].
        //
        // (i'm not a fan of this part because we're doing a while loop as we're
        // already inside of another while loop...)
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // finally, we need to actually move `j` forward and `k` backward to the
        // next unique elements. the previous while loops will not handle this.
        j++;
        k--;

        // if the sum is too small, increment `j` to get closer to the target
      } else if (sum < target) {
        j++;

        // if the sum is too large, decrement `k` to get closer to the target
      } else {
        // (sum > target)
        k--;
      }
    }
  }

  return results;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

////////  Insert Interval///////

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

*/

// incorrect
var longestConsecutive = function (nums) {
  // iterate over nums
  // Add to freqMap
  // Record max, and min

  // Iterate from min to max
  // check if consecutive, by checking prev to curr
  // Record count

  let freqMap = new Map();
  let max = -Infinity;
  let min = Infinity;

  nums.sort((a, b) => a - b);

  for (let num of nums) {
    freqMap.set(num, true);
    max = Math.max(max, num);
    min = Math.min(min, num);
  }
  let prev = min;

  let count = 0;
  let maxCount = 0;

  for (let i = min + 1; i <= max + 1; i++) {
    let curr = i;

    if (freqMap.has(prev) && prev + 1 === curr) {
      // console.log(prev);
      // console.log(i);
      count++;
      prev = i;
      maxCount = Math.max(maxCount, count);
      continue;
    }
    prev = i;
    count = 0;
  }

  return maxCount;
};

// let nums = [100, 4, 200, 1, 3, 2]; // 4 (1,2,3,4)
let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]; // 9
console.log(longestConsecutive(nums));

// LEETCODE WITH SETS
function longestConsecutive2(nums) {
  if (nums == null || nums.length === 0) return 0;

  const set = new Set(nums);
  console.log(set);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue; // make sure starting from the beginning of sequence

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }

  return max;
}

console.log(longestConsecutive2(nums));

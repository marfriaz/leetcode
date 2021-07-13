//////// 1291. Sequential Digits ///////
/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.
*/

// Sliding Window
// Time O(1), Space O(1)
// Time complexity: O(1). Length of sample string is 9, and lengths of low and high are between 2 and 9.
//Hence the nested loops are executed no more than 8 \times 8 = 648×8=64 times.

var sequentialDigits = function (low, high) {
  let nums = "123456789";
  let result = [];
  let n = 10;
  let lowLength = low.toString().length; // 3
  let highLength = high.toString().length;

  for (let i = lowLength; i <= highLength; i++) {
    for (let j = 0; j < n - i; j++) {
      // Sliding through nums array based on allowed length
      let number = Number(nums.substring(j, i + j));
      if (number >= low && number <= high) result.push(number);
    }
  }
  return result;
};

let low = 100,
  high = 300; // [ 123, 234 ]

console.log(sequentialDigits(low, high));

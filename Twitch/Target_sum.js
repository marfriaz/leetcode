// Time O(N) | Space: O(N)

function findUniquePairs(numbers, target) {
  numbers.sort((a, b) => a - b);

  let complimentMap = new Map();

  let uniquePairs = [];

  for (let num of numbers) {
    complimentMap.set(num, true);
  }

  // iterate through numbers and check if a compliment exists
  // if so, add to uniquePairs array
  for (let i = 0; i < numbers.length; i++) {
    let compliment = target - numbers[i];
    if (
      complimentMap.has(compliment) &&
      complimentMap.get(compliment) === true &&
      complimentMap.has(numbers[i]) &&
      complimentMap.get(numbers[i]) === true
    ) {
      uniquePairs.push([numbers[i], compliment]);
      complimentMap.set(numbers[i], false);
      complimentMap.set(compliment, false);
    }
  }
  return uniquePairs;
}
let numbers = [9, 2, 10, 1, 5, 3];
let target = 12; // [[2,10], [3,9]]

console.log(findUniquePairs(numbers, target));

/*
[first largest, fist smallest, second largest, second smallest]

*/

// Time: O(N) | Space O(N)
function meanderingArray(unsorted) {
  let sortedArr = [];

  // Create a frequency map with all nums
  let freqMap = new Map();

  for (let num of unsorted) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Sort by largest to smallest
  let highToLow = [...unsorted].sort((a, b) => b - a);

  // Sort by smallest to largest
  let lowToHigh = [...unsorted].sort((a, b) => a - b);

  // Iterate highToLow and lowToHigh arrays
  // pushing num to sortedArr if present in freqMap
  for (let i = 0; i < unsorted.length; i++) {
    let highNum = highToLow[i];
    let lowNum = lowToHigh[i];

    if (freqMap.get(highNum) > 0) {
      sortedArr.push(highNum);
      freqMap.set(highNum, freqMap.get(highNum) - 1);
    }
    if (freqMap.get(lowNum) > 0) {
      sortedArr.push(lowNum);
      freqMap.set(lowNum, freqMap.get(lowNum) - 1);
    }
  }
  return sortedArr;
}

let arr = [-1, 1, 2, 3, -5];
console.log(meanderingArray(arr)); // [3,-5,2,-1,1]

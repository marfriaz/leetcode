// Time: O(N^2) | Space: O(N)
function maxInversions(arr) {
  // Edge Case: Subsequence of 3, so length must be at least 3
  if (arr.length < 3) {
    return 0;
  }

  let inversionCount = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    // count all smaller elements to the right of arr[i]
    let smallerCount = 0;
    for (let right = i + 1; right < arr.length; right++) {
      if (arr[i] > arr[right]) {
        smallerCount++;
      }
    }

    // count all bigger elements to the left of arr[i]
    let biggerCount = 0;
    for (let left = i - 1; left >= 0; left--) {
      if (arr[i] < arr[left]) {
        biggerCount++;
      }
    }

    // inversionCount = all inversions where arr[i] is in the middle of a higher and lower num
    // which is biggerCount * smallerCount possibilities at arr[i]
    inversionCount += biggerCount * smallerCount;
  }
  return inversionCount;
}

let arr = [5, 3, 4, 2, 1];
console.log(maxInversions(arr));

// Time: O(N^3) | Space: O(N)
function maxInversions2(arr) {
  let arrLength = arr.length;
  let inversionCount = 0;

  // Subsequence of 3: Iterate through N^3 possibilities
  for (let i = 0; i < arrLength - 2; i++) {
    for (let j = i + 1; j < arrLength - 1; j++) {
      if (arr[i] > arr[j]) {
        for (let k = j + 1; k < arrLength; k++) {
          if (arr[j] > arr[k]) {
            inversionCount++;
          }
        }
      }
    }
  }
  return inversionCount;
}

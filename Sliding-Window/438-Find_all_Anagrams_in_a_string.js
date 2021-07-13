//////// Find All Anagrams in a String ///////
/*
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
*/
// THIS TIME OUT, but was right
var findAnagrams = function (s, p) {
  let indices = [];
  let size = p.length;

  p.split("").sort().join("");

  for (let i = 0; i <= s.length - p.length; i++) {
    let slice = s.substring(i, i + size);
    if (slice.split("").sort().join("") === p) {
      indices.push(i);
    }
  }

  return indices;
};

let s = "cbaebabacd",
  p = "abc";

console.log(findAnagrams(s, p)); // [0,6]

// CORRECT ANSWER from leetcode
// Sliding window O(N)
const findAnagrams2 = (s, p) => {
  // initialize output array to be returned at the end and neededChars object to store the chars in p.
  const output = [];
  const neededChars = {};

  // populate neededChars to contain every char in p as a key and how many times that char appears in p as its value.
  for (let char of p) {
    if (char in neededChars) {
      neededChars[char]++;
    } else neededChars[char] = 1;
  }

  // initialize window pointers and the total number of chars needed to form an anagram.
  let left = 0;
  let right = 0;
  let count = p.length;

  // start sliding the window
  while (right < s.length) {
    // if the current char is found in p and is currently needed (meaning that its value in neededChars is bigger than 0),
    // then decrease the count which is the total number of chars that are needed and that still haven't been found.
    if (neededChars[s[right]] > 0) count--;

    // decrease the needed amount for the current char and move the window's right end one step forward.
    neededChars[s[right]]--;
    right++;

    // if the count is 0, this means that there is an anagram starting at the left index so push left into the output array.
    if (count === 0) output.push(left);

    // at first, the window will increase its length by taking steps forward with its right end.
    // after the window length reaches p's length for the first time,
    // the window will start moving forward like a caterpillar with the left end moving first.
    if (right - left == p.length) {
      // if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.
      if (neededChars[s[left]] >= 0) count++;

      // the lines below are the most important to understand:
      // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string,
      // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
      neededChars[s[left]]++;
      left++;
    }
  }
  return output;
};

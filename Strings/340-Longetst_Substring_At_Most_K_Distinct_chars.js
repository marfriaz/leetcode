//////// Longest Substring with At Most K Distinct Characters ///////
/*
Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
*/

///// COULDNT DO IT! :(
var lengthOfLongestSubstringKDistinct = function (s, k) {
  // create freqMap
  // Iterate through values, and add longest lenght up to k

  let result = [];

  let j = 0;
  let dupMap = {};
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(dupMap).length <= k) {
      dupMap[s[i]] = (dupMap[s[i]] || 0) + 1;
      // console.log(dupMap);
    } else {
      result.push(s.substring(j, i - 1));
      j++;
      i--;
      dupMap = {};
    }
  }
  console.log("RESULT", result);
  return result;
};

let s = "eceba",
  k = 2;

console.log(lengthOfLongestSubstringKDistinct(s, k));

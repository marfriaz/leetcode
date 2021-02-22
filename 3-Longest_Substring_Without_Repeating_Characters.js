//////// Longest Substring Without Repeating Characters ///////
/* 
Given a string s, find the length of the longest substring without repeating characters.
*/

var lengthOfLongestSubstring = function (s) {
  var stringObj = {};

  var maxCount = 0;
  var start = 0;

  for (var i = 0; i < s.length; i++) {
    if (stringObj[s[i]] !== undefined) {
      //   start = Math.max(start, stringObj[s[i]] + 1);
      start = stringObj[s[i]] + 1;
    }
    stringObj[s[i]] = i;
    maxCount = Math.max(maxCount, i - start + 1);
  }
  return maxCount;
};
let s = "abcabcbb"; // abc
console.log(lengthOfLongestSubstring(s));

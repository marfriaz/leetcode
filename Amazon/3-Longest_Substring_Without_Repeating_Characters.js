//////// Longest Substring Without Repeating Characters ///////
/* 
Given a string s, find the length of the longest substring without repeating characters.
*/

// Time O(N), Space O(N)
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let longest = "";
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    const charRight = s[i];

    if (map.has(charRight) && map.get(charRight) >= left) {
      // you don't care the char's index less than the current L
      left = map.get(charRight) + 1;
      //move Left Pointer to the duplicate char's last index + 1
    }
    map.set(charRight, i); // Key = letter, value = index
    longest = Math.max(longest, i - left + 1);
  }

  return longest;
};

let s = "abcabcbb"; // abc = 3
console.log(lengthOfLongestSubstring(s));

///////
// DOES NOT WORK
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

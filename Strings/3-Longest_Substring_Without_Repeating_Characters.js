//////// Longest Substring Without Repeating Characters ///////
/* 
Given a string s, find the length of the longest substring without repeating characters.
*/

// Time O(N), Space O(N)
var lengthOfLongestSubstring = function (s) {
  // Map stores indexes of char
  let map = new Map();
  let longest = 0;
  let leftIndex = 0;

  for (let i = 0; i < s.length; i++) {
    const charRight = s[i];

    // If map already has the char and it's index is greater than left pointer
    if (map.has(charRight) && map.get(charRight) >= leftIndex) {
      // you don't care the char's index less than the current leftIndex
      leftIndex = map.get(charRight) + 1;
      // move Left Pointer to the duplicate char's last index + 1
    }
    map.set(charRight, i); // Key = letter, value = index

    // longest = substring from leftIndex to i +1
    longest = Math.max(longest, i - leftIndex + 1);
  }

  return longest;
};

let s = "abcabcbb"; // abc = 3
console.log(lengthOfLongestSubstring(s));

// Time O(N), Space O(N)
// THIS ONE GETS STRING
var longestSubstringNoRepeat = function (s) {
  // Map stores indexes of char
  let map = new Map();
  let longest = "";
  let leftIndex = 0;

  for (let i = 0; i < s.length; i++) {
    const charRight = s[i];

    // If map already has the char and it's index is greater than left pointer
    if (map.has(charRight) && map.get(charRight) >= leftIndex) {
      // you don't care the char's index less than the current leftIndex
      leftIndex = map.get(charRight) + 1;
      // move Left Pointer to the duplicate char's last index + 1
    }
    map.set(charRight, i); // Key = letter, value = index

    // longest = substring from leftIndex to i +1
    let temp = s.substring(leftIndex, i + 1);

    longest = longest.length > temp.length ? longest : temp;
  }

  return longest;
};

let s2 = "abcabcbb"; // abc - THIS ONE GETS STRING
console.log(longestSubstringNoRepeat(s2));

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

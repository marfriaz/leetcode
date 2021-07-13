////////  First Unique Character in a String ///////

/*
Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

// Time O(N)
var firstUniqChar = function (s) {
  const count = {};
  // Fill object with char counts

  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) {
      count[s[i]] = 1;
    } else {
      count[s[i]]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // iterate through string, and find first index where count[s[i]] = 1
    if (count[s[i]] === 1) return i;
  }
  return -1;
};

let s = "loveleetcode";
console.log(firstUniqChar(s)); // 2

let s = "loveleetcode";

function firstNotRepeatingCharacter(s) {
  const count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return s[i];
    }
  }
  return -1;
}
console.log(firstNotRepeatingCharacter(s)); // 2

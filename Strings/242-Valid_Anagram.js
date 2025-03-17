////////  Valid Anagram///////

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different 
word or phrase, typically using all the original letters exactly once.
*/

/*
Solution 1: 
  Time Complexity: O(n)
  Space Complexity: O(1)
   => 0(26) - (If two input strings are consisted of lowercase alpahbet characters.)
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counter = new Map();

  for (let char of s) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!counter.has(char) || counter.get(char) === 0) {
      return false;
    }
    counter.set(char, counter.get(char) - 1);
  }

  return true;
};

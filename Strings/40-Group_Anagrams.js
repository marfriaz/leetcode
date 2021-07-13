//////// Group Anagrams ///////
/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a
 different word or phrase, typically using all the original letters exactly once.
*/

// O(w*n*(log(n))) time | O(wn) space
// where w is the # of words and n is the length of the longest word

var groupAnagrams = function (strs) {
  let map = {};

  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");

    if (map[sortedWord]) {
      map[sortedWord].push(word);
    } else {
      map[sortedWord] = [word];
    }
  }

  return Object.values(map);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

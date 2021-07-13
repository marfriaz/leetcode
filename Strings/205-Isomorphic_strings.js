////////  Isomorphic Strings ///////

/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

*/

// SAME IMPLEMENTATION, BUT ONLY WORKS WITH MAPS
var isIsomorphic = function (s, t) {
  // Isomorphic = same freq of letters in order
  // iterate over s and t and check if same freq

  let freqMap1 = new Map();

  let freqMap2 = new Map();

  for (let i = 0; i < s.length; i++) {
    let letter1 = s[i];
    let letter2 = t[i];

    if (freqMap1.has(letter1) || freqMap2.has(letter2)) {
      if (freqMap2.get(letter2) === freqMap1.get(letter1)) {
        freqMap1.set(letter1, i);
        freqMap2.set(letter2, i);
        continue;
      }
      return false;
    }

    freqMap1.set(letter1, i);
    freqMap2.set(letter2, i);
  }
  return true;
};

// let s = "egg",
//   t = "add"; // true

// let s = "egcd",
//   t = "adfd"; // false

let s = "aa",
  t = "ab"; // false

console.log(isIsomorphic(s, t));

// DOESNT WORK WITH OBJECTS BC 0 is FALSE
var isIsomorphic2 = function (s, t) {
  // Isomorphic = same freq of letters in order
  // iterate over s and t and check if same freq

  let freqMap1 = {};

  let freqMap2 = {};

  for (let i = 0; i < s.length; i++) {
    let letter1 = s[i];
    let letter2 = t[i];

    if (freqMap1[letter1] || freqMap2[letter2]) {
      if (freqMap2[letter2] === freqMap1[letter1]) {
        freqMap1[letter1] = i;
        freqMap2[letter2] = i;
        continue;
      }
      return false;
    }

    freqMap1[letter1] = i;
    freqMap2[letter2] = i;
  }
  return true;
};

console.log(isIsomorphic2(s, t));

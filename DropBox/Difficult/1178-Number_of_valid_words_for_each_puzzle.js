//////// Number of Valid Words for Each Puzzle ///////

/*
With respect to a given puzzle string, a word is valid if both the following conditions are satisfied:
 - word contains the first letter of puzzle.
 - For each letter in word, that letter is in puzzle.
    For example, if the puzzle is "abcdefg", then valid words are 
    "faced", "cabbage", and "baggage"; while invalid words are "beefed" 
    (doesn't include "a") and "based" (includes "s" which isn't in the puzzle).

Return an array answer, where answer[i] is the number of words in the given word 
list words that are valid with respect to the puzzle puzzles[i].
 
Find possibles words from letters in puzzle
- word must contain first letter of puzzle
- All letters in words must exist in puzzle
*/

// Bit Manipulation - I dont understand it
var findNumOfValidWords = function (words, puzzles) {
  // create a map to cache the frequency of the encoded word.
  let map = new Map();

  for (let w of words) {
    let mask = 0;
    for (let i = 0; i < w.length; i++) {
      mask += 1 < w.charAt(i) - "a";
    }
    map.put(mask, map.getOrDefault(mask, 0) + 1);
  }

  let res = [];

  // Next, loop the puzzles.
  // During the inner loop, instead of loop through map's keyset
  // (which cause TLE), use sub = (sub - 1) & mask to find all possible char combinations of current puzzel.
  for (let p of puzzles) {
    let mask = 0;
    for (let i = 0; i < p.length; i++) {
      mask += 1 << (p.charAt(i) - "a");
    }
    let c = 0;
    let sub = mask;
    let first = 1 << (p.charAt(0) - "a");
    while (true) {
      if ((sub & first) == first && map.containsKey(sub)) {
        c += map.get(sub);
      }

      if (sub == 0) {
        break;
      }

      sub = (sub - 1) & mask; // get the next substring
    }

    res.add(c);
  }

  return res;
};

//////// TImes OUT: SAME AS escape_room_keypads
var findNumOfValidWords = function (words, puzzles) {
  let result = [];

  let wordMap = new Map();

  for (let word of words) {
    wordMap.set(word, word.split(""));
  }

  // O(NxM)
  for (let i = 0; i < puzzles.length; i++) {
    result.push(0);

    for (const [word] of wordMap) {
      let wordLetters = wordMap.get(word);
      let puzzleLetters = puzzles[i].split("");

      if (!wordLetters.includes(puzzles[i][0])) {
        continue;
      }

      // O(NxM)
      if (wordLetters.every((ai) => puzzleLetters.includes(ai))) {
        result[i] += 1;
      } else {
        continue;
      }
    }
  }

  return result;
};

let words = ["aaaa", "asas", "able", "ability", "actt", "actor", "access"];
let puzzles = [
  "aboveyz",
  "abrodyz",
  "abslute",
  "absoryz",
  "actresz",
  "gaswxyz",
]; //Output: [1, 1, 3, 2, 4, 0];

console.log(findNumOfValidWords(words, puzzles));

/* Given a string s consisting of small English letters,
 find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
 */

function firstNotRepeatingCharacter(s) {
  let map = {};

  for (let letter of s) {
    map[letter] = (map[letter] || 0) + 1;
  }

  for (let letter of s) {
    if (map[letter] === 1) {
      return letter;
    }
  }
  return "_";
}

let s = "abacabad"; //c
console.log(firstNotRepeatingCharacter(s));

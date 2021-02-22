// ======== Escape Room Keypads ========
/* Come up with as many words as possible that your team can test out on the
 keypads and find the correct combination to go the next stage of the game

 What you know: 
 • the first letter of the keypad is guaranteed to be in the word that opens the door
 • The words are at least 5 letters long, with no maximum length. 
 • The "key" letter will be in the correct answer. 
 • The words do not contain any letters outside the seven letters on the keypad. 
 • Letters may be reused, including the "key" letter. 
 For our purposes, we'll express each set of keypad letters as a string of length 7, where the first letter Type here to search
 
 Constraints: 
 • Both the wordlist and the keypad letters will be supplied in all capital letters. 
 • All words in the wordlist will be of length 5 or greater. 
 • Every sequence of keypad letters will be of exactly length 
 7.Every sequence of keypad letters will consist of 7 distinct letters. 
 */
//  Input: wordlist: ['APPLE', 'PLEAS', 'PLEASE']
//  keypads: ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']
//  Expected output: [0, 1, 3, 2, 0]

function escapeRoom(wordlist, keypads) {
  let combinations = [];

  // iterate over each keypad in keypads, then each letter in each keypad
  for (const keypad of keypads) {
    let keyPadMap = {};

    let possibilities = 0;

    for (const letter of keypad) {
      keyPadMap[letter] = (keyPadMap[letter] || 0) + 1;
    }

    // 0(n^2) iterate over each word in wordlist, then each letter in each word
    for (const word of wordlist) {
      // O(N) if first letter of keypad not present in word, continue to next word
      let isFirstLetterInKeyPad = false;
      // iterate over each letter in each word
      for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (letter === keypad[0]) {
          isFirstLetterInKeyPad = true;
        }
        if (!keyPadMap[letter]) {
          // if letter of word not in keypad, move to next work
          break;
          // if last letter of word is in keypad, add as a possibility
        } else if (i === word.length - 1 && isFirstLetterInKeyPad) {
          possibilities += 1;
        }
      }
    }
    combinations.push(possibilities);
  }
  return combinations;
}

var wordlist = ["APPLE", "PLEAS", "PLEASE"];
var keypads = ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"];

console.log(escapeRoom(wordlist, keypads));
//  Expected output: [0, 1, 3, 2, 0]

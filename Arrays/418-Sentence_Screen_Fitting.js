//////// Sentence Screen Fitting ///////

/*Given a rows x cols screen and a sentence represented as a list of strings, return the number of times the given sentence can be fitted on the screen.

The order of words in the sentence must remain unchanged, and a word cannot be split into two lines. A single space must separate two consecutive words in a line.

*/

// DIDNT GET CORRECT ANSWER YET
var wordsTyping = function (sentence, rows, cols) {
  // Keep track of current row

  // Index matters!!
  let currRow = 1;

  let currCol = cols;
  let count = 0;

  for (let j = 0; j < sentence.length; j++) {
    if (currRow > rows) {
      break;
    }
    let word = sentence[j];

    let diff = currCol - word.length;

    if (diff < 0) {
      j--;
      currRow++;
      currCol = cols;
      continue;
    }

    // If spaces neet to be included, this needs to be modified
    currCol = currCol - word.length - 1;

    if (j === sentence.length - 1) {
      count++;
      j = 0;
    }
  }

  return count;
};

// let sentence = ["hello", "world"],
//   rows = 2,
//   cols = 8; // 1

let sentence = ["f", "p", "a"],
  rows = 8,
  cols = 7; // 10
console.log(wordsTyping(sentence, rows, cols));

///// LEETCODE CORRECT
var wordsTyping2 = function (sentence, rows, cols) {
  let count = 0;
  let row = 0;
  let wordIndex = 0;
  let remainingColumns = cols;
  while (row < rows) {
    const word = sentence[wordIndex];

    if (word.length > cols) {
      return 0;
    }

    if (word.length <= remainingColumns) {
      remainingColumns = remainingColumns - word.length - 1;
      wordIndex++;
      if (wordIndex === sentence.length) {
        count++;
        wordIndex = 0;
      }
    } else {
      row++;
      remainingColumns = cols;
    }
  }

  return count;
};

console.log(wordsTyping2(sentence, rows, cols));

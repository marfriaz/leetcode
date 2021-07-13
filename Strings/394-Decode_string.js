//////// Decode String ///////

/* Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. 
Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; 
No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. 
For example, there won't be input like 3a or 2[4].

*/

var decodeString = function (s) {
  // Covert to array
  // Find where corresponding [ is
};

let s = "3[a]2[bc]"; // "aaabcbc"

// LEETCODE CORRECT ANSWER
var decodeString2 = function (s) {
  let multiplier = [],
    repeatStr = [],
    result = "",
    num = "";

  for (let char of s) {
    // If char is number, add to number string
    if (!isNaN(char)) {
      num += char;

      // Otherwise, if '[', push num as it should be right before, and push result to repeatStr, since that's just char
    } else if (char === "[") {
      multiplier.push(num);
      num = "";

      // This ensures that current result doesn't get repeated
      // result is reset
      repeatStr.push(result);
      result = "";

      // Otherwise, if ']', closing, so we repeat
    } else if (char === "]") {
      // This ensures that current result doesn't get repeated and only new result is repeated
      result = repeatStr.pop() + result.repeat(multiplier.pop());

      // If char is not a number or a []
    } else {
      result += char;
    }
  }
  return result;
};

console.log(decodeString2(s));

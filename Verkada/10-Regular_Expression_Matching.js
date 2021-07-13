//////// Regular Expression Matching ///////
/* Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where: 

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
*/

// RECURSIVE
const isMatch = (string, pattern) => {
  // early return when pattern is empty
  if (string.length === 0 && pattern.length === 0) {
    // returns true when string and pattern are empty
    return true;
  } else if (string.length !== 0 && pattern.length === 0) {
    // returns false when string contains chars with empty pattern
    return false;
  }

  // check if the current char of the string and pattern match when the string has chars
  const hasFirstCharMatch =
    Boolean(string) && (pattern[0] === "." || pattern[0] === string[0]);

  // track when the next character * is next in line in the pattern
  if (pattern[1] === "*") {
    // if next pattern match (after *) is fine with current string, then proceed with it (s, p+2).
    // That's because the current pattern may be skipped.
    // otherwise check hasFirstCharMatch. That's because if we want to proceed with the current pattern,
    // we must be sure that the current pattern char matches the char
    // If hasFirstCharMatch is true, then do the recursion with next char and current pattern (s+1, p).
    // That's because current char matches the pattern char.
    return (
      isMatch(string, pattern.slice(2)) ||
      // For wanting 0 of pattern^
      (hasFirstCharMatch && isMatch(string.slice(1), pattern))
      // For MAYBE repetition in string^
      // string is sliced, not pattern
    );
  }

  // now we know for sure that we need to do 2 simple actions
  // check the current pattern and string chars
  // if so, then can proceed with next string and pattern chars (s+1, p+1)
  return hasFirstCharMatch ? isMatch(string.slice(1), pattern.slice(1)) : false;
};

var str = "ab";
// let s = "aab",
//   p = "c*a*b"; // true
var pat = ".*";

console.log(isMatch(str, pat));

/// Dynamic Programming Answer
var isMatch3 = function (s, p) {
  if (!p) return !s;
  let first = !!s && (p[0] === s[0] || p[0] === ".");

  if (p.length >= 2 && p[1] === "*") {
    return isMatch(s, p.slice(2)) || (first && isMatch(s.slice(1), p));
  } else {
    return first && isMatch(s.slice(1), p.slice(1));
  }
};

////// PRAMP GUYS ANSWER -- WRONG

function isMatch2(text, pattern) {
  // your code goes here

  // Output: false
  if (string.length === 0 && pattern.length === 0) {
    // returns true when string and pattern are empty
    return true;
  } else if (string.length !== 0 && pattern.length === 0) {
    // returns false when string contains chars with empty pattern
    return false;
  }

  let textIndex = 0;
  const set = new Set();
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "*") {
      let index = i - 1;
      while (index >= 0 && pattern[index] !== "*" && pattern[index] !== ".") {
        set.add(pattern[index]);
      }
      while (set.has(text[textIndex]) && textIndex < text.length) {
        textIndex++;
      }
      set.clear();
    } else if (pattern[i] !== "." && pattern[i] !== text[textIndex]) {
      return false;
    }
    textIndex++;
  }
  return textIndex >= text.length;
}
// console.log(isMatch2(str, pat));

//return fasle if text or pattern is empty
// iterate pattern
//match char w char text
//if char in pattern is . then skip
//if * keep track of prev chars in a set(in range w start being either the start of the word or . or *) and iterate until char in text is no longer that prev char
//if they don't match then break
// keep track of iterator on the text if hasn't hit end then return false

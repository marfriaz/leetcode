//////// Decode Ways///////
/* Dynamics Programming

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"

Given a string s containing only digits, return the number of ways to decode it.

Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/
var numDecodings = function (s) {
  if (s.length == 1) {
    return isValidEncoding(s) ? 1 : 0;
  }

  var dpTable = new Array(s.length);

  dpTable[0] = isValidEncoding(s[0]) ? 1 : 0;

  dpTable[1] =
    (isValidEncoding(s[1]) ? dpTable[0] : 0) +
    (isValidEncoding(s.substr(0, 2)) ? 1 : 0);

  for (var i = 2; i < s.length; i++) {
    dpTable[i] =
      (isValidEncoding(s[i]) ? dpTable[i - 1] : 0) +
      (isValidEncoding(s.substr(i - 1, 2)) ? dpTable[i - 2] : 0);
  }
  var isValidEncoding = (encoding) => {
    if (encoding.length == 1) {
      return encoding != "0";
    } else if (encoding.length == 2) {
      var num = parseInt(encoding, 10);
      return num >= 10 && num <= 26;
    } else {
      return false;
    }
  };

  return dpTable[dpTable.length - 1];
};

////// NEXT SOLUTION
// Iterative: O(N)
function numDecodings2(s) {
  if (s == null || s.length === 0) {
    return 0;
  }
  if (s[0] === "0") {
    return 0;
  }

  // dp = Dynamics Programming Array
  // dp[i] = # of ways of decoding a substring
  const dp = new Array(s.length + 1).fill(0);

  // initialize baton to be passed
  dp[0] = 1;
  // first character of string is not zero
  dp[1] = 1;

  // iterate through string
  for (let i = 2; i <= s.length; i++) {
    // The index i of dp is the i-th character of the string s, that is character at index i-1 of s.
    const a = Number(s.slice(i - 1, i)); // last one digit
    // check if valid single digit decode is possible (non zero)
    if (a >= 1 && a <= 9) {
      // if possible, add dp[i-1] to dp[i]
      dp[i] += dp[i - 1];
    }

    const b = Number(s.slice(i - 2, i)); // last two digits
    //  check if valid two digit decode is possible
    // This means the substring s[i-2]s[i-1] is between 10 to 26.
    // If the valid two digit decoding is possible then we add dp[i-2] to dp[i].
    if (b >= 10 && b <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[s.length];
}

const str = "12";
console.log(numDecodings(str));

//////// Longest Palindromic Substring ///////
/* Given a string s, return the longest palindromic substring in s.

let s = "babad"; //"bab"
*/

// expandAroundCenter O(n^2) time using only constant space. Since expanding a palindrome around its center could take O(n) time
// Time complexity : O(n^2) Space complexity : O(1)O(1).

var longestPalindrome = function (s) {
  let longest = "";

  const expandAroundCenter = (str, i, j) => {
    // expanding from center
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    // slice the qualified substring from the second last iteration
    return str.slice(i + 1, j);
  };

  for (let i = 0; i < s.length; i++) {
    const current1 = expandAroundCenter(s, i, i);

    // palindrome can center around 1 or 2 letters
    const current2 = expandAroundCenter(s, i, i + 1);

    const longerPalindrome =
      current1.length > current2.length ? current1 : current2;

    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
};

let s = "babad"; //"bab"
console.log(longestPalindrome(s));

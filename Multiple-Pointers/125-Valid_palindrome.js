//////// Valid Palindrome ///////
/* Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

// expandAroundCenter O(n^2) time using only constant space. Since expanding a palindrome around its center could take O(n) time
// Time complexity : O(n^2) Space complexity : O(1)O(1).

// REverse Method: Time and Space: O(n)
var isPalindrome = function (s) {
  var cleaned = s.replace(/[^a-z0-9$]/gi, "");
  var reversedAndCleaned = cleaned.split("").reverse().join("");

  return cleaned.toLowerCase() == reversedAndCleaned.toLowerCase();
};

// Two-PointersO(n) time | O(1) space

var isPalindrome2 = function (s) {
  if (s.length == 0) {
    return true;
  }

  const regex = /\W/gm;
  const cleaned = [...s.toLowerCase().replace(regex, "")];

  console.log(cleaned);

  let i = 0;
  let j = cleaned.length - 1;

  while (i < j) {
    if (cleaned[i] != cleaned[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

let s = "A man, a plan, a canal: Panama";

console.log(isPalindrome2(s));

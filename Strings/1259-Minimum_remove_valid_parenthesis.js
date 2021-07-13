////////  Minimum Remove to Make Valid Parentheses ///////
/* Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.


*/
var minRemoveToMakeValid = function (s) {
  const arr = s.split(""),
    stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "(") stack.push(i);
    else if (arr[i] == ")") {
      if (stack.length) stack.pop();
      else arr[i] = "";
    }
  }
  for (let i of stack) arr[i] = "";
  return arr.join("");
};

let s = "a)b(c)d"; // Output: "ab(c)d"

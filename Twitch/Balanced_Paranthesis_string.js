// Time O(N) | Space O(N)
function validString(input) {
  let charMap = { "(": ")", "[": "]", "{": "}" };

  let stack = [];

  // If corresponding paranthesis of last added to stack does not = current
  // then input is not balanced
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" || input[i] === "[" || input[i] === "{") {
      stack.push(input[i]);
    } else if (charMap[stack.pop()] !== input[i]) {
      return false;
    }
  }
  return true;
}

/* For two arrays of the same length a and b, let's say a is a cyclic shift of b if it's 
possible for a to become equal to b by moving 0 or more last elements to the beginning of the array, 
without changing the internal order.

You are given an array of integers elements. Your task is to check whether elements 
is a cyclic shift of the identity array [1, 2, ..., elements.length] or the reversed 
identity array [elements.length, elements.length - 1, ..., 1]. Return true if elements 
is a cyclic shift of the identity or reversed identity array, otherwise return false.

*/
function arrayShift(elements) {
  let orderedElements = [...elements].sort((a, b) => a - b);
  let reverseOrderedElements = [...orderedElements].reverse();

  if (
    elements.join("") === orderedElements.join("") ||
    elements.join("") === reverseOrderedElements.join("")
  ) {
    return true;
  }
  for (let i = 0; i < elements.length; i++) {
    let newPop = elements.pop();

    elements.unshift(newPop);
    if (
      elements.join("") === orderedElements.join("") ||
      elements.join("") === reverseOrderedElements.join("")
    ) {
      return true;
    }
  }
  return false;
}
let elements = [3, 4, 1, 2]; // 2 and 1 move to beginning of array = sorted

console.log(arrayShift(elements)); // true

///////// Array Flattener //////////
/* 
Write an iterator that, given a (potentially nested) collection will iterate over the contents of the collections in order. 
Thus, given a collection containing [[1, 3, 5],[4, 7, 3],[[2, 3], 4]] the deep iterator should return [1, 3, 5, 4, 7, 3, 2, 3, 4]
*/

// Time O(N), Space O(N)
function flattenArray(array, result = []) {
  for (let item of array) {
    if (Array.isArray(item)) {
      flattenArray(item, result);
      // Will complete first array first- which goes to else statement in recursion
    } else {
      result.push(item);
    }
  }
  return result;
}

let array = [
  [1, 3, 5],
  [4, 7, 3],
  [[2, 3], 4],
];
console.log(flattenArray(array));

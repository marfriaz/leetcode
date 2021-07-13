/*
Given an array of integers a of even length, your task is to split it into two arrays of equal 
length such that all the numbers are unique in each of them.

There may be more than one possible answer, in which case you may return any of them. 
If there are no possible answers, return an empty array.

Hint: Count the number of occurrences of each integer in a. 
If there are integers occurring more than twice, then there is no solution. 
Next, put the integers occurring twice into both answer arrays. 
Finally, put all other numbers in the answer arrays, following the condition that they should have equal sizes.
*/
// Time O(N), Space O(N)
function divideArray(a) {
  let map = {};

  for (let i = 0; i < a.length; i++) {
    map[a[i]] = (map[a[i]] || 0) + 1;
  }

  let arr1 = [];
  let arr2 = [];

  let arr1LastPush = true;

  for (let key in map) {
    if (map[key] > 2) {
      return [];
    } else if (map[key] === 2) {
      arr1.push(Number(key));
      arr2.push(Number(key));
    } else {
      if (arr1LastPush) {
        arr2.push(Number(key));
        arr1LastPush = false;
      } else {
        arr1.push(Number(key));
        arr1LastPush = true;
      }
    }
  }

  if (arr1.length !== arr2.length) {
    return [];
  }
  return [arr1, arr2];
}

let a = [2, 1, 2, 3, 3, 4];
console.log(divideArray(a)); // [[2, 1, 3], [2, 3, 4]].

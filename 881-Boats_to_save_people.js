//////// Boats to Save People ///////
/*
You are given an array people where people[i] is the weight of the ith person, 
and an infinite number of boats where each boat can carry a maximum weight of limit. 
Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.
*/

// time O(n)
// space O(n)

function boats(people, limit) {
  let minBoats = 0;
  people.sort((a, b) => a - b);

  let leftIndex = 0;

  let rightIndex = people.length - 1;

  while (leftIndex <= rightIndex) {
    let sum = people[leftIndex] + people[rightIndex];

    if (sum <= limit) {
      minBoats++;
      leftIndex++;
      rightIndex--;
    } else {
      rightIndex--;
      minBoats++;
    }
  }
  return minBoats;
}

let people = [3, 2, 2, 1]; // 3
let limit = 3;
console.log(boats(people, limit));

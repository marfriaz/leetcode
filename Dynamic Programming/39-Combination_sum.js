//////// Combination Sum ///////
/* Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

// BACKTRACKING: a general algorithm for finding all (or some) solutions to some computational problems.
//The idea is that it incrementally builds candidates to the solutions, and abandons a candidate ("backtrack")
//as soon as it determines that this candidate cannot lead to a final solution.

var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  var length = candidates.length;
  var res = [];

  function search(idx, prefix, target) {
    if (target === 0) {
      res.push(prefix.slice());
    }
    if (idx === length) {
      return;
    }
    if (target <= 0) {
      return;
    }

    prefix.push(candidates[idx]);
    search(idx, prefix, target - candidates[idx]);
    prefix.pop();
    search(idx + 1, prefix, target);
  }

  search(0, [], target);
  return res;
};

let candidates = [2, 3, 6, 7]; // [[2,2,3],[7]]
let target = 7;
console.log(combinationSum(candidates, target));

//////// Target Sum ///////
/* You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. 
Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target .
*/

// Dynamics Programming
var findTargetSumWays = function (nums, target) {
  let sums = new Map([[0, 1]]);

  for (let num of nums) {
    const next = new Map();

    for (let [sum, amount] of sums) {
      const plus = sum + num;
      const minus = sum - num;

      next.set(plus, next.has(plus) ? next.get(plus) + amount : amount);
      next.set(minus, next.has(minus) ? next.get(minus) + amount : amount);
    }
    console.log(next);

    sums = next;
  }
  console.log(sums);
  return sums.has(target) ? sums.get(target) : 0;
};

let nums = [1, 1, 1, 1, 1];
let target = 3;

console.log(findTargetSumWays(nums, target));

// DFS + Memoization
const findTargetSumWays2 = (nums, S) => {
  let memo = new Map();
  return dfs(nums, memo, S, 0);
};

const dfs = (nums, memo, S, cur) => {
  if (memo.has(S + " " + cur)) return memo.get(S + " " + cur);
  if (cur == nums.length) return S == 0 ? 1 : 0;

  let result =
    dfs(nums, memo, S - nums[cur], cur + 1) +
    dfs(nums, memo, S + nums[cur], cur + 1);

  memo.set(S + " " + cur, result);
  return result;
};

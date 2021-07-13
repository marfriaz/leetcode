/////// Subsets ///////

/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

var subsets = function (nums) {
  let res = [[]];
  for (let i = 0; i < nums.length; i++) {
    res.forEach((item) => {
      res.push([...item, nums[i]]);
    });
  }
  return res;
};

let input = [1, 2, 3];
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];

console.log(subsets(input));

//// hard
function subsets2(nums) {
  const powerset = [];
  generatePowerset([], 0);

  function generatePowerset(path, index) {
    powerset.push(path);
    for (let i = index; i < nums.length; i++) {
      generatePowerset([...path, nums[i]], i + 1);
    }
  }

  return powerset;
}

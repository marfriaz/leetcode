//////// Product of Array Except Self ///////
/* Given an array nums of n integers where n > 1,  
return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
*/

var productExceptSelf = function (nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;

  for (var j = 0; j < nums.length; j++) {
    output[j] = leftMult;
    // leftMult updated after we've assigned to array, meaning it wont be included
    leftMult *= nums[j];
  }
  // console.log(output); // [ 1, 1, 2, 6 ]

  for (var i = nums.length - 1; i >= 0; i--) {
    output[i] *= rightMult;
    rightMult *= nums[i];
  }

  return output;
};

let arr = [1, 2, 3, 4]; // [24, 12, 8, 6];
console.log(productExceptSelf(arr));

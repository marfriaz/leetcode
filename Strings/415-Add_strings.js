/////// Add Strings ///////

/*
Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

var addStrings = function (num1, num2) {
  const dict = {
    "": 0,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let totalSum = "";
  let len1 = num1.length;
  let len2 = num2.length;
  let carry = 0;

  while (len1 > 0 || len2 > 0 || carry) {
    let num1Digit = dict[num1.charAt(len1 - 1)];
    let num2Digit = dict[num2.charAt(len2 - 1)];
    len1--;
    len2--;

    let rightSum = num1Digit + num2Digit + carry;

    carry = rightSum > 9 ? 1 : 0;
    let digitToAppend = rightSum > 9 ? rightSum % 10 : rightSum;
    totalSum = `${digitToAppend}${totalSum}`;
  }

  return totalSum;
};

console.log(addStrings("501", "501")); // 1002

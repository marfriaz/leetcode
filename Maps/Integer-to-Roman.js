//////// Integer to Roman ///////
/* 

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Given an integer, convert it to a roman numeral.

*/

var intToRoman = function (num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  const toCheck = Object.entries(map);

  for (let [roman, digit] of toCheck) {
    if (num === 0) break;

    const count = Math.floor(num / digit);
    console.log("count", count);

    for (let i = 0; i < count; i++) {
      result += roman;
    }

    num -= digit * count;
  }
  return result;
};

let input = 9;
console.log(intToRoman(input)); // IX

var wordPattern = function (pattern, s) {
  // Iterate through pattern

  let arr = s.split(" ");

  if (pattern.length !== arr.length) {
    return false;
  }

  let obj = {};

  for (let i = 0; i < pattern.length; i++) {
    if (obj[pattern[i]] && obj[pattern[i]] !== arr[i]) {
      console.log(obj[pattern[i]], arr[i]);
      return false;
    } else if (!obj[pattern[i]]) {
      if (Object.values(obj).includes(arr[i])) {
        console.log(arr[i], i);
        return false;
      } else {
        obj[pattern[i]] = arr[i];
      }
    }
  }
  return true;
};

let pattern = "abba";
let s = "dog cat cat dog";

console.log(wordPattern(pattern, s));

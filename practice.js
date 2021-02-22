//////// Find Duplicate File in System ///////

// hashmap

/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.
*/

var findDuplicate = function (paths) {
  let map = {};

  for (let text of paths) {
    let files = text.split(" ");

    let content = "";

    for (let i = 1; i < files.length; i++) {
      let parenth = files[i].indexOf("(");
      let content = files[i].substring(parenth + 1, files[i].length - 1);

      map[content] = map[content] || [];
      map[content].push(files[0] + "/" + files[i].substring(0, parenth));
    }
  }
  return Object.values(map).filter((dups) => dups.length > 1);
};

var input = [
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
];

// Output: [["root/a/2.txt", "root/c/d/4.txt", "root/4.txt"],["root/a/1.txt", "root/c/3.txt"],];

console.log(findDuplicate(input));

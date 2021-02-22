//////// Find Duplicate File in System ///////

// hashmap

/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.
*/

var findDuplicate = function (paths) {
  const map = {};
  // string of array of strings
  for (let text of paths) {
    let files = text.split(" ");
    // each path = array of files
    // iterate over each file, starting after 1 (after root folder)
    for (let i = 1; i < files.length; i++) {
      // find index of content
      let paren = files[i].indexOf("(");
      // get pure content of file 'abcd'
      let content = files[i].substring(paren + 1, files[i].length - 1);
      // add to map
      console.log(map);
      map[content] = map[content] || [];
      console.log(map);
      // value = array.push(folder + 1.txt- cut off at paren)
      // contents
      map[content].push(files[0] + "/" + files[i].substr(0, paren));
    }
  }
  // console.log(map);
  // no empty values
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

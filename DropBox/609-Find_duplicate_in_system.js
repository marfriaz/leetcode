//////// Find Duplicate File in System ///////

// hashmap

/*
Find all duplicate files by content in your filesystem.
Make one array, with all files with same text file in same subarry. 
If not duplicate, don't return

*/
// Time: O(N^2), Space: O(N)
var findDuplicate = function (paths) {
  const map = {};
  // string of array of strings
  for (let text of paths) {
    // NOtice how string is split by spaces?
    let files = text.split(" ");

    // each path = array of files
    // iterate over each file, starting after 1 (after root folder)
    for (let i = 1; i < files.length; i++) {
      // find index of content
      let paren = files[i].indexOf("(");
      // get pure content of file 'abcd'
      let content = files[i].substring(paren + 1, files[i].length - 1);
      // add to map
      // console.log(map);
      map[content] = map[content] || [];
      // console.log(map);
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

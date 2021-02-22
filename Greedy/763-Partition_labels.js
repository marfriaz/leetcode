//////// Partition Labels ///////
/* 
A string S of lowercase English letters is given. 
We want to partition this string into as many parts as possible 
so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
*/

var partitionLabels = function (S) {
  if (!S) return "";

  const lastIndicies = {};

  for (let i = 0; i < S.length; i++) {
    lastIndicies[S[i]] = i;
  }
  console.log(lastIndicies);

  let lastIndex = lastIndicies[S[0]];
  let startIndex = 0;
  const partitionLengths = [];

  for (let i = 0; i < S.length; i++) {
    // if lastIndex of lettter is found
    // push the index and update lastIndex to next one
    if (i === lastIndex) {
      partitionLengths.push(i - startIndex + 1);
      startIndex = i + 1;
      lastIndex = lastIndicies[S[i + 1]];
    } else {
      // if not, check which lastIndex to check based on lastIndice
      lastIndex = Math.max(lastIndex, lastIndicies[S[i]]);
    }
  }

  return partitionLengths;
};

let s = "ababcbacadefegdehijhklij"; // [ 9, 7, 8 ]
console.log(partitionLabels(s));

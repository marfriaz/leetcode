////////  Find Common Characters ///////

/*
Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  
For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.*/

// Time O(N^2), Space O(N)
const commonChars = (words) => {
  let hashmap = {};
  let first = words[0];

  // Base letters we will be checking against
  for (const char of first) {
    hashmap[char] = (hashmap[char] || 0) + 1;
  }

  // iterate over rest or words checking if letter in word exists in hashmap
  // if so, add to temp hashmap, to compare to next word!!
  // make sure to consider duplicate letters
  // at the end. replace hashmap with map, to check next word
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const temp = {};
    for (const letter of word) {
      if (hashmap[letter]) {
        hashmap[letter]--;
        temp[letter] = (temp[letter] || 0) + 1;
      }
    }
    hashmap = temp;
  }

  const result = [];
  for (let [key, value] of Object.entries(hashmap)) {
    while (value) {
      result.push(key);
      value--;
    }
  }

  return result;
};

let input = ["bella", "label", "roller"]; // ["e","l","l"]
console.log(commonChars(input));

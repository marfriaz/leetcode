//// Intersection of N tuples/////
/*
Questions about finding all pair wise intersections between a list of n tuples. each tuple is (key => list).
 */

function intesect(tuples) {
  let keys = Object.keys(tuples);

  let result = {};

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      let resultKey = "inersect_" + keys[i] + keys[j];
      result[resultKey] = [];

      let tuplesValues1 = tuples[keys[i]];
      let tuplesValues2 = tuples[keys[j]];

      for (let k = 0; k < tuplesValues1.length; k++) {
        if (tuplesValues2.includes(tuplesValues1[k])) {
          result[resultKey].push(tuplesValues1[k]);
        }
      }
    }
  }
  return result;
}

let tuples = { A: ["A", "C"], B: ["C", "D", "E"], C: ["A", "C", "E"] };

console.log(intesect(tuples));
/*
intersect_AB={"c"}
intersect_BC={"c", "e"}
intersect_AC={"a", "c"}
*/

/////////////////
/////////////////
////GOOGLE ANSWER - No duplicates

// Time: O(N), Space: O(N)
function intersection2(A, B, C) {
  const result = [];

  // Edge case: one array does not have values
  if (A.length === 0 || B.length === 0 || C.length === 0) return result;

  // Create map for array A, B and C where key is number and value is true
  const mapA = new Map();
  const mapB = new Map();
  const mapC = new Map();

  A.forEach((num) => mapA.set(num, true));
  B.forEach((num) => mapB.set(num, true));
  C.forEach((num) => mapC.set(num, true));
  // Check if key in mapA exists in other maps,
  // if so add to result
  for (const [key, val] of mapA) {
    if (mapB.has(key) && mapC.has(key)) {
      result.push(key);
    }
  }

  return result;
}
console.log(intersection2([1, 2, 3], [1, 2, 3], [1, 2, 3]));

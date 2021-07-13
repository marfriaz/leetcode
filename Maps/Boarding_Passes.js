/*
 * Given the list of boarding passess:
 * NYC -> MCO
 * PHX -> NYC
 * SFO -> PHX
 * final trip
 * "SFO —> PHX ---> NYC ---> MCO"
 */
const boardingPasses = [
  { start: "NYC", end: "MCO" },
  { start: "PHX", end: "NYC" },
  { start: "SFO", end: "PHX" },
];

const generateItinerary = (passes) => {
  const destinationMap = {};

  for (let i = 0; i < passes.length; i++) {
    destinationMap[passes[i].start] = passes[i].end;
  }

  const mapCopy = { ...destinationMap };
  //   console.log(destinationMap);

  Object.keys(destinationMap).forEach((key) => {
    // value of key
    if (mapCopy[destinationMap[key]]) {
      delete mapCopy[destinationMap[key]];
    }
  });

  let startingLocation = Object.keys(mapCopy)[0];
  const result = [startingLocation];

  while (destinationMap[startingLocation]) {
    result.push(destinationMap[startingLocation]);
    startingLocation = destinationMap[startingLocation];
  }
  return result;
};

console.log(generateItinerary(boardingPasses));

///
/////////////SPENCER ///////
/////////////SPENCER ///////
/////////////SPENCER ///////
/////////////SPENCER ///////

const generateItinerary2 = (passes) => {
  // create finalArray to store destinations in order
  let finalArray = [];

  // initialize a hashMap
  let myMap = new Map();

  // iterate through array of objects
  // ** INVERT START AND ENDS
  passes.forEach((pass) => {
    let startDestination = pass["end"];
    // if start value is not in hashMap
    // create entry with start : end in map
    if (!myMap.has(startDestination)) {
      let endDestination = pass["start"];
      myMap.set(startDestination, endDestination);
    }
  });

  // scan through keys (starts) to see which start has no end value

  // iterate through keys and values
  for (let [key, value] of myMap) {
    if (!myMap.has(value)) {
      let firstDestination = value;
      finalArray.push(firstDestination);
    }
  }

  // while finalArray.length !== boardingPasses.length + 1
  // create currentFinalDestination variable
  // push - search hashMap value by key of currentFinalDestination variable

  while (finalArray.length !== passes.length + 1) {
    let currentDestination = finalArray[finalArray.length - 1];
    // iterate through hashMap
    for (let [key, value] of myMap) {
      // if value === currentDestination
      if (value === currentDestination) {
        finalArray.push(key);
      }
    }
  }

  // console.log(finalArray);
  return finalArray;
  // return finalArray
};
console.log(generateItinerary2(boardingPasses));

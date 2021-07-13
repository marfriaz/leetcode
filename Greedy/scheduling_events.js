//////// Find max events ///////
/* 

Given 2 arrays: arrivals and their durations, determine the max number of events 
that may occur. 

*/

//  O(n^2) time | O(1) space
function maxEvents(arrival, duration) {
  let events = [];
  let maxNumEvents = 1;

  // events = [[start time, end time]]
  for (var i = 0; i < arrival.length; i++) {
    events.push([arrival[i], arrival[i] + duration[i]]);
  }

  function compare(a, b) {
    return a[1] - b[1];
  }

  // Sort events based on end time
  let sortedEvents = events.sort(compare);

  for (var i = 0; i < sortedEvents.length; i++) {
    let count = 1;
    let endTime = sortedEvents[i][1];

    for (var j = 1; j < sortedEvents.length; j++) {
      // increment count if start time is compatible with end time
      if (endTime <= sortedEvents[j][0]) {
        endTime = sortedEvents[j][1];
        count += 1;
      }
      // replace ultimate count if current count is greater
      if (count > maxNumEvents) {
        maxNumEvents = count;
      }
    }
  }
  return maxNumEvents;
}

// let arrival = [1,3,3,5,7]
// let duration = [2,2,1,2,1]
// let arrival = [1,3,5]
// let duration = [2,2,2]

// let arrival = [ 328, 730, 841, 613, 304, 170, 710, 158, 561, 934 ]
// let duration = [ 100, 279, 817, 336, 98, 827, 513, 268, 811, 634 ]

// let arrival = [ 250, 74, 659, 931, 273, 545, 879 ] // 2?
// let duration = [ 924, 710, 441, 166, 493, 43, 988 ]

let arrival = [
  150, 580, 822, 968, 673, 394, 337, 486, 746, 229, 92, 195, 358, 2,
]; // 5
let duration = [
  154, 709, 945, 669, 491, 125, 197, 531, 904, 723, 667, 550, 25, 802,
];
// let arrival = [1,1,1,1,4]  // 2
// let duration = [10,3,4,6,2]
console.log(maxEvents(arrival, duration)); // 4

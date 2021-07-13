//////// Meeting Rooms II ///////
/* 

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
return the minimum number of conference rooms required.
*/

// Time: O(N); Space: O(N)
// As long as some start times are greater than some end times, then a room doesnt have to be created
var minMeetingRooms = function (intervals) {
  if (!intervals || intervals.length < 1) {
    return 0;
  }
  let rooms = 0;

  // end pointer
  let end = 0;

  // sort start times
  const starts = intervals.map((a) => a[0]).sort((a, b) => a - b);

  // sort end times
  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  // iterate over all start and end times
  for (let i = 0; i < intervals.length; i++) {
    // if start time is less than end time
    // this means that meeting is still going while other has not ended
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      // if start timing is finally greater than former end time,
      // move to next end time
      // meeting has ended by the time the meeting at start had to start
      end++;
    }
  }
  return rooms;
};

var ints = [
  [0, 30],
  [5, 10],
  [15, 20],
];

console.log(minMeetingRooms(ints)); // 2

/////
// FOLLOW UP: MAP CONFERENCE ROOM to INTERVAL //
// { '1': [ [ 0, 30 ] ], '2': [ [ 5, 10 ], [ 15, 20 ] ] }
///////

// Time: O(N^2); Space: O(N)
var minMeetingRooms2 = function (intervals) {
  if (!intervals || intervals.length < 1) {
    return 0;
  }
  let rooms = 0;
  let roomsMap = {};

  let end = 0;

  const starts = intervals.map((a, i) => [a[0], i]).sort((a, b) => a[0] - b[0]);
  // console.log("starts", starts);
  const ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i][0] < ends[end]) {
      rooms++;
      // Want to map everything now
      roomsMap[rooms] = [intervals[starts[i][1]]];
    } else {
      end++;
      // Determine which room
      for (const key in roomsMap) {
        let finalValueOfKey = roomsMap[key][roomsMap[key].length - 1][1];
        if (finalValueOfKey < starts[i][0]) {
          roomsMap[key].push(intervals[starts[i][1]]);
        }
      }
    }
  }

  return roomsMap;
};

var ints = [
  [0, 30],
  [5, 10],
  [15, 20],
];

console.log(minMeetingRooms2(ints)); // 2

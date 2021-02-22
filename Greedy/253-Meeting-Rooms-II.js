//////// Meeting Rooms II ///////
/* 

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
return the minimum number of conference rooms required.
*/

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

  console.log(starts);
  console.log(ends);

  // iterate
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

console.log(minMeetingRooms(ints));

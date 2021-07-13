////////  Insert Interval///////

/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

*/

const insert = (intervals, newInterval) => {
  if (!intervals) return [];
  const result = [];

  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);

  if (intervals.length === 1) return intervals;

  const prev = [intervals[0][0], intervals[0][1]];

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if (isOverlap(prev, curr)) {
      prev[0] = Math.min(prev[0], curr[0]);
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push([...prev]);
      prev[0] = curr[0];
      prev[1] = curr[1];
    }

    if (i === intervals.length - 1) result.push([...prev]);
  }

  return result;
};

const isOverlap = (prev, curr) => {
  return (
    // prev endTime >= curr Start time AND prev endTime <= curr end time
    (prev[1] >= curr[0] && prev[1] <= curr[1]) ||
    (prev[0] >= curr[0] && prev[0] <= curr[1]) ||
    (prev[0] <= curr[0] && prev[1] >= curr[1])
  );
};

let intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5]; //[[1,5],[6,9]]

console.log(insert(intervals, newInterval));

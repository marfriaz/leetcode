//////// Merge Intervals ///////
/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.
*/

var merge = function (intervals) {
  if (!intervals.length) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);

  // first index of sorted intervals
  const result = [intervals[0]];

  for (let [start, end] of intervals) {
    // if start <= last end time of result
    if (start <= result[result.length - 1][1]) {
      // startPrev, endPrev = result start and end
      // we're mutating the end time
      const [startPrev, endPrev] = result.pop();
      // add startPrev and max end time
      result.push([startPrev, Math.max(end, endPrev)]);
    } else {
      // otherwise, just push it
      result.push([start, end]);
    }
  }
  return result;
};

const input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]; // [[1,6],[8,10],[15,18]]

console.log(merge(input));

//////
//// doesnt work for some reason
var merge2 = function (intervals) {
  if (!intervals.length) {
    return intervals;
  }

  // iterate over intervals
  // if start time of previous is <= end time of next, update prevs endtime = next endtime
  let newIntervals = [];
  for (let i = 1; i < intervals.length; i++) {
    const prevInterval = intervals[i - 1];
    const currInterval = intervals[i];
    if (prevInterval[1] <= currInterval[1]) {
      newIntervals.push([prevInterval[0], currInterval[1]]);
      return merge([...newIntervals, intervals.slice(2)]);
    } else {
      newIntervals.push(prevInterval);
      newIntervals.push(currInterval);
    }
  }
  return newIntervals;
};

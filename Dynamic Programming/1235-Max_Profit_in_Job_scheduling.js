//////// Maximum Profit in Job Scheduling ///////
/* We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i].

You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.

If you choose a job that ends at time X you will be able to start another job that starts at time X.


*/

// DP
var jobScheduling = function (startTime, endTime, profit) {
  let jobs = [];
  let n = startTime.length;
  for (let i = 0; i < n; i++) {
    jobs.push({ s: startTime[i], e: endTime[i], p: profit[i] });
  }
  jobs.sort(function (x, y) {
    return x.e - y.e;
  });
  let dp = new Array(n);
  dp[0] = jobs[0].p;
  for (let i = 1; i < n; i++) {
    let profit = jobs[i].p;
    let task = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (jobs[j].e <= jobs[i].s) {
        // End time less than start time
        task = j;
        break;
      }
    }
    if (task != -1) profit += dp[task];
    dp[i] = Math.max(profit, dp[i - 1]);
  }
  return dp[n - 1];
};

let startTime = [1, 2, 3, 4, 6],
  endTime = [3, 5, 10, 6, 9],
  profit = [20, 20, 100, 70, 60];

console.log(jobScheduling(startTime, endTime, profit)); //150

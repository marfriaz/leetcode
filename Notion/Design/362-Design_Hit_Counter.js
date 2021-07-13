//////// Design Hit Counter ///////
/* 
Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).

Your system should accept a timestamp parameter (in seconds granularity), and you may assume that calls 
are being made to the system in chronological order (i.e., timestamp is monotonically increasing). Several hits may arrive roughly at the same time.
*/

// O(n) time | O(n) space
class HitCounter {
  constructor() {
    this.hitMap = new Map();
  }

  // O(1)
  hit(timestamp) {
    if (this.hitMap.get(timestamp)) {
      this.hitMap.set(timestamp, this.hitMap.get(timestamp) + 1);
    } else {
      this.hitMap.set(timestamp, 1);
    }
  }

  // O(N)
  getHits(timestamp) {
    let hits = 0;
    let start = timestamp >= 300 ? timestamp - 300 + 1 : 1;
    // counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds)
    for (let i = start; i <= timestamp; i++) {
      if (this.hitMap.has(i)) {
        hits += this.hitMap.get(i);
      }
    }
    return hits;
  }
}

let hitCounter = new HitCounter();
hitCounter.hit(1); // hit at timestamp 1.
hitCounter.hit(2); // hit at timestamp 2.
hitCounter.hit(3); // hit at timestamp 3.
console.log(hitCounter.getHits(4)); // get hits at timestamp 4, return 3.
hitCounter.hit(300); // hit at timestamp 300.
console.log(hitCounter.getHits(300)); // get hits at timestamp 300, return 4.
hitCounter.getHits(301); // get hits at timestamp 301, return 3.

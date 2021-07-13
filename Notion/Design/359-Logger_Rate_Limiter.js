//////// Logger Rate Limiter ///////
/* 
Design a logger system that receives a stream of messages along with their timestamps. 
Each unique message should only be printed at most every 10 seconds (i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10).

All messages will come in chronological order. Several messages may arrive at the same timestamp.

Implement the Logger class:

Logger() Initializes the logger object.
bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.
*/

// TIme: O(1) | Space: O(N)
// Minimum val could get buried

// Time O(1) | Space: O(N)
// Do we want to replace timestamps or store??

class Logger {
  constructor() {
    this.logMap = new Map();
  }

  shouldPrintMessage(timestamp, message) {
    if (!this.logMap.has(message)) {
      this.logMap.set(message, timestamp);
      return true;
    }
    const prevTime = this.logMap.get(message);
    if (timestamp < prevTime + 10) return false;
    this.logMap.set(message, timestamp);
    return true;
  }
}

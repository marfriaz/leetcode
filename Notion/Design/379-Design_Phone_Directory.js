////////  Design Phone Directory ///////
/* 
Design a phone directory that initially has maxNumbers empty slots that can store numbers. 
The directory should store numbers, check if a certain slot is empty or not, and empty a given slot.

Implement the PhoneDirectory class:

- PhoneDirectory( maxNumbers) Initializes the phone directory with the number of available slots maxNumbers.
- get() Provides a number that is not assigned to anyone. Returns -1 if no number is available.
- check(int number) Returns true if the slot number is available and false otherwise.
- release( number) Recycles or releases the slot number.

*/
// Using HashMap - O(N) for get, better by deleting using a set
class PhoneDirectory {
  constructor(maxNumbers) {
    this.map = new Map();
    this.len = maxNumbers;
    while (maxNumbers--) this.map.set(maxNumbers, false);
  }

  // Provide a number which is not assigned to anyone.
  get() {
    for (const [key, value] of this.map) {
      if (value === false) {
        this.map.set(key, true);
        return key;
      }
    }

    return -1;
  }

  // Check if a number is available or not.
  check(number) {
    return !this.map.get(number);
  }

  // Recycle or release a number.
  release(number) {
    if (this.map.has(number)) {
      this.map.set(number, false);
    }
  }
}

let phoneDirectory = new PhoneDirectory(3);
console.log(phoneDirectory);
console.log(phoneDirectory.get()); // It can return any available phone number. Here we assume it returns 0.
phoneDirectory.get(); // Assume it returns 1.

//////////////
//// FUNCTION   ////////
////////////////////////////

// Using HashMap - O(N) for get, better by deleting using a set
var PhoneDirectory2 = function (maxNumbers) {
  this.map = new Map();
  this.len = maxNumbers;

  while (maxNumbers--) {
    this.map.set(maxNumbers, false);
  }
};

// Provide a number which is not assigned to anyone.
PhoneDirectory2.prototype.get = function () {
  for (const [key, value] of this.map) {
    if (value === false) {
      this.map.set(key, true);
      return key;
    }
  }

  return -1;
};

// Check if a number is available or not.
PhoneDirectory2.prototype.check = function (number) {
  return !this.map.get(number);
};

// Recycle or release a number.
PhoneDirectory2.prototype.release = function (number) {
  if (this.map.has(number)) {
    this.map.set(number, false);
  }
};

//////////////////
//////////////////
///////// USING SET /////////

class PhoneDirectory3 {
  /**
   * Initialize your data structure here
   @param maxNumbers - The maximum numbers that can be stored in the phone directory.
   * @param {number} maxNumbers
   */
  constructor(maxNumbers) {
    this.len = maxNumbers;
    this.set = new Set();
    while (maxNumbers--) this.set.add(maxNumbers);
  }

  /**
   * Provide a number which is not assigned to anyone.
   @return - Return an available number. Return -1 if none is available.
   * @return {number}
   */
  get() {
    if (this.set.size === 0) return -1;
    const n = this.set.values().next().value;
    this.set.delete(n);
    return n;
  }

  /**
   * Check if a number is available or not.
   * @param {number} number
   * @return {boolean}
   */
  check(number) {
    return this.set.has(number);
  }

  /**
   * Recycle or release a number.
   * @param {number} number
   * @return {void}
   */
  release(number) {
    this.set.add(number);
  }
}

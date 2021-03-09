// Using HashMap - O(N) for get, better by deleting using a set
var PhoneDirectory = function (maxNumbers) {
  this.map = new Map();
  this.len = maxNumbers;

  while (maxNumbers--) {
    this.map.set(maxNumbers, false);
  }
};

/**
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  for (const [key, value] of this.map) {
    if (value === false) {
      this.map.set(key, true);
      return key;
    }
  }

  return -1;
};

/**
 * Check if a number is available or not.
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  return !this.map.get(number);
};

/**
 * Recycle or release a number.
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  if (this.map.has(number)) {
    this.map.set(number, false);
  }
};

//////////////////
//////////////////
///////// USING SET /////////

class PhoneDirectory {
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

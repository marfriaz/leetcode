//////// LRU Cache ///////
/* 
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

 - LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 -  get(int key) Return the value of the key if the key exists, otherwise return -1.
 -  put(int key, int value) Update the value of the key if the key exists. Otherwise, 
 add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, 
 evict the least recently used key.
*/

/*
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

*/

////// Class ////
// Time O(1) | Space O(N)
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      const [keyToDelete] = this.cache.keys();
      this.cache.delete(keyToDelete); // keys().next().value returns first item's key
      // This deletes the first key in the Map.
      // Maps have have hash tables consisting of an array?
    }
  }
}
let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lRUCache);
console.log(lRUCache.get(1)); // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache);
lRUCache.get(2); // returns -1 (not found)

//////////////
//// FUNCTION   ////////
////////////////////////////

/// HashMap (Linked HashMap, is iterated in order )
//// Function

var LRUCache2 = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

LRUCache2.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  }

  const v = this.cache.get(key);
  // By deleting and setting, we put it in the back,
  // It was recently used, meaning we dont want it deleted soon
  this.cache.delete(key);
  this.cache.set(key, v);
  return this.cache.get(key);
};

LRUCache2.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);

  // Least Recently Used = delete first key = least used
  if (this.cache.size > this.capacity) {
    const [keyToDelete] = this.cache.keys();
    this.cache.delete(keyToDelete); // keys().next().value returns first item's key
  }
};

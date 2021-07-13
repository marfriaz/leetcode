/*
## Hash Map Methods

- this.map.delete(key)
- this.map.has()
- this.map.get()
- this.map.set()

- this.map.keys().next.value // first item's keys

const [keyToDelete] = this.cache.keys();
this.cache.delete(keyToDelete); // keys().next().value returns first item's key

To iterate over values of Map:
  for (let [key, value] of myMap) {
    
  }
*/

function mapPractice(array) {
  let map = new Map();

  for (let i = 0; i < array.length; i++) {
    map.set(array[i], (map.get(array[i]) || 0) + 1);
  }
  /// USE map.get here^^

  console.log(map);

  for (let [key, value] of myMap) {
    // To iterate over keys^
    // Object would be 'in'
    if (!myMap.has(value)) {
      let firstDestination = value;
      finalArray.push(firstDestination);
    }
  }
}

let array = [2, 1, 2, 3, 3, 4];
console.log(mapPractice(array));

/* Objects
Object.entries(obj) = [['key', value], ['key', value]]

*/

//   for (let [key, value] of Object.entries(hashmap)) WORKS FOR OBJECTS and MAPs
// FOR MAPS = for (let [key, value] of myMap)

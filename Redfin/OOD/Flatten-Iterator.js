//O(N+L)

class NestedIterator {
  constructor(nestedList) {
    this.data = [];
    this.position = 0;
    this.flatten(nestedList);
  }

  flatten(list) {
    for (let el of list)
      if (Array.isArray(el)) {
        this.flatten(el);
      } else this.data.push(el);
  }

  hasNext() {
    return this.position < this.data.length;
  }

  next() {
    if (!this.hasNext()) return undefined;

    return this.data[this.position++];
  }
}

let yo = new NestedIterator([[1, 1], 2, [1, 1]]);
console.log(yo);

class PeekingIterator {
  constructor(iterator) {
    this.list = iterator;
    this.top = iterator[0];
  }

  peek() {
    if (this.top) {
      return this.top;
    }
    if (this.list.hasNext()) {
      this.top = this.list.next();
      return this.top;
    }
    return false;
  }

  next() {
    if (this.top) {
      var v = this.top;
      this.top = null;
      return v;
    }
    return this.list.next();
  }

  hasNext() {
    if (this.top) {
      return true;
    }
    return this.list.hasNext();
  }
}
let test = new PeekingIterator([1, 2, 3]);
console.log(test.next());

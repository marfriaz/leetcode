//////// Min Stack ///////
/* 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
 push(val) pushes the element val onto the stack.
 pop() removes the element on the top of the stack.
 top() gets the top element of the stack.
 getMin() retrieves the minimum element in the stack.

 Stack = Last in, first out
*/

// TIme: O(1) | Space: O(N)
// Minimum val could get buried

class MinStack {
  constructor() {
    this.minStack = [];
    this.stack = [];
  }

  push(val) {
    if (!this.stack.length) {
      this.minStack.push(val);
    } else {
      if (val < this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      } else {
        this.minStack.push(this.minStack[this.minStack.length - 1]);
      }
    }
    this.stack.push(val);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    let top = this.stack[this.stack.length - 1];
    return top;
  }

  getMin() {
    let min = this.minStack[this.minStack.length - 1];
    return min;
  }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2

/// PROTOTYPE
const MinStack = function () {
  this.minStack = [];
  this.stack = [];
};

MinStack.prototype.push = function (x) {
  if (!this.stack.length) {
    this.minStack.push(x);
  } else {
    if (x < this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }
  this.stack.push(x);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function () {
  let top = this.stack[this.stack.length - 1];
  return top;
};

MinStack.prototype.getMin = function () {
  let min = this.minStack[this.minStack.length - 1];
  return min;
};

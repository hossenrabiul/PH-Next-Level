export default class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.items.pop();
  }
  isEmpty() {
    if (this.items.length === 0) {
      return true;
    }
    return false;
  }
}

// const stack = new Stack()
// console.log(stack)

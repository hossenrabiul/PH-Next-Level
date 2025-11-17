class Counter {
    // static means it will work staticly not dynamecally, no matter how many instance we create, it will act only upon the first instance
  static count: number = 0;

  increment() {
    return (Counter.count = Counter.count + 1);
  }

  decrement() {
    return (Counter.count = Counter.count - 1);
  }
}

const count1 = new Counter();
console.log(count1.increment());
console.log(count1.increment());
console.log(count1.increment());

const count2 = new Counter();
console.log(count2.increment());
console.log(count2.increment());
console.log(count2.increment());
console.log(count2.decrement());
console.log(count2.decrement());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
  }

  // Insert in the head
  prepend(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  insert(index, value) {
    const newNode = new Node(value);

    if (index < 0 || index > this.length) {
      return console.log("Invalid Index");
    }
    if (index == 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }
    let temp = this.head;

    while (index != 1) {
      temp = temp.next;
      index--;
    }
    //   console.log("tmp", temp.value);
    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;
  }

  // Remove
  remove(index) {
    if (index < 0 || index > this.length) {
      console.log("Index is out of bound");
      return undefined;
    }
    if (index == 0 || index === this.length) {
      if (index == 0) {
        const removeNode = this.head
        this.head = this.head.next;
        if (this.head === null) {
          this.tail = null;
        }
        return removeNode;
      } else {
        let count = 0;
        let temp = this.head;
        while (count != index - 1) {
          temp = temp.next;
          count++;
        }
        const removeNode = temp.next;
        temp.next = removeNode.next;
        this.tail = temp;
      }
    }

    let count = 0;
    let temp = this.head;
    while (count != index - 1) {
      temp = temp.next;
      count++;
    }
    temp.next = temp.next.next;

    this.length--;
  }

  print() {
    let temp = this.head;

    while (temp != null) {
      console.log(temp.value, " ");
      temp = temp.next;
    }
  }
}

const contrust1 = new LinkedList();

contrust1.append(10);
contrust1.append(20);
contrust1.append(30);

contrust1.prepend(0);
contrust1.append(40);
contrust1.insert(3, 25);
contrust1.remove(3);
contrust1.append(50);
contrust1.insert(4, 35);
contrust1.remove(6);
contrust1.insert(7, 50);
console.log(contrust1.remove(0))
contrust1.print();

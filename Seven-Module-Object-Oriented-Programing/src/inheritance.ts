class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep(hours: number) {
    console.log(`${this.name} get sleep ${hours}`);
  }
}

class Student extends Person {}

const munna = new Student("Munna", 34, "chittagong");

munna.getSleep(5);

class Teacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  getSleep(hours: number) {
    console.log(`${this.name} get sleep ${hours}`);
  }

  takeClass(hours: number) {
    console.log(`${this.name} take  class for ${hours}`);
  }
}

const headmaster = new Teacher("Headmaster", 45, "bangladesh", "teacher");
headmaster.takeClass(3);

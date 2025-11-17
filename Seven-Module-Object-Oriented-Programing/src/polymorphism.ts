class Person {
  getSleep(hours: number) {
    console.log(`I am a normal person. I sleep for ${hours} hours every day`);
  }
}

class Student extends Person {
  getSleep(hours: number) {
    console.log(`I am a Student. I sleep for ${hours} hours every day`);
  }
}

class NextLevelDeveloper extends Person {
  getSleep(hours: number): void {
    console.log(
      `I am a next level developer. I sleep for ${hours} hours every day`
    );
  }
}

const getSleepingHours = (person: Person) => {
  person.getSleep(3);
};

const normal = new Person();
const student = new Student();
const next = new NextLevelDeveloper();

// getSleepingHours(student);


class Shape {
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  radious: number;
  constructor(radious: number) {
    super();
    this.radious = radious;
  }

  getArea(): number {
    return Math.PI * this.radious * this.radious;
  }
}

class Ractangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
      return (this.height * this.width)
  }
}

const getArea = (shape : Shape) =>{
    console.log(shape.getArea())
}


const shape = new Shape()
const cicle = new Circle(23);
const ractangle = new Ractangle(5, 7)

getArea(ractangle)
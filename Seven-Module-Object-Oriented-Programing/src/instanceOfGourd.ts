class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(hours: number) {
    console.log(`${this.name} get sleeps for ${hours} hours each day`);
  }
}

class Student extends Person {
  roll: number;
  constructor(name: string, roll: number) {
    super(name);
    this.roll = roll;
  }

  doStudy(hours: number) {
    console.log(`${this.name} studys for ${hours} hours every day`);
  }
}

class Teacher extends Person {
  subject: string;
  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }

  takeClass(hours: number) {
    console.log(`${this.name}  takes class for ${hours} hours each day`);
  }
}

function getStudent(user: Person) {
  return user instanceof Student;
}

function getTeacher(user: Person) {
  return user instanceof Teacher;
}

const getUser = (user: Person) => {
  // Smary way
  if (getStudent(user)) {
    user.doStudy(10);
    console.log(user.roll);
  } else if (getTeacher(user)) {
    user.takeClass(12);
    console.log(user.subject);
  }

  
  //   if (user instanceof Student) {
  //     user.doStudy(10);
  //     console.log(user.roll);
  //   } else if (user instanceof Teacher) {
  //     user.takeClass(12);
  //     console.log(user.subject);
  //   } else {
  //     user.getSleep(6);
  //   }
};

const student = new Student("Sujon", 12);
const teacher = new Teacher("Mintu", "Math");

const person = new Person("Denson");

getUser(teacher);

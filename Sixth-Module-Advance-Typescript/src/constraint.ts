type constraints = {
  id: number;
  name: string;
};

const addStudentToCourse = <T extends constraints>(studentInfo: T) => {
  return {
    course: "Next Level Course",
    ...studentInfo,
  };
};

const student1 = {
  id: 3421,
  name: "Mezba",
  isPen: true,
};

const student2 = {
  id: 5643,
  name: "Jhankar Mahbub",
  isCar: true,
  isMarried: true,
};
const student3 = {
  id: 34,
  name: "she",
  hasPhone: true,
};

const result1 = addStudentToCourse(student1);
console.log(result1);
const result2 = addStudentToCourse(student2);
console.log(result2);
const result3 = addStudentToCourse(student3);

// const add = (num1 : number, num2:number) =>{
//     return [num1, num2]
// }


const add = <X,Y>(num1 : X, num2:Y) =>{
    return [num1, num2]
}

// console.log(add("2", 4))
// console.log(add("2", {name : 'rabiul'}))

const num = <T>(number:T ) => [number]
// console.log(num(4))


const addStudentToCourse = <T>(studentInfo : T) =>{
    return {
        course : "Next Level Course",
        ...studentInfo
    }
}

const student1 = {
    id : 3421,
    name : 'Mezba',
    isPen : true
}

const student2 = {
    id : 5643,
    name : 'Jhankar Mahbub',
    isCar : true,
    isMarried : true,
}

const result1 = addStudentToCourse(student1)
console.log(result1)
const result2 = addStudentToCourse(student2)
console.log(result2)
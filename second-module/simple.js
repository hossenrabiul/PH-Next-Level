const course1 = {name : 'next level course1'}
const course2 = {name : 'next level course1'}

const obj = {}

obj[course2] = {courseId : 'level2'}
obj[course1] = {courseId : 'nextlevel2'}
// console.log(obj)

const firstObj = {
    name : 'rabiul',
    name : 'she'
}
// console.log(firstObj)


const  map = new Map()

map.set(course1, {course1 : 'next level'})
map.set(course2, {course2 : 'next level2'})

// console.log(map)

map.forEach((value, key) => (key.name = "programign hero " + key.name))
console.log(map)
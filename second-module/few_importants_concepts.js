const number = [2, 1, 40, 20, 60, 30];

const sortNumbers = number.sort((a, b) => a - b);
// console.log(number, " ", sortNumbers)

const fruits = ["Banana", "Apple", "Cherry", "Date"];
// console.log(fruits.sort((a, b) => a.localeCompare(b)))

const arr = [2, 3, 4, 3, [2, 4, 5, [34, 5, [4, 3, 8]]]];
// console.log(arr.flat(Infinity));


const tagsForms = [
    ["javascript", 'react', 'node', 'css'],
    ["express", 'react', 'node', 'c++'],
    ["css", 'react', 'javs', 'html'],
]

const filterTags = [...new Set(tagsForms.flat())]
console.log(filterTags)
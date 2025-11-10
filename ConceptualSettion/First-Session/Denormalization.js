const students = [
    {id : 1, name : 'Rabiul'},
    {id : 2, name : 'Rab'},
    {id : 3, name : 'Jhon'},
    {id : 4, name : 'Mon'},
]

const snaks = [
    {id : 201, studendId : 2, title : 'Chocolate'},
    {id : 202, studendId : 3, title : 'Biscuit'},
    {id : 203, studendId : 1, title : 'Chanachur'},
    {id : 204, studendId : 2, title : 'Icecream'},
    {id : 205, studendId : 3, title : 'Cake'},
]

const mainBusket = snaks.reduce((busket, snaks) =>{
    if(!busket[snaks.studendId]){
        busket[snaks.studendId] = []
    }
    busket[snaks.studendId].push(snaks)

    return busket
} ,{})


const studentWithSanks = students.map((student) => (
    {...student, busket : mainBusket[student.id] || []}
))


console.log(JSON.stringify(studentWithSanks))

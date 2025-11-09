const casheData = new Map()

const expensiveTask = (id) =>{
    console.log('Ran the expensive tast for', id)

    return {id : id, data : `some data for the id : ${id}`, timeStrim : new Date().getTime()}
}

const getData = (id) =>{
    if(casheData.has(id)){
        console.log("Caseh Hit in data")
        const Data = casheData.get(id)
        return Data
    }

    console.log("Cashe Miss in data")
    const Data = expensiveTask(id)
    casheData.set(id, Data)
    return Data
}

console.log(getData(3444))
console.log(getData(3444))

console.log(casheData)
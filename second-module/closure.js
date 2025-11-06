const counterFun = ()=>{
    let count = 0;

    return (amount) =>{
        count = count + amount
        return count
    }
}

const counter = counterFun()
console.log(counter(5))
console.log(counter(5))
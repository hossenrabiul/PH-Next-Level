// const counter = {
//     count : 0,

//     add(amount){
//         this.count += amount
//     },
//     print(){
//         console.log(this.count)
//     }
// }
// counter.add(9)
// counter.add(9)

// counter.print()

class counter {
    constructor(count){
        this.count = count
    }

    add(amount){
        this.count += amount
    }
    print(){
        console.log(this.count)
    }
}

const construct = new counter(3)
const construct1 = new counter(3)
construct.add(10)
construct1.add(3)
construct.print()
construct1.print()
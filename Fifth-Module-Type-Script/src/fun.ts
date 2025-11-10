const poorUser = {
    name : 'rabiul',
    balance : 0,
    addBalance(tk :number){
        const total = this.balance + tk;
        return total
    }
}

const user1 = poorUser
user1.addBalance(20)
console.log(user1)
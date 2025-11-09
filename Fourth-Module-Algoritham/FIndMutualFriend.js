const num = 50000;

const createUser = (id) =>{
    const user = {id : `user_ ${id}`, name : `user $id`}
    return user;
}

let userA = []
let userB = [];

for(let i = 0; i < num; i++){
    userA.push(createUser(i))
    userB.push(createUser(i + 25000))
}

// console.log(userA)
// console.log(userB)

const commonFriendsSlow = (userA, userB) =>{
    const startTime = performance.now()
    let commomFriends = []
    // (n^2)
    userA.forEach(userA => {
        userB.forEach(userB =>{
            if(userA.id === userB.id){
                commomFriends.push(userA)
            }
        })
    });
    const endTime = performance.now()
    return {count : commomFriends.length, time : endTime - startTime}
}

// console.log(commonFriendsSlow(userA, userB))

const commonFriendsFirst = (userA, userB) =>{
    const startTime = performance.now()
    let commonFriends = []
    // (n)
    const idListA = new Set(userA.map((user) => user.id))
    // console.log(idListA)
    // (n)
    userB.forEach(userB => {
        // (1) lookUp
       if(idListA.has(userB.id)){
        commonFriends.push(userB)
       }
    });
    const endTime = performance.now()
    return {count : commonFriends.length, time : endTime - startTime}
}

console.log(commonFriendsFirst(userA, userB))
const players = [
    {name : "shakib", run : 70},
    {name : "mushfik", run : 80},
    {name : "mahmudullah", run : 98},
    {name : "tamim", run : 78},
]

const subTotal = players.reduce((total, player) => {
    return total + player.run
}, 0)

const maxRun = players.reduce((maxScore, player) => {
    // console.log(maxScore, player)
    if(maxScore.run > player.run){
        return maxScore
    }
    return player
}, players[0])

const postArray = [
    {id : 'p-101', title : 'intro to sql', author : 'alex'},
    {id : 'p-102', title : 'intro to node', author : 'bob'},
    {id : 'p-103', title : 'intro to express', author : 'max'},
    {id : 'p-104', title : 'intro to mxsql', author : 'shib'},
]
console.log(postArray[0].id)
const objectArray = postArray.reduce((table, post) => {
    console.log(table)
    table[post.id] = post;
    return table;
},{} )

console.log(objectArray)
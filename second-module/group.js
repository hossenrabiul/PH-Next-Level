const users = [
    {id :  101, name : "alex"},
    {id :  102, name : "bob"},
    {id :  103, name : "max"},
    {id :  104, name : "max"},
]

const posts = [
    {id : 1, userId : 101, title : 'software engineer'},
    {id : 2, userId : 103, title : 'software developer'},
    {id : 3, userId : 101, title : 'wev develooper'},
    {id : 4, userId : 102, title : 'wev engineer'},
    {id : 5, userId : 103, title : 'machine learning'},
]

const postByUserId = posts.reduce((table, post) => {
    if(!table[post.userId]){
        table[post.userId] = []
    }
    table[post.userId].push(post)
    return table
}, {})


const userWithPosts = users.map((user) => {
    const newUser = {...user, posts : postByUserId[user.id] || []}
    return newUser;
})
console.log(JSON.stringify(userWithPosts))

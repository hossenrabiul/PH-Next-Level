const fs = require('fs')

fs.writeFileSync("./output/test.txt", "Hey, i am experimenting node.js")

// fs.appendFileSync("./output/test.txt", "hey, where are your bro?")
fs.appendFileSync("./output/test.txt", `${new Date().toISOString()} has been added`)
console.log("Completed writing file")
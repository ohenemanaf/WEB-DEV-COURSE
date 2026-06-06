const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, 'createFile.txt'), "I love ceating Files using Node.js",(err)=>{
    // if (err) throw err
    console.log("Write Complete")
})
fs.appendFile(path.join(__dirname, 'createFile.txt'), "\n node.js is the best", (err)=>{
    if (err) throw err;
    console.log("Write Complete...")
})
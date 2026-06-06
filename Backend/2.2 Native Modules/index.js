const fs = require('fs');

const data = 'Hello, Node.js!';

//writing file content 

// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// }); 

//reading file content
fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('The file content is:', data);
});
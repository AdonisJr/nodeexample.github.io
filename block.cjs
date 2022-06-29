const fs = require('fs');

let data = fs.readFileSync('nodeText.txt')
console.log(data.toString());
console.log('Program ended.');
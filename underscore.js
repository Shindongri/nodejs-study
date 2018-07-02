var fs = require('fs');
// var data = fs.readFileSync('Hello.txt', {encoding: 'utf8'});
// console.log(data);

fs.readFile('Hello.txt', {encoding: 'utf8'}, (err, data) => {
   console.log(data);
   console.log(err);
});

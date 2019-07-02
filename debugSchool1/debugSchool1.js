var fs = require('fs');
var text = fs.readFileSync('testText.txt', 'utf8').toString();
var lines = text.split('\n');
var numberOfLines = lines.length
console.log(numberOfLines)
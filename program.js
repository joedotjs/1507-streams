var fs = require('fs');
var fileReadStream = fs.createReadStream('./names.txt');

fileReadStream.pipe(process.stdout);
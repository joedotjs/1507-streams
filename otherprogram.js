var fs = require('fs');
var ws = fs.createWriteStream('./from-other-program');
process.stdin.pipe(ws);
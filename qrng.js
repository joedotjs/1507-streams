var URL = 'https://qrng.anu.edu.au/API/jsonI.php?length=10&type=uint8';
var EventEmitter = require('events').EventEmitter;
var request = require('request');

var qrngEvents = new EventEmitter();

setInterval(function () {
    request.get(URL, function (err, response) {
        qrngEvents.emit('newSet', JSON.parse(response.body).data);
    });
}, 2000);

module.exports = qrngEvents;
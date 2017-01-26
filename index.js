var express = require('express')

var server = express();

var PORT = 3000;

server.use(express.static(__dirname + '/dist'));

server.listen(PORT, function () {
    console.log('Server running on ' + PORT);
});

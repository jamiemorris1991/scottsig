var http = require('http');
var server = require("./server/server");


var port = 4300;


server(port);
console.log("Server running on port " + port);

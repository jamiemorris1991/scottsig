module.exports = function(port) {

	var https = require('https'),
	fs = require('fs'),
	path = require('path'),
	express= require('express');

	var app= express();

	require('ssl-root-cas')
		.inject()
		.addFile(path.join(__dirname, 'certs', 'root-ca.crt.pem'));

	var keys =  {
		key: fs.readFileSync(path.join(__dirname,'certs','server.key.pem')),
		cert: fs.readFileSync(path.join(__dirname,'certs','server.crt.pem'))
	};

	app.get('/', function(req,res) {
		res.send("Hello World\n");
	});

	https.createServer(keys, app).listen(port);
};
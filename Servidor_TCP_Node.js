var net = require('net');

var server = net.createServer(function(socket) {
	console.log("Recibo peticion");
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

server.listen(1337, '192.168.1.101');
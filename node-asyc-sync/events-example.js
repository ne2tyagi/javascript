var net = require('net');

var server = net.createServer(function(socket){
	socket.on('data', function(data){
		console.log('Data event');
		socket.write(data);
	});

	socket.once('data', function(data){
		console.log('data event executing once');
		socket.write(data);
	});
});

server.listen(3000);
console.log('Server Listening on port 3000.....');
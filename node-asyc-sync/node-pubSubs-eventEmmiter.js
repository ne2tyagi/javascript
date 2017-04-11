var events = require('events');
var net = require('net');

var channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

var count = 0;

channel.on('join', function(id, client) {
	this.clients[id] = client;
	//console.log('New Client Joined '+id);
	client.write('Welcome '+id);
	this.subscriptions[id] = function(senderId, message){
		if(id != senderId){
			this.clients[id].write(message);
		}
	};
	this.on('broadcast', this.subscriptions[id]);
});

channel.on('leave', function(id){
	channel.removeListener('broadcast', this.subscriptions[id]);
	channel.emit('broadcast', id, id + ' has left the chat.\n');
});

channel.on('shutdown', function(){
	channel.emit('broadcast', '', 'Chat has shutdown.\n');
	channel.removeAllListeners('broadcast');
});
channel.setMaxListeners(50);

var server = net.createServer(function(client){
	var id = 'Client'+client.remoteAddress + ':' + client.remotePort+count;
	count++;
	console.log('New Connection ', id);
	//client.on('connect', function(){
	//	console.log('connect event');
		channel.emit('join', id, client);
	//});

	client.on('data', function(data){
		data = data.toString();
		console.log('data',data);
		if(data == 'shutdown\r\n'){
			channel.emit('shutdown');
		}
		channel.emit('broadcast', id, data);
	});

	client.on('close', function(){
		console.log('close');
		channel.emit('leave', id);
	})
});

process.on('uncaughtException', function(err){
	console.error(err.stack);
	process.exit(1);
})

server.listen(3000);
console.log('Server listening on 3000. Run cmd #telnet 127.0.0.1 3000');
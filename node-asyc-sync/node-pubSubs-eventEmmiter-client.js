var net = require('net');

var client = net.connect({port:3000}, function(){
	console.log('connected to server')
});

client.on('data', function(data){
	console.log(data.toString());
	if(data.toString() == 'bye') client.end();
});

client.on('end', function(){
	console.log('Disconnected from server');
})

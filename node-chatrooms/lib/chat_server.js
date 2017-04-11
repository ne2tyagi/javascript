var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = function(server){
	io = socketio.listen(server);
	io.set('log level', 1);

	io.sockets.on('connection', function(socket){
		console.log('client connected on '+socket.id);
		guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
		joinRoom(socket, 'Lobby');

		handleMessageBroadcasting(socket, nickNames);
		handleNameChangeAttempts(socket, nickNames, namesUsed);
		handleRoomJoining(socket);
		//console.log(io.sockets.adapter.sids)
		console.log(io.sockets.adapter.rooms)
		socket.on('rooms', function(){
			socket.emit('rooms', Object.keys(io.sockets.sockets));
		});

		handleClientDisconnection(socket, nickNames, namesUsed);
	});
}


function assignGuestName(socket, guestNumber, nickNames, namesUsed){
	var name = 'Guest' + guestNumber;
	nickNames[socket.id] = name;
	socket.emit('nameResult', {
		success : true,
		name: name
	});
	namesUsed.push(name);
	return guestNumber + 1;
}



function joinRoom(socket, room){
	
	socket.join(room);
	currentRoom[socket.id] = room;
	socket.emit('joinResult', {
		room: room
	});
	socket.to(room).emit('message', {
		text: nickNames[socket.id] + ' has joined ' + room + '.'
	});
	//console.log('joining ',room, io.sockets.adapter.rooms);
	var usersInRoom = Object.keys(io.sockets.sockets);
	console.log(usersInRoom.length,'users in room '+room);
	if(usersInRoom.length > 1){
		var usersInRoomSummary = 'Users currently in ' + room + ': ';
		for (var index in usersInRoom) {
			var userSocketId = usersInRoom[index];
			if(userSocketId != socket.id){
				if(index > 0){
					usersInRoomSummary += ', ';
				}
				usersInRoomSummary += nickNames[userSocketId];
			}
		}
		socket.emit('message', {text: usersInRoomSummary});
	}
}

function handleNameChangeAttempts(socket, nickNames, namesUsed){
	socket.on('nameAttempt', function(name){
		if(name.indexOf('Guest') == 0){
			socket.emit('nameResult', {
				success: false,
				message: 'Name can not begin with "Guest".'
			});
		} else {
			if(namesUsed.indexOf(name) == -1){
				var previousName = nickNames[socket.id];
				var previousNameIndex = namesUsed.indexOf(previousName);
				namesUsed.push(name);
				nickNames[socket.id] = name;
				delete namesUsed[previousNameIndex];
				socket.emit('nameResult', {
					success: true,
					name: name
				});
				socket.broadcast.to(currentRoom[socket.id]).emit('message', {
					text: previousName +' is now known as '+ name +'.'
				});
			}else{
				socket.emit('nameResult', {
					success: false,
					message: 'That name is already in use'
				});
			}
		}
	})
}


function handleMessageBroadcasting(socket){
	socket.on('message', function(message){
		socket.to(message.room).emit('message', {
			text: nickNames[socket.id] + ': '+ message.text
		});
	});
}

function handleRoomJoining(socket){
	socket.on('join', function(room){
		socket.leave(currentRoom[socket.id]);
		joinRoom(socket, room.newRoom);
	});
}

function handleClientDisconnection(socket){
	socket.on('disconnect', function(){
		var namesIndex = namesUsed.indexOf(nickNames[socket.id]);
		delete namesUsed[namesIndex];
		delete nickNames[socket.id];
	})
}







// // Load required modules
// const http = require('http'); // http server core module
// const path = require('path');
// const express = require('express'); // web framework external module

// // Set process name
// process.title = 'networked-aframe-server';

// // Get port or default to 8080
// const port = process.env.PORT || 8080;

// // Setup and configure Express http server.
// const app = express();
// app.use(express.static('public'));

// // Start Express http server
// const webServer = http.createServer(app);
// const io = require('socket.io')(webServer);

// const rooms = {};

// // let usernames = [];

// io.on('connection', (socket) => {
//   console.log('user connected', socket.id);
//   // console.log(socket.client.conn.server.clientsCount + " users connected");

//   let curRoom = null;

//   function initRoom(room) {
//     if (!room) return;
//     if (!rooms[room]) {
//       rooms[room] = {
//         name: room,
//         occupants: {},
//         sockets: {},
//         usernames: new Set(),
//         clients: 0,
//       };
//     }
//     return rooms[room];
//   }

//   function joinRoom(input) {
//     let { room: roomName, username } = input;
//     const room = initRoom(roomName);
//     if (!room) return;
//     curRoom = room;

//     if (username && !room.usernames.has(username)) {
//       room.usernames.add(username);
//     }

//     if (username) {
//       room.sockets[socket.id] = { username, time: Date.now() };
//       room.clients = room.usernames.size;
//     }

//     room.occupants[socket.id] = Date.now();

//     return room;
//   }

//   function broadCastRoomInfo(room) {
//     if (!room) return;

//     console.log('curRoom:', room);

//     console.log(`Socket (${socket.id}) joined room (${room.name})`);
//     socket.join(room.name);

//     socket.emit('connectSuccess', { joinedTime: room.occupants[socket.id] });

//     console.log(
//       'The number of occupants ' + Object.keys(room.occupants).length
//     );

//     io.in(room.name).emit('occupantsChanged', { occupants: room.occupants });
//     socket
//       .to(curRoom.name)
//       .broadcast.emit('occupants', { occupants: room.occupants });

//     console.log('the number of people ' + room.clients);
//     socket.to(curRoom.name).broadcast.emit('newClientConnect', room.clients);
//     socket.to(curRoom.name).broadcast.emit('sendAllUsernames', {
//       usernames: Array.from(curRoom.usernames),
//     });
//     console.log(room.usernames);
//   }

//   broadCastRoomInfo(curRoom);

//   socket.on('joinRoom', (data) => {
//     console.log(data, 84);

//     curRoom = joinRoom(data);
//     broadCastRoomInfo(curRoom);

//     socket.to(curRoom.name).broadcast.emit('sendRoomName', curRoom);
//   });

//   socket.on('send', (data) => {
//     io.to(data.to).emit('send', data);
//   });

//   socket.on('broadcast', (data) => {
//     socket.to(curRoom).broadcast.emit('broadcast', data);
//   });

//   socket.on('sendUsername', function (data) {
//     console.log(data, 99);
//     const room = joinRoom(data);
//     io.sockets.emit('sendUsername', data);

//     console.log('Username:');
//     console.log(data.username);
//     console.log('TEST');
//     console.log('data.room is: ' + room.name);
//     console.log('rooms[data.room] is ', room);
//     console.log('Array of usernames:');
//     console.log(room.usernames.entries());

//     broadCastRoomInfo(room);
//   });

//   function leaveRoom(socketId) {
//     if (!curRoom) return;

//     if (curRoom.sockets[socketId]) {
//       const { username } = curRoom.sockets[socketId];
//       console.log(socketId, username, curRoom);
//       if (
//         Object.values(curRoom.sockets).filter((s) => s.username === username)
//           .length === 1
//       ) {
//         curRoom.usernames.delete(username);
//       }
//       curRoom.clients = curRoom.usernames.size;
//       delete curRoom.sockets[socketId];
//     } else {
//       delete curRoom.occupants[socketId];
//     }
//   }

//   function cleanRoom() {
//     return;
//     if (
//       Object.keys(curRoom.occupants).length === 0 ||
//       Object.keys(curRoom.sockets).length === 0
//     ) {
//       delete rooms[curRoom.name];
//     }
//   }

//   socket.on('disconnect', () => {
//     console.log('disconnected: ', socket.id, curRoom);
//     leaveRoom(socket.id);
//     if (!curRoom) return;

//     console.log('user disconnected socket.id: ', socket.id);

//     socket
//       .to(curRoom.name)
//       .broadcast.emit('occupantsChanged', { occupants: curRoom.occupants });

//     socket.broadcast.emit('occupants', { occupants: curRoom.occupants });

//     // decrease the number of people in the room display
//     console.log('the number of people ' + curRoom.usernames.size);
//     // socket.broadcast.emit('newClientDisconnect', rooms[curRoom].clients);
//     socket
//       .to(curRoom.name)
//       .broadcast.emit('newClientDisconnect', curRoom.clients);

//     socket.to(curRoom.name).broadcast.emit('sendAllUsernamesDisconnect', {
//       usernames: Array.from(curRoom.usernames),
//     });
//     broadCastRoomInfo(curRoom); /*TEST*/
//   });
// });

// webServer.listen(port, () => {
//   console.log('listening on http://localhost:' + port);
// });

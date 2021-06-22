// Old code: peers = {};
var rooms = {};

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}

module.exports = (io) => {
  io.use((socket, next) => {
    if (!socket.handshake.query.roomName) {
      next(new Error('Invalid Room'));
    } else {
      next();
    }
  }).on('connect', (socket) => {
    console.log(`Client ${socket.id} is connected.`);

    // Join to room.
    let roomName = socket.handshake.query.roomName;
    socket.join(roomName);

    if (!rooms[roomName]) {
      rooms[roomName] = {};
    }

    console.log(`Client ${socket.id} joined to room ${roomName}`);

    // Initiate the connection process as soon as the client connects
    // Old code: peers[socket.id] = socket;
    rooms[roomName][socket.id] = socket;

    // Asking all other clients to setup the peer connection receiver
    socket.to(roomName).emit('initReceive', socket.id);
    // Old code:
    // for (let id in peers) {
    //   if (id === socket.id) continue;
    //   console.log('sending init receive to ' + socket.id);
    //   peers[id].emit('initReceive', socket.id);
    // }

    // Relay a peerconnection signal to a specific socket

    socket.on('signal', (data) => {
      // console.log('sending signal from ' + socket.id + ' to ', data);
      console.log(
        `Client ${socket.id} in room ${roomName} emitted 'Signal' event.`
      );

      // Old code: if (!peers[data.socket_id]) return;
      if (!rooms[roomName][data.socket_id]) {
        return;
      }

      // Old code:
      // peers[data.socket_id].emit('signal', {
      //   socket_id: socket.id,
      //   signal: data.signal,
      // });

      rooms[roomName][data.socket_id].emit('signal', {
        socket_id: socket.id,
        signal: data.signal,
      });
    });

    // Username
    // socket.on('send-username', function (userName) {
    //   // rooms[roomName][data.socket_id].username = username;
    //   // users.push(socket.nickname);
    //   // console.log('We are at the username' + username);
    //   socket.to(roomName).emit('receive-username', userName);
    // });

    // Remove the disconnected peer connection from all other connected clients
    socket.on('disconnect', () => {
      console.log('socket disconnected ' + socket.id);
      socket.to(roomName).emit('removePeer', socket.id);
      // Old code: socket.broadcast.emit('removePeer', socket.id);
      // Old code: delete peers[socket.id];
      delete rooms[roomName][socket.id];

      // Delete room if there's no socket.
      if (isEmpty(rooms[roomName])) {
        delete rooms[roomName];
        console.log(`Room ${roomName} was deleted because no one is in it.`);
      }
    });

    // Send message to client to initiate a connection
    // The sender has already setup a peer connection receiver

    socket.on('initSend', (init_socket_id) => {
      console.log('INIT SEND by ' + socket.id + ' for ' + init_socket_id);
      rooms[roomName][init_socket_id].emit('initSend', socket.id);
    });

    // Triggered when a user presses the play button
    socket.on('play', function () {
      // socket.broadcast.emit("play", roomName);
      // Old code:
      // for (let id in peers) {
      //   if (id === socket.id) continue;
      //   console.log('sending init receive to ' + socket.id);
      //   peers[id].emit('play');
      // }
      console.log(
        `Client ${socket.id} in room ${roomName} emitted 'Play' event.`
      );

      socket.to(roomName).emit('play');
    });

    // Triggered when a user presses the pause button
    socket.on('pause', function () {
      // socket.broadcast.emit("pause", roomName);
      // Old code:
      // for (let id in peers) {
      //   if (id === socket.id) continue;
      //   console.log('sending init receive to ' + socket.id);
      //   peers[id].emit('pause');
      // }
      console.log(
        `Client ${socket.id} in room ${roomName} emitted 'Pause' event.`
      );
      socket.to(roomName).emit('pause');
    });

    // When user press the volumen + button and the volumn - button, we don't emit anything.
    // This is because we only want the volumn buttons to work for the users themselves.
    // And not all the people in the room.

    // Triggered when a user presses the "next" button
    socket.on('next', function () {
      // socket.broadcast.emit("next", roomName);
      // Old code:
      // for (let id in peers) {
      //   if (id === socket.id) continue;
      //   console.log('sending init receive to ' + socket.id);
      //   peers[id].emit('next');
      // }
      console.log(
        `Client ${socket.id} in room ${roomName} emitted 'Next' event.`
      );

      socket.to(roomName).emit('next');
    });

    // Triggered when a user presses the "previous" button
    socket.on('prev', function () {
      // socket.broadcast.emit("prev", roomName);
      // Old code:
      // for (let id in peers) {
      //   if (id === socket.id) continue;
      //   console.log('sending init receive to ' + socket.id);
      //   peers[id].emit('prev');
      // }
      console.log(
        `Client ${socket.id} in room ${roomName} emitted 'Prev' event.`
      );
      socket.to(roomName).emit('prev');
    });
  });
};

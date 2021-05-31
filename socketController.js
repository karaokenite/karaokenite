peers = {};

module.exports = (io) => {
  io.on('connect', (socket) => {
    console.log('a client is connected');

    // Initiate the connection process as soon as the client connects

    peers[socket.id] = socket;

    // Asking all other clients to setup the peer connection receiver
    for (let id in peers) {
      if (id === socket.id) continue;
      console.log('sending init receive to ' + socket.id);
      peers[id].emit('initReceive', socket.id);
    }

    // Rrelay a peerconnection signal to a specific socket

    socket.on('signal', (data) => {
      console.log('sending signal from ' + socket.id + ' to ', data);
      if (!peers[data.socket_id]) return;
      peers[data.socket_id].emit('signal', {
        socket_id: socket.id,
        signal: data.signal,
      });
    });

    // Remove the disconnected peer connection from all other connected clients
    socket.on('disconnect', () => {
      console.log('socket disconnected ' + socket.id);
      socket.broadcast.emit('removePeer', socket.id);
      delete peers[socket.id];
    });

    // Send message to client to initiate a connection
    // The sender has already setup a peer connection receiver

    socket.on('initSend', (init_socket_id) => {
      console.log('INIT SEND by ' + socket.id + ' for ' + init_socket_id);
      peers[init_socket_id].emit('initSend', socket.id);
    });

    // Triggered when a user presses the play button
    socket.on('play', function () {
      // socket.broadcast.emit("play", roomName);
      for (let id in peers) {
        if (id === socket.id) continue;
        console.log('sending init receive to ' + socket.id);
        peers[id].emit('play');
      }
    });

    // Triggered when a user presses the pause button
    socket.on('pause', function (roomName) {
      // socket.broadcast.emit("pause", roomName);
      for (let id in peers) {
        if (id === socket.id) continue;
        console.log('sending init receive to ' + socket.id);
        peers[id].emit('pause');
      }
    });

    // When user press the volumen + button and the volumn - button, we don't emit anything.
    // This is because we only want the volumn buttons to work for the users themselves.
    // And not all the people in the room.

    // Triggered when a user presses the "next" button
    socket.on('next', function (roomName) {
      // socket.broadcast.emit("next", roomName);
      for (let id in peers) {
        if (id === socket.id) continue;
        console.log('sending init receive to ' + socket.id);
        peers[id].emit('next');
      }
    });

    // Triggered when a user presses the "previous" button
    socket.on('prev', function (roomName) {
      // socket.broadcast.emit("prev", roomName);
      for (let id in peers) {
        if (id === socket.id) continue;
        console.log('sending init receive to ' + socket.id);
        peers[id].emit('prev');
      }
    });
  });
};

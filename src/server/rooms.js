const EVENTS = {
  JOIN: 'join',
  JOINED: 'joined',
  READY: 'ready',
  PLAY: 'play',
  PAUSE: 'pause',
};

const initializeRooms = (socket, rooms, getState) => {
  console.log('User Connected:' + socket.id);

  // Triggered when a peer hits the join room button:

  socket.on('join', function (roomName) {
    const room = rooms.get(roomName);

    // room == undefined when no such room exists

    socket.join(roomName);
    socket.emit('joined', roomName, getState(['byId', roomName]));
  });

  // Triggered when the person who joined the room is ready to communicate:
  socket.on('ready', function (roomName) {
    console.log('Ready');
    socket.broadcast.to(roomName).emit('ready'); // Informs the other peer in the room
  });

  //Triggered when a user presses the play button
  socket.on('play', function (roomName) {
    socket.broadcast.emit('play', roomName);
  });

  //Triggered when a user presses the pause button
  socket.on('pause', function (roomName) {
    socket.broadcast.emit('pause', roomName);
  });

  //Triggered when a user presses the volume + button
  socket.on('volinc', function (roomName) {
    socket.broadcast.emit('volinc', roomName);
  });

  //Triggered when a user presses the volume - button
  socket.on('voldec', function (roomName) {
    socket.broadcast.emit('voldec', roomName);
  });

  //Triggered when a user presses the volume + button
  socket.on('next', function (roomName) {
    socket.broadcast.emit('next', roomName);
    // socket.to(roomName).broadcast.emit("play", roomName);
  });

  //Triggered when a user presses the volume - button
  socket.on('prev', function (roomName) {
    socket.broadcast.emit('prev', roomName);
  });

  // Triggered when servers gets an icecandidate from a peer in the room:

  socket.on('candidate', function (candidate, roomName) {
    console.log('Candidate');
    console.log(candidate);
    socket.broadcast.to(roomName).emit('candidate', candidate); // Sends Candidate to the other peer in the room
  });

  // Triggered when server gets an offer from a peer in the room:

  socket.on('offer', function (offer, roomName) {
    console.log('Offer');
    console.log(offer);
    socket.broadcast.to(roomName).emit('offer', offer); // Send Offer to the other peer in the room
  });

  // Triggered when server gets an answer from a peer in the room:

  socket.on('answer', function (answer, roomName) {
    console.log('Answer');
    socket.broadcast.to(roomName).emit('answer', answer); // Sends Answer to the other peer in the room
  });

  socket.on('leave', function (roomName) {
    socket.leave(roomName);
    socket.broadcast.to(roomName).emit('leave');
  });
};

module.exports = {
  initializeRooms,
};

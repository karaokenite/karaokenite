// Sonny: Moved from Glitch
const http = require('http'); // http server core module
const path = require('path');

// Get port or default to 8080
//deploying with Docker will use 8080
const port = process.env.PORT || 8080;

const express = require('express');
const app = express();

app.use(express.static('public'));

const webServer = http.createServer(app);
const io = require('socket.io')(webServer);

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Upgrades the server to accept websockets:

// let io = socket(listener);
let size = 3;
var numClients = {};

// Triggered when a client is connected:

io.on('connection', function (socket) {
  console.log('User Connected:' + socket.id);

  // Triggered when a peer hits the join room button:

  socket.on('join', function (roomName) {
    let rooms = io.sockets.adapter.rooms;
    let room = rooms.get(roomName);

    // room == undefined when no such room exists

    if (room == undefined) {
      socket.join(roomName);
      console.log('Room Created');
      numClients[roomName] = 1;
      socket.emit('created', roomName, numClients);
    } else if (room.size < size) {
      socket.join(roomName);
      console.log('Room Joined');
      numClients[roomName]++;
      socket.emit('joined', roomName, numClients);
    }
    // else if (room.size == 2) {
    //   socket.join(roomName);
    //   console.log("Room Joined");
    //   socket.emit("joined");
    // }
    else {
      socket.emit('full');
      console.log('Room Full for Now');
    }

    console.log(rooms);
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
});

webServer.listen(port, () => {
  console.log('listening on http://localhost:' + port);
});

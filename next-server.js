// Sonny: Moved from Glitch
const http = require('http'); // http server core module
const { Router } = require('express');
const { parse } = require('url');
const { v4: uuid } = require('uuid');
const next = require('next');
const { configureStore } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  byId: {},
};

// Triggered when a client is connected:
const roomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_ROOM': {
      const { id, hostId } = action.payload;
      return {
        ...state,
        byId: {
          [id]: {
            messages: [],
            host: hostId,
            users: {
              [hostId]: {},
            },
          },
        },
      };
    }
    case 'JOIN_ROOM': {
      const { userId } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: {
            ...state.byId[id],
            users: {
              ...state.byId[id].users,
              [userId]: {},
            },
          },
        },
      };
    }
  }
};

const store = configureStore({ reducer: roomReducer });

const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
});

const handler = nextApp.getRequestHandler();
nextApp.prepare().then(() => {
  const clientRouter = Router();
  clientRouter.get('/*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    if (pathname === '/create-room') {
      console.log('Room Creation');
      const id = uuid();
      store.dispatch({
        type: 'CREATE_ROOM',
        payload: { id, hostId: query.username },
      });
      res.redirect(`room/${id}`);
    } else if (pathname.includes('/room')) {
      const [, , id] = pathname.split('/');
      const rooms = store.getState().byId;
      if (id) {
        app.render(req, res, pathname);
      }
    } else {
      handler(req, res, req.url);
    }
  });

  // Get port or default to 8080
  const port = process.env.PORT || 3000;

  const express = require('express');
  const app = express();

  const webServer = http.createServer(app);
  const io = require('socket.io')(webServer);

  app.use('/', clientRouter);
  // listen for requests :)

  // Upgrades the server to accept websockets:

  const rooms = io.sockets.adapter.rooms;

  io.on('connection', function (socket) {
    console.log('User Connected:' + socket.id);

    // Triggered when a peer hits the join room button:

    socket.on('join', function (roomName) {
      const room = rooms.get(roomName);

      // room == undefined when no such room exists

      socket.join(roomName);
      console.log('Room Joined');
      socket.emit('joined', roomName, store.getState().byId[roomName]);
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
});

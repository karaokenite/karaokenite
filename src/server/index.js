import http from 'http';
import { Router } from 'express';
import { parse } from 'url';
import { v4 as uuid } from 'uuid';
import next from 'next';
import { initializeRooms } from './rooms';
import { dispatch, getState } from '../state/store';

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
      dispatch({
        type: 'CREATE_ROOM',
        payload: { id, hostId: query.username },
      });
      res.redirect(`room/${id}`);
    } else if (pathname.includes('/room')) {
      const [, , id] = pathname.split('/');
      const rooms = getState('byId');

      nextApp.render(req, res, pathname);
    } else {
      handler(req, res, pathname);
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

  io.on('connection', (socket) => initializeRooms(socket, rooms, getState));

  webServer.listen(port, () => {
    console.log('listening on http://localhost:' + port);
  });
});

const { Router } = require('express');
const { parse } = require('url');
const { store } = require('./store');
const { v4: uuid } = require('uuid');

const { createClient } = require('@karaokenite/client');

const app = createClient();
const handler = app.getRequestHandler();
const router = Router();

router.get('/*', (req, res) => {
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

module.exports = router;

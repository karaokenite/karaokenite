const { Router } = require('express');

const { createClient } = require('@karaokenite/client');

console.log(createClient);
const handler = createClient().getRequestHandler();

const router = Router();

// TODO: FIX deprecation warning. (NextJS requires the query string parameter)
router.get('/*', (req, res) => {
  // eslint-disable-next-line
  return handler(req, res, req.url);
});

module.exports = router;

const { Router } = require('express');

const { createClient } = require('@karaokenite/client');

const handler = createClient().getRequestHandler();

const router = Router();

router.get('/*', (req, res) => handler(req, res, req.url));

module.exports = router;

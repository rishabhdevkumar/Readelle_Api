const express = require('express');
const { createHighlight } = require('../controllers/highlight.controller');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();


router.post('/', auth, createHighlight);

module.exports = router;
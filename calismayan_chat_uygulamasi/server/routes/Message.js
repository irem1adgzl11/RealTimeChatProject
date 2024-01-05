const express = require('express');
const { createMessage, detailMessage } = require('../controllers/Message.js'); // createRoom, allRoom ve detailRoom yerine createMessage kullanılmalı
const router = express.Router();

router.post('/create/message/', createMessage); // createRoom yerine createMessage kullanılmalı
router.get('/detail/message/', detailMessage)

module.exports = router;

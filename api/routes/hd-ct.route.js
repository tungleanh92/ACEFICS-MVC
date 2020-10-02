const express = require('express');
const router = express.Router();
const controller = require('../controllers/hd-ct.controller')

router.post('/', controller.hdct);

module.exports = router;
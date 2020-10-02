const express = require('express');
const router = express.Router();
const controller = require('../controllers/activity.controller')

router.post('/', controller.activity);

module.exports = router;
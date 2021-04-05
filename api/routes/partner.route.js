const express = require('express');
const router = express.Router();
const controller = require('../controllers/partner.controller')

router.post('/', controller.partners);

module.exports = router;
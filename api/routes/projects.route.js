const express = require('express');
const router = express.Router();
const controller = require('../controllers/projects.controller')

router.post('/', controller.projects);

module.exports = router;
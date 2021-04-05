let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Contact = require('./../models/contact.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  return res.render('contacts');
});

router.post('/', async function (req, res, next) {
  console.log(req.body);
  let contact = new Contact(req.body);
  contact.save(function (err) {
    if (err) console.log(err);
  })
  return res.render('contacts');
})

module.exports = router;

const mongoose = require('mongoose');

var hdctSchema = new mongoose.Schema({
    type: String,
    name: String,
    title: String,
    desc: String
})

var Hdct = mongoose.model('Hdct', hdctSchema, 'hd-ct-model')

module.exports = Hdct;
const mongoose = require('mongoose');

var homeSchema = new mongoose.Schema({
    section: String,
    name: String,
    desc: String,
    collections: Array
})

var Home = mongoose.model('Home', homeSchema, 'homepage')

module.exports = Home;
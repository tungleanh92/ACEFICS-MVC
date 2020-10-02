const mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
    section: String,
    title: String,
    desc: String,
    image: String
})

var News = mongoose.model('News', newsSchema, 'news-model')

module.exports = News;
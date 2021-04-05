const mongoose = require('mongoose');

var partnerSchema = new mongoose.Schema({
    image: String
})

var Partner = mongoose.model('Partner', partnerSchema, 'partner-model')

module.exports = Partner;
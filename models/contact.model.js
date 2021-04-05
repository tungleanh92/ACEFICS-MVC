const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    name: String,
    organization: String,
    email: String,
    phone: String,
    content: String
})

var Contact = mongoose.model('Contact', contactSchema, 'contact-model')

module.exports = Contact;
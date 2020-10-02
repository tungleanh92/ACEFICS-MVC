const mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
    section: String,
    title: String,
    content: String
})

var Activity = mongoose.model('Activity', activitySchema, 'activity-model')

module.exports = Activity;
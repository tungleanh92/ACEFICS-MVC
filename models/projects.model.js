const mongoose = require('mongoose');

var projectsSchema = new mongoose.Schema({
    type: String,
    section: String,
    title: String,
    desc: String,
    image: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
})

var Projects = mongoose.model('Projects', projectsSchema, 'projects-model')

module.exports = Projects;
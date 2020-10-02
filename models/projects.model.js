const mongoose = require('mongoose');

var projectsSchema = new mongoose.Schema({
    type: String,
    section: String,
    title: String,
    desc: String,
    image: String
})

var Projects = mongoose.model('Projects', projectsSchema, 'projects-model')

module.exports = Projects;
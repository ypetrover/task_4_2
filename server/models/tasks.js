const mongoose = require('mongoose');

let tasksSchema = new mongoose.Schema({
    description: String,
    date: String,
    name: String,
    familyID: String
})
let tasksModel = mongoose.model('tasks-collection', tasksSchema)

module.exports = tasksModel
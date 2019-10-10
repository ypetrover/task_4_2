const mongoose = require('mongoose');

let familySchema = new mongoose.Schema({
    name: String,
    nik: String,
    description: String
})
let familyModel = mongoose.model('family-collection', familySchema)

module.exports = familyModel
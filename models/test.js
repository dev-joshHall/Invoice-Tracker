const mongoose = require('mongoose')
//schema
const Schema = mongoose.Schema;
const TestSchema = new Schema({
    name: String,
    note: String
})

//Model
const test = mongoose.model('testRecord', TestSchema);

module.exports = test;
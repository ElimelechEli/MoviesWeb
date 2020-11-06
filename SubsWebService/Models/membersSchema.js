const mongoose = require('mongoose')
var Schema = mongoose.Schema

var MembersSchema = new Schema({
    Name : String,
    Email : String,
    City : String
});

module.exports = mongoose.model('members',MembersSchema);
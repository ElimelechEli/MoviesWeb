// {_id: ObjectId, Name: String, Genres: String[], Image: string(url), Premiered: Date}

const mongoose = require('mongoose')
var Schema = mongoose.Schema

var MoviesSchema = new Schema({
    Name : String,
    Genres : [String],
    Image : String,
    Premiered: Date
});

module.exports = mongoose.model('movies',MoviesSchema);
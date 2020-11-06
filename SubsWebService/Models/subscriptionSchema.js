// {_id: objectId, MemberId, Movies : array of {movieId: objectID, date: Date} }

const mongoose = require('mongoose')
var Schema = mongoose.Schema

var SubscriptionSchema = new Schema({
    MemberId : String,
    Movies : [{movieId: String, date: Date}]
});

module.exports = mongoose.model('subscriptions',SubscriptionSchema);
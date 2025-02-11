const mongoose = require('mongoose');

// Restaurant Details Schema 
const Schema = new mongoose.Schema({
    name: String,
    city: String,
    items_array : [String],
    required: true
});

mongoose.exports = mongoose.model('Restaurant', Schema);
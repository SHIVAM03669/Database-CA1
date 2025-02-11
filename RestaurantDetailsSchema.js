const mongoose = require('mongoose');

// Restaurant Details Schema 
const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    items_array: {
        type: [String],
        required: true
    }
});

mongoose.exports = mongoose.model('Restaurant', Schema);
const mongoose = require('mongoose');

// Item Details Schema

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    } 
    
});

mongoose.exports = mongoose.model('Item', Schema);
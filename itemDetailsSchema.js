const mongoose = require('mongoose');

// Item Details Schema

const Schema = new mongoose.Schema({
    name: String,
    price: String,
    required: true});

mongoose.exports = mongoose.model('Item', Schema);
const mongoose = require('mongoose');

const { Schema } = mongoose;

const noteModel = new Schema({
    note: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    updated: {
        type: Boolean,
        required: true,
        default: false
    },
    boulderId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Note', noteModel);
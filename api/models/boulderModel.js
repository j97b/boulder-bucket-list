const mongoose = require('mongoose');

const { Schema } = mongoose;

const boulderModel = new Schema({
    name: {
        type: String,
        required: true
    },
    locationName: {
        type: String,
        required: true
    },
    coordinates: {
        type: [Number]
    },
    grade: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    },
    dateCompleted: {
        type: Date
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Boulder', boulderModel);
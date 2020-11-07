const mongoose = require("mongoose");

const { Schema } = mongoose;

const noteModel = new Schema({
  note: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date().getTime(),
  },
  updated: {
    type: Boolean,
    default: false,
  },
  boulderId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Note", noteModel);

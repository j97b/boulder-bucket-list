const mongoose = require("mongoose");

const { Schema } = mongoose;

const arrayLength = (val) => {
  return val.length === 2 || val.length === 0;
};

const boulderModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  locationName: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    validate: [arrayLength, "Must be a pair of coordinates"],
  },
  grade: {
    type: Number,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    alias: "i",
    required: true,
    min: 0,
    max: 15,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completionDate: {
    type: Date,
    required: () => {
      return this.completed;
    },
    max: new Date().getTime(),
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Boulder", boulderModel);

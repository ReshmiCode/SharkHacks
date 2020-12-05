const mongoose = require("mongoose");

const ShowerSchema = new mongoose.Schema({
  userID: {
    type: String,
  },
  duration: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  pointsEarned: {
    typr: Number,
  },
});

module.exports = mongoose.model("Shower", ShowerSchema);

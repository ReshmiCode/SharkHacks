const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleID: {
    type: String,
    required: [true, "Add a googleID"],
  },
  profilePic: {
    type: String,
    default:
      "https://www.ikea.com/us/en/images/products/blahaj-soft-toy-shark__0710175_PE727378_S5.JPG",
  },
  userName: {
    type: String,
    required: [true, "Add a username"],
  },
  showers: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  points: {
    type: Number,
    default: 0,
  },
  gpm: {
    type: Number,
    default: 2.5,
  },
  usualLength: {
    type: Number,
    default: 10,
  },
});

module.exports = mongoose.model("User", UserSchema);

const Shower = require("../models/shower_model");
const User = require("../models/user_model");
const mongoose = require("mongoose");

exports.getShowers = async (req, res, next) => {
  try {
    const showers = await Shower.find();

    return res.status(200).json({
      success: true,
      count: showers.length,
      data: showers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addShower = async (req, res, next) => {
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    const shower = await Shower.create([req.body], { session: sess });
    try {
      searchAuthor = await User.find({}).where({ googleID: shower[0].userID });
    } catch (err) {
      shower[0].remove();
      return res.status(404).json({
        success: false,
        error: "Shower author not found so removed the shower",
      });
    }
    user = searchAuthor[0];
    user.showers.push(mongoose.Types.ObjectId(shower[0]._id));
    await user.save({ session: sess });
    sess.commitTransaction();
    return res.status(201).json({ success: true, payload: shower[0] });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({ success: false, error: messages });
    }
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.getShower = async (req, res, next) => {
  try {
    const shower = await Shower.findById(req.params.id);

    if (!shower) {
      return res.status(404).json({
        success: false,
        error: "No shower found",
      });
    }

    return res.status(200).json({
      success: true,
      data: shower,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.getUserShower = async (req, res, next) => {
  try {
    const showers = await Photo.find({}).where({ userID: req.params.id });

    if (!showers) {
      return res.status(404).json({
        success: false,
        error: "No showers found",
      });
    }

    return res.status(200).json({
      success: true,
      count: showers.length,
      data: showers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

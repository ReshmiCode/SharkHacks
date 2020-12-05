const express = require("express");
const router = express.Router();
const {
  getShowers,
  addShower,
  getShower,
  getUserShower,
} = require("../controllers/shower_controller");

router.route("/").get(getShowers).post(addShower);

router.route("/:id").get(getShower);

router.route("/user/:id").get(getUserShower);

module.exports = router;

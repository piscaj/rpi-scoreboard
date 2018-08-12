var express = require("express");
var router = express.Router();
require("../api/scoreboard/Global");
const request = require("../api/scoreboard/processAPI");
const portConnect = require("../api/serialport/port");

//default page
router.get("/", function(req, res, next) {
  res.render("index", { title: "Scoreboard US REST API" });
});

//open serialport
router.get("/serialportOpen", function(req, res, next) {
  portConnect.openPort();
  res.status(200).json({
    message: "Success",
  });
});

//close serialport
router.get("/serialportClose", function(req, res, next) {
  portConnect.closePort();
  res.status(200).json({
    message: "Success",
  });
});

//add to home team score
router.get("/addToHome", function(req, res, next) {
  request.addHome();
  res.status(200).json({
    message: "Success",
    digit: homeDigitID,
    value: homeDigitVal
  });
});

//subtract from home team score
router.get("/subtractFromHome", function(req, res, next) {
  request.subtractHome();
  res.status(200).json({
    message: "Success",
    digit: homeDigitID,
    value: homeDigitVal
  });
});

//add to away team score
router.get("/addToAway", function(req, res, next) {
  request.addAway();
  res.status(200).json({
    message: "Success",
    digit: awayDigitID,
    value: awayDigitVal
  });
});

//subtract from away team score
router.get("/subtractFromAway", function(req, res, next) {
  request.subtractAway();
  res.status(200).json({
    message: "Success",
    digit: awayDigitID,
    value: awayDigitVal
  });
});

//add to inning
router.get("/addToInning", function(req, res, next) {
  request.addInning();
  res.status(200).json({
    message: "Success",
    digit: inningDigitID,
    value: inningDigitVal
  });
});

//subtract from inning
router.get("/subtractFromInning", function(req, res, next) {
  request.subtractInning();
  res.status(200).json({
    message: "Success",
    digit: inningDigitID,
    value: inningDigitVal
  });
});

//add to balls
router.get("/addToBalls", function(req, res, next) {
  request.addBalls();
  res.status(200).json({
    message: "Success",
    digit: ballsDigitID,
    value: ballsDigitVal
  });
});

//subtract from balls
router.get("/subtractFromBalls", function(req, res, next) {
  request.subtractBalls();
  res.status(200).json({
    message: "Success",
    digit: ballsDigitID,
    value: ballsDigitVal
  });
});

//add to strikes
router.get("/addToStrikes", function(req, res, next) {
  request.addStrikes();
  res.status(200).json({
    message: "Success",
    digit: strikesDigitID,
    value: strikesDigitVal
  });
});

//subtract from strikes
router.get("/subtractFromStrikes", function(req, res, next) {
  request.subtractStrikes();
  res.status(200).json({
    message: "Success",
    digit: strikesDigitID,
    value: strikesDigitVal
  });
});

//add to outs
router.get("/addToOuts", function(req, res, next) {
  request.addOuts();
  res.status(200).json({
    message: "Success",
    digit: outsDigitID,
    value: outsDigitVal
  });
});

//subtract from outs
router.get("/subtractFromOuts", function(req, res, next) {
  request.subtractOuts();
  res.status(200).json({
    message: "Success",
    digit: outsDigitID,
    value: outsDigitVal
  });
});

module.exports = router;

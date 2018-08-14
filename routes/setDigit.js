var express = require("express");
var router = express.Router();
require("../api/scoreboard/Global");
const request = require("../api/scoreboard/processAPI");
const portConnect = require("../api/serialport/port");

//default page
router.get("/", function(req, res, next) {
  res.status(200).json({
    message: "Something went wrong! Paramiter needed.",
  });
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
    message: "Success"
  });
});

//reset scoreboard 0000
router.get("/resetScore", function(req, res, next) {
  request.resetScore();
  res.status(200).json({
    message: "Success",
    homeScore: "0",
    awayScore: "0",
    inningNumber: "0",
    balls: "0",
    strikes: "0",
    outs: "0"
  });
});

//set home score with users number
router.get("/home/:setHomeVal", (req, res, next) => {
  if (isNaN(req.params.setHomeVal)) {
    res.status(200).json({
      message: "Something went wrong! You didn't enter a number.",
      value: req.params.setHomeVal
    });
     } 
     else {
      request.setHome(req.params.setHomeVal);
      res.status(200).json({
      message: "Sucsess",
      value: req.params.setHomeVal
    });
  }
});

//set away score with users number
router.get("/away/:setAwayVal", (req, res, next) => {
  if (isNaN(req.params.setAwayVal)) {
    res.status(200).json({
      message: "Something went wrong! You didn't enter a number.",
      value: req.params.setAwayVal
    });
     } 
     else {
      request.setAway(req.params.setAwayVal);
      res.status(200).json({
      message: "Sucsess",
      value: req.params.setAwayVal
    });
  }
});

//set inning with users number
router.get("/inning/:setInningVal", (req, res, next) => {
  if (isNaN(req.params.setInningVal)) {
    res.status(200).json({
      message: "Something went wrong! You didn't enter a number.",
      value: req.params.setInningVal
    });
     } 
     else {
      request.setAway(req.params.setInningVal);
      res.status(200).json({
      message: "Sucsess",
      value: req.params.setInningVal
    });
  }
});

//add to home team score
router.get("/addToHome", function(req, res, next) {
  request.addHome();
  res.status(200).json({
    message: "Success",
    digitID: homeDigitID,
    homeScore: homeDigitVal
  });
});

//subtract from home team score
router.get("/subtractFromHome", function(req, res, next) {
  request.subtractHome();
  res.status(200).json({
    message: "Success",
    digitID: homeDigitID,
    homeScore: homeDigitVal
  });
});

//add to away team score
router.get("/addToAway", function(req, res, next) {
  request.addAway();
  res.status(200).json({
    message: "Success",
    digitID: awayDigitID,
    awayScore: awayDigitVal
  });
});

//subtract from away team score
router.get("/subtractFromAway", function(req, res, next) {
  request.subtractAway();
  res.status(200).json({
    message: "Success",
    digitID: awayDigitID,
    awayScore: awayDigitVal
  });
});

//add to inning
router.get("/addToInning", function(req, res, next) {
  request.addInning();
  res.status(200).json({
    message: "Success",
    digitID: inningDigitID,
    inningNumber: inningDigitVal
  });
});

//subtract from inning
router.get("/subtractFromInning", function(req, res, next) {
  request.subtractInning();
  res.status(200).json({
    message: "Success",
    digitID: inningDigitID,
    inningNumber: inningDigitVal
  });
});

//add to balls
router.get("/addToBalls", function(req, res, next) {
  request.addBalls();
  res.status(200).json({
    message: "Success",
    digitID: ballsDigitID,
    balls: ballsDigitVal
  });
});

//subtract from balls
router.get("/subtractFromBalls", function(req, res, next) {
  request.subtractBalls();
  res.status(200).json({
    message: "Success",
    digitID: ballsDigitID,
    balls: ballsDigitVal
  });
});

//add to strikes
router.get("/addToStrikes", function(req, res, next) {
  request.addStrikes();
  res.status(200).json({
    message: "Success",
    digitID: strikesDigitID,
    strikes: strikesDigitVal
  });
});

//subtract from strikes
router.get("/subtractFromStrikes", function(req, res, next) {
  request.subtractStrikes();
  res.status(200).json({
    message: "Success",
    digitID: strikesDigitID,
    strikes: strikesDigitVal
  });
});

//add to outs
router.get("/addToOuts", function(req, res, next) {
  request.addOuts();
  res.status(200).json({
    message: "Success",
    digitID: outsDigitID,
    outs: outsDigitVal
  });
});

//subtract from outs
router.get("/subtractFromOuts", function(req, res, next) {
  request.subtractOuts();
  res.status(200).json({
    message: "Success",
    digitID: outsDigitID,
    outs: outsDigitVal
  });
});

//status request
router.get("/getScore", function(req, res, next) {
  request.subtractOuts();
  res.status(200).json({
    message: "Success",
    homeScore: homeDigitVal,
    awayScore: awayDigitVal,
    inningNumber: inningDigitVal,
    balls: ballsDigitVal,
    strikes: strikesDigitVal,
    outs: outsDigitVal
  });
});


module.exports = router;

var express = require("express");
var router = express.Router();
require("../api/scoreboard/Global");
const request = require("../api/scoreboard/processAPI");

//default page
router.get("/", function(req, res, next) {
  res.status(200).json({
    message: "Something went wrong! Paramiter needed."
  });
});

//reset scoreboard 0000
router.get("/resetBaseballScore", function(req, res, next) {
  request.resetScore();
  res.status(200).json({
    message: "Success",
    homeScore: "0",
    awayScore: "0",
    inning: "0",
    balls: "0",
    strikes: "0",
    outs: "0"
  });
});

//add to home team score
router.get("/home/add", function(req, res, next) {
  request.addHome();
  res.status(200).json({
    message: "Success",
    digitID: homeDigitID,
    homeScore: homeDigitVal
  });
});

//subtract from home team score
router.get("/home/subtract", function(req, res, next) {
  request.subtractHome();
  res.status(200).json({
    message: "Success",
    digitID: homeDigitID,
    homeScore: homeDigitVal
  });
});

//add to away team score
router.get("/away/add", function(req, res, next) {
  request.addAway();
  res.status(200).json({
    message: "Success",
    digitID: awayDigitID,
    awayScore: awayDigitVal
  });
});

//subtract from away team score
router.get("/away/subtract", function(req, res, next) {
  request.subtractAway();
  res.status(200).json({
    message: "Success",
    digitID: awayDigitID,
    awayScore: awayDigitVal
  });
});

//add to inning
router.get("/inning/add", function(req, res, next) {
  request.addInning();
  res.status(200).json({
    message: "Success",
    digitID: inningDigitID,
    inning: inningDigitVal
  });
});

//subtract from inning
router.get("/inning/subtract", function(req, res, next) {
  request.subtractInning();
  res.status(200).json({
    message: "Success",
    digitID: inningDigitID,
    inning: inningDigitVal
  });
});

//add to balls
router.get("/balls/add", function(req, res, next) {
  request.addBalls();
  res.status(200).json({
    message: "Success",
    digitID: ballsDigitID,
    balls: ballsDigitVal
  });
});

//subtract from balls
router.get("/balls/subtract", function(req, res, next) {
  request.subtractBalls();
  res.status(200).json({
    message: "Success",
    digitID: ballsDigitID,
    balls: ballsDigitVal
  });
});

//add to strikes
router.get("/strikes/add", function(req, res, next) {
  request.addStrikes();
  res.status(200).json({
    message: "Success",
    digitID: strikesDigitID,
    strikes: strikesDigitVal
  });
});

//subtract from strikes
router.get("/strikes/subtract", function(req, res, next) {
  request.subtractStrikes();
  res.status(200).json({
    message: "Success",
    digitID: strikesDigitID,
    strikes: strikesDigitVal
  });
});

//add to outs
router.get("/outs/add", function(req, res, next) {
  request.addOuts();
  res.status(200).json({
    message: "Success",
    digitID: outsDigitID,
    outs: outsDigitVal
  });
});

//subtract from outs
router.get("/outs/subtract", function(req, res, next) {
  request.subtractOuts();
  res.status(200).json({
    message: "Success",
    digitID: outsDigitID,
    outs: outsDigitVal
  });
});

//set home score with users number
router.get("/home/:setHomeVal", (req, res, next) => {
  if (isNaN(req.params.setHomeVal)) {
    res.status(200).json({
      message: "Something went wrong! You didn't enter a number.",
      value: req.params.setHomeVal
    });
  } else {
    request.setHome(req.params.setHomeVal);
    res.status(200).json({
      message: "Sucsess",
      digitID: homeDigitID,
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
  } else {
    request.setAway(req.params.setAwayVal);
    res.status(200).json({
      message: "Sucsess",
      digitID: awayDigitID,
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
  } else {
    request.setAway(req.params.setInningVal);
    res.status(200).json({
      message: "Sucsess",
      digitID: inningDigitID,
      value: req.params.setInningVal
    });
  }
});

//add to qtr
router.get("/qtr/add", function(req, res, next) {
  request.addQtr();
  res.status(200).json({
    message: "Success",
    digitID: qtrDigitID,
    qtr: qtrDigitVal
  });
});

//subtract from qtr
router.get("/qtr/subtract", function(req, res, next) {
  request.subtractQtr();
  res.status(200).json({
    message: "Success",
    digitID: qtrDigitID,
    qtr: qtrDigitVal
  });
});

module.exports = router;

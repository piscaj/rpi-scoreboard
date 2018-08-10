var express = require("express");
var router = express.Router();
require("../api/scoreboard/Global");
const request = require("../api/scoreboard/processAPI");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Scoreboard US REST API" });
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



module.exports = router;

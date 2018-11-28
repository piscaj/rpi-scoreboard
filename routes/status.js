var express = require("express");
var router = express.Router();
require("../api/scoreboard/Global");
const portConnect = require("../api/serialport/port");
const timer = require("../api/timer/stopwatch");

//GET: handle  null requests with a null message
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
});

//score request
router.get("/score", function(req, res, next) {
  res.status(200).json({
    message: "Success",
    homeScore: homeDigitVal,
    awayScore: awayDigitVal,
    inning: inningDigitVal,
    balls: ballsDigitVal,
    strikes: strikesDigitVal,
    outs: outsDigitVal,
    qtr: qtrDigitVal
  });
});

//serialport status
router.get("/serialport", function(req, res, next) {
  res.status(200).json({
    message: "Success",
    connection: portStatus,
    baudrate: portBaudrate,
    error: portErr
  });
});

//serialport open
router.get("/serialport/open", function(req, res, next) {
  portConnect.openPort();
  res.status(200).json({
    message: "Success",
    connection: portStatus
  });
});

//serialport close
router.get("/serialport/close", function(req, res, next) {
  portConnect.closePort();
  res.status(200).json({
    message: "Success",
    connection: portStatus
  });
});

//timer start
router.get("/timer/start", function(req, res, next) {
  timer.startTimer();
  res.status(200).json({
    message: "Success"
  });
});

//timer stop
router.get("/timer/stop", function(req, res, next) {
  timer.stopTimer();
  res.status(200).json({
    message: "Success"
  });
});

//timer reset to 0
router.get("/timer/reset", function(req, res, next) {
  timer.resetTimer();
  res.status(200).json({
    message: "Success"
  });
});

//timer start/stop toggle
router.get("/timer/startstop", function(req, res, next) {
  timer.startstopTimer();
  res.status(200).json({
    message: "Success"
  });
});

//timer new qtr
router.get("/timer/newQtr", function(req, res, next) {
  timer.resetQtr();
  res.status(200).json({
    message: "Success"
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
require("../api/scoreboard/Global");
const portConnect = require("../api/serialport/port");

//GET: handle  null requests with a null message
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
});

//score request
router.get("/Score", function(req, res, next) {
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
    message: "Success"
  });
});

//serialport close
router.get("/serialport/close", function(req, res, next) {
  portConnect.closePort();
  res.status(200).json({
    message: "Success"
  });
});

module.exports = router;

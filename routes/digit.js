var express = require("express");
var router = express.Router();
const buildCommand = require("../api/scoreboard/controlDigit");
const portConnect = require("../api/serialport/port");

//GET handle  null requests with a null message
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
});
//GET handle commands to digit
router.get("/:digitCommand", (req, res, next) => {
  const n = req.params.digitCommand;
  var command = buildCommand.displayCommand(n);
  portConnect.portWrite(command);
  res.status(200).json({
    message: "Success!",
    command: command
  });
});

module.exports = router;

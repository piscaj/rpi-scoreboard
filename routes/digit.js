var express = require("express");
var router = express.Router();
const buildCommand = require("../api/scoreboard/controlDigit");
const portConnect = require("../api/serialport/port");

//GET: handle  null requests with a null message
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
}); 
//GET: handle commands to digit
router.get("/:digitCommand", (req, res, next) => {
  if (req.params.digitCommand.includes(":")) {
    const n = req.params.digitCommand.substring(0,req.params.digitCommand.indexOf(":")
    );
    console.log(n);
    const s = req.params.digitCommand.substring(
      req.params.digitCommand.indexOf(":") + 1
    );
    console.log(s);
    var command = buildCommand.displayCommand(n, s);
    portConnect.portWrite(command);
    res.status(200).json({
      message: "Success!",
      command: command
    });
  } else {
    res.status(200).json({
      message: "Something went wrong!",
    });
  }
});

module.exports = router;

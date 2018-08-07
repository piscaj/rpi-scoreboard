var express = require("express");
var router = express.Router();
const portConnect = require("../api/serialport/port");

//GET handle  null requests with a null message
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
});
//GET handle Serial hardware commands
router.get("/:serialportCommand", (req, res, next) => {
  const n = req.params.serialportCommand;
  console.log(n);
  switch (n) {
    //open comport
    case "connect": {
      portConnect.openPort();
      res.status(200).json({
        message: "Connect"
      });
      break;
    }
    //close comport
    case "disconnect": {
      portConnect.closePort();
      res.status(200).json({
        message: "Disconnect"
      });
      break;
    }
    //handle bogus commmads
    default: {
      res.status(200).json({
        message: "Something went wrong!"
      });
    }
  }
});

module.exports = router;

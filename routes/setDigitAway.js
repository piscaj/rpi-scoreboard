var express = require("express");
var router = express.Router();
const request = require("../api/scoreboard/processAPI");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
}); 

router.get("/:setAwayVal", (req, res, next) => {
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

module.exports = router;

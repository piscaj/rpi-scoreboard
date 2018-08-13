var express = require("express");
var router = express.Router();
const request = require("../api/scoreboard/processAPI");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
}); 

router.get("/:setInningVal", (req, res, next) => {
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

module.exports = router;

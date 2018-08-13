var express = require("express");
var router = express.Router();
const request = require("../api/scoreboard/processAPI");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
}); 

router.get("/:setHomeVal", (req, res, next) => {
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

module.exports = router;

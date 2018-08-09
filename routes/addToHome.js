var express = require("express");
var router = express.Router();
const request = require("../api/scoreboard/processAPI");

//GET: +1 to home digit
router.get("/", (req, res, next) => {
  request.addHome();
  res.status(200).json({
    message: "Sucsess",
    value: homDigitVal
  });
});

module.exports = router;

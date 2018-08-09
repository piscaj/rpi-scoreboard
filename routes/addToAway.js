var express = require("express");
const request = require("../api/scoreboard/processAPI");
var router = express.Router();

//GET: +1 to away digit
router.get("/", (req, res, next) => {

  request.addAway();
  res.status(200).json({
    message: "Sucsess",
    value: homDigitVal
  });
});

module.exports = router;

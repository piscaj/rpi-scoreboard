var express = require("express");
var router = express.Router();
require ("../api/scoreboard/Global")
const request = require ("../api/scoreboard/processAPI")
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Scoreboard US REST API" });
});

router.get("/addToHome", function(req, res, next) {
  request.addHome();
  res.status(200).json({
    message: "Success",
    value: homeDigitVal
  });
});





module.exports = router;

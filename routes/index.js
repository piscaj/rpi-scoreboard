var express = require("express");
var router = express.Router();
require("../api/scoreboard/Global");

//default page
router.get("/", function(req, res, next) {
  res.render("index", { title: "Scoreboard US REST API" });
});

module.exports = router;

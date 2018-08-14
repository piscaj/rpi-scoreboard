var express = require("express");
var router = express.Router();
require("../api/scoreboard/Global");
const request = require("../api/scoreboard/processAPI");
const portConnect = require("../api/serialport/port");

//default page
router.get("/", function(req, res, next) {
  res.render("index", { title: "Scoreboard US REST API" });
});

module.exports = router;

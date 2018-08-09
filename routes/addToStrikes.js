var express = require("express");
var router = express.Router();

//GET: +1 to strikes
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Sucsess"
  });
});

module.exports = router;

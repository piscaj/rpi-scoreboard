var express = require("express");
var router = express.Router();

//GET: handle  null requests with a null message
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: " "
  });
}); 
//GET: set digit home to user input
router.get("/:digitCommand", (req, res, next) => {
  const val = req.params.digitCommand;
  
});

module.exports = router;

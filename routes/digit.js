var express = require('express');
var router = express.Router();
const buildCommand = require('../api/scoreboard/controlDigit');

/* GET */
router.get('/', (req, res, next) => {
    res.status(200).json({
      message: ' '
   })
});
/* GET */
router.get('/:digitCommand', (req, res, next) => {
  const n = req.params.digitCommand;
  //console.log(n);
    var command = buildCommand.displayCommand(n);
    res.status(200).json({
      message: 'Success!', 
      command: command
    })
});

module.exports = router;

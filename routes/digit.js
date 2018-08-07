var express = require('express');
var router = express.Router();
const buildCommand = require('../api/scoreboard/controlDigit');

router.get('/', (req, res, next) => {
    res.status(200).json({
      message: ' '
   })
});

/* GET */
router.get('/:digitCommand', (req, res, next) => {
  const n = req.params.digitCommand;
  console.log(n);
  switch(n) {
    
    case 'connect':{
      res.status(200).json({
        message: 'Connect'
      })   
        break;
  }
    case 'disconnect':{
    res.status(200).json({
      message: 'Disconnect'
    })
        break;
}
    default:{
    var command = buildCommand.displayCommand(n);
    res.status(200).json({
      message: 'Success!', 
      command: command
    })
  }
}   
});
 // if(n === 'connect'){
 //   var command = buildCommand.displayCommand(n);
 //   res.status(200).json({
 //     message: 'Success!', 
 //     command: command
 //  })
 // }
 // else if(n === 'connect'){
//  var command = buildCommand.displayCommand(n);
//    res.status(200).json({
//      message: 'Success!', 
//      command: command
 //  })
//  }
//  else{
//    res.status(200).json({
//      message: 'Err', 
//    })
//  }

module.exports = router;

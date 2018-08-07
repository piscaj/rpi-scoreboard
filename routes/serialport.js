var express = require('express');
var router = express.Router();
const portConnect = require('../api/serialport/port');

/* GET */
router.get('/', (req, res, next) => {
    res.status(200).json({
      message: ' '
   })
});
/* GET */
router.get('/:serialportCommand', (req, res, next) => {
  const n = req.params.serialportCommand;
  console.log(n);
  switch(n) {
    
    case 'connect':{
      portConnect.openPort();
      res.status(200).json({
        message: 'Connect'
      })   
        break;
  }
    case 'disconnect':{
    portConnect.closePort();
    res.status(200).json({
      message: 'Disconnect'
    })
        break;
}
    default:{
    res.status(200).json({
      message: 'Something went wrong!', 
    })
  }
}   
});

module.exports = router;

var express = require('express');
var router = express.Router();

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
    res.status(200).json({
      message: 'Something went wrong!', 
    })
  }
}   
});

module.exports = router;

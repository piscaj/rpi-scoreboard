const buildCommand = require("../api/scoreboard/controlDigit");
const com = require("../api/serialport/port");

module.exports = {
    
    
    resetScoreboard: function() {
      
        homeDigitVal = 0;
        awayDigitVal = 0;
        inningDigitVal = 0;
        ballsDigitVal = 0;
        strikesDigitVal = 0;

    },
    
    addAway: function() {
       const max = 99; 
       var val = '0';

       if(homDigitVal < max){
        homeDigitVal++;
        if(homeDigitVal<10){
            var command = buildCommand.displayCommand(homeDigitID[0],val);
            com.portWrite(command);
            command = buildCommand.displayCommand(homeDigitID[1],homeDigitVal.toString());
            com.portWrite(command);
        }
        else if(homeDigitVal>=10){
            var val = homeDigitVal.toString().split('',2);
            command = buildCommand.displayCommand(homeDigitID[0],val[0]);
            com.portWrite(command);
            command = buildCommand.displayCommand(homeDigitID[1],val[1]);
            com.portWrite(val);
        }
       }
      
    }
  









};
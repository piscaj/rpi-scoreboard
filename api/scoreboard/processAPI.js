const buildCommand = require("./controlDigit");
const com = require("../serialport/port");
require("../scoreboard/Global");
const splitNumber = require("./splitNumber");

module.exports = {
  resetScore: function() {
    homeDigitVal = 0;
    awayDigitVal = 0;
    inningDigitVal = 0;
    ballsDigitVal = 0;
    strikesDigitVal = 0;
    //reset home score
    var command = buildCommand.displayCommand(homeDigitID[0],'0');
    com.portWrite(command);
    var command = buildCommand.displayCommand(homeDigitID[1],'0');
    com.portWrite(command);
    delay(2000);
    //reset away score
    var command = buildCommand.displayCommand(awayDigitID[0],'0');
    com.portWrite(command);
    var command = buildCommand.displayCommand(awayDigitID[1],'0');
    com.portWrite(command);
    delay(2000);
    //reset inning
    var command = buildCommand.displayCommand(inningDigitID,'0');
    com.portWrite(command);
    //reset balls
    for (i = 0; i < ballsDigitID.length; i++) {
    var command = buildCommand.displayCommand(ballsDigitID[i],' ');
    com.portWrite(command);}
    delay(2000);
    //reset strikes
    for (i = 0; i < strikesDigitID.length; i++) {
    var command = buildCommand.displayCommand(strikesDigitID[i],' ');
    com.portWrite(command);}
    delay(2000);
    //reset outs
    for (i = 0; i < outsDigitID.length; i++) {
      var command = buildCommand.displayCommand(outsDigitID[i],' ');
      com.portWrite(command);}   
  },

  addHome: function() {
    const max = 99;
    var val = "0";

    if (homeDigitVal < max) {
      homeDigitVal++;
      if (homeDigitVal < 10) {
        var command = buildCommand.displayCommand(homeDigitID[0],'0');
        com.portWrite(command);
        command = buildCommand.displayCommand(homeDigitID[1],homeDigitVal.toString());
        com.portWrite(command);
      } else if (homeDigitVal >= 10) {
        var val = homeDigitVal.toString().split("", 2);
        command = buildCommand.displayCommand(homeDigitID[0], val[0]);
        com.portWrite(command);
        command = buildCommand.displayCommand(homeDigitID[1], val[1]);
        com.portWrite(command);
      }
    }
  },

  subtractHome: function() {
    const min = 0;
    var val = "0";

    if (homeDigitVal > min) {
      homeDigitVal--;
      if (homeDigitVal < 10) {
        var command = buildCommand.displayCommand(homeDigitID[0],'0');
        com.portWrite(command);
        command = buildCommand.displayCommand(homeDigitID[1],homeDigitVal.toString());
        com.portWrite(command);
      } else if (homeDigitVal >= 10) {
        var val = homeDigitVal.toString().split("", 2);
        command = buildCommand.displayCommand(homeDigitID[0], val[0]);
        com.portWrite(command);
        command = buildCommand.displayCommand(homeDigitID[1], val[1]);
        com.portWrite(command);
      }
    }
  },

  addAway: function() {
    const max = 99;
    var val = "0";

    if (awayDigitVal < max) {
      awayDigitVal++;
      if (awayDigitVal < 10) {
        var command = buildCommand.displayCommand(awayDigitID[0],'0');
        com.portWrite(command);
        command = buildCommand.displayCommand(
          awayDigitID[1],
          awayDigitVal.toString()
        );
        com.portWrite(command);
      } else if (awayDigitVal >= 10) {
        var val = awayDigitVal.toString().split("", 2);
        command = buildCommand.displayCommand(awayDigitID[0], val[0]);
        com.portWrite(command);
        command = buildCommand.displayCommand(awayDigitID[1], val[1]);
        com.portWrite(command);
      }
    }
  },

  subtractAway: function() {
    const min = 0;
    var val = "0";

    if (awayDigitVal > min) {
      awayDigitVal--;
      if (awayDigitVal < 10) {
        var command = buildCommand.displayCommand(awayDigitID[0], '0');
        com.portWrite(command);
        command = buildCommand.displayCommand(
          awayDigitID[1],
          awayDigitVal.toString()
        );
        com.portWrite(command);
      } else if (awayDigitVal >= 10) {
        var val = awayDigitVal.toString().split("", 2);
        command = buildCommand.displayCommand(awayDigitID[0], val[0]);
        com.portWrite(command);
        command = buildCommand.displayCommand(awayDigitID[1], val[1]);
        com.portWrite(command);
      }
    }
  },

  addInning: function() {
    const max = 9;
    if (inningDigitVal < max) {
      inningDigitVal++;
      command = buildCommand.displayCommand(
        inningDigitID,
        inningDigitVal.toString()
      );
      com.portWrite(command);
    }
  },

  subtractInning: function() {
    const min = 0;
    if (inningDigitVal > min) {
      inningDigitVal--;
      command = buildCommand.displayCommand(
        inningDigitID,
        inningDigitVal.toString()
      );
      com.portWrite(command);
    }
  },
  
  addBalls: function() {
    const max = 4;
    const turnOnDot = '8'
    if (ballsDigitVal < max) {
      ballsDigitVal++;
      command = buildCommand.displayCommand(ballsDigitID[ballsDigitVal-1],turnOnDot);
      com.portWrite(command);
    }
  },
  
  subtractBalls: function() {
    const min = 0;
    const turnOffDot = ' '
    if (ballsDigitVal > min) {
      ballsDigitVal--;
      command = buildCommand.displayCommand(ballsDigitID[ballsDigitVal],turnOffDot);
      com.portWrite(command);
    }
    else if (ballsDigitVal === min) {
        command = buildCommand.displayCommand(ballsDigitID[ballsDigitVal],turnOffDot);
        com.portWrite(command);
    }
  },

  addStrikes: function() {
    const max = 3;
    const turnOnDot = '8'
    if (strikesDigitVal < max) {
      strikesDigitVal++;
      command = buildCommand.displayCommand(strikesDigitID[strikesDigitVal-1],turnOnDot);
      com.portWrite(command);
    }
  },
  
  subtractStrikes: function() {
    const min = 0;
    const turnOffDot = ' '
    if (strikesDigitVal > min) {
      strikesDigitVal--;
      command = buildCommand.displayCommand(strikesDigitID[strikesDigitVal],turnOffDot);
      com.portWrite(command);
    }
    else if (strikesDigitVal === min) {
        command = buildCommand.displayCommand(strikesDigitID[strikesDigitVal],turnOffDot);
        com.portWrite(command);
    }
  },

  addOuts: function() {
    const max = 3;
    const turnOnDot = '8'
    if (outsDigitVal < max) {
      outsDigitVal++;
      command = buildCommand.displayCommand(outsDigitID[outsDigitVal-1],turnOnDot);
      com.portWrite(command);
    }
  },
  
  subtractOuts: function() {
    const min = 0;
    const turnOffDot = ' '
    if (outsDigitVal > min) {
      outsDigitVal--;
      command = buildCommand.displayCommand(outsDigitID[outsDigitVal],turnOffDot);
      com.portWrite(command);
    }
    else if (outsDigitVal === min) {
        command = buildCommand.displayCommand(outsDigitID[outsDigitVal],turnOffDot);
        com.portWrite(command);
    }
  },

  setHome: function(n) {
      var Val = splitNumber.splitNum(n);
      homeDigitVal = n.toString();
      for (i = 0; i < homeDigitID.length; i++) {
        var command = buildCommand.displayCommand(homeDigitID[i],Val[i]);
        com.portWrite(command)
        ;}
    },

setAway: function(n) {
  var Val = splitNumber.splitNum(n);
  awayDigitVal = n.toString();
  for (i = 0; i < awayDigitID.length; i++) {
    var command = buildCommand.displayCommand(awayDigitID[i],Val[i]);
    com.portWrite(command);}
  },

  setInning: function(n) {
    var Val = splitNumber.splitNum(n);
    inningDigitVal = n.toString();
    var command = buildCommand.displayCommand(inningDigitID,Val);
    com.portWrite(command);
    },

};
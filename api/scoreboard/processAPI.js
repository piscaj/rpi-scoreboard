const buildCommand = require("./controlDigit");
const com = require("../serialport/port");
require("../scoreboard/Global");
const splitNumber = require("./splitNumber");
const time = require("../timer/stopwatch");

module.exports = {
  resetBaseballScore: function() {
    homeDigitVal = 0;
    awayDigitVal = 0;
    inningDigitVal = 0;
    ballsDigitVal = 0;
    strikesDigitVal = 0;
    inningDigitVal = 0;
    outsDigitVal = 0;

    //reset home score
    var command = buildCommand.displayCommand(homeDigitID[0], "0");
    com.portWrite(command);
    var command = buildCommand.displayCommand(homeDigitID[1], "0");
    com.portWrite(command);
    //reset away score
    var command = buildCommand.displayCommand(awayDigitID[0], "0");
    com.portWrite(command);
    var command = buildCommand.displayCommand(awayDigitID[1], "0");
    com.portWrite(command);
    //reset inning
    var command = buildCommand.displayCommand(inningDigitID, "0");
    com.portWrite(command);
    //reset balls
    for (i = 0; i < ballsDigitID.length; i++) {
      var command = buildCommand.displayCommand(ballsDigitID[i], "0");
      com.portWrite(command);
    }
    //reset strikes
    for (i = 0; i < strikesDigitID.length; i++) {
      var command = buildCommand.displayCommand(strikesDigitID[i], "0");
      com.portWrite(command);
    }
    //reset outs
    for (i = 0; i < outsDigitID.length; i++) {
      var command = buildCommand.displayCommand(outsDigitID[i], "0");
      com.portWrite(command);
    }
  },

    resetFootballScore: function() {
      homeDigitVal = 0;
      awayDigitVal = 0;
      qtrDigitVal = 0;
  
      //reset home score
      var command = buildCommand.displayCommand(homeDigitID[0], "0");
      com.portWrite(command);
      var command = buildCommand.displayCommand(homeDigitID[1], "0");
      com.portWrite(command);
      //reset away score
      var command = buildCommand.displayCommand(awayDigitID[0], "0");
      com.portWrite(command);
      var command = buildCommand.displayCommand(awayDigitID[1], "0");
      com.portWrite(command);
      //reset qtr
      for (i = 0; i < qtrDigitID.length; i++) {
        var command = buildCommand.displayCommand(qtrDigitID[i], "0");
        com.portWrite(command);
      }
    },

  addHome: function() {
    const max = 99;
    var val = "0";

    if (homeDigitVal < max) {
      homeDigitVal++;
      if (homeDigitVal < 10) {
        var command = buildCommand.displayCommand(homeDigitID[0], "0");
        com.portWrite(command);
        command = buildCommand.displayCommand(
          homeDigitID[1],
          homeDigitVal.toString()
        );
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
        var command = buildCommand.displayCommand(homeDigitID[0], "0");
        com.portWrite(command);
        command = buildCommand.displayCommand(
          homeDigitID[1],
          homeDigitVal.toString()
        );
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
        var command = buildCommand.displayCommand(awayDigitID[0], "0");
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
        var command = buildCommand.displayCommand(awayDigitID[0], "0");
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
    const max = 3;
    if (ballsDigitVal < max) {
      ballsDigitVal++;
      command = buildCommand.displayCommand(
        ballsDigitID,
        ballsDigitVal.toString()
      );
      com.portWrite(command);
    } else {
      ballsDigitVal = 0;
      command = buildCommand.displayCommand(
        ballsDigitID,
        ballsDigitVal.toString()
      );
      com.portWrite(command);
    }
  },

  subtractBalls: function() {
    const min = 0;
    if (ballsDigitVal > min) {
      ballsDigitVal--;
      command = buildCommand.displayCommand(
        ballsDigitID,
        ballsDigitVal.toString()
      );
      com.portWrite(command);
    }
  },

  addStrikes: function() {
    const max = 2;
    if (strikesDigitVal < max) {
      strikesDigitVal++;
      command = buildCommand.displayCommand(
        strikesDigitID,
        strikesDigitVal.toString()
      );
      com.portWrite(command);
    } else {
      strikesDigitVal = 0;
      command = buildCommand.displayCommand(
        strikesDigitID,
        strikesDigitVal.toString()
      );
      com.portWrite(command);
    }
  },

  subtractStrikes: function() {
    const min = 0;
    if (strikesDigitVal > min) {
      strikesDigitVal--;
      command = buildCommand.displayCommand(
        strikesDigitID,
        strikesDigitVal.toString()
      );
      com.portWrite(command);
    }
  },

  addOuts: function() {
    const max = 2;

    if (outsDigitVal < max) {
      outsDigitVal++;
      command = buildCommand.displayCommand(
        outsDigitID,
        outsDigitVal.toString()
      );
      com.portWrite(command);
    } else {
      outsDigitVal = 0;
      command = buildCommand.displayCommand(
        outsDigitID,
        outsDigitVal.toString()
      );
      com.portWrite(command);
    }
  },

  subtractOuts: function() {
    const min = 0;
    if (outsDigitVal > min) {
      outsDigitVal--;
      command = buildCommand.displayCommand(
        outsDigitID,
        outsDigitVal.toString()
      );
      com.portWrite(command);
    }
  },

  setHome: function(n) {
    var Val = splitNumber.splitNum(n);
    homeDigitVal = n.toString();
    var command = buildCommand.displayCommand(homeDigitID[0], Val[0]);
    com.portWrite(command);
    var command = buildCommand.displayCommand(homeDigitID[1], Val[1]);
    com.portWrite(command);
  },

  setAway: function(n) {
    var Val = splitNumber.splitNum(n);
    awayDigitVal = n.toString();
    var command = buildCommand.displayCommand(awayDigitID[0], Val[0]);
    com.portWrite(command);
    var command = buildCommand.displayCommand(awayDigitID[1], Val[1]);
    com.portWrite(command);
  },

  setInning: function(n) {
    var Val = splitNumber.splitNum(n);
    inningDigitVal = n.toString();
    var command = buildCommand.displayCommand(inningDigitID, Val);
    com.portWrite(command);
  },

  addQtr: function() {
    const max = 4;
    if (qtrDigitVal < max) {
      qtrDigitVal++;
      command = buildCommand.displayCommand(qtrDigitID, qtrDigitVal.toString());
      com.portWrite(command);
    } else {
      qtrsDigitVal = 0;
      command = buildCommand.displayCommand(qtrDigitID, qtrDigitVal.toString());
      com.portWrite(command);
    }
  },

  subtractQtr: function() {
    const min = 0;
    if (qtrDigitVal > min) {
      qtrDigitVal--;
      command = buildCommand.displayCommand(qtrDigitID, qtrDigitVal.toString());
      com.portWrite(command);
    }
  },

  setNewTimer: function(n) {
    if (n.length === 5) {
      if (n.includes(":")) {
        var min = n.substring(2, 0);
        var sec = n.substring(5, 3);
        time.setTimer(min, sec);
      }
    }
  }
};

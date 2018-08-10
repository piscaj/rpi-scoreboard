const buildCommand = require("./controlDigit");
const com = require("../serialport/port");
require("../scoreboard/Global");

module.exports = {
  resetScoreboard: function() {
    homeDigitVal = 0;
    awayDigitVal = 0;
    inningDigitVal = 0;
    ballsDigitVal = 0;
    strikesDigitVal = 0;
  },

  addHome: function() {
    const max = 99;
    var val = "0";

    if (homeDigitVal < max) {
      homeDigitVal++;
      if (homeDigitVal < 10) {
        var command = buildCommand.displayCommand(homeDigitID[0], val);
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
        com.portWrite(val);
      }
    }
  },

  subtractHome: function() {
    const min = 0;
    var val = "0";

    if (homeDigitVal > min) {
      homeDigitVal--;
      if (homeDigitVal < 10) {
        var command = buildCommand.displayCommand(homeDigitID[0], val);
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
        com.portWrite(val);
      }
    }
  },

  addAway: function() {
    const max = 99;
    var val = "0";

    if (awayDigitVal < max) {
      awayDigitVal++;
      if (awayDigitVal < 10) {
        var command = buildCommand.displayCommand(awayDigitID[0], val);
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
        com.portWrite(val);
      }
    }
  },

  subtractAway: function() {
    const min = 0;
    var val = "0";

    if (awayDigitVal > min) {
      awayDigitVal--;
      if (awayDigitVal < 10) {
        var command = buildCommand.displayCommand(awayDigitID[0], val);
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
        com.portWrite(val);
      }
    }
  },

  addInning: function() {
    const max = 9;
    var val = "0";

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
    var val = "0";

    if (inningDigitVal > min) {
      inningDigitVal--;
      command = buildCommand.displayCommand(
        inningDigitID,
        inningDigitVal.toString()
      );
      com.portWrite(command);
    }
  }
};

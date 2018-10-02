var Stopwatch = require("timer-stopwatch");
const convertTime = require("../tools/convertMillisec");
const buildCommand = require("../scoreboard/controlDigit");
const com = require("../serialport/port");
require("../scoreboard/Global");
const splitNumber = require("../scoreboard/splitNumber");

var options = {
  refreshRateMS: 1000, //how often the clock should be updated
  almostDoneMS: 10000 //when counting down - this event will fire with this many milliseconds remaining on the clock
};

var timer = new Stopwatch(900000, options); //set stopwatch to 15 minute countdown as default.

//timer.start();

timer.onTime(function(time) {
  console.log(
    Math.floor(time.ms / 1000 / 60) << 0,
    Math.floor(time.ms / 1000) % 60
  ); //number of milliseconds past (or remaining);
});

//Exports for API to use
//set new time
module.exports = {
  setTimer: function(newTimeMinutes,newTimeSeconds) {
    var newTime = convertTime.minuteToMillisec(newTimeMinutes) + convertTime.secondsToMillisec(newTimeSeconds);
    timer.reset(newTime);
  },
//set new Qtr
  resetQtr: function() {
    timer.reset(900000);
  },
  //set timer to last set time.
  resetTimer: function() {
    timer.reset();
  },

  //start timer
  startTimer: function() {
    timer.start();
  },

  //stop timer
  stopTimer: function() {
    timer.stop();
  },

  //toggle timer
  startstopTimer: function() {
    timer.startstop();
  }
};

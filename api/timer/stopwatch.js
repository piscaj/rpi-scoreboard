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

timer.onTime(function(time) {
  console.log(
    Math.floor(time.ms / 1000 / 60) << 0,
    Math.floor(time.ms / 1000) % 60
  ); //number of milliseconds past (or remaining);
});

//Exports for API to use
//set new time
module.exports = {
  setTimer: function(newTimeMinutes, newTimeSeconds) {
    var newTime =
      convertTime.minuteToMillisec(newTimeMinutes) +
      convertTime.secondsToMillisec(newTimeSeconds);
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

// Fires every 1sec per option settings.
timer.onTime(function(time) {
  var minutes = Math.floor(time.ms / 1000 / 60) << 0;
  var seconds = Math.floor(time.ms / 1000) % 60;
  timerSecondsVal = seconds.toString();
  timerMinutesVal = minutes.toString();

  var MinutesVal = splitNumber.splitNum(minutes);
  var SecondsVal = splitNumber.splitNum(seconds);
  displayTime = MinutesVal.concat(SecondsVal);

  for (i = array.length; i--; ) {
    var command = buildCommand.displayCommand(timerDigitID[i], displayTime[i]);
    com.portWrite(command);
  }
});

// Fires when the timer is done
timer.onDone(function() {
  console.log("Timer is complete");
});

// Fires when the timer is almost complete - default is 10 seconds remaining. Change with 'almostDoneMS' option
timer.onAlmostdone(function() {
  console.log("Timer is almost complete");
});

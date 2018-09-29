var Stopwatch = require("timer-stopwatch");
const minuteToMillisec = require("../tools/convertMillisec");

var options = {
  refreshRateMS: 1000, //how often the clock should be updated
  almostDoneMS: 10000 //when counting down - this event will fire with this many milliseconds remaining on the clock
};

var timer = new Stopwatch(900000, options); //set stopwatch to 15 minute countdown as default.

timer.start();

timer.onTime(function(time) {
  console.log(
    Math.floor(time.ms / 1000 / 60) << 0,
    Math.floor(time.ms / 1000) % 60
  ); //number of milliseconds past (or remaining);
});

//Exports for API to use
//set new time
module.exports = {
  setTimer: function(newTime) {
    timer.reset(minuteToMillisec(newTime));
  },

  //set timer to 0. If start timer in initiated from 0 it will count up.
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

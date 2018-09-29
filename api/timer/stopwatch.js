var Stopwatch = require("timer-stopwatch");

var options = {
  refreshRateMS: 1000, //how often the clock should be updated
  almostDoneMS: 10000 //when counting down - this event will fire with this many milliseconds remaining on the clock
};

var timer = new Stopwatch(900000, options);

timer.start();

timer.onTime(function(time) {
  console.log(
    Math.floor(time.ms / 1000 / 60) << 0,
    Math.floor(time.ms / 1000) % 60
  ); //number of milliseconds past (or remaining);
});

//Exports for API to use
//open port
module.exports = {
  setTimer: function(newTime) {
    timer.reset(newTime)


  }
};

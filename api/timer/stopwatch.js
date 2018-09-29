var Stopwatch = require('timer-stopwatch');

var options = {
  refreshRateMS: 1000,		// How often the clock should be updated
  almostDoneMS: 10000, 	// When counting down - this event will fire with this many milliseconds remaining on the clock
}
 
var timer = new Stopwatch(60000,options);

timer.start();

timer.onTime(function(time) {
    console.log(Math.round(time.ms / 1000.0)); // number of milliseconds past (or remaining);
});

//Exports for API to use
//open port
module.exports = {
    setTimer: function(newTime) {

    },

  };
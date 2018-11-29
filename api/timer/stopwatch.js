var Stopwatch = require("timer-stopwatch");
const convertTime = require("../tools/convertMillisec");
const buildCommand = require("../scoreboard/controlDigit");
const com = require("../serialport/port");
require("../scoreboard/Global");
const splitNumber = require("../scoreboard/splitNumber");

const
    server = require("socket.io"),
    io = server.listen(3002);

var options = {
  refreshRateMS: 1000, //how often the clock should be updated
  almostDoneMS: 10000 //when counting down - this event will fire with this many milliseconds remaining on the clock
};

var timer = new Stopwatch(900000, options); //set stopwatch to 15 minute countdown as default.

/*
timer.onTime(function(time) {
  console.log(
    Math.floor(time.ms / 1000 / 60) << 0,
    Math.floor(time.ms / 1000) % 60
  ); //number of milliseconds past (or remaining);
});
*/

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
  timerSecondsVal = seconds;
  timerMinutesVal = minutes;

  var MinutesVal = splitNumber.splitNum(minutes);
  var SecondsVal = splitNumber.splitNum(seconds);

  displayTime = MinutesVal.concat(SecondsVal);

  var command = buildCommand.displayCommand(timerDigitID[3], displayTime[3]);
  com.portWrite(command);
  var command = buildCommand.displayCommand(timerDigitID[2], displayTime[2]);
  com.portWrite(command);
  var command = buildCommand.displayCommand(timerDigitID[1], displayTime[1]);
  com.portWrite(command);
  var command = buildCommand.displayCommand(timerDigitID[0], displayTime[0]);
  com.portWrite(command);
});

// Fires when the timer is done
timer.onDone(function() {
  console.log("Timer is complete");

  var command = buildCommand.displayCommand(timerDigitID[3], '-');
  com.portWrite(command);
  var command = buildCommand.displayCommand(timerDigitID[2], '-');
  com.portWrite(command);
  var command = buildCommand.displayCommand(timerDigitID[1], '-');
  com.portWrite(command);
  var command = buildCommand.displayCommand(timerDigitID[0], '-');
  com.portWrite(command);
});

// Fires when the timer is almost complete - default is 10 seconds remaining. Change with 'almostDoneMS' option
timer.onAlmostDone(function() {
  console.log("Timer is almost complete");
});

// Handle socket io connection 
io.on('connection', function (socket) {
  console.log("Connected succesfully to the socket ...");
  
  var minutes;
  var seconds;

  timer.onTime(function(time) {
    minutes = Math.floor(time.ms / 1000 / 60) << 0;
    seconds = Math.floor(time.ms / 1000) % 60;
    seconds = seconds.toString().padStart(2, "0");
    socket.emit('time', minutes+':'+seconds);
  
  });
  
  socket.on('my other event', function (data) {
      console.log(data);
  });
});
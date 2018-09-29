
// Convert minutes to milliseconds
module.exports = { 
    
    minuteToMillisec: function(minutes) {
    var milli = minutes*60000;
    return milli;
},
    secondsToMillisec: function(seconds) {
    var milli = seconds*1000;
    return milli;
}


};
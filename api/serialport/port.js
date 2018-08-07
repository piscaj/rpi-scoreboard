// include Serialport library
var SerialPort = require('serialport');
//Set port here 
const portname = '/dev/ttyAMA0';
//Setup serial port
var myPort = new SerialPort(portname, {
  autoOpen: false, //turn auto port open off so we can do this with .open and .close method
  baudRate: 9600
}); 

var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read data

//Exports for API to use
//open port
module.exports ={ openPort: function(){
  myPort.open();
  console.log("My PORT");
 },
//close port
closePort: function(){
 myPort.close();
 },
//send data to port
portWrite: function(s) {
 myPort.write(s);
 }
}

myPort.pipe(parser); // pipe the serial stream to the parser

//Callback functions for port and parser
myPort.on('open', portOpen);
parser.on('data', readSerialData);
myPort.on('close', portClose);
myPort.on('error', showError);

//on port open
function portOpen() {
  console.log('Port open. Data rate: ' + myPort.baudRate);
}
//on data 
function readSerialData(data) {
  console.log(data);
}
//on port closed
function portClose() {
  console.log('Port closed.');
}
//on error
function showError(error) {
  console.log(error);
}


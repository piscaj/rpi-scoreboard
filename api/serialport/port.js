
var SerialPort = require('serialport');// include the library
//var portname = process.argv[2]; // get port name from the command line
const portname = '/dev/ttyAMA0';

var myPort = new SerialPort(portname, {
  autoOpen: false,
  baudRate: 9600
}); //Setup serial port

var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read data

module.exports ={ openPort: function(){
  myPort.open();
  console.log("My PORT");
 },

closePort: function(){
 myPort.close();
 },

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

function portOpen() {
  console.log('Port open. Data rate: ' + myPort.baudRate);
  setTimeout(portWrite, 3000);
}

function readSerialData(data) {
  console.log(data);
  setTimeout(portLoop, 2000);
  //setTimeout(displayCommand(1), 2000);
}

function portClose() {
  console.log('Port closed.');
}

function showError(error) {
  console.log(error);
}


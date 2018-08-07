
var SerialPort = require('serialport');// include Serialport library

const portname = '/dev/ttyAMA0';//Set port here 

var myPort = new SerialPort(portname, {
  autoOpen: false, //turn auto port open off so we can do this with .open and .close method
  baudRate: 9600
}); //Setup serial port 

var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read data

//Exports for API to use
module.exports ={ openPort: function(){//open port
  myPort.open();
  console.log("My PORT");
 },

closePort: function(){//close port
 myPort.close();
 },

portWrite: function(s) {//send data to port
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
}

function portClose() {
  console.log('Port closed.');
}

function showError(error) {
  console.log(error);
}


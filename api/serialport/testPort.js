
var SerialPort = require('serialport');// include the library
//var portname = process.argv[2]; // get port name from the command line
const portname = '/dev/ttyAMA0';

var myPort = new SerialPort(portname, {
    baudRate: 9600
  }); //Setup serial port
 
var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read data
myPort.pipe(parser); // pipe the serial stream to the parser

//Callback functions for port and parser
myPort.on('open', showPortOpen);
parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);


function showPortOpen() {
  console.log('Port open. Data rate: ' + myPort.baudRate);
  setTimeout(portWrite, 3000);
}

function readSerialData(data) {
  console.log(data);
  setTimeout(portLoop, 2000);
  //setTimeout(displayCommand(1), 2000);
}

function showPortClose() {
  console.log('Port closed.');
}

function showError(error) {
  console.log(error);
}

function portWrite() {
  myPort.write("Hello... This port is ready for use.\n");
}

function portLoop() {
  myPort.write("Loop test...\n");
}
const convertByte = require("../tools/convertByte");
// include Serialport library
var SerialPort = require("serialport");
//Set port here
const portname = "/dev/ttyAMA0";
//Setup serial port
var myPort = new SerialPort(portname, {
  autoOpen: false, //turn auto port open off so we can do this with .open and .close method
  baudRate: 9600
});

var Readline = SerialPort.parsers.Readline; // make instance of Readline parser
var parser = new Readline(); // make a new parser to read data

//Exports for API to use
//open port
module.exports = {
  openPort: function() {
    if (myPort.isOpen === false) {
      myPort.open();
    } else {
      console.log("Port is already open.");
    }
  },
  //close port
  closePort: function() {
    if (myPort.isOpen) {
      myPort.close();
    } else {
      console.log("Port is already closed.");
    }
  },
  //send data to port
  portWrite: function(s) {
    if (myPort.isOpen) {
        myPort.write(convertByte.bytesToHex(s));
    }
   else {
      console.log("Port is closed.");
    }
  }
};

myPort.pipe(parser); // pipe the serial stream to the parser

//Callback functions for port and parser
myPort.on("open", portOpen);
parser.on("data", readSerialData);
myPort.on("close", portClose);
myPort.on("error", showError);

//on port open
function portOpen() {
  console.log("Port open. Data rate: " + myPort.baudRate);
}
//on data
function readSerialData(data) {
  console.log(data);
}
//on port closed
function portClose() {
  console.log("Port closed.");
}
//on error
function showError(error) {
  console.log(error);
}

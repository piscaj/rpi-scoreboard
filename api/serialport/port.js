// include Serialport library
var SerialPort = require("serialport");
//Set port here
const portname = "/dev/ttyAMA0";
//Setup serial port
var myPort = new SerialPort(portname, {
  autoOpen: false, //turn auto port open off so we can do this with .open and .close method
  baudRate: 9600 //set port speed
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
    console.log("|------------Message sent to comport----------->>>>", s)
    var buffer = new Buffer.alloc(10); // make a buffer for outbound data
    if (myPort.isOpen) {
    //Fill the buffer with byte array
      for (i = 0; i < s.length; i++) {
        buffer[i]=s[i];
    }
    //write the buffer to the port
    myPort.write(buffer);
    } else {
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

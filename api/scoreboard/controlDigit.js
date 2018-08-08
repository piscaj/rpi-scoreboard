const chk = require("./calculateChecksum");

module.exports = {
  displayCommand: function(s) {
    const SOH = 0x01;
    const DIGIT = 0x44;
    const ID0 = 0x30;
    const ID1 = 0x31;
    const ETX = 0x03;

    var TEMP = "";
    TEMP = parseInt(s.charCodeAt(0), 10);
    var CHK = chk.calculateChk(DIGIT + ID0 + ID1 + TEMP);
    var VAL = s.charCodeAt(0).toString(16);
    //console.log(SOH.toString(16)+DIGIT.toString(16)+ID0.toString(16)+ID1.toString(16)+VAL+CHK+ETX.toString(16));
    return (
      SOH.toString(16).padStart(2, '0') +
      DIGIT.toString(16).padStart(2, '0') +
      ID0.toString(16).padStart(2, '0') +
      ID1.toString(16).padStart(2, '0') +
      VAL.padStart(2, '0') +
      CHK.padStart(2, '0') +
      ETX.toString(16).padStart(2, '0')
    );
  }
};

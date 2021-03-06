const chk = require("./calculateChecksum");
const id = require("./calculateID");
const convertByte = require("../tools/convertByte");
const splitNumber = require("./splitNumber");
require("../scoreboard/Global");

module.exports = {
  displayCommand: function(n, s) {
    const SOH = 0x01;
    const DIGIT = 0x44;
    const ETX = 0x03;

    //split scoreboard id into two seperate bytes
    var AD = id.calculateID(scoreboardID);
    ADbyte = convertByte.hexToBytes(AD);

    //split digit id into two seperate bytes
    var ID = id.calculateID(n);
    var IDbyte = convertByte.hexToBytes(ID);

    //calculate the checksum
    var TEMP = parseInt(s.charCodeAt(0), 10);
    var CHK = chk.calculateChk(
      ADbyte[0] + ADbyte[1] + DIGIT + IDbyte[0] + IDbyte[1] + TEMP
    );

    var VAL = s.charCodeAt(0).toString(16);

    //concatinate the string and pad 0 when needed
    var TEMP =
      SOH.toString(16).padStart(2, "0") +
      AD.toString(16).padStart(2, "0") +
      DIGIT.toString(16).padStart(2, "0") +
      ID.toString(16).padStart(2, "0") +
      VAL.padStart(2, "0") +
      CHK.padStart(2, "0") +
      ETX.toString(16).padStart(2, "0");

    return (
      //convert string to byte array
      convertByte.hexToBytes(TEMP)
    );
  }
};

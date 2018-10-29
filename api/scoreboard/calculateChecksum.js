const convert = require("../tools/convertHex");

module.exports = {
  calculateChk: function(s) {
    var TEMP = [];
    TEMP = s.toString(16).slice(-2);
    TEMP = TEMP.split("", 2);
    TEMP[0] = TEMP[0].toUpperCase();
    TEMP[1] = TEMP[1].toUpperCase();
    return convert.toHex(TEMP[0]) + convert.toHex(TEMP[1]);
  }
};

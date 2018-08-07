const convert = require("../tools/convertHex");

module.exports = {
  calculateChk: function(s) {
    var TEMP = [];
    //console.log(s);
    TEMP = s.toString(16).split("", 2);
    TEMP[0] = TEMP[0].toUpperCase();
    TEMP[1] = TEMP[1].toUpperCase();
    //console.log(TEMP);
    return convert.toHex(TEMP[0]) + convert.toHex(TEMP[1]);
  }
};

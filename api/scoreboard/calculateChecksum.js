const convert = require("../tools/convertHex");

module.exports = {
  calculateChk: function(s) {
    var TEMP = [];
    console.log(s);
    TEMP = s.toString(16).slice(-2);
    //TEMP = s.toString(16).split("", 2);
    TEMP = TEMP.split("", 2);
    console.log(TEMP);
    TEMP[0] = TEMP[0].toUpperCase();
    TEMP[1] = TEMP[1].toUpperCase();
    return convert.toHex(TEMP[0]) + convert.toHex(TEMP[1]);
  }
};

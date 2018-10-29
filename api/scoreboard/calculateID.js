const convert = require("../tools/convertHex");

module.exports = {
  calculateID: function(s) {
    var TEMP = [];
    TEMP = s
      .toString()
      .padStart(2, "0")
      .split("", 2);
    TEMP[0] = TEMP[0].toUpperCase();
    TEMP[1] = TEMP[1].toUpperCase();
    return convert.toHex(TEMP[0]) + convert.toHex(TEMP[1]);
  }
};

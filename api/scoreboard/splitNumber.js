const convert = require("../tools/convertHex");

module.exports = {
  splitNum: function(s) {
    var splitNum = [];
    splitNum = s.toString().padStart(2, '0').split("", 2);
   // splitNum[0] = convert.toHex(splitNum[0]).toUpperCase();
   // splitNum[1] = convert.toHex(splitNum[1]).toUpperCase();
    return splitNum;
  }
};

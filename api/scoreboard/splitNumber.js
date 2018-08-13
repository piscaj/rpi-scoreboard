const convert = require("../tools/convertHex");

module.exports = {
  splitNum: function(s) {
    var splitNum = [];
    //console.log(s);
    splitNum = s.toString().padStart(2, '0').split("", 2);
    splitNum[0] = convert.toHex(splitNum[0]).toUpperCase();
    splitNum[1] = convert.toHex(splitNum[1]).toUpperCase();
    //console.log(TEMP);
    return splitNum;
  }
};

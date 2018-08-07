module.exports = {
  toHex: function(s) {
    if (s.substr(0, 2).toLowerCase() === "0x") {
      return s;
    }

    var l = "0123456789ABCDEF";
    var o = "";

    if (typeof s !== "string") {
      s = s.toString();
    }
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);

      o = o + l.substr(c >> 4, 1) + l.substr(c & 0x0f, 1);
    }

    //return "0x" + o;
    return o;
  },

  fromHex: function(s) {
    var start = 0;
    var o = "";

    if (s.substr(0, 2) === "0x") {
      start = 2;
    }

    if (typeof s !== "string") {
      s = s.toString();
    }
    for (var i = start; i < s.length; i += 2) {
      var c = s.substr(i, 2);

      o = o + String.fromCharCode(parseInt(c, 16));
    }

    return o;
  }
};

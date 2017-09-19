(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_STR = '...';
  var EMPTY_STR = '';

  nx.truncate = function (inStr, inLength, inTruncateStr) {
    var str = inStr || EMPTY_STR;
    var truncateStr = inTruncateStr || DEFAULT_STR;
    var length = ~~inLength;
    return str.length > length ? str.slice(0, length) + truncateStr : str;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.truncate;
  }

}());

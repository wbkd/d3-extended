
return d3;
}

if(typeof module === 'object' && module.exports) {
  module.exports = extend;
}
else if(typeof define === 'function' && define.amd) {
  define(['d3'], extend);
}
else {
  extend(d3);
}

})();
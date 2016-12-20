var d3 = require ('d3-selection');

var eq = function(findI, findJ) {
  return d3.select(this['_groups'][0][findI]);
}

export default eq

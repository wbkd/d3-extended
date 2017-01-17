import {default as d3} from "d3-selection";

var eq = function(findI, findJ) {
  return d3.select(this['_groups'][0][findI]);
}

export default eq

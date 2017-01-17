import {default as d3} from "d3-selection";

var last = function() {
  var size = this['_groups'][0].length-1;
  return d3.select(this['_groups'][0][size]);
}

export default last

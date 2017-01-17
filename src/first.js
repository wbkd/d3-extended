import {default as d3} from "d3-selection";

var first = function() {
  return d3.select(this['_groups'][0][0]);
}

export default first

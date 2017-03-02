import {default as d3} from "d3-selection";

var trigger = function(evtName, data) {

  var d3_selection_on = d3.selection.prototype.on;
  d3_selection_on.apply(this, [evtName, data]);

  return this;
}

export default trigger;

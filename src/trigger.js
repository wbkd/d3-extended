var d3 = require ('d3-selection');

var trigger = function(evtName, data) {

  var d3_selection_on = d3.selection.prototype.on;
  console.log(this);
  d3_selection_on.apply(this, [evtName, data]);

  return this;
}

export default trigger;
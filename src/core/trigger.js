d3.selection.prototype.trigger = function(evtName, data) {
  d3_selection_on.apply(this, [evtName])(data);
   return this;
}
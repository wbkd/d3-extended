d3.selection.prototype.trigger = function(evtName, data) {
  this.on_original(evtName)(data);
  return this;
}
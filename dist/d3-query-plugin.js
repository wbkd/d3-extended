var x = 'before';
var x = 123;
d3.selection.prototype.trigger = function(evtName, data) {
  this.on(evtName)(data);
}
d3.selection.prototype.clear = function() {
  this.selectAll('*').remove();
  return this;
}
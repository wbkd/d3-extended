d3.selection.prototype.toggleClass = function(className) {
  this.classed(className, !this.classed(className));
  return this;
}
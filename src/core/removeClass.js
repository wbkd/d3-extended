d3.selection.prototype.removeClass = function(classNames) {
  return this.classed(classNames, false);
}

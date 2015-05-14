d3.selection.prototype.eq = function(index) {
  return d3.select(this[0][index]);
}
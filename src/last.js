d3.selection.prototype.last = function() {
  var length = this[0].length;
  return d3.select(this[0][length-1]);
}
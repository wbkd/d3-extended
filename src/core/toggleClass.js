d3.selection.prototype.toggleClass = function(classNames) {
  var classes = classNames.split(' ');

  for(var i = 0; i < classes.length;i++) {
    var c = classes[i];
    this.classed(c, !this.classed(c));
  }
  return this;
}
d3.selection.prototype.toggle = function() {
  var isHidden = this.style('display') == 'none';
  return this.style('display', isHidden ? 'inherit' : 'none');
}
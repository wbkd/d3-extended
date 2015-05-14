d3.selection.prototype.before = function(tagName) {
  var elements = [];

  this.each(function() {
    var element = document.createElement(tagName);
    this.parentNode.insertBefore(element, this);
    elements.push(element);
  });

  return d3.selectAll(elements);
}
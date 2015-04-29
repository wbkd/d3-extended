d3.selection.prototype.after = function(tagName) {
  var elements = [];

  this.each(function() {
    var element = document.createElement(tagName);
    this.parentNode.insertBefore(element, this.nextSibling);
    elements.push(element);
  });

  return d3.selectAll(elements);
}
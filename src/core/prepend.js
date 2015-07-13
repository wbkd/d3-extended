//the same as append, but inserting the element before the first element in the container
d3.selection.prototype.prepend = function(tagName) {
  var elements = [];

  this.each(function() {
    var element = document.createElement(tagName);
    this.insertBefore(element, this.firstChild);
    elements.push(element);
  });

  return d3.selectAll(elements);
}
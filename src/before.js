var d3 = require ('d3-selection');

var before = function(tagName) {
  var elements = [];

  this.each(function() {
    var document = this.ownerDocument;
    var element = document.createElement(tagName);
    this.parentNode.insertBefore(element, this);
    elements.push(element);
  });

  return d3.selectAll(elements);
}

export default before

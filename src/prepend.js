import {default as d3} from "d3-selection";

//the same as append, but inserting the element before the first element in the container
var prepend = function(tagName) {
  var elements = [];

  this.each(function() {
    var document = this.ownerDocument;
    var element = document.createElement(tagName);
    this.insertBefore(element, this.firstChild);
    elements.push(element);
  });

  return d3.selectAll(elements);
}

export default prepend

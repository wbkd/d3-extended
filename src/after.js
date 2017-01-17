//var d3 = require ('d3-selection');
import {default as d3} from "d3-selection";

var after = function(tagName) {
  var elements = [];

  this.each(function() {

    var document = this.ownerDocument;
    var element = document.createElement(tagName);
    this.parentNode.insertBefore(element, this.nextSibling);
    elements.push(element);
  });

  return d3.selectAll(elements);
}

export default after;

import { selectAll } from 'd3-selection';

function after(tagName) {
  const elements = [];

  this.each(function() {
    const document = this.ownerDocument;
    const element = document.createElement(tagName);
    this.parentNode.insertBefore(element, this.nextSibling);
    elements.push(element);
  });

  return selectAll(elements);
}

export default after;

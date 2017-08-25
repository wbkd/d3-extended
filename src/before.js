import { selectAll } from 'd3-selection';

function before(tagName) {
  const elements = [];

  this.each(function() {
    const document = this.ownerDocument;
    const element = document.createElement(tagName);
    this.parentNode.insertBefore(element, this);
    elements.push(element);
  });

  return selectAll(elements);
}

export default before

import { selectAll } from 'd3-selection';

//the same as append, but inserting the element before the first element in the container
function prepend(tagName) {
  const elements = [];

  this.each(function() {
    const document = this.ownerDocument;
    const element = document.createElement(tagName);
    this.insertBefore(element, this.firstChild);
    elements.push(element);
  });

  return selectAll(elements);
}

export default prepend;

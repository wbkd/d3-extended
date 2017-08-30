import { selectAll } from 'd3-selection';

/**
* jQuery equivalent: [$.before](http://api.jquery.com/before/)
*
* Inserts new elements before each element in the current selection. Returns the newly created elements as a d3 selection.
*
* @function before
* @example
* d3.selectAll('li')
*   .before('li')
*   .text('Item');
*   //do something else with the inserted elements...
*
* @param {string}  tagName - The element to insert
* @returns {selection} - The new elements as a D3 selection.
**/
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

import { selectAll } from 'd3-selection';

/**
* jQuery equivalent: [$.after](http://api.jquery.com/after/)
*
* Inserts new elements after each element in the current selection. Returns the newly created elements as a d3 selection.
*
* @function after
* @example
* d3.selectAll('li')
*   .after('li')
*   .text('Item');
*   //do something else with the inserted elements...
*
* @param {string}  tagName - The element to insert
* @returns {selection} - The new elements as a D3 selection.
**/
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

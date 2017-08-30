import { selectAll } from 'd3-selection';

/**
* jQuery equivalent: [$.prepend](http://api.jquery.com/prepend/)
*
* Inserts elements as first child of the current selection. Returns the new elements as a D3 selection.
*
* @function
* @name prepend
* @example
* d3.selectAll('li')
*   .prepend('a')
*   .text('Some Link')
*   //do somethin else with the link
*
* @param {string}  tagName - The element to append
* @returns {selection} - The new elements as a D3 selection.
**/
function prepend(tagName) {
  //the same as append, but inserting the element before the first element in the container
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

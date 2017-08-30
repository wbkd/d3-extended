/**
* jQuery equivalent: [$.addClass](http://api.jquery.com/addclass/)
*
* Adds class to elements in the current selection. Returns current selection.
*
* @function addClass
* @example
* d3.selectAll('ul').addClass('active');
* d3.selectAll('ul').addClass('class-a class-b'); //will add two classes
*
* @param {string}  className - The class to insert
* @returns {selection} - The current selection
**/
function addClass(classNames) {
  this.classed(classNames, true);
  return this;
}

export default addClass;

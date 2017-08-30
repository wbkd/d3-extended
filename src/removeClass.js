/**
* jQuery equivalent: [$.removeClass](http://api.jquery.com/removeclass/)
*
* Removes class from elements in the current selection. Returns current selection.
*
* @function removeClass
* @example
* d3.selectAll('ul').removeClass('active');
* d3.selectAll('ul').removeClass('class-a class-b'); //will remove two classes
*
* @param {string}  className - The class to remove
* @returns {selection} - The current selection
**/
function removeClass(classNames) {
  return this.classed(classNames, false);
}

export default removeClass;

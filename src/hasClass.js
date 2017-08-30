/**
* jQuery equivalent: [$.hasClass](http://api.jquery.com/hasclass/)
*
* Checks if current selection has the passed class. Returns true or false.
*
* @function
* @name hasClass
* @example
* d3.selectAll('ul').hasClass('active');
*
* @param {string}  className - The element to append
* @returns {bool} - True if the selection has the passed class
**/
function hasClass(className) {
  return this.classed(className);
}

export default hasClass

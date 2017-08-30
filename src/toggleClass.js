/**
* jQuery equivalent: [$.toggleClass](http://api.jquery.com/toggleclass/)
*
* Adds or removes class from elements in the current selection. Returns current selection.
*
* @function
* @name toggleClass
* @example
* d3.selectAll('ul').toggleClass('active');
* d3.selectAll('ul').toggleClass('class-a class-b'); //toggle multiple classes
*
* @param {string}  className - The css class to toggle
* @returns {selection} - Returns current selection.
**/
function toggleClass(classNames) {
  const classes = classNames.split(' ');

  for(let i = 0; i < classes.length; i++) {
    const c = classes[i];
    this.classed(c, !this.classed(c));
  }
  return this;
}

export default toggleClass;

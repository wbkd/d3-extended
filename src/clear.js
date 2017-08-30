/**
* jQuery equivalent: [$.empty](http://api.jquery.com/empty/)
*
* Removes all children of the current selection. Returns the current selection.
We are using another name for this function as in jQuery, because d3 already has an empty function.
*
* @function clear
* @example
* d3.selectAll('ul')
*   .clear();
*   // ul element has no children anymore.
*
* @returns {selection} - The current selection
**/
function clear() {
  this.selectAll('*').remove();
  return this;
}

export default clear

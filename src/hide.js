/**
* jQuery equivalent: [$.hide](http://api.jquery.com/hide/)
*
* Hides the current selection. Returns the selection.
*
* @function hide
* @example
* d3.selectAll('.foo').hide();
*
* @returns {selection} - The selection.
**/
function hide() {
  this.style('display', 'none');
  return this;
}

export default hide

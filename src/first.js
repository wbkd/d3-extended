import { select } from 'd3-selection';

/**
* jQuery equivalent: [$.first](http://api.jquery.com/first/)
*
* Reduces the current selection to the first element. Then returns the reduced selection.
*
* @function first
* @example
* d3.selectAll('ul').first();
*
* @returns {selection} - The reduced selection
**/
function first() {
  return select(this['_groups'][0][0]);
}

export default first

import { select } from 'd3-selection';

/**
* jQuery equivalent: [$.last](http://api.jquery.com/last/)
*
* Reduces the current selection to the last element. Then returns the reduced selection.
*
* @function
* @name last
* @example
* d3.selectAll('ul').last();
*
* @returns {selection} - The reduced selection.
**/
function last() {
  const size = this['_groups'][0].length-1;
  return select(this['_groups'][0][size]);
}

export default last;

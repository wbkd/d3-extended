import { select } from 'd3-selection';

/**
* jQuery equivalent: [$.eq](http://api.jquery.com/eq/)
*
* Reduces current selection to the element with the passed index. Returns element.
* If you have a nested group, you can also specify the group index, to select a certain group.
*
* @function
* @name eq
* @example
* d3.selectAll('li').eq('0');
* // returns first li element
*
* @param {string}  index - The index to select
* @param {string}  [groupIndex] - Group to select
* @returns {element} - The element
**/
function eq(findI, findJ) {
  return select(this['_groups'][0][findI]);
}

export default eq

// taken from the awesome https://github.com/gka/d3-jetpack/blob/master/d3-jetpack.js#L138
// we need the original on function from d3 for selection.trigger
import { selection } from 'd3-selection';

/**
* jQuery equivalent: [$.on](http://api.jquery.com/on/)
*
* Works like the normal `on` function but now you can pass multiple event types like you know it from jquery.
We took this function from the awesome [d3-jetpack](https://github.com/gka/d3-jetpack)
*
* @function
* @name on
* @example
* d3.select('li').on('click mouseenter mouseleave', function(d, i) {
*   // do something
* });
*
* @param {string}  types -
* @param {string}  listener -
* @param {string}  capture -
* @returns {selection} - The target selection.
**/
const d3_selection_on = selection.prototype.on;
function on(type, listener, capture) {
  if (typeof type === 'string' && type.indexOf(' ') > -1) {
    const types = type.split(' ');
    for (let i = 0; i < types.length; i++) {
        d3_selection_on.apply(this, [types[i], listener, capture]);
    }
  } else {
    d3_selection_on.apply(this, [type, listener, capture]);
  }

  return this;
};

export default on;

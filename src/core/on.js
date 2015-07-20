// taken from the awesome https://github.com/gka/d3-jetpack/blob/master/d3-jetpack.js#L138
// we need the original on function from d3 for selection.trigger

var d3_selection_on = d3.selection.prototype.on;
d3.selection.prototype.on = function(type, listener, capture) {
  if (typeof type === 'string' && type.indexOf(' ') > -1) {
    var types = type.split(' ');
    for (var i = 0; i < types.length; i++) {
        d3_selection_on.apply(this, [types[i], listener, capture]);
    }
  } else {
    d3_selection_on.apply(this, [type, listener, capture]);
  }
  
  return this;
};
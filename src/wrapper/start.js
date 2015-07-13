(function() {

var extend = function(d3) {

if(typeof d3 === 'undefined' && typeof d3 !== 'object') {
  console.log('D3 not found.');
  return false;
}

//we need the original on function from d3 for selection.trigger
var d3_selection_on = d3.selection.prototype.on;
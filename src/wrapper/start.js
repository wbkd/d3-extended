(function() {

var extend = function(d3) {

if(typeof d3 === 'undefined' && typeof d3 !== 'object') {
  console.log('D3 not found.');
  return false;
}
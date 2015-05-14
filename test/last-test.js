var test = require('tape');
var helper = require('./helper');
var d3Extended = helper.getD3Extended();

test('last - get last element of a selection', function(t){

  t.plan(1);

  var lastElement = helper.getEmptyBody()
    .selectAll('div')
    .data(['a','b','c'])
    .enter()
    .append('div')
    .attr('id', function(d, i){
      return 'test-' + d;
    })
    .last();
  
  t.equal(lastElement.attr('id'), 'test-c');
});
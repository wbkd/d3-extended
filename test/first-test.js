var test = require('tape');
var helper = require('./helper');
var d3Extended = helper.getD3Extended();

test('first - get first element of a selection', function(t){

  t.plan(1);

  var firstElement = helper.getEmptyBody()
    .selectAll('div')
    .data(['a','b','c'])
    .enter()
    .append('div')
    .attr('id', function(d, i){
      return 'test-' + d;
    })
    .first();
  
  t.equal(firstElement.attr('id'), 'test-a');
});

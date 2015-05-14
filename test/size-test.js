var test = require('tape');
var helper = require('./helper');
var d3Extended = helper.getD3Extended();

test('get size of selection', function(t){

  t.plan(1);

  var size = helper.getEmptyBody()
    .selectAll('div')
    .data(['a','b','c'])
    .enter()
    .append('div')
    .attr('id', function(d, i){
      return 'test-' + d;
    })
    .size();
  
  t.equal(size, 3);
});

test('get size of empty selection', function(t){

  t.plan(1);

  var size = helper.getEmptyBody()
    .selectAll('div')
    .data([])
    .enter()
    .append('div')
    .attr('id', function(d, i){
      return 'test-' + d;
    })
    .size();
  
  t.equal(size, 0);
});
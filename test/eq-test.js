var test = require('tape');
var helper = require('./helper');
var d3Extended = helper.getD3Extended();

test('eq - get first element of a selection', function(t){

  t.plan(1);

  var firstElement = createDivs(['a','b','c']).eq(0);
  
  t.equal(firstElement.attr('id'), 'test-a');
});

test('eq - get second element of a selection', function(t){

  t.plan(1);

  var secondElement = createDivs(['m','n','o']).eq(1);
  
  t.equal(secondElement.attr('id'), 'test-n');
});

function createDivs(data){
  return helper.getEmptyBody()
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .attr('id', function(d, i){
      return 'test-' + d;
    });
}
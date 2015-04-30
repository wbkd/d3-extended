var test = require('tape');
var helper = require('./helper');
var d3query = require('../lib/d3-query');

test('remove all children from body', function(t){

  t.plan(2);

  var body = helper.getEmptyBody();
  
  body.selectAll('div')
    .data([1,2,3,4,5])
    .enter()
    .append('div');
  
  t.equal(body.node().childNodes.length, 5);
    
  body.clear();

  t.equal(body.node().childNodes.length, 0);
});
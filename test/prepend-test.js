var test = require('tape');
var helper = require('./helper');
var d3Extended = helper.getD3Extended();

test('prepend - prepend p node inside div', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode();
  testDiv.append('span'); //some inner node to test if element is inserted before
  testDiv.prepend('p');

  var addedNode = d3Extended.select('p').node();

  t.equal(addedNode, testDiv.node().firstChild);
});
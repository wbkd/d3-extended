var test = require('tape');
var helper = require('./helper');
var d3Extended = helper.getD3Extended();

test('before - add p node before div', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode();

  testDiv.before('p');

  var addedNode = d3Extended.select('p').node();

  t.ok(addedNode === document.body.firstChild);

});
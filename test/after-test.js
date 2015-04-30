var test = require('tape');
var helper = require('./helper');
var d3query = require('../lib/d3-query');

test('add p node after div', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode();

  testDiv.after('p');

  var addedNode = d3query.select('p').node();

  t.ok(addedNode === document.body.lastChild);
});
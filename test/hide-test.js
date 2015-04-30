var test = require('tape');
var helper = require('./helper');
var d3query = require('../lib/d3-query');

test('hide element', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode().hide();

  t.equal(testDiv.node().style.display, 'none');
});

var test = require('tape');
var helper = require('./helper');
var d3query = require('../lib/d3-query');

test('element has certain class', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode()
    .classed('new-class', true);
  
  t.ok(testDiv.hasClass('new-class'));
});

test('element does not have certain class', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode();
  
  t.notOk(testDiv.hasClass('not-existing-class'));
});
var test = require('tape');
var helper = require('./helper');

test('toggle class test', function(t){

  t.plan(3);

  var testDiv = helper.createDOMwithTestNode();

  t.notOk(testDiv.classed('new-class'));

  testDiv.toggleClass('new-class');
  t.ok(testDiv.classed('new-class'));

  testDiv.toggleClass('new-class');
  t.notOk(testDiv.classed('new-class'));

});

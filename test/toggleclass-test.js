var test = require('tape');
var helper = require('./helper');

test('toggleclass - toggle class test', function(t){

  t.plan(3);

  var testDiv = helper.createDOMwithTestNode();

  t.notOk(testDiv.classed('new-class'));

  testDiv.toggleClass('new-class');
  t.ok(testDiv.classed('new-class'));

  testDiv.toggleClass('new-class');
  t.notOk(testDiv.classed('new-class'));

});

test('toggleclass - toggle multiple classes test', function(t){

  t.plan(3);

  var testDiv = helper.createDOMwithTestNode();

  t.notOk(testDiv.classed('new-class new-class-a'));

  testDiv.toggleClass('new-class new-class-a');
  t.ok(testDiv.classed('new-class new-class-a'));

  testDiv.toggleClass('new-class new-class-a');
  t.notOk(testDiv.classed('new-class new-class-a'));

});


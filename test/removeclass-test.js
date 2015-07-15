var test = require('tape');
var helper = require('./helper');

test('removeclass - removes a class', function(t){

  t.plan(2);

  var testDiv = helper.createDOMwithTestNode()
    .classed('new-class', true);

  t.ok(testDiv.classed('new-class'));

  testDiv.removeClass('new-class');

  t.notOk(testDiv.classed('new-class'));

});

test('removeclass - remove multiple classes', function(t){

  t.plan(2);

  var testDiv = helper.createDOMwithTestNode()
    .classed('new-class new-class-a', true);

  t.ok(testDiv.classed('new-class'));

  testDiv.removeClass('new-class new-class-a');

  t.notOk(testDiv.classed('new-class'));

});

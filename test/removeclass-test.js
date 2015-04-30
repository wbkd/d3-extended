var test = require('tape');
var helper = require('./helper');

test('remove class test', function(t){

  t.plan(2);

  var testDiv = helper.createDOMwithTestNode()
    .classed('new-class', true);

  t.ok(testDiv.classed('new-class'));

  testDiv.removeClass('new-class');

  t.notOk(testDiv.classed('new-class'));

});

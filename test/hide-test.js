var test = require('tape');
var helper = require('./helper');

test('hide - hide element', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode().hide();

  t.equal(testDiv.node().style.display, 'none');
});

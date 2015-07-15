var test = require('tape');
var helper = require('./helper');

test('addclass - class added to element', function(t){

  t.plan(2);

  var testDiv = helper.createDOMwithTestNode()
    .addClass('new-class');

  t.ok(testDiv.classed('new-class'));
  t.equal(testDiv.node().classList.length, 1);

});

test('addclass - two classes added to element', function(t){

  t.plan(3);

  var testDiv = helper.createDOMwithTestNode()
    .addClass('new-class new-class-a');

  t.ok(testDiv.classed('new-class'));
  t.ok(testDiv.classed('new-class-a'));
  t.equal(testDiv.node().classList.length, 2);
});
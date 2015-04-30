var test = require('tape');
var helper = require('./helper');

test('class added to element', function(t){

  t.plan(2);

  var testDiv = helper.createDOMwithTestNode()
    .addClass('new-class');

  t.ok(testDiv.classed('new-class'));
  t.equal(testDiv.node().classList.length, 1);

});

test('two classes added to element', function(t){

  t.plan(3);

  var testDiv = helper.createDOMwithTestNode()
    .addClass('new-class')
    .addClass('new-class-a');

  t.ok(testDiv.classed('new-class'));
  t.ok(testDiv.classed('new-class-a'));
  t.equal(testDiv.node().classList.length, 2);
});
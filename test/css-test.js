var test = require('tape');
var helper = require('./helper');

test('css - add style to element', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode();

  testDiv.css('background', 'red');

  t.equal(testDiv.node().style.background, 'red');
});

test('css - add multiple styles to element', function(t){

  t.plan(2);

  var testDiv = helper.createDOMwithTestNode();

  testDiv.css({
    background:  'red',
    color : 'yellow'
  });

  t.equal(testDiv.node().style.background, 'red');
  t.equal(testDiv.node().style.color, 'yellow');
});
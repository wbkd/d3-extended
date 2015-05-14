var test = require('tape');
var helper = require('./helper');

test('toggle - toggle element', function(t){

  t.plan(3);

  var testDiv = helper.createDOMwithTestNode()
    .style('display', 'none');
  
  t.equal(testDiv.node().style.display, 'none');
    
  testDiv.toggle();
  t.equal(testDiv.node().style.display, 'inherit');

  testDiv.toggle();
  t.equal(testDiv.node().style.display, 'none');
});
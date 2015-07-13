var test = require('tape');
var helper = require('./helper');

test('show - display hidden element', function(t){

  t.plan(2);

  var testDiv = helper.createDOMwithTestNode()
    .style('display', 'none');
  

  t.equal(testDiv.node().style.display, 'none');
    
  testDiv.show();

  //the element should now have the display property removed
  t.equal(testDiv.node().style.display, '');
});
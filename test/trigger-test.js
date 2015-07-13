var test = require('tape');
var helper = require('./helper');

test('trigger - trigger event with data on selection', function(t){

  t.plan(1);

  var sendData = {
    data : 'test'
  }

  var receivedData = {
    data : ''
  }

  var testDiv = helper.createDOMwithTestNode();

  //bind listener
  testDiv.on('data', function(d) {
    receivedData.data = d.data;
  });

  testDiv.trigger('data', sendData);

  t.equal(receivedData.data, 'test');
});
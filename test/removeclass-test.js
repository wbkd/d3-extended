const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');


tape('removeclass - removes a class', test => {
  const document = jsdom.jsdom('<body><div class="test-class"></div></body>');
  const testDiv = d3.select(document).select('div');

  test.ok(testDiv.classed('test-class'));
  testDiv.removeClass('test-class');
  test.notOk(testDiv.classed('test-class'));
  test.end();
});

tape('removeclass - remove multiple classes', test => {
  const document = jsdom.jsdom('<body><div class="test-class test-class-2"></div></body>');
  const testDiv = d3.select(document).select('div');
 
  test.ok(testDiv.classed('test-class'));
  test.ok(testDiv.classed('test-class-2'));
  testDiv.removeClass('test-class test-class-2');
  test.notOk(testDiv.classed('test-class'));
  test.notOk(testDiv.classed('test-class-2'));
  test.end();
});

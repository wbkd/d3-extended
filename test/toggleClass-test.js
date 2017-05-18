const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');

tape('toggle - toggle class', test => {
  const document = jsdom.jsdom('<body><div class="class1 class2"></div></body>');
  const testDiv = d3.select(document).select('div');

  test.equal(testDiv.classed('class1'), true);
  testDiv.toggleClass('class1');
  test.equal(testDiv.classed('class1'), false);
  test.end();
});

tape('toggle - toggle multiple classes', test => {
  const document = jsdom.jsdom('<body><div class="class1 class2"></div></body>');
  const testDiv = d3.select(document).select('div');

  test.equal(testDiv.classed('class1 class2'), true);
  testDiv.toggleClass('class1 class2');
  test.equal(testDiv.classed('class1 class2'), false);
  test.end();
});

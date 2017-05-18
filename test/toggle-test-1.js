const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');


tape('toggle - toggle element', test => {
  const document = jsdom.jsdom('<body><div style="display:none"></div></body>');
  const testDiv = d3.select(document).select('div');

  test.equal(testDiv.node().style.display, 'none');
  testDiv.toggle();
  test.equal(testDiv.node().style.display, '');
  test.end();
});

const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');

tape('clear - remove all children from body', test => {
  const document = jsdom.jsdom('<body><div></div><div></div><div></div></body>');
  const body = d3.select(document).select('body');
 
  test.equal(body.node().childNodes.length, 3);
  body.clear();

  test.equal(body.node().childNodes.length, 0);
  test.end();
});

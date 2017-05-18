const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');


tape('hide - hide element', test => {
  const document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>');
  const last = d3.select(document).selectAll('div').last();

  test.equal(last.attr('id'), 'c');
  test.end();
});

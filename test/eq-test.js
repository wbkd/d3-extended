const tape = require('tape');
const d3 = require('d3-selection');
require('../build/d3-extended');
const jsdom = require('jsdom');

tape('eq - get first element of a selection', test => {
  const document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')
  const firstElement = d3.select(document).selectAll('div').eq(0);

  test.equal(firstElement.attr('id'), 'a');
  test.end();
});

tape('eq - get second element of a selection', test => {
  const document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')
  const firstElement = d3.select(document).selectAll('div').eq(1);

  test.equal(firstElement.attr('id'), 'b');
  test.end();
});

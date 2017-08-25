const tape = require('tape');
const d3 = require('d3-selection');
require('../build/d3-extended');
const jsdom = require('jsdom');

tape('first - get first element of a selection', test => {
  const document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')
  const first = d3.select(document).selectAll('div').first();

  test.equal(first.attr('id'), 'a');
  test.end();
});

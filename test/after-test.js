const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');

tape('after - add p node after div', test => {
  const document = jsdom.jsdom(`<body><div id='test-div'></div></body>`);
  const testDiv = d3.select(document).select('#test-div');
  testDiv.after('p');
  const addedNode = d3.select(document).select('p').node();

  test.equal(addedNode, document.body.lastChild);
  test.end();
});

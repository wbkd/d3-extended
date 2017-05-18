const tape = require('tape');
const d3 = require('../');
const jsdom = require('jsdom');

tape('prepend - prepend p node inside div', test => {
  const document = jsdom.jsdom('<body><div><span></span></div></body>');
  const testDiv = d3.select(document).select('div');

  testDiv.prepend('p');
  test.equal(document.documentElement.innerHTML, '<head></head><body><div><p></p><span></span></div></body>');
  test.end();
});

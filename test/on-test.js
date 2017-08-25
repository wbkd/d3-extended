const tape = require('tape');
const d3 = require('d3-selection');
require('../build/d3-extended');
const jsdom = require('jsdom');
const simulate = require('simulate');

tape('on - do stuff on click', test => {
  const document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')
  const testDiv = d3.select(document).select('body');
  const evt = document.createEvent('HTMLEvents');

  testDiv.on('click', function() {
      testDiv.attr('class', 'click-class');
  })

  test.notOk(testDiv.classed('click-class'));

 
  evt.initEvent('click', false, true);
  document.body.dispatchEvent(evt)

  test.ok(testDiv.classed('click-class'));

  test.end();
});

tape('on - do stuff on hover', test => {
  const document = jsdom.jsdom('<body><div id="a"></div><div id="b"></div><div id="c"></div></body>')
  const testDiv = d3.select(document).select('body');
  const evt = document.createEvent('HTMLEvents');

  testDiv.on('hover', function() {
      testDiv.attr('class', 'click-class');
  });

  test.notOk(testDiv.classed('click-class'));

  evt.initEvent('hover', false, true);
  document.body.dispatchEvent(evt)
  test.ok(testDiv.classed('click-class'));
  test.end();
});

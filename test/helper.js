var d3Extended = require('d3');
require('../d3-extended.js')(d3Extended);

function getEmptyBody(){
  document.body.innerHTML = ''

  return d3Extended.select('body'); 
}

function createDOMwithTestNode(){
  return getEmptyBody()
    .append('div')
    .attr('id', 'test-div');
}

function getD3Extended(){
  return d3Extended;
}

module.exports = {
  createDOMwithTestNode : createDOMwithTestNode,
  getEmptyBody : getEmptyBody,
  getD3Extended: getD3Extended
}
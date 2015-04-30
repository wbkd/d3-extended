var d3query = require('../lib/d3-query');

function getEmptyBody(){
  document.body.innerHTML = ''

  return d3query.select('body'); 
}

function createDOMwithTestNode(){
  return getEmptyBody()
    .append('div')
    .attr('id', 'test-div');
}

module.exports = {
  createDOMwithTestNode : createDOMwithTestNode,
  getEmptyBody : getEmptyBody
}
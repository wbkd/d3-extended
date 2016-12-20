var toggle = function() {
  var isHidden = this.style('display') == 'none';
  return this.style('display', isHidden ? 'inherit' : 'none');
}

export default toggle

var d3 = require ('d3-selection');

var appendTo = function(selection) {
  var targets = selection,
    targetCount = targets.size(),
    _this = this,
    clones = [];


  targets.each(function() {
    var currTarget = this;
    _this.each(function() {
      if(targetCount > 1) {
        var clone = this.cloneNode(true);
        currTarget.appendChild(clone);
        clones.push(clone);
      }
      else {
        currTarget.appendChild(this);
      }
    });
  });

  if(targetCount > 1) {
    this.remove();
  }

  return clones.length > 0 ? d3.selectAll(clones) : this;
}

export default appendTo;

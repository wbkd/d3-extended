d3.selection.prototype.last = function() {
  // adapted from https://github.com/mbostock/d3/blob/master/src/selection/each.js
  for (var j = this.length - 1; j >= 0; j--) {
    for (var group = this[j], i = group.length - 1, node; i >= 0; i--) {
      if (node = group[i]) return d3.select(node);
    }
  }
}

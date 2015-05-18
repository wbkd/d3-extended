d3.selection.prototype.first = function() {
  // adapted from https://github.com/mbostock/d3/blob/master/src/selection/each.js
  for (var j = 0, m = this.length; j < m; j++) {
    for (var group = this[j], i = 0, n = group.length, node; i < n; i++) {
      if (node = group[i]) return d3.select(node);
    }
  }
}

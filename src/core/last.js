d3.selection.prototype.last = function() {
  // adapted from https://github.com/mbostock/d3/blob/master/src/selection/each.js
  for (var j = this.length; j >= 0; j--) {
      for (var group = this[j], i = group.length, node; i >= 0; i--) {
            if (node = group[i]) return node;
      }
  }
}

d3.selection.prototype.eq = function(findI, findJ) {
  findJ = findJ || 0;
  return this.filter(function(d,i,j){return i == findI && j == findJ})
}

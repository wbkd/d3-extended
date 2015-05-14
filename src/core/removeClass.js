d3.selection.prototype.removeClass = function(className) {
    return this.classed(className, false);
}

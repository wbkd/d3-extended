(function() {

var extend = function(d3) {

if(typeof d3 === 'undefined' && typeof d3 !== 'object') {
  console.log('D3 not found.');
  return false;
}
d3.selection.prototype.addClass = function(classNames) {
  return this.classed(classNames, true);
}

d3.selection.prototype.after = function(tagName) {
  var elements = [];

  this.each(function() {
    var element = document.createElement(tagName);
    this.parentNode.insertBefore(element, this.nextSibling);
    elements.push(element);
  });

  return d3.selectAll(elements);
}
d3.selection.prototype.appendTo = function(selector) {
  var targets = d3.selectAll(selector),
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

d3.selection.prototype.before = function(tagName) {
  var elements = [];

  this.each(function() {
    var element = document.createElement(tagName);
    this.parentNode.insertBefore(element, this);
    elements.push(element);
  });

  return d3.selectAll(elements);
}
d3.selection.prototype.clear = function() {
  this.selectAll('*').remove();
  return this;
}
d3.selection.prototype.css = d3.selection.prototype.style;
d3.selection.prototype.eq = function(findI, findJ) {
  findJ = findJ || 0;
  return this.filter(function(d,i,j){return i == findI && j == findJ})
}

d3.selection.prototype.first = function() {
  // adapted from https://github.com/mbostock/d3/blob/master/src/selection/each.js
  for (var j = 0, m = this.length; j < m; j++) {
    for (var group = this[j], i = 0, n = group.length, node; i < n; i++) {
      if (node = group[i]) return d3.select(node);
    }
  }
}

d3.selection.prototype.hasClass = function(className) {
  return this.classed(className);
}
d3.selection.prototype.hide = function() {
  this.style('display', 'none');
  return this;
}
d3.selection.prototype.last = function() {
  // adapted from https://github.com/mbostock/d3/blob/master/src/selection/each.js
  for (var j = this.length - 1; j >= 0; j--) {
    for (var group = this[j], i = group.length - 1, node; i >= 0; i--) {
      if (node = group[i]) return d3.select(node);
    }
  }
}

d3.selection.prototype.moveToBack = function() { 
  return this.each(function() { 
    var firstChild = this.parentNode.firstChild; 
    if (firstChild) { 
      this.parentNode.insertBefore(this, firstChild); 
    } 
  });
}
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
}
// taken from the awesome https://github.com/gka/d3-jetpack/blob/master/d3-jetpack.js#L138
// we need the original on function from d3 for selection.trigger

var d3_selection_on = d3.selection.prototype.on;
d3.selection.prototype.on = function(type, listener, capture) {
  if (typeof type === 'string' && type.indexOf(' ') > -1) {
    var types = type.split(' ');
    for (var i = 0; i < types.length; i++) {
        d3_selection_on.apply(this, [types[i], listener, capture]);
    }
  } else {
    d3_selection_on.apply(this, [type, listener, capture]);
  }
  
  return this;
};
//the same as append, but inserting the element before the first element in the container
d3.selection.prototype.prepend = function(tagName) {
  var elements = [];

  this.each(function() {
    var element = document.createElement(tagName);
    this.insertBefore(element, this.firstChild);
    elements.push(element);
  });

  return d3.selectAll(elements);
}
d3.selection.prototype.removeClass = function(classNames) {
  return this.classed(classNames, false);
}

d3.selection.prototype.show = function() {
  this.style('display', '');
  return this;
}
d3.selection.prototype.toggle = function() {
  var isHidden = this.style('display') == 'none';
  return this.style('display', isHidden ? 'inherit' : 'none');
}
d3.selection.prototype.toggleClass = function(classNames) {
  var classes = classNames.split(' ');

  for(var i = 0; i < classes.length;i++) {
    var c = classes[i];
    this.classed(c, !this.classed(c));
  }
  return this;
}
d3.selection.prototype.trigger = function(evtName, data) {
  d3_selection_on.apply(this, [evtName])(data);
   return this;
}

return d3;
}

if(typeof module === 'object' && module.exports) {
  module.exports = extend;
}
else if(typeof define === 'function' && define.amd) {
  define(['d3'], extend);
}
else {
  extend(d3);
}

})();
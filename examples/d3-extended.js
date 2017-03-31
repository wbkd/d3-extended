(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-selection')) :
  typeof define === 'function' && define.amd ? define(['exports', 'd3-selection'], factory) :
  (factory((global.d3 = global.d3 || {}),global.d3));
}(this, function (exports,d3) { 'use strict';

  var d3__default = 'default' in d3 ? d3['default'] : d3;

  var addClass = function(classNames) {
    return this.classed(classNames, true);
  }

  var after = function(tagName) {
    var elements = [];

    this.each(function() {

      var document = this.ownerDocument;
      var element = document.createElement(tagName);
      this.parentNode.insertBefore(element, this.nextSibling);
      elements.push(element);
    });

    return d3__default.selectAll(elements);
  }

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

    return clones.length > 0 ? d3__default.selectAll(clones) : this;
  }

  var before = function(tagName) {
    var elements = [];

    this.each(function() {
      var document = this.ownerDocument;
      var element = document.createElement(tagName);
      this.parentNode.insertBefore(element, this);
      elements.push(element);
    });

    return d3__default.selectAll(elements);
  }

  var clear = function() {
    this.selectAll('*').remove();
    return this;
  }

  var css = function(prop, value){
    if(value){
      this.style(prop, value);
    }else{
      var that = this;
      Object.keys(prop).map(function(o,i) {
        var value = prop[o];
        that.style(o, value);
      });
    }
    return this;
  }

  var eq = function(findI, findJ) {
    return d3__default.select(this['_groups'][0][findI]);
  }

  var first = function() {
    return d3__default.select(this['_groups'][0][0]);
  }

  var hasClass = function(className) {
    return this.classed(className);
  }

  var hide = function() {
    this.style('display', 'none');
    return this;
  }

  var last = function() {
    var size = this['_groups'][0].length-1;
    return d3__default.select(this['_groups'][0][size]);
  }

  var moveToBack = function() {
    return this.each(function() {
      var firstChild = this.parentNode.firstChild;
      if (firstChild) {
        this.parentNode.insertBefore(this, firstChild);
      }
    });
  }

  var moveToFront = function() {
    return this.each(function(){
      this.parentNode.appendChild(this);
    });
  }

  var d3_selection_on = d3__default.selection.prototype.on;
  var on = function(type, listener, capture) {
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
  var prepend = function(tagName) {
    var elements = [];

    this.each(function() {
      var document = this.ownerDocument;
      var element = document.createElement(tagName);
      this.insertBefore(element, this.firstChild);
      elements.push(element);
    });

    return d3__default.selectAll(elements);
  }

  var removeClass = function(classNames) {
    return this.classed(classNames, false);
  }

  var show = function() {
    var tagName = this._groups[0][0].tagName;
    var cStyle,
        t = document.createElement(tagName),
        gcs = "getComputedStyle" in window;

    document.body.appendChild(t);
    cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
    document.body.removeChild(t);

    this.style('display', cStyle);
    return this;
  }

  var toggle = function() {

    var tagName = this._groups[0][0].tagName;
    var cStyle,
        t = document.createElement(tagName),
        gcs = "getComputedStyle" in window;

    document.body.appendChild(t);
    cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
    document.body.removeChild(t);


    var isHidden = this.style('display') == 'none';
    return this.style('display', isHidden ? cStyle : 'none');
  }

  var toggleClass = function(classNames) {
    var classes = classNames.split(' ');

    for(var i = 0; i < classes.length;i++) {
      var c = classes[i];
      this.classed(c, !this.classed(c));
    }
    return this;
  }

  d3.selection.prototype.addClass = addClass;
  d3.selection.prototype.after = after;
  d3.selection.prototype.appendTo = appendTo;
  d3.selection.prototype.before = before;
  d3.selection.prototype.clear = clear;
  d3.selection.prototype.css = css;
  d3.selection.prototype.eq = eq;
  d3.selection.prototype.first = first;
  d3.selection.prototype.hasClass = hasClass;
  d3.selection.prototype.hide = hide;
  d3.selection.prototype.last = last;
  d3.selection.prototype.moveToBack = moveToBack;
  d3.selection.prototype.moveToFront = moveToFront;
  d3.selection.prototype.on = on;
  d3.selection.prototype.prepend = prepend;
  d3.selection.prototype.removeClass = removeClass;
  d3.selection.prototype.show = show;
  d3.selection.prototype.toggle = toggle;
  d3.selection.prototype.toggleClass = toggleClass;

  exports.selection = d3.selection;
  exports.select = d3.select;
  exports.selectAll = d3.selectAll;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
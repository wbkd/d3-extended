(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('d3-selection')) :
  typeof define === 'function' && define.amd ? define(['d3-selection'], factory) :
  (factory(global.d3));
}(this, function (d3Selection) { 'use strict';

  function addClass(classNames) {
    this.classed(classNames, true);
    return this;
  }

  function after(tagName) {
    var elements = [];

    this.each(function () {
      var document = this.ownerDocument;
      var element = document.createElement(tagName);
      this.parentNode.insertBefore(element, this.nextSibling);
      elements.push(element);
    });

    return d3Selection.selectAll(elements);
  }

  function appendTo(selection) {
    var targets = selection;
    var targetCount = targets.size();
    var _this = this;
    var clones = [];

    targets.each(function () {
      var currTarget = this;
      _this.each(function () {
        if (targetCount > 1) {
          var clone = this.cloneNode(true);
          currTarget.appendChild(clone);
          clones.push(clone);
        } else {
          currTarget.appendChild(this);
        }
      });
    });

    if (targetCount > 1) {
      this.remove();
    }

    return clones.length > 0 ? d3Selection.selectAll(clones) : this;
  }

  function before(tagName) {
    var elements = [];

    this.each(function () {
      var document = this.ownerDocument;
      var element = document.createElement(tagName);
      this.parentNode.insertBefore(element, this);
      elements.push(element);
    });

    return d3Selection.selectAll(elements);
  }

  function clear() {
    this.selectAll('*').remove();
    return this;
  }

  function css(prop, value) {
    if (value) {
      this.style(prop, value);
    } else {
      var that = this;
      Object.keys(prop).map(function (o, i) {
        var value = prop[o];
        that.style(o, value);
      });
    }
    return this;
  }

  function eq(findI, findJ) {
    return d3Selection.select(this['_groups'][0][findI]);
  }

  function first() {
    return d3Selection.select(this['_groups'][0][0]);
  }

  function hasClass(className) {
    return this.classed(className);
  }

  function hide() {
    this.style('display', 'none');
    return this;
  }

  function last() {
    var size = this['_groups'][0].length - 1;
    return d3Selection.select(this['_groups'][0][size]);
  }

  function moveToBack() {
    return this.each(function () {
      var firstChild = this.parentNode.firstChild;
      if (firstChild) {
        this.parentNode.insertBefore(this, firstChild);
      }
    });
  }

  function moveToFront() {
    return this.each(function () {
      this.parentNode.appendChild(this);
    });
  }

  var d3_selection_on = d3Selection.selection.prototype.on;
  function on(type, listener, capture) {
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
  function prepend(tagName) {
    var elements = [];

    this.each(function () {
      var document = this.ownerDocument;
      var element = document.createElement(tagName);
      this.insertBefore(element, this.firstChild);
      elements.push(element);
    });

    return d3Selection.selectAll(elements);
  }

  function removeClass(classNames) {
    return this.classed(classNames, false);
  }

  function show() {
    var tagName = this._groups[0][0].tagName;
    var t = document.createElement(tagName);
    var gcs = "getComputedStyle" in window;

    document.body.appendChild(t);
    var cStyle = (gcs ? window.getComputedStyle(t, '') : t.currentStyle).display;
    document.body.removeChild(t);

    this.style('display', cStyle);
    return this;
  }

  function toggle() {
    var tagName = this._groups[0][0].tagName;
    var t = document.createElement(tagName);
    var gcs = "getComputedStyle" in window;

    document.body.appendChild(t);
    var cStyle = (gcs ? window.getComputedStyle(t, '') : t.currentStyle).display;
    document.body.removeChild(t);

    var isHidden = this.style('display') == 'none';
    return this.style('display', isHidden ? cStyle : 'none');
  }

  function toggleClass(classNames) {
    var classes = classNames.split(' ');

    for (var i = 0; i < classes.length; i++) {
      var c = classes[i];
      this.classed(c, !this.classed(c));
    }
    return this;
  }

  d3Selection.selection.prototype.addClass = addClass;
  d3Selection.selection.prototype.after = after;
  d3Selection.selection.prototype.appendTo = appendTo;
  d3Selection.selection.prototype.before = before;
  d3Selection.selection.prototype.clear = clear;
  d3Selection.selection.prototype.css = css;
  d3Selection.selection.prototype.eq = eq;
  d3Selection.selection.prototype.first = first;
  d3Selection.selection.prototype.hasClass = hasClass;
  d3Selection.selection.prototype.hide = hide;
  d3Selection.selection.prototype.last = last;
  d3Selection.selection.prototype.moveToBack = moveToBack;
  d3Selection.selection.prototype.moveToFront = moveToFront;
  d3Selection.selection.prototype.on = on;
  d3Selection.selection.prototype.prepend = prepend;
  d3Selection.selection.prototype.removeClass = removeClass;
  d3Selection.selection.prototype.show = show;
  d3Selection.selection.prototype.toggle = toggle;
  d3Selection.selection.prototype.toggleClass = toggleClass;

}));
//# sourceMappingURL=d3-extended.js.map
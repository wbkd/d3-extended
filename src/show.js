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

export default show

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

export default toggle

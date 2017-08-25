function toggle() {
  const tagName = this._groups[0][0].tagName;
  const t = document.createElement(tagName);
  const gcs = "getComputedStyle" in window;

  document.body.appendChild(t);
  const cStyle = (gcs ? window.getComputedStyle(t, '') : t.currentStyle).display;
  document.body.removeChild(t);

  var isHidden = this.style('display') == 'none';
  return this.style('display', isHidden ? cStyle : 'none');
}

export default toggle;

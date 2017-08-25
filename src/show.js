function show() {
  const tagName = this._groups[0][0].tagName;
  const t = document.createElement(tagName);
  const gcs = "getComputedStyle" in window;

  document.body.appendChild(t);
  const cStyle = (gcs ? window.getComputedStyle(t, '') : t.currentStyle).display;
  document.body.removeChild(t);

  this.style('display', cStyle);
  return this;
}

export default show;

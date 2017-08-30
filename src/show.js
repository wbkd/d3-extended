/**
* jQuery equivalent: [$.show](http://api.jquery.com/show/)
*
* Diplays the current selection. Returns the selection.
*
* @function show
* @example
* d3.selectAll('.foo').show();
*
* @returns {selection} - Returns the selection.
**/
funct
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

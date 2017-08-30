/**
* Displays SVG element above the other ones.
*
* @function
* @name moveToBack
* @example
* d3.select('svg circle').moveToBack();
*
**/
function moveToBack() {
  return this.each(function() {
    const firstChild = this.parentNode.firstChild;
    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
}

export default moveToBack;

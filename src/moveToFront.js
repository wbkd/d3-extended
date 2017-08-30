/**
* Displays SVG element below the other ones.
*
* @function
* @name moveToFront
* @example
* d3.select('svg circle').moveToFront();
*
**/
function moveToFront() {
  return this.each(function() {
    this.parentNode.appendChild(this);
  });
}

export default moveToFront;

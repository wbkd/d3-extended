/**
* jQuery equivalent: [$.css](http://api.jquery.com/css/)
*
* Applies style to elements in the current selection. Returns the selection.
* Works in the same way like the D3 style function we only changed the name here.
*
* @function
* @name css
* @example
* selection.css(name, value);
* selection.css(object);
*
* @returns {selection} - The current selection
**/
function css(prop, value){
  if (value) {
    this.style(prop, value);
  } else {
    const that = this;
    Object.keys(prop).map(function(o,i) {
      const value = prop[o];
      that.style(o, value);
    });
  }
  return this;
}

export default css;

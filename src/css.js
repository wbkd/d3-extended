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

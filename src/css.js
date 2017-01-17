var css = function(prop, value){
  if(value){
    this.style(prop, value);
  }else{
    var that = this;
    Object.keys(prop).map(function(o,i) {
      var value = prop[o];
      that.style(o, value);
    });
  }
  return this;
}

export default css;

var moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
}

export default moveToFront

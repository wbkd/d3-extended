function moveToFront() {
  return this.each(function() {
    this.parentNode.appendChild(this);
  });
}

export default moveToFront;

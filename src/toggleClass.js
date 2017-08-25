function toggleClass(classNames) {
  const classes = classNames.split(' ');

  for(let i = 0; i < classes.length; i++) {
    const c = classes[i];
    this.classed(c, !this.classed(c));
  }
  return this;
}

export default toggleClass;

import { selectAll } from 'd3-selection';

function appendTo(selection) {
  const targets = selection;
  const targetCount = targets.size();
  const _this = this;
  const clones = [];

  targets.each(function() {
    const currTarget = this;
    _this.each(function() {
      if(targetCount > 1) {
        const clone = this.cloneNode(true);
        currTarget.appendChild(clone);
        clones.push(clone);
      }
      else {
        currTarget.appendChild(this);
      }
    });
  });

  if (targetCount > 1) {
    this.remove();
  }

  return clones.length > 0 ? selectAll(clones) : this;
}

export default appendTo;

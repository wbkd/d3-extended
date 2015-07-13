d3.selection.prototype.trigger = function(evtName, data) {
  //we now use the jQuery implementation as d3.selection.on is used differently.
  if (window.CustomEvent) {
    var event = new CustomEvent(evtName, {detail: data});
  } else {
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(evtName, true, true, data);
  }

  this.node().dispatchEvent(event);

  return this;
}
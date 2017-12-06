var StrobeDancer = function(top, left, timeBetweenSteps) {
  //   ---------   //this.colors = ['green', 'blue', 'pink', 'red', 'yellow', 'white', 'orange'];
  Dancer.apply(this, arguments);
};


StrobeDancer.prototype = Object.create(Dancer.prototype);
StrobeDancer.prototype.constructor = StrobeDancer;

StrobeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // randomly pick an item from the list of colors
  //   ---------   //var colorIndex = Math.floor(Math.random() * this.colors.length);
  var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  // assign color to css color property on node
  this.$node.css('border-color', color);
  this.$node.css('background-color', color);
};

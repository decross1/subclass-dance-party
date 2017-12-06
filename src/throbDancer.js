var ThrobDancer = function(top, left, timeBetweenSteps) {
  this.size = 0;
  this.max = this.timeBetweenSteps / 5;
  StrobeDancer.apply(this, arguments);
};


ThrobDancer.prototype = Object.create(StrobeDancer.prototype);
ThrobDancer.prototype.constructor = ThrobDancer;

ThrobDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  StrobeDancer.prototype.step.call(this);
  this.$node.addClass('throbDancer');
  this.$node.show();
  this.toggle()
};

ThrobDancer.prototype.grow = function () {
  while (this.size < this.max) {
    this.size++;
    this.$node.css('border', 40);
  }
}

ThrobDancer.prototype.shrink = function () {
  while (this.size > 0) {
    this.size--;
    this.$node.css('border', this.size);
  }

}

ThrobDancer.prototype.toggle = function () {
  if (this.size === 0) {
    this.grow();
  }

  if (this.size === this.max) {
    this.shrink();
  }
}

  // var sizeSettings = {
  //   border:parseInt(JSON.stringify(this.size)) + 'px'
  //   left: left
  // };
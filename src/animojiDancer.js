var AnimojiDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  //this.$node = $('<span class="animojiDancer"></span>')
};


AnimojiDancer.prototype = Object.create(Dancer.prototype);
AnimojiDancer.prototype.constructor = AnimojiDancer;

AnimojiDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  this.$node.addClass("animojiDancer");
  // this.$node = $('<span class="animojiDancer"></span>')
  //this.$node.attr("href", "https://emojipedia-us.s3.amazonaws.com/content/2017/09/21/animoji-fox-emojipedia.gif");
  this.$node.append('<img src="https://camo.githubusercontent.com/0c394a0e5996343410dcafb13e65e6e6f997e4b6/68747470733a2f2f6d65646961312e67697068792e636f6d2f6d656469612f6939424c394a76597963786f492f3230302e676966" />')
  this.$node.show();
  // this.$node.toggle()
};

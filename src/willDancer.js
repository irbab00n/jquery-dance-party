var MakeWillDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('will-dancer');
};

MakeWillDancer.prototype = Object.create(MakeDancer.prototype);
MakeWillDancer.prototype.constructor = MakeWillDancer;

MakeWillDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
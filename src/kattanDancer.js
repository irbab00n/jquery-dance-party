var MakeKattanDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('kattan-dancer');
};

MakeKattanDancer.prototype = Object.create(MakeDancer.prototype);
MakeKattanDancer.prototype.constructor = MakeKattanDancer;

MakeKattanDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
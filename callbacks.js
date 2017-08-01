// myEach function

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback.call(this, this[i])
  }
};
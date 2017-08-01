// myEach function

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback.call(this, this[i])
  }
};

// myMap function

Array.prototype.myMap = function(callback) {
  let a = []
  this.myEach(function(i) {
    a.push(callback(i))
  })
  return a
};

// https://github.com/bgando/functionalJS/blob/master/callbacks/callbackExercises.md exercises

// funcCaller

function funcCaller(callback, arg) {
  return callback(arg)
}

// firstVal

function firstVal(arr, callback) {
  callback(arr[0], 0, arr)
}
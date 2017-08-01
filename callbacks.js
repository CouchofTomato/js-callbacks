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

//refactored firstVal

const toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function firstVal(collection, callback) {
  if (toType(collection) === 'array') {
    callback(collection[0], 0, collection)
  } else if (toType(collection) === 'object') {
    let objKeys = Object.keys(collection);
    callback(objKeys[0], 0, collection);
  }
}
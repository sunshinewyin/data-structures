var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result = storage[0];
    delete storage[0];
    size--;
    return result;
  };

  someInstance.size = function(){
    if (size <= 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};

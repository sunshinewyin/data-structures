var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = Node(value);
      var prevNode = list.tail;
    } else {
      prevNode = list.tail;
      list.tail = Node(value);
    }

    if (list.head === null) {
      list.head = list.tail;
    }
    prevNode.next = list.tail;
  };

  list.removeHead = function(){

  };

  list.contains = function(target){
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

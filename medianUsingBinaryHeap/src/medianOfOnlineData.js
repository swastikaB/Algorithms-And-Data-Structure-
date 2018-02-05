var BinaryHeap = require('heap');
var max_heap = new BinaryHeap();
var min_heap = new BinaryHeap(function cmp(a, b) {
  return b - a;
});


var a = [6, 5, 3, 1, 8, 7, 2, 4];

 
a.forEach(function (k) {
  min_heap.push(k);
  max_heap.push(min_heap.pop());
  if(max_heap.size() > min_heap.size()){
      min_heap.push(max_heap.pop());
  }
  console.log(min_heap.size() === max_heap.size() ? (min_heap.peek() + max_heap.peek()) * 0.5 : min_heap.peek());
});
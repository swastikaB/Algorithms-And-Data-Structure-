function MinHeap(){
    this.heap = [];

}

MinHeap.prototype.left_child = function(pos){
    let child_pos = 2 * pos + 1
    if(child_pos < this.heap.length){
        return child_pos;
    }
    return null;
}

MinHeap.prototype.right_child = function(pos){
    let child_pos = 2 * pos + 2
    if(child_pos < this.heap.length){
        return child_pos;
    }
    return null;
}

MinHeap.prototype._parent = function(pos){
    return Math.floor(pos / 2);
}

MinHeap.prototype.isLeaf = function(pos){
    let len = this.heap.length;
    if(pos >= Math.floor(len/2) && pos <= len){
        return true;
    }
    return false;
}

MinHeap.prototype.swap = function(val1, val2){
    let temp = this.heap[val1];
    this.heap[val1] = this.heap[val2];
    this.heap[val2] = temp;
}

MinHeap.prototype.Minify = function(pos){
    if(!this.isLeaf(pos)){
        let left_pos = this.left_child(pos);
        let right_pos = this.right_child(pos);
        if(this.heap[pos] > this.heap[left_pos]){
            this.swap(pos, left_pos);
            this.Minify(left_pos);
        }else if(this.heap[pos] > this.heap[right_pos]){
            this.swap(pos, right_pos );
            this.Minify(right_pos);
        }
    }
}

MinHeap.prototype.insert = function(val){
    let heap = this.heap;
    heap.push(val);
    let parent_pos = this._parent(heap.length-1);
    this.Minify(parent_pos);
    return val;
}

MinHeap.prototype.remove = function(val){
    let len = this.heap.length;
    if(len > 0){
        let ret = this.heap[0];
        this.heap[0] = len > 1 ? this.heap.pop(): this.heap[len-1];
        this.Minify(0);
        return this.heap[0];
    }
    return null;
}
function min_Heap(minHeap){
    let heap = minHeap.heap;
    for(let i = Math.floor(heap.length/2); i >= 0; --i ){
        minHeap.Minify(i);
    }
}

MinHeap.prototype.show = function(){
    let Heap = this.heap;
    let size = this.heap.length;
   for (let i = 0; i <= Math.floor(size / 2) - 1; i++ )
        {
            console.log(" PARENT : " + Heap[i] + " LEFT CHILD : " + Heap[2*i + 1] 
                + " RIGHT CHILD :" + Heap[2 * i  + 2]);
            console.log();
        } 
}

/*
let minHeap = new MinHeap();
        minHeap.insert(5);
        minHeap.insert(3);
        minHeap.insert(17);
        minHeap.insert(10);
        minHeap.insert(84);
        minHeap.insert(19);
        minHeap.insert(6);
        minHeap.insert(22);
        minHeap.insert(9);
        min_Heap(minHeap);
        minHeap.show();
        minHeap.remove();
        minHeap.show();

*/


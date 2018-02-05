////////////////////////////////////// Create Min Heap data structure /////////////////
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
        if(!this.heap[right_pos] ){
            if(this.heap[pos].val > this.heap[left_pos].val){
                this.swap(pos, left_pos );
                this.Minify(left_pos);
            }
        }else if(this.heap[pos].val > this.heap[left_pos].val || this.heap[pos].val > this.heap[right_pos].val){
            if(this.heap[left_pos].val > this.heap[right_pos].val){
                 this.swap(pos, right_pos);
                 this.Minify(right_pos); 
            }else{
                this.swap(pos, left_pos );
                this.Minify(left_pos);
            }
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
        this.heap[0] =  this.heap.pop();
        this.Minify(0);
        return ret;
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
/////////////////////////////// end of Min Heap Data Structure ////////////////////////////
function ArrayEntry(val, idx){
    this.val = val;
    this.idx = idx;
}

let list = [];
let array0 = [58];
let array1 = [4, 20, 88, 100];
let array2 = [1, 21, 29, 78];
let array3 = [7, 23, 34];


list.push(array0);
list.push(array1);
list.push(array2);
list.push(array3);

function sort_sorted_arrays(list){
    let result = [];
    let minheap = new MinHeap();
    for(let i = 0; i < list.length ; i++){
        let val = list[i][0] ? list[i].splice(0,1)[0] : Number.MAX_VALUE;
        minheap.insert(new ArrayEntry(val, i));
    }
    min_Heap(minheap);
    while(minheap.heap.length > 0 && minheap.heap[0].val !== Number.MAX_VALUE){
        let min_elem = minheap.remove();
        result.push(min_elem.val);
        //let nextElem = list[elem.idx][0];
        let nextElem = list[min_elem.idx][0] ? list[min_elem.idx].splice(0,1)[0] : Number.MAX_VALUE;
        minheap.insert(new ArrayEntry(nextElem, min_elem.idx));
    }
    let len = 0;
    list.forEach(function(element) {
        len += element.length;
    });
    //return result.slice(0, len);
    return result;
}
console.log(sort_sorted_arrays(list));
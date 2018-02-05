function CircularQueue(capacity){
    this.scaling_factor = 2;
    this.head = 0;
    this.tail = 0;
    this.array = new Array(capacity);
    this.numElements = 0;
}

CircularQueue.prototype.enqueue = function(val){
    let len = this.array.length;
    if(this.numElements === len){
        //the queue is full, so rearrange the elements and we have to resize the queue array;
        if(this.head > this.tail){
            let prefix_arr = this.array.splice(0,head);
            this.array = this.array.concat(prefix_arr);
            /*let last = 0;
            for(let i = 0; i < head; i++){
                for(let j = 0; j < len-1; j++){
                    if(j === 0){
                        last = this.array[j];
                    }
                    this.array[j] = this.array[j+1];
                }
                this.array[len-1] = last;
            }*/
        }
        this.head = 0;
        this.tail = len-1;
        let array_ext = new Array(this.scaling_factor);
        this.array = this.array.concat(array_ext);
         
    }
    this.array[this.tail] = val;
    this.tail = (this.tail + 1) % this.array.length;
    this.numElements++;
}

CircularQueue.prototype.dequeue = function(){
    if(this.numElements !== 0){
        let ret = this.array[this.head];
        this.head = (this.head + 1) % this.array.length;
        this.numElements--;
        return ret;
    }
    throw "Cannot Dequeue from empty queue";
}

CircularQueue.prototype.show = function(){
    let val_arr = [];
    let top_ptr = this.head;
    while(top_ptr !== this.tail){
        val_arr.push(this.array[top_ptr]);
        top_ptr = ++top_ptr % this.array.length;
    }
    console.log(val_arr);
}

let q = new CircularQueue(8);
    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');
    q.enqueue('d');
    
    q.show();

    q.dequeue();
      q.show();
    q.dequeue();
      q.show();
    q.enqueue('e');
      q.show();
    q.enqueue('f');
      q.show();
    q.enqueue('g');
      q.show();

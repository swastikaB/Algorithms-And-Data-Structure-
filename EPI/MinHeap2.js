function processData(input) {
    let inputStringArray = input.split("\n");
    console.log(inputStringArray);
    let numQueries =  Number.parseInt(inputStringArray[0]);
    let minHeap = new MinHeap();
    for(let i = 1; i <= numQueries; i++){
        let currQ = inputStringArray[i].split(" ").map(Number);
        console.log(currQ);
        if(currQ.length > 1){
           switch(currQ[0]){
               case 1:
                   minHeap.addElement(currQ[1]);
                   break;
               case 2:
                   minHeap.deleteElement(currQ[1]);
                   break;
               default:
                   console.log("Operation " + currQ[0] + " is unknown");
           }
            
        }else{
            console.log(minHeap.array[0]); 
        }
    }
} 
/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

 */   
function MinHeap(){
    this.array = [];
    
}
  
MinHeap.prototype.addElement = function(element){
    this.array.push(element);
    this.reheapify(this.array.length-1);
}    

MinHeap.prototype.deleteElement = function(element){
    if(!this.array.length){
        console.log("cannot delete");
    }else{
        for(let i = 0; i < this.array.length; i++){
            if(this.array[i] === element){
                this.array.splice(i,1);
                //calculate parent and heapify from there
                if(i === this.array.length){
                    --i;
                }
                this.heapify(i);
                
                //let parent = this.getParent(i);
                 //this.heapify();
                 break;
            }
        }
    }
}

MinHeap.prototype.getParent = function(idx){
    let parent = Math.floor(idx/2);
    if(idx % 2 === 0){
        parent -= 1;
    }
    return parent;
}



    
MinHeap.prototype.reheapify = function(idx){
    let child = idx;
    let parent = this.getParent(child);
    while(parent >= 0){
        if(this.array[child] < this.array[parent]){
            swap(this.array, child, parent);
            child = parent;
            parent = this.getParent(child);
        }else{
            break;
        }
    }
}

MinHeap.prototype.heapify = function(p){
    let parent = p  ? p : 0;
    while(!this.isLeaf(parent)){
        let lChild = 2 * parent + 1;
        let rChild = 2 * parent + 2;
        if(this.array[parent] > this.array[lChild]){
            swap(this.array, lChild, parent);
            parent = lChild;   
        }else if(this.array[rChild] < this.array.length){
            if(this.array[parent] > this.array[rChild]){
               swap(this.array, rChild, parent);
               parent = rChild;
           }
        } else {
             break;
        }
    }
}

MinHeap.prototype.isLeaf = function(idx){
    let len = this.array.length;
    let lChild = 2 * idx + 1;
    let rChild = 2 * idx + 2;
    
    if( lChild >= len && rChild >= len){
        return true;
    }
    return false;
}

function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}


var input = " 6\n1 6\n1 7\n1 3\n3\n2 3\n3";
processData(input);
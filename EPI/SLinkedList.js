function Node(value){
    this.value = value;
    this.next = null;
}
function SLinkedList(){
    this.head = null;
    this._length = 0;
}

SLinkedList.prototype.push = function(value,node,prev_node){
    
    var new_node = new Node(value);
    if(node){
        new_node = arguments[1];
    }
    
    //if its the only node in the list
    if(!this.head){
        this.head = new_node;
        this._length++;
        return new_node;
    }
     let curr_node = this.head;
    //if we know the previous pointer then no need to iterate
    if(prev_node){
        curr_node = prev_node;
    }else{
    //if there are other nodes in the list and prev_node is not given, then add this node at the end
        while(curr_node.next){
            curr_node = curr_node.next;
        }
    }
    curr_node.next = new_node;
    this._length++;
    return new_node;
}

SLinkedList.prototype.remove = function(idx){
    let node = this.head;
    let message = {failure : "Position exceeds list size"}
    // case 1: invalid position/index
    if(idx < 1 || idx > this._length){
        throw new Error(message.failure);
    }
    //case 2: position is head of list
    if(idx === 1){
        this.head = node.next;
        this._length--;
        return node;
    }
    
    let counter = 1;
    while(counter < idx-1){//counter should stop at previous node
        node = node.next;
        counter++;
    }
    let deleted_node = node.next;
    //case 3: position is somewhere inbetween
    if(idx < this._length){
        node.next = node.next.next; 
    }
    else if(idx === this._length){
        node.next = null;
    }
    this._length--;
    return deleted_node;
}
SLinkedList.prototype.show = function(){
    let curr_node = this.head;
    let s = "";
    while(curr_node){
        s += curr_node.value + ", " ;
        curr_node = curr_node.next;
    }
    console.log(s);
}

SLinkedList.prototype.getNodeAt = function(position){
    if(position < 1 || position > this._length){
        throw new Error(message.failure);
    }
    let curr_node = this.head;
    let counter = 1;
    while(++counter <= position){
        curr_node = curr_node.next;
    }
    return curr_node;
}



SLinkedList.prototype.add = function(position, node){
    if(position === 1){
        node.next = this.head;
        this.head = node;
        this._length++;
        return;
    }else if(position === this._length){
        this.push(node.value);
    }else{
        let prev_node = this.getNodeAt(position - 1);
        node.next = prev_node.next;
        prev_node.next = node;
        this._length++;
        return; 

    }

}

////////////////////////////// Merge and Sort 2 Lists ///////////////////////////////////

function sortNMerge(l1, l2){
    let node1 = l1.head;
    let node2 = l2.head;
    let prev_node = node1;
    let newList = l1._length > l2._length ? l1 : l2;

    for(let i = 1; i <= l1._length + l2._length && node1 && node2; i++){
        if(node1.value > node2.value){
            let temp = node2;
            node2 = node2.next;
            //////////////start of add/////////////////////
             if(i === 1){
                temp.next = newList.head;
                newList.head = temp;
                newList._length++;
            }else if(i === newList._length){
                new_List.push(temp.value);
            }else{
                prev_node.next = temp;
                temp.next = node1;
                newList._length++;
                
            }
            prev_node = prev_node.next;
            //////////////////////////end of add///////////////////////
            //temp.next = null;
            //newList.add(i, temp);
            
        }else{
            prev_node = node1;
            node1 = node1.next;
        }
        newList.show();
    }
    while(node2){
        let temp = node2;
        newList.push(temp.value);
        node2 = node2.next;
    }
} 
/*
let List1 = new SLinkedList();
List1.push(2);
List1.push(5);
List1.push(7);
List1.show();
//let temp_node = new Node(4);
//List1.add(4,temp_node);
//List1.show();


let List2 = new SLinkedList();
List2.push(3);
List2.push(11);
List2.show();

sortNMerge(List1, List2);
console.log("The new SOrted and Merged List");
List1.show();

*/
/////////////////////////// Reverse a List ///////////////////////
SLinkedList.prototype.reverse = function(curr_node, prev_node){
    if(!curr_node.next){ //curr_node.next === null
        curr_node.next = prev_node;
        this.head = curr_node;
        return;
    }
    let next_node = curr_node.next;
    curr_node.next = prev_node;
    this.reverse(next_node, curr_node);
    return this.head
}

SLinkedList.prototype.reverseWithWhile = function(){
    let prev_node = null;
    let curr_node = this.head;
    while(curr_node){
        let next_node = curr_node.next;
        curr_node.next = prev_node;
        prev_node = curr_node;
        curr_node = next_node;
    }
    this.head = prev_node;
}
/*
let List1 = new SLinkedList();
List1.push(2);
List1.push(5);
List1.push(7);
List1.push(11);
List1.show();
//List1.reverse(List1.head, null);
List1.reverseWithWhile();
List1.show();
*/
//////////////////////////////////////////////// Find If Lists Overlap//////////////////////////
/*
let List1 = new SLinkedList();
List1.push(2);
List1.push(5);
List1.push(9);
List1.push(11);
List1.push(10);

let List2 = new SLinkedList();
List2.push(9);
List2.push(1, List1.head.next.next.next);
List2.push(12);
List1.show();
List2.show();
overlap(List1,List2);
*/

function overlap(l1,l2){
    let len1 = length(l1.head);
    let len2 = length(l2.head)
    let node1 = l1.head;
    let node2 = l2.head;
    if(len1 > len2){
        for(let i = 1; i <= Math.abs(len1 - len2); i++){
            node1 = node1.next;
        }
    }else{
        for(let i = 1; i <= Math.abs(len1 - len2); i++){
            node2 = node2.next;
        }
    }
    while(node1 && node2){
        if(node1 === node2){
            console.log(node1.value);
            return;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    console.log("No overlaps");
}
function length(node) {
    let len = 0;
    while (node != null) {
      ++len;
      node = node.next;
    }
    return len;
  }

  ///////////////// Remove kth Element from the List -- Assume you do not know the length ///////////////

SLinkedList.prototype.remove_element = function(kth){
    let fwrd_node = this.head;
    let prev_node = this.head;
    let i = 0;
    for(i; i < kth;i++){ //Assuming there are atleast k nodes
        if(!fwrd_node){
            throw "Exceeds Element Length";
        }
        fwrd_node = fwrd_node.next;
    }
   if(!fwrd_node){//if fwrd_node is null
        this.head = this.head.next;
        return;
   }
    while(fwrd_node.next){
        fwrd_node = fwrd_node.next;
        prev_node = prev_node.next;
    }
    let temp_node = prev_node.next;
    prev_node.next = temp_node.next
  }

let myList = new SLinkedList();
myList.push(2);
console.log("List elements: ");
myList.show();
myList.remove_element(1);
console.log("List elements: ");
myList.show();
myList.push(3);
myList.push(4);
myList.push(5);
myList.push(6);
console.log("List elements: ");
myList.show();
myList.remove_element(1);
console.log("List elements: ");
myList.show();
myList.remove_element(2);
console.log("List elements: ");
myList.show();
myList.remove_element(2);
console.log("List elements: ");
myList.show();


////////////////////////////////// Sort and Merge Even and Odd ////////////////////////
function MergeEvenOdd(list1){
    if(!list1.head){ //if list1 is empty
        return;
    }
    let even = list1.head;
    let odd = even.next;
    let list2 = new SLinkedList();

    if(odd && odd.next){ //if there are more than 2 elements then continue
        let prev_node = null;
        while(odd){
            //remove odd from list1
            even.next = odd.next;
            even = odd.next;
            odd.next = null;
            let temp_node = odd;
            //put odd in list2
            prev_node = list2.push(1,temp_node,prev_node);
            //Reassign value for odd
            odd = even.next;
        }
        //Merge the two lists
        let head_node = list2.head;
        list1.push(1, head_node);
        return;
    }
}
/*
let myList = new SLinkedList();
myList.push(0);
myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.push(6);
myList.show();
MergeEvenOdd(myList);
myList.show();
let myList2 = new SLinkedList();
myList2.push(0);
myList2.show();
MergeEvenOdd(myList2);
myList2.show();
let myList3 = new SLinkedList();
myList3.push(0);
myList3.push(1);
myList3.show();
MergeEvenOdd(myList3);
myList3.show();
let myList4 = new SLinkedList();
myList4.push(0);
myList4.push(1);
myList4.push(2);
myList4.show();
MergeEvenOdd(myList4);
myList4.show();
*/
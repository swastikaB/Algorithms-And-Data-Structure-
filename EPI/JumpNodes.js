function JumpList(){
    this.head = null;
}
function JumpNode(value){
    this.value = value;
    this.next = null;
    this.jump = null;
}
/*
function JumpNode(value){
    this.value = value;
    this.jump = null;
    this.next = null;
}*/
JumpList.prototype.push = function(val, prev_ptr){
    let new_node = new JumpNode();
    if(val instanceof JumpNode){
        new_node = val;
    }
    else{
        new_node.value = val;
    }
    //if only one node is present
    if(!this.head){
        this.head = new_node;
    }
    //if more nodes are present and pointer to previous node is given then,
    else if(prev_ptr){
        new_node.next = prev_ptr.next;
        prev_ptr.next = new_node;
    }
    else{ // pointer to previous node is not given, add node to end of node.
        let curr_node = this.head;
        while(curr_node.next){
            curr_node = curr_node.next;
        }
        curr_node.next = new_node;
    }
    return new_node;
}

JumpList.prototype.show = function(){
    let curr_node = this.head;
    let arr = new Array();
    while(curr_node){
        arr.push(curr_node.value);
        curr_node = curr_node.next;
    }
    console.log(arr);
}


function CreateDuplicateWithJumpFields(list){
    var list2 = new JumpList();
    let ptr_o = list.head;
    let map = new Map();
    while(ptr_o){
        let new_node = new JumpNode(ptr_o.value);
        new_node.jump = ptr_o.jump;
        map.set(ptr_o, new_node);
        ptr_o = ptr_o.next;
        list2.push(new_node);
    }
    ptr_o = list.head;
    let ptr_d = list2.head;
    while(ptr_d){
        let dup_node = map.get(ptr_d.jump);
        ptr_d.jump = dup_node;
        ptr_d = ptr_d.next;
    }
    return list2;
}

let node1 = new JumpNode('a');
let node2 = new JumpNode('b');
let node3 = new JumpNode('c');
let node4 = new JumpNode('d');
let list1 = new JumpList('e');

list1.push(node1);
list1.push(node2);
list1.push(node3);
list1.push(node4);

node1.jump = node3;
node2.jump = node4;
node3.jump = node2;
node4.jump = node4;

list1.show();
list2 = CreateDuplicateWithJumpFields(list1);
list2.show();



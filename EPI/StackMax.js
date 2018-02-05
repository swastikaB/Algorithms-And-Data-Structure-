function Stack(){
    this.top = null;

}
function Node(val){
    this.value = val;
    this.next = null;
    this.max_value = null;
}
Stack.prototype.push = function(elem){
    let new_node = new Node();

    if(elem instanceof Node){
        new_node = elem;
    }else{
        new_node.value = elem;
    }
    //this is the first element
    if(!this.top){
        this.top = new_node;
        new_node.max_value = new_node.value;
    }else{
        let max = Math.max(new_node.value, this.top.max_value);
        new_node.max_value = max;
        new_node.next = this.top;
        this.top = new_node;
    }
    return new_node;
}

Stack.prototype.pop = function(){
    if(this.top){
        let curr_node = this.top;
        this.top = this.top.next;
        curr_node.next = null;
        return this.top;
    }else{
        console.log("Stack is Empty");
    }
}

function get_stack_max(stack){
    if(stack.top){
        return stack.top.max_value;
    }else{
        return 0;
    }
}

let stack1 = new Stack();
console.log(get_stack_max(stack1));
stack1.push(1);
console.log(get_stack_max(stack1));
stack1.push(2);
stack1.push(8);
stack1.push(5);
console.log(get_stack_max(stack1));
stack1.push(4);
console.log(get_stack_max(stack1));
stack1.pop();
console.log(get_stack_max(stack1));
stack1.pop();
console.log(get_stack_max(stack1));
stack1.pop();
console.log(get_stack_max(stack1));


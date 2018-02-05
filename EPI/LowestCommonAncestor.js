/* Lowesst Common Ancestor - Find the lowest Common Ancestor of two nodes */

function BinaryTree(node){
    this.root = node;
}

function TreeNode(val, left_child = null, right_child = null){
    this.value = val;
    this.left_child = left_child;
    this.right_child = right_child;
    this.parent = null;

}

function LowestCommonAncestor(iter1, iter2){
    
    let node_set = new Set();
    while(iter1 || iter2){
        if(iter1){
            if(node_set.has(iter1)){
                return iter1.value;
            }
            node_set.add(iter1);
            iter1 = iter1.parent;
        }
       
        if(iter2){
            if(node_set.has(iter2)){
                return iter2.value;
            }
            node_set.add(iter2);
            iter2 = iter2.parent;
        }
       
    }
    console.log("they dont belong to the same tree");
}

let node1 = new TreeNode(312);
let node2 = new TreeNode(6);
let node3 = new TreeNode(2);
let node4 = new TreeNode(3);

node1.left_child = node2;
node2.right_child = node3;
node3.right_child = node4;




node2.parent = node1;
node3.parent = node2;
node4.parent = node3;



let btree = new BinaryTree(node1);
console.log(LowestCommonAncestor(node3, node4));


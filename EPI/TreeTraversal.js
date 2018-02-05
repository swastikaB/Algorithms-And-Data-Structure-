/*Inorder Tree Traversal
-- left
-- root
-- right
*/

function BinaryTree(node){
    this.root = node;
}
function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

function inorder(tree){
    let curr_node = tree.root;
    let s = [];
    let result = [];
    while(curr_node || s.length > 0){
        if(curr_node){
            s.push(curr_node);
            curr_node = curr_node.left;
        }else{
            curr_node = s.pop();
            result.push(curr_node.value);
            curr_node = curr_node.right; 
        }
    }
    return result;
}

function equals(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i  = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
/*
let tree = new  Node(43);
    tree.left = new Node(23);
    tree.left.right = new Node(37);
    tree.left.right.left = new Node(29);
    tree.left.right.left.right = new Node(31);
    tree.left.right.right = new Node(41);
    tree.right = new Node(47);
    tree.right.right = new Node(53);
    let Btree = new BinaryTree(tree);
    let result = inorder(Btree);
    console.log(result);
    console.log(equals(result,[23,29,31,37,41,43,47,53]));
*/
/* Preorder Traversal
-- root
-- left
-- right
*/

function preorder(btree){
    let curr_node = btree.root;
    let s = [];
    if(curr_node){
        s.push(curr_node);
    }
    let result = [];
    while(s.length > 0){
       curr_node = s.pop();
       result.push(curr_node.value);
       if(curr_node.right){
           s.push(curr_node.right);
       }
       if(curr_node.left){
           s.push(curr_node.left);
       }
    }
    return result;
}
/*
let tree = new  Node(43);
    tree.left = new Node(23);
    tree.left.right = new Node(37);
    tree.left.right.left = new Node(29);
    tree.left.right.left.right = new Node(31);
    tree.left.right.right = new Node(41);
    tree.right = new Node(47);
    tree.right.right = new Node(53);
    let Btree = new BinaryTree(tree);
    let result = preorder(Btree);
    console.log(result);
    */

/* postorder
-- left
-- right
-- root
*/

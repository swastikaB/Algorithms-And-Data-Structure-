function BinaryTree(node){
    this.root = node;
}

function TreeNode(val, left_child = null, right_child = null){
    this.value = val;
    this.left_child = left_child;
    this.right_child = right_child;
}



///////////////////////////////////////////// Inorder Traversal /////////////////////////////
function inorder_traversal(curr_node){
    if(!curr_node){
        return;
    }
    inorder_traversal(curr_node.left_child);
    //console.log(left_node);
    console.log(curr_node.value);
    inorder_traversal(curr_node.right_child);
    //console.lof());
}


/*
let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

let root_node = new TreeNode(node4);
node4.left_child = node2;
node4.right_child = node6;

node2.left_child = node1;
node2.right_child = node3;

node6.left_child = node5;
//inorder_traversal(node4);
*/
/////////////////////////////////////// Balanced Tree /////////////////////////

function check_balanced(curr_node){
    if(!curr_node){
        return([true, -1]);
    }
    //let result be an array of( is_balanced, height);
    let result_left = check_balanced(curr_node.left_child);
    if(!result_left[0]){
        return(result_left);
    }
    let result_right = check_balanced(curr_node.right_child);
    if(!result_right[0]){
        return result_right;
    }
    let result = [];
    result[0] = Math.abs(result_left[1] - result_right[1]) <= 1;
    result[1] = Math.max(result_left[1], result_right[1]) + 1;
    return result; 
}
/*

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node8 = new TreeNode(8);

let root_node = new TreeNode(node4);
node4.left_child = node2;
node4.right_child = node6;

node2.left_child = node1;
node2.right_child = node3;

node6.left_child = node5;
node5.left_child = node8;
let result = check_balanced(node4);
console.log(result[0]);
*/

//////////////////////////// Symmetric Tree //////////////////////
/*function is_symmetric(binaryTree){
    let curr_node = binaryTree.root;
    let qa = [];
    let qb = [];
    qa.push(curr_node.left_child);
    qb.push(curr_node.right_child);

    while(qa.length > 0 && qb.length > 0){
        let ltree_node = qa.shift();
        let rtree_node = qb.shift();

        if(ltree_node.value !== rtree_node.value){
            return false;
        }
        if(ltree_node.left_child || rtree_node.right_child){
            qa.push(ltree_node.left_child);
            qb.push(rtree_node.right_child);
        }
        if(ltree_node.right_child || rtree_node.left_child){
            qa.push(ltree_node.right_child);
            qb.push(rtree_node.left_child);
        }
    }
    if((qa.length > 0 && qb.length === 0)
        || (qa.length === 0 && qb.length > 0)
            || (qa[0] && !qb[0])
                ||(!qa[0] && qb[0])){
                    return false;
    }
    return true;

}*/

function is_symmetric(ltree_node, rtree_node){
    if(!rtree_node && !ltree_node){
        return true;
    }else if((!ltree_node && rtree_node) || (ltree_node && !rtree_node)){
        return false;
    }
    else if(ltree_node.value != rtree_node.value){
        return false;
    }
    return (is_symmetric(ltree_node.left_child, rtree_node.right_child)
     && is_symmetric(ltree_node.right_child, rtree_node.left_child));
}

let node1 = new TreeNode(312);
let node2 = new TreeNode(6);
let node3 = new TreeNode(2);
let node4 = new TreeNode(3);

node1.left_child = node2;
node2.right_child = node3;
node3.right_child = node4;

let node5 = new TreeNode(6);
let node6 = new TreeNode(2);
let node7 = new TreeNode(3);

node1.right_child = node5;
node5.left_child = node6;
node6.left_child = node7;

let btree = new BinaryTree(node1);
let root_node = btree.root;
console.log(is_symmetric(root_node.left_child, root_node.right_child));

//let node8 = new TreeNode()

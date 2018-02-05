function BinaryTree(node){
    this.root = node;
    
}
function Node(val, left = null, right = null){
    this.value = val;
    this.left = left;
    this.right = right;
}

function TreeFromData(inorder,preorder){
    let inorder_idx_map  = new Map();
    inorder.array.forEach(function(element, idx) {
        inorder_idx_map.set(element, idx);
    });

    return tree_from_data_helper(preorder, 0, preorder.length, 0, inorder.length, inorder_idx_map);
}
function tree_from_data_helper(preorder, pre_start, pre_end, in_start, in_end, inorder_idx_map){
    

    if(in_start >= in_end || pre_start >= pre_end){
        return null;
    }

    let root_idx = inorder_idx_map.get(preorder[pre_start]);
    let left_subtree_size = root_idx - in_start;
    return new Node(preorder[pre_start], 
        //left subtree
        tree_from_data_helper(preorder, pre_start + 1, left_subtree_size + 1 + pre_start, in_start, root_idx, inorder_idx_map),
        // right subtree
        tree_from_data_helper(preorder, pre_start + left_subtree_size + 1, pre_end, root_idx + 1, in_end, inorder_idx_map));
}

//////////////////////////////// method 2 /////////////////////////////////////////////
/*
function TreeFromData_2(inorder,preorder){
    let inorder_idx_map  = new Map();
    inorder.array.forEach(function(element, idx) {
        inorder_idx_map.set(element, idx);
    });
    
    let root = inorder_idx_map.get(preorder[0]);

    let l_sub_tree = inorder.slice(0,root);
    let r_sub_tree = inorder.slice(root+1, inorder.length);

    let curr_node = root;
    for(let i = 1; i < preorder.length; i++){
        let next_node = preorder[i];
        let new_node = new Node(curr_node);
        if(inorder.get(next_node) < inorder.get(curr_node)){
            new_node.left = 
        }
    }
}
*/
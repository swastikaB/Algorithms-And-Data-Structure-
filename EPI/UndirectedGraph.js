/*
function Graph(){
    this.vertices = [];
    this.edges = [][];
}

function Node(elem){
    this.val = elem;
    this.neighbour = [];
}

Node.prototype.addNeighbour = function(node){
    this.neighbour.push(node);  
}

Graph.prototype.addEdge = function(node1, node2){
    node1.addEdge(node2);
    node2.addEdge(node1);
    for()
}
*/

function pathMatrix(V, E){
    let visited = new Set();
    let queue = [];
    let result 
    let result = new Array(V.length);
    result.fill(false);
    for(let i = 0; i < V.length; i++){
        if(!visited.has(V[i])){
            queue.push(V[i]);
            visited.add(V[i]);
            let path = [];
            while(queue.length > 0){
                let curr_node = queue[0];
                path.push(curr_node);
                for(let j = 0; j < E.length; j++){
                    if(E[i][j] === 1){
                        queue.push(j);
                        visited.push(j);
                    }
                }
            }
            //you now have a path.
            for(let k = 0; k < path.length; k++){
                for(let l = k+1; l < path.length; l++){
                    result[path[k]][path[l]] = true;
                    result[path[l]][path[k]] = true;
                }
            }
        }
    }
}
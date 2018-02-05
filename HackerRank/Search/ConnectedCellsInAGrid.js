function connectedCell(matrix) {
    let visited = [];
    
    for(let i = 0; i < matrix.length; i++){
        let columns = new Array(matrix[i].length);
        columns.fill(0);
        visited.push(columns);
        
    }
    let maxLength = 0;
    for(let i = 0 ; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 1 && !visited[i][j]){
                numCellsInTheRegion = 0;
                visited[i][j] = true;
                let queue = [];
                queue.push(new Cell(i,j));
                while(queue.length){
                    let currCell = queue.shift();
                    numCellsInTheRegion++;
                    //get all children of currCell
                    let childrenArr = getAllChildren(currCell, visited);
                    childrenArr.forEach(function(child) {
                        if(matrix[child.i][child.j]){
                            queue.push(child);
                        }
                    });

                }
                maxLength = Math.max(maxLength, numCellsInTheRegion);
            } 
        }
    }
    return maxLength;
}

function Cell (i, j){
    this.i = i;
    this.j = j;
}

function getAllChildren(currCell, visited){
    let x = currCell.i;
    let y = currCell.j;
    let n = visited.length;
    let m = visited[0].length;
    let childrenArr = [];

    for(let k = -1; k < 2; k++){
        for(let l = -1; l < 2; l++){
            let i = x + k;
            let j = y + l;
            if( i < n && i >= 0 && j < m && j >= 0){
                if(!visited[i][j]){
                    visited[i][j] = true;
                    childrenArr.push(new Cell(i, j));
                }
            }
        }
    }
    return childrenArr;
}

let r1 = [1, 1, 0, 0];
let r2 = [0, 1, 1, 0];
let r3 = [0, 0, 1, 0];
let r4 = [1, 0, 0, 0];

let r = [r1, r2, r3, r4];

console.log(connectedCell(r));
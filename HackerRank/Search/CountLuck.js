function countLuck(matrix, k) {
    let visited = [];

    for (let i = 0; i < matrix.length; i++) {
        let columns = new Array(matrix[i].length);
        columns.fill(0);
        visited.push(columns);

    }
    let steps = 0;
    let source, destination;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'M') {
                source = new Cell(i, j, 0);
            } else if (matrix[i][j] === '*') {
                destination = new Cell(i, j);
            }
        }
    }

    
    visited[source.i][source.j] = true;
    let queue = [];
    queue.push(source);
    while (queue.length) {
        let currCell = queue.shift();
        if(currCell.i === destination.i && currCell.j === destination.j){
            return k === currCell.distance ? "Impressed" : "Oops"; 
        }
        //get all children of currCell
        let childrenArr = getAllChildren(currCell, matrix, visited);
        if(childrenArr.length > 1){
            steps = currCell.distance + 1;
        }
        childrenArr.forEach((child) => {
            child.distance = steps;
            queue.push(child);
        });
        
    }
    return "Oops!";

}

function Cell(i, j, dist) {
    this.i = i;
    this.j = j;
    this.distance = dist;
}

function getAllChildren(currCell, matrix, visited) {
    let x = currCell.i;
    let y = currCell.j;
    let n = visited.length;
    let m = visited[0].length;
    let childrenArr = [];

    let arr = [];
    arr.push(new Cell(x - 1, y));
    arr.push(new Cell(x, y - 1));
    arr.push(new Cell(x, y + 1));
    arr.push(new Cell(x + 1, y));
    for(let k = 0; k < 4; k++){
        let i = arr[k].i;
        let j = arr[k].j;
        if (i < n && i >= 0 && j < m && j >= 0) {
            if (!visited[i][j] && matrix[i][j] !== 'X') {
                visited[i][j] = true;
                childrenArr.push(new Cell(i, j));
            }
        }
    }
    return childrenArr;
}


let r1 = ['*', '.', 'M'];
let r2 = ['.', 'X', '.'];
let r = [r1, r2];
console.log(countLuck(r, 1));
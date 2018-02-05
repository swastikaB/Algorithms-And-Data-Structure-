function main(n){
    let destination = new Point(n-1, n-1, 0);
    
   
   
    for(let a = 1; a < n; a++){
        let result = [];
        
        for(let b = 1; b < n; b++){
            let queue = [];
            let visitedSet = initializeVisited(n);
            let source = new Point(0, 0, 0);
            queue.push(source);
            let reachedDestination = false;
            while(queue.length){
                let currPoint = queue.shift();
                visitedSet[currPoint.x][currPoint.y] = true;
                if(currPoint.x === destination.x && currPoint.y === destination.y ){
                    result.push(currPoint.distance);
                    reachedDestination = true;
                    break;
                }else{
                    
                    let childrenArray = getValidPoints(currPoint, a, b, visitedSet, n);
                    childrenArray.forEach(function(child) {
                        queue.push(child);
                    });
                }
            }
            if(!reachedDestination){
                result.push(-1);
            }
        }
        console.log(result.toString().replace(/,/g, " "));
    }
}

function getValidPoints(currPt, a, b, visitedSet, n){
    let validPoints = [];
    let arrPoints = [];
    let x = currPt.x;
    let y = currPt.y;
    let newDist = currPt.distance + 1;

    arrPoints.push(new Point(x + a, y + b, newDist));
    arrPoints.push(new Point(x - a, y - b, newDist));
    arrPoints.push(new Point(x - a, y + b, newDist));
    arrPoints.push(new Point(x + a, y - b, newDist));
    arrPoints.push(new Point(x + b, y + a, newDist));
    arrPoints.push(new Point(x - b, y - a, newDist));
    arrPoints.push(new Point(x + b, y - a, newDist));
    arrPoints.push(new Point(x - b, y + a, newDist));

    validPoints = arrPoints.filter((pt) => {
        return isValid(pt.x, pt.y, visitedSet, n);
    });
    return validPoints;
}

function isValid(x, y , visitedSet, n){
   
    if(x < n && x >= 0 && y < n && y >= 0){
        if(!visitedSet[x][y]){
            visitedSet[x][y] = true;
            return true;
        }
    }
    return false;
}

function Point(x, y, dist){
    this.x = x;
    this.y = y;
    this.distance = dist;
}




function initializeVisited(n){
     let visitedSet = [];
     for(let i = 0; i < n; i++){
       let rows = new Array(n);
       rows.fill(false);
       visitedSet.push(rows);
    }
    return visitedSet;
}

main(5);
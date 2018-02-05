var BigNumber = require('bignumber.js');


function gridlandMetro(n, m, k, track) {
    let N = new BigNumber(n);
    let M = new BigNumber(m); 
    let rowsTrackMap = new Map();
    let occupiedCells = new BigNumber(0);
    for(let i = 0; i < track.length; i++){
        let details = track[i];
        let rowNum = (details[0]);
        let num1 = new BigNumber(details[1])
        let num2 = new BigNumber(details[2]);
        let c1 = BigNumber.min(num1, num2);
        let c2 = BigNumber.max(num1, num2);
        let newPair = new Pair(c1, c2);
        let tracksArray;
        if(rowsTrackMap.has(rowNum)){
            tracksArray = rowsTrackMap.get(rowNum);    
        }else{
            tracksArray = [];   
        }
        tracksArray.push(newPair);
        rowsTrackMap.set(rowNum, tracksArray);
    }
    //go through each key-value pair and see if tracks can be merged
    rowsTrackMap.forEach((value, key, map) => {
        let arrayOfPairs = value.sort(sortPairs);
        let newArrayOfPairs = mergeOverlapingPairs(arrayOfPairs);
        newArrayOfPairs.forEach((pair) => {
            occupiedCells = occupiedCells.plus((pair.c2.minus(pair.c1)).plus(1));
        });
    });
    //console.log(" occupiedCells = "  + occupiedCells);
    let emptyCells = (N.multipliedBy(M)).minus(occupiedCells);
    return emptyCells.toString();
}

let r1 = ['2', '2', '3'];
let r2 = ['3', '1', '4'];
let r4 = ['3', '2', '3'];
let r3 = ['4', '4', '4'];


console.log(gridlandMetro(4, 4, 3, [r1, r2, r3, r4]));


function Pair(c1, c2){
    this.c1 = c1;
    this.c2 = c2;
}

function sortPairs( pair1, pair2){
    return pair1.c1.minus(pair2.c1) || pair1.c2.minus(pair2.c2);
}

function mergeOverlapingPairs(arrayOfPairs){
    newPairArray = [];
    newPairArray.push(arrayOfPairs[0]);
    
    if(arrayOfPairs.length > 1){

        for(let i = 1; i < arrayOfPairs.length; i++){
            let prevPair = newPairArray.pop();
            currPair = arrayOfPairs[i];
            merge(prevPair, currPair, newPairArray);
            
        }
    }
   
    return newPairArray;
    
    
}

function merge(prevPair, currPair, newPairArray){
   
    if(currPair.c1.isLessThanOrEqualTo( prevPair.c2) || prevPair.c2.plus(1).isEqualTo( currPair.c1)){
        console.log("I am here");
            let newPair = new Pair();
            newPair.c1 = prevPair.c1;
            newPair.c2 = BigNumber.max(prevPair.c2, currPair.c2);
            newPairArray.push(newPair);
           
    }else{
        newPairArray.push(prevPair);
        newPairArray.push(currPair);
       
    }
}
//Compute the spiral ordering of 2D array

function createSpiralMatrix(arr){
    //create the borders
    let n = arr.length;
    let spiralArr = new Array();
    
    for(let offset = 0; offset < Math.ceil(n/2); offset++){
        arrangeElementsClockwise(arr, offset, n, spiralArr);
    }
    let resultArr = new Array();
    let idx = 0;
    for(let k = 0; k < n; k++){
        let temp = [];
        for(let l = 0; l < n; l++){
            temp.push(spiralArr[idx++]);
        }
        resultArr.push(temp);
    }
    console.log(resultArr);
}

function arrangeElementsClockwise(arr, offset, n , spiralArr){
    //corner case when dimension is odd number
    if(offset === n-offset-1){
        spiralArr.push(arr[offset][offset]);
        return;
    }

    //boundary elements
    for(let i = offset; i < n-offset-1; i++){
        spiralArr.push(arr[offset][i]);
    }
    for(let j = offset; j < n-1-offset; j++){
        spiralArr.push(arr[j][n-offset-1]);
    }
    for(let j = [n-1-offset]; j > offset;j--){
        spiralArr.push(arr[n-1-offset][j]);
    }
    for(let j = [n-1-offset]; j > offset; j--){
        spiralArr.push(arr[j][offset]);
    }
}
let a = [1,2,3,4];
let b = [5,6,7,8];
let c = [9,10,11,12];
let d = [13,14,15,16];
let sdarray = [a,b,c,d];
createSpiralMatrix(sdarray);
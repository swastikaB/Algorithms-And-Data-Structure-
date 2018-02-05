/////////////////////////////// Method 1 /////////////////////////////
/*
function findMajority(Arr){

    let n = Arr.length;
    let m = Math.floor(n/2);
    let r = n%2;
    if(n === 0){
        return null;
    }
    if(r === 1){
        let last_elem = Arr[n-1];
        let count = 0;
        for(let i = 0; i < n; i++ ){
            if(Arr[i] === last_elem){
                count++;
            }          
        }
        if(count > m){
            return last_elem;
        }else{
            return null;
        }
    }
    let newArray = [];
    for(let i = 0; i < (m*2); i += 2){
        if(Arr[i] === Arr[i+1]){
            newArray.push(Arr[i]);
        }
    }
    return findMajority(newArray);
}

let A  = [1, 2, 1,1,1, 2,3];
//let B = [1, 2, 1,2,1, 2, 2];
//console.log(findMajority(A));
*/

//////////////////////////////////// Method2 ///////////////////////////////////

function findMajority(A){
    let Arr = A;
    let r = Arr.length % 2;
    /*
    if(r === 1){
        let last_elem = Arr[Arr.length - 1];
        return checkIfMajority(Arr,last_elem)
    }*/
    if(Arr.length === 1){
        return Arr[0];
    }
    let mid = Math.floor((Arr.length - 1)/2);
    let larray = Arr.slice(0,mid+1);
    let rarray = Arr.slice(mid+1, Arr.length);
    let LMajority = findMajority(larray);
    let RMajority = findMajority(rarray);
    if(LMajority && RMajority){
        if(LMajority === RMajority){
            return LMajority;
        }else{
            return null;
        }
    }else{
        if(!LMajority && RMajority){
            return checkIfMajority(Arr, RMajority)
        }else if(!RMajority && LMajority){
            return checkIfMajority(Arr, LMajority);
        }else{
            return null;
        }
    }
}

function checkIfMajority(Arr, elem){
        let count = 0;
        for(let i = 0; i < Math.floor(Arr.length); i++ ){
            if(Arr[i] === elem){
                count++;
            }          
        }
        if(count > Math.floor(Arr.length/2)){
            return elem;
        }else{
            return null;
        }
}

let B = [1, 2, 3,3,4, 2,3];
console.log(findMajority(B));
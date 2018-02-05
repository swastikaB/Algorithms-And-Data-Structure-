function min_max(array){
    if(array.length === 1){
        return [array[0], array[0]];
    }
    let mid = Math.floor((array.length-1)/2);
    let temp_array = array;
    let larray = temp_array.slice(0,mid+1);
    let rarray = temp_array.slice(mid+1, array.length);
    /*
    let lresult = min_max(larray, global_min, global_max);
    let rresult = min_max(rarray, global_min, global_max);
    */
    let lresult = min_max(larray);
    let rresult = min_max(rarray);
    let result = [];
    result[0] = lresult[0] < rresult[0]? lresult[0] : rresult[0];
    result[1] = rresult[1] > lresult[1] ? rresult[1] : lresult[1];
    return result;
}


function getMinMax(array){
    let global_min = Number.MAX_VALUE;
    let global_max = Number.MIN_VALUE;
    let result = min_max(array);
    console.log("Min = " + result[0]);
    console.log("Max = " + result[1]);
}

let arr = [2, 6, 18, 10, 17];
getMinMax(arr);
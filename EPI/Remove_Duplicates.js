function removeDuplicates(arr){
    if(arr.length === 0){
        return 0;
    }
    let write_index = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[write_index] != arr[i]){
            arr[++write_index] = arr[i];
        }
    }
    while(write_index < arr.length-1){
        arr[++write_index] = 0;
    }
    console.log(arr);
}
let arr = [2, 3, 5, 5,7, 7, 7,11];
let arr1=[1,1, 3, 3, 3,0];
//removeDuplicates(arr);
countEqualEntries(arr1);
function countEqualEntries(arr){
    //if arr length is 0 ; return 0
    //let idx = 0
    let count = 1;
    let max = 1;
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] !== arr[i]){
            //++idx;
            count = 1;
        }
        else{
            count++;
            max = count > max?count:max;
        }
    }
    console.log(max);
}
/* In a sorted array find the first occurance of K */

function BinarySearchModified(arr, k){
    let lo = 0;
    let hi = arr.length - 1;
    let result = -2;
    while(lo <= hi){
        let mid = Math.floor(hi - lo * 0.5) + lo;
        if(arr[mid] === k){
            result = mid;
            hi = mid - 1;
        }else if(arr[mid] < k){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
    }
    return result;

}
 let arr = [2,8,8,10];
 console.log(BinarySearchModified(arr,8));
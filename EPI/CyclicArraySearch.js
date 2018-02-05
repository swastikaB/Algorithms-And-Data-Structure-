/* Find the smallest element in a cyclic unique array.
e.g 7 9 2 4 6 , smallest = 2
*/
var count = 0;
function get_smallest_in_cyclic_array(A, lo, hi){
    console.log("iteration = " + ++count);
    if(lo === hi){
        return lo;
    }
    let mid = Math.floor((hi - lo) / 2) + lo;
    if(A[mid] > A[hi]){
        lo = mid + 1;
    }else{
        hi = mid;
    }
    return get_smallest_in_cyclic_array(A, lo, hi);
}

//let A = [9, 10, 11, 14, 6];
//console.log(get_smallest_in_cyclic_array(A, 0, A.length- 1));

/* Find the smallest element in a cyclic array with repetition.
e.g  3 1 3  , smallest = 1
*/

function get_smallest_in_repetitive_cyclic_array(A,lo,hi){
    if(lo === hi){
        return lo;
    }
    let mid = Math.floor((hi - lo) / 2) + lo;
    if(A[mid] > A[hi]){
        lo = mid + 1;
        return get_smallest_in_repetitive_cyclic_array(A,lo,hi);
    }else if(A[mid] < A[hi]){
        hi = mid;
        return get_smallest_in_repetitive_cyclic_array(A,lo,hi);
    }
    else{
        let left = get_smallest_in_repetitive_cyclic_array(A, lo, mid);
        let right = get_smallest_in_repetitive_cyclic_array(A, mid+1, hi);
        return A[left] < A[right] ? left : right;
    }
}
let A = [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1];
//let A = [2, 2, 1, 2];
console.log(get_smallest_in_repetitive_cyclic_array(A, 0, A.length - 1));
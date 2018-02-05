/* Find the Kth largest element in the given array */

function find_kth_largest(A, k, lo = 0, hi = A.length - 1){

   let idx = descending_partition(A, lo, hi);
   if(k === idx + 1){
        return A[idx];
   }else if(k > idx + 1){
        return find_kth_largest(A, k, idx + 1, hi);
   }else{
       return find_kth_largest(A, k, lo, idx - 1);
   }
}

function descending_partition(A, lo, hi){
    let pivot = A[hi];
    let j = lo;
    for(let i = lo ; i < hi; i++){
        if(A[i] > pivot){
            swap (A, i, j);
            j++;
        }
    }
    swap(A, j, hi);
    return j;
}
function swap(A, i , j){
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

let A = [3, 4, 2, 1, 5];
console.log(find_kth_largest(A, 2));
/*
The Longest Increasing Subsequence (LIS) problem is to find
 the length of the longest subsequence of a given sequence 
 such that all elements of the subsequence are sorted in increasing order. 
 For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} is 
 6 and LIS is {10, 22, 33, 50, 60, 80}.


function LIS(A, B, idx){
    if(idx === A.length - 1){
        return 1;
    }
    B[idx] = LIS(A, B, idx + 1);
    B[idx] = A[idx] < A[idx + 1] ? 1 + B[idx] : B[idx];
    return B[idx];
}

function LongestSubarray(){
    //let A = [10, 22, 9, 33, 21, 50, 41, 60, 80];
   // let A = [50, 3, 10, 7, 40, 80];
   let A = [2, 3, 2, 0];
    let B = new Array(A.length);
    //B[A.length - 1] = 1;
    console.log(LIS(A, B, 0));
}
LongestSubarray();

*/


////////////////////////// 0(n^2) time algo function /////////////////////////

function longest_non_decreasing_subsequence(array){
    let n = array.length;
    count_array = new Array(n);
    count_array.fill(1);
    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            if(array[i] > array[j] && count_array[i] < count_array[j] + 1){
                count_array[i]++;
            }
        }
    }
    //find the index of the maximum number in count_array
    let max_idx = 0;
    for(let i = 1; i < n; i++){
        max_idx = count_array[max_idx] > count_array[i] ? max_idx : i;
    }
    let sequence_list = [];
    let count = count_array[max_idx]-1;
    sequence_list.push(array[max_idx]);
    for(let i = max_idx-1; i >= 0; i--){
        if( count_array[i] === count){
            count--;
            sequence_list.push(array[i]);
        }
    }
    sequence_list.reverse();
    console.log(sequence_list);
}

let A = [10, 22, 9, 33, 21, 50, 41, 60, 80];
longest_non_decreasing_subsequence(A);
/*
Given an array containing only 0s and 1s. 
For each index ‘i‘(0 index), find length of the 
longest alternating sub-array 
starting from ‘i‘ to ‘j‘ i.e., ai..j for i <= j < n.
 Alternating sub-array means that any two 
 adjacent elements should be different.

Input: arr[] = {1, 0, 1, 0, 0, 1}
Output: 4 3 2 1 2 1 
Explanation
Length for index '0': {1 0 1 0} => 4
Length for index '1': {0 1 0}   => 3
Length for index '2': {1 0}     => 2
Length for index '3': {0}       => 1
Length for index '4': {0 1}     => 2
Length for index '5': {1}       => 1
*/

function LAS(A, B, idx){
    if(idx === A.length - 1){
        console.log( " index " + idx + " ---> " + B[idx]);
        return 1;
    }
    let prev = LAS(A, B, idx + 1)
    if(A[idx]^A[idx+1]){
        B[idx] = prev + 1;
    }else{
        B[idx] = 1;
    }
    console.log( " index " + idx + " ---> " + B[idx]);
    return B[idx];
}


function LongestAlternatingSubstring(){
    let A = [1, 0, 1, 0, 0, 1];
    let B = new Array(A.length);
    B[A.length - 1] = 1;
    LAS(A, B, 0);
}

LongestAlternatingSubstring();
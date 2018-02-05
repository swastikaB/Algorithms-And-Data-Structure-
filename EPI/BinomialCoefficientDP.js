/*
Following are common definition of Binomial Coefficients.
1) A binomial coefficient C(n, k) can be defined as the coefficient of
 X^k in the expansion of (1 + X)^n.
2) A binomial coefficient C(n, k) also gives the number of ways, 
disregarding order, that k objects can be chosen from among n objects; 
more formally, the number of k-element subsets (or k-combinations) 
of an n-element set.

The Problem
Write a function that takes two parameters n and k and 
returns the value of Binomial Coefficient C(n, k). 
For example, your function should return 6 for n = 4 and k = 2,
and it should return 10 for n = 5 and k = 2.
*/
function Binomial_coefficient(n, k){
    let array = new Array(n+1);
    for(let row = 0; row <= n; row++ ){
        array[row] = new Array(k + 1);
    }
    array.forEach(function (row){
        row.fill(0);
    });
    for(let r = 1; r <= n; r++){
        array[r][1] = r;
    }
    console.log(C(n, k, array));
}
function C(n, k, p){
    if(n < 1 || k < 1){
        return 0;
    }
    if(p[n][k] != 0){
        return p[n][k];
    }
    p[n][k] = C(n-1, k - 1, p) + C( n-1, k, p);
    return p[n][k];
}

Binomial_coefficient(3,3);
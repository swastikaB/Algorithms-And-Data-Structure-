let a = [1, 2, 3];
let b = [4, 5, 6];
swap(a, 1, 2);
//swap(a, b);
console.log(a);
console.log(b);


function swap(a, idx1, idx2){
let temp = a[idx1];
a[idx1] = a[idx2]; 
a[idx2] = temp;
}
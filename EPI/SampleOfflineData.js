function sample(arr, k){
    let n = arr.length;
    for(let i = 0; i < k; i++){
        let r = Math.floor(Math.random() * (n - i) + i);
        console.log(r);
        swap(arr, r, i);
    }
    return arr.splice(0,k);
}

function swap(arr, a , b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let arr = [2, 5, 6, 9, 7];
console.log(sample(arr,3));
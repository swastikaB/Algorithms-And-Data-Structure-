function icecreamParlor(m, arr) {
    //arr.sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1;  j < arr.length; j++){
            if(i !== j && arr[i] + arr[j] === m){
                
                return i< j ? [i + 1, j + 1]:[j + 1, i + 1];
            }
        }
    }
}

console.log(icecreamParlor(4, [5, 1, 4, 2, 2]));

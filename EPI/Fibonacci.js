function fib(n){
    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1,1;
    }
    return (fib(n - 1) + fib(n - 2));
}

//console.log(fib(9))

function fib1(n){
    if(n === 0){
        return 0;
    }
    let next = 1;
    let prev = 0;
    let sum = 0;
    for(let i = 0; i < n; i++){
        console.log(sum);
        sum = next + prev;
        prev = next;
        next = sum;
      
    }
}

//fib1(8);

function fib2(n){
    let f = [n+1];
    f[0] = 0;
    f[1] = 1;
    for(let i = 2; i <= n; i++){
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}
console.log(fib2(9));
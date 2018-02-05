function Eratosthene(n){
    let primes = new Array(n-2);
    primes.fill(true);
    for(let i = 2; i <= Math.sqrt(n); i++){
        let p = i - 2;
        if(primes[p]){
            let k = i;
            for(let j = k*k; j <= n; j += k ){
                p = j - 2;
                primes[p] = false;
            }
        }
    }

    for(let x = 0; x < primes.length; x++){
        if(primes[x]){
            console.log(x+2); 
        }
    }
}

Eratosthene(100);
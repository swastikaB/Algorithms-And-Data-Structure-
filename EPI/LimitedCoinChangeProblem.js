function limited_coin_change(n, d, a){
    let m = d.length;
    //let column = new Array(n + 1);
   let N = new Array(m+1);
    for(let ri = 0; ri < N.length; ri++){
         N[ri] = new Array(n +1);
    }
        
    for(let c = 0; c <= n; c++){
        N[0][c] = Number.MAX_VALUE;
    }
    for(let r = 0; r <= m; r++){
        N[r][0] = 0;
    }
    for(let r = 1; r <= m; r++){
        for(let c = 1; c <=n; c++ ){
            N[r][c] = N[r-1][c];//Number.MAX_VALUE;
            for(let k = 0; k <= a[r] && k*d[r] <= c; k++){
            //for(let k = a[r]; k >= 0 && k*d[r] <= c; k--){
                N[r][c] = Math.min(N[r][c], k + N[r-1][c-(k*d[r])]);
            }
        }
    }
    return N[m][n];
}

let d = [0,1, 3];
let a = [0,5, 1];
console.log(limited_coin_change(5,d,a));
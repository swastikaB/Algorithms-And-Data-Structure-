function commonChild(s1, s2){
    let s1Arr = s1.split("");
    let s2Arr = s2.split("");

    
   let memo = [];
   for(let i = 0; i <= s2.length; i++){
       let row = new Array(s1.length + 1);
       memo.push(row);
   }
    for(let i = 0; i <= s1Arr.length; i++){
        memo[i][0] = 0;
    }
    for(let i = 0; i <= s2Arr.length; i++){
        memo[0][i] = 0;
    }
    let r = 1, c= 1;
    for(r = 1; r <= s1Arr.length; r++){
        for(c = 1; c <= s2Arr.length; c++){
            if(s1Arr[r-1] === s2Arr[c-1]){
                memo[r][c] = memo[r-1][c-1] + 1;
            }else{
                memo[r][c] = Math.max(memo[r-1][c] , memo[r][c-1]);
            }
        }
    }
    //console.log(memo);
    return memo[r-1][c-1];
}

console.log(commonChild("HARRY", "SALLY"));

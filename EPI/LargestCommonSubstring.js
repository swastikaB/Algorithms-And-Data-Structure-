function LargestCommonSubstring(s1, s2){
   
    let lcs = "";
    for(let i = 0; i < s1.length; i++){
        
        for(let j = 0; j < s2.length; j++){
            let temp = "";
            if(s1[i] === s2[j]){
                temp = s1[i];
                for(let k = i+1, l = j+1; k < s1.length && l < s2.length && s1[k] === s2[l]; k++, l++){
                    temp += s1[k];
                }
                lcs = lcs.length > temp.length ? lcs : temp; 
            }
        }
    }
    return lcs;
}

//console.log(LargestCommonSubstring("abc", "bcd"));
console.log(LargestCommonSubstring("abc", "adef"));
console.log(LargestCommonSubstring("mkmkmkmkabcklkl", "jijijimbckd"));
console.log(LargestCommonSubstring("a", "a"));
console.log(LargestCommonSubstring("imimi", "iyiyi"));
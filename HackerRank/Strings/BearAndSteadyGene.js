function steadyGene(gene, n) {

    let charCountMap = new Map();
    charCountMap.set('A', 0);
    charCountMap.set('C', 0);
    charCountMap.set('G', 0);
    charCountMap.set('T', 0);

    for(let i = 0; i < gene.length; i++){
        let key = gene[i];
        charCountMap.set(key, charCountMap.get(key) + 1);
    }

    let left = 0, right = 0, min = Number.MAX_VALUE;
    while(right < n-1){
         let rc = gene[right++];
        charCountMap.set(rc, charCountMap.get(rc) - 1);
        while(isSteady(charCountMap, n)){
            min = Math.min(min, right - left);
            let lc = gene[left++];
            charCountMap.set(lc, charCountMap.get(lc) + 1);
            
        }
    }
   return min;

}

function isSteady(charCountMap, n){
    let freq = n/4;
    for(let [key, value]of charCountMap){
        if(value > freq){
            return false;
        }
    }
    return true;
}

console.log(steadyGene("GAAATAAA", 8));
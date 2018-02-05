function richieRich(string, n, k){
    let sArr = string.split("").map(Number);
    let changedIndex = new Set();
    for(let i = 0, j = sArr.length - 1; i < Math.floor(sArr.length/2); i++, j-- ){
        if(sArr[i] !== sArr[j]){
            if(k > 0){
                sArr[i] = sArr[j] = sArr[i] > sArr[j] ? sArr[i] : sArr[j];
                k--;
                changedIndex.add(i);
            }else{
                return -1
            }
        }
    }
    if(k > 0 && sArr.length % 2){
        changedIndex.add(Math.floor(sArr.length/2));
    }
    let i = 0;
    let lastIdx = string.length - 1;
    while(k > 0 && i <= Math.floor(sArr.length/2)){
       if(k > 1 && sArr[i] !== 9){
           sArr[i] = sArr[lastIdx - i] = 9;
           k -= 2;
           if(changedIndex.has(i)){
               k++;
           }
       }else {
            //only change for changed index
            if(changedIndex.has(i) && sArr[i] !== 9){
                sArr[i] = sArr[lastIdx - i] = 9;
                k--;
            }
       }
       i++;
    }
    return sArr.join("");
}

//console.log(richieRich("1231", 4, 3));
//console.log(richieRich("092282", 6, 3));
console.log(richieRich("932239", 4, 2));

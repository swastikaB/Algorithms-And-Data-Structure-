function pairs(k, arr) {
   let sortedArr = arr.sort((a,b) => {return (a - b)});
   let i = 0, j = 1;
   let numPairs = 0
   for(let i = 0; i < arr.length; i++){
       for(j = i + 1; j < arr.length; j++ ){
            let diff = sortedArr[j] - sortedArr[i]
            if(diff === k){
                numPairs++;
            }else if(diff > k){
                break;
            }
       }
       
   }
   return numPairs;

}

console.log(pairs(2, [1, 3, 5, 2, 4]));
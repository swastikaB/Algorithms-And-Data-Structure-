function minLoss(priceArr){
    let n = priceArr.length;
    let sortedPriceArr = [];
    sortedPriceArr.push(priceArr[0]);
    let min = Number.MAX_VALUE;
    for(let i = 1; i < n ; i++){
        let currPrice = priceArr[i];
        sortedPriceArr.push(currPrice);
        sortedPriceArr = sortedPriceArr.sort((a, b) => { return a - b; });
        let reqIdx = sortedPriceArr.indexOf(currPrice);
        if(reqIdx !== sortedPriceArr.length - 1){
            let leastHigherPrice =  sortedPriceArr[reqIdx + 1];
            min = Math.min(min,  leastHigherPrice - currPrice);
        }
    }
    return min;
}


function getLeastHigher(sortedPriceArr, currPrice){
    let n = sortedPriceArr.length - 1;
    let low = 0;
    let high = n;
    let mid = Math.floor((high - low) / 2) + low;
    while(mid < sortedPriceArr.length){
        if(currPrice === sortedPriceArr[mid]){
            return mid != n ? sortedPriceArr[mid + 1] : null; 
        }else if(currPrice < sortedPriceArr[mid]){
             high = mid - 1;
        }else{
            low = mid + 1;
        }
        mid = Math.floor((high - low) / 2) + low;
    }   
    return null;
}

myArr = [ 5, 10, 3];
curr = 3;
//console.log(getLeastHigher(myArr, curr));
console.log(minLoss(myArr));
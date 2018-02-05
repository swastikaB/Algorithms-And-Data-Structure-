function hackerlandRadioTransmitters(x, k) {
    let houses = x.sort((a,b) => a - b );
   
    let numOfTransmitters = 0;
    let i = 0;
    let n = houses.length;
    let loc;
    
    while(i < n){
       
        numOfTransmitters++;
        loc = houses[i] + k;
        while(i < n && houses[i] <= loc){
            i++;
        }
        loc = houses[--i] + k;
        while(i < n &&  houses[i] <= loc){
            i++;
        }
    }
    
    return numOfTransmitters;
}

console.log(hackerlandRadioTransmitters([1, 2, 3, 4, 5], 1) );
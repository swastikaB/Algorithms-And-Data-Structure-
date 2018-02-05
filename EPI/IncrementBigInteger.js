function addOne(arr){
    let carryfrwd = 1;
    for(let i = arr.length-1; i >= 0 ; i--){
        let temp = arr[i] + carryfrwd;
        if(temp > 9){
            carryfrwd = 1;
            arr[i] = 0;
        }else{
            carryfrwd = 0;
            arr[i] = temp;
        }
    }
    if(carryfrwd > 0){
        let rem = arr.splice(0, 0, carryfrwd)
    }
    console.log(arr)
}

arr = [1,9,9];
addOne(arr);
function insertion_sort(Arr, low, high){
    for(let i = 0; i <= high; i++){
        for(let j= i; j> low && Arr[j-1] > Arr[j]; j--){
            //perform swap
            let temp = Arr[j-1];
            Arr[j-1] = Arr[j];
            Arr[j] = temp;
        }
    }
    console.log(Arr);
}
insertion_sort([2, 6, 8, 1, 4], 0, 4);
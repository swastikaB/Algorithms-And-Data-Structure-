function quick_sort(Arr, low, high){
    if(low < high){
        let p = partition(Arr, low, high);
        //now all elements with value less than pivot will be to the left 
        //quicksort the elements to the left of the pivot
        quick_sort(Arr, low, p-1);
        //quicksort the elements to the right of the pivot
        quick_sort(Arr, p, high);
    }
}

function partition(Arr, low, high){
    let pivot = Arr[high];
    let i = low - 1;
    for(let j = low; j <= high - 1; j++){
        if(Arr[j] <= pivot){
            i++;
            swap(Arr, i, j); //Swap elements at i and j
        }
    }
    //bring pivot to its correct position
    swap(Arr, i+1, high);
    return i+1;
}

function main(Arr){
    let low = 0;
    let high = Arr.length - 1;
    quick_sort(Arr, low, high);
    console.log(Arr);
}

function swap(Arr, idx1, idx2){
    let temp = Arr[idx1];
    Arr[idx1] = Arr[idx2];
    Arr[idx2] = temp;
}

let Arr = [1, 8, 3, 9, 4, 5, 7];
main(Arr);
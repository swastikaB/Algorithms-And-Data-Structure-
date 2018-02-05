function dutchFlagPartion(Arr, pivot){
    let smaller = 0;
    let equal = 0;
    let larger = Arr.length - 1;
    console.log(larger);
    while(equal <= larger){
        if(Arr[equal] < pivot){
            Arr.swap(smaller++, equal++);
        }else if(Arr[equal] === pivot){
            equal++;
        }else{
            Arr.swap(equal, larger--);
        }
        console.log(Arr)
    }
console.log(Arr);
}

Array.prototype.swap = function (a,b){
    let temp = this[a];
    this[a] = this[b];
    this[b] = temp;

}

var Arr = [4,2,5,6,2,3];
dutchFlagPartion(Arr, 4);
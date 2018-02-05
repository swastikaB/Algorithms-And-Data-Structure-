function reverseWrds(string){
    let arr_string = string.split(" ");
    for(let i = 0, j = arr_string.length -1; i <= j; i++, j--){
        let temp = arr_string[i];
        arr_string[i] = arr_string[j];
        arr_string[j] = temp;
    }
    return arr_string.join(" ");
}

//console.log(reverseWrds("Ram is Costly"));


//console.log(reverseWrds2("Bob likes Alice"));

let string2 = "Bob Likes Alice";
let arr = string2.split('');
console.log(reverseWrds2(arr));

function reverseWrds2(string_arr){
   
    //reverse all the characters
    string_arr.reverse();
    // reverse individual words
    let n = string_arr.length;
    let start = 0; 
    let end = 0;
    while(start < n){
        while(start < end || start < n && string_arr[start] === " "){
            start++;
        }
        while(end < start || end < n  && string_arr[end] !== " "){
            end++;
        }
       
        reverse_wrds(string_arr, start, end);
    }
    return string_arr;
    
}

function reverse_wrds(arr, start, end){
    for(let i = start, j = end - 1; i <= j; i++, j--){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
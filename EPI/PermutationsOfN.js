function get_all_permutations(n, l){
    if(n == 1){
        let arr_temp  = [n]; 
        l.push(arr_temp);
        return l;
    }
    l = get_all_permutations(n-1, l);
    let new_list  = [];
   for(let k = 0; k < l.length; k++){
        let array  = l[k]; 
        array.push(n);
        let new_array = array;
        new_list.push(new_array);
        for(let i = 1; i < n; i++){
            let arr_temp = new Array(n);
            //let last = 0;
            for(let j = 0; j < n; j++){
                if(j === 0){
                    arr_temp[arr_temp.length - 1] = new_array[j];
                }else{
                    arr_temp[j-1] = new_array[j];
                }
            }
            new_array = arr_temp;
            //array[array.length - 1] = last;
            new_list.push(new_array);
        }
   }
    return new_list;
}

let l = [];
l = get_all_permutations(4,l);
console.log(l);
console.log(l.length);
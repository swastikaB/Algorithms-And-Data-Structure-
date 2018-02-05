function sequence_generator(n){
    let result_arr = new Array();
    let starting = [1];
    result_arr.push(starting);
    
    create_next_sequence(result_arr[0],n, result_arr);
    let result = result_arr.join(", ");
    return result;
}

function create_next_sequence(prev_seq, n, result_arr){
    if(result_arr.length === n){
        return;
    }
    let i = 0;
    let partial_arr = new Array();
    while(i < prev_seq.length){
        let curr = prev_seq[i++];
        let count = 1;
        while(i < prev_seq.length && curr === prev_seq[i]){
            i++;
            count++;
        }
        partial_arr.push(count);
        partial_arr.push(curr);
    }
    result_arr.push(partial_arr.join(""));
    create_next_sequence(partial_arr , n, result_arr);
}

console.log(sequence_generator(11));
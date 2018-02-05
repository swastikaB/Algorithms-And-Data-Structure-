var mapping = ["0", "1", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
function phone_nemonic(phone_num_string){
    let partial_nemonic = new Array(phone_num_string.length);
    let nemonic = new Array();
    phone_nemonic_helper(phone_num_string, partial_nemonic, 0, nemonic);
    return nemonic;
}
function phone_nemonic_helper(phone_num_string, partial_nemonic, digit, nemonic){
    if(digit === phone_num_string.length){
        let temp_arr = partial_nemonic.concat();
        nemonic.push(temp_arr);
    }else{
        let mapping_idx =  phone_num_string.charCodeAt(digit) - ("0").charCodeAt(0);
        let char_arr = mapping[mapping_idx];
        for(let i = 0; i < char_arr.length; i++){
            partial_nemonic[digit] = char_arr[i];
            phone_nemonic_helper(phone_num_string, partial_nemonic, digit + 1, nemonic);
        }
    }
}

console.log(phone_nemonic("223"));
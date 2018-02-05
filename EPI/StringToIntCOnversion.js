function int_to_string(num){
    let s = "";
    let is_positive = true;
    if(num < 0){
        is_positive = false;
        num = -num;
    }
    while(num){
        s = num % 10 + s;
        num = Math.floor(num/10);
    }

    return (is_positive ? s : "-" + s);
}

//console.log(int_to_string(-234));


function string_to_int(strig){
    
    let result = 0;
    let is_positive = true;
    let new_strig = strig;
    if(strig.charAt(0) === '-'){
        is_positive = false;
        new_strig = strig.substring(1);
    }
    let n = new_strig.length;
   
    for(let i = 0; i < n; i++ ){
        let s = new_strig.charAt(i);
        let val = s.charCodeAt(0) - "0".charCodeAt(0) ;
        result += Math.pow(10,(n-i-1))* val;
    }
    return (is_positive?result:-result);

}
console.log(string_to_int("-123"));
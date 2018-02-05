function multiply(s1, s2){
   
    is_positive = true;
    if(s1.charAt(0) === '-'){
        is_positive = !is_positive;
        s1 = s1.substring(1);
    }
    if(s2.charAt(0) === '-'){
        is_positive = !is_positive;
        s2 = s2.substring(1);
    }
    let arr1 = s1.split("");
    let arr2 = s2.split("");

    arr1.reverse();
    arr2.reverse();

    let result = new Array(arr1.length + arr2.length);
    result.fill(0);

    let carryfwrd = new Array(result.length);
    carryfwrd.fill(0);
    for(let i = 0; i < arr1.length; i++){
        //let temp = 0;
        for(let j = 0; j < arr2.length; j++){
            let temp = (arr1[i] * arr2[j]) + result[i+j];
            result[i+j] = temp % 10; 
            result[i+j+1] += Math.floor(temp / 10);
            
        }
    }
    result[result.length-1] += carryfwrd[result.length-1];
    // remove extra zeros
    let k = result.length-1;
    while(result[k] === 0 && k > 0){
        k--;
    }
    let end_result = is_positive?"": "-";
    while(k >= 0){
        end_result += result[k];
        k--;
    }
    console.log(end_result);
}

multiply("193707721","-761838257287");
//multiply("19","199");
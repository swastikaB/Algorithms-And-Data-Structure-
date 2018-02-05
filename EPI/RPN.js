function RPN(s){
    let arr = s.split(",");
    let inmit_result_arr = [];
    for(let i = 0; i < arr.length; i++){
        if(['+','-','*','/'].includes(arr[i])){
        //if(arr[i].match(/[^\d]/)){
            if(inmit_result_arr[0] && inmit_result_arr[1]){
                let x = inmit_result_arr[0];
                let y = inmit_result_arr[1];
                inmit_result_arr.splice(1,1);
                switch(arr[i]){
                    case '+': 
                        inmit_result_arr[0] = x + y;
                        break;
                    case '-':
                       inmit_result_arr[0] = x - y;
                       break;
                    case '*':
                        inmit_result_arr[0] = x * y;
                        break;
                    case '/':
                        inmit_result_arr[0] = x / y;
                        break;
                    default:
                        throw "invalid operator: " + arr[i];
                }
            }else{
                throw "ill formed RPN string: " + s;
            }
        }else{
                if(Number.parseInt(arr[i])){
                    inmit_result_arr.push(Number.parseInt(arr[i]));
            }else{
                throw "invalid operator: " + arr[i];
            }

        }
    }
    return(inmit_result_arr[0]);
}

let s1 = "3,4,+,2,1,*,&,+";
let s2 = "1,1,+,-2,*";
let s3 = "4,6,/,2,/";

console.log(RPN(s2));

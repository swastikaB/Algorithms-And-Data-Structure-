function palindrome(string){
    let idx2 = string.length-1;
    string  = string.toLowerCase();
    let idx1 = 0;
    while( idx1 < idx2){
         while(!isLetter(string[idx1]) && idx1 < idx2){
             idx1++;
         }
         while(!isLetter(string[idx2]) && idx1 < idx2){
             idx2--;
         }
        if(string[idx1++] !== string[idx2--]){
                return false;  
        }  
    }
    return true;
}

function isLetter(s){
    return (s.length != 0 && s.match(/[a-z]/i));
}

console.log(palindrome("A man, a plan, a canal, Panama"));
//console.log(palindrome("Ray a Ray"));
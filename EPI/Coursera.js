function firstOccurrence(binString) {
   //all consecutive substrings
   //check if magical
   // if magical then swap
   //check if greater than original
   
   for(let i = 0; i < binString.length; i++){
       if(binString[i] === "1"){
            binString.indexOf("0",i+ 1);
            let idx = binString.indexOf("01", i+ 1);
            if(idx != -1){
                idx = idx + 1;
                let firstMagical = isMagic(binString.substring(i, idx));
                if(firstMagical){
                    let newLength = idx - i + 1;
                    let secondMagical = isMagic(binString.substring(idx, idx + newLength));
                    if(secondMagical){
                        
                    }
                }
                
            }

       }
   }
   let magical = isMagic(s);

}

let s = "";
let x = "";
firstOccurrence(s,x);

function isMagic(s){
    if(s.length %2 !== 0){
        return false;
    }
    let one = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "1"){
            one++;
        }
    }
    if(one === (s.length - one)){
        return true;
    }else{
        return false;
    }
}
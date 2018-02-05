function twoCharacters(s){
    let stringPairs = new Set();
    let maxLength = 0;
    for(let i = 0; i < s.length - 1; i++){
        let first = s[i];
       
        for(let j = i + 1; j < s.length; j++){
            let second = s[j];
            let pairOne = first + second;
            let pairTwo = second + first;
            if(!stringPairs.has(pairOne) && !stringPairs.has(pairTwo) && first !== second){
                stringPairs.add(pairOne);
                stringPairs.add(pairTwo);
                //console.log("pair = " + pair);
                let firstsTurn  = true;
                let newString = "";
                let newStringComplete = true;
                for(let x = 0; x < s.length; x++){
                    if(first === s[x] && firstsTurn){
                        newString += s[x];
                        firstsTurn = false;
                    }else if(second === s[x] && !firstsTurn){
                        newString += s[x];
                        firstsTurn = true;
                    }else if((first === s[x] && !firstsTurn) ||
                        (second === s[x] && firstsTurn)){
                            newStringComplete = false;
                            break;
                    }

                }
                if(newStringComplete){
                   // console.log("newString = " + newString);
                    maxLength = maxLength > newString.length ? maxLength : newString.length;
                }
            } 
        }
    }
    return maxLength;
}

console.log(twoCharacters("abbca"));
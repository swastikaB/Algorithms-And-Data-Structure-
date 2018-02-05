function stringConstruction(s){
    let charSet = new Set();
    let cost = 0;
    for(let i = 0; i < s.length; i++){
        if(!charSet.has(s[i])){
            cost++;
            charSet.add(s[i]);
        }
    }
    return cost;
}

console.log(stringConstruction("ababb"));
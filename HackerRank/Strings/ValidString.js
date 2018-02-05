function isValid(s){
   if(s.length === 0){
       return "YES";
   }
   let charCountMap = new Map();
    for(let i = 0; i < s.length; i++){
        let count = 1;
        if(charCountMap.has(s[i])){
            count = charCountMap.get(s[i]) + 1;
        }
        charCountMap.set(s[i], count);
    }
    let countFrequencyMap = new Map();
    charCountMap.forEach((value, key) => {
        let count = 1;
        if(countFrequencyMap.has(value)){
            count = countFrequencyMap.get(value) + 1;
        }
        countFrequencyMap.set(value, count);
    });
    if(countFrequencyMap.size === 1 || countFrequencyMap.get(1) === 1){
        return "YES";
    }
    return "NO"
    
}

console.log(isValid("aaaab"));

console.log(isValid("aabbccddffiop"));
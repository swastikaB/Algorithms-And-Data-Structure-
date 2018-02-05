function marsExploration(s){
    let duplicateString = 'SOS'.repeat(s.length);
    let alteredCount = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] !== duplicateString[i]){
            alteredCount++;
        }
    }
    return alteredCount;
}

console.log(marsExploration("SOSSPSSQSSOR"));
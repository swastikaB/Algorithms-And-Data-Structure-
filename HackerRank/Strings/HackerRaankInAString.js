function hackerRank(s){
    let h = "hackerrank"
    let i = j = 0;
    while(i < s.length && j < h.length){
       if(s[i] === h[j]){
           i++;
           j++;
       }else{
           i++;
       }
   }
   if(j < h.length){
       return "NO";
   }else{
        return "YES";
   }
}

console.log(hackerRank("hereiamstackerrank"));
console.log(hackerRank("hackerworld"));
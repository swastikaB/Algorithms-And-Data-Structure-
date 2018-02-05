function super_reduced_string(s){
    
    let newString = "";
    for(let i = 0; i < s.length; i++){
        let idx = newString.lastIndexOf(s[i]);
        if( idx === -1 || ( i> 0 && newString.length - 1 !== idx)){
            newString += s[i];
        }else{
            let len = newString.length;
            newString = newString.slice(0,idx);
            
        }
    }
    
   
   console.log(newString === "" ? "Empty String" : newString);


}

super_reduced_string("abcaa");
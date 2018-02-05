function Normalize_Paths(s){
    let stack = [];
    s1 = s[0] === '/'? s.substring(1,s.length) : s ;
    s1 = s1[s1.length-1] === '/' ? s1.substring(0, s1.length - 1) : s1 ;

    let arr_s = s1.split('/');
    for(let i = 0; i < arr_s.length; i++){
        if(arr_s[i].match(/[\w]+/)){
            stack.push(arr_s[i]);
        }else{
            switch(arr_s[i]){
                case '.':
                    break;
                case '/':
                    break;
                case '..':
                    if(!stack.pop()){
                        if(s[0] === '/'){
                            return null;
                        }else{
                           arr_s.splice(0,i);
                           return arr_s.join("/") + "/";
                        }   
                    }
                    break;
                default: 
                    throw "ill formaed path name";
            }
        }
    }
    return stack.length > 0 ? stack.join("/") + "/" : "";
    
}

console.log(Normalize_Paths('/abc/def/../'));
console.log(Normalize_Paths('/abc/def/../../'));
console.log(Normalize_Paths('abc/def/../../../'));
console.log(Normalize_Paths('/abc/def/../../../'));
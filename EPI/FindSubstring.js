//RabinKarp Algorithm

function findFirstOccurenceofSubstring(t,s){
    t = t.toLowerCase();
    s = s.toLowerCase();
    let mod_m = 31;
    len_s = s.length;
    //calculate the hashcode for s
    let r1 = calculate_hash_code(s,mod_m);
    let s_code = r1[1];
    //calculte the hashcode for starting letter of t
    let t1 = t.slice(0,len_s);
    let r2 = calculate_hash_code(t1,mod_m);
    let prev_term = r2[0];
    let prev_code = r2[1];
    let char_code_a = "a".charCodeAt(0); 
    if(prev_code === s_code){
        return 0;
    }
    for(let i = 0, j = len_s; j < t.length; i++, j++){
        
        let prev_char = t.charCodeAt(i) - char_code_a;
        let next_char = t.charCodeAt(j) - char_code_a;
        let new_term = (prev_term - (prev_char * Math.pow(10,len_s-1))) * 10 + next_char;
        let new_code  = new_term % mod_m;
        if(new_code === s_code){
            let l = i+1, k = 0;
            let matched = true;
            for(l , k; k < len_s; l++, k++){
                if(s[k] !== t[l]){
                    matched = false;
                    break;
                }
            }
            if(matched){
                return (i+1);
            }
        }
        prev_term = new_term;
    }
    return -1;

}

function calculate_hash_code(s, m){
    let c = 0;
    for(i = 0; i < s.length; i++){
        char_code = s.charCodeAt(i) - "a".charCodeAt(0);
        c += char_code * Math.pow(10, s.length - 1 - i);
    }
    let a = [c, c % m];
    return a;
}

let s = "cgc";
//let t = "AACGCcaa"
let t = "GACGCCA"
console.log(findFirstOccurenceofSubstring(t,s));
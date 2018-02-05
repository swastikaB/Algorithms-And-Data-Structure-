if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String(padString || ' ');
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0,targetLength);
        }
    };
}

function replace_and_remove(strig){
    if(strig === ""){
        console.log("");
    }
    let s = strig.split(""); 
    //delete all b's and count the number of a's
    let idx = 0;
    let count_a = 0;
    for(let i = 0; i < s.length; i++ ){
        let c = s[i];
        if(c !== 'b'){
            s[idx] = c;
            idx++;
        }
        if(c === 'a'){
            count_a++;
        }
    }
    let newLength = idx + 1 + count_a - s.length;
    if(newLength > 0){
        //calculate length of new string
        let s2 = new Array(newLength);
        s = s.concat(s2);
        //let idx1 = s.length - 1;
    }else{
        s.splice(idx+count_a,s.length);
        //idx++;
    }
    if(count_a > 0){
        for(let i = s.length - 1; i >= 0; i-- ){
            if(s[--idx] === 'a'){
                s[i] = 'd';
                s[--i] = 'd';
            }else{
                s[i] = s[idx];
            }
        }
    }else{
        s.splice(idx,s.length-idx);
    }
    console.log(s.join(""));
}

//let s = "abcd";
//let s = "";
//let s = "acchjfirjk";
//let s = "dfjjibjklbbbbb";
//let s = "b";
//let s = "a";
let s = "ajklobb";
//let s = "acbbcbbcbb"; 
replace_and_remove(s);
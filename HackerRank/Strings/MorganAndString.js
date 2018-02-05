const assert = require('assert');

function morganAndString(a, b){
    let newString = "";
    let i = 0, j = 0;
    while( i < a.length && j < b.length){
        let nextString = "";
     
        if(a[i] < b[j]){
            nextString = a[i];
            i++;
        }else if(a[i] > b[j]){
            nextString = b[j];
            j++;
        }
        else { //if(a[i] === b[j]){
            let x = i, y = j;
            let aChar = a[x];
           for( x, y; x < a.length && y < b.length; x++, y++){
                if(a[x] !== b[y]){
                    break;
                }else{
                    if(a[x] > aChar){
                        nextString +=   a.substring(i, x) + b.substring(j, y);
                        i = x;
                        j = y;
                        aChar = a[i];
                    }
                }
            }
            if(x === a.length){
                nextString += b[j];
                j++;
            }else if(y === b.length){
                nextString += a[i];
                i++;
            }else{

                if(a[x] < b[y]){
                    nextString += a.substring(i,x);
                    i = x;
                }else if(a[x] > b[y]){
                    nextString += b.substring(j,y);
                    j = y;
                }
            }
        }
        newString += nextString;
    }
    while(i < a.length){
        newString += a[i];
        i++;
    }
    while(j < b.length){
        newString += b[j];
        j++;
    }
    return newString;
}

console.log(morganAndString("BAB", "BAC"));

assert.deepEqual(morganAndString("ABACABA", "ABACABA"), "AABABACABACABA");
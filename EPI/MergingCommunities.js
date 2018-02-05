

function processData(input) {
    let inputString = input.split("\n");
    let nq = inputString[0].split(" ").map(Number);
    let n = nq[0];
    let num_q = nq[1];
    //let ppl = [n];
    let commMap = new Map();
    
    
   
    for(let i = 1; i <= num_q; i++ ){
        let q = inputString[i].split(" ");
        let type = q[0];
        switch(type){
            case 'Q':
                let idx = Number.parseInt(q[1]);
                let com_size = getComSize(commMap, idx);
                console.log(com_size);
                //console.log(commSize[idx]);
                break;
            case 'M':
                let p1 = Number.parseInt(q[1]);
                let p2 = Number.parseInt(q[2]);
                addCom(commMap, p1, p2);
                break;
        }
    }
}

function addCom(commMap, p1,p2){
    let key1, key2;
    for(let [key, value] of commMap){
        if(value.has(p1)){
            key1 = key;
        }
        if(value.has(p2)){
            key2 = key;
        }
        if(key1 && key2){
            break;
        }
    }
    if(key1 && key2 && key1 === key2){
        return;
    }
    if(!key1 && !key2){
        
        let newSet = new Set();
        newSet.add(p1);
        newSet.add(p2);
        commMap.set(p1, newSet);
        return;
    }
    if((key1 && !key2) || (!key1 && key2)){ //if one of them is present in the list
        if(key1){
            commMap.get(key1).add(p2);
            return;
        }else{
            commMap.get(key2).add(p1);
            return;
        }
    }else{
         let new_set = commMap.get(key2);
         commMap.get(key1).forEach(function(value){
            new_set.add(value);
        });
        commMap.set(key1, new_set);
        commMap.delete(key2);
    }
}

function getComSize(commMap, idx){
    let commSize = 1;
    for(let [key, value] of commMap){
        if(key === idx){
            return value.size;
        }
        else if(value.has(idx)){
            return value.size;
        }
    }
    return commSize;
}
let input = "3 6\nQ 1\nM 1 2\nQ 2\nM 2 3\nQ 3\nQ 2";

processData(input);

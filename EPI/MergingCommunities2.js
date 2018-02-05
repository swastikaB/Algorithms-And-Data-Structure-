
function processData(input) {
    let inputString = input.split("\n");
    let nq = inputString[0].split(" ").map(Number);
    let n = nq[0];
    let num_q = nq[1];
    let myList = [];
    
    for(let i = 1; i <= num_q; i++ ){
        let q = inputString[i].split(" ");
        let type = q[0];
        switch(type){
            case 'Q':
                let idx = Number.parseInt(q[1]);
                let com_size = getComSize(myList, idx);
                console.log(com_size);
                break;
            case 'M':
                let p1 = Number.parseInt(q[1]);
                let p2 = Number.parseInt(q[2]);
                addCom(myList, p1, p2);
                break;
        }
    }
}

function addCom(myList, p1,p2){
    let key1, key2, idx1, idx2;
    for(let index = 0; index < myList.length; index++){
        let commMap = myList[index];
        for(let [key, value] of commMap){
            if(value.has(p1)){
                key1 = key;
                idx1 = index;
            }
            if(value.has(p2)){
                key2 = key;
                idx2 = index;
            }
            if(key1 && key2){
                break;
            }
        }
   
    if(key1 && key2 && key1 === key2){
        return;
    }
    //if both are not present in the list then add them
    if(!key1 && !key2){
        let newMap = new Map();
        let newSet = new Set();
        newSet.add(p1);
        newSet.add(p2);
        newMap.set(p1, newSet);
        myList.push(newMap);
        return;
    }
    if((key1 && !key2) || (!key1 && key2)){ //if one of them is present in the list
        if(key1){
            myList[idx1].get(key1).add(p2);
            return;
        }else{
            myList[idx2].get(key2).add(p1);
            return;
        }
    }else{
         let commMap2 = myList[idx2];
         let new_set = commMap2.get(key2);
         let commMap1 = myList[idx1];
         commMap1.get(key1).forEach(function(value){
            new_set.add(value);
        });
        commMap1.set(key1, new_set);
        commMap2.delete(key2);
        myList.splice(idx2, 1);
    }
}

function getComSize(myList, idx){
    let commSize = 1;
    myList.forEach(function(commMap){
        for(let [key, value] of commMap){
            if(key === idx){
                 commSize = value.size;
            }
            else if(value.has(idx)){
                commSize = value.size;
            }
        }
    });
    return commSize;
}

let input = "3 6\nQ 1\nM 1 2\nQ 2\nM 2 3\nQ 3\nQ 2";

processData(input);

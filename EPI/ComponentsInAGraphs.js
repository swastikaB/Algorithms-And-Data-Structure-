function process(input){
    let inputStringArray = input.split("\n");
    let n = Number.parseInt(inputStringArray[0]);
    let parent = new Array((2*n) + 1);
    let sizes = new Array((2*n) + 1);
   //sizes.fill(1,0,n);
    //sizes.fill(0, n+1, -1);
    sizes.fill(1);
    for(let j = 0; j < parent.length; j++){
        parent[j] = j;
    }
    for(let i = 1; i <= n; i++){
        let pairArray = (inputStringArray[i].split(" ")).map(Number); 
        let first = pairArray[0];
        let second = pairArray[1];
        union(first, second, parent, sizes);
    }
   
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let k = 1; k <= n ; k++){
        if(parent[k] === k){
            min = sizes[k] < min && sizes[k] > 1 ? sizes[k] : min;
            max = sizes[k] > max && sizes[k] > 1 ? sizes[k] : max;
        }
    }
    if(min === Number.MAX_VALUE){
        min = 0;
    }
    if(max === Number.MIN_VALUE){
        max = 0;
    }
    console.log(min  + " " + max);
}

function union(a, b, parent, sizes){
     let p1 = find(a, parent);
    let p2 = find(b, parent);

    if(p1 === p2){
        return;
    }

    if(sizes[p1] < sizes[p2]){
        parent[p1] = p2;
        sizes[p2] += sizes[p1];
        //sizes[p1] = 1;
    }else{
        parent[p2] = p1;
        sizes[p1] += sizes[p2];
        //sizes[p2] = 1;
    }
}

function find(elem, parentArray){
    if(parentArray[elem] !== elem){
        return find(parentArray[elem], parentArray);
        
    }
        return parentArray[elem];
    
}

//let input = "5\n1 6\n2 7\n3 8\n4 9\n2 6";
let input = "10\n1 17\n5 13\n7 12\n5 17\n5 12\n2 17\n1 18\n8 13\n2 15\n5 20";
process(input);
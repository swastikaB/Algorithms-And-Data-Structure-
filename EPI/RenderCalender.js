function Event( start, finish){
    this.start = start;
    this.finish = finish;
}

function EndPoint(time, typ){
    this.time = time;
    this.typ = typ;
}

let arr_events = [new Event(1, 1), new Event(0, 0), new Event(0, 0)];

function findMaxNumOfOverlappingEvents(arr_events){
    //convert events to endpoints
    let endpoints_arr = [];
    arr_events.forEach(function(val, idx){
        endpoints_arr.push(new EndPoint(val.start, "S"));
        endpoints_arr.push(new EndPoint(val.finish, "F"));
    });

    //sort endpoints
    endpoints_arr.sort(function(a, b){
        if(a.typ !== b.typ && a.time === b.time){
            return a.typ === "S" ? -1 : 1;
        }
        return a.time - b.time;
    })
    //calculate max
    let count = [];
    let sum = 0;
    let max = 0;
    for(let i = 0; i < endpoints_arr.length; i++){
         if(i > 0){
             sum = count[i-1];
         }
         if(endpoints_arr[i].typ ===  "S"){
            count[i] =   ++sum;
         }else{
             count[i] =   --sum;
         }
         max = max > count[i] ? max : count[i];
    }
    console.log(max);

}

findMaxNumOfOverlappingEvents(arr_events);
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    scores = readLine().split(' ');
    scores = scores.map(Number);
    var m = parseInt(readLine());
    alice = readLine().split(' ');
    alice = alice.map(Number);
    // your code goes here
    rank_scores = [];
    scores.forEach(function(val){
        if(rank_scores.indexOf(val) < 0){
            rank_scores.push(val)
        }
    });
    
    alice.forEach(function(val){
        let end = rank_scores.length - 1;
        let start = 0;
        let rank = 1;
        let mid = Math.floor(end/2);
        if(val >= rank_scores[start]){
             console.log("1");
            
        }else if(val < rank_scores[end]){
             rank = end + 2;
            console.log(rank);
            
        }else{
            while(start < end){
                let s = rank_scores[mid]
                if(val >= s){
                    if(val === mid){
                        rank = mid + 1;
                        console.log(rank);
                        break;
                    }
                    end = mid;
                    mid = Math.floor((start + mid) /2);
                }else{
                    start = mid;
                    mid = Math.floor((end + mid )/2);
                }
            }
            if(val < rank_scores[start] && val > rank_scores[end]){
                rank = start + 2;
                console.log(rank);
            }
        }
    });

}

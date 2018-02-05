

process.stdin.resume();
process.stdin.setEncoding("ascii");

_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

function processData(input) {
    //Enter your code here
    let input_lines = input.split("/n");
    let n = Number.parseInt(input_lines[0]);
    let arr = input_lines[1].map(Number);
    let arr_set = new Set();
    for(let i = 0; i < n; i++){
        arr_set.add(arr[i]);
    }
    let prod = 1;
    let m = arr_set.size();
    //n!/(r! (n-r)!)
    for(let x = m; x > (x-3); x--){
        
        prod *= x;
    }
    console.log(prod/6);
} 
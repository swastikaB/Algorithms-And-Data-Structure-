/* find the largest number whose square is less than or equal to the given number
e.g n = 300, then result = 17 as 17^2 = 289;
n = 16, then result = 4
*/
var count = 0;
function get_largest_integer_square_root(n, hi = n , lo = 0){
    console.log("iteration" + ++count);
    if(hi - lo === 1){
        return lo;
    }
    let mid = lo + (Math.floor((hi - lo) / 2));
    if(Math.pow(mid,2) === n){
        return mid;
    }
    else if(Math.pow(mid,2) > n){
        hi = mid;
    }else{
        lo = mid;
    }
    return get_largest_integer_square_root(n, hi, lo);   
}

console.log(get_largest_integer_square_root(300));
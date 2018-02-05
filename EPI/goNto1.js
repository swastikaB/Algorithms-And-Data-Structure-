/* give the least number of steps required to get 1 from n. 
you can perform "n-1", "n/2", "n/3".
*/
var p;
function find_num_of_steps(n){
    p = new Array(n + 1);
    p.fill(0);
    console.log(L(n));
}

function L(n){
    if(n === 1){
        return 0;
    }
    if(p[n] != 0){
        return p[n];
    }
    //p[n] = Number.MAX_VALUE;
    p[n] = 1 + L(n-1);
   if(n % 2 === 0){
       p[n] =  Math.min(p[n], 1 + L(n/2));
   }
   if(n % 3 === 0){
       p[n] = Math.min(p[n], 1 + L(n/3));
   }

   return p[n]; 
}

find_num_of_steps(41);
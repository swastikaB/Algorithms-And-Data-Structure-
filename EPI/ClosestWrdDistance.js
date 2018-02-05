/* 
Find the distance between the closest pairs of words 
e.g "All work and no play makes for no fun no work and no results" 
distance between no and no is the smallest and so return 2.
*/

function find_closest_word_pair_distance(sentence){
    let W = sentence.split(" ");
    let wrd_distance_map = new Map();
    //let min_dist = ;
    //let word = "";
    let result = {"min_dist" : Number.MAX_VALUE, "word" : ""};
    for(let i = 0; i < W.length; i++){
        if(wrd_distance_map.has(W[i])){
            let dist = i - wrd_distance_map.get(W[i]); //previous index - latest index
            result = result.min_dist > dist ? {"min_dist": dist, "word" : W[i]} : result;  
        }
         wrd_distance_map.set(W[i], i);
    }
    console.log(result);
}

let sentence = "All work and no play makes for no fun work and no results";
find_closest_word_pair_distance(sentence);

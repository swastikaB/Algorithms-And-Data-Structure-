/* given a dictionary of words, pair all anagrams together */
function pair_all_anagrams(A){
    let sorted_wrd_map = new Map();
    A.forEach(function(word) {
        let wrd_array = word.split("");
        let key = (wrd_array.sort()).join('');
        if(sorted_wrd_map.has(key)){
            sorted_wrd_map.get(key).push(word);
            //let val = sorted_wrd_map.get(key);
            //val.push(word);
            //sorted_wrd_map.set(key,val);
        }else{
            let val = [];
            val.push(word);
            sorted_wrd_map.set(key,val);
        }
    });

    sorted_wrd_map.forEach(function(value,key){
        console.log(value);
    });
}
let A = ['cat', 'act', 'god', 'dog', 'more', 'rome'];
pair_all_anagrams(A);
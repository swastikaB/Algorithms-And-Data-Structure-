/*find the start and end index of the smallest subarray of a
 given text that covers given keywords
 e.g text = " apple banana apple apple dog cat apple dog banana apple cat dog"
 keywords = [banana, cat];
 output = 5,8;
 */
function get_smallest_subarray(text, keywords){
    let T = text.split(" ");
    let keyword_count_map = new Map();
    let remaining_to_cover = 0;
    var index = {"start" : -1, "end": -1};
    keywords.forEach(function(ke) {
        let val = 0;
        if(keyword_count_map.has(ke)){
            let val = keyword_count_map.get(ke);
        }
        keyword_count_map.set(ke, ++val);
        remaining_to_cover++;
    });

    //let remaining_to_cover = keyword_count_map.size();
    for(let left = 0, right = 0; right < T.length; right++){
        if(keyword_count_map.has(T[right])){
            let count = keyword_count_map.get(T[right]);
                if(count > 0){
                    remaining_to_cover--;
                }
                count--;
                keyword_count_map.set(T[right],count);
        }
        
        while(remaining_to_cover === 0){
            if((index.start === -1  &&  index.end === -1) || right - left < index.end - index.start){
                index.start = left;
                index.end = right;
            }
            if(keyword_count_map.has(T[left])){
                let count = keyword_count_map.get(T[left]);
                if(count >= 0){
                     remaining_to_cover++;
                }
                count++;
                keyword_count_map.set(T[left],count);
               
            }
            left++;
        }
    }
    return index;

}
let text = "apple banana banana apple dog cat apple dog apple apple banana apple cat dog";
console.log(get_smallest_subarray(text,["dog","banana"]));
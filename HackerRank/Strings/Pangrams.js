//loop through each character in the sentence
//create a hashmap for character and number of occurance of that character
// if all characters in the word are repeated remove the word from the result
//return result

function pangram(s) {
    let charSet = new Set();
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        let regex = RegExp(/[a-z]/);
        if(s[i].match(regex))
            charSet.add(s[i]);
    }
    return charSet.size === 26 ? "pangram" : "not pangram";
}

console.log(pangram("We promptly judged antique ivory buckles for the next prize"));
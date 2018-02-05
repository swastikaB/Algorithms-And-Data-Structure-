function CaesarCipher (s, k){
    let newStringArray = [];
    for(let i = 0 ; i < s.length; i++){
        let letter = s.charCodeAt(i);
        if(letter >= 65 && letter <= 90){
            let newLetter = letter + k;
            while(newLetter > 90){
                newLetter = (newLetter % 90) + 64
            }
            console.log("newLetter" + newLetter);
            letter = newLetter;
         }
        else if (letter >= 97 && letter <= 122){
            console.log("letter = " + letter);
            let newLetter = letter + k;
            while(newLetter > 122){
                newLetter = (newLetter % 122) + 96
            }
             console.log("newLetter" + newLetter);
            letter = newLetter;

        }
        newStringArray.push(letter);
       
    }
    let resultStringArray = newStringArray.map((value) => String.fromCharCode(value));
    return resultStringArray.join('');
}

console.log(CaesarCipher("www.abc.xy", 87));
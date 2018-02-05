function camelCase(s) {
    if(s.length > 0){
        // Complete this function
        let regex = /[A-Z]/g;
        let letterArray = s.match(regex);
        console.log(letterArray);
        return letterArray ? letterArray.length + 1 : 1
    }
    return 0;
}


console.log(camelCase("id"));
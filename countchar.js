function countChar(string,ch){
    let counted = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] == ch){
            counted += 1;
        }
    }
    return counted;
}
console.log(countChar("acdc", "a"));
// не правильно
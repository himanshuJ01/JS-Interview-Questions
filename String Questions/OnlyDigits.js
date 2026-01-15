function Digits(str){
    let digit = /[0-9]/;
    for(let i=0 ; i<str.length-1 ; i++){
        if(!str[i].match(digit)){
            return false;
        }
    }
    return true;
}

console.log(Digits("1122"));
console.log(Digits("1a22"));
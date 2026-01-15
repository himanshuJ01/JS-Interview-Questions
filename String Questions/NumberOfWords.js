function NumberOfWords(str){
    let count = 0;
    let inWords = false;
    for(let i=0; i<str.length; i++){
        if(str[i]!==' ' && !inWords){
          count++;
          inWords = true;
        }
        else if(str[i] === " "){
          inWords = false;
        }
    }

    return count;
}

console.log(NumberOfWords("hello everyone !!"))

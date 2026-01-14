function Count(str){
    let vowels = /[aeiou]/;
    let vArray = [];
    let cArray = [];
    for(let i=0 ; i<str.length ; i++){
        if(str[i].match(vowels)){
            vArray.push(str[i]);
        }
        else{
            cArray.push(str[i])
        }
    }

    return ("Consonants "+cArray.length +","+ "Vowels "+vArray.length) 
}

console.log(Count("everyone"))
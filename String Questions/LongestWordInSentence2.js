function LongestWord(str){
    let longest = "";
    let current = "";

    for(let i=0; i<str.length;i++ ){
        let ch = str[i];

        if(ch !== " "){
            current+=ch;
        }
        else{
            if(current.length>longest.length){
                longest = current;
            }
            current ="";
        }
    }
    //last word check as space is not there after last word
    if(current.length>longest.length){
        longest = current;
    }
    return longest;
}
function CapatalizeFirstChar(str){
    let result = "";
    let capatalizeNext = true;

    for(let i=0; i<str.length;i++){
        let ch = str[i]
        if(ch ===" "){
            result+=ch;
            capatalizeNext = true;
        }
        else if(capatalizeNext){
            result+=ch.toUpperCase();
            capatalizeNext = false;
        }
        else{
            result+=ch;
        }
    }
    return result;
}
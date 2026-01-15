function Duplicate(str){
     if(str.length==1) return str;
     let count = {};
     let arr ="";
     for(let char of str){
        count[char] = (count[char]||0)+1;
     }

     for(let char of str){
        if(count[char] && count[char]==1){
           arr+=char
        }
     }

     return arr;
}

console.log(Duplicate("everyone"))
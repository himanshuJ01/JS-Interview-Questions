function Duplicate(str){
     if(str.length==1) return str;
     let seen = {};
     let arr ="";
     for(let char of str){
      if(!seen[char]){
         seen[char]=true;
         arr+=char;
      }
     }

     return arr;
}

console.log(Duplicate("everyone"))
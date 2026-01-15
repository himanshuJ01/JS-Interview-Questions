function FirstNonRepeatingChar(str){
   const count = {};
   //counting frequency----
   for(let char of str){
    count[char] = (count[char] || 0)+1;
   }

   //searching frequency 1 
   for(let char of str){
    if(count[char] === 1){
        return char;
    }
   }

   return null;
}

console.log(FirstNonRepeatingChar("hello"))
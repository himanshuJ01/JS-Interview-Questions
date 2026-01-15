function LongestWord(str){
    let s  =str.split(' ');
    let Max = s[0];
    for(let i = 0 ; i<s.length ; i++ ){
      if(s[i].length < s[i+1].length){
        Max = s[i+1];
      }
    }

    return Max;
}

console.log(LongestWord("hello everyone !!"))
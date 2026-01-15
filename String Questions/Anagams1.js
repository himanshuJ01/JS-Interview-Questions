function Anagams(str1,str){
    return str1.split('').sort().join('')===
    str.split('').sort().join('')
    
}
console.log(Anagams("loop",'pool'))
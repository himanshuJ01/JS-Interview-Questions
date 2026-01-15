function Duplicate(str){
    return [...new Set(str)].join('');
}

console.log(Duplicate("hello"))